import React from 'react';
import { ShieldCheck, GitBranch, TerminalSquare, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export function ShiftSection() {
  const cards = [
    {
      icon: <TerminalSquare size={24} />,
      title: 'Every commit accounted for',
      desc: 'Built from patterns seen across thousands of real engineering incidents — not a generic technical screen.',
      id: 'LOG 01',
      color: '#EA580C' // Coral
    },
    {
      icon: <GitBranch size={24} />,
      title: 'Validates, not just flags',
      desc: 'IBOT doesn’t stop at detection — it traces the candidate’s resolution logic back to its root architectural cause.',
      id: 'LOG 02',
      color: '#0F172A' // Navy
    },
    {
      icon: <Search size={24} />,
      title: 'From thousands down to one',
      desc: 'Thousands of signals come in. What reaches your hiring team is only what genuinely needs human judgment.',
      id: 'LOG 03',
      color: '#EA580C' // Coral
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Sharper with every case',
      desc: 'Every investigation feeds back into the model — tomorrow’s triage is faster and more precise than today’s.',
      id: 'LOG 04',
      color: '#0F172A' // Navy
    }
  ];

  return (
    <section
      id="the-shift"
      className="relative w-full py-32 border-b overflow-hidden"
      style={{
        backgroundColor: 'var(--ibot-bg-light)',
        borderColor: 'var(--ibot-border-light)',
      }}
    >
      <div
        className="relative z-10 mx-auto w-full px-5 sm:px-8"
        style={{ maxWidth: '1200px' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-[var(--ibot-text-on-light)] font-normal mb-6 text-[40px] sm:text-[48px] leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Built for the talent signals <br />
            <span className="font-semibold text-[#EA580C]">
              that actually matter.
            </span>
          </h2>
          <p className="text-[var(--ibot-text-muted-light)] text-[18px] leading-[1.6]">
            IBOT clears the noise so your engineering and hiring teams can focus on real capabilities, not resume optimizations.
          </p>
        </motion.div>

        {/* ── 4-Column Card Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col p-8 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Card Meta Header */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#94A3B8]">
                  {card.id}
                </span>
                <div 
                  className="w-1.5 h-1.5 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" 
                  style={{ backgroundColor: card.color }}
                />
              </div>

              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${card.color}10`, color: card.color }}
              >
                {card.icon}
              </div>

              {/* Card Content */}
              <h3 className="text-[18px] font-semibold text-[#0F172A] mb-3">
                {card.title}
              </h3>
              <p className="text-[14px] text-[#64748B] leading-relaxed flex-grow">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
