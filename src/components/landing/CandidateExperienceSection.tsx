import React from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, Activity, ShieldCheck, Zap } from 'lucide-react';

export function CandidateExperienceSection() {
  return (
    <section
      id="candidate-experience"
      className="relative w-full py-24 sm:py-32 border-b overflow-hidden"
      style={{
        backgroundColor: 'var(--ibot-bg-light)',
        borderColor: 'var(--ibot-border-light)',
      }}
    >
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8" style={{ maxWidth: '1200px' }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-[var(--ibot-text-on-light)] font-normal mb-6 text-[40px] sm:text-[48px] leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Precision telemetry on{' '}
            <span className="font-semibold text-[#0F172A]">
              engineering capability.
            </span>
          </h2>
          <p className="text-[var(--ibot-text-muted-light)] text-[18px] leading-[1.6]">
            Stop reading resumes. Start monitoring live execution inside isolated, SOC 2 compliant sandboxes.
          </p>
        </motion.div>

        {/* ── Visual Bento Box Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Card 1: PR Telemetry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 relative p-8 rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <GitPullRequest size={20} className="text-[#0F172A]" />
                <span className="text-[14px] font-bold text-[#0F172A] tracking-wide uppercase">Live Code Telemetry</span>
              </div>
              
              {/* Abstract UI Visual */}
              <div className="flex-grow mb-8 bg-[#F8F9FA] rounded-xl border border-black/5 p-4 font-mono text-[11px] sm:text-[12px] overflow-hidden shadow-inner">
                <div className="flex justify-between text-[#64748B] mb-4 border-b border-black/5 pb-2 font-bold">
                  <span>src/engine/partitioning.ts</span>
                  <span className="text-[#10B981]">42 passing</span>
                </div>
                <div className="text-[#EF4444] bg-[#EF4444]/10 -mx-4 px-4 py-1 border-l-2 border-[#EF4444]">- const partitionKey = event.userId;</div>
                <div className="text-[#10B981] bg-[#10B981]/10 -mx-4 px-4 py-1 border-l-2 border-[#10B981]">+ const partitionKey = generateTTLKey(event.userId);</div>
                <div className="text-[#10B981] bg-[#10B981]/10 -mx-4 px-4 py-1 border-l-2 border-[#10B981]">+ await this.cache.set(partitionKey, event.data, {"{"} nx: true {"}"});</div>
              </div>

              <div>
                <h3 className="text-[20px] text-[#0F172A] font-semibold mb-2">Automated Pull Request Analysis</h3>
                <p className="text-[14px] text-[#475569]">See exactly how candidates handle concurrency, test coverage, and architectural feedback in real-time.</p>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Readiness Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 relative p-8 rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
          >
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#10B981]/5 to-transparent pointer-events-none" />
            
            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <Activity size={20} className="text-[#10B981]" />
                <span className="text-[14px] font-bold text-[#0F172A] tracking-wide uppercase">Readiness Matrix</span>
              </div>
              
              {/* Abstract Visual */}
              <div className="flex-grow flex items-center justify-center mb-8">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="6" fill="none" className="text-black/5" />
                    <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="6" fill="none" strokeDasharray="377" strokeDashoffset="37" className="text-[#10B981]" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[32px] font-bold text-[#0F172A]">90<span className="text-[16px]">%</span></span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[20px] text-[#0F172A] font-semibold mb-2">Ready for Prod</h3>
                <p className="text-[14px] text-[#475569]">Zero guesswork. Our model evaluates code hygiene, security, and velocity.</p>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Security & Audit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 relative p-8 rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300 flex flex-col md:flex-row items-center gap-10"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={20} className="text-[#0F172A]" />
                <span className="text-[14px] font-bold text-[#0F172A] tracking-wide uppercase">Permanent Ledger</span>
              </div>
              <h3 className="text-[24px] text-[#0F172A] font-semibold mb-4">Executive Sign-Off & Audit Trail</h3>
              <p className="text-[15px] text-[#475569] max-w-lg">
                Every commit, review comment, and capability score is permanently logged. Align recruiters, engineering leads, and stakeholders with objective, indisputable evidence.
              </p>
            </div>
            
            <div className="flex-1 w-full flex justify-end">
               <div className="flex items-center gap-4 bg-[#F8F9FA] p-5 rounded-2xl border border-black/5 shadow-inner">
                 <div className="w-12 h-12 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center">
                   <ShieldCheck size={24} className="text-[#10B981]" />
                 </div>
                 <div>
                   <div className="text-[11px] font-mono font-bold text-[#64748B] mb-1 uppercase tracking-wider">Final Authorization</div>
                   <div className="text-[15px] text-[#0F172A] font-semibold">Candidate Approved</div>
                   <div className="text-[13px] text-[#10B981] font-mono">Hash: 0x8f4...b2a</div>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
