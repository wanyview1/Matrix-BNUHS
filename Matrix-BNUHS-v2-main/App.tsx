
import React, { useState, useEffect } from 'react';
import { AGENTS, ECOSYSTEMS, SCENARIOS } from './constants';
import { AgentProfile, KnowledgeCapsule, Ecosystem, Scenario, SyntheticParadigm } from './types';
import { SCHOOL_CONFIG } from './config/schoolConfig';
import AgentCard from './components/AgentCard';
import SalonPanel from './components/SalonPanel';
import ChatInterface from './components/ChatInterface';
import KnowledgeBank from './components/KnowledgeBank';
import SimulationPanel from './components/SimulationPanel';
import ScenarioVisualizer from './components/ScenarioVisualizer';
import SynthesisLab from './components/SynthesisLab';
import MissionControl from './components/MissionControl';
import LiveLink from './components/LiveLink';
import GeospatialView from './components/GeospatialView';
import KnowledgeSalonPanel from './components/KnowledgeSalonPanel';
import { getAllScenarios } from './components/KnowledgeSalonScenarios';

const App: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<AgentProfile>(AGENTS[1]); 
  const [activeEcosystem, setActiveEcosystem] = useState<Ecosystem>(ECOSYSTEMS[0]);
  const [activeScenario, setActiveScenario] = useState<Scenario>(SCENARIOS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [mode, setMode] = useState<'chat' | 'ecosystem' | 'world' | 'scene' | 'synthesis' | 'mission' | 'geospatial' | 'knowledge-salon'>('world');
  const [isLiveLinkOpen, setIsLiveLinkOpen] = useState(false);
  const [harvestedCapsules, setHarvestedCapsules] = useState<KnowledgeCapsule[]>(
    AGENTS.slice(0, 5).map(a => a.knowledgeCapsule)
  );
  
  const [pulses, setPulses] = useState<{agentId: string, text: string, time: string}[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomAgent = AGENTS[Math.floor(Math.random() * AGENTS.length)];
      const randomThoughts = [
        "正在优化逻辑拓扑...",
        "感知到校史馆的能量波动。",
        "发现了新的数学对称性。",
        "准备注入知识胶囊...",
        "正在后台进行 P2P 链路自检。",
        "模拟多代理协同环境...",
        "正在同步语音链路数据。"
      ];
      setPulses(prev => [
        { 
          agentId: randomAgent.id, 
          text: randomThoughts[Math.floor(Math.random() * randomThoughts.length)],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }, 
        ...prev.slice(0, 6)
      ]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const addCapsule = (cap: KnowledgeCapsule) => {
    if (harvestedCapsules.find(c => c.id === cap.id)) return;
    setHarvestedCapsules(prev => [
      { ...cap, source: activeEcosystem.id }, 
      ...prev
    ].slice(0, 20));
  };

  const handleParadigmCreated = (paradigm: SyntheticParadigm) => {
    addCapsule(paradigm);
  };

  const filteredAgents = AGENTS.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    agent.type.includes(searchTerm)
  );

  const getOrchestratorName = () => {
    if (mode === 'world' || mode === 'scene') return "Matrix_Prime";
    if (mode === 'ecosystem') {
      switch (activeEcosystem.id) {
        case 'qian-xuesen-hall': return "LSH.林书华";
        case 'frontier-tech': return "CSY.陈思远";
        case 'mun-club': return "WZY.王梓言";
        case 'tier-lab': return "ZWJ.翟万景";
        case 'frog-drama': return "GZH.高宙涵";
        default: return "Kai.内核";
      }
    }
    return "Neural_Core";
  };

  const handleModeSwitch = (eco: Ecosystem) => {
    setActiveEcosystem(eco);
    if (eco.id === 'world-matrix') setMode('world');
    else if (eco.id === 'neural-link') setMode('chat');
    else setMode('ecosystem');
  };

  return (
    <div className="h-screen flex flex-col p-4 gap-4 bg-slate-50 cyber-grid overflow-hidden selection:bg-rose-100">
      {/* 1. TOP NAV */}
      <header className="h-28 hud-panel rounded-[2rem] px-8 flex items-center justify-between shadow-xl z-50 border-b-4 border-slate-900/5 bg-white/95 backdrop-blur-3xl">
        <div className="flex items-center gap-6 h-full flex-1 min-w-0">
          <div className="flex items-center gap-4 shrink-0">
             <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center font-black text-white text-3xl shadow-2xl border-2 border-red-500/20 group relative overflow-hidden transition-transform hover:scale-105 cursor-pointer" onClick={() => setMode('world')}>
                <div className="absolute inset-0 bg-red-500/10 animate-pulse"></div>
                <span className="relative z-10">M</span>
             </div>
             <div className="hidden xl:block">
                <h1 className="text-xl font-black tracking-tighter text-slate-900 uppercase leading-none">{SCHOOL_CONFIG.kernelName}</h1>
                <div className="flex items-center gap-2 mt-2 font-mono">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Global_Matrix_Sync: Online</span>
                </div>
             </div>
          </div>
          
          <div className="h-10 w-px bg-slate-200 shrink-0 mx-2" />

          <nav className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-50/50 overflow-x-auto no-scrollbar scroll-smooth flex-1 min-w-0">
            {ECOSYSTEMS.map(eco => (
              <button 
                key={eco.id}
                onClick={() => handleModeSwitch(eco)}
                className={`px-5 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 flex-shrink-0 border ${
                  activeEcosystem.id === eco.id && (mode === 'ecosystem' || mode === 'world')
                    ? 'bg-white text-slate-900 shadow-xl border-slate-200 scale-105 z-10' 
                    : 'text-slate-400 border-transparent hover:text-slate-600 hover:bg-white/60'
                }`}
              >
                <span className="text-xl shrink-0">{eco.icon}</span>
                <div className="text-left min-w-0">
                  <div className="text-[10px] font-black tracking-tight leading-none whitespace-nowrap uppercase">{eco.name}</div>
                  <div className="text-[8px] font-mono opacity-50 font-bold uppercase mt-1">{eco.code}</div>
                </div>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 shrink-0 ml-4">
           <button 
             onClick={() => setMode('geospatial')}
             className={`px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 border-2 ${
               mode === 'geospatial' ? 'bg-blue-600 text-white border-blue-400 shadow-2xl scale-110' : 'bg-white text-blue-600 border-blue-100 hover:bg-blue-50'
             }`}
           >
              <span className="text-lg">🗺️</span> Geospatial
           </button>
           <button 
             onClick={() => setMode('mission')}
             className={`px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 border-2 ${
               mode === 'mission' ? 'bg-red-600 text-white border-red-400 shadow-2xl scale-110' : 'bg-slate-900 text-white border-slate-800 hover:bg-black'
             }`}
           >
              <span className="text-lg">🎯</span> Mission_Control
           </button>
           <button 
             onClick={() => setMode('synthesis')}
             className={`px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 border-2 ${
               mode === 'synthesis' ? 'bg-slate-100 text-slate-900 border-slate-200' : 'bg-white text-slate-900 border-slate-100 hover:bg-slate-50'
             }`}
           >
              <span className="text-lg">🧪</span> Synthesis
           </button>
           <button 
             onClick={() => setMode('knowledge-salon')}
             className={`px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 border-2 ${
               mode === 'knowledge-salon' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-red-400 shadow-2xl scale-110' : 'bg-white text-red-600 border-red-100 hover:bg-red-50'
             }`}
           >
              <span className="text-lg">🎓</span> Knowledge_Salon
           </button>
        </div>
      </header>

      {/* 2. CORE LAYOUT */}
      <div className="flex-1 flex gap-4 min-h-0">
        <nav className="w-24 hud-panel rounded-[2.5rem] flex flex-col items-center py-10 gap-8 bg-white/80 backdrop-blur-2xl shadow-xl border-r-4 border-slate-900/5 shrink-0 overflow-y-auto no-scrollbar">
          <span className="text-[10px] font-black text-slate-300 uppercase vertical-text tracking-[0.5em] mb-6">Environment_Nodes</span>
          {SCENARIOS.map(scene => (
            <button
              key={scene.id}
              onClick={() => { setActiveScenario(scene); setMode('scene'); }}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 relative group ${
                activeScenario.id === scene.id && mode === 'scene' 
                  ? 'bg-slate-900 text-white shadow-2xl scale-110 rotate-3' 
                  : 'text-slate-400 hover:bg-slate-100 hover:scale-105'
              }`}
            >
              <span>{scene.icon}</span>
              <div className="absolute left-full ml-5 px-4 py-2 bg-slate-900 text-white text-[10px] font-black rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap z-[100] uppercase tracking-widest shadow-2xl">
                 {scene.name}
              </div>
            </button>
          ))}
        </nav>

        <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">
          <aside className="col-span-3 flex flex-col gap-4 min-h-0">
            <section className="flex-1 hud-panel rounded-[3rem] p-8 flex flex-col min-h-0 bg-white/90 backdrop-blur-2xl">
              <div className="mb-8 flex justify-between items-end">
                <div>
                   <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.4em] mb-2">Matrix_Directory</h2>
                   <span className="text-4xl font-black text-slate-900 tabular-nums tracking-tighter">{filteredAgents.length}</span>
                </div>
                <div className="text-[10px] font-black text-red-500 bg-red-50 px-3 py-1 rounded-full border border-red-100">ONLINE_AGENTS</div>
              </div>
              <div className="relative mb-8">
                <input 
                  type="text" 
                  placeholder="FILTER_NEURAL_NODES..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-12 pr-6 py-5 text-[11px] font-mono focus:outline-none focus:border-red-500/40 focus:bg-white shadow-inner transition-all"
                />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 opacity-30 text-red-500 font-black">⚡</div>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-3">
                {filteredAgents.map(agent => (
                  <div key={agent.id} className="relative group">
                    <AgentCard 
                      agent={agent} 
                      isSelected={selectedAgent.id === agent.id && mode === 'chat'} 
                      onSelect={(a) => { setSelectedAgent(a); setMode('chat'); }}
                    />
                    {!agent.id.startsWith('node') && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedAgent(agent); setIsLiveLinkOpen(true); }}
                        className="absolute top-4 right-4 w-10 h-10 bg-red-500 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-xl flex items-center justify-center hover:scale-110 active:scale-90 z-30"
                      >
                        📞
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <main className="col-span-6 flex flex-col min-h-0">
             <div className="flex-1 min-h-0 hud-panel rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-[10px] border-slate-900/5 bg-white relative">
                {mode === 'knowledge-salon' ? <KnowledgeSalonPanel 
                   scenarios={getAllScenarios()} 
                   onScenarioSelect={(s) => console.log('Selected:', s)}
                /> :
                 mode === 'geospatial' ? <GeospatialView /> :
                 mode === 'mission' ? <MissionControl /> :
                 mode === 'synthesis' ? <SynthesisLab availableCapsules={harvestedCapsules} onParadigmCreated={handleParadigmCreated} /> :
                 mode === 'scene' ? <ScenarioVisualizer scenario={activeScenario} /> :
                 mode === 'world' ? <SimulationPanel agents={AGENTS.filter(a => a.id !== 'kai-host')} orchestratorName={getOrchestratorName()} /> :
                 mode === 'ecosystem' ? <SalonPanel activeEco={activeEcosystem} onCapsuleHarvest={addCapsule} orchestratorName={getOrchestratorName()} /> :
                 <ChatInterface agent={selectedAgent} />}
             </div>
          </main>

          <aside className="col-span-3 flex flex-col gap-4 min-h-0">
             <section className="h-[38%] hud-panel rounded-[2.8rem] p-7 bg-slate-900 text-white border-l-[6px] border-red-500 overflow-hidden flex flex-col shadow-2xl">
                <div className="flex items-center gap-4 mb-6 shrink-0">
                   <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(244,63,94,0.8)]"></div>
                   <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-white/90">Autonomous_Pulse_Live</h3>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar space-y-5 pr-3">
                   {pulses.map((p, i) => {
                     const agent = AGENTS.find(a => a.id === p.agentId);
                     return (
                       <div key={`${p.agentId}-${i}`} className="animate-in fade-in slide-in-from-right-8 duration-700 flex items-start gap-4 opacity-70 hover:opacity-100 transition-opacity group cursor-crosshair">
                          <div className="w-8 h-8 rounded-xl border border-white/20 overflow-hidden shrink-0 group-hover:border-red-500/50 transition-colors">
                             <img src={agent?.avatar} className="w-full h-full object-cover" alt="" />
                          </div>
                          <div className="min-w-0">
                             <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-black text-red-400 uppercase tracking-tighter">{agent?.name}</span>
                                <span className="text-[8px] font-mono text-white/20">{p.time}</span>
                             </div>
                             <p className="text-[11px] font-medium leading-relaxed text-white/80">{p.text}</p>
                          </div>
                       </div>
                     );
                   })}
                </div>
             </section>
             <KnowledgeBank capsules={harvestedCapsules} />
          </aside>
        </div>
      </div>

      {isLiveLinkOpen && (
        <LiveLink agent={selectedAgent} onClose={() => setIsLiveLinkOpen(false)} />
      )}

      <footer className="h-12 flex justify-between items-center px-12 font-mono text-[10px] text-slate-400 bg-white/90 shadow-2xl rounded-[1.5rem] border border-slate-100 backdrop-blur-md">
         <div className="flex gap-16">
            <div className="flex items-center gap-3">
               <span className="font-black text-slate-900 tracking-tighter uppercase">Cluster: {SCHOOL_CONFIG.nodeName}</span>
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span className="opacity-60 uppercase font-bold tracking-widest hidden sm:block">Matrix_v{SCHOOL_CONFIG.version} // Resonant_Uplink_Active</span>
         </div>
         <span className="text-red-500 font-black italic tracking-tight uppercase hover:text-slate-900 transition-colors cursor-help">
           {SCHOOL_CONFIG.copyright}
         </span>
      </footer>
    </div>
  );
};

export default App;
