
import React, { useState, useEffect } from 'react';
import { projectNeuralMemory, pollVideoOperation } from '../services/geminiService';

interface MemoryProjectorProps {
  context: string;
  onClose: () => void;
}

const MemoryProjector: React.FC<MemoryProjectorProps> = ({ context, onClose }) => {
  const [phase, setPhase] = useState<'initializing' | 'rendering' | 'ready' | 'error'>('initializing');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [statusText, setStatusText] = useState('正在同步神经元数据...');
  const [operation, setOperation] = useState<any>(null);

  const loadingMessages = [
    "提取视觉特征...",
    "正在通过 Veo 渲染多维空间...",
    "校准校园环境模型 (和平门校区)...",
    "注入光影动力学参数...",
    "正在进行跨时空像素编码...",
    "准备最后的视觉握手..."
  ];

  useEffect(() => {
    let msgIndex = 0;
    const interval = setInterval(() => {
      if (phase === 'rendering') {
        setStatusText(loadingMessages[msgIndex % loadingMessages.length]);
        msgIndex++;
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [phase]);

  const startProjection = async () => {
    try {
      // Check for billing / API key requirement for Veo
      if (!(window as any).aistudio.hasSelectedApiKey()) {
        await (window as any).aistudio.openSelectKey();
      }

      setPhase('rendering');
      const op = await projectNeuralMemory(context);
      setOperation(op);
    } catch (err) {
      console.error(err);
      setPhase('error');
    }
  };

  useEffect(() => {
    if (phase === 'initializing') {
      startProjection();
    }
  }, []);

  useEffect(() => {
    let pollInterval: number | null = null;

    if (operation && phase === 'rendering') {
      pollInterval = window.setInterval(async () => {
        try {
          const updatedOp = await pollVideoOperation(operation);
          if (updatedOp.done) {
            const downloadLink = updatedOp.response?.generatedVideos?.[0]?.video?.uri;
            if (downloadLink) {
              const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
              const blob = await response.blob();
              setVideoUrl(URL.createObjectURL(blob));
              setPhase('ready');
            } else {
              setPhase('error');
            }
            if (pollInterval) clearInterval(pollInterval);
          }
        } catch (e) {
          console.error("Polling failed", e);
          if (e.message?.includes("not found")) {
            // Reset if key issue
             (window as any).aistudio.openSelectKey();
          }
        }
      }, 10000);
    }

    return () => { if (pollInterval) clearInterval(pollInterval); };
  }, [operation, phase]);

  return (
    <div className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center p-12 backdrop-blur-3xl">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      <div className="w-full max-w-5xl aspect-video bg-slate-900 rounded-[3rem] border-4 border-white/5 relative overflow-hidden flex flex-col items-center justify-center shadow-[0_0_100px_rgba(0,0,0,1)]">
        
        {/* HUD UI */}
        <div className="absolute top-10 left-10 flex items-center gap-4">
           <div className="w-3 h-10 bg-red-600 rounded-full animate-pulse"></div>
           <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Neural_Memory_Projector</h2>
              <p className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-[0.3em]">Module_VE_3.1_ACTIVE</p>
           </div>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all z-50"
        >
          ✕
        </button>

        {phase === 'rendering' && (
          <div className="flex flex-col items-center gap-12 text-center">
             <div className="relative w-48 h-48">
                <div className="absolute inset-0 border-8 border-red-500/20 rounded-full"></div>
                <div className="absolute inset-0 border-t-8 border-red-600 rounded-full animate-spin"></div>
                <div className="absolute inset-4 bg-red-600/10 rounded-full animate-pulse flex items-center justify-center">
                   <span className="text-4xl">📽️</span>
                </div>
             </div>
             <div className="space-y-4">
                <p className="text-2xl font-black text-white tracking-widest uppercase animate-pulse">{statusText}</p>
                <p className="text-[10px] font-mono text-slate-500 max-w-md mx-auto leading-relaxed">
                  正在调用全域矩阵视觉算力。视频生成需要 1-3 分钟，请维持链路握手状态。
                </p>
             </div>
          </div>
        )}

        {phase === 'ready' && videoUrl && (
          <div className="w-full h-full flex flex-col animate-in fade-in zoom-in duration-1000">
             <div className="flex-1 relative group">
                <video 
                  src={videoUrl} 
                  autoPlay 
                  loop 
                  className="w-full h-full object-cover grayscale brightness-110 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20"></div>
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="flex justify-between items-end">
                      <div>
                         <span className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1 block">Memory_Hash_0x77AF2</span>
                         <h3 className="text-3xl font-black text-white uppercase tracking-tighter">视觉记忆投影已就绪</h3>
                      </div>
                      <a 
                        href={videoUrl} 
                        download="BNU_MATRIX_MEMORY.mp4"
                        className="px-8 py-3 bg-white text-slate-900 font-black text-[11px] rounded-2xl hover:bg-red-500 hover:text-white transition-all uppercase tracking-widest shadow-2xl"
                      >
                        存档到本地 ⬇
                      </a>
                   </div>
                </div>
             </div>
          </div>
        )}

        {phase === 'error' && (
          <div className="text-center space-y-8">
             <div className="text-6xl text-red-600">⚠️</div>
             <h3 className="text-2xl font-black text-white uppercase">视觉渲染管线塌陷</h3>
             <p className="text-slate-400 max-w-xs mx-auto text-sm">生成失败。这可能是由于算力配额不足或内容协议触发限制。请确保已选择付费项目的 API Key。</p>
             <button onClick={onClose} className="px-10 py-4 bg-red-600 rounded-2xl font-black text-xs uppercase tracking-widest">退出投影仪</button>
          </div>
        )}
      </div>

      {/* FOOTER DOC LINK */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
         <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="text-[10px] font-black text-slate-600 hover:text-red-500 uppercase tracking-widest transition-colors">
           * Veo 生成需要绑定付费项目的 API Key [查阅文档]
         </a>
      </div>
    </div>
  );
};

export default MemoryProjector;
