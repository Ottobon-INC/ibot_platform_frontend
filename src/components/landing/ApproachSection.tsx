import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Terminal } from 'lucide-react';

export function ApproachSection() {
  return (
    <section
      id="how-it-works"
      className="relative w-full py-24 sm:py-32 border-b overflow-hidden"
      style={{
        backgroundColor: 'var(--ibot-bg-light)',
        borderColor: 'var(--ibot-border-light)',
      }}
    >
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8" style={{ maxWidth: '1200px' }}>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F172A]/5 border border-[#0F172A]/10 text-[#0F172A] text-[12px] font-mono mb-6 font-semibold tracking-wide">
              <Terminal size={14} />
              <span>THE IBOT PATHWAY</span>
            </div>
            
            <h2 className="text-[var(--ibot-text-on-light)] font-normal mb-6 text-[40px] sm:text-[48px] leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              A structured path from <br />
              <span className="font-semibold text-[#0F172A]">
                potential to delivery.
              </span>
            </h2>
            
            <p className="text-[var(--ibot-text-muted-light)] text-[18px] leading-[1.6] mb-8">
              Move past speculative interviews. Candidates must prove their capability by committing code, fixing bugs, and responding to feedback in a secure replica of your production environment.
            </p>

            <ul className="space-y-4">
              {[
                'Zero subjective panel debates',
                'Code assessed in your specific stack',
                'Peer-reviewed by senior leads',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[#475569] text-[16px] font-medium">
                  <CheckCircle2 size={18} className="text-[#EA580C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Visual Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-md">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/5">
                <span className="text-[#0F172A] font-semibold">Evaluation Pipeline</span>
                <span className="text-[#10B981] text-[12px] font-mono px-2 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/20 font-bold">ACTIVE</span>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'System Diagnostic', status: 'Passed', progress: '100%' },
                  { label: 'Sandbox Execution', status: 'Reviewing', progress: '85%' },
                  { label: 'Peer Code Review', status: 'Pending', progress: '0%' },
                ].map((step, idx) => (
                  <div key={idx} className="bg-black/5 border border-black/5 rounded-xl p-4">
                    <div className="flex justify-between text-[14px] mb-3">
                      <span className="text-[#0F172A] font-medium">{step.label}</span>
                      <span className="text-[#64748B] font-mono">{step.status}</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#EA580C] rounded-full transition-all duration-1000"
                        style={{ width: step.progress }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
