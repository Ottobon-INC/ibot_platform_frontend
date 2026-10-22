import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { GitBranch, ShieldCheck, UserCheck, ArrowRight, Check, Terminal, FileCode2, Sliders, Database, UserCheck2, Sparkles } from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';
import { transitions, tabContentVariants, MOTION_EASINGS } from './motionTokens';

export const FilteringWorkflow: React.FC = () => {
  const { workflow } = IDENTIFY_CONTENT;
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();


  const stageDeliverables = [
    {
      badge: 'Role Benchmark Spec',
      icon: Sliders,
      headline: 'Target Competencies & Seniority Parameters',
      sub: 'Defines required technical stack, architecture depth, and baseline thresholds.',
    },
    {
      badge: 'Configured Blueprint',
      icon: Terminal,
      headline: 'Selected from 9-Round Enterprise Menu',
      sub: '4 Modular rounds chosen: CS MCQ (04), Coding (06), AI-Pair (07), HR Gate (08).',
    },
    {
      badge: 'Calibrated Rubrics',
      icon: Database,
      headline: '85% Technical Weight + Client Gate',
      sub: 'Objective scoring weights and 75.0% qualification baseline calibrated upfront.',
    },
    {
      badge: 'Execution Telemetry',
      icon: FileCode2,
      headline: '18/18 Tests Passed in Docker Sandbox',
      sub: 'Containerized PR diffs, static analysis, and timeout resilience verified live.',
    },
    {
      badge: 'Synthesized Dossier',
      icon: Sparkles,
      headline: 'Normalized 80.5% Candidate Dossier',
      sub: 'Combines verified work samples, rubrics, strengths, and mentorship gaps.',
    },
    {
      badge: 'Human Shortlist Authority',
      icon: UserCheck2,
      headline: '100% Manager Decision Authority',
      sub: 'Hiring committee reviews auditable dossier; human leads make final shortlisting call.',
    },
  ];

  const currentDeliverable = stageDeliverables[activeStageIndex];
  const activeStage = workflow.stages[activeStageIndex];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto py-20 sm:py-28 border-t border-slate-200/70">
      
      {/* ── Section Header with Scroll Reveal ── */}
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45, ease: MOTION_EASINGS.easeOut }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
            <GitBranch size={13} className="text-slate-600 shrink-0" />
            <span>{workflow.eyebrow}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 leading-[1.14] mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {workflow.headline}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {workflow.supportingCopy}
          </p>
        </div>

        {/* Governed Stage Status Indicator */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-100/90 px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-2xs shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Stage 0{activeStageIndex + 1} of 06 · Active Pipeline Gate</span>
        </div>
      </motion.div>

      {/* ── Primary Component: Six-Stage Journey Conduit ── */}
      <div className="mb-10">
        
        {/* Horizontal Pipeline Stepper Ribbon (Desktop) */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-8 relative">
          
          {/* Animated Connecting Conduit Rail */}
          <div className="absolute top-6 left-10 right-10 h-1 bg-slate-200 -z-0 rounded-full overflow-hidden">
            <div className="w-full h-full bg-slate-200" />
            <motion.div 
              animate={{ width: `${(activeStageIndex / 5) * 100}%` }}
              transition={{ duration: 0.45, ease: MOTION_EASINGS.easeOut }}
              className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-indigo-500 via-indigo-600 to-emerald-500 rounded-full"
            />
          </div>

          {workflow.stages.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            const isStage6 = stage.isGovernanceStage;

            return (
              <motion.div
                key={stage.number}
                onClick={() => setActiveStageIndex(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStageIndex(idx);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                className="relative z-10 flex flex-col items-center cursor-pointer group focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-xl p-1"
              >
                {/* Node Pill */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-200 mb-2.5 shadow-2xs relative ${
                  isStage6
                    ? isActive
                      ? 'bg-slate-900 text-emerald-400 ring-4 ring-emerald-500/40 shadow-lg'
                      : 'bg-slate-900 text-emerald-400 ring-2 ring-emerald-500/30'
                    : isActive
                      ? 'bg-[#4F46E5] text-white ring-4 ring-indigo-500/25 shadow-md scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 group-hover:border-slate-300'
                }`}>
                  {isStage6 ? <UserCheck size={18} /> : stage.number}
                  
                  {/* Active Pulse Ring */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeWorkflowStageRing"
                      className={`absolute -inset-1 rounded-2xl pointer-events-none ${
                        isStage6 ? 'border-2 border-emerald-400/80' : 'border-2 border-indigo-500/80'
                      }`}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </div>

                {/* Concise Stage Title */}
                <div className="text-center px-1">
                  <div className={`text-xs font-bold leading-tight transition-colors duration-150 ${
                    isActive ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
                  }`}>
                    {stage.title}
                  </div>
                  {isStage6 ? (
                    <span className="text-[9px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200 mt-1 inline-block">
                      Human Authority
                    </span>
                  ) : (
                    <span className="text-[9px] font-mono text-slate-400 mt-1 inline-block">
                      Stage 0{idx + 1}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / Tablet Horizontal Stepper Ribbon */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {workflow.stages.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            const isStage6 = stage.isGovernanceStage;

            return (
              <button
                key={stage.number}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={`px-3 py-2 rounded-xl text-xs font-mono font-semibold whitespace-nowrap shrink-0 flex items-center gap-1.5 transition-all duration-150 cursor-pointer ${
                  isActive
                    ? isStage6
                      ? 'bg-slate-900 text-emerald-400 ring-2 ring-emerald-500/40'
                      : 'bg-indigo-600 text-white shadow-2xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>{stage.number}.</span>
                <span>{stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Stage Deep-Dive Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Active Stage Visualizer (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-8 flex flex-col justify-between min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStageIndex}
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                    <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded">
                      STAGE {activeStage.number} OF 06
                    </span>
                    {activeStage.isGovernanceStage ? (
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
                        <UserCheck size={13} className="text-emerald-600" />
                        <span>HUMAN HIRING AUTHORITY VETO</span>
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-slate-400">
                        Qualification Stream Progression
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {activeStage.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {activeStage.summary}
                  </p>

                  {/* Concrete Deliverable Telemetry Box */}
                  <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs border border-slate-800 shadow-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px]">
                      <span className="text-slate-400 font-semibold uppercase flex items-center gap-1.5">
                        <currentDeliverable.icon size={13} className="text-indigo-400" />
                        <span>Stage Deliverable Artifact</span>
                      </span>
                      <span className="text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/40 font-bold">
                        {currentDeliverable.badge}
                      </span>
                    </div>
                    <div className="font-semibold text-slate-200 text-xs mb-1">
                      {currentDeliverable.headline}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {currentDeliverable.sub}
                    </div>
                  </div>
                </div>

                {/* Stepper Navigation Controls */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono mt-5">
                  <button
                    type="button"
                    disabled={activeStageIndex === 0}
                    onClick={() => setActiveStageIndex(prev => Math.max(0, prev - 1))}
                    className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                  >
                    ← Previous Stage
                  </button>
                  <span className="text-slate-400">Stage {activeStageIndex + 1} of 6</span>
                  <button
                    type="button"
                    disabled={activeStageIndex === 5}
                    onClick={() => setActiveStageIndex(prev => Math.min(5, prev + 1))}
                    className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                  >
                    Next Stage →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Highlight: Locked Human Shortlisting Authority Seal (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-slate-800 shadow-xl">
            {/* Ambient corner glow */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true" 
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Governance Principle
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2.5" style={{ fontFamily: 'var(--font-display)' }}>
                Stage 06: Human Hiring Authority
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                Candidate selection is never delegated to an automated black box. Automated scorecards calculate benchmark contributions; authorized hiring managers retain 100% control over shortlisting decisions.
              </p>

              <div className="space-y-2 mb-5 text-xs font-mono text-slate-200">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <Check size={13} className="text-emerald-400 shrink-0" />
                  <span>No black-box rejection algorithms</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <Check size={13} className="text-emerald-400 shrink-0" />
                  <span>Transparent, auditable scoring trail</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <Check size={13} className="text-emerald-400 shrink-0" />
                  <span>Hiring panel retains final shortlisting veto</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
              Decision Responsibility: Automated Scoring vs. Human Hiring Authority
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
