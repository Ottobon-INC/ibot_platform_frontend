import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProofSectionProps {
  onCTA: () => void;
}

const OUTCOMES = [
  {
    num: '01',
    title: 'Reduced Screening Uncertainty',
    desc: 'Replace resume claims and rehearsed interviews with observable pull requests, automated test assertions, and peer review data.',
  },
  {
    num: '02',
    title: 'Better Visibility into Capability',
    desc: 'Evaluate how contributors actually reason through system architecture, edge cases, and latency trade-offs before commitments are signed.',
  },
  {
    num: '03',
    title: 'More Focused Development',
    desc: 'Connect learning and upskilling activities directly to role-specific requirements, measuring concrete progress through working revisions.',
  },
  {
    num: '04',
    title: 'Better-Informed Decisions',
    desc: 'Ensure contributors arrive having already navigated your repository conventions, eliminating month-one ramp-up drag.',
  },
  {
    num: '05',
    title: 'Lower Headcount Risk',
    desc: 'Access surge specialists or evaluate contributors through contract-to-hire periods before committing to permanent payroll overhead.',
  },
];

const ENGAGEMENT_MODES = [
  {
    mode: 'Direct Hire',
    desc: 'Permanent core expansion with day-one repository velocity and zero onboarding lag.',
  },
  {
    mode: 'Contract Specialist',
    desc: 'Calibrated surge capacity for time-critical project delivery without long-term commitments.',
  },
  {
    mode: 'Contract-to-Hire',
    desc: 'Low-risk 90-day evaluation period in live production work before extending an offer.',
  },
  {
    mode: 'Internal Deployment',
    desc: 'Re-align and mobility-validate internal team members transitioning into new roles.',
  },
  {
    mode: 'Client Deployment',
    desc: 'Turnkey pre-qualified pods and specialists ready for immediate enterprise client delivery.',
  },
];

export function ProofSection({ onCTA }: ProofSectionProps) {
  return (
    <section
      id="outcomes"
      className="relative w-full py-24 sm:py-32 border-b overflow-hidden"
      style={{
        backgroundColor: 'var(--ibot-bg-light)',
        borderColor: 'var(--ibot-border-light)',
      }}
    >
      <div
        className="mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16"
        style={{ maxWidth: '1240px' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <p
            className="text-[11px] tracking-[0.18em] uppercase font-bold mb-3 text-[#4338CA]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Commercial Value &amp; Outcomes
          </p>
          <h2
            className="text-[#09090B] font-normal mb-4 text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.12] tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Commercial Flexibility Backed by Verified Capability.
          </h2>
          <p
            className="text-[#4B5563] text-[16px] sm:text-[17px] leading-[1.6] max-w-[54ch]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Once capability is demonstrated in the sandbox, organizations unlock multiple engagement routes to put talent to work with complete confidence.
          </p>
        </motion.div>

        {/* ── 5 Flexible Engagement Pathways ── */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-5 pb-3 border-b" style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4338CA] font-mono">
              Flexible Engagement Options
            </span>
            <span className="text-[11px] text-[#6B7280]">
              Hire · Contract · Contract-to-Hire · Internal · Client
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {ENGAGEMENT_MODES.map((em, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-4 sm:p-5 rounded-xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--ibot-bg-light-card)',
                  borderColor: 'var(--ibot-border-light)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                }}
              >
                <div>
                  <div className="text-[11px] font-mono font-semibold text-[#4338CA] mb-1.5">0{idx + 1}</div>
                  <h4 className="text-[16px] font-normal text-[#09090B] mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
                    {em.mode}
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-[#4B5563] leading-relaxed">
                    {em.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 5 Core Business Outcomes ── */}
        <div>
          <div className="mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4338CA] font-mono">
              Predictable Business Outcomes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OUTCOMES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:shadow-md"
                style={{
                  backgroundColor: 'var(--ibot-bg-light-card)',
                  borderColor: 'var(--ibot-border-light)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
                }}
              >
                <div>
                  <span className="text-[11px] font-mono font-semibold text-[#9CA3AF] block mb-2">
                    {item.num}
                  </span>
                  <h3
                    className="text-[18px] font-normal text-[#09090B] mb-2 leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t flex items-center justify-between text-[11px] text-[#6B7280]" style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}>
                  <span>Verified Operational Metric</span>
                  <CheckCircle2 size={13} className="text-[#10B981]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
