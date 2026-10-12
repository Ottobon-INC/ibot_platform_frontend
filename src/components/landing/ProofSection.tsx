import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Rocket, LineChart } from 'lucide-react';

const OUTCOMES = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Zero Hiring Risk',
    desc: 'Eliminate subjective interviews. See actual production-ready code before making an offer.',
  },
  {
    icon: <Rocket size={32} />,
    title: 'Day-One Velocity',
    desc: 'Candidates onboard inside your own repository conventions, eliminating month-one ramp-up drag.',
  },
  {
    icon: <LineChart size={32} />,
    title: 'Verifiable ROI',
    desc: 'Every commit and feedback loop is tracked, proving candidate value objectively.',
  },
];

export function ProofSection({ onCTA }: { onCTA?: () => void }) {
  return (
    <section id="outcomes" className="relative w-full py-32 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto w-full px-5 max-w-[1200px]">
        
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24">
          <h2 className="text-slate-900 font-normal mb-6 text-[40px] sm:text-[48px] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Commercial flexibility backed by <br />
            <span className="font-semibold text-orange-600">verified capability.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OUTCOMES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative group rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative p-10 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl text-slate-900 font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
