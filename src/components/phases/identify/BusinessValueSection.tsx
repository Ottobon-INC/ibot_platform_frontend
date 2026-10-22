import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TrendingUp, Sparkles, Check, Terminal, Cpu, Clock, ShieldCheck, Target } from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';
import { MOTION_EASINGS } from './motionTokens';

export const BusinessValueSection: React.FC = () => {
  const { businessValue } = IDENTIFY_CONTENT;
  const { dualTrackExample } = businessValue;
  const shouldReduceMotion = useReducedMotion();
  const [activeTrackTab, setActiveTrackTab] = useState<0 | 1>(0);

  const valueCompositions = [
    {
      number: '01',
      title: 'Senior Engineering Hours Reclaimed',
      subtitle: 'Eliminate Repetitive Screening Loops',
      desc: 'Replace 15–20 senior engineering hours spent per candidate on uncalibrated phone screens. Hiring committees review pre-verified execution telemetry before scheduling final interviews.',
      metricNumber: '15–20h',
      metricLabel: 'Eng Hours Saved / Candidate',
      visualBadge: 'Engineering Velocity',
      items: [
        'Zero senior engineer drag on initial screening',
        'Pre-verified execution logs before interview calls',
        'Shortlist committees review concrete work artifacts',
      ],
      icon: Clock,
      color: 'indigo',
    },
    {
      number: '02',
      title: 'Targeted Day-1 Onboarding Velocity',
      subtitle: 'Pre-Identified Mentorship Roadmap',
      desc: 'Pinpoint exact technical strengths and growth areas upfront. Engineering leads receive an actionable 30-day mentorship blueprint before the engineer’s first day on the team.',
      metricNumber: 'Day 1',
      metricLabel: 'Calibrated Onboarding Ramp',
      visualBadge: 'Ramp Acceleration',
      items: [
        'Exact capability strengths & growth areas mapped',
        'Personalized 30-day lead pairing plan',
        'Zero post-hire probationary capability surprises',
      ],
      icon: Target,
      color: 'emerald',
    },
    {
      number: '03',
      title: 'Probationary Risk Elimination',
      subtitle: 'Auditable Evidence Over Subjectivity',
      desc: 'Ground shortlisting decisions in normalized benchmark scorecards and verifiable code diffs, eliminating costly 90-day mis-hires and pedigree bias.',
      metricNumber: '100%',
      metricLabel: 'Human Authority With Telemetry',
      visualBadge: 'Quality Governance',
      items: [
        'Standardized 85% technical + client HR gate',
        'Zero distortion from brand logos or resumes',
        'Auditable candidate dossier logged for committee',
      ],
      icon: ShieldCheck,
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

      {/* ── Three Strategic Value Statements with Executive Metrics ── */}
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
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                    <Icon size={15} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                  {comp.title}
                </h3>
                <div className="text-xs font-mono text-indigo-600 font-semibold mb-3">
                  {comp.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {comp.desc}
                </p>

                {/* Executive Metric Callout Box */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs border border-slate-800 shadow-inner space-y-3 mb-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-emerald-400 tracking-tight">{comp.metricNumber}</span>
                      <span className="text-[10px] text-slate-400 uppercase">{comp.metricLabel}</span>
                    </div>
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
                <span>Executive Metric</span>
                <span className="text-indigo-600 font-semibold">Audited Signal</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Dual-Track Technical Evaluation Paradigm Console (Open by Default) ── */}
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: MOTION_EASINGS.easeOut }}
        className="rounded-3xl border border-slate-200/90 bg-white shadow-sm p-6 sm:p-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
              <Sparkles size={11} className="text-indigo-600" />
              <span>Modern Engineering Standard</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Dual-Track Technical Evaluation: Unassisted Primitives + AI Stewardship
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              {dualTrackExample.contextNote}
            </p>
          </div>

          {/* Interactive Track Switcher Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl shrink-0">
            <button
              type="button"
              onClick={() => setActiveTrackTab(0)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-150 cursor-pointer ${
                activeTrackTab === 0
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Track 01: Unassisted
            </button>
            <button
              type="button"
              onClick={() => setActiveTrackTab(1)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-150 cursor-pointer ${
                activeTrackTab === 1
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Track 02: AI-Assisted
            </button>
          </div>
        </div>

        {/* Side-by-side terminal comparison on desktop, switched on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {dualTrackExample.tracks.map((track, idx) => {
            const isAI = idx === 1;
            const isSelected = activeTrackTab === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveTrackTab(idx as 0 | 1)}
                className={`rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? isAI
                      ? 'bg-indigo-50/40 border-indigo-300 ring-2 ring-indigo-500/10 shadow-xs'
                      : 'bg-slate-50/80 border-slate-300 ring-2 ring-slate-400/10 shadow-xs'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 opacity-80 hover:opacity-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider border ${
                      isAI
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {isAI ? <Cpu size={11} /> : <Terminal size={11} />}
                      <span>{track.badge}</span>
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                        ACTIVE VIEW
                      </span>
                    )}
                  </div>

                  <h5 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {track.title}
                  </h5>
                  <div className="text-xs font-mono text-slate-500 mb-4">
                    Focus: <strong className="text-slate-800">{track.focus}</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 mb-4 text-xs shadow-2xs">
                    <div className="font-mono text-[10px] uppercase font-bold text-slate-400 mb-1">
                      What Is Evaluated:
                    </div>
                    <p className="text-slate-700 leading-relaxed font-normal text-xs">
                      {track.whatIsEvaluated}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 text-xs">
                  <div className="font-mono text-[10px] uppercase font-bold text-indigo-600 mb-1">
                    Employer Value:
                  </div>
                  <p className="text-slate-600 leading-relaxed font-normal text-xs">
                    {track.employerValue}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

    </section>
  );
};
