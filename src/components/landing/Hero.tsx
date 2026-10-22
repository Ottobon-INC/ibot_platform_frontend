import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, Zap, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassTileWaveGrid } from './GlassTileWaveGrid';

interface HeroProps {
  onCTA: () => void;
}

export function Hero({ onCTA }: HeroProps) {
  const [pipelineMode, setPipelineMode] = useState<'augmented' | 'traditional'>('augmented');

  function scrollToApproach(e: React.MouseEvent) {
    e.preventDefault();
    const el = document.querySelector('#how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section className="relative w-full pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden bg-[var(--ibot-bg-light)] flex flex-col items-center">
      
      {/* Animated Background Grid */}
      <GlassTileWaveGrid className="opacity-60" />

      {/* Subtle Ambient Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            x: ['0%', '-10%', '5%', '0%'], 
            y: ['0%', '8%', '-8%', '0%'],
            scale: [1, 1.1, 0.95, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] right-[-5%] w-[750px] h-[750px] rounded-full opacity-[0.05] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)' }}
        />
        <motion.div 
          animate={{ 
            x: ['0%', '8%', '-6%', '0%'], 
            y: ['0%', '-10%', '6%', '0%'],
            scale: [1, 0.95, 1.05, 1]
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] left-[-5%] w-[650px] h-[650px] rounded-full opacity-[0.03] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ── LEFT COLUMN: Value Proposition & Action ── */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#0F172A] mb-6 text-[42px] sm:text-[54px] lg:text-[62px] leading-[1.08] tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
            >
              Upgrade your talent pipeline <br />
              <span className="text-[#4F46E5] italic font-normal pr-2">
                without disruption.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 text-[17px] sm:text-[19px] leading-[1.6] text-[#475569] max-w-xl font-normal"
            >
              Your recruitment and training frameworks stay in place. Ottobon snaps in alongside your teams to identify learnability and run guided project delivery with zero lead overhead.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                type="button"
                onClick={onCTA}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] hover:scale-[1.02] text-white font-medium text-[16px] transition-all shadow-lg shadow-indigo-600/20 cursor-pointer"
              >
                Book a demo
                <ArrowRight size={18} />
              </button>
              <a
                href="#how-it-works"
                onClick={scrollToApproach}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-slate-200 text-[#0F172A] hover:bg-slate-50 font-medium text-[16px] transition-colors shadow-sm cursor-pointer"
              >
                Explore IBOT
              </a>
            </motion.div>

            {/* Enterprise Assurance Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-[13px] text-[#64748B]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#4F46E5]" />
                <span className="font-medium text-[#475569]">Isolated Dev-Containers</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4F46E5]" />
                <span className="font-medium text-[#475569]">Zero ATS Disruption</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#4F46E5]" />
                <span className="font-medium text-[#475569]">Audit-Ready Dossiers</span>
              </div>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN: Live Dual-Track Architecture Visualizer ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] relative overflow-hidden">
              
              {/* Card Header & Interactive Mode Toggle */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-[#4F46E5]">
                    <Layers size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                      Dual-Track Architecture
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      Zero disruption to current operations
                    </div>
                  </div>
                </div>

                {/* Interactive Mode Pills */}
                <div className="flex items-center bg-slate-100 p-1 rounded-xl text-[11px] font-medium">
                  <button
                    type="button"
                    onClick={() => setPipelineMode('augmented')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      pipelineMode === 'augmented' 
                        ? 'bg-white text-indigo-600 font-bold shadow-xs' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    With IBOT
                  </button>
                  <button
                    type="button"
                    onClick={() => setPipelineMode('traditional')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      pipelineMode === 'traditional' 
                        ? 'bg-white text-slate-900 font-bold shadow-xs' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Traditional
                  </button>
                </div>
              </div>

              {/* ── TRACK 1: Existing Framework ── */}
              <div className="mb-5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    Track 1: Your Current Framework
                  </span>
                  <span className="text-[11px] text-[#4F46E5] font-semibold">
                    100% Unchanged
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 font-medium text-slate-700 shadow-2xs">
                    ATS Ingestion
                    <div className="text-[10px] text-slate-400 mt-0.5">Workday / Lever</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 font-medium text-slate-700 shadow-2xs">
                    Interviews
                    <div className="text-[10px] text-slate-400 mt-0.5">Standard Loops</div>
                  </div>
                  <div className={`p-2.5 rounded-xl border transition-colors shadow-2xs ${
                    pipelineMode === 'traditional'
                      ? 'bg-red-50/80 border-red-200 text-red-700'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}>
                    Onboarding
                    <div className={`text-[10px] mt-0.5 ${
                      pipelineMode === 'traditional' ? 'text-red-500 font-semibold' : 'text-slate-400'
                    }`}>
                      {pipelineMode === 'traditional' ? '6-8 Wk Ramp Drag' : 'Smooth Transfer'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Flow */}
              <div className="flex items-center justify-center my-2">
                <div className="h-4 w-[2px] bg-gradient-to-b from-slate-300 to-[#4F46E5]" />
              </div>

              {/* ── TRACK 2: Ottobon IBOT Booster Module ── */}
              <AnimatePresence mode="wait">
                {pipelineMode === 'augmented' ? (
                  <motion.div
                    key="augmented"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-blue-50/40 border-2 border-indigo-200/80 shadow-xs relative"
                  >
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[11px] font-bold font-mono text-indigo-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles size={13} className="text-[#4F46E5]" />
                        Track 2: Ottobon IBOT Booster Module
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#4F46E5] text-white uppercase tracking-wider">
                        Active Accelerator
                      </span>
                    </div>

                    {/* 4 IBOT Phases Grid */}
                    <div className="grid grid-cols-4 gap-2 text-center text-xs mb-4">
                      <div className="p-2.5 rounded-xl bg-white border border-indigo-200/80 shadow-2xs group hover:border-indigo-400 transition-colors">
                        <div className="font-bold text-[#0F172A]">Identify</div>
                        <div className="text-[9px] text-[#4F46E5] font-mono mt-0.5 font-semibold">Diagnostic</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-indigo-200/80 shadow-2xs group hover:border-indigo-400 transition-colors">
                        <div className="font-bold text-[#0F172A]">Build</div>
                        <div className="text-[9px] text-[#4F46E5] font-mono mt-0.5 font-semibold">Sandbox</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-indigo-200/80 shadow-2xs group hover:border-indigo-400 transition-colors">
                        <div className="font-bold text-[#0F172A]">Operate</div>
                        <div className="text-[9px] text-[#4F46E5] font-mono mt-0.5 font-semibold">Guided Sprints</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-indigo-200/80 shadow-2xs group hover:border-indigo-400 transition-colors">
                        <div className="font-bold text-[#0F172A]">Transfer</div>
                        <div className="text-[9px] text-indigo-700 font-mono mt-0.5 font-semibold">Day-1 Ready</div>
                      </div>
                    </div>

                    {/* Outcome Metric Badges */}
                    <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-indigo-200/60 text-xs">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-white/90 border border-indigo-100 text-slate-700">
                        <CheckCircle2 size={15} className="text-[#4F46E5] shrink-0" />
                        <span className="text-[11px] font-medium"><strong>0 hrs/wk</strong> Lead Overhead</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-white/90 border border-indigo-100 text-slate-700">
                        <Zap size={15} className="text-[#4F46E5] shrink-0" />
                        <span className="text-[11px] font-medium"><strong>Day-1</strong> Production Velocity</span>
                      </div>
                    </div>

                  </motion.div>
                ) : (
                  <motion.div
                    key="traditional"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 rounded-2xl bg-slate-100/80 border border-slate-200 text-slate-500 text-xs text-center flex flex-col items-center justify-center gap-2 min-h-[160px]"
                  >
                    <div className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                      Without IBOT Acceleration
                    </div>
                    <div className="text-sm font-semibold text-slate-700">
                      High onboarding ambiguity & ramp-up drag
                    </div>
                    <p className="text-[11px] text-slate-500 max-w-xs leading-relaxed">
                      Senior engineering leads spend 15–20 hours per week supervising incoming hires on internal conventions.
                    </p>
                    <button
                      type="button"
                      onClick={() => setPipelineMode('augmented')}
                      className="mt-1 text-[#4F46E5] font-bold hover:underline cursor-pointer"
                    >
                      See with IBOT Booster →
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
