import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { TrendingUp, Sparkles, Check, ChevronDown, ChevronUp, Terminal, ShieldAlert, Cpu, GitCommit, CheckCircle2, UserCheck, Layers } from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';
import { transitions, buttonHoverProps, MOTION_EASINGS } from './motionTokens';

export const BusinessValueSection: React.FC = () => {
  const { businessValue } = IDENTIFY_CONTENT;
  const { dualTrackExample } = businessValue;
  const shouldReduceMotion = useReducedMotion();
  const [showDualTrack, setShowDualTrack] = useState<boolean>(false);
  const [activeTrackTab, setActiveTrackTab] = useState<number>(0);

  const valueCompositions = [
    {
      number: '01',
      title: 'Realistic Work Over Memorized Trivia',
      desc: 'Assess real-world problem decomposition, defensive error handling, and clean code habits instead of campus brainteasers.',
      visualBadge: 'Production Sandbox',
      visualHeadline: 'Dockerized Container Telemetry',
      items: [
        '18/18 Unit tests passed under stress load',
        'Thread-safe pool & timeout protection verified',
        'Zero memory leaks detected in execution diff',
      ],
      icon: Terminal,
      color: 'indigo',
    },
    {
      number: '02',
      title: 'Targeted Onboarding Over Vague Feedback',
      desc: 'Pinpoint exact technical growth areas upfront so engineering leads can calibrate day-one mentorship before hire.',
      visualBadge: 'Actionable Roadmap',
      visualHeadline: 'Day 1–30 Onboarding Calibration',
      items: [
        'Verified Strength: Clean architecture & concurrency',
        'Identified Gap: Microservices transaction rollbacks',
        'Mentorship Plan: Assigned lead architect pairing',
      ],
      icon: GitCommit,
      color: 'emerald',
    },
    {
      number: '03',
      title: 'Auditable Evidence Over Interviewer Variance',
      desc: 'Ground committee reviews in concrete work artifacts and standardized rubrics, eliminating subjective interviewer bias.',
      visualBadge: 'Standardized Rubric',
      visualHeadline: 'Normalized 80.5% Composite Dossier',
      items: [
        'Exceeds 75.0% role qualification baseline',
        'Client HR cultural fitment gate cleared',
        '100% Final shortlisting authority retained by hiring lead',
      ],
      icon: UserCheck,
      color: 'purple',
    },
  ];

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
          <TrendingUp size={13} className="text-slate-600 shrink-0" />
          <span>{businessValue.eyebrow}</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 leading-[1.14] mb-4 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {businessValue.headline}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          {businessValue.supportingCopy}
        </p>
      </motion.div>

      {/* ── Three Concise Business Value Statements with Visual Compositions ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 items-stretch">
        {valueCompositions.map((comp) => {
          const Icon = comp.icon;
          return (
            <motion.div
              key={comp.number}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: MOTION_EASINGS.easeOut }}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded">
                    OUTCOME 0{comp.number}
                  </span>
                  <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                    <Icon size={13} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                  {comp.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {comp.desc}
                </p>

                {/* Meaningful Visual Composition Box */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs border border-slate-800 shadow-inner space-y-2.5 mb-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px]">
                    <span className="text-slate-400 font-semibold uppercase">{comp.visualHeadline}</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-500/40 text-indigo-300 font-bold text-[9px]">
                      {comp.visualBadge}
                    </span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    {comp.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-300">
                        <Check size={12} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Enterprise Impact</span>
                <span className="text-indigo-600 font-semibold">Verified Signal</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Optional Supporting Explanation: Dual-Track Technical Evaluation ── */}
      <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 overflow-hidden">
        <button
          type="button"
          onClick={() => setShowDualTrack(!showDualTrack)}
          className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer hover:bg-slate-100/60 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 shrink-0">
              <Sparkles size={15} />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-0.5">
                Supporting Paradigm
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                Dual-Track Evaluation: Unassisted Foundations & AI Orchestration
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 shrink-0">
            <span>{showDualTrack ? 'Hide' : 'Expand'}</span>
            {showDualTrack ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </button>

        <AnimatePresence>
          {showDualTrack && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: MOTION_EASINGS.easeOut }}
              className="overflow-hidden"
            >
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-200/70">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 max-w-3xl">
                  {dualTrackExample.contextNote}
                </p>

                {/* Side-by-side terminal comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
                  {dualTrackExample.tracks.map((track, idx) => {
                    const isAI = idx === 1;

                    return (
                      <div
                        key={idx}
                        className={`rounded-2xl p-5 border flex flex-col justify-between ${
                          isAI
                            ? 'bg-white border-indigo-200 shadow-xs'
                            : 'bg-white border-slate-200/90 shadow-2xs'
                        }`}
                      >
                        <div>
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider mb-3 border ${
                            isAI
                              ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}>
                            {track.badge}
                          </span>

                          <h5 className="text-base font-bold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                            {track.title}
                          </h5>
                          <div className="text-xs font-mono text-slate-500 mb-3">
                            Focus: <strong className="text-slate-800">{track.focus}</strong>
                          </div>

                          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-3 text-xs">
                            <div className="font-mono text-[10px] uppercase font-bold text-slate-400 mb-0.5">
                              What Is Evaluated:
                            </div>
                            <p className="text-slate-700 leading-relaxed font-normal text-[11px]">
                              {track.whatIsEvaluated}
                            </p>
                          </div>
                        </div>

                        <div className="pt-2.5 border-t border-slate-100 text-xs">
                          <div className="font-mono text-[10px] uppercase font-bold text-indigo-600 mb-0.5">
                            Employer Value:
                          </div>
                          <p className="text-slate-600 leading-relaxed font-normal text-[11px]">
                            {track.employerValue}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
