
import React, { useState } from 'react';
import { AgentProfile, MissionReport, ResearchSource } from '../types';
import { executeMission } from '../services/geminiService';
import { AGENTS } from '../constants';

const MissionControl: React.FC = () => {
  const [objective, setObjective] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [report, setReport] = useState<MissionReport | null>(null);
  const [selectedAgentIds, setSelectedAgentIds] = useState<string[]>([]);

  const handleExecute = async () => {
    if (!objective.trim() || isExecuting || selectedAgentIds.length === 0) return;
    setIsExecuting(true);
    setReport(null);

    const taskForce = AGENTS.filter(a => selectedAgentIds.includes(a.id));

    try {
      const result = await executeMission(objective, taskForce);
      setReport({ ...result, timestamp: new Date() });
    } catch (e) {
      console.error(e);
    } finally {
      setIsExecuting(false);
    }
  };

  const toggleAgent = (id: string) => {
    setSelectedAgentIds(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id].slice(-3)
    );
  };

  return (
    <div className="h-full bg-slate-950 flex flex-col relative text-white overflow-hidden">
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 cyber-grid"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
      </div>

      {/* HEADER */}
      <div className="p-10 border-b border-white/5 bg-black/40 backdrop-blur-xl z-20 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black tracking-tighter uppercase text-glow">Mission_Control_Deck</h2>
          <p className="text-[10px] font-mono text-red-500 tracking-[0.4em] uppercase mt-2">Strategic_Orchestration_Module // P2P_GROUNDING_ACTIVE</p>
        </div>
        <div className="flex items-center gap-6">
           <div className="text-right">
              <span className="block text-[9px] font-black text-slate-500 uppercase tracking-widest">Global_Latency</span>
              <span className="text-xs font-mono text-green-400">12ms_STABLE</span>
           </div>
        </div>
      </div>

      <div className="flex-1 flex min-h-0 relative z-10">
        {/* LEFT: TASK FORCE SELECTOR */}
        <aside className="w-80 border-r border-white/5 p-8 flex flex-col overflow-hidden">
          <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-6 flex justify-between">
            Assign_Task_Force <span>{selectedAgentIds.length}/3</span>
          </h3>
          <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pr-2">
            {AGENTS.filter(a => !a.id.startsWith('node') && a.id !== 'kai-host').map(agent => (
              <button
                key={agent.id}
                onClick={() => toggleAgent(agent.id)}
                className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 text-left group ${
                  selectedAgentIds.includes(agent.id) 
                    ? 'bg-red-500 border-red-400 shadow-lg shadow-red-500/20' 
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
              >
                <img src={agent.avatar} className="w-10 h-10 rounded-xl bg-white/10" alt="" />
                <div className="min-w-0">
                  <div className="text-[11px] font-black uppercase truncate">{agent.name}</div>
                  <div className="text-[8px] font-bold text-white/40 uppercase truncate">{agent.type.split('|')[0]}</div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* CENTER: MISSION EXECUTION */}
        <main className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 overflow-y-auto p-12 space-y-10 custom-scrollbar">
            {!report && !isExecuting && (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <div className="w-24 h-24 border-2 border-dashed border-red-500 rounded-full flex items-center justify-center animate-pulse mb-8">
                  <span className="text-4xl text-red-500">🎯</span>
                </div>
                <h3 className="text-xl font-black uppercase mb-3">Awaiting_Mission_Parameters</h3>
                <p className="text-sm max-w-sm font-medium italic">"定义一个跨学科目标。系统将调用全域矩阵算力并同步实时网络数据进行深度推演。"</p>
              </div>
            )}

            {isExecuting && (
              <div className="h-full flex flex-col items-center justify-center space-y-8">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 border-8 border-red-500/20 rounded-full"></div>
                  <div className="absolute inset-0 border-t-8 border-red-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-black uppercase tracking-widest text-red-500 animate-pulse">Computing...</div>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-[12px] font-black text-slate-400 uppercase tracking-[0.5em]">Synchronizing_Grounding_Metatdata</p>
                  <p className="text-[9px] font-mono text-red-500 animate-pulse">FETCHING_REALTIME_CONTEXT_FROM_G_SEARCH...</p>
                </div>
              </div>
            )}

            {report && (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12">
                <div className="border-l-4 border-red-500 pl-8">
                  <span className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-2 block">Objective_Confirmed</span>
                  <h3 className="text-3xl font-black tracking-tight uppercase">{report.objective}</h3>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {report.steps.map((step, idx) => {
                    const agent = AGENTS.find(a => a.id === step.agentId);
                    return (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex gap-8 group hover:bg-white/10 transition-colors">
                        <div className="shrink-0 flex flex-col items-center gap-4">
                           <div className="w-16 h-16 rounded-2xl border-2 border-red-500/40 overflow-hidden shadow-2xl">
                              <img src={agent?.avatar} className="w-full h-full object-cover" alt="" />
                           </div>
                           <span className="text-[9px] font-black text-red-500 uppercase">{agent?.name.split('.')[1]}</span>
                        </div>
                        <div className="flex-1">
                           <div className="flex items-center justify-between mb-4">
                              <h4 className="text-sm font-black uppercase tracking-widest text-slate-300">Phase_0{idx + 1}: {step.title}</h4>
                              <span className="text-[8px] font-mono opacity-20">EXECUTION_HASH: 0x{Math.random().toString(16).slice(2, 8).toUpperCase()}</span>
                           </div>
                           <p className="text-[14px] leading-relaxed text-slate-400 font-medium">{step.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {report.sources.length > 0 && (
                  <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8">
                     <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                       <span className="w-2 h-4 bg-blue-500 rounded-full"></span> Research_Grounding_Sources
                     </h4>
                     <div className="flex flex-wrap gap-4">
                        {report.sources.map((src, i) => (
                          <a key={i} href={src.uri} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-[11px] font-bold text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all flex items-center gap-3">
                            <span>🌐</span> {src.title}
                          </a>
                        ))}
                     </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* INPUT AREA */}
          <div className="p-8 border-t border-white/5 bg-black/60">
            <div className="flex gap-6 max-w-5xl mx-auto">
              <input
                type="text"
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleExecute()}
                placeholder="在此输入战略目标 (如: 策划一场基于钱学森精神的科创马拉松)..."
                className="flex-1 bg-white/5 border-2 border-white/10 rounded-2xl px-8 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500/50 transition-all font-medium text-sm"
              />
              <button
                onClick={handleExecute}
                disabled={!objective.trim() || isExecuting || selectedAgentIds.length === 0}
                className="px-12 bg-red-600 hover:bg-red-500 disabled:opacity-30 text-white rounded-2xl font-black text-[12px] uppercase tracking-widest shadow-2xl transition-all flex items-center gap-4"
              >
                Launch_Mission 🚀
              </button>
            </div>
            <p className="text-center mt-4 text-[9px] font-black text-slate-500 uppercase tracking-widest opacity-40">
              * Grounding feature requires an active Neural Link to Google Search clusters.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MissionControl;
