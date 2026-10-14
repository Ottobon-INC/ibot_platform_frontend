import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Lock, BarChart3, Check, RotateCcw, Sparkles } from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';
import { transitions, buttonHoverProps, MOTION_EASINGS } from './motionTokens';

interface IdentifyHeroProps {
  onOpenModal: () => void;
  onExploreMethods: () => void;
}

// Verified evidence telemetry details revealed on hover
const MODULE_TELEMETRY: Record<number, { pill: string; detail: string }> = {
  0: {
    pill: 'CS PRIMITIVES VERIFIED',
    detail: 'Database query execution plans, memory models, and concurrency lock mechanics verified.',
  },
  1: {
    pill: '18/18 TESTS PASSED',
    detail: 'Dockerized sandbox: 18/18 unit tests passed · Thread-safe bounded connection pool verified under concurrency.',
  },
  2: {
    pill: 'COPILOT AUDIT VERIFIED',
    detail: 'Caught hallucinated API signature in 42s · Preserved typed contracts without runtime defects.',
  },
};

const GATE_TELEMETRY = {
  pill: '100% CLIENT GOVERNANCE',
  detail: 'Evaluated independently by client hiring panel · Cultural alignment and 30-day notice period verified.',
};

export const IdentifyHero: React.FC<IdentifyHeroProps> = ({ onOpenModal, onExploreMethods }) => {
  const { hero } = IDENTIFY_CONTENT;
  const { previewCard } = hero;
  const [activeModuleHover, setActiveModuleHover] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Storytelling Engine State: Replay key, live rolling counter, and multi-phase status
  const [assemblyKey, setAssemblyKey] = useState<number>(0);
  const [displayScore, setDisplayScore] = useState<string>('0.0%');
  const [assemblyPhase, setAssemblyPhase] = useState<'docking' | 'scoring' | 'gate' | 'verified'>('docking');

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayScore('80.5%');
      setAssemblyPhase('verified');
      return;
    }

    setAssemblyPhase('docking');
    setDisplayScore('0.0%');

    // Phase 2: Start scoring calculation at 650ms
    const scoringTimer = setTimeout(() => {
      setAssemblyPhase('scoring');
      
      const startTime = performance.now();
      const duration = 600; // 600ms roll
      const targetScore = 80.5;

      const animateRoll = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        // Smooth ease-out quad
        const easedProgress = 1 - Math.pow(1 - progress, 2);
        const current = (targetScore * easedProgress).toFixed(1);
        setDisplayScore(`${current}%`);

        if (progress < 1) {
          requestAnimationFrame(animateRoll);
        } else {
          setDisplayScore('80.5%');
        }
      };

      requestAnimationFrame(animateRoll);
    }, 650);

    // Phase 3: Gate verification at 1350ms
    const gateTimer = setTimeout(() => {
      setAssemblyPhase('gate');
    }, 1350);

    // Final Verified State at 1650ms
    const verifiedTimer = setTimeout(() => {
      setAssemblyPhase('verified');
    }, 1650);

    return () => {
      clearTimeout(scoringTimer);
      clearTimeout(gateTimer);
      clearTimeout(verifiedTimer);
    };
  }, [assemblyKey, shouldReduceMotion]);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto pt-2 sm:pt-4 lg:pt-6 pb-16 lg:pb-24 overflow-hidden sm:overflow-visible">
      {/* Precision Ambient Background Mesh */}
      <div 
        className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-indigo-100/35 via-indigo-50/10 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true" 
      />

      {/* Top Baseline Alignment (items-start) locks both columns to a shared horizontal top edge */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* ── LEFT COLUMN: Executive Narrative & Command Statement ── */}
        <div className="lg:col-span-7 flex flex-col items-start text-left pt-1">
          {/* Eyebrow Chip */}
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: MOTION_EASINGS.easeOut }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 font-mono text-[11px] sm:text-xs font-bold tracking-wider mb-3.5 sm:mb-4 shadow-2xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span>{hero.eyebrow}</span>
          </motion.div>

          {/* Main Headline (H1) - Authoritative Editorial Typography */}
          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: MOTION_EASINGS.easeOut }}
            className="text-[34px] sm:text-[46px] lg:text-[52px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Evaluate What Matters. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-900 to-[#4F46E5] italic font-medium pr-1">
              Shortlist with Evidence.
            </span>
          </motion.h1>

          {/* Tight, Impactful Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: MOTION_EASINGS.easeOut }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-xl font-normal"
          >
            {hero.supportingCopy}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24, ease: MOTION_EASINGS.easeOut }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-7 w-full sm:w-auto"
          >
            <motion.button
              type="button"
              onClick={onExploreMethods}
              {...buttonHoverProps}
              className="group px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm flex items-center justify-center gap-2.5 cursor-pointer shadow-md shadow-slate-900/10 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
            <motion.button
              type="button"
              onClick={onOpenModal}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              transition={transitions.hover}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm border border-slate-200/90 flex items-center justify-center cursor-pointer shadow-2xs focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              {hero.ctaSecondary}
            </motion.button>
          </motion.div>

          {/* Refined Executive Proof Bar (Horizontal Minimalist Strip) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32, ease: MOTION_EASINGS.easeOut }}
            className="pt-5 border-t border-slate-200/80 w-full grid grid-cols-3 gap-3 sm:gap-4 text-left"
          >
            <div className="group">
              <div className="font-mono font-bold text-xs sm:text-sm text-slate-900">9 Methods</div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Configurable Menu</div>
            </div>
            <div className="border-l border-slate-200 pl-3 sm:pl-4">
              <div className="font-mono font-bold text-xs sm:text-sm text-slate-900">Work Artifacts</div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Auditable Telemetry</div>
            </div>
            <div className="border-l border-slate-200 pl-3 sm:pl-4">
              <div className="font-mono font-bold text-xs sm:text-sm text-indigo-600">100% Human</div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Manager Authority</div>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: Sleek Compact Calibration Workbench (Max-W 480px, Perfectly Proportioned) ── */}
        <motion.div
          key={`workbench-${assemblyKey}`}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: MOTION_EASINGS.easeOut }}
          className="lg:col-span-5 w-full max-w-[480px] lg:ml-auto relative group"
        >
          {/* Ambient Atmospheric Elevation Glow */}
          <div 
            className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-indigo-600/15 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
            aria-hidden="true" 
          />

          <motion.div 
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            transition={transitions.hover}
            className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_16px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] p-4 sm:p-5 relative overflow-hidden transition-all duration-200"
          >
            {/* Top Tactical Bar: Candidate Verification Header & Interactive Replay Button */}
            <div className="flex items-start justify-between pb-3.5 mb-3.5 border-b border-slate-100 gap-2">
              <div>
                <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                  <span className="font-mono text-[9px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>CFG-BK-805</span>
                  </span>
                  <span className="text-[10px] font-mono font-medium text-slate-400">
                    ILLUSTRATIVE PREVIEW
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  {previewCard.roleTitle}
                </h3>
              </div>

              {/* Status Pill & Replay Run Control */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setAssemblyKey(prev => prev + 1)}
                  title="Replay candidate evidence assembly demonstration"
                  className="p-1 rounded-md border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1 text-[10px] font-mono focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                >
                  <RotateCcw size={11} className="text-indigo-600" />
                  <span className="hidden sm:inline">Replay</span>
                </button>

                <motion.div 
                  className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold transition-colors duration-200 ${
                    assemblyPhase === 'verified'
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                      : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
                  }`}
                >
                  {assemblyPhase === 'verified' ? (
                    <>
                      <CheckCircle2 size={12} className="text-emerald-600" />
                      <span>{previewCard.status}</span>
                    </>
                  ) : assemblyPhase === 'gate' ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>3/3 GATE VERIFIED</span>
                    </>
                  ) : assemblyPhase === 'scoring' ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                      <span>2/3 CALIBRATING</span>
                    </>
                  ) : (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                      <span>1/3 DOCKING</span>
                    </>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Composite Telemetry Display (High-Impact Minimalist Meter with Live Rollover) */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.15, ease: MOTION_EASINGS.easeOut }}
              className="p-3 sm:p-3.5 rounded-xl bg-slate-900 text-white mb-3.5 relative overflow-hidden shadow-xs"
            >
              <div className="flex items-end justify-between mb-2">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                    <BarChart3 size={12} className="text-indigo-400" />
                    <span>Normalized Score</span>
                  </div>
                  <div className="text-[11px] text-slate-300 font-mono">
                    Baseline: <strong className="text-white">{previewCard.baselineThreshold}</strong>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 leading-none inline-block">
                    {displayScore}
                  </span>
                </div>
              </div>

              {/* Benchmark Visual Progress Meter with Storytelling Calibration Fill */}
              <div className="relative w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mb-1.5">
                <motion.div 
                  initial={{ width: shouldReduceMotion ? '80.5%' : '0%' }}
                  animate={{ width: assemblyPhase === 'docking' ? '0%' : '80.5%' }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: MOTION_EASINGS.easeOut }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400"
                />
                {/* 75% Baseline Notch */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
                  style={{ left: '75%' }}
                  title="75.0% Baseline Threshold"
                />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-slate-400">
                <span>0%</span>
                <span className="text-slate-300">▲ 75.0% Min</span>
                <span className={`font-bold transition-colors duration-200 ${
                  assemblyPhase === 'verified' || assemblyPhase === 'gate' ? 'text-emerald-400' : 'text-slate-500'
                }`}>
                  80.5% Actual
                </span>
                <span>100%</span>
              </div>
            </motion.div>

            {/* Configured Assessment Modules Assembly Breakdown (Sleek Compact Rows) */}
            <div className="space-y-1.5 mb-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-wider px-0.5">
                <span className="flex items-center gap-1.5">
                  <span>Evaluation Modules</span>
                  <span className="text-[9px] text-indigo-600 font-medium normal-case bg-indigo-50 px-1.5 py-0.2 rounded border border-indigo-100 flex items-center gap-1">
                    <Sparkles size={9} className="text-indigo-500" />
                    <span>Hover for telemetry</span>
                  </span>
                </span>
                <span>Score</span>
              </div>

              {previewCard.modules.map((mod, idx) => {
                const numericScore = parseFloat(mod.score);
                const isHovered = activeModuleHover === idx;
                const itemDelay = shouldReduceMotion ? 0 : 0.2 + idx * 0.12;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: itemDelay, ease: MOTION_EASINGS.easeOut }}
                    onMouseEnter={() => setActiveModuleHover(idx)}
                    onMouseLeave={() => setActiveModuleHover(null)}
                    whileHover={shouldReduceMotion ? undefined : { x: 2 }}
                    className={`p-2.5 rounded-lg border transition-colors duration-150 cursor-pointer ${
                      isHovered
                        ? 'bg-indigo-50/70 border-indigo-200'
                        : 'bg-slate-50/70 border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-[11px] text-indigo-700 bg-white border border-indigo-200/80 w-6 h-6 rounded-md flex items-center justify-center shrink-0 shadow-2xs">
                          {mod.code}
                        </span>
                        <div>
                          <div className="font-semibold text-xs text-slate-800 leading-tight">{mod.name}</div>
                          <div className="text-[9px] text-slate-400 font-mono">Weight: {mod.weight}</div>
                        </div>
                      </div>
                      <div className="text-right font-mono">
                        <div className="font-bold text-xs text-slate-900 leading-tight">{mod.score}</div>
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: itemDelay + 0.1, duration: 0.2 }}
                          className="text-[9px] text-indigo-600 font-semibold"
                        >
                          +{mod.contribution}
                        </motion.div>
                      </div>
                    </div>

                    {/* Score Micro-bar */}
                    <div className="w-full h-1 rounded-full bg-slate-200/70 overflow-hidden">
                      <motion.div
                        initial={{ width: shouldReduceMotion ? `${numericScore}%` : '0%' }}
                        animate={{ width: `${numericScore}%` }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: itemDelay + 0.08, ease: MOTION_EASINGS.easeOut }}
                        className="h-full rounded-full bg-indigo-500"
                      />
                    </div>

                    {/* Interactive Micro-Telemetry Peek Expanded on Hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.18, ease: MOTION_EASINGS.easeOut }}
                          className="overflow-hidden"
                        >
                          <div className="p-2 rounded-md bg-slate-900 text-white font-mono text-[10px] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shadow-inner border border-slate-800">
                            <div className="flex items-center gap-1.5 text-slate-200">
                              <Sparkles size={11} className="text-emerald-400 shrink-0" />
                              <span className="leading-snug">{MODULE_TELEMETRY[idx]?.detail}</span>
                            </div>
                            <span className="text-[8px] font-bold tracking-wider px-1.5 py-0.2 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 shrink-0 self-start sm:self-auto">
                              {MODULE_TELEMETRY[idx]?.pill}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              {/* Client Pass/Fail Gate Strip with Distinct Storytelling Entrance & Hover Telemetry */}
              <motion.div 
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : 0.85, ease: MOTION_EASINGS.easeOut }}
                onMouseEnter={() => setActiveModuleHover(3)}
                onMouseLeave={() => setActiveModuleHover(null)}
                whileHover={shouldReduceMotion ? undefined : { x: 2 }}
                className={`p-2.5 rounded-lg border flex flex-col justify-between shadow-2xs transition-all duration-300 cursor-pointer ${
                  assemblyPhase === 'verified' || assemblyPhase === 'gate'
                    ? 'bg-emerald-50/70 border-emerald-300 ring-1 ring-emerald-400/20'
                    : 'bg-emerald-50/30 border-emerald-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[11px] text-emerald-700 bg-white border border-emerald-200 w-6 h-6 rounded-md flex items-center justify-center shrink-0 shadow-2xs">
                      {previewCard.gateModule.code}
                    </span>
                    <div>
                      <div className="font-semibold text-xs text-slate-800 flex items-center gap-1.5 leading-tight">
                        <span>{previewCard.gateModule.name}</span>
                        <span className="text-[8px] font-mono px-1 py-0.2 bg-emerald-100 text-emerald-800 rounded font-bold uppercase">Gate</span>
                      </div>
                      <div className="text-[9px] text-emerald-700 font-mono font-medium">{previewCard.gateModule.type}</div>
                    </div>
                  </div>
                  <motion.span 
                    initial={{ scale: shouldReduceMotion ? 1 : 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 0.95, type: 'spring', stiffness: 400, damping: 25 }}
                    className="font-mono font-bold text-emerald-700 text-[10px] bg-white border border-emerald-300 px-2 py-0.5 rounded shadow-2xs shrink-0"
                  >
                    {previewCard.gateModule.status}
                  </motion.span>
                </div>

                {/* Gate Telemetry Peek on Hover */}
                <AnimatePresence>
                  {activeModuleHover === 3 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.18, ease: MOTION_EASINGS.easeOut }}
                      className="overflow-hidden"
                    >
                      <div className="p-2 rounded-md bg-emerald-950 text-white font-mono text-[10px] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shadow-inner border border-emerald-500/30">
                        <div className="flex items-center gap-1.5 text-emerald-200">
                          <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />
                          <span className="leading-snug">{GATE_TELEMETRY.detail}</span>
                        </div>
                        <span className="text-[8px] font-bold tracking-wider px-1.5 py-0.2 rounded bg-emerald-900 border border-emerald-700/60 text-emerald-300 shrink-0 self-start sm:self-auto">
                          {GATE_TELEMETRY.pill}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Bottom Audit Lock Note */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 1.1, duration: 0.3 }}
              className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400"
            >
              <span className="flex items-center gap-1">
                <Lock size={11} className="text-slate-400" />
                <span>Illustrative Benchmark Formula</span>
              </span>
              <span className="text-slate-600 font-semibold bg-slate-50 px-1.5 py-0.2 rounded border border-slate-200 text-[10px]">
                (68.4 / 0.85 = 80.5%)
              </span>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
