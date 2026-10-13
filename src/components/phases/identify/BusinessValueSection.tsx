import React from 'react';
import { TrendingUp, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';

export const BusinessValueSection: React.FC = () => {
  const { businessValue } = IDENTIFY_CONTENT;
  const { pillars, dualTrackExample } = businessValue;

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto py-16 sm:py-24 border-t border-slate-200/60">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <TrendingUp size={13} className="shrink-0" />
          <span>{businessValue.eyebrow}</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.15] mb-5 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {businessValue.headline}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {businessValue.supportingCopy}
        </p>
      </div>

      {/* 3 Core Employer Value Pillars - Distinct Editorial Narrative Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {pillars.map((pillar) => (
          <div
            key={pillar.number}
            className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Top subtle highlight */}
            <div className="flex items-baseline justify-between mb-6">
              <span
                className="text-4xl sm:text-5xl font-bold text-slate-200 group-hover:text-orange-200 transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {pillar.number}
              </span>
              <span className="w-2 h-2 rounded-full bg-orange-600 opacity-60" />
            </div>

            <div>
              <h3
                className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Verified Employer Outcome</span>
              <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <Check size={11} className="text-emerald-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Supporting Example: Modern Dual-Track Evaluation Panel */}
      <div className="rounded-3xl bg-slate-50/90 border border-slate-200/90 p-6 sm:p-10">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={12} className="text-orange-600 shrink-0" />
            <span>Modern Technical Workflow Evaluation</span>
          </div>
          <h3
            className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2.5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Supporting Example: Dual-Track Evaluation
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {dualTrackExample.contextNote}
          </p>
        </div>

        {/* Side-by-Side Dual-Track Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dualTrackExample.tracks.map((track, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-4">
                  {track.badge}
                </span>

                <h4
                  className="text-xl font-bold text-slate-900 mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {track.title}
                </h4>
                <div className="text-xs font-mono text-orange-600 font-medium mb-4">
                  Focus: {track.focus}
                </div>

                <div className="mb-4 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                    What Is Evaluated
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                    {track.whatIsEvaluated}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Value to Employers
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {track.employerValue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
