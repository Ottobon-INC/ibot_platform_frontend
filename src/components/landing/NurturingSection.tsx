import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

interface StageGroup {
  id: string;
  num: string;
  label: string;
  title: string;
  stepsIncluded: string;
  summary: string;
  artifact: {
    type: string;
    headline: string;
    meta: string;
    details: { label: string; value: string }[];
    reviewerNote: string;
    verdict: string;
  };
}

const STAGE_GROUPS: StageGroup[] = [
  {
    id: 'calibration',
    num: '01',
    label: 'Calibration & Framing',
    title: 'Requirement & Baseline Assessment',
    stepsIncluded: 'Requirement → Assessment',
    summary: 'Translates production standards and latency targets into concrete problem statements, establishing a clear diagnostic baseline before execution.',
    artifact: {
      type: 'Diagnostic Architecture Charter',
      headline: 'Event-Driven Pipeline Boundary Specification',
      meta: 'Calibrated to production conventions · Stage 01 of 04',
      details: [
        { label: 'Role Alignment', value: 'Distributed Systems & Data Infra' },
        { label: 'Evaluation Scope', value: 'State isolation, fault tolerance, idempotency' },
        { label: 'Diagnostic Signal', value: 'Clear conceptual decomposition' },
      ],
      reviewerNote: 'Proposals showed strong understanding of failure domains before touching the environment.',
      verdict: 'Baseline Validated · Cleared for Sandbox Implementation',
    },
  },
  {
    id: 'execution',
    num: '02',
    label: 'Practical Execution',
    title: 'Capability Gaps & Sandbox Delivery',
    stepsIncluded: 'Capability Gap → Practical Work',
    summary: 'Pinpoints specific capability boundaries, then evaluates modular build quality and test suites inside an isolated repository environment.',
    artifact: {
      type: 'Pull Request & Test Run Ledger',
      headline: 'PR #204: Partition Ingestion Engine Implementation',
      meta: 'Isolated Sandbox Environment · Stage 02 of 04',
      details: [
        { label: 'Test Coverage', value: '42 / 42 automated assertions passing (100% concurrency)' },
        { label: 'Commit Craft', value: 'Clean atomic commits with structured documentation' },
        { label: 'Code Quality', value: 'Strict typing adhered to; zero unhandled rejections' },
      ],
      reviewerNote: 'Candidate handled ambiguous edge cases autonomously without requiring hand-holding.',
      verdict: 'Execution Verified · Ready for Senior Practitioner Review',
    },
  },
  {
    id: 'review',
    num: '03',
    label: 'Feedback & Adaptation',
    title: 'Practitioner Critique & Improvement',
    stepsIncluded: 'Feedback → Improvement',
    summary: 'Senior engineers conduct line-by-line review. IBOT measures how rapidly and thoughtfully the candidate incorporates technical critique.',
    artifact: {
      type: 'Peer Review & Revision Ledger',
      headline: 'PR Revision Diffs: Lock Contention Resolution',
      meta: 'Reviewed by Staff Architect · Stage 03 of 04',
      details: [
        { label: 'Critique Addressed', value: 'High contention on partition locks' },
        { label: 'Refactored Solution', value: 'Bucketed TTL keys with optimistic retries' },
        { label: 'Iteration Velocity', value: 'Refactored and tested within 4h' },
      ],
      reviewerNote: '"Understood the operational concern immediately and delivered an elegant refactor."',
      verdict: 'High Adaptability Confirmed · Ready for Capability Synthesis',
    },
  },
  {
    id: 'decision',
    num: '04',
    label: 'Readiness & Decision',
    title: 'Performance Synthesis & Deployment',
    stepsIncluded: 'Performance → Readiness → Decision',
    summary: 'Consolidates all execution data, reviewer feedback, and iteration logs into an audit-ready executive dossier for leadership.',
    artifact: {
      type: 'Talent Readiness Executive Dossier',
      headline: 'Candidate Readiness Assessment: Ready for Production',
      meta: 'Executive Sign-Off · Stage 04 of 04',
      details: [
        { label: 'Technical Execution', value: 'Demonstrated senior-level delivery' },
        { label: 'Learning Velocity', value: 'Rapid coachability and exceptional critique response' },
        { label: 'Ramp-Up Lag', value: 'Near-zero; familiar with core architecture' },
      ],
      reviewerNote: 'All stakeholders have verifiable evidence. Zero speculative panel hesitation.',
      verdict: 'Approved for Offer / Immediate Production Deployment',
    },
  },
];

