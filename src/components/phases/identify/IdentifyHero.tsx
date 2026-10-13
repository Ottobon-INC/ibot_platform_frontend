import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Check, Layers, SlidersHorizontal } from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';

interface IdentifyHeroProps {
  onOpenModal: () => void;
  onExploreMethods: () => void;
}

export const IdentifyHero: React.FC<IdentifyHeroProps> = ({ onOpenModal, onExploreMethods }) => {
  const { hero } = IDENTIFY_CONTENT;
  const { previewCard } = hero;

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto pt-6 sm:pt-10 pb-16 lg:pb-24 overflow-hidden sm:overflow-visible">
      {/* Ambient background glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-orange-100/35 via-orange-50/10 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
        {/* Left Column: Core Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50/80 border border-orange-200/70 text-orange-600 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
            <Sparkles size={13} className="text-orange-600 shrink-0" />
            <span>{hero.eyebrow}</span>
          </div>

          {/* Main Headline (H1) - Balanced line-breaks and responsive sizing */}
          <h1
            className="text-[32px] sm:text-[46px] lg:text-[54px] font-bold text-slate-900 leading-[1.12] sm:leading-[1.1] tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Evaluate What Matters.
            <span className="block text-slate-900">Shortlist with Evidence.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            {hero.supportingCopy}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10 w-full sm:w-auto">
            <button
              type="button"
              onClick={onExploreMethods}
              className="px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md shadow-slate-900/10 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={onOpenModal}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm sm:text-base border border-slate-200/90 flex items-center justify-center cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-2xs"
            >
              {hero.ctaSecondary}
            </button>
          </div>

          {/* Key Strategic Anchors (Horizontal Executive Shelf) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-slate-200/70 w-full">
            {hero.anchors.map((anchor, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 leading-snug">
                    {anchor.title}
                  </div>
                  <div className="text-[11px] text-slate-500 leading-normal mt-0.5">
                    {anchor.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Executive Evaluation Preview (Clean, Focused Hero Card) */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 p-5 sm:p-7 relative overflow-hidden transition-all hover:shadow-2xl hover:shadow-slate-200/60">
            {/* Top Bar: Role Profile Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4 mb-4 gap-3">
              <div>
                <div className="flex items-center gap-1.5 mb-1 text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  <SlidersHorizontal size={12} className="text-orange-600" />
                  <span>{previewCard.tag}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  {previewCard.roleTitle}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] font-bold shrink-0">
                <Check size={11} className="text-emerald-600" />
                <span>{previewCard.status}</span>
              </span>
            </div>

            {/* Configured Modules Stack (Refined & Visual) */}
            <div className="space-y-2.5 mb-5">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider px-1">
                <span>Configured Evaluation Modules</span>
                <span>Score / Contribution</span>
              </div>

              {previewCard.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/70 hover:bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono font-bold text-orange-600 bg-orange-100/70 border border-orange-200/60 w-6 h-6 rounded-md flex items-center justify-center text-[10px] shrink-0">
                      {mod.code}
                    </span>
                    <div>
                      <div className="font-semibold text-xs text-slate-800 leading-snug">{mod.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono">Weight: {mod.weight}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-xs text-slate-900">{mod.score}</div>
                    <div className="text-[10px] font-mono text-slate-500">{mod.contribution}</div>
                  </div>
                </div>
              ))}

              {/* HR Pass/Fail Client Gate */}
              <div className="bg-emerald-50/40 rounded-xl p-3 border border-emerald-100/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 w-6 h-6 rounded-md flex items-center justify-center text-[10px] shrink-0">
                    {previewCard.gateModule.code}
                  </span>
                  <div>
                    <div className="font-semibold text-xs text-slate-800 leading-snug">{previewCard.gateModule.name}</div>
                    <div className="text-[11px] text-emerald-700 font-mono font-medium">{previewCard.gateModule.type}</div>
                  </div>
                </div>
                <span className="font-mono font-bold text-emerald-700 text-[10px] bg-emerald-100/80 border border-emerald-200 px-2 py-0.5 rounded-md">
                  {previewCard.gateModule.status}
                </span>
              </div>
            </div>

            {/* Composite Score Result (Deep Navy Executive Tile) */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                    Normalized Composite Score
                  </div>
                  <div className="text-xs text-slate-300">
                    Threshold: <span className="font-mono font-bold text-white">{previewCard.baselineThreshold}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-[28px] font-bold font-mono text-emerald-400 leading-none">
                    {previewCard.compositeScore}
                  </div>
                </div>
              </div>
              <div className="mt-2.5 pt-2.5 border-t border-slate-800 text-[10px] text-slate-400 font-mono leading-relaxed">
                {previewCard.normalizationNote}
              </div>
            </div>

            {/* Illustrative Disclaimer Note */}
            <div className="mt-3 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5">
              <ShieldCheck size={12} className="text-slate-400 shrink-0" />
              <span>Illustrative calculation based on locked framework benchmark</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
