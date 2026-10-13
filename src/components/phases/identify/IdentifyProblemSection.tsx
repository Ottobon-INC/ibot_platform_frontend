import React from 'react';
import { AlertCircle, EyeOff, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, Check } from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';

export const IdentifyProblemSection: React.FC = () => {
  const { problem } = IDENTIFY_CONTENT;
  const [conventional, blindspot, ibot] = problem.perspectives;

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto py-16 sm:py-24 border-t border-slate-200/60">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <ShieldAlert size={13} className="text-slate-600 shrink-0" />
          <span>{problem.eyebrow}</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.15] mb-5 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {problem.headline}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {problem.supportingCopy}
        </p>
      </div>

      {/* Asymmetric Editorial Composition: Proxy Signals vs Practical Evidence */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: The Proxy Screening Dilemma (7 cols) - Subtle Muted Editorial Surface */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-slate-50/80 border border-slate-200/90 p-6 sm:p-8 lg:p-9">
          <div>
            {/* Top Indicator */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/70">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                Traditional Screening Architecture
              </span>
              <span className="text-xs font-mono text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-full font-semibold">
                Indirect Signals
              </span>
            </div>

            {/* Sub-block 1: Conventional Screening */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider px-2 py-0.5 bg-white border border-slate-200 rounded">
                  {conventional.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">Focus: {conventional.coreFocus}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                {conventional.title}
              </h3>
              <ul className="space-y-2 mb-4">
                {conventional.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="p-3 bg-white/90 rounded-xl border border-slate-200/70 text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-700 font-mono text-[11px] uppercase block mb-0.5">{conventional.realityTag}</strong>
                {conventional.realityText}
              </div>
            </div>

            {/* Sub-block 2: The Evaluation Blindspot */}
            <div className="pt-6 border-t border-slate-200/70">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono font-bold text-orange-700 uppercase tracking-wider px-2 py-0.5 bg-orange-100/70 border border-orange-200 rounded">
                  {blindspot.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">Focus: {blindspot.coreFocus}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                {blindspot.title}
              </h3>
              <ul className="space-y-2 mb-4">
                {blindspot.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="p-3 bg-orange-50/70 rounded-xl border border-orange-200/70 text-xs text-slate-700 leading-relaxed">
                <strong className="text-orange-800 font-mono text-[11px] uppercase block mb-0.5">{blindspot.realityTag}</strong>
                {blindspot.realityText}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The IBOT Practical Capability Solution (5 cols) - Elevated Distinct Surface */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-white border-2 border-emerald-500/40 shadow-xl shadow-emerald-950/5 p-6 sm:p-8 lg:p-9 relative overflow-hidden">
          {/* Subtle green ambient light */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl pointer-events-none -z-0"
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Top Badge Strip */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-emerald-100">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                <Sparkles size={12} className="text-emerald-600" />
                <span>{ibot.tag}</span>
              </span>
              <span className="font-mono text-xs text-emerald-700 font-semibold">
                Direct Capability
              </span>
            </div>

            {/* Title & Core Focus */}
            <h3
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {ibot.title}
            </h3>
            <div className="text-xs font-mono font-medium text-emerald-700 mb-6 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100">
              Focus: <strong className="text-slate-900">{ibot.coreFocus}</strong>
            </div>

            {/* Demonstrated Capability Bullets */}
            <ul className="space-y-3.5 mb-8">
              {ibot.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-emerald-700" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Outcome Highlight Box */}
          <div className="relative z-10 pt-5 border-t border-emerald-100 bg-gradient-to-br from-emerald-50/50 to-emerald-100/30 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 lg:-mx-9 lg:-mb-9 p-6 sm:p-8 rounded-b-3xl">
            <div className="text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-700" />
              <span>{ibot.realityTag}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
              {ibot.realityText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
