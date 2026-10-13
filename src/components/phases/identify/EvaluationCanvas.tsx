import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Clock, Target, Check, SlidersHorizontal, ArrowRight, RotateCcw } from 'lucide-react';
import { IDENTIFY_CONTENT, EvaluationMethod } from '../../../content/identifyContent';

interface EvaluationCanvasProps {
  onOpenModal: () => void;
}

export const EvaluationCanvas: React.FC<EvaluationCanvasProps> = ({ onOpenModal }) => {
  const { canvas } = IDENTIFY_CONTENT;
  const [activeDomainFilter, setActiveDomainFilter] = useState<'all' | 'foundational' | 'execution' | 'collaborative'>('all');
  
  // Interactive marketing demonstration: default to the 3 locked illustrative technical rounds
  const [selectedMethodIds, setSelectedMethodIds] = useState<string[]>(['mcq', 'coding', 'aipair']);

  const toggleMethod = (id: string) => {
    setSelectedMethodIds((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const applyDefaultBackendPreset = () => {
    setSelectedMethodIds(['mcq', 'coding', 'aipair']);
  };

  const filteredMethods = activeDomainFilter === 'all'
    ? canvas.methods
    : canvas.methods.filter((m) => m.domain === activeDomainFilter);

  const selectedMethods = canvas.methods.filter((m) => selectedMethodIds.includes(m.id));

  const getDomainBadge = (domain: string) => {
    switch (domain) {
      case 'foundational':
        return { label: 'Foundational', bg: 'bg-blue-50 text-blue-700 border-blue-200/70' };
      case 'execution':
        return { label: 'Technical Execution', bg: 'bg-orange-50 text-orange-700 border-orange-200/70' };
      case 'collaborative':
        return { label: 'Collaborative Alignment', bg: 'bg-purple-50 text-purple-700 border-purple-200/70' };
      default:
        return { label: domain, bg: 'bg-slate-100 text-slate-700 border-slate-200' };
    }
  };

  return (
    <section id="evaluation-methods" className="px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto py-16 sm:py-24 border-t border-slate-200/60">
      {/* Section Header */}
      <div className="max-w-3xl mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-orange-600 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <Layers size={13} className="shrink-0" />
          <span>{canvas.eyebrow}</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.15] mb-4 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {canvas.headline}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-3">
          {canvas.supportingCopy}
        </p>
        <p className="text-xs sm:text-[13px] text-slate-400 italic">
          {canvas.subnote}
        </p>
      </div>

      {/* Domain Filter Bar */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveDomainFilter('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              activeDomainFilter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span>All 9 Methods</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${activeDomainFilter === 'all' ? 'bg-slate-700 text-slate-200' : 'bg-slate-100 text-slate-500'}`}>9</span>
          </button>
          {canvas.domains.map((d) => {
            const count = canvas.methods.filter((m) => m.domain === d.id).length;
            const isActive = activeDomainFilter === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setActiveDomainFilter(d.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>{d.title}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-orange-700 text-orange-100' : 'bg-slate-100 text-slate-500'}`}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Quick Demo Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedMethodIds([])}
            className="text-xs font-mono text-slate-500 hover:text-slate-800 flex items-center gap-1 py-1 px-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
            title="Clear all selected methods to start fresh"
          >
            <span>Clear Selection</span>
          </button>
          <button
            type="button"
            onClick={applyDefaultBackendPreset}
            className="text-xs font-mono text-slate-500 hover:text-slate-800 flex items-center gap-1.5 py-1 px-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
            title="Reset to the illustrative Backend Developer 3-round benchmark"
          >
            <RotateCcw size={12} />
            <span>Reset to Locked Backend Benchmark</span>
          </button>
        </div>
      </div>

      {/* 9 Methods Grid with Intentional Visual Differentiation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
        {filteredMethods.map((method: EvaluationMethod) => {
          const isSelected = selectedMethodIds.includes(method.id);
          const domainBadge = getDomainBadge(method.domain);

          return (
            <div
              key={method.id}
              onClick={() => toggleMethod(method.id)}
              className={`rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all cursor-pointer relative group ${
                isSelected
                  ? 'bg-white border-orange-500/80 ring-2 ring-orange-500/20 shadow-md'
                  : 'bg-white/85 border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              {/* Active selection accent line */}
              {isSelected && (
                <div className="absolute top-0 left-8 right-8 h-1 bg-orange-600 rounded-b-full" />
              )}

              <div>
                {/* Top Row: Round Number, Category & Selection Pill */}
                <div className="flex items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs text-slate-800 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
                      ROUND {method.number}
                    </span>
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border uppercase ${domainBadge.bg}`}>
                      {domainBadge.label}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMethod(method.id);
                    }}
                    className={`text-xs px-2.5 py-1 rounded-full font-mono font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                      isSelected
                        ? 'bg-orange-600 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check size={12} />
                        <span>Included</span>
                      </>
                    ) : (
                      <span>+ Select</span>
                    )}
                  </button>
                </div>

                {/* Method Title */}
                <h3
                  className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-orange-950 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {method.title}
                </h3>

                {/* Format & Duration Meta Tag */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                  <Clock size={13} className="text-slate-400 shrink-0" />
                  <span className="truncate">{method.format}</span>
                </div>

                {/* Capability Focus */}
                <div className="mb-4">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Target size={12} className="text-orange-600" />
                    <span>Capability Focus</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {method.capabilityFocus}
                  </p>
                </div>
              </div>

              {/* When Used Footer */}
              <div className="pt-3.5 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                <strong className="text-slate-700 font-medium">When Used: </strong>
                {method.whenUsed}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Capability-Coverage Console (Enterprise Product Feel) */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle ambient corner light */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Selection Context & Capability Synthesis */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={15} className="text-orange-400" />
              <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
                {canvas.demoBanner.label}
              </span>
            </div>

            <div className="flex items-baseline gap-3 flex-wrap">
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Configured Combination: {selectedMethods.length} of 9 Evaluation Methods
              </h4>
              <span className="text-xs font-mono text-slate-400">
                ({selectedMethods.length === 3 ? 'Matches Illustrative Locked Benchmark' : 'Custom Configured Mix'})
              </span>
            </div>

            {/* Selected Method Chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              {selectedMethods.map((m) => (
                <span
                  key={m.id}
                  onClick={() => toggleMethod(m.id)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 cursor-pointer hover:border-orange-500/60 hover:text-white transition-all"
                  title="Click to remove from selection"
                >
                  <span className="text-orange-400 font-bold">R{m.number}</span>
                  <span>{m.title}</span>
                  <span className="text-slate-500 hover:text-slate-300 ml-0.5">×</span>
                </span>
              ))}
              {selectedMethods.length === 0 && (
                <span className="text-xs text-slate-400 italic">No methods currently selected. Click any card above to add.</span>
              )}
            </div>

            {/* Capability Coverage Preview */}
            <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 mt-1">
              <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Combined Capability Coverage:
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedMethods.length > 0 ? (
                  selectedMethods.map((m) => m.capabilityFocus.replace(/\.$/, '')).join(' · ')
                ) : (
                  <span className="text-slate-400">
                    Select evaluation methods above to preview the combined capability coverage.
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Right Column: CTA & Enterprise Consultation */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
            <button
              type="button"
              onClick={onOpenModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-orange-600/30 hover:scale-[1.02]"
            >
              <span>{canvas.demoBanner.ctaText}</span>
              <ArrowRight size={15} />
            </button>
            <p className="text-[11px] text-slate-400 lg:text-right max-w-xs leading-normal">
              Each round is weighted and configured to your role rubrics.
            </p>
          </div>
        </div>

        {/* Disclaimer Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
          <span>
            Marketing demonstration view. All 9 rounds are configurable per client specification with dedicated rubrics and weighting.
          </span>
        </div>
      </div>
    </section>
  );
};
