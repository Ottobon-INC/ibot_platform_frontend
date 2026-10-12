import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck } from 'lucide-react';

export function CandidateExperienceSection() {
  const [activeLog, setActiveLog] = useState(0);
  const logs = [
    "[SYS] Provisioning isolated SOC-2 sandbox environment...",
    "[SEC] Injecting strict IAM roles and monitoring daemons.",
    "[NET] Intercepting network calls. Simulating latency.",
    "[EVAL] Candidate opened src/auth.ts. Tracking keystrokes.",
    "[GIT] Commit detected: 'fix memory leak in connection pool'.",
    "[PR] Automated diff generated. Confidence score: 98%."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLog((p) => (p + 1) % logs.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="candidate-experience" className="relative w-full py-32 bg-white border-b border-slate-200 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="relative z-10 mx-auto w-full px-5 max-w-[1200px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-slate-900 font-normal mb-6 text-[40px] sm:text-[48px] leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Stop reading resumes. <br />
            <span className="font-semibold text-orange-600">Start monitoring execution.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Watch candidates solve complex engineering problems inside an isolated, real-world development environment.
          </p>
        </motion.div>

        {/* Dashboard Hologram */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto h-[320px] sm:h-[400px] rounded-[2rem] border border-slate-700 bg-slate-800/80 backdrop-blur-2xl shadow-[0_0_100px_rgba(234,88,12,0.1)] overflow-hidden flex flex-col relative"
        >
          {/* Header */}
          <div className="h-14 border-b border-slate-700 bg-slate-900/50 flex items-center px-6 justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-xs font-mono text-slate-400 tracking-wider">session_telemetry.log</div>
            <ShieldCheck size={18} className="text-green-500" />
          </div>
          
          {/* Body */}
          <div className="p-8 flex flex-col gap-6 font-mono text-sm sm:text-base h-full overflow-hidden relative">
            {logs.map((log, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: i <= activeLog ? 1 : 0.1, x: 0 }}
                transition={{ type: "spring", bounce: 0 }}
                className={`flex gap-6 ${i === activeLog ? 'text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'text-slate-500'}`}
              >
                <span className="opacity-50 select-none hidden sm:inline-block">{`0x${(1000 + i).toString(16).toUpperCase()}`}</span>
                <span>{log}</span>
              </motion.div>
            ))}
            {/* Fade out at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-800/80 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
