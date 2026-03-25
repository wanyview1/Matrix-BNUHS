
import React, { useState } from 'react';
import { Scenario } from '../types';
// Fixed: AGENTS is defined and exported from constants.ts, not types.ts
import { AGENTS } from '../constants';

interface ScenarioVisualizerProps {
  scenario: Scenario;
}

const ScenarioVisualizer: React.FC<ScenarioVisualizerProps> = ({ scenario }) => {
  const [activeBubble, setActiveBubble] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full bg-slate-100 overflow-hidden flex items-center justify-center p-4">
      {/* The "Map" Image - Using Manga-esque styling */}
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-900/10">
        <img 
          src={scenario.mapUrl} 
          className="w-full h-full object-cover opacity-80 mix-blend-multiply" 
          alt={scenario.name} 
        />
        
        {/* Overlay Grid Pattern to give it a "Blueprint/Game" look */}
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>

        {/* Hotspots / Speech Bubbles */}
        {scenario.hotspots.map((spot, idx) => {
          const agent = AGENTS.find(a => a.id === spot.agentId);
          return (
            <div 
              key={idx}
              className="absolute transition-all duration-500 hover:z-50"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onMouseEnter={() => setActiveBubble(idx)}
              onMouseLeave={() => setActiveBubble(null)}
            >
              {/* Agent Marker */}
              <div className="relative group cursor-pointer">
                <div className={`w-8 h-8 rounded-lg bg-white border-2 border-slate-900 flex items-center justify-center shadow-lg transition-transform group-hover:scale-125 ${activeBubble === idx ? 'ring-4 ring-red-500/20' : ''}`}>
                  {agent ? (
                    <img src={agent.avatar} className="w-full h-full object-cover rounded" alt="" />
                  ) : (
                    <span className="text-xs">👤</span>
                  )}
                  {/* Pulse Effect */}
                  <div className="absolute -inset-1 border border-red-500/30 rounded-lg animate-ping"></div>
                </div>

                {/* Speech Bubble (Manga Style) */}
                <div className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 transition-all duration-300 transform origin-bottom ${
                  activeBubble === idx ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90 pointer-events-none'
                }`}>
                  <div className="bg-white border-2 border-slate-900 p-3 rounded-2xl shadow-2xl relative">
                    <div className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">
                      {agent?.name || "未知学生"}
                    </div>
                    <p className="text-[11px] font-bold text-slate-800 leading-snug">
                      {spot.type === 'thought' ? `💭 ${spot.message}` : spot.message}
                    </p>
                    {/* Bubble Tail */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-slate-900 rotate-45 -translate-y-2"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating UI Elements */}
      <div className="absolute top-8 left-8 p-4 bg-white/90 backdrop-blur border-2 border-slate-900 rounded-2xl shadow-xl z-20">
         <div className="flex items-center gap-3">
            <span className="text-2xl">{scenario.icon}</span>
            <div>
               <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Live_Scenario_View</h4>
               <span className="text-sm font-black text-slate-900 uppercase">{scenario.name}</span>
            </div>
         </div>
      </div>
      
      <div className="absolute bottom-8 right-8 p-3 bg-slate-900 text-white rounded-xl text-[9px] font-mono tracking-widest uppercase opacity-80">
         Node_Resonance: 0.92Hz // Active_Matrix
      </div>
    </div>
  );
};

export default ScenarioVisualizer;
