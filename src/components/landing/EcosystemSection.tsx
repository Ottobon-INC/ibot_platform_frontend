import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, TestTube2, GitBranch, FileCheck } from 'lucide-react';

export function EcosystemSection() {
  const stages = [
    {
      num: '01',
      title: 'Diagnostic Baseline',
      desc: 'Translates production standards into problem statements.',
      icon: <Terminal strokeWidth={2} size={24} />
    },
    {
      num: '02',
      title: 'Sandbox Execution',
      desc: 'Candidates push commits and satisfy automated tests.',
      icon: <TestTube2 strokeWidth={2} size={24} />
    },
    {
      num: '03',
      title: 'Peer Review',
      desc: 'Senior leads critique code. We measure adaptability.',
      icon: <GitBranch strokeWidth={2} size={24} />
    },
    {
      num: '04',
      title: 'Executive Dossier',
      desc: 'Compiles a permanent, audit-ready readiness ledger.',
      icon: <FileCheck strokeWidth={2} size={24} />
    }
  ];

  return (
    <section id="evidence-trail" className="relative w-full py-32 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="relative z-10 mx-auto w-full px-5 max-w-[1200px]">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24">
          <h2 className="text-slate-900 font-normal mb-6 text-[40px] sm:text-[48px] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Every candidate builds an <br />
            <span className="font-bold text-orange-600">evidence trail.</span>
          </h2>
        </motion.div>

        <div className="relative w-full">
          {/* Base Connecting Line */}
          <div className="absolute top-[48px] left-[12%] right-[12%] h-[2px] bg-slate-200 z-0 hidden md:block" />
          
          {/* Animated Glowing Beam */}
          <motion.div 
            initial={{ left: "12%", width: 0 }}
            whileInView={{ width: "76%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-[48px] h-[2px] bg-orange-500 z-0 hidden md:block shadow-[0_0_15px_rgba(234,88,12,0.8)]"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {stages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                  {/* Rotating inner ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300 group-hover:border-orange-400 group-hover:rotate-180 transition-all duration-1000 ease-in-out" />
                  
                  {/* Core Icon */}
                  <div className="relative w-[70px] h-[70px] bg-white border-2 border-slate-200 group-hover:border-orange-500 rounded-full flex items-center justify-center shadow-sm z-10 transition-all duration-300">
                    <div className="text-slate-700 group-hover:text-orange-600 transition-colors duration-300">
                      {stage.icon}
                    </div>
                  </div>
                </div>

                <div className="text-[12px] font-black text-slate-400 group-hover:text-orange-500 transition-colors duration-300 uppercase tracking-[0.3em] mb-4">
                  STAGE {stage.num}
                </div>

                <h3 className="text-2xl text-slate-900 font-bold mb-3">{stage.title}</h3>
                <p className="text-sm text-slate-500 max-w-xs">{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
