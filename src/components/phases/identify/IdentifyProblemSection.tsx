import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, ArrowRight, Zap, FileText, CheckCircle2, SlidersHorizontal, Activity, Terminal, Sparkles, Check } from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';
import { transitions, MOTION_EASINGS } from './motionTokens';

export const IdentifyProblemSection: React.FC = () => {
  const { problem } = IDENTIFY_CONTENT;
  const [conventional, blindspot, ibot] = problem.perspectives;
  const shouldReduceMotion = useReducedMotion();
  
  // Interactive Signal Focus: Visitor switches between the 3 key evaluation contrasts
  const [activeSignalIndex, setActiveSignalIndex] = useState<number>(0);

  const signalPairs = [
    {
      id: 0,
      label: 'Signal 01: Pedigree vs. Calibrated Benchmark',
      proxyTag: 'Prestige Proxy',
      proxyHeadline: '"Tier-1 University & Brand Logo"',
      proxyDesc: 'Historical brand pedigree proxy favors prestige over role-calibrated technical depth.',
      proxyWarning: 'High pedigree bias with zero role-specific benchmark data.',
      evidenceTag: 'Auditable Benchmark Rubric',
      evidenceHeadline: '80.5% Composite Score vs 75.0% Baseline',
      evidenceDesc: 'Role-weighted scorecard (85% technical + client HR gate) eliminates pedigree distortion.',
      evidenceAuditNote: 'Multi-round rubric normalization eliminates pedigree bias before shortlisting.',
      proxyValidity: '30%',
      evidenceValidity: '96%',
    },
    {
      id: 1,
      label: 'Signal 02: Banning AI vs. Copilot Stewardship',
      proxyTag: 'Closed-Book Blackout',
      proxyHeadline: '"No LLMs Allowed · Screen Recorder Locked"',
      proxyDesc: 'Forcing closed-book syntax recall fails to evaluate real-world AI pair-programming and prompt hygiene.',
      proxyWarning: 'Zero assessment of prompt hygiene, hallucination triage, or AI stewardship.',
      evidenceTag: 'Method 07: AI-Pair Programming',
      evidenceHeadline: 'Caught Hallucinated API in 42s',
      evidenceDesc: 'Candidate steered copilot, identified ungrounded library signature, and wrote regression test.',
      evidenceAuditNote: 'Real-time copilot session recordings verify AI stewardship and prompt hygiene.',
      proxyValidity: '25%',
      evidenceValidity: '98%',
    },
    {
      id: 2,
      label: 'Signal 03: Subjective Debrief vs. Auditable Dossier',
      proxyTag: 'Uncalibrated Debrief',
      proxyHeadline: '"Didn\'t feel like a cultural fit in debrief"',
      proxyDesc: 'Hiring committees debate subjective gut feelings with high interviewer variance and zero audit trail.',
      proxyWarning: 'High debrief variance with zero recorded code diffs or auditable logs.',
      evidenceTag: 'Stage 06: Dossier & Verified Telemetry',
      evidenceHeadline: '18/18 Unit & Integration Tests Passed',
      evidenceDesc: 'Hiring manager retains shortlisting authority backed by recorded terminal logs and code diffs.',
      evidenceAuditNote: 'Auditable execution telemetry logged directly into candidate dossier for committee review.',
      proxyValidity: '35%',
      evidenceValidity: '97%',
    },
  ];

  const currentPair = signalPairs[activeSignalIndex];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto py-20 sm:py-28 border-t border-slate-200/70">
      
      {/* ── Section Header with Scroll Reveal ── */}
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45, ease: MOTION_EASINGS.easeOut }}
        className="max-w-3xl mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
          <ShieldAlert size={13} className="text-slate-600 shrink-0" />
          <span>{problem.eyebrow}</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 leading-[1.14] mb-4 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {problem.headline}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          {problem.supportingCopy}
        </p>
      </motion.div>

      {/* ── Interactive Signal Selector Ribbon ── */}
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, ease: MOTION_EASINGS.easeOut }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-8 border-b border-slate-200/60"
      >
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mr-2 shrink-0">
            <SlidersHorizontal size={13} className="text-indigo-600" />
            <span>Interactive Signals:</span>
          </div>
          {signalPairs.map((pair) => (
            <button
              key={pair.id}
              type="button"
              onClick={() => setActiveSignalIndex(pair.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none flex items-center gap-1.5 ${
                activeSignalIndex === pair.id
                  ? 'bg-slate-900 text-white shadow-2xs font-semibold'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{pair.label}</span>
            </button>
          ))}
        </div>

        {/* Live Signal Depth Readout Badge */}
        <div className="flex items-center gap-2 shrink-0 text-xs font-mono text-slate-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Predictive Validity: <strong className="text-amber-700">{currentPair.proxyValidity} Proxy</strong> → <strong className="text-indigo-600">{currentPair.evidenceValidity} Verified</strong></span>
        </div>
      </motion.div>

      {/* ── Visual Signal Shift Workbench (Before vs. After Transformation) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Conventional Screening (Indirect Proxies · 5 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: MOTION_EASINGS.easeOut }}
          className="lg:col-span-5 rounded-3xl bg-slate-100/70 border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between transition-shadow duration-200 hover:shadow-xs"
        >
          <div>
            {/* Header Tag */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200/80">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Activity size={13} className="text-slate-400" />
                <span>Conventional Screening</span>
              </span>
              <span className="text-[11px] font-mono text-amber-800 bg-amber-100/80 border border-amber-200 px-2.5 py-0.5 rounded-full font-semibold">
                Indirect Proxies
              </span>
            </div>

            {/* Signal Resolution Meter Strip */}
            <div className="p-3 rounded-xl bg-white/60 border border-slate-200/70 mb-5">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mb-1.5">
                <span>Signal Fidelity: {currentPair.proxyTag}</span>
                <span className="text-amber-700 font-semibold">{currentPair.proxyValidity} Predictive Depth</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <motion.div 
                  animate={{ width: currentPair.proxyValidity }}
                  transition={transitions.coverageBar}
                  className="h-full rounded-full bg-amber-400"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              {conventional.title}
            </h3>
            <p className="text-xs text-slate-500 font-mono mb-4">
              Focus: <strong className="text-slate-700">{conventional.coreFocus}</strong>
            </p>

            {/* Interactive Visual Proxy Simulation Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSignalIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-2xl bg-white/90 border border-slate-200 shadow-2xs mb-5"
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-slate-400 font-semibold uppercase">Simulated Screening Artifact</span>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                    {currentPair.proxyTag}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-dashed border-slate-300 font-mono text-xs text-slate-700 mb-2">
                  <div className="font-semibold text-slate-800 mb-0.5">{currentPair.proxyHeadline}</div>
                  <div className="text-[11px] text-slate-500 italic">{currentPair.proxyDesc}</div>
                </div>
                <div className="text-[10px] text-amber-700 font-mono flex items-center gap-1">
                  <AlertTriangle size={11} className="shrink-0" />
                  <span>{currentPair.proxyWarning}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 3 Concise Conventional Limitations */}
            <div className="space-y-2 mb-5">
              {conventional.bullets.map((b, idx) => {
                const isCurrent = activeSignalIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveSignalIndex(idx)}
                    className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all duration-150 flex items-center gap-2.5 ${
                      isCurrent
                        ? 'bg-amber-50/90 border-amber-300 text-slate-900 font-medium shadow-2xs'
                        : 'bg-white/60 border-slate-200/60 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isCurrent ? 'bg-amber-500 ring-2 ring-amber-200' : 'bg-slate-400'}`} />
                    <span className="leading-snug text-[11px] sm:text-xs">{b}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Operational Consequence Footer */}
          <div className="pt-3.5 border-t border-slate-200/70 text-xs text-slate-500">
            <span className="font-mono font-semibold text-slate-700 uppercase block text-[10px] mb-0.5">Operational Consequence:</span>
            {blindspot.realityText}
          </div>
        </motion.div>

        {/* Center Indicator: Directional Bridge */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center relative">
          <div className="h-full w-px bg-slate-200/80 relative">
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-indigo-600">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>

        {/* Right Side: IBOT Capability Solution (Direct Evidence · 6 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: MOTION_EASINGS.easeOut }}
          className="lg:col-span-6 rounded-3xl bg-white border-2 border-indigo-500/40 shadow-xl shadow-indigo-950/5 hover:shadow-2xl hover:shadow-indigo-950/8 p-6 sm:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-200"
        >
          {/* Subtle Ambient Halo */}
          <div 
            className="absolute top-0 right-0 w-72 h-72 bg-indigo-50/80 rounded-full blur-3xl pointer-events-none -z-0"
            aria-hidden="true" 
          />

          <div className="relative z-10">
            {/* Header Tag */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-indigo-100">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Zap size={12} className="text-indigo-600" />
                <span>{ibot.tag}</span>
              </span>
              <span className="text-[11px] font-mono text-indigo-700 font-semibold bg-indigo-50/60 px-2 py-0.5 rounded">
                Direct Capability Evidence
              </span>
            </div>

            {/* Signal Resolution Meter Strip */}
            <div className="p-3 rounded-xl bg-indigo-50/50 border border-indigo-100 mb-5">
              <div className="flex justify-between items-center text-[10px] font-mono text-indigo-800 mb-1.5">
                <span>Signal Fidelity: {currentPair.evidenceTag}</span>
                <span className="text-emerald-700 font-bold">{currentPair.evidenceValidity} Auditable Evidence</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-indigo-100 overflow-hidden">
                <motion.div 
                  animate={{ width: currentPair.evidenceValidity }}
                  transition={transitions.coverageBar}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              {ibot.title}
            </h3>
            <p className="text-xs text-indigo-600 font-mono font-medium mb-4">
              Focus: <strong className="text-slate-900">{ibot.coreFocus}</strong>
            </p>

            {/* Interactive Visual Telemetry Artifact Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSignalIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-2xl bg-slate-900 text-white shadow-md mb-5 border border-slate-800 font-mono"
              >
                <div className="flex items-center justify-between text-[10px] mb-2 pb-2 border-b border-slate-800">
                  <span className="text-slate-400 font-semibold uppercase flex items-center gap-1.5">
                    <Terminal size={12} className="text-emerald-400" />
                    <span>Verified Production Artifact</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/50 text-emerald-300 font-bold text-[9px]">
                    {currentPair.evidenceTag}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs mb-2 space-y-1">
                  <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="shrink-0" />
                    <span>{currentPair.evidenceHeadline}</span>
                  </div>
                  <div className="text-[11px] text-slate-300">{currentPair.evidenceDesc}</div>
                </div>
                <div className="text-[10px] text-indigo-300 flex items-center gap-1">
                  <Sparkles size={11} className="shrink-0" />
                  <span>{currentPair.evidenceAuditNote}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 3 Concise IBOT Capability Strengths */}
            <div className="space-y-2 mb-5">
              {ibot.bullets.map((b, idx) => {
                const isCurrent = activeSignalIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveSignalIndex(idx)}
                    className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all duration-150 flex items-center gap-2.5 ${
                      isCurrent
                        ? 'bg-indigo-50/90 border-indigo-400 text-slate-900 font-medium shadow-2xs ring-1 ring-indigo-400/30'
                        : 'bg-slate-50/80 border-slate-100 text-slate-700 hover:bg-indigo-50/40'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${isCurrent ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'}`}>
                      <Check size={10} />
                    </div>
                    <span className="leading-snug text-[11px] sm:text-xs">{b}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Business Outcome Bottom Box */}
          <div className="relative z-10 pt-3.5 border-t border-indigo-100 text-xs text-slate-700">
            <span className="font-mono font-semibold text-indigo-800 uppercase block text-[10px] mb-0.5">The Business Outcome:</span>
            {ibot.realityText}
          </div>

        </motion.div>

      </div>

    </section>
  );
};
