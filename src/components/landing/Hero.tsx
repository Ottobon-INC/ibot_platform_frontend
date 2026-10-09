import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlassTileWaveGrid } from './GlassTileWaveGrid';

interface HeroProps {
  onCTA: () => void;
}

export function Hero({ onCTA }: HeroProps) {
  function scrollToEvidenceTrail(e: React.MouseEvent) {
    e.preventDefault();
    const el = document.querySelector('#evidence-trail');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-[var(--ibot-bg-light)] flex flex-col items-center">
      
      {/* Animated Background Grid */}
      <GlassTileWaveGrid className="opacity-70" />

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-end items-start z-0">
        <div 
          className="w-[800px] h-[800px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #EA580C 0%, transparent 70%)', transform: 'translate(20%, -20%)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #0F172A 0%, transparent 70%)', transform: 'translate(-20%, 20%)' }}
        />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-black/5 bg-white shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
            <span className="text-[12px] font-bold text-[#0F172A] uppercase tracking-widest">
              IBOT Enterprise Pipeline
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--ibot-text-on-light)] mb-6 text-[52px] sm:text-[72px] lg:text-[84px] leading-[1.05] tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
          >
            Upgrade your talent pipeline <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] to-[#EA580C] italic font-medium pr-2">
              without disruption.
            </span>
          </motion.h1>

          {/* Reduced Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-[18px] sm:text-[22px] leading-[1.6] text-[var(--ibot-text-muted-light)] max-w-2xl font-light"
          >
            Build capable, business-ready contributors alongside your existing teams. We handle the preparation, so your managers don't have to.
          </motion.p>

          {/* CTAs & Avatars */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <button
                type="button"
                onClick={onCTA}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium text-[16px] transition-colors shadow-lg"
              >
                Book a demo
                <ArrowRight size={18} />
              </button>
              <a
                href="#evidence-trail"
                onClick={scrollToEvidenceTrail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-white border border-black/10 text-[#0F172A] hover:bg-black/5 font-medium text-[16px] transition-colors shadow-sm"
              >
                See the evidence
              </a>
            </div>

            {/* Attractive Element: Avatar Group + Trust text */}
            <div className="flex items-center gap-4 pt-2 border-t border-black/5">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=68" alt="Avatar 1" />
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=47" alt="Avatar 2" />
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=33" alt="Avatar 3" />
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=12" alt="Avatar 4" />
              </div>
              <div className="text-left">
                <div className="text-[14px] font-semibold text-[#0F172A]">Trusted by 500+</div>
                <div className="text-[13px] text-[#64748B]">Engineering Leaders</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Metrics / Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1000px] mx-auto px-6 mt-20"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 p-8 rounded-2xl bg-white border border-black/5 shadow-md">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EA580C]/10 flex items-center justify-center">
              <Zap size={24} className="text-[#EA580C]" />
            </div>
            <div className="text-left">
              <div className="text-[18px] font-bold text-[#0F172A]">Day-1 Ready</div>
              <div className="text-[13px] text-[#64748B]">Business-ready impact</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-black/5" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center">
              <Clock size={24} className="text-[#0F172A]" />
            </div>
            <div className="text-left">
              <div className="text-[18px] font-bold text-[#0F172A]">Any Phase</div>
              <div className="text-[13px] text-[#64748B]">Step in when needed</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-black/5" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
              <ShieldCheck size={24} className="text-[#10B981]" />
            </div>
            <div className="text-left">
              <div className="text-[18px] font-bold text-[#0F172A]">Zero-Liability</div>
              <div className="text-[13px] text-[#64748B]">Risk-free integration</div>
            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
