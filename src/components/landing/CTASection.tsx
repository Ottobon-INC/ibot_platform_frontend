import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  onCTA: () => void;
}

export function CTASection({ onCTA }: CTASectionProps) {
  function scrollToEvidenceTrail(e: React.MouseEvent) {
    e.preventDefault();
    const el = document.querySelector('#evidence-trail');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section
      className="relative w-full py-28 sm:py-36 text-white overflow-hidden border-t"
      style={{
        backgroundColor: 'var(--ibot-bg-dark)',
        borderColor: 'var(--ibot-border-dark)',
      }}
    >
      {/* ── Deep Sapphire Radial Glow ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full blur-[170px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(67, 56, 202, 0.45) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 text-center"
        style={{ maxWidth: '960px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border backdrop-blur-md"
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
              Start With Complete Certainty
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-[#FAFAFA] font-normal mb-6 text-[32px] sm:text-[42px] lg:text-[50px] leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The Goal Isn't More Applicants.{' '}
            <span
              className="italic bg-clip-text text-transparent font-normal"
              style={{
                backgroundImage: 'linear-gradient(135deg, #C7D2FE 0%, #A5B4FC 45%, #818CF8 100%)',
              }}
            >
              It's More People You Can Confidently Put to Work.
            </span>
          </h2>

          {/* Supporting Line */}
          <p
            className="text-[#A1A1AA] text-[16px] sm:text-[18px] leading-[1.6] max-w-[48ch] mx-auto mb-9 font-normal"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Move from <span className="text-[#FAFAFA] font-medium">"They interviewed well"</span> to{' '}
            <span className="text-[#818CF8] font-medium">"We have seen how they perform."</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={onCTA}
              className="btn-primary-glow"
              style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}
            >
              <span>Request a Demo</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="#evidence-trail"
              onClick={scrollToEvidenceTrail}
              className="btn-secondary-ghost"
              style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
            >
              <span>See the Evidence Trail</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className="pt-6 border-t flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[12px] text-[#71717A]"
            style={{ borderColor: 'var(--ibot-border-dark)', fontFamily: 'var(--font-sans)' }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-[#10B981]" />
              <span>Zero ATS disruption</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-[#10B981]" />
              <span>Isolated repository sandboxes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-[#10B981]" />
              <span>Audit-ready capability dossiers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
