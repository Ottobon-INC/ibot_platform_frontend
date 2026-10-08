import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AUDIENCES = [
  {
    role: 'Hiring & Talent Leaders',
    subtitle: 'VPs of Talent, Recruiting Directors & Heads of People',
    coreNeed: 'Signal before the offer.',
    dilemma: 'Eloquent interview answers generate volume but little reliable signal. Panels debate subjectively, protracting hiring cycles and risking bad hires.',
    solution: 'Delivers concrete, reproducible evidence of how candidates actually build and adapt. Offers are extended with shared consensus.',
    benefitTag: 'Confidence in Selection',
  },
  {
    role: 'Engineering & Delivery Leaders',
    subtitle: 'CTOs, VPs of Engineering & Delivery Principals',
    coreNeed: 'Readiness before production access.',
    dilemma: 'Senior staff lose 15+ hours weekly on screens, only to find new hires take months to navigate real codebase complexity.',
    solution: 'Candidates complete sandbox tasks mirrored on your conventions. Inspect pull requests, test assertions, and coachability before day one.',
    benefitTag: 'Protected Bandwidth',
  },
  {
    role: 'Learning & Capability Leaders',
    subtitle: 'CLOs & Workforce Development Directors',
    coreNeed: 'Direct connection to role demands.',
    dilemma: 'Traditional training programs rely on completion certificates rather than verified code execution, leaving actual capability unmeasured.',
    solution: 'Benchmarks capability gaps and tracks measurable code iteration across realistic milestones, ensuring targeted operational readiness.',
    benefitTag: 'Measurable Skill Transfer',
  },
  {
    role: 'Staffing & Workforce Partners',
    subtitle: 'Agency Founders, MDs & MSP Partners',
    coreNeed: 'Pre-validated talent placements.',
    dilemma: 'Enterprise clients hesitate or raise warranty disputes when submitted contractors take weeks to adapt to client-specific architectures.',
    solution: 'Deliver pre-tested contributors backed by audited sandbox execution records on the client’s exact stack, ensuring instant acceptance.',
    benefitTag: 'Zero-Dispute Placements',
  },
];

export function IntegrationSection() {
  return (
    <section
      id="who-its-for"
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
            Who It Is For
          </p>
          <h2
            className="text-[#09090B] font-normal mb-4 text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.12] tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Solving Real Operational Risks for Enterprise Leaders.
          </h2>
          <p
            className="text-[#4B5563] text-[16px] sm:text-[17px] leading-[1.6] max-w-[54ch]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Different leaders face different bottlenecks in workforce planning. IBOT provides the specific evidence needed to remove uncertainty at every leadership level.
          </p>
        </motion.div>

        {/* ── Editorial Business Storytelling Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {AUDIENCES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              style={{
                backgroundColor: 'var(--ibot-bg-light-card)',
                borderColor: 'var(--ibot-border-light)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[11px] font-semibold tracking-wider uppercase text-[#4338CA]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {item.benefitTag}
                  </span>
                  <span className="text-[11px] text-[#9CA3AF] font-mono">
                    0{idx + 1}
                  </span>
                </div>

                <h3
                  className="text-[22px] font-normal text-[#09090B] mb-0.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.role}
                </h3>
                <p className="text-[12px] text-[#6B7280] font-medium mb-5">
                  {item.subtitle}
                </p>

                <div className="mb-4 p-3.5 rounded-xl border" style={{ backgroundColor: 'var(--ibot-bg-light-subtle)', borderColor: 'rgba(0, 0, 0, 0.05)' }}>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#4B5563] mb-1 font-mono">
                    The Primary Operational Dilemma
                  </div>
                  <p className="text-[13px] text-[#4B5563] leading-relaxed">
                    {item.dilemma}
                  </p>
                </div>

                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#4338CA] mb-1 font-mono">
                    The IBOT Resolution
                  </div>
                  <p className="text-[13px] text-[#1F2937] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t flex items-center justify-between text-[12px] text-[#6B7280]" style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}>
                <span className="font-medium text-[#09090B]">{item.coreNeed}</span>
                <CheckCircle2 size={15} className="text-[#10B981]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
