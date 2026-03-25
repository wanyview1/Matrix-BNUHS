
import React, { useState, useRef, useEffect } from 'react';
import { AGENTS } from '../constants';
import { AgentProfile, SimMessage, KnowledgeCapsule, Ecosystem } from '../types';
import { runSimulation } from '../services/geminiService';
import { SCHOOL_CONFIG } from '../config/schoolConfig';

interface SalonPanelProps {
  activeEco: Ecosystem;
  onCapsuleHarvest: (cap: KnowledgeCapsule) => void;
  orchestratorName?: string;
}

const SalonPanel: React.FC<SalonPanelProps> = ({ activeEco, onCapsuleHarvest, orchestratorName = "Kai" }) => {
  const [history, setHistory] = useState<SimMessage[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [event, setEvent] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const participants = AGENTS.filter(a => activeEco.participants.includes(a.id));

  useEffect(() => {
    setHistory([]);
  }, [activeEco]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history, isSimulating]);

  const triggerSalonStep = async () => {
    const trimmedEvent = event.trim();
    if (isSimulating) return;
    setIsSimulating(true);

    try {
      const results = await runSimulation(
        activeEco.name, 
        SCHOOL_CONFIG.defaultSim.time, 
        participants, 
        trimmedEvent || `讨论正在 ${activeEco.name} 环境中展开...`, 
        history,
        orchestratorName
      );

      const formatted = results.dialogue.map((d: any) => ({
        agentId: d.agentId,
        agentName: AGENTS.find(a => a.id === d.agentId)?.name || d.agentId,
        content: d.content,
        timestamp: new Date()
      }));

      setHistory(prev => [...prev, ...formatted]);

      if (results.harvestedCapsule) {
        onCapsuleHarvest(results.harvestedCapsule);
      }

      setEvent('');
    } catch (e) {
      console.error(e);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* 1. ECOSYSTEM PERMANENT HEADER */}
      <div className="p-6 bg-slate-900 text-white flex justify-between items-center z-30 shrink-0 shadow-2xl">
        <div className="flex items-center gap-6">
           <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
             {activeEco.icon}
           </div>
           <div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-black tracking-tight uppercase">{activeEco.name}</span>
                <span className="text-[10px] font-mono text-red-500 font-bold border border-red-500/30 px-2 py-0.5 rounded">{activeEco.code}</span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium italic mt-0.5">"{activeEco.description}"</p>
           </div>
        </div>
        <div className="flex -space-x-2">
           {participants.slice(0, 5).map(a => (
             <div key={a.id} className="w-10 h-10 rounded-xl border-2 border-slate-800 shadow-xl overflow-hidden ring-2 ring-slate-900/50 group transition-all hover:translate-y-[-4px] hover:z-50">
               <img src={a.avatar} className="w-full h-full object-cover" alt={a.name} />
             </div>
           ))}
        </div>
      </div>

      {/* 2. DYNAMIC MEDIA & HONORS AREA */}
      <div className="bg-slate-50/50 border-b border-slate-100 z-20 shrink-0 overflow-hidden">
        <div className="flex divide-x divide-slate-100">
           {activeEco.visualAssets && activeEco.visualAssets.length > 0 && (
             <div className={`p-6 ${activeEco.honors ? 'w-2/3' : 'w-full'}`}>
               <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Visual_Assets_Archive</h3>
               </div>
               <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                  {activeEco.visualAssets.map((asset, i) => (
                    <div key={i} className="flex-shrink-0 w-64 group relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-video bg-slate-200 hover:border-red-500/20 transition-all">
                       <img src={asset.url} alt={asset.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                          <span className="text-white font-black text-[10px] mb-0.5 uppercase tracking-wide">{asset.title}</span>
                          <p className="text-white/60 text-[8px] leading-tight line-clamp-1">{asset.description}</p>
                       </div>
                    </div>
                  ))}
               </div>
             </div>
           )}

           {activeEco.honors && activeEco.honors.length > 0 && (
             <div className={`p-6 ${activeEco.visualAssets ? 'w-1/3' : 'w-full'}`}>
               <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ecosystem_Honors</h3>
               </div>
               <div className="flex flex-col gap-3 overflow-y-auto max-h-[140px] pr-2 custom-scrollbar">
                  {activeEco.honors.map((honor, i) => (
                    <div key={i} className="p-3 bg-white rounded-xl border border-blue-100 shadow-sm flex items-center gap-3 group hover:border-blue-500/30 transition-all">
                       <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm shadow-lg">🏆</div>
                       <div className="min-w-0">
                          <span className="block text-[7px] font-black text-blue-400 uppercase leading-none mb-1">{honor.year}</span>
                          <h4 className="text-[10px] font-black text-slate-800 leading-tight truncate">{honor.title}</h4>
                          <p className="text-[8px] font-bold text-slate-400 truncate">{honor.rank}</p>
                       </div>
                    </div>
                  ))}
               </div>
             </div>
           )}
        </div>
      </div>

      {/* 3. SIMULATION CONTEXT AREA */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar bg-white relative">
        {history.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-16">
            <div className="relative mb-8">
               <div className="absolute inset-0 bg-slate-100 rounded-full animate-ping opacity-30"></div>
               <div className="relative w-20 h-20 bg-slate-50 rounded-full border-4 border-dashed border-slate-100 flex items-center justify-center">
                 <span className="text-4xl animate-soft-pulse">{activeEco.icon}</span>
               </div>
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-2 uppercase">Ready_for_Simulation</h3>
            <p className="text-xs text-slate-400 max-w-sm font-medium italic leading-relaxed">
              "已成功连接到 {activeEco.name}。所有子系统协议、校史数据及荣誉档案已挂载。请注入突发话题或变量开始模拟演化。"
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {history.map((msg, i) => {
              const agent = AGENTS.find(a => a.id === msg.agentId);
              return (
                <div key={i} className="animate-in fade-in slide-in-from-bottom-6 duration-700">
                   <div className="flex gap-8 items-start">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl border-2 border-white flex-shrink-0 bg-slate-100 transition-transform hover:scale-105">
                        <img src={agent?.avatar} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2.5">
                           <span className="text-sm font-black text-slate-900">{msg.agentName}</span>
                           <span className="text-[8px] font-black text-red-500 bg-red-50 px-2 py-0.5 rounded-lg border border-red-100 tracking-widest uppercase">{agent?.type.split('|')[0]}</span>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-[1.5rem] rounded-tl-none text-[14px] text-slate-700 leading-relaxed border border-slate-100 shadow-sm relative group hover:bg-slate-100 transition-colors">
                          <div className="absolute top-4 right-6 opacity-5 font-black text-5xl italic select-none">NODE</div>
                          {msg.content}
                        </div>
                      </div>
                   </div>
                </div>
              );
            })}
          </div>
        )}

        {isSimulating && (
          <div className="flex justify-start items-center gap-4 ml-20 py-4">
             <div className="flex gap-1">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{animationDelay:`${i*200}ms`}}></div>
                ))}
             </div>
             <span className="text-[10px] font-black text-slate-400 tracking-[0.4em] uppercase italic">Orchestrating_Simulation...</span>
          </div>
        )}
      </div>

      {/* 4. INJECTION CONTROLS */}
      <div className="p-8 bg-white border-t border-slate-100 shadow-2xl z-40 shrink-0">
        <div className="flex gap-4 max-w-5xl mx-auto">
           <div className="flex-1 relative group">
             <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity">
                <span className="text-[10px] font-black text-red-500 tracking-widest uppercase">PROMPT_INJECT</span>
             </div>
             <input 
               type="text" 
               value={event}
               onChange={(e) => setEvent(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' && triggerSalonStep()}
               placeholder={`注入一个关于 ${activeEco.name} 的变量 (如: 讨论全息物理实验的最新突破)...`}
               className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-32 pr-10 py-4 text-sm focus:outline-none focus:border-red-500/50 focus:bg-white focus:ring-4 focus:ring-red-500/5 transition-all font-medium"
             />
           </div>
           <button 
             onClick={triggerSalonStep}
             disabled={isSimulating}
             className="px-10 bg-slate-900 hover:bg-black disabled:opacity-30 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-xl transition-all flex items-center gap-3 shrink-0"
           >
             Inject <span>⚡</span>
           </button>
        </div>
      </div>
    </div>
  );
};

export default SalonPanel;
