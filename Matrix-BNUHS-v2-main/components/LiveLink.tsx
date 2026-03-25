
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';
import { AgentProfile } from '../types';

interface LiveLinkProps {
  agent: AgentProfile;
  onClose: () => void;
}

const LiveLink: React.FC<LiveLinkProps> = ({ agent, onClose }) => {
  const [status, setStatus] = useState<'connecting' | 'active' | 'closed'>('connecting');
  const [transcription, setTranscription] = useState('');
  const [isInterrupted, setIsInterrupted] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  
  const inputContextRef = useRef<AudioContext | null>(null);
  const outputContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const streamRef = useRef<MediaStream | null>(null);
  const sessionRef = useRef<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameIntervalRef = useRef<number | null>(null);

  // Constants for vision
  const FRAME_RATE = 1; // 1 frame per second is recommended for Live API
  const JPEG_QUALITY = 0.5;

  const decode = (base64: string) => {
    const binaryString = window.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
    return bytes;
  };

  const encode = (bytes: Uint8Array) => {
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    return window.btoa(binary);
  };

  const decodeAudioData = async (data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> => {
    const dataInt16 = new Int16Array(data.buffer, data.byteOffset, data.byteLength / 2);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
    return buffer;
  };

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.readAsDataURL(blob);
    });
  };

  const createAudioBlob = (data: Float32Array) => {
    const int16 = new Int16Array(data.length);
    for (let i = 0; i < data.length; i++) int16[i] = data[i] * 32768;
    return {
      data: encode(new Uint8Array(int16.buffer, int16.byteOffset, int16.byteLength)),
      mimeType: 'audio/pcm;rate=16000',
    };
  };

  useEffect(() => {
    const initLiveSession = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
        const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        inputContextRef.current = inputCtx;
        outputContextRef.current = outputCtx;
        
        // Request both audio and video
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
        setIsCameraActive(true);

        const sessionPromise = ai.live.connect({
          model: 'gemini-2.5-flash-native-audio-preview-09-2025',
          config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
              voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Puck' } },
            },
            systemInstruction: `你是 ${agent.name}。你的性格：${agent.personality}。知识胶囊：${agent.knowledgeCapsule.name}。
            关键：你现在拥有“神经视觉”能力。你可以看到用户通过摄像头展示的内容（如书本、环境、手势）。
            请像真实的附中学生一样，敏捷地根据听到的声音和看到的图像做出反应。使用中文。`,
            outputAudioTranscription: {},
          },
          callbacks: {
            onopen: async () => {
              setStatus('active');
              await inputCtx.resume();
              await outputCtx.resume();

              // 1. Start Audio Streaming
              const audioSource = inputCtx.createMediaStreamSource(stream);
              const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
              scriptProcessor.onaudioprocess = (e) => {
                const inputData = e.inputBuffer.getChannelData(0);
                const pcmBlob = createAudioBlob(inputData);
                sessionPromise.then(session => session.sendRealtimeInput({ media: pcmBlob }));
              };
              audioSource.connect(scriptProcessor);
              scriptProcessor.connect(inputCtx.destination);

              // 2. Start Video/Vision Streaming
              frameIntervalRef.current = window.setInterval(() => {
                if (videoRef.current && canvasRef.current && sessionRef.current) {
                  const video = videoRef.current;
                  const canvas = canvasRef.current;
                  const ctx = canvas.getContext('2d');
                  if (ctx) {
                    canvas.width = 320; // Lower resolution for better latency
                    canvas.height = 240;
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    canvas.toBlob(async (blob) => {
                      if (blob) {
                        const base64Data = await blobToBase64(blob);
                        sessionPromise.then(session => {
                          session.sendRealtimeInput({
                            media: { data: base64Data, mimeType: 'image/jpeg' }
                          });
                        });
                      }
                    }, 'image/jpeg', JPEG_QUALITY);
                  }
                }
              }, 1000 / FRAME_RATE);
            },
            onmessage: async (message: LiveServerMessage) => {
              if (message.serverContent?.outputTranscription) {
                setTranscription(prev => prev + message.serverContent!.outputTranscription!.text);
              }
              if (message.serverContent?.turnComplete) setTranscription('');

              const parts = message.serverContent?.modelTurn?.parts || [];
              for (const part of parts) {
                if (part.inlineData?.data) {
                  const audioBuffer = await decodeAudioData(decode(part.inlineData.data), outputCtx, 24000, 1);
                  nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputCtx.currentTime);
                  const sourceNode = outputCtx.createBufferSource();
                  sourceNode.buffer = audioBuffer;
                  sourceNode.connect(outputCtx.destination);
                  sourceNode.start(nextStartTimeRef.current);
                  nextStartTimeRef.current += audioBuffer.duration;
                  sourcesRef.current.add(sourceNode);
                  sourceNode.onended = () => sourcesRef.current.delete(sourceNode);
                }
              }

              if (message.serverContent?.interrupted) {
                sourcesRef.current.forEach(s => { try { s.stop(); } catch(e) {} });
                sourcesRef.current.clear();
                nextStartTimeRef.current = 0;
                setIsInterrupted(true);
                setTimeout(() => setIsInterrupted(false), 1200);
              }
            },
            onclose: () => setStatus('closed'),
            onerror: () => setStatus('closed'),
          },
        });

        sessionRef.current = await sessionPromise;
      } catch (err) {
        console.error("Neural Link failed:", err);
        setStatus('closed');
      }
    };

    initLiveSession();

    return () => {
      if (frameIntervalRef.current) clearInterval(frameIntervalRef.current);
      streamRef.current?.getTracks().forEach(t => t.stop());
      sourcesRef.current.forEach(s => { try { s.stop(); } catch(e) {} });
      if (sessionRef.current) try { sessionRef.current.close(); } catch(e) {}
      inputContextRef.current?.close();
      outputContextRef.current?.close();
    };
  }, [agent]);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      {/* BACKGROUND SCANLINES */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none animate-pulse"></div>

      <div className="w-full max-w-6xl h-full flex flex-col items-center justify-between py-10 z-10">
        
        {/* TOP STATUS BAR */}
        <div className="w-full flex justify-between items-center px-12 opacity-50">
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black text-white uppercase tracking-[0.5em]">Neural_Vision_Active</span>
           </div>
           <div className="text-right">
              <span className="block text-[8px] font-mono text-slate-500 uppercase">Uplink_Node</span>
              <span className="text-xs font-mono text-white">0x{agent.id.slice(-6).toUpperCase()}</span>
           </div>
        </div>

        <div className="w-full flex-1 flex items-center justify-center gap-16 px-12">
           
           {/* LEFT: CAMERA PREVIEW (NEURAL VISION) */}
           <div className="w-1/3 flex flex-col items-center gap-6">
              <div className="relative group">
                 <div className="absolute -inset-4 border border-red-500/20 rounded-[3rem] animate-[spin_20s_linear_infinite] pointer-events-none"></div>
                 <div className="w-64 h-80 rounded-[2.5rem] bg-slate-900 border-4 border-slate-800 overflow-hidden relative shadow-2xl">
                    <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover grayscale brightness-125 contrast-125" />
                    <canvas ref={canvasRef} className="hidden" />
                    {/* HUD Overlay on Video */}
                    <div className="absolute inset-0 pointer-events-none">
                       <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-red-500/50"></div>
                       <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-red-500/50"></div>
                       <div className="absolute top-1/2 left-0 w-full h-px bg-red-500/10 animate-scan"></div>
                    </div>
                 </div>
                 <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-800 text-white text-[9px] font-black rounded-full uppercase tracking-widest border border-slate-700">
                    User_Vision_Buffer
                 </div>
              </div>
           </div>

           {/* CENTER: AGENT AVATAR & VISUALIZER */}
           <div className="w-1/3 flex flex-col items-center gap-10">
              <div className="relative">
                 <div className={`w-56 h-56 rounded-[4rem] border-4 p-2 transition-all duration-700 ${status === 'active' ? 'border-red-500 scale-110 shadow-[0_0_80px_rgba(244,63,94,0.3)]' : 'border-slate-800 opacity-30 grayscale'}`}>
                    <img src={agent.avatar} className="w-full h-full object-cover rounded-[3.5rem]" alt="" />
                 </div>
                 <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-xl shadow-2xl animate-bounce">
                    🛰️
                 </div>
              </div>

              <div className="w-full flex items-end justify-center gap-1.5 h-24">
                 {Array.from({ length: 24 }).map((_, i) => (
                   <div 
                     key={i} 
                     className={`w-2 rounded-full transition-all duration-300 ${status === 'active' ? 'bg-red-500' : 'bg-slate-800'}`}
                     style={{ 
                       height: status === 'active' ? `${20 + Math.random() * 80}%` : '4px',
                       opacity: 0.4 + Math.random() * 0.6,
                       animation: status === 'active' ? `pulse-soft ${0.3 + Math.random()}s infinite` : 'none',
                       animationDelay: `${i * 40}ms`
                     }}
                   />
                 ))}
              </div>
           </div>

           {/* RIGHT: AGENT INFO & BIO */}
           <div className="w-1/3 text-left space-y-6">
              <div>
                 <h2 className="text-5xl font-black text-white tracking-tighter uppercase leading-none mb-4">{agent.name}</h2>
                 <div className="flex gap-2">
                    <span className="px-3 py-1 bg-red-500 text-white text-[9px] font-black rounded-lg uppercase tracking-widest">{agent.type.split('|')[0]}</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-400 text-[9px] font-mono rounded-lg">ID_0x{agent.id.slice(-4).toUpperCase()}</span>
                 </div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Logic_Identity</p>
                 <p className="text-sm text-slate-300 leading-relaxed italic">"{agent.personality}"</p>
              </div>
           </div>
        </div>

        {/* TRANSCRIPTION FOOTER */}
        <div className="w-full max-w-4xl flex flex-col items-center gap-8">
           <div className={`min-h-[80px] text-2xl font-bold tracking-tight text-center px-10 transition-all duration-300 ${isInterrupted ? 'text-red-500 animate-pulse' : 'text-slate-300'}`}>
              {isInterrupted ? "[! 神经干扰：正在同步视觉反馈 !]" : (transcription || "正在同步多模态数据流...")}
           </div>

           <button 
             onClick={onClose}
             className="w-24 h-24 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center text-3xl shadow-[0_0_60px_rgba(220,38,38,0.5)] transition-all hover:scale-110 active:scale-95 group relative"
           >
              <div className="absolute inset-0 border-4 border-white/10 rounded-full animate-ping pointer-events-none"></div>
              <span className="group-hover:rotate-90 transition-transform inline-block">✕</span>
           </button>
        </div>

      </div>
    </div>
  );
};

export default LiveLink;