const ALL_NINE_STEPS = [
  'Requirement',
  'Assessment',
  'Capability Gap',
  'Practical Work',
  'Feedback',
  'Improvement',
  'Performance',
  'Readiness',
  'Decision',
];

export function NurturingSection() {
  const [activeStageId, setActiveStageId] = useState('execution');
  const activeGroup = STAGE_GROUPS.find((g) => g.id === activeStageId)!;

  return (
    <section
      id="evidence-trail"
      className="relative w-full py-24 sm:py-32 border-b text-white overflow-hidden"
      style={{
        backgroundColor: 'var(--ibot-bg-dark)',
        borderColor: 'var(--ibot-border-dark)',
      }}
    >
      {/* ── Deep Sapphire Ambient Atmosphere ── */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full blur-[160px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(67, 56, 202, 0.35) 0%, rgba(37, 99, 235, 0.1) 50%, transparent 75%)',
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
          className="max-w-2xl mb-12 lg:mb-14"
        >
          <p
            className="text-[11px] tracking-[0.18em] uppercase font-bold mb-3 text-[#818CF8]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            The Signature Experience
          </p>
          <h2
            className="text-[#FAFAFA] font-normal mb-4 text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.12] tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Every Candidate Builds an Evidence Trail.
          </h2>
          <p
            className="text-[#A1A1AA] text-[16px] sm:text-[17px] leading-[1.6] max-w-[54ch]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            A continuous progression from initial calibration to hands-on execution, peer review, and verified readiness. See how practical performance becomes decision-supporting evidence.
          </p>
        </motion.div>

        {/* ── 9-Step Full Sequence Visual Tracker (Desktop & Tablet) ── */}
        <div
          className="hidden md:flex items-center justify-between mb-10 pb-5 border-b overflow-x-auto gap-2"
          style={{ borderColor: 'var(--ibot-border-dark)' }}
        >
          {ALL_NINE_STEPS.map((step, idx) => {
            const isHighlighted =
              (activeStageId === 'calibration' && idx <= 1) ||
              (activeStageId === 'execution' && idx >= 2 && idx <= 3) ||
              (activeStageId === 'review' && idx >= 4 && idx <= 5) ||
              (activeStageId === 'decision' && idx >= 6);

            return (
              <div key={idx} className="flex items-center gap-2 shrink-0">
                <div
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-200 border"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: isHighlighted ? 'rgba(67, 56, 202, 0.25)' : 'rgba(255, 255, 255, 0.02)',
                    borderColor: isHighlighted ? 'var(--ibot-accent-bright)' : 'var(--ibot-border-dark)',
                    color: isHighlighted ? '#FAFAFA' : '#71717A',
                  }}
                >
                  <span className="text-[10px] opacity-70">0{idx + 1}</span>
                  <span>{step}</span>
                </div>
                {idx < ALL_NINE_STEPS.length - 1 && (
                  <ChevronRight size={13} className="text-[#3F3F46]" />
                )}
              </div>
            );
          })}
        </div>

        {/* ── 4 Milestone Chapter Selector ── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10"
        >
          {STAGE_GROUPS.map((group) => {
            const isActive = group.id === activeStageId;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveStageId(group.id)}
                className="text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: isActive ? 'rgba(67, 56, 202, 0.16)' : 'rgba(255, 255, 255, 0.02)',
                  borderColor: isActive ? 'var(--ibot-accent-bright)' : 'var(--ibot-border-dark)',
                  boxShadow: isActive ? '0 4px 20px rgba(67, 56, 202, 0.2)' : 'none',
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className="text-[11px] font-semibold"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: isActive ? '#818CF8' : '#71717A',
                    }}
                  >
                    Phase {group.num}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8] animate-pulse" />
                  )}
                </div>
                <div
                  className="text-[15px] font-normal leading-snug"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: isActive ? '#FAFAFA' : '#A1A1AA',
                  }}
                >
                  {group.label}
                </div>
                <div className="text-[11px] text-[#71717A] mt-1 font-mono">
                  {group.stepsIncluded}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Active Milestone Visual Showcase (Interactive Product Interface) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
          >
            {/* Left Narrative Column (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span
                  className="text-[11px] uppercase tracking-wider font-semibold block mb-1.5 text-[#818CF8]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Stage {activeGroup.num} · {activeGroup.stepsIncluded}
                </span>
                <h3
                  className="text-[26px] sm:text-[30px] font-normal text-[#FAFAFA] leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {activeGroup.title}
                </h3>
              </div>

              <p
                className="text-[15px] text-[#A1A1AA] leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {activeGroup.summary}
              </p>

              <div
                className="p-4 rounded-xl border"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'var(--ibot-border-dark)',
                }}
              >
                <div
                  className="text-[10px] uppercase tracking-wider font-semibold mb-1 text-[#818CF8]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Decision Outcome
                </div>
                <p className="text-[13px] font-medium text-[#FAFAFA]">
                  {activeGroup.artifact.verdict}
                </p>
              </div>
            </div>

            {/* Right Product Artifact Display (7 cols) */}
            <div className="lg:col-span-7">
              <div
                className="rounded-2xl border p-5 sm:p-7 relative backdrop-blur-xl"
                style={{
                  backgroundColor: 'var(--ibot-bg-dark-card)',
                  borderColor: 'var(--ibot-border-dark)',
                  boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Artifact Top Bar */}
                <div
                  className="flex items-center justify-between pb-4 mb-4 border-b"
                  style={{ borderColor: 'var(--ibot-border-dark)' }}
                >
                  <span
                    className="text-[11px] tracking-wider uppercase font-semibold text-[#818CF8]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {activeGroup.artifact.type}
                  </span>
                  <div
                    className="flex items-center gap-1.5 text-[11px] text-[#10B981] font-semibold"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    <CheckCircle2 size={13} />
                    <span>Verified Platform Evidence</span>
                  </div>
                </div>

                {/* Headline & Meta */}
                <h4
                  className="text-[18px] sm:text-[20px] font-normal text-[#FAFAFA] mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {activeGroup.artifact.headline}
                </h4>
                <p
                  className="text-[11px] text-[#71717A] mb-5"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {activeGroup.artifact.meta}
                </p>

                {/* Details Ledger */}
                <div
                  className="space-y-2.5 p-4 rounded-xl border mb-4"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderColor: 'var(--ibot-border-dark)',
                  }}
                >
                  {activeGroup.artifact.details.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[13px]"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      <span className="text-[#A1A1AA]">{item.label}</span>
                      <span className="text-[#FAFAFA] font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Senior Reviewer Highlight Note */}
                <div
                  className="p-3.5 rounded-xl border text-[12px] sm:text-[13px] text-[#A1A1AA] italic mb-4"
                  style={{
                    backgroundColor: 'rgba(67, 56, 202, 0.08)',
                    borderColor: 'rgba(129, 140, 248, 0.2)',
                  }}
                >
                  {activeGroup.artifact.reviewerNote}
                </div>

                {/* Footnote */}
                <div
                  className="pt-3.5 border-t flex items-center justify-between text-[11px] text-[#71717A]"
                  style={{
                    borderColor: 'var(--ibot-border-dark)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <span>Illustrative Platform Evidence</span>
                  <span className="text-[#A1A1AA]">Audit-Ready Record</span>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
