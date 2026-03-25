
import React, { useState, useEffect } from 'react';
import { chatWithMapsGrounding } from '../services/geminiService';
import { AGENTS } from '../constants';
import { POI } from '../types';

const GeospatialView: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [pois, setPois] = useState<POI[]>([]);
  const [analysis, setAnalysis] = useState('');
  const [query, setQuery] = useState('');
  
  // Hepingmen Campus Coordinates
  const LAT = 39.8988;
  const LNG = 116.3833;

  const performScan = async (customQuery?: string) => {
    setIsScanning(true);
    setPois([]);
    setAnalysis('');

    const targetQuery = customQuery || "作为北京师范大学附属中学（和平门校区）的学生，我周围 1 公里内有哪些重要的历史文化地标、图书馆或学术资源？请详细列出并说明它们对我学习的帮助。";
    
    // Using Kai as the default orchestrator for Geospatial mode
    const systemAgent = AGENTS.find(a => a.id === 'kai-host')!;

    try {
      const { text, places } = await chatWithMapsGrounding(
        systemAgent, 
        [{ role: 'user', content: targetQuery, timestamp: new Date() }],
        LAT,
        LNG
      );

      setAnalysis(text);
      if (places) {
        // Map grounding chunks to our local POI type
        setPois(places.map(p => ({
          title: p.title,
          uri: p.uri,
          type: 'LANDMARK',
          relevance: 'HIGH'
        })));
      }
    } catch (error) {
      console.error("Geospatial scan failed", error);
      setAnalysis("无法建立地理逻辑链路，请检查网络连接。");
    } finally {
      setIsScanning(false);
    }
  };

  useEffect(() => {
    performScan();
  }, []);

  return (
    <div className="h-full bg-white flex flex-col relative overflow-hidden">
      {/* HUD DECOR */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      {/* SCANNING RADAR ANIMATION */}
      {isScanning && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
           <div className="w-[600px] h-[600px] border-2 border-blue-500/20 rounded-full animate-ping"></div>
           <div className="absolute w-[400px] h-[400px] border border-blue-500/40 rounded-full animate-pulse"></div>
        </div>
      )}

      {/* HEADER */}
      <div className="p-10 z-10 flex justify-between items-start shrink-0">
        <div>
           <div className="flex items-center gap-4 mb-2">
              <div className="w-2 h-8 bg-blue-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Geospatial_Intel_v1.0</h2>
           </div>
           <p className="text-[10px] text-slate-400 font-black tracking-[0.4em] uppercase ml-6">Hepingmen_Matrix_Node // Latitude: {LAT} Longitude: {LNG}</p>
        </div>
        <div className="flex gap-4">
           <button 
             onClick={() => performScan()} 
             disabled={isScanning}
             className="px-6 py-3 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all disabled:opacity-50"
           >
              {isScanning ? "Scanning..." : "Refresh_Scan"}
           </button>
        </div>
      </div>

      <div className="flex-1 flex px-10 gap-10 min-h-0 relative z-10 pb-10">
        {/* LEFT: NEURAL ANALYSIS */}
        <div className="flex-1 flex flex-col min-w-0">
           <div className="bg-slate-50/80 backdrop-blur border border-slate-100 rounded-[3rem] p-10 overflow-y-auto custom-scrollbar flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-8 shrink-0">
                 <span className="text-xl">🧠</span>
                 <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Logic_Context_Analysis</h3>
              </div>
              
              {isScanning ? (
                <div className="flex-1 flex flex-col items-center justify-center space-y-6 text-center">
                   <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                   <p className="text-slate-500 font-black text-[10px] tracking-widest uppercase animate-pulse">Establishing_Grounding_Uplink...</p>
                </div>
              ) : (
                <div className="prose prose-slate max-w-none">
                   <p className="text-[15px] leading-relaxed text-slate-700 font-medium whitespace-pre-wrap">
                      {analysis || "等待初始化..."}
                   </p>
                </div>
              )}

              {/* QUICK QUERIES */}
              <div className="mt-10 pt-8 border-t border-slate-200">
                 <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Neural_Guided_Queries</h4>
                 <div className="flex flex-wrap gap-3">
                    {[
                      "琉璃厂有哪些值得一去的古书店？",
                      "宣武门附近的科技博物馆怎么去？",
                      "校园周边有没有环境安静的自习室？",
                      "寻找周边的历史文化保护区。"
                    ].map((q, i) => (
                      <button 
                        key={i} 
                        onClick={() => { setQuery(q); performScan(q); }}
                        className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold text-slate-600 hover:border-blue-500/40 hover:text-blue-600 transition-all"
                      >
                        {q}
                      </button>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* RIGHT: POI LIST (GROUNDED DATA) */}
        <aside className="w-96 flex flex-col min-w-0">
           <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-8 flex flex-col h-full shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                 <span className="text-8xl font-black">MAPS</span>
              </div>
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                 <div className="flex items-center gap-3">
                    <span className="text-xl">📍</span>
                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Grounded_Anchors</h3>
                 </div>
                 <span className="text-[10px] font-mono text-blue-600 font-black px-2 py-0.5 bg-blue-50 rounded">COUNT: {pois.length}</span>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-2 relative z-10">
                 {pois.length > 0 ? pois.map((poi, i) => (
                   <a 
                     key={i} 
                     href={poi.uri} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="block p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-500/40 hover:bg-white hover:shadow-xl transition-all group"
                   >
                     <div className="flex justify-between items-start mb-2">
                        <span className="text-lg">🏛️</span>
                        <div className="flex items-center gap-1.5">
                           <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                           <span className="text-[8px] font-black text-blue-500 uppercase tracking-tighter">RESONANCE_HIGH</span>
                        </div>
                     </div>
                     <h4 className="text-[13px] font-black text-slate-800 uppercase group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight mb-2">{poi.title}</h4>
                     <div className="flex items-center justify-between">
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">View_In_Engine</span>
                        <span className="text-blue-500 font-black group-hover:translate-x-1 transition-transform">→</span>
                     </div>
                   </a>
                 )) : !isScanning && (
                   <div className="h-full flex flex-col items-center justify-center opacity-20 text-center">
                      <div className="w-20 h-20 border-2 border-dashed border-slate-400 rounded-full flex items-center justify-center mb-6">
                         <span className="text-4xl">🗺️</span>
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-widest">Awaiting_Neural_Sync...</p>
                   </div>
                 )}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 shrink-0">
                 <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                    <p className="text-[9px] text-blue-600 font-bold leading-relaxed uppercase">
                      Grounding provided by Google Maps Enterprise Engine. All URIs lead to real-world location nodes.
                    </p>
                 </div>
              </div>
           </div>
        </aside>
      </div>
      
      {/* MANUAL OVERRIDE INPUT */}
      <div className="px-10 pb-10 z-20">
         <div className="bg-slate-900 rounded-3xl p-2 flex gap-2 shadow-2xl">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && performScan(query)}
              placeholder="自定义地理搜索指令 (如: 搜索周边的历史纪念馆)..."
              className="flex-1 bg-transparent text-white px-8 py-3 text-sm focus:outline-none placeholder:text-slate-500 font-medium"
            />
            <button 
              onClick={() => performScan(query)}
              disabled={isScanning || !query.trim()}
              className="px-8 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all disabled:opacity-20 flex items-center gap-2"
            >
              Locate_Nodes 📍
            </button>
         </div>
      </div>
    </div>
  );
};

export default GeospatialView;
