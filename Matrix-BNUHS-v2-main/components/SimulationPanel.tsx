
import React, { useState, useRef, useEffect } from 'react';
import { AgentProfile, SimMessage } from '../types';
import { runSimulation } from '../services/geminiService';
import { SCHOOL_CONFIG } from '../config/schoolConfig';
import MemoryProjector from './MemoryProjector';

interface SimulationPanelProps {
  agents: AgentProfile[];
  orchestratorName?: string;
}

const SimulationPanel: React.FC<SimulationPanelProps> = ({ agents, orchestratorName = "Kai" }) => {
  const [history, setHistory] = useState<SimMessage[]>([]);
  const [location, setLocation] = useState("附中全域矩阵 (和平门)");
  const [time, setTime] = useState(SCHOOL_CONFIG.defaultSim.time);
  const [eventInput, setEventInput] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);
  const [showProjector, setShowProjector] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isSimulating]);

  const triggerStep = async (event: string = '') => {
    if (isSimulating) return;
    setIsSimulating(true);

    const selectedParticipants = [...agents].sort(() => 0.5 - Math.random()).slice(0, 5);

    try {
      const results = await runSimulation(
        "附中全球矩阵", 
        time, 
        selectedParticipants, 
        event || "全域讨论正在进行...", 
        history,
        orchestratorName
      );
      const formattedTurns: SimMessage[] = results.dialogue.map((t: any) => ({
        agentId: t.agentId,
        agentName: agents.find(a => a.id === t.agentId)?.name || '未知智能体',
        content: t.content,
        timestamp: new Date()
      }));

      setHistory(prev => [...prev, ...formattedTurns]);
      setEventInput('');
    } catch (e) {
      console.error(e);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 relative">
      {showProjector && (
        <MemoryProjector 
          context={history.map(h => `${h.agentName}: ${h.content}`).join('\n')} 
          onClose={() => setShowProjector(false)} 
        />
      )}

      {/* Simulation Header with Environmental Data */}
      <div className="p-6 bg-black/40 border-b border-white/5 flex items-center justify-between z-30 shadow-2xl backdrop-blur-md">
        <div className="flex gap-10 items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 text-xl">🌐</div>
            <div>
              <span className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em] block mb-0.5">Matrix_Coordinate</span>
              <span className="text-sm font-black text-white">{location}</span>
            </div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 text-xl">🕒</div>
            <div>
              <span className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em] block mb-0.5">Chronos_Sync</span>
              <span className="text-sm font-black text-white tabular-nums">{time}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
           {history.length > 3 && (
             <button 
              onClick={() => setShowProjector(true)}
              className="px-5 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-red-600/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
             >
                📽️ Project_Memory
             </button>
           )}
           <button 
             onClick={() => setHistory([])} 
             className="text-[10px] text-slate-400 font-black hover:text-white px-4 py-2 rounded-xl transition-all uppercase tracking-widest border border-white/10 hover:border-white/30"
           >
             Purge_Matrix
           </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-12 space-y-12 custom-scrollbar relative z-10">
        {history.length === 0 && !isSimulating && (
          <div className="h-full flex flex-col items-center justify-center text-center py-20">
            <div className="w-32 h-32 mb-10 relative">
               <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl animate-pulse"></div>
               <div className="relative w-full h-full border-4 border-dashed border-red-500/30 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite]">
                  <span className="text-5xl">🌍</span>
               </div>
            </div>
            <h3 className="text-2xl font-black text-white tracking-tighter mb-4 uppercase">World_Matrix_Simulation_Ready</h3>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed font-medium italic">
              "全域监控协议已准备就绪。注入一个影响整个附中的事件，观察多智能体节点如何在全局尺度下进行逻辑分发。"
            </p>
          </div>
        )}

        {history.map((msg, i) => {
          const agent = agents.find(a => a.id === msg.agentId);
          return (
            <div key={i} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-500">
                  <img src={agent?.avatar} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-black text-white text-base tracking-tight">{msg.agentName}</span>
                    <span className="text-[9px] text-red-500 bg-red-500/10 px-2 py-0.5 rounded font-black border border-red-500/20 tracking-widest uppercase">{agent?.type.split('|')[0]}</span>
                    <span className="text-[9px] font-mono text-slate-500 ml-auto">TS_NODE_SYNC</span>
                  </div>
                  <div className="relative text-slate-300 text-[15px] leading-relaxed p-8 rounded-[2rem] rounded-tl-none bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm group-hover:border-red-500/30 transition-colors">
                    <div className="absolute top-4 right-6 opacity-5 font-black text-6xl italic select-none">NODE</div>
                    {msg.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {isSimulating && (
          <div className="flex justify-start items-center gap-6 ml-24 py-8">
             <div className="flex gap-1.5">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-2.5 h-2.5 bg-red-500 rounded-full animate-bounce shadow-[0_0_12px_rgba(244,63,94,0.6)]" style={{ animationDelay: `${i * 200}ms` }}></div>
                ))}
             </div>
             <span className="text-[11px] font-black text-slate-500 tracking-[0.6em] uppercase italic">Orchestrating_Global_Resonance...</span>
          </div>
        )}
      </div>

      {/* Control Input - Dark HUD Version */}
      <div className="p-8 bg-black/60 border-t border-white/10 z-40">
        <div className="flex gap-6 max-w-6xl mx-auto">
          <div className="flex-1 relative group">
            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-red-500 font-black text-[10px] opacity-60 tracking-widest uppercase">Global_Event</div>
            <input 
              type="text"
              value={eventInput}
              onChange={(e) => setEventInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && triggerStep(eventInput)}
              placeholder="注入一个全域事件 (如: 附中百年校庆灵感脉冲)..."
              className="w-full bg-white/5 border-2 border-white/10 rounded-3xl pl-36 pr-10 py-5 text-white text-sm focus:outline-none focus:border-red-500/50 focus:bg-white/10 focus:ring-8 focus:ring-red-500/5 transition-all font-medium"
            />
          </div>
          <button 
            onClick={() => triggerStep(eventInput)}
            disabled={isSimulating}
            className="px-12 bg-white text-slate-900 hover:bg-red-500 hover:text-white disabled:opacity-30 rounded-3xl font-black text-[11px] tracking-[0.4em] uppercase shadow-2xl transition-all flex items-center gap-4 shrink-0"
          >
            Compute <span>⚡</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimulationPanel;
