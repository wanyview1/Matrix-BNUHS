
import React from 'react';
import { AgentProfile } from '../types';

interface AgentCardProps {
  agent: AgentProfile;
  isSelected: boolean;
  onSelect: (agent: AgentProfile) => void;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, isSelected, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(agent)}
      className={`relative cursor-pointer transition-all duration-500 p-5 rounded-2xl font-mono group overflow-hidden border ${
        isSelected 
          ? 'bg-white border-red-500/40 shadow-2xl scale-[1.03] ring-8 ring-red-500/5 z-20' 
          : 'bg-white/50 border-slate-200 hover:bg-white hover:border-red-500/20 hover:shadow-lg z-10'
      }`}
    >
      {/* HUD Corner Decor */}
      <div className={`absolute top-0 right-0 w-10 h-10 pointer-events-none transition-opacity duration-500 ${isSelected ? 'opacity-100' : 'opacity-0'}`}>
         <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-red-500"></div>
      </div>

      <div className="absolute top-3 right-4 text-[8px] font-black text-slate-300 pointer-events-none tracking-[0.2em] opacity-40">
        NODE_0x{agent.id.substring(agent.id.length - 4)}
      </div>

      <div className="flex gap-6 items-center relative z-10">
        <div className="relative flex-shrink-0">
          <div className={`rounded-2xl border-2 overflow-hidden w-16 h-16 transition-all duration-700 ${
            isSelected ? 'border-red-500 shadow-[0_0_25px_rgba(244,63,94,0.4)] scale-110' : 'border-white shadow-md grayscale-[0.2]'
          }`}>
            <img 
              src={agent.avatar} 
              alt="" 
              className={`w-full h-full object-cover transition-all duration-700 ${isSelected ? 'grayscale-0' : 'group-hover:grayscale-0'}`}
            />
          </div>
          {agent.status === 'online' && (
             <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white shadow-xl animate-pulse" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-1.5">
            <span className={`text-base font-black tracking-tight truncate ${isSelected ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
              {agent.name}
            </span>
            <span className={`text-[9px] font-black px-2.5 py-1 rounded-lg tracking-widest ${isSelected ? 'bg-red-500 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>
              {agent.grade.substring(0, 2)}
            </span>
          </div>
          
          <div className="mb-3">
             <span className={`text-[10px] font-black uppercase tracking-[0.1em] ${isSelected ? 'text-red-500' : 'text-slate-400'}`}>
               {agent.type.split('|')[0]}
             </span>
          </div>

          <div className="flex items-center gap-3">
             <div className={`h-2 flex-1 rounded-full overflow-hidden ${isSelected ? 'bg-red-50' : 'bg-slate-100'}`}>
                <div 
                  className={`h-full rounded-full transition-all duration-[2s] ease-out ${isSelected ? 'bg-red-500 shadow-[0_0_12px_rgba(244,63,94,0.6)]' : 'bg-slate-200'}`} 
                  style={{ width: isSelected ? '100%' : '25%' }} 
                />
             </div>
             <span className="text-[9px] font-mono font-bold text-slate-300">LINK:SYNC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
