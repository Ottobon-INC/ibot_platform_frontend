import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, GitPullRequest, CheckCircle2, ChevronRight, X } from 'lucide-react';

export function ApproachSection() {
  const [isSplit, setIsSplit] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const phases = [
    {
      letter: 'I',
      name: 'Identify',
      title: 'System Diagnostic',
      desc: 'Before a single line of code is written, IBOT provisions a secure, replica environment of your exact production stack to ensure the test is authentic.',
      icon: <Terminal size={24} />
    },
    {
      letter: 'B',
      name: 'Build',
      title: 'Sandbox Execution',
      desc: 'Candidates solve real, complex engineering problems inside an actual IDE. We track not just if the code passes, but how they approach debugging.',
      icon: <Code2 size={24} />
    },
    {
      letter: 'O',
      name: 'Operate',
      title: 'Peer Code Review',
      desc: 'IBOT compiles a comprehensive diff and behavioral log, presenting it in a standard Pull Request format for your senior engineers to review effortlessly.',
      icon: <GitPullRequest size={24} />
    },
    {
      letter: 'T',
      name: 'Transfer',
      title: 'Executive Dossier',
      desc: 'All commits and iterations are compiled into a permanent, audit-ready readiness ledger for final executive sign-off.',
      icon: <CheckCircle2 size={24} />
    }
  ];

  return (
    <section
      id="how-it-works"
      className="relative w-full border-b overflow-hidden py-24 sm:py-32"
      style={{
        backgroundColor: 'var(--ibot-bg-light)',
        borderColor: 'var(--ibot-border-light)',
      }}
    >
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 max-w-[1200px]">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[var(--ibot-text-on-light)] font-normal mb-6 text-[40px] sm:text-[48px] leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            A structured path from <br />
            <span className="font-semibold text-[#EA580C]">
              potential to delivery.
            </span>
          </h2>
        </motion.div>

        {/* Interactive IBOT Container */}
        <div className="w-full h-[400px] sm:h-[480px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            {!isSplit ? (
              
              // ── INITIAL STATE: THE IBOT CORE ──
              <motion.div
                key="ibot-core"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => setIsSplit(true)}
                className="w-72 h-72 bg-slate-900 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center cursor-pointer group relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Pulsing rings */}
                <div className="absolute inset-0 border border-white/10 rounded-[3rem] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                
                <h3 className="text-7xl font-black tracking-widest text-white relative z-10 group-hover:scale-110 transition-transform duration-500">
                  IBOT
                </h3>
                <div className="mt-6 flex items-center gap-2 text-[11px] text-orange-400 font-mono tracking-[0.2em] relative z-10">
                  <span>CLICK TO INITIATE</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>

            ) : (

              // ── SPLIT STATE: 4 ACCORDION CARDS ──
              <motion.div
                key="split-cards"
                initial={{ opacity: 0, gap: "0rem" }}
                animate={{ opacity: 1, gap: "1rem" }}
                className="w-full h-full flex"
                onMouseLeave={() => setExpandedIndex(null)}
              >
                {phases.map((phase, idx) => {
                  const isExpanded = expandedIndex === idx;
                  
                  return (
                    <motion.div
                      layout
                      key={idx}
                      onMouseEnter={() => setExpandedIndex(idx)}
                      onClick={() => setExpandedIndex(idx)}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        flex: isExpanded ? 5 : 1
                      }}
                      whileHover={!isExpanded ? { y: -8 } : {}}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400,
                        damping: 30
                      }}
                      className={`relative overflow-hidden cursor-pointer rounded-3xl border transition-colors duration-200 flex flex-col group ${
                        isExpanded 
                          ? 'bg-white border-slate-200 shadow-2xl' 
                          : 'bg-slate-900 border-slate-800 shadow-lg hover:bg-slate-800 hover:border-orange-500/40 hover:shadow-[0_20px_50px_rgba(234,88,12,0.15)]'
                      }`}
                    >
                      {/* Giant Background Letter */}
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] font-black pointer-events-none transition-all duration-700 ${
                        isExpanded ? 'text-slate-100 scale-150 rotate-12' : 'text-white/5 group-hover:scale-110'
                      }`}>
                        {phase.letter}
                      </div>

                      {/* Header Area (Always visible, rotates if collapsed) */}
                      <motion.div layout className="p-6 relative z-10 flex flex-col h-full">
                        
                        <div className="flex items-center justify-between">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                            isExpanded ? 'bg-orange-50 text-orange-600' : 'bg-white/10 text-white group-hover:bg-orange-500 group-hover:text-white'
                          }`}>
                            {phase.icon}
                          </div>
                        </div>

                        <div className="mt-8">
                          <h3 className={`text-5xl font-black mb-2 transition-colors duration-500 ${isExpanded ? 'text-slate-900' : 'text-white'}`}>
                            {phase.letter}
                          </h3>
                          <h4 className={`text-sm font-bold tracking-widest uppercase transition-colors duration-500 ${isExpanded ? 'text-orange-600' : 'text-slate-400'}`}>
                            {phase.name}
                          </h4>
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                              className="mt-8 border-t border-slate-100 pt-8"
                            >
                              <h5 className="text-3xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                {phase.title}
                              </h5>
                              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                {phase.desc}
                              </p>
                              
                              <div className="mt-8 flex items-center gap-3 text-orange-600 font-semibold text-sm cursor-pointer hover:gap-5 transition-all">
                                Explore this phase <ChevronRight size={16} />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Collapsed Vertical Text (Optional flair) */}
                        {!isExpanded && (
                          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 font-mono tracking-[0.2em] uppercase origin-left -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity">
                            HOVER TO EXPAND
                          </div>
                        )}

                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Reset button to go back to the single IBOT cube */}
          <AnimatePresence>
            {isSplit && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onClick={() => { setIsSplit(false); setExpandedIndex(null); }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-sm text-slate-500 hover:text-slate-800 underline underline-offset-4"
              >
                Reset Pathway
              </motion.button>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
