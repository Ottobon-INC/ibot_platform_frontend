import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlassTileWaveGrid } from './GlassTileWaveGrid';

interface HeroProps {
  onCTA: () => void;
}

export function Hero({ onCTA }: HeroProps) {
  function scrollToEvidenceTrail(e: React.MouseEvent) {
    e.preventDefault();
    const el = document.querySelector('#evidence-trail');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section
      className="relative min-h-[94vh] flex items-center justify-center overflow-hidden border-b"
      style={{ backgroundColor: 'var(--ibot-bg-dark)', borderColor: 'var(--ibot-border-dark)' }}
    >
      {/* ── Glass Tile Wave Grid Background Experiment ── */}
      <GlassTileWaveGrid />

      {/* ── Deep Atmospheric Radial Glow Centered ── */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] rounded-full blur-[160px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(67, 56, 202, 0.45) 0%, rgba(37, 99, 235, 0.18) 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* ── Content Container: Fully Centered Single-Column ── */}
      <div
        className="relative z-10 mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28"
        style={{ maxWidth: '1120px' }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2.5 mb-7 px-4 py-1.5 rounded-full border backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderColor: 'var(--ibot-border-dark)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#818CF8] animate-pulse" />
            <span
              className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#A1A1AA]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Capability Validation · Talent Readiness
            </span>
          </motion.div>

          {/* Requested Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-[#FAFAFA] font-normal mb-7 text-[42px] sm:text-[58px] lg:text-[70px] leading-[1.08] tracking-[-0.015em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Upgrade your talent pipeline within your{' '}
            <span
              className="italic bg-clip-text text-transparent font-normal"
              style={{
                backgroundImage: 'linear-gradient(135deg, #C7D2FE 0%, #A5B4FC 45%, #818CF8 100%)',
              }}
            >
              current hiring model.
            </span>
          </motion.h1>

          {/* Requested Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-[#A1A1AA] mb-8 text-[17px] sm:text-[19px] md:text-[20px] leading-[1.65] max-w-2xl font-normal"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            From candidate selection to project handover, Ottobon works alongside your talent acquisition and delivery teams to build capable, business-ready contributors—taking the preparation burden off your managers.
          </motion.p>

          {/* Requested Tagline / Value Proposition Reassurance Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="inline-flex items-center justify-center gap-2.5 mb-10 px-5 py-2.5 rounded-full border max-w-2xl backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(67, 56, 202, 0.09)',
              borderColor: 'rgba(129, 140, 248, 0.28)',
            }}
          >
            <Zap size={14} className="text-[#818CF8] shrink-0" />
            <span className="text-[13px] sm:text-[14px] text-[#C7D2FE] font-medium leading-relaxed">
              Change nothing in your workflow. Strengthen where it counts. Step in at any phase.
            </span>
          </motion.div>

          {/* Two Centered CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <button
              type="button"
              onClick={onCTA}
              className="btn-primary-glow"
            >
              <span>Request a Demo</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="#evidence-trail"
              onClick={scrollToEvidenceTrail}
              className="btn-secondary-ghost"
            >
              <span>See the Evidence Trail</span>
            </a>
          </motion.div>

          {/* Non-Disruptive Trust Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.36 }}
            className="flex flex-wrap items-center justify-center gap-6 text-[12px] text-[#71717A]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-[#10B981]" />
              <span>Zero workflow disruption</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-[#10B981]" />
              <span>Works alongside your existing ATS</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[#818CF8]" />
              <span>Practitioner-verified readiness</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
