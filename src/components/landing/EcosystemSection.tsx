import React from 'react';
import { motion } from 'framer-motion';
import { Code, Settings, Workflow, CheckCircle2 } from 'lucide-react';

export function EcosystemSection() {
  return (
    <section
      id="configuration"
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
            Keep your process.<br />
            <span className="font-semibold text-[#0F172A]">
              Add evidence where you need it.
            </span>
          </h2>
          <p className="text-[var(--ibot-text-muted-light)] text-[18px] leading-[1.6]">
            Configure modular pipelines that integrate seamlessly with your existing ATS and workflows.
          </p>
        </motion.div>

        {/* Visual Pipeline Configuration */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/5 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {[
              { num: '01', title: 'Identify', icon: <Settings size={20} />, active: true },
              { num: '02', title: 'Build', icon: <Code size={20} />, active: true },
              { num: '03', title: 'Operate', icon: <Workflow size={20} />, active: true },
              { num: '04', title: 'Transfer', icon: <CheckCircle2 size={20} />, active: true },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border ${phase.active ? 'bg-white border-[#0F172A]/10 shadow-md' : 'bg-[#F8F9FA] border-black/5 shadow-sm'} text-center flex flex-col items-center justify-center relative transition-all`}
              >
                {phase.active && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-[#EA580C]" />
                )}
                
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${phase.active ? 'bg-[#0F172A]/5 border border-[#0F172A]/10 text-[#0F172A]' : 'bg-black/5 text-[#94A3B8]'}`}>
                  {phase.icon}
                </div>
                <div className="text-[11px] font-bold tracking-widest text-[#94A3B8] mb-1">PHASE {phase.num}</div>
                <div className={`text-[18px] font-semibold ${phase.active ? 'text-[#0F172A]' : 'text-[#64748B]'}`}>{phase.title}</div>
                
                {phase.active && (
                  <div className="mt-4 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-[10px] font-bold tracking-wide">
                    ACTIVE GATE
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
