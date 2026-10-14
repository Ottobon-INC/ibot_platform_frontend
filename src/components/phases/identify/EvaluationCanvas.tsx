import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Layers, Clock, ArrowRight, RotateCcw, Terminal, Users, Brain, SlidersHorizontal, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { IDENTIFY_CONTENT, EvaluationMethod } from '../../../content/identifyContent';
import { transitions, buttonHoverProps, MOTION_EASINGS } from './motionTokens';

interface EvaluationCanvasProps {
  onOpenModal: () => void;
}

export const EvaluationCanvas: React.FC<EvaluationCanvasProps> = ({ onOpenModal }) => {
  const { canvas } = IDENTIFY_CONTENT;
  const shouldReduceMotion = useReducedMotion();
  
  // Interactive Blueprint: Default to locked Backend Developer benchmark (04, 06, 07, 08)
  const [selectedMethodIds, setSelectedMethodIds] = useState<string[]>(['mcq', 'coding', 'aipair', 'hr']);
  const [activeTabDomain, setActiveTabDomain] = useState<'all' | 'execution' | 'foundational' | 'collaborative'>('all');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const toggleMethod = (id: string, e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.stopPropagation();
    setSelectedMethodIds((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const toggleExpand = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  const setBackendBenchmarkPreset = () => {
    setSelectedMethodIds(['mcq', 'coding', 'aipair', 'hr']);
    setActiveTabDomain('all');
  };

  const setComprehensivePreset = () => {
    setSelectedMethodIds(canvas.methods.map(m => m.id));
    setActiveTabDomain('all');
  };

  const isBackendPreset = selectedMethodIds.length === 4 && ['mcq', 'coding', 'aipair', 'hr'].every(id => selectedMethodIds.includes(id));
  const isAllPreset = selectedMethodIds.length === 9;

  const selectedMethods = canvas.methods.filter((m) => selectedMethodIds.includes(m.id));

  const foundationalMethods = canvas.methods.filter(m => m.domain === 'foundational');
  const executionMethods = canvas.methods.filter(m => m.domain === 'execution');
  const collaborativeMethods = canvas.methods.filter(m => m.domain === 'collaborative');

  const renderMethodCard = (m: EvaluationMethod, domainColor: 'indigo' | 'blue' | 'purple') => {
    const isSelected = selectedMethodIds.includes(m.id);
    const isExpanded = expandedCardId === m.id;

    const domainBorderClass =
      domainColor === 'indigo'
        ? isSelected ? 'border-indigo-500 shadow-md ring-2 ring-indigo-500/15' : 'border-slate-200/90 hover:border-slate-300'
        : domainColor === 'blue'
        ? isSelected ? 'border-blue-500 shadow-md ring-2 ring-blue-500/15' : 'border-slate-200/90 hover:border-slate-300'
        : isSelected ? 'border-purple-500 shadow-md ring-2 ring-purple-500/15' : 'border-slate-200/90 hover:border-slate-300';

    const domainBadgeClass =
      domainColor === 'indigo'
        ? 'bg-indigo-50 text-indigo-700 border-indigo-200/80'
        : domainColor === 'blue'
        ? 'bg-blue-50 text-blue-700 border-blue-200/80'
        : 'bg-purple-50 text-purple-700 border-purple-200/80';

    const selectedBtnClass =
      domainColor === 'indigo'
        ? isSelected ? 'bg-indigo-600 text-white shadow-2xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        : domainColor === 'blue'
        ? isSelected ? 'bg-blue-600 text-white shadow-2xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        : isSelected ? 'bg-purple-600 text-white shadow-2xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200';

    return (
      <motion.div
        key={m.id}
        onClick={() => toggleMethod(m.id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMethod(m.id);
          }
        }}
        role="checkbox"
        aria-checked={isSelected}
        tabIndex={0}
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        transition={transitions.hover}
        className={`rounded-2xl p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between relative bg-white focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${domainBorderClass}`}
      >
        <div>
          {/* Card Top Meta Strip */}
          <div className="flex items-center justify-between mb-3">
            <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${domainBadgeClass}`}>
              ROUND {m.number}
            </span>
            <button
              type="button"
              onClick={(e) => toggleMethod(m.id, e)}
              className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full transition-all duration-150 cursor-pointer ${selectedBtnClass}`}
            >
              {isSelected ? '✓ In Blueprint' : '+ Add'}
            </button>
          </div>

          {/* Title */}
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
            {m.title}
          </h4>

          {/* Format Badge */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-2.5 font-mono">
            <Clock size={11} className="text-slate-400 shrink-0" />
            <span>{m.format}</span>
          </div>

          {/* Short Capability Label (Concise 1 line) */}
          <div className="text-xs text-slate-600 leading-relaxed font-normal mb-2 bg-slate-50/80 p-2 rounded-lg border border-slate-100">
            <strong className="text-slate-700 font-medium">Capability: </strong>
            <span>{m.capabilityFocus}</span>
          </div>
        </div>

        {/* Expandable Supporting Details Toggle */}
        <div className="pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={(e) => toggleExpand(m.id, e)}
            className="w-full flex items-center justify-between text-[11px] font-mono text-slate-500 hover:text-slate-800 transition-colors py-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
          >
            <span>{isExpanded ? 'Hide Details' : 'View Use Cases & Rubric'}</span>
            {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden pt-2 text-[11px] text-slate-600 space-y-1.5 border-t border-slate-100 mt-1"
              >
                <div>
                  <strong className="text-slate-800 font-mono">When Used: </strong>
                  <span>{m.whenUsed}</span>
                </div>
                <div className="text-[10px] text-indigo-600 font-mono">
                  {m.domain === 'execution' && 'Outputs: Executed code diffs, containerized unit test results, and runtime telemetry.'}
                  {m.domain === 'foundational' && 'Outputs: Objective accuracy score, response latency, and inductive reasoning profile.'}
                  {m.domain === 'collaborative' && 'Outputs: Peer interaction rubric scores, structured HR gate clearance, and joining readiness.'}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="evaluation-methods" className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto py-20 sm:py-28 border-t border-slate-200/70">
      
      {/* ── Section Header with Scroll Reveal ── */}
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45, ease: MOTION_EASINGS.easeOut }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
            <Layers size={13} className="text-indigo-600 shrink-0" />
            <span>{canvas.eyebrow}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 leading-[1.14] mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {canvas.headline}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {canvas.supportingCopy}
          </p>
        </div>

        {/* Quick Presets & Control Pills */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <motion.button
            type="button"
            onClick={setBackendBenchmarkPreset}
            whileHover={shouldReduceMotion ? undefined : { y: -1 }}
            whileTap={shouldReduceMotion ? undefined : { y: 0 }}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium border shadow-2xs flex items-center gap-1.5 transition-all duration-150 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
              isBackendPreset
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            <RotateCcw size={12} className={isBackendPreset ? 'text-indigo-400' : 'text-indigo-600'} />
            <span>Locked Backend Benchmark (4)</span>
          </motion.button>
          <motion.button
            type="button"
            onClick={setComprehensivePreset}
            whileHover={shouldReduceMotion ? undefined : { y: -1 }}
            whileTap={shouldReduceMotion ? undefined : { y: 0 }}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium border shadow-2xs transition-all duration-150 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
              isAllPreset
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            Select All 9 (9)
          </motion.button>
          <button
            type="button"
            onClick={() => setSelectedMethodIds([])}
            className="px-3 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-slate-600 transition-colors duration-150 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
          >
            Clear
          </button>
        </div>
      </motion.div>

      {/* ── Active Evaluation Blueprint HUD Bar (Visually Prominent) ── */}
      <motion.div 
        layout
        className="p-5 sm:p-6 rounded-3xl bg-slate-900 text-white mb-8 border border-slate-800 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2.5 mb-2 flex-wrap">
            <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400 shrink-0">
              <SlidersHorizontal size={15} />
            </div>
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Active Evaluation Blueprint
            </span>
            <span className="text-xs font-mono font-bold text-indigo-300 bg-indigo-950 px-2.5 py-0.5 rounded-full border border-indigo-800">
              {selectedMethods.length} of 9 Methods Selected
            </span>
            {isBackendPreset && (
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                ★ Locked 80.5% Backend Spec
              </span>
            )}
          </div>

          {/* Active Blueprint Method Chips */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <AnimatePresence>
              {selectedMethods.map((m) => (
                <motion.span
                  key={m.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => toggleMethod(m.id)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 hover:border-slate-500 cursor-pointer transition-colors"
                  title="Click to remove from blueprint"
                >
                  <span className="text-indigo-400 font-bold">R{m.number}</span>
                  <span>{m.title.split(' ')[0]} {m.title.split(' ')[1] || ''}</span>
                  <span className="text-slate-400 hover:text-white text-[10px]">×</span>
                </motion.span>
              ))}
            </AnimatePresence>
            {selectedMethods.length === 0 && (
              <span className="text-xs text-slate-400 italic">No methods selected. Click below to add rounds.</span>
            )}
          </div>
        </div>

        {/* 3 Domain Gauges & Request Setup Action */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap font-mono text-xs shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800">
          <div>
            <div className="flex justify-between text-[10px] text-slate-400 mb-1 gap-2">
              <span className="text-indigo-300 font-medium">Execution</span>
              <span>{selectedMethods.filter(m => m.domain === 'execution').length}/3</span>
            </div>
            <div className="w-24 h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <motion.div 
                animate={{ width: `${(selectedMethods.filter(m => m.domain === 'execution').length / 3) * 100}%` }}
                transition={transitions.coverageBar}
                className="h-full rounded-full bg-indigo-500"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] text-slate-400 mb-1 gap-2">
              <span className="text-blue-300 font-medium">Foundational</span>
              <span>{selectedMethods.filter(m => m.domain === 'foundational').length}/3</span>
            </div>
            <div className="w-24 h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <motion.div 
                animate={{ width: `${(selectedMethods.filter(m => m.domain === 'foundational').length / 3) * 100}%` }}
                transition={transitions.coverageBar}
                className="h-full rounded-full bg-blue-500"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] text-slate-400 mb-1 gap-2">
              <span className="text-purple-300 font-medium">Culture / Gate</span>
              <span>{selectedMethods.filter(m => m.domain === 'collaborative').length}/3</span>
            </div>
            <div className="w-24 h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <motion.div 
                animate={{ width: `${(selectedMethods.filter(m => m.domain === 'collaborative').length / 3) * 100}%` }}
                transition={transitions.coverageBar}
                className="h-full rounded-full bg-purple-500"
              />
            </div>
          </div>

          <motion.button
            type="button"
            onClick={onOpenModal}
            {...buttonHoverProps}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center gap-1.5 cursor-pointer shadow-md focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
          >
            <span>Consultation</span>
            <ArrowRight size={12} />
          </motion.button>
        </div>
      </motion.div>

      {/* ── Domain Filter Ribbon ── */}
      <div className="flex items-center gap-2 pb-5 mb-8 overflow-x-auto scrollbar-none border-b border-slate-200/60">
        <button
          type="button"
          onClick={() => setActiveTabDomain('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 whitespace-nowrap cursor-pointer flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
            activeTabDomain === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span>All 9 Methods</span>
          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${activeTabDomain === 'all' ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-500'}`}>
            {selectedMethods.length}/9
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTabDomain('execution')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 whitespace-nowrap cursor-pointer flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
            activeTabDomain === 'execution'
              ? 'bg-[#4F46E5] text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Terminal size={14} />
          <span>Technical Execution</span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-indigo-900/20 text-current">3</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTabDomain('foundational')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 whitespace-nowrap cursor-pointer flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
            activeTabDomain === 'foundational'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Brain size={14} />
          <span>Foundational Capabilities</span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-blue-900/20 text-current">3</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTabDomain('collaborative')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 whitespace-nowrap cursor-pointer flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
            activeTabDomain === 'collaborative'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Users size={14} />
          <span>Collaborative & Culture</span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-purple-900/20 text-current">3</span>
        </button>
      </div>

      {/* ── Multi-Tier Blueprint Matrix ── */}
      <div className="space-y-10">
        
        {/* DOMAIN 1: Technical Execution & Craftsmanship */}
        {(activeTabDomain === 'all' || activeTabDomain === 'execution') && (
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <div className="w-5 h-5 rounded-md bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                <Terminal size={12} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
                Technical Execution & Craftsmanship
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {executionMethods.map((m) => renderMethodCard(m, 'indigo'))}
            </div>
          </div>
        )}

        {/* DOMAIN 2: Foundational Capabilities */}
        {(activeTabDomain === 'all' || activeTabDomain === 'foundational') && (
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Brain size={12} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
                Foundational Capabilities
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {foundationalMethods.map((m) => renderMethodCard(m, 'blue'))}
            </div>
          </div>
        )}

        {/* DOMAIN 3: Collaborative & Cultural Alignment */}
        {(activeTabDomain === 'all' || activeTabDomain === 'collaborative') && (
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <div className="w-5 h-5 rounded-md bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                <Users size={12} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
                Collaborative & Cultural Alignment
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {collaborativeMethods.map((m) => renderMethodCard(m, 'purple'))}
            </div>
          </div>
        )}

      </div>

    </section>
  );
};
