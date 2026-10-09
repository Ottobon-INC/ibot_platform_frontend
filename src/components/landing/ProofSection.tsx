import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Rocket, LineChart } from 'lucide-react';

interface ProofSectionProps {
  onCTA: () => void;
}

const OUTCOMES = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'Zero Hiring Risk',
    desc: 'Eliminate subjective interviews. See actual production-ready code before making an offer.',
    color: '#0F172A',
  },
  {
    icon: <Rocket size={28} />,
    title: 'Day-One Velocity',
    desc: 'Candidates onboard inside your own repository conventions, eliminating month-one ramp-up drag.',
    color: '#EA580C',
  },
  {
    icon: <LineChart size={28} />,
    title: 'Verifiable ROI',
    desc: 'Every commit and feedback loop is tracked, proving candidate value objectively.',
    color: '#0F172A',
  },
];

export function ProofSection({ onCTA }: ProofSectionProps) {
  return (
    <section
      id="outcomes"
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
            Commercial flexibility backed by <br />
            <span className="font-semibold text-[#0F172A]">
              verified capability.
            </span>
          </h2>
          <p className="text-[var(--ibot-text-muted-light)] text-[18px] leading-[1.6]">
            Whether you are hiring directly, deploying contractors, or evaluating internal talent, IBOT provides the exact evidence you need.
          </p>
        </motion.div>

        {/* ── 3 Column Feature Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OUTCOMES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-black/5 bg-white shadow-sm relative group hover:shadow-lg transition-all duration-300"
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ color: item.color }}
              />

              <div 
                className="mb-8 w-14 h-14 rounded-xl flex items-center justify-center bg-black/5 border border-black/5"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>

              <h3 className="text-[22px] text-[#0F172A] font-semibold mb-4">{item.title}</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
