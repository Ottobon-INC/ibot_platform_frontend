import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, TestTube2, GitMerge, FileCheck } from 'lucide-react';

const STAGES = [
  {
    icon: <Terminal size={24} />,
    title: 'Diagnostic Baseline',
    desc: 'Translates your production standards into concrete problem statements inside an isolated dev-container.',
  },
  {
    icon: <TestTube2 size={24} />,
    title: 'Sandbox Execution',
    desc: 'Candidates write code, push commits, and satisfy automated test assertions mapped to your repo.',
  },
  {
    icon: <GitMerge size={24} />,
    title: 'Peer Review',
    desc: 'Senior leads critique code. We measure how rapidly candidates incorporate feedback without regressions.',
  },
  {
    icon: <FileCheck size={24} />,
    title: 'Executive Dossier',
    desc: 'All commits and iterations are compiled into a permanent, audit-ready readiness ledger.',
  },
];

export function NurturingSection() {
  return (
    <section
      id="evidence-trail"
      className="relative w-full py-24 sm:py-32 border-b overflow-hidden"
      style={{
        backgroundColor: 'var(--ibot-bg-light)',
        borderColor: 'var(--ibot-border-light)',
      }}
    >
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8" style={{ maxWidth: '1200px' }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-[var(--ibot-text-on-light)] font-normal mb-6 text-[40px] sm:text-[48px] leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Every candidate builds an <br />
            <span className="font-semibold text-[#EA580C]">
              evidence trail.
            </span>
          </h2>
          <p className="text-[var(--ibot-text-muted-light)] text-[18px] leading-[1.6]">
            A continuous progression from initial calibration to hands-on execution, peer review, and verified readiness.
          </p>
        </motion.div>

        {/* ── 4 Step Visual Timeline ── */}
        <div className="relative">
          {/* Vertical connection line for mobile, horizontal for desktop */}
          <div className="absolute top-0 bottom-0 left-8 w-[2px] bg-black/5 md:hidden" />
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-black/5" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {STAGES.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 flex flex-col md:items-center md:text-center pl-16 md:pl-0"
              >
                {/* Icon Node */}
                <div className="absolute left-0 md:relative md:mx-auto w-16 h-16 rounded-2xl bg-white border border-black/10 shadow-sm flex items-center justify-center text-[#0F172A] mb-6">
                  {stage.icon}
                  <div className="absolute -inset-2 rounded-3xl border border-[#0F172A]/10 animate-[spin_10s_linear_infinite]" />
                </div>
                
                {/* Stage Number */}
                <div className="text-[12px] font-mono font-bold tracking-widest text-[#EA580C] mb-2">STAGE 0{idx + 1}</div>
                
                {/* Content */}
                <h3 className="text-[20px] text-[#0F172A] font-semibold mb-3">{stage.title}</h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
