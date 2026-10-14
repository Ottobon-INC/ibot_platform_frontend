import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, Calendar, Sparkles } from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';
import { transitions, buttonHoverProps, MOTION_EASINGS } from './motionTokens';

interface IdentifyCtaSectionProps {
  onOpenModal: () => void;
}

export const IdentifyCtaSection: React.FC<IdentifyCtaSectionProps> = ({ onOpenModal }) => {
  const { cta } = IDENTIFY_CONTENT;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto py-20 sm:py-28">
      
      {/* ── High-Impact Obsidian Architectural Finale Card with Scroll Reveal ── */}
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: MOTION_EASINGS.easeOut }}
        className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-indigo-400 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={12} className="text-indigo-400 shrink-0" />
            <span>CONFIDENT SHORTLISTING DECISIONS</span>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12] mb-5 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {cta.headline}
          </h2>

          {/* Supporting Copy */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
            {cta.supportingCopy}
          </p>

          {/* Action Button Row with Micro Hover States */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 w-full sm:w-auto">
            <motion.button
              type="button"
              onClick={onOpenModal}
              {...buttonHoverProps}
              className="group px-8 py-4 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium text-[15px] flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-indigo-600/30 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              <Calendar size={16} />
              <span>{cta.ctaPrimary}</span>
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              transition={transitions.hover}
            >
              <Link
                to="/#how-it-works"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-[15px] border border-slate-700 flex items-center justify-center gap-2 transition-colors duration-150 text-center focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
              >
                <span>{cta.ctaSecondary}</span>
              </Link>
            </motion.div>
          </div>

          {/* Strategic Anchors Proof Ribbon */}
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

      </motion.div>

      {/* ── Optional Next Lifecycle Transition: Phase 02 Build ── */}
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: 0.1, ease: MOTION_EASINGS.easeOut }}
        className="mt-8 rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-2xs hover:shadow-xs transition-shadow duration-200"
      >
        <div className="max-w-xl">
          <span className="font-mono text-[11px] text-slate-400 font-bold uppercase tracking-wider block mb-1">
            {cta.nextPhase.tag} · OPTIONAL CONTINUOUS NURTURING
          </span>
          <h4
            className="text-lg sm:text-xl font-bold text-slate-900 mb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {cta.nextPhase.title}
          </h4>
          <p className="text-xs text-slate-500 font-normal">
            If your talent strategy requires incoming hires to run guided project sprints before day one, explore the sandbox build phase.
          </p>
        </div>
        
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { scale: 1.015, y: -1 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
          transition={transitions.hover}
        >
          <Link
            to={cta.nextPhase.href}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors duration-150 shrink-0 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
          >
            <span>{cta.nextPhase.linkText}</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
};
