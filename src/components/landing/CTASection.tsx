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
      className="relative w-full py-28 sm:py-36 overflow-hidden border-t"
      style={{
        backgroundColor: 'var(--ibot-bg-light)',
        borderColor: 'var(--ibot-border-light)',
      }}
    >
      {/* ── Subtle Background Glow ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full blur-[150px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #EA580C 0%, transparent 75%)',
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
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-black/5 bg-black/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
            <span
              className="text-[11px] tracking-widest uppercase font-bold text-[#0F172A]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Start With Complete Certainty
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-[var(--ibot-text-on-light)] font-normal mb-6 text-[32px] sm:text-[42px] lg:text-[50px] leading-[1.1] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The Goal Isn't More Applicants.{' '}
            <span className="italic text-[#0F172A] font-medium block mt-2">
              It's More People You Can Confidently Put to Work.
            </span>
          </h2>

          {/* Supporting Line */}
          <p
            className="text-[var(--ibot-text-muted-light)] text-[16px] sm:text-[18px] leading-[1.6] max-w-[48ch] mx-auto mb-9 font-normal"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Move from <span className="text-[#0F172A] font-medium">"They interviewed well"</span> to{' '}
            <span className="text-[#EA580C] font-medium">"We have seen how they perform."</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={onCTA}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium text-[16px] transition-colors shadow-lg"
            >
              <span>Request a Demo</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#evidence-trail"
              onClick={scrollToEvidenceTrail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-transparent border border-[#CBD5E1] text-[#0F172A] hover:bg-black/5 font-medium text-[16px] transition-colors"
            >
              <span>See the Evidence Trail</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className="pt-6 border-t flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[13px] text-[#64748B] font-medium"
            style={{ borderColor: 'var(--ibot-border-light)', fontFamily: 'var(--font-sans)' }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#10B981]" />
              <span>Zero ATS disruption</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#10B981]" />
              <span>Isolated repository sandboxes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#10B981]" />
              <span>Audit-ready capability dossiers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
