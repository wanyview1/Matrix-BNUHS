
import React from 'react';
import { KnowledgeCapsule } from '../types';
import { ECOSYSTEMS } from '../constants';

interface KnowledgeBankProps {
  capsules: KnowledgeCapsule[];
}

const KnowledgeBank: React.FC<KnowledgeBankProps> = ({ capsules }) => {
  const getCategory = (id: string) => {
    const categories = [
      { 
        name: '真', 
        color: 'text-blue-400', 
        glow: 'shadow-[0_0_20px_rgba(56,189,248,0.4)]',
        border: 'border-blue-500/50', 
        bg: 'bg-blue-500/10',
        icon: '💎'
      },
      { 
        name: '善', 
        color: 'text-green-400', 
        glow: 'shadow-[0_0_20px_rgba(34,197,94,0.4)]',
        border: 'border-green-500/50', 
        bg: 'bg-green-500/10',
        icon: '🌿'
      },
      { 
        name: '美', 
        color: 'text-purple-400', 
        glow: 'shadow-[0_0_20px_rgba(168,85,247,0.4)]',
        border: 'border-purple-500/50', 
        bg: 'bg-purple-500/10',
        icon: '🎨'
      },
      { 
        name: '灵', 
        color: 'text-red-400', 
        glow: 'shadow-[0_0_20px_rgba(239,68,68,0.4)]',
        border: 'border-red-500/50', 
        bg: 'bg-red-500/10',
        icon: '✨'
      }
    ];
    const index = (id.charCodeAt(id.length - 1) || 0) % 4;
    return categories[index];
  };

  return (
    <section className="flex-1 hud-panel rounded-[2.5rem] p-8 flex flex-col min-h-0 bg-slate-900 text-white shadow-2xl relative overflow-hidden border border-white/10">
      {/* Matrix Backdrop Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
         <div className="absolute top-0 left-0 w-full h-full cyber-grid scale-150"></div>
         <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-600 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="flex justify-between items-center mb-8 relative z-10">
         <div className="flex items-center gap-4">
            <div className="w-1.5 h-8 bg-red-500 rounded-full shadow-[0_0_15px_red]"></div>
            <div>
               <h3 className="text-[14px] font-black text-white uppercase tracking-[0.4em]">Matrix_Vault</h3>
               <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Archiving_Logic_Capsules</span>
            </div>
         </div>
         <div className="flex flex-col items-end">
            <span className="text-[14px] font-mono font-black text-red-500">{capsules.length}/15</span>
            <span className="text-[7px] text-slate-500 font-bold uppercase">Capacity_Usage</span>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar space-y-6 pr-2 relative z-10">
        {capsules.map((cap, i) => {
          const cat = getCategory(cap.id);
          const sourceEco = ECOSYSTEMS.find(e => e.id === cap.source);
          
          return (
            <div 
              key={`${cap.id}-${i}`} 
              className={`group relative p-1 rounded-full border transition-all duration-500 hover:scale-[1.02] ${cat.border} ${cat.bg} ${cat.glow}`}
            >
               {/* THE ACTUAL CAPSULE SHAPE */}
               <div className="bg-slate-950/80 rounded-full px-6 py-4 flex items-center gap-5 backdrop-blur-md">
                  {/* Category Core Icon */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 bg-slate-900 border border-white/10 shadow-inner group-hover:rotate-[360deg] transition-transform duration-1000`}>
                    {cat.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                       <h4 className="text-[13px] font-black tracking-tight text-white truncate">
                         {cap.name}
                       </h4>
                       <div className={`text-[8px] font-black px-1.5 py-0.5 rounded border ${cat.border} ${cat.color} uppercase`}>
                         {cat.name}_TYPE
                       </div>
                    </div>
                    <p className="text-[10px] text-slate-400 font-medium line-clamp-1 group-hover:line-clamp-none transition-all duration-500 pr-4">
                      {cap.professionalExplanation}
                    </p>
                  </div>

                  {/* Extraction Source Tag */}
                  {sourceEco && (
                    <div className="hidden lg:flex flex-col items-end shrink-0 pl-2">
                       <span className="text-[14px]">{sourceEco.icon}</span>
                       <span className="text-[7px] font-black text-slate-500 uppercase tracking-tighter">SOURCE_EXT</span>
                    </div>
                  )}
               </div>

               {/* Particle Effects (Aesthetic) */}
               <div className={`absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${cat.color.replace('text', 'bg')} blur-sm opacity-0 group-hover:opacity-100 transition-opacity animate-ping`}></div>
            </div>
          );
        })}

        {capsules.length === 0 && (
          <div className="text-center py-32 opacity-20 flex flex-col items-center">
             <div className="relative w-20 h-20 mb-8">
                <div className="absolute inset-0 border-4 border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 bg-red-500/20 rounded-full animate-pulse"></div>
             </div>
             <p className="text-[10px] font-black tracking-[0.8em] uppercase text-slate-400">Deep_Scanning_Matrix...</p>
          </div>
        )}
      </div>

      {/* Vault Footer Status */}
      <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
         <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_green]"></div>
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Logic_Stability: High</span>
            </div>
            <span className="text-[10px] font-mono text-white/40">NODE_0x{Math.random().toString(16).slice(2, 6).toUpperCase()}</span>
         </div>
         <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="w-[85%] h-full bg-gradient-to-r from-red-600 to-transparent animate-shimmer"></div>
         </div>
      </div>
    </section>
  );
};

export default KnowledgeBank;
