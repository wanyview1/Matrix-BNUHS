
import React, { useState, useRef } from 'react';
import { KnowledgeCapsule, SyntheticParadigm } from '../types';
import { synthesizeParadigm, generateParadigmVisual, generateAudioBriefing, decodePCM } from '../services/geminiService';

interface SynthesisLabProps {
  availableCapsules: KnowledgeCapsule[];
  onParadigmCreated: (paradigm: SyntheticParadigm) => void;
}

const SynthesisLab: React.FC<SynthesisLabProps> = ({ availableCapsules, onParadigmCreated }) => {
  const [slotA, setSlotA] = useState<KnowledgeCapsule | null>(null);
  const [slotB, setSlotB] = useState<KnowledgeCapsule | null>(null);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [result, setResult] = useState<SyntheticParadigm | null>(null);
  const [visualUrl, setVisualUrl] = useState<string | null>(null);
  const [renderProgress, setRenderProgress] = useState(0);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);

  const handleSynthesize = async () => {
    if (!slotA || !slotB || isSynthesizing) return;
    setIsSynthesizing(true);
    setResult(null);
    setVisualUrl(null);
    setRenderProgress(10);

    try {
      const data = await synthesizeParadigm(slotA, slotB);
      setRenderProgress(40);
      
      const newParadigm: SyntheticParadigm = {
        ...data,
        id: `synth-${Date.now()}`,
        parentIds: [slotA.id, slotB.id],
        syntheticDate: new Date()
      };
      setResult(newParadigm);

      setRenderProgress(60);
      const imageUrl = await generateParadigmVisual(newParadigm.name, newParadigm.professionalExplanation);
      setVisualUrl(imageUrl);
      setRenderProgress(100);

      onParadigmCreated(newParadigm);
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => {
        setIsSynthesizing(false);
        setRenderProgress(0);
      }, 500);
    }
  };

  const handleAudioBriefing = async () => {
    if (!result || isAudioLoading) return;
    
    // Stop any existing playback
    if (sourceNodeRef.current) {
      sourceNodeRef.current.stop();
      setIsPlaying(false);
    }

    setIsAudioLoading(true);
    try {
      const audioData = await generateAudioBriefing(result.name, result.professionalExplanation);
      if (audioData) {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        const buffer = await decodePCM(audioData, audioContextRef.current);
        const source = audioContextRef.current.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContextRef.current.destination);
        source.onended = () => setIsPlaying(false);
        source.start();
        sourceNodeRef.current = source;
        setIsPlaying(true);
      }
    } catch (e) {
      console.error("Audio briefing failed", e);
    } finally {
      setIsAudioLoading(false);
    }
  };

  const clearSlots = () => {
    if (sourceNodeRef.current) sourceNodeRef.current.stop();
    setSlotA(null);
    setSlotB(null);
    setResult(null);
    setVisualUrl(null);
    setIsPlaying(false);
  };

  return (
    <div className="h-full bg-slate-50 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="p-10 z-10 flex justify-between items-start">
        <div>
           <div className="flex items-center gap-4 mb-2">
              <div className="w-2 h-8 bg-red-600 rounded-full animate-pulse"></div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Synthesis_Reactor_v2.0</h2>
           </div>
           <p className="text-[10px] text-slate-400 font-black tracking-[0.4em] uppercase ml-6">Visual_&_Audio_Manifestation_Active</p>
        </div>
        {isSynthesizing && (
          <div className="w-64 text-right">
             <div className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-2">Neural_Rendering: {renderProgress}%</div>
             <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 transition-all duration-500" style={{ width: `${renderProgress}%` }}></div>
             </div>
          </div>
        )}
      </div>

      <div className="flex-1 flex items-center justify-around px-20 relative z-10">
        <div className="flex flex-col items-center gap-6">
           <div 
             onClick={() => !isSynthesizing && setSlotA(null)}
             className={`w-48 h-48 rounded-[3rem] border-4 border-dashed flex flex-col items-center justify-center transition-all cursor-pointer relative ${
               slotA ? 'border-red-500 bg-white shadow-2xl scale-110' : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
             }`}
           >
              {slotA ? (
                <>
                  <span className="text-4xl mb-3">🧪</span>
                  <span className="text-[11px] font-black text-slate-900 uppercase text-center px-4">{slotA.name}</span>
                  {!isSynthesizing && <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-black shadow-lg">✕</div>}
                </>
              ) : (
                <span className="text-slate-300 font-black text-[10px] tracking-widest uppercase">Select_Input_A</span>
              )}
           </div>
        </div>

        <div className="relative flex items-center justify-center">
           <div className={`w-80 h-80 rounded-full border-8 border-slate-900/5 flex flex-col items-center justify-center relative transition-all duration-1000 ${isSynthesizing ? 'scale-110' : ''}`}>
              <div className={`absolute inset-0 border-4 border-dashed border-red-500/20 rounded-full animate-[spin_20s_linear_infinite] ${isSynthesizing ? 'border-red-500 opacity-100' : 'opacity-30'}`}></div>
              
              {result && visualUrl ? (
                 <div className="text-center p-4 animate-in zoom-in duration-700">
                    <div className={`w-44 h-44 rounded-3xl border-4 border-red-500/30 overflow-hidden shadow-[0_0_50px_rgba(244,63,94,0.3)] mx-auto mb-4 relative group transition-all duration-500 ${isPlaying ? 'scale-110 ring-8 ring-red-500/10' : ''}`}>
                       <img src={visualUrl} alt={result.name} className={`w-full h-full object-cover transition-all ${isPlaying ? 'animate-pulse' : ''}`} />
                       <div className="absolute inset-0 bg-gradient-to-t from-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button onClick={handleAudioBriefing} disabled={isAudioLoading} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                             {isAudioLoading ? "..." : "▶"}
                          </button>
                       </div>
                    </div>
                    
                    {/* Audio Player HUD (NEW) */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex gap-1 items-center h-4">
                        {isPlaying ? Array.from({length: 8}).map((_, i) => (
                          <div key={i} className="w-1 bg-red-500 rounded-full animate-bounce" style={{height: `${Math.random()*100}%`, animationDelay: `${i*0.1}s`}}></div>
                        )) : <div className="h-0.5 w-16 bg-slate-200 rounded-full"></div>}
                      </div>
                      <button 
                        onClick={handleAudioBriefing}
                        disabled={isAudioLoading}
                        className={`text-[9px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors ${isPlaying ? 'text-red-500' : 'text-slate-400 hover:text-slate-900'}`}
                      >
                         {isAudioLoading ? "正在解析神经音频..." : isPlaying ? "正在广播逻辑简报" : "生成音频报告 [PODCAST]"}
                      </button>
                    </div>
                 </div>
              ) : isSynthesizing ? (
                 <div className="text-center animate-pulse">
                    <span className="text-4xl mb-4 block">⚛️</span>
                    <span className="text-[12px] font-black text-red-500 tracking-[0.4em] uppercase">Manifesting...</span>
                 </div>
              ) : (
                <button 
                  onClick={handleSynthesize}
                  disabled={!slotA || !slotB}
                  className="w-32 h-32 rounded-full bg-slate-900 text-white font-black text-[12px] uppercase tracking-widest hover:scale-110 hover:bg-black transition-all shadow-2xl active:scale-95 z-50 disabled:opacity-20"
                >
                  Hybridize
                </button>
              )}
           </div>
        </div>

        <div className="flex flex-col items-center gap-6">
           <div 
             onClick={() => !isSynthesizing && setSlotB(null)}
             className={`w-48 h-48 rounded-[3rem] border-4 border-dashed flex flex-col items-center justify-center transition-all cursor-pointer relative ${
               slotB ? 'border-red-500 bg-white shadow-2xl scale-110' : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
             }`}
           >
              {slotB ? (
                <>
                  <span className="text-4xl mb-3">⚡</span>
                  <span className="text-[11px] font-black text-slate-900 uppercase text-center px-4">{slotB.name}</span>
                  {!isSynthesizing && <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-black shadow-lg">✕</div>}
                </>
              ) : (
                <span className="text-slate-300 font-black text-[10px] tracking-widest uppercase">Select_Input_B</span>
              )}
           </div>
        </div>
      </div>

      <div className="h-64 bg-white border-t-8 border-slate-900/5 p-8 flex flex-col z-20">
        <div className="flex justify-between items-center mb-6">
           <div className="flex items-center gap-3">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Available_Knowledge_Assets</span>
              <span className="text-[10px] font-mono text-red-500 font-black px-2 py-0.5 bg-red-50 rounded">COUNT: {availableCapsules.length}</span>
           </div>
           {result && (
             <button onClick={clearSlots} className="text-[10px] font-black text-slate-400 hover:text-red-500 uppercase tracking-widest underline">Clear_Reactor</button>
           )}
        </div>
        <div className="flex-1 overflow-x-auto flex gap-4 no-scrollbar pb-2">
           {availableCapsules.map((cap, i) => {
             const isSelected = slotA?.id === cap.id || slotB?.id === cap.id;
             return (
               <button
                 key={`${cap.id}-${i}`}
                 disabled={isSelected || isSynthesizing}
                 onClick={() => {
                   if (!slotA) setSlotA(cap);
                   else if (!slotB) setSlotB(cap);
                 }}
                 className={`flex-shrink-0 w-64 p-5 rounded-[2rem] border-2 transition-all flex flex-col justify-between text-left group ${
                   isSelected ? 'opacity-30 grayscale cursor-not-allowed border-slate-100' : 'border-slate-100 hover:border-red-500/30 hover:bg-slate-50 shadow-sm'
                 }`}
               >
                 <div className="flex justify-between items-start mb-2">
                    <span className="text-xl">💿</span>
                    <span className="text-[7px] font-mono font-black text-slate-300">0x{cap.id.slice(-4)}</span>
                 </div>
                 <div>
                    <h4 className="text-[11px] font-black text-slate-900 uppercase mb-1 line-clamp-1">{cap.name}</h4>
                    <p className="text-[8px] text-slate-400 font-bold line-clamp-2 leading-tight uppercase">{cap.professionalExplanation}</p>
                 </div>
               </button>
             );
           })}
        </div>
      </div>
    </div>
  );
};

export default SynthesisLab;
