import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ShiftSection() {
  const traditionalPoints = [
    {
      title: 'Resume & Verbal Recall',
      desc: 'Eloquent storytelling highlights memory, not day-one execution or architectural judgment.',
    },
    {
      title: 'Conversational Rapport',
      desc: 'Panels assess poise and presentation—leaving production skills unverified until post-hire.',
    },
    {
      title: 'Abstract Puzzles',
      desc: 'Whiteboard algorithms disconnected from real codebase dependencies and constraints.',
    },
  ];

  const ibotPoints = [
    {
      title: 'Real Repository Execution',
      desc: 'Hands-on delivery inside isolated environments mirrored on your actual stack.',
    },
    {
      title: 'Response to Senior Critique',
      desc: 'Constructive review on code PRs measures how quickly candidates adapt.',
    },
    {
      title: 'Pinpointed Capability Gaps',
      desc: 'Specific diagnosis of concurrency, test, and design gaps—not a binary guess.',
    },
    {
      title: 'Measurable Velocity',
      desc: 'Tangible commits tracking learning speed and problem-solving depth over time.',
    },
    {
      title: 'Audit-Ready Dossiers',
      desc: 'Objective evidence aligning recruiters, engineering leads, and business stakeholders.',
    },
  ];

  return (
    <section
      id="the-shift"
      className="relative w-full py-24 sm:py-32 border-b overflow-hidden"
      style={{
        backgroundColor: 'var(--ibot-bg-light)',
        borderColor: 'var(--ibot-border-light)',
      }}
    >
      {/* ── Subtle light ambient gradient ── */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[450px] rounded-full blur-[120px] opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(67, 56, 202, 0.08) 0%, rgba(37, 99, 235, 0.03) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16"
        style={{ maxWidth: '1240px' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14 lg:mb-16"
        >
          <p
            className="text-[11px] tracking-[0.18em] uppercase font-bold mb-3 text-[#4338CA]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            The Evaluation Gap
          </p>
          <h2
            className="text-[#09090B] font-normal mb-4 text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.12] tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            A Good Interview Is Only the Beginning.
          </h2>
          <p
            className="text-[#4B5563] text-[16px] sm:text-[17px] leading-[1.6] max-w-[54ch]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Traditional hiring loops measure how eloquently someone describes past work. IBOT reveals how they actually build, troubleshoot, and adapt when handed real engineering requirements.
          </p>
        </motion.div>

        {/* ── Asymmetrical Editorial Comparison Spread ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: What Traditional Hiring Reveals (40%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-sm"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
              borderColor: 'var(--ibot-border-light)',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#71717A]" />
              <h3
                className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[#71717A]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                What Traditional Hiring Reveals
              </h3>
            </div>

            <div className="space-y-5">
              {traditionalPoints.map((item, idx) => (
                <div key={idx} className="border-b pb-4 last:border-b-0 last:pb-0" style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}>
                  <div className="flex items-start gap-2.5">
                    <XCircle size={15} className="text-[#9CA3AF] shrink-0 mt-0.5" />
                    <div>
                      <h4
                        className="text-[16px] font-normal text-[#1F2937] mb-0.5"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-[13px] text-[#6B7280] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t text-[12px] text-[#6B7280] italic" style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}>
              "Interviews measure recall and presentation under ideal assumptions."
            </div>
          </motion.div>

          {/* Right Column: What IBOT Adds (60%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 p-7 sm:p-9 rounded-2xl border transition-all duration-300 hover:shadow-md"
            style={{
              backgroundColor: 'var(--ibot-bg-light-card)',
              borderColor: 'rgba(67, 56, 202, 0.2)',
              boxShadow: '0 8px 30px -8px rgba(67, 56, 202, 0.08), 0 2px 8px rgba(0, 0, 0, 0.03)',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <h3
                className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[#4338CA]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                What IBOT Adds to Your Process
              </h3>
            </div>

            <div className="space-y-4">
              {ibotPoints.map((item, idx) => (
                <div key={idx} className="border-b pb-4 last:border-b-0 last:pb-0" style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                    <div>
                      <h4
                        className="text-[17px] font-normal text-[#09090B] mb-0.5"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-[13px] text-[#4B5563] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t flex items-center justify-between text-[13px]" style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}>
              <span className="font-medium text-[#09090B]">
                Objective conviction replaces speculative hiring.
              </span>
              <span className="text-[#4338CA] font-medium text-[12px]" style={{ fontFamily: 'var(--font-mono)' }}>
                Evidence-Driven
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
