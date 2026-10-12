import React, { useState } from 'react';
import { ShieldCheck, GitBranch, TerminalSquare, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ShiftSection() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'commit',
      title: 'Every commit accounted for',
      desc: 'Built from patterns seen across thousands of real engineering incidents — not a generic technical screen.',
      icon: <TerminalSquare size={24} />,
      color: '#EA580C',
      renderGraphic: () => (
        <div className="w-full h-full bg-[#0F172A] flex flex-col md:flex-row items-center justify-center relative overflow-hidden gap-8 px-8 font-sans">
           
           {/* Generic Screen */}
           <div className="w-full md:w-2/5 flex flex-col items-center opacity-50">
             <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">Generic Tool</div>
             <div className="w-full bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-sm flex flex-col items-center text-center gap-3 h-32 justify-center">
               <div className="text-slate-300 font-mono text-[12px]">"Reverse a Linked List"</div>
               <div className="text-[11px] text-slate-500 mt-2">Irrelevant to daily work</div>
             </div>
           </div>

           {/* VS Divider */}
           <div className="text-slate-500 font-bold italic font-serif text-lg opacity-50">VS</div>

           {/* IBOT Assessment */}
           <div className="w-full md:w-2/5 flex flex-col items-center relative z-10">
             <div className="text-[11px] font-bold text-[#EA580C] uppercase tracking-widest mb-4 flex items-center gap-2 text-center">
               <ShieldCheck size={14} /> IBOT Assessment
             </div>
             <motion.div 
               initial={{ y: 5 }} animate={{ y: -5 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
               className="w-full bg-white rounded-xl p-5 border-2 border-[#EA580C]/30 shadow-[0_0_40px_rgba(234,88,12,0.2)] flex flex-col items-center text-center gap-3 h-32 justify-center relative"
             >
               <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold shadow-sm border border-green-200">✓</div>
               <div className="text-[#0F172A] font-mono font-bold text-[12px] leading-snug">"Debug Production Memory Leak"</div>
               <div className="text-[11px] text-slate-600 font-semibold mt-1">Based on real incidents</div>
             </motion.div>
           </div>
        </div>
      )
    },
    {
      id: 'validates',
      title: 'Validates, not just flags',
      desc: 'IBOT doesn’t stop at detection — it traces the candidate’s resolution logic back to its root architectural cause.',
      icon: <GitBranch size={24} />,
      color: '#38BDF8',
      renderGraphic: () => (
        <div className="w-full h-full bg-[#F8FAFC] flex flex-col items-center justify-center relative overflow-hidden gap-6 font-mono px-8">
           
           <div className="w-full max-w-sm bg-white border border-slate-200 rounded-xl p-6 shadow-sm text-[13px] text-slate-600 text-left relative">
             <div className="text-slate-400 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-300"/> candidate_submission.ts</div>
             <div><span className="text-purple-600 font-bold">const</span> data = <span className="text-blue-500">await</span> fetchUserData();</div>
             <div className="relative inline-block mt-2">
               <span className="text-slate-800 font-bold">renderProfile(data.profile);</span>
               {/* Red squiggly line simulation */}
               <div className="absolute -bottom-1 left-0 w-full h-[2px] border-b-2 border-dotted border-red-500" />
             </div>
             
             {/* Simple Flag (Fades out) */}
             <motion.div 
               animate={{ opacity: [1, 0, 0, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-20 -right-4 md:-right-12 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl shadow-md text-[11px] flex flex-col gap-1 z-10"
             >
               <span className="font-bold uppercase tracking-wider text-[9px] text-red-500">Standard Tool</span>
               <span>NullReferenceException</span>
             </motion.div>

             {/* IBOT Validation (Fades in) */}
             <motion.div 
               animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-20 -right-4 md:-right-12 bg-[#0F172A] border border-slate-700 text-slate-200 p-5 rounded-xl shadow-2xl w-64 md:w-72 text-[12px] flex flex-col gap-3 z-20"
             >
               <div className="flex items-center gap-2 text-[#38BDF8] font-bold border-b border-slate-700 pb-2">
                 <GitBranch size={16} /> IBOT VALIDATION
               </div>
               <div className="leading-relaxed">Candidate failed to handle asynchronous state correctly. The error originates from missing dependency injection in the auth module, not just a null check.</div>
             </motion.div>

           </div>
        </div>
      )
    },
    {
      id: 'thousands',
      title: 'From thousands down to one',
      desc: 'Thousands of signals come in. What reaches your hiring team is only what genuinely needs human judgment.',
      icon: <Search size={24} />,
      color: '#EA580C',
      renderGraphic: () => (
        <div className="w-full h-full bg-[#F8FAFC] flex flex-col items-center justify-center relative overflow-hidden font-sans text-center">
          
          <div className="bg-white border border-slate-200 rounded-2xl w-72 p-6 shadow-sm">
             <div className="text-4xl font-bold text-[#0F172A] mb-1 tracking-tight">10,000+</div>
             <div className="text-[12px] font-bold text-slate-500 tracking-wider uppercase">Raw Candidate Signals</div>
          </div>
          
          <div className="h-16 w-32 relative flex items-center justify-center">
             {/* Funnel shape */}
             <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute inset-0 text-slate-200">
               <polygon points="0,0 100,0 65,100 35,100" fill="currentColor" opacity="0.6" />
             </svg>
             <motion.div 
               animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}
               className="text-[10px] font-bold text-[#EA580C] uppercase tracking-widest relative z-10 bg-white/90 px-3 py-1.5 rounded-full shadow-sm border border-[#EA580C]/20"
             >
               IBOT Filtering
             </motion.div>
          </div>

          <motion.div 
            initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="bg-[#EA580C] rounded-2xl w-72 p-6 shadow-lg shadow-[#EA580C]/30"
          >
             <div className="text-4xl font-bold text-white mb-1">1</div>
             <div className="text-[12px] font-bold text-orange-100 tracking-wider uppercase">High-Confidence Hire</div>
          </motion.div>

        </div>
      )
    },
    {
      id: 'sharper',
      title: 'Sharper with every case',
      desc: 'Every investigation feeds back into the model — tomorrow’s triage is faster and more precise than today’s.',
      icon: <ShieldCheck size={24} />,
      color: '#10B981',
      renderGraphic: () => (
        <div className="w-full h-full bg-[#0F172A] flex flex-col items-center justify-center relative overflow-hidden group">
           
           {/* Chart Background Grid */}
           <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10 pointer-events-none">
             {[...Array(24)].map((_, i) => <div key={i} className="border-[0.5px] border-slate-500" />)}
           </div>

           <div className="flex items-end gap-3 h-40 mb-8 relative z-10">
              {[40, 55, 45, 65, 60, 80, 95].map((height, i) => (
                <motion.div 
                  key={i}
                  className="w-10 rounded-t-md relative group-hover:opacity-100 opacity-80 transition-opacity"
                  style={{ height: `${height}%`, backgroundColor: i === 6 ? '#10B981' : '#334155' }}
                  animate={i === 6 ? { height: ["90%", "100%", "95%"], backgroundColor: ["#10B981", "#34D399", "#10B981"] } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {i === 6 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#10B981] opacity-20 blur-md rounded-full animate-pulse" />
                  )}
                </motion.div>
              ))}
           </div>

           <div className="bg-slate-800 border border-slate-700 rounded-full px-8 py-3 flex items-center gap-4 shadow-xl relative z-10">
             <ShieldCheck size={24} className="text-[#10B981]" />
             <div className="flex flex-col">
               <span className="text-[11px] text-slate-400 font-mono uppercase tracking-widest">Model Precision</span>
               <div className="flex items-center gap-2">
                 <span className="text-[18px] text-white font-bold font-mono">99.9%</span>
                 <motion.span 
                   animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
                   className="text-[#10B981] font-bold text-[14px]"
                 >
                   ↑
                 </motion.span>
               </div>
             </div>
           </div>

        </div>
      )
    }
  ];

  return (
    <section
      id="the-shift"
      className="relative w-full py-24 sm:py-32 border-b overflow-hidden"
      style={{
        backgroundColor: 'var(--ibot-bg-light)',
        borderColor: 'var(--ibot-border-light)',
      }}
    >
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 max-w-[1200px]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[var(--ibot-text-on-light)] font-normal mb-6 text-[40px] sm:text-[48px] leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Built for the talent signals <br />
            <span className="font-semibold text-[#EA580C]">
              that actually matter.
            </span>
          </h2>
          <p className="text-[#475569] text-[18px] leading-[1.6]">
            IBOT clears the noise so your engineering and hiring teams can focus on real capabilities, not resume optimizations.
          </p>
        </motion.div>

        {/* ── Feature Tabs Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Tab Menu */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {features.map((feature, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                    isActive 
                      ? 'bg-white border-black/10 shadow-lg scale-[1.02] ring-1 ring-black/5' 
                      : 'bg-transparent border-transparent hover:bg-black/5 hover:scale-[1.02] hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? 'bg-[#0F172A] text-white' : 'bg-black/5 text-[#64748B]'
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className={`text-[18px] font-semibold transition-colors ${
                      isActive ? 'text-[#0F172A]' : 'text-[#64748B]'
                    }`}>
                      {feature.title}
                    </h3>
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[15px] text-[#475569] leading-relaxed pl-14 pt-1">
                          {feature.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Right: Active Visual */}
          <div className="lg:col-span-7 h-[400px] lg:h-[500px]">
            <div className="w-full h-full rounded-3xl bg-[#F8FAFC] border border-black/5 overflow-hidden relative shadow-inner">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {features[activeTab].renderGraphic()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
