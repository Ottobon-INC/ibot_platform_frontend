import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Calendar, Sparkles } from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';

interface IdentifyCtaSectionProps {
  onOpenModal: () => void;
}

export const IdentifyCtaSection: React.FC<IdentifyCtaSectionProps> = ({ onOpenModal }) => {
  const { cta } = IDENTIFY_CONTENT;

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto py-16 sm:py-24">
      {/* High-Impact Deep Navy Architectural Finale Card */}
      <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
        {/* Ambient warm corner glow */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange-400 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={12} className="text-orange-400 shrink-0" />
            <span>{cta.eyebrow}</span>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {cta.headline}
          </h2>

          {/* Supporting Copy */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            {cta.supportingCopy}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenModal}
              className="px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-orange-600/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar size={16} />
              <span>{cta.ctaPrimary}</span>
            </button>
            <Link
              to="/#approach"
              className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm sm:text-base border border-slate-700 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <span>{cta.ctaSecondary}</span>
            </Link>
          </div>

          {/* Strategic Anchors Shelf */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-slate-800 text-xs font-mono text-slate-400">
            {cta.anchors.map((anchor, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-950 border border-emerald-700 flex items-center justify-center">
                  <Check size={10} className="text-emerald-400" />
                </div>
                <span>{anchor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lifecycle Transition to Phase 02: Build (Preserving Optional Navigation) */}
      <div className="mt-8 rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs hover:shadow-xs transition-shadow">
        <div>
          <span className="font-mono text-[11px] text-slate-400 font-bold uppercase tracking-wider block mb-1">
            {cta.nextPhase.tag}
          </span>
          <h4
            className="text-lg sm:text-xl font-bold text-slate-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {cta.nextPhase.title}
          </h4>
        </div>
        <Link
          to={cta.nextPhase.href}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0"
        >
          <span>{cta.nextPhase.linkText}</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
};
