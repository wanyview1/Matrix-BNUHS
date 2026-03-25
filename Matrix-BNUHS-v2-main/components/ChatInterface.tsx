
import React, { useState, useRef, useEffect } from 'react';
import { AgentProfile, Message } from '../types';
import { chatWithAgent, chatWithMapsGrounding } from '../services/geminiService';
import { AGENTS } from '../constants';

interface ChatInterfaceProps {
  agent: AgentProfile;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ agent }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [invitedAgent, setInvitedAgent] = useState<AgentProfile | null>(null);
  const [isMapsMode, setIsMapsMode] = useState(false);
  const [currentPlaces, setCurrentPlaces] = useState<{title: string, uri: string}[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  useEffect(() => {
    setMessages([]);
    setInput('');
    setInvitedAgent(null);
    setCurrentPlaces([]);
  }, [agent]);

  const handleSend = async (overrideContent?: string) => {
    const contentToSend = overrideContent || input.trim();
    if (!contentToSend || isTyping) return;

    const userMsg: Message = { role: 'user', content: contentToSend, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      if (isMapsMode) {
        // Maps Grounding Mode
        const { text, places } = await chatWithMapsGrounding(agent, [...messages, userMsg]);
        setMessages(prev => [...prev, { role: 'assistant', content: text, timestamp: new Date() }]);
        if (places && places.length > 0) {
          setCurrentPlaces(prev => [...places, ...prev].slice(0, 10));
        }
        setIsTyping(false);
      } else {
        // Standard Mode
        const response = await chatWithAgent(agent, [...messages, userMsg]);
        const primaryMsg: Message = { role: 'assistant', content: response, timestamp: new Date() };
        setMessages(prev => [...prev, primaryMsg]);
        
        if (invitedAgent) {
          setTimeout(async () => {
            const secondResponse = await chatWithAgent(invitedAgent, [...messages, userMsg, primaryMsg]);
            setMessages(prev => [...prev, { 
              role: 'assistant', 
              content: `[${invitedAgent.name} 补充]: ${secondResponse}`, 
              timestamp: new Date() 
            }]);
            setIsTyping(false);
          }, 1200);
        } else {
          setIsTyping(false);
        }
      }
    } catch (e) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "系统核心链路发生逻辑塌陷，请稍后重试。", 
        timestamp: new Date() 
      }]);
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* HEADER SECTION */}
      <div className="p-7 border-b border-slate-100 flex items-center justify-between bg-white/90 backdrop-blur-2xl z-20 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="relative group">
            <div className={`w-16 h-16 rounded-2xl border-2 overflow-hidden shadow-2xl transition-all duration-700 ${isTyping ? 'border-red-500 animate-speaking ring-4 ring-red-500/15 scale-105' : 'border-slate-100 group-hover:border-red-500/20'}`}>
              <img src={agent.avatar} alt="" className="w-full h-full object-cover" />
            </div>
            {invitedAgent && (
              <div className="absolute -right-4 -bottom-4 w-11 h-11 rounded-xl border-[3px] border-white bg-white shadow-2xl overflow-hidden animate-in zoom-in duration-500 ring-2 ring-slate-100">
                 <img src={invitedAgent.avatar} className="w-full h-full object-cover" alt="" />
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-4">
               <h2 className="font-black text-slate-900 text-xl tracking-tight uppercase">
                 {agent.name} {isMapsMode && <span className="text-blue-500 text-xs ml-2">[GEOSPATIAL]</span>}
               </h2>
               <div className={`px-3 py-1 rounded-full flex items-center gap-2 border ${isMapsMode ? 'bg-blue-50 border-blue-200' : 'bg-green-50 border-green-200'}`}>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${isMapsMode ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                  <span className={`text-[10px] font-black tracking-widest uppercase ${isMapsMode ? 'text-blue-600' : 'text-green-600'}`}>
                    {isMapsMode ? 'MAPS_GROUNDING_ACTIVE' : 'NEURAL_LINK_STABLE'}
                  </span>
               </div>
            </div>
            <p className="text-[10px] text-slate-400 font-mono tracking-[0.2em] uppercase mt-2">
               LAT: 39.8988 // LNG: 116.3833 // HE-PING-MEN_NODE
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
           {/* Maps Mode Toggle */}
           <button 
             onClick={() => setIsMapsMode(!isMapsMode)}
             className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
               isMapsMode 
                 ? 'bg-blue-600 border-blue-400 text-white shadow-lg' 
                 : 'bg-white border-slate-100 text-slate-400 hover:border-blue-500/30 hover:text-blue-500'
             }`}
           >
             🗺️ Geospatial_Mode
           </button>
           
           {!invitedAgent && !isMapsMode && (
             <div className="relative group">
               <button className="text-[11px] font-black text-slate-500 hover:text-red-500 bg-slate-50 border border-slate-200 rounded-xl px-5 py-2 transition-all flex items-center gap-2">
                 + 协作专家
               </button>
               <div className="absolute top-full right-0 mt-3 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 hidden group-hover:block z-50">
                 {AGENTS.filter(a => a.id !== agent.id && !a.id.startsWith('node')).slice(0, 5).map(a => (
                   <button key={a.id} onClick={() => setInvitedAgent(a)} className="w-full text-left px-3 py-2 hover:bg-slate-50 rounded-xl flex items-center gap-3 text-[11px] font-bold">
                     <img src={a.avatar} className="w-6 h-6 rounded-lg" alt="" /> <span>{a.name}</span>
                   </button>
                 ))}
               </div>
             </div>
           )}
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* CHAT LOG */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar bg-slate-50/20 selection:bg-rose-100">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center opacity-30">
              <div className={`w-32 h-32 border-4 border-dashed rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite] mb-8 ${isMapsMode ? 'border-blue-500/20' : 'border-red-500/20'}`}>
                <span className="text-5xl">{isMapsMode ? '🗺️' : '⚛'}</span>
              </div>
              <p className="text-slate-500 text-[10px] font-black tracking-[0.8em] uppercase text-center">
                {isMapsMode ? 'Awaiting_Geospatial_Query' : 'Awaiting_Neural_Handshake'}
              </p>
            </div>
          )}
          
          {messages.map((msg, i) => (
            <div key={`${msg.role}-${i}`} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-4 duration-500`}>
              <div className={`relative max-w-[85%] p-6 rounded-[2rem] shadow-xl border-t-4 ${
                msg.role === 'user' 
                  ? 'bg-slate-900 border-t-red-500 text-white rounded-tr-none' 
                  : `bg-white border-t-${isMapsMode ? 'blue' : 'accent'}-color text-slate-800 rounded-tl-none border border-slate-100`
              }`}>
                <p className="text-[14px] leading-relaxed font-medium">{msg.content}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-white px-6 py-4 border border-slate-100 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {isMapsMode ? "正在同步地理数据管线..." : "正在处理逻辑脉冲..."}
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR: PLACE CARDS (NEW) */}
        {isMapsMode && currentPlaces.length > 0 && (
          <aside className="w-80 border-l border-slate-100 bg-white p-6 overflow-y-auto custom-scrollbar animate-in slide-in-from-right duration-500">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Grafting_POI_Results</h3>
             </div>
             <div className="space-y-4">
                {currentPlaces.map((place, i) => (
                  <a 
                    key={i} 
                    href={place.uri} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-500/40 hover:bg-white transition-all group shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-xl">📍</span>
                       <span className="text-[8px] font-mono text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">PO_ID: {i+1}</span>
                    </div>
                    <h4 className="text-[12px] font-black text-slate-800 uppercase group-hover:text-blue-600 transition-colors line-clamp-2">{place.title}</h4>
                    <div className="mt-3 flex items-center justify-between">
                       <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">View in Maps</span>
                       <span className="text-blue-500 font-bold group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </a>
                ))}
             </div>
          </aside>
        )}
      </div>

      {/* INPUT AREA */}
      <div className={`p-8 bg-white border-t border-slate-100 z-30 transition-all ${isMapsMode ? 'ring-8 ring-blue-500/5' : ''}`}>
        <div className="flex gap-4 max-w-6xl mx-auto">
          <div className="flex-1 relative group">
             <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <span className={`text-[10px] font-black tracking-widest uppercase ${isMapsMode ? 'text-blue-500' : 'text-red-500'} opacity-40`}>
                  {isMapsMode ? 'MAPS_PROMPT' : 'NEURAL_PROMPT'}
                </span>
             </div>
             <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isMapsMode ? "询问和平门周边的现实资源 (如: 琉璃厂有哪些适合我的书店?)..." : "输入指令到矩阵..."}
                className={`w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-32 pr-10 py-4 text-sm focus:outline-none focus:bg-white transition-all ${isMapsMode ? 'focus:border-blue-500/50' : 'focus:border-red-500/50'}`}
             />
          </div>
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isTyping}
            className={`px-10 rounded-2xl transition-all font-black text-[10px] tracking-widest shadow-xl active:scale-95 uppercase flex items-center gap-3 shrink-0 ${
              isMapsMode ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'
            }`}
          >
            {isMapsMode ? 'Locate' : 'Compute'} <span>{isMapsMode ? '📍' : '→'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
