import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, TestTube2, GitBranch, FileCheck } from 'lucide-react';

export function NurturingSection() {
  const stages = [
    {
      num: '01',
      title: 'Diagnostic Baseline',
      desc: 'Translates your production standards into concrete problem statements inside an isolated dev-container.',
      icon: <Terminal strokeWidth={1.5} size={22} />
    },
    {
      num: '02',
      title: 'Sandbox Execution',
      desc: 'Candidates write code, push commits, and satisfy automated test assertions mapped to your repo.',
      icon: <TestTube2 strokeWidth={1.5} size={22} />
    },
    {
      num: '03',
      title: 'Peer Review',
      desc: 'Senior leads critique code. We measure how rapidly candidates incorporate feedback without regressions.',
      icon: <GitBranch strokeWidth={1.5} size={22} />
    },
    {
      num: '04',
      title: 'Executive Dossier',
      desc: 'All commits and iterations are compiled into a permanent, audit-ready readiness ledger.',
      icon: <FileCheck strokeWidth={1.5} size={22} />
    }
  ];

  return (
    <section
      id="evidence-trail"
      className="relative w-full py-24 sm:py-32 bg-white border-b border-slate-200 overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 max-w-[1200px]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <h2 className="text-[#0F172A] font-normal mb-6 text-[40px] sm:text-[48px] leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Every candidate builds an <br/>
            <span className="font-bold text-[#EA580C]">
              evidence trail.
            </span>
          </h2>
          <p className="text-slate-500 text-[18px] leading-[1.6] max-w-3xl mx-auto">
            A continuous progression from initial calibration to hands-on execution, peer review, and <br className="hidden md:block" /> verified readiness.
          </p>
        </motion.div>

        {/* The Timeline Layout */}
        <div className="relative w-full">
          
          {/* Horizontal Connecting Line */}
          <div className="absolute top-[48px] left-[12%] right-[12%] h-[1px] bg-slate-200 z-0 hidden md:block" />

          {/* Grid for Stages */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {stages.map((stage, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center text-center group cursor-pointer p-4 rounded-3xl hover:bg-slate-50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, y: { duration: 0.2 } }}
              >
                 {/* Icon Container with Abstract Squircle Shapes */}
                 <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                   
                   {/* Background Blob 1 - Continuous Spin */}
                   <div className="absolute inset-0 border border-slate-200 group-hover:border-orange-300 group-hover:bg-orange-50 rounded-[35%] animate-[spin_12s_linear_infinite] transition-colors duration-500 ease-in-out bg-white/50" />
                   
                   {/* Background Blob 2 - Reverse Continuous Spin */}
                   <div className="absolute inset-0 border border-slate-100 group-hover:border-orange-200 rounded-[2.5rem] animate-[spin_15s_linear_infinite_reverse] transition-colors duration-500 ease-in-out" />
                   
                   {/* Inner Circle (solid white to cover the line) */}
                   <div className="relative w-[70px] h-[70px] bg-white border border-slate-200 group-hover:border-orange-400 rounded-full flex items-center justify-center shadow-sm z-10 group-hover:shadow-lg transition-all duration-300">
                     {/* The icon */}
                     <div className="text-slate-800 group-hover:text-orange-600 transform group-hover:scale-110 transition-all duration-300">
                       {stage.icon}
                     </div>
                   </div>

                 </div>

                 {/* Text Content */}
                 <div className="text-[11px] font-bold text-[#EA580C] uppercase tracking-[0.2em] mb-4">
                   STAGE {stage.num}
                 </div>
                 
                 <h3 className="text-[20px] text-slate-900 group-hover:text-orange-600 transition-colors duration-300 font-semibold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                   {stage.title}
                 </h3>
                 
                 <p className="text-[14px] text-slate-500 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed px-2">
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
