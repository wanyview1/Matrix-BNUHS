
import React, { useState, useEffect, useRef } from 'react';
import { SCHOOL_CONFIG } from '../config/schoolConfig';

const LOG_MESSAGES = [
  "[SYSTEM] Kernel initialized.",
  "[AUTH] Syncing with {node} node 0xBF32...",
  "[MODULE] Knowledge Capsule Decryptor active.",
  "[AGENT] Neural link vector analysis recalibrated.",
  "[SYSTEM] Global entropy within safety bounds.",
  "[NETWORK] Uplink to {school} stable.",
  "[SEC] Encryption layer 4 established.",
  "[SYNC] Multi-agent world state synchronized.",
];

const KernelLog: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let rawLog = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
      const processedLog = rawLog
        .replace('{node}', SCHOOL_CONFIG.nodeName)
        .replace('{school}', SCHOOL_CONFIG.shortName);
        
      const timestamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
      setLogs(prev => [...prev.slice(-20), `[${timestamp}] ${processedLog}`]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-black/80 border border-white/10 p-3 h-full overflow-hidden flex flex-col font-mono text-[10px]" style={{ color: 'var(--secondary-color)' }}>
      <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-1 opacity-60">
        <span className="font-bold uppercase tracking-widest">Live Kernel Log</span>
        <span className="animate-pulse">● REC</span>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-1 custom-scrollbar opacity-80">
        {logs.map((log, i) => (
          <div key={i} className="whitespace-nowrap overflow-hidden text-ellipsis hover:opacity-100 transition-opacity">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KernelLog;
