import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  UserCheck,
  BarChart3,
  Terminal,
  Lock,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Code2,
  Check,
} from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';
import { transitions, tabContentVariants, MOTION_EASINGS } from './motionTokens';

export const CandidateDossier: React.FC = () => {
  const { dossier } = IDENTIFY_CONTENT;
  const { scorecard, codeArtifact, strengthsAndGaps, decisionPanel } = dossier;
  const [activeTab, setActiveTab] = useState<'scorecard' | 'artifact' | 'qualitative'>('scorecard');
  const [spotlightSource, setSpotlightSource] = useState<'round06' | 'round07' | null>(null);
  const [selectedDecision, setSelectedDecision] = useState<number>(0);
  const [showMathDrawer, setShowMathDrawer] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  // Handlers for cross-tab evidence inspection
  const handleInspectArtifact = () => {
    setSpotlightSource('round06');
    setActiveTab('artifact');
  };

  const handleInspectAIInsights = () => {
    setSpotlightSource('round07');
    setActiveTab('qualitative');
  };

  const handleBackToScorecard = () => {
    setActiveTab('scorecard');
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto py-20 sm:py-28 border-t border-slate-200/70">
      
      {/* ── Section Header with Scroll Reveal ── */}
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45, ease: MOTION_EASINGS.easeOut }}
        className="max-w-3xl mb-14 sm:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
          <FileText size={13} className="text-slate-600 shrink-0" />
          <span>{dossier.eyebrow}</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 leading-[1.14] mb-5 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {dossier.headline}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          {dossier.supportingCopy}
        </p>
      </motion.div>

      {/* ── Main Dossier Product Workspace (Linear-Grade Enterprise Console) ── */}
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: MOTION_EASINGS.easeOut }}
        className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)] overflow-hidden"
      >
        
        {/* Dossier Header Strip */}
        <div className="p-6 sm:p-8 bg-slate-50/80 border-b border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2 flex-wrap">
              <span className="font-mono text-xs font-bold text-indigo-700 bg-white border border-indigo-200 px-2.5 py-0.5 rounded shadow-2xs">
                {scorecard.configurationId}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {scorecard.badge}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {scorecard.profileLabel}
            </h3>
          </div>

          {/* Composite Score Pill */}
          <div className="flex items-center gap-4 bg-white p-3.5 sm:px-5 sm:py-3 rounded-2xl border border-slate-200 shadow-2xs shrink-0">
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                Normalized Composite
              </div>
              <div className="text-xs text-slate-600 font-mono">
                Threshold: <strong className="text-slate-900">{scorecard.qualificationThreshold}</strong>
              </div>
            </div>
            <div className="border-l border-slate-200 pl-4 text-right">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-600 leading-none mb-0.5">
                {scorecard.compositeScore}
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                QUALIFIED
              </span>
            </div>
          </div>
        </div>

        {/* Dossier Navigation Tabs with Micro Animated Underline */}
        <div className="flex items-center gap-2 px-6 sm:px-8 pt-4 border-b border-slate-200/60 bg-white overflow-x-auto scrollbar-none" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'scorecard'}
            onClick={() => setActiveTab('scorecard')}
            className={`pb-3 px-3 text-xs sm:text-sm font-mono font-semibold transition-colors duration-150 relative cursor-pointer flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-t-lg ${
              activeTab === 'scorecard'
                ? 'text-indigo-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <BarChart3 size={14} />
            <span>01. Scored Modules & Weights</span>
            {activeTab === 'scorecard' && (
              <motion.div 
                layoutId="dossierTabUnderline"
                transition={{ duration: 0.2, ease: MOTION_EASINGS.easeOut }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-t" 
              />
            )}
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'artifact'}
            onClick={() => setActiveTab('artifact')}
            className={`pb-3 px-3 text-xs sm:text-sm font-mono font-semibold transition-colors duration-150 relative cursor-pointer flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-t-lg ${
              activeTab === 'artifact'
                ? 'text-indigo-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Terminal size={14} />
            <span>02. Work Artifact Diff</span>
            {spotlightSource === 'round06' && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            )}
            {activeTab === 'artifact' && (
              <motion.div 
                layoutId="dossierTabUnderline"
                transition={{ duration: 0.2, ease: MOTION_EASINGS.easeOut }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-t" 
              />
            )}
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'qualitative'}
            onClick={() => setActiveTab('qualitative')}
            className={`pb-3 px-3 text-xs sm:text-sm font-mono font-semibold transition-colors duration-150 relative cursor-pointer flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-t-lg ${
              activeTab === 'qualitative'
                ? 'text-indigo-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck size={14} />
            <span>03. Strengths & Mentorship Gaps</span>
            {spotlightSource === 'round07' && (
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            )}
            {activeTab === 'qualitative' && (
              <motion.div 
                layoutId="dossierTabUnderline"
                transition={{ duration: 0.2, ease: MOTION_EASINGS.easeOut }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-t" 
              />
            )}
          </button>
        </div>

        {/* Dossier Content Area with Smooth Tab Animation & Evidence Cross-Linking */}
        <div className="p-6 sm:p-8 lg:p-9 bg-white min-h-[420px]">
          <AnimatePresence mode="wait">
            
            {/* ══════════════════════════════════════════════════════════════ */}
            {/* TAB 1: SCORED MODULES                                        */}
            {/* ══════════════════════════════════════════════════════════════ */}
            {activeTab === 'scorecard' && (
              <motion.div
                key="scorecard"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-4"
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100">
                  <span>Configured Module & Rubric Focus</span>
                  <span className="hidden sm:inline">Weight · Raw Score · Points Contributed</span>
                </div>

                {scorecard.scoredModules.map((m, idx) => {
                  const numericScore = parseFloat(m.score);
                  const isCodingSandbox = idx === 1; // Round 06
                  const isAIPairing = idx === 2; // Round 07

                  return (
                    <motion.div 
                      key={idx}
                      whileHover={shouldReduceMotion ? undefined : { x: 2 }}
                      transition={transitions.hover}
                      className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 flex flex-col justify-between gap-3 hover:border-slate-200 transition-colors duration-150"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="max-w-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono font-bold text-xs text-indigo-700 bg-white border border-indigo-200 px-2 py-0.5 rounded shadow-2xs">
                              0{idx === 0 ? '4' : idx === 1 ? '6' : '7'}
                            </span>
                            <h4 className="font-semibold text-sm text-slate-900">{m.name}</h4>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">{m.rubric}</p>
                        </div>

                        <div className="flex items-center gap-3 self-end sm:self-center font-mono shrink-0">
                          <span className="text-xs text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
                            Wt: {m.weight}
                          </span>
                          <span className="text-xs font-bold text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-200">
                            {m.score}
                          </span>
                          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
                            +{m.rawPts}
                          </span>
                        </div>
                      </div>

                      {/* Interactive Cross-Link Bar & Micro Score Progress */}
                      <div className="pt-2 border-t border-slate-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        {/* Micro Progress Meter */}
                        <div className="w-full sm:w-48 h-1 rounded-full bg-slate-200 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${numericScore}%` }}
                            transition={{ duration: 0.6, delay: 0.1 * idx }}
                            className="h-full rounded-full bg-indigo-500"
                          />
                        </div>

                        {/* Interactive Supporting Evidence Shortcuts */}
                        {isCodingSandbox && (
                          <button
                            type="button"
                            onClick={handleInspectArtifact}
                            className="text-[11px] font-mono font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 cursor-pointer self-start sm:self-auto py-1 px-2.5 rounded-md hover:bg-indigo-50 border border-transparent hover:border-indigo-200 transition-colors group"
                          >
                            <Terminal size={12} className="group-hover:scale-110 transition-transform" />
                            <span>Inspect Supporting Work Artifact Diff</span>
                            <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        )}

                        {isAIPairing && (
                          <button
                            type="button"
                            onClick={handleInspectAIInsights}
                            className="text-[11px] font-mono font-semibold text-purple-600 hover:text-purple-800 flex items-center gap-1.5 cursor-pointer self-start sm:self-auto py-1 px-2.5 rounded-md hover:bg-purple-50 border border-transparent hover:border-purple-200 transition-colors group"
                          >
                            <ShieldCheck size={12} className="group-hover:scale-110 transition-transform" />
                            <span>Inspect AI Collaboration Insights</span>
                            <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Client HR Gate */}
                <motion.div 
                  whileHover={shouldReduceMotion ? undefined : { x: 2 }}
                  transition={transitions.hover}
                  className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs"
                >
                  <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-mono font-bold text-xs text-emerald-800 bg-white border border-emerald-200 px-2 py-0.5 rounded shadow-2xs">
                        08
                      </span>
                      <h4 className="font-semibold text-sm text-slate-900">{scorecard.gateModule.name}</h4>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                        Independent Client Gate
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{scorecard.gateModule.rubric}</p>
                  </div>
                  <div className="self-end sm:self-center">
                    <span className="font-mono font-bold text-xs text-emerald-700 bg-white px-3 py-1 rounded-md border border-emerald-300 shadow-2xs">
                      {scorecard.gateModule.status}
                    </span>
                  </div>
                </motion.div>

                {/* Mathematical Normalization Audit Drawer */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowMathDrawer(!showMathDrawer)}
                    className="text-xs font-mono text-slate-500 hover:text-slate-800 flex items-center gap-1.5 cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                  >
                    <Lock size={12} className="text-slate-400" />
                    <span>{showMathDrawer ? 'Hide Normalization Audit Formula' : 'View Normalization Audit Formula (85% Technical Weight)'}</span>
                    {showMathDrawer ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                  
                  <AnimatePresence>
                    {showMathDrawer && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={transitions.drawer}
                        className="overflow-hidden"
                      >
                        <div className="mt-2.5 p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md font-mono text-xs space-y-3.5">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                            <span className="text-indigo-300 font-bold flex items-center gap-1.5">
                              <Code2 size={13} />
                              AUDIT SPECIFICATION: CFG-BK-805
                            </span>
                            <span className="text-slate-400 text-[11px]">
                              Mathematical Normalization to 100% Scale
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Step 1: Raw Technical Points Sum</div>
                              <div className="text-slate-200 text-xs">
                                12.60 (MCQ) + 31.20 (Coding) + 24.60 (AI) = <strong className="text-emerald-400">68.40 pts</strong>
                              </div>
                              <div className="text-[11px] text-slate-400">
                                Total Technical Weight: 15% + 40% + 30% = <strong>85.0%</strong>
                              </div>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Step 2: Normalized Composite</div>
                              <div className="text-emerald-400 text-xs font-bold">
                                68.40 / 0.85 = 80.47% ≈ 80.5%
                              </div>
                              <div className="text-[11px] text-slate-400">
                                Result exceeds 75.0% baseline (+5.5% margin)
                              </div>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                            <span>Round 08 (HR Culture Gate): CLEARED (Evaluated independently; non-diluting)</span>
                            <span className="text-indigo-400">Governance Gate Passed</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* TAB 2: LIVE CODE DIFF & WORK ARTIFACT                         */}
            {/* ══════════════════════════════════════════════════════════════ */}
            {activeTab === 'artifact' && (
              <motion.div
                key="artifact"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-4"
              >
                {/* Evidence Cross-Link Navigation Ribbon */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleBackToScorecard}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors cursor-pointer flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                    >
                      <span>←</span>
                      <span>Back to Scorecard</span>
                    </button>
                    <span className="text-slate-500 hidden sm:inline">
                      Supporting Work Artifact for <strong>Round 06 Coding Sandbox (40% Weight · 78.0% Score)</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSpotlightSource(spotlightSource === 'round06' ? null : 'round06')}
                      className={`px-2.5 py-1 rounded text-[11px] font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                        spotlightSource === 'round06'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Sparkles size={11} />
                      <span>{spotlightSource === 'round06' ? 'Spotlight Active' : 'Highlight Round 06 Lines'}</span>
                    </button>
                    <span className="text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded font-semibold text-[10px]">
                      CONTAINER PR DIFF
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-700 font-semibold flex items-center gap-1.5">
                    <Terminal size={14} className="text-indigo-600" />
                    <span>{codeArtifact.title}</span>
                  </span>
                  <span className="text-emerald-600 font-semibold text-[11px] flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 size={12} />
                    <span>Static Analysis & Concurrency Verified</span>
                  </span>
                </div>

                {/* IDE Code Window with Tactile Diff Line Spotlighting */}
                <div className="bg-slate-900 rounded-2xl p-5 text-white border border-slate-800 shadow-md font-mono text-xs overflow-hidden">
                  
                  {/* IDE Window Title Bar */}
                  <div className="text-slate-400 pb-3 mb-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                      <span className="text-slate-200 ml-2 font-semibold">db_connection_pool.py</span>
                      <span className="text-slate-500 text-[10px] hidden sm:inline">(Task Branch: feat/pool-concurrency)</span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span>Python 3.11</span>
                      <span className="text-slate-500">commit #4f8a12</span>
                    </div>
                  </div>

                  {/* Formatted Code Lines with Line Numbers & Diff Highlighting */}
                  <div className="overflow-x-auto py-2 leading-relaxed space-y-0.5 font-mono text-xs">
                    
                    {/* Line 10: Context */}
                    <div className="flex items-center text-slate-500 hover:bg-slate-800/40 px-2 py-0.5 rounded">
                      <span className="w-8 shrink-0 text-slate-600 select-none text-[11px]">10</span>
                      <span className="w-5 shrink-0 text-slate-600 select-none"> </span>
                      <span className="text-slate-400"># Background: Worker task pool acquires connections during burst traffic</span>
                    </div>

                    {/* Line 11: Context */}
                    <div className="flex items-center text-slate-500 hover:bg-slate-800/40 px-2 py-0.5 rounded">
                      <span className="w-8 shrink-0 text-slate-600 select-none text-[11px]">11</span>
                      <span className="w-5 shrink-0 text-slate-600 select-none"> </span>
                      <span className="text-indigo-300">from</span>
                      <span className="text-slate-300 ml-1.5">core.database</span>
                      <span className="text-indigo-300 ml-1.5">import</span>
                      <span className="text-slate-300 ml-1.5">ConnectionPool, DBTimeoutError</span>
                    </div>

                    {/* Line 12: Context */}
                    <div className="flex items-center text-slate-500 hover:bg-slate-800/40 px-2 py-0.5 rounded">
                      <span className="w-8 shrink-0 text-slate-600 select-none text-[11px]">12</span>
                      <span className="w-5 shrink-0 text-slate-600 select-none"> </span>
                      <span className="text-slate-300">conn_pool = ConnectionPool(max_size=20)</span>
                    </div>

                    {/* Line 13: Empty line */}
                    <div className="flex items-center text-slate-500 px-2 py-0.5">
                      <span className="w-8 shrink-0 text-slate-600 select-none text-[11px]">13</span>
                      <span className="w-5 shrink-0 text-slate-600 select-none"> </span>
                      <span> </span>
                    </div>

                    {/* Line 14: Deleted Line 1 */}
                    <div className="flex items-center bg-red-950/30 text-red-300/80 px-2 py-0.5 rounded border-l-2 border-red-500/50">
                      <span className="w-8 shrink-0 text-red-500/70 select-none text-[11px]">14</span>
                      <span className="w-5 shrink-0 text-red-400 select-none font-bold">-</span>
                      <span>def fetch_unbounded():</span>
                    </div>

                    {/* Line 15: Deleted Line 2 */}
                    <div className="flex items-center bg-red-950/30 text-red-300/80 px-2 py-0.5 rounded border-l-2 border-red-500/50">
                      <span className="w-8 shrink-0 text-red-500/70 select-none text-[11px]">15</span>
                      <span className="w-5 shrink-0 text-red-400 select-none font-bold">-</span>
                      <span className="ml-4">conn = conn_pool.acquire()</span>
                      <span className="ml-4 text-[10px] text-red-400/80 italic font-sans hidden md:inline"># Risk: indefinite block if pool exhausted</span>
                    </div>

                    {/* Line 16: Deleted Line 3 */}
                    <div className="flex items-center bg-red-950/30 text-red-300/80 px-2 py-0.5 rounded border-l-2 border-red-500/50">
                      <span className="w-8 shrink-0 text-red-500/70 select-none text-[11px]">16</span>
                      <span className="w-5 shrink-0 text-red-400 select-none font-bold">-</span>
                      <span className="ml-4">return conn.execute_query()</span>
                    </div>

                    {/* Line 17: Empty line */}
                    <div className="flex items-center text-slate-500 px-2 py-0.5">
                      <span className="w-8 shrink-0 text-slate-600 select-none text-[11px]">17</span>
                      <span className="w-5 shrink-0 text-slate-600 select-none"> </span>
                      <span> </span>
                    </div>

                    {/* Line 18: Candidate Added Line 1 (Spotlighted) */}
                    <motion.div 
                      animate={spotlightSource === 'round06' ? { backgroundColor: 'rgba(6, 78, 59, 0.45)' } : {}}
                      className={`flex items-center px-2 py-0.5 rounded transition-colors duration-200 border-l-2 ${
                        spotlightSource === 'round06' 
                          ? 'border-emerald-400 bg-emerald-950/40 text-emerald-200' 
                          : 'border-emerald-500/60 bg-emerald-950/20 text-emerald-300'
                      }`}
                    >
                      <span className="w-8 shrink-0 text-emerald-500/80 select-none text-[11px]">18</span>
                      <span className="w-5 shrink-0 text-emerald-400 select-none font-bold">+</span>
                      <span className="font-semibold">def fetch_bounded(timeout_ms: int = 500):</span>
                    </motion.div>

                    {/* Line 19: Candidate Added Line 2 (Spotlighted) */}
                    <motion.div 
                      animate={spotlightSource === 'round06' ? { backgroundColor: 'rgba(6, 78, 59, 0.45)' } : {}}
                      className={`flex items-center px-2 py-0.5 rounded transition-colors duration-200 border-l-2 ${
                        spotlightSource === 'round06' 
                          ? 'border-emerald-400 bg-emerald-950/40 text-emerald-200' 
                          : 'border-emerald-500/60 bg-emerald-950/20 text-emerald-300'
                      }`}
                    >
                      <span className="w-8 shrink-0 text-emerald-500/80 select-none text-[11px]">19</span>
                      <span className="w-5 shrink-0 text-emerald-400 select-none font-bold">+</span>
                      <span className="ml-4">with conn_pool.acquire(timeout=timeout_ms) as conn:</span>
                    </motion.div>

                    {/* Line 20: Candidate Added Line 3 (Spotlighted) */}
                    <motion.div 
                      animate={spotlightSource === 'round06' ? { backgroundColor: 'rgba(6, 78, 59, 0.45)' } : {}}
                      className={`flex items-center px-2 py-0.5 rounded transition-colors duration-200 border-l-2 ${
                        spotlightSource === 'round06' 
                          ? 'border-emerald-400 bg-emerald-950/40 text-emerald-200' 
                          : 'border-emerald-500/60 bg-emerald-950/20 text-emerald-300'
                      }`}
                    >
                      <span className="w-8 shrink-0 text-emerald-500/80 select-none text-[11px]">20</span>
                      <span className="w-5 shrink-0 text-emerald-400 select-none font-bold">+</span>
                      <span className="ml-8">return conn.execute_safely()</span>
                    </motion.div>

                  </div>

                  {/* Tactile Telemetry Contribution Callout Banner */}
                  <AnimatePresence>
                    {spotlightSource === 'round06' && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.25 }}
                        className="mt-3 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs shadow-inner"
                      >
                        <div className="flex items-center gap-2">
                          <Sparkles size={14} className="text-emerald-400 shrink-0" />
                          <span>
                            <strong>Round 06 Telemetry Source:</strong> Lines 18–20 added context-managed timeout protection. Contributed <strong>+31.2 pts</strong> (40% weight × 78.0% score).
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-emerald-300 bg-emerald-900/80 px-2 py-0.5 rounded border border-emerald-600/60 self-start sm:self-auto shrink-0">
                          36.7% NORMALIZED SHARE
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* IDE Test & Linter Status Strip */}
                  <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 size={13} className="shrink-0" />
                      <span>{codeArtifact.telemetryNote}</span>
                    </div>
                    <div className="text-slate-400 font-mono text-[10px]">
                      Pylint: 10.0/10 · PyTest: 18 passed · 0 leaks detected
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* TAB 3: QUALITATIVE DIAGNOSTIC & MENTORSHIP                    */}
            {/* ══════════════════════════════════════════════════════════════ */}
            {activeTab === 'qualitative' && (
              <motion.div
                key="qualitative"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-4"
              >
                {/* Evidence Cross-Link Navigation Ribbon */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleBackToScorecard}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors cursor-pointer flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                    >
                      <span>←</span>
                      <span>Back to Scorecard</span>
                    </button>
                    <span className="text-slate-500 hidden sm:inline">
                      Synthesized from Rounds 04, 06, 07, and 08 Telemetry
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSpotlightSource(spotlightSource === 'round07' ? null : 'round07')}
                      className={`px-2.5 py-1 rounded text-[11px] font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                        spotlightSource === 'round07'
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Sparkles size={11} />
                      <span>{spotlightSource === 'round07' ? 'Spotlight Active' : 'Highlight Round 07 AI Pairing'}</span>
                    </button>
                    <span className="text-purple-600 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded font-semibold text-[10px]">
                      QUALITATIVE INSIGHTS
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Demonstrated Strengths */}
                  <div className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-100">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                        <CheckCircle2 size={14} className="text-emerald-600" />
                        <span>Demonstrated Strengths</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded font-bold">
                        3 VERIFIED ATTRIBUTES
                      </span>
                    </div>

                    <ul className="space-y-3 text-xs text-slate-700">
                      {strengthsAndGaps.strengths.map((s, idx) => {
                        const isAIPairingItem = idx === 2; // "Effective verification of generated code against strict linting standards."
                        const isHighlighted = spotlightSource === 'round07' && isAIPairingItem;

                        return (
                          <motion.li 
                            key={idx} 
                            animate={isHighlighted ? { scale: 1.01 } : { scale: 1 }}
                            className={`p-2.5 rounded-xl transition-all duration-200 flex items-start gap-2.5 leading-relaxed ${
                              isHighlighted 
                                ? 'bg-purple-100/70 border border-purple-300 text-purple-950 shadow-xs' 
                                : 'bg-white/60 border border-emerald-100/60'
                            }`}
                          >
                            <span className={`font-bold shrink-0 mt-0.5 ${isHighlighted ? 'text-purple-600' : 'text-emerald-600'}`}>
                              {isHighlighted ? '★' : '✓'}
                            </span>
                            <div>
                              <span>{s}</span>
                              {isAIPairingItem && (
                                <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                                  <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded border border-purple-200">
                                    Round 07 AI-Pairing (+24.6 pts)
                                  </span>
                                  {isHighlighted && (
                                    <span className="text-[10px] font-mono text-purple-600 italic">
                                      Flagged hallucinated API signature under 45s
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Capability Growth Gaps (Targeted Onboarding Milestones) */}
                  <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200/80">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                        <AlertTriangle size={14} className="text-amber-600" />
                        <span>Identified Capability Growth Gaps</span>
                      </div>
                      <span className="text-[10px] font-mono text-amber-800 bg-amber-100 px-2 py-0.5 rounded font-bold">
                        ACTIONABLE ONBOARDING
                      </span>
                    </div>

                    <ul className="space-y-3 text-xs text-slate-700">
                      {strengthsAndGaps.gaps.map((g, idx) => (
                        <li key={idx} className="p-2.5 rounded-xl bg-white/70 border border-amber-200/70 flex items-start gap-2.5 leading-relaxed">
                          <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                          <div>
                            <span>{g}</span>
                            <div className="mt-1 text-[10px] font-mono text-amber-700 font-medium">
                              {idx === 0 ? 'Scope: Day 1–30 Microservices Roadmap' : 'Mentorship: Assigned Lead Backend Architect'}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* ── Hiring Committee Action Console (Bottom Strip) ── */}
        <div className="p-6 sm:p-8 bg-slate-50/90 border-t border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-1">
              <UserCheck size={14} className="text-indigo-600" />
              <span>{decisionPanel.statusBanner}</span>
            </div>
            <p className="text-xs text-slate-500 font-normal">
              Authorized hiring managers retain complete decision authority over shortlisting progression.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {decisionPanel.options.map((opt, idx) => {
              const isActive = selectedDecision === idx;
              return (
                <motion.button
                  key={idx}
                  type="button"
                  whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                  whileTap={shouldReduceMotion ? undefined : { y: 0 }}
                  onClick={() => setSelectedDecision(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all duration-150 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {isActive && <Check size={12} className="text-emerald-400" />}
                  <span>{opt.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

      </motion.div>

      <div className="mt-3 text-[11px] text-slate-400 text-center font-mono">
        {decisionPanel.footnote}
      </div>

    </section>
  );
};
