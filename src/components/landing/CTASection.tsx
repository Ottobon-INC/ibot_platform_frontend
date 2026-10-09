import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection({ onCTA }: { onCTA?: () => void }) {
  return (
    <section className="relative w-full py-40 overflow-hidden bg-white flex items-center justify-center">
      {/* Massive Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-400/20 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 mx-auto max-w-[900px] px-5 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
          
          <h2 className="text-slate-900 font-black text-[48px] sm:text-[64px] mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
            The Goal Isn't More Applicants.
          </h2>
          <p className="text-orange-600 text-[24px] sm:text-[32px] font-medium mb-12">
            It's More People You Can Confidently Put to Work.
          </p>
          
          <button 
            onClick={onCTA} 
            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 rounded-full bg-slate-900 text-white font-bold text-xl shadow-[0_10px_40px_rgba(15,23,42,0.2)] hover:shadow-[0_15px_60px_rgba(15,23,42,0.3)] hover:scale-105 hover:bg-slate-800 transition-all duration-300"
          >
            Initiate Deployment 
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <div className="mt-16 pt-10 border-t border-slate-200 flex flex-wrap justify-center gap-8 sm:gap-12 text-sm font-mono text-slate-500 tracking-wider">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500" size={18}/> 
              ZERO ATS DISRUPTION
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500" size={18}/> 
              ISOLATED SANDBOXES
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500" size={18}/> 
              AUDIT-READY DOSSIERS
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
