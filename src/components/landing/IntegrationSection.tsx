import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code2, Briefcase, Network } from 'lucide-react';

const AUDIENCES = [
  {
    icon: <Users size={24} />,
    role: 'Talent Leaders',
    coreNeed: 'Signal before the offer.',
    solution: 'Eliminate subjective interviews. Get concrete, reproducible evidence of how candidates actually build and adapt.',
    color: '#0F172A', // Navy
  },
  {
    icon: <Code2 size={24} />,
    role: 'Engineering Leaders',
    coreNeed: 'Readiness before production.',
    solution: 'Candidates complete sandbox tasks mirrored on your conventions. Inspect pull requests and coachability before day one.',
    color: '#EA580C', // Coral
  },
  {
    icon: <Briefcase size={24} />,
    role: 'Capability Leaders',
    coreNeed: 'Direct connection to role.',
    solution: 'Move past completion certificates. Benchmark actual capability gaps across realistic operational milestones.',
    color: '#0F172A', // Navy
  },
  {
    icon: <Network size={24} />,
    role: 'Workforce Partners',
    coreNeed: 'Pre-validated placements.',
    solution: 'Deliver pre-tested contributors backed by audited sandbox execution records on the client’s exact stack.',
    color: '#EA580C', // Coral
  },
];

export function IntegrationSection() {
  return (
    <section
      id="who-its-for"
      className="relative w-full py-24 sm:py-32 border-b overflow-hidden"
      style={{
        backgroundColor: 'var(--ibot-bg-light)',
        borderColor: 'var(--ibot-border-light)',
      }}
    >
      <div className="mx-auto w-full px-5 sm:px-8" style={{ maxWidth: '1200px' }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-[var(--ibot-text-on-light)] font-normal mb-6 text-[40px] sm:text-[48px] leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Built for enterprise <span className="font-semibold text-[#EA580C]">decision makers.</span>
          </h2>
          <p className="text-[var(--ibot-text-muted-light)] text-[18px] leading-[1.6]">
            Different leaders face different bottlenecks. IBOT provides the specific evidence needed to remove uncertainty at every level.
          </p>
        </motion.div>

        {/* ── 2x2 Minimal Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AUDIENCES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-black/5 bg-white shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-black/5 border border-black/5"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wide border border-black/5 bg-black/5 text-[#475569]">
                  {item.coreNeed}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-[24px] text-[#0F172A] font-semibold mb-3">{item.role}</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
