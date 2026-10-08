import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  GitPullRequest,
  ShieldCheck,
} from 'lucide-react';

export function CandidateExperienceSection() {
  const [activeTab, setActiveTab] = useState<'capabilities' | 'work' | 'feedback' | 'readiness'>('capabilities');

  return (
    <section
      id="candidate-experience"
      className="relative w-full py-24 sm:py-32 border-b text-white overflow-hidden"
      style={{
        backgroundColor: 'var(--ibot-bg-dark)',
        borderColor: 'var(--ibot-border-dark)',
      }}
    >
      {/* ── Background Soft Atmosphere ── */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[150px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(67, 56, 202, 0.4) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16"
        style={{ maxWidth: '1240px' }}
      >
        {/* Section Header */}
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
            The Reviewer Experience
          </p>
          <h2
            className="text-[#FAFAFA] font-normal mb-4 text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.12] tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What Hiring &amp; Delivery Leaders Actually Review.
          </h2>
          <p
            className="text-[#A1A1AA] text-[16px] sm:text-[17px] leading-[1.6] max-w-[54ch]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            A mature enterprise interface designed for decision-makers. Inspect concrete capabilities, verified repository tasks, practitioner feedback, and readiness verdicts in one cohesive dossier.
          </p>
        </motion.div>

        {/* ── Enterprise Software Interface Frame ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border overflow-hidden backdrop-blur-xl"
          style={{
            backgroundColor: 'var(--ibot-bg-dark-card)',
            borderColor: 'var(--ibot-border-dark)',
            boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Top Window Bar */}
          <div
            className="px-6 py-3.5 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderColor: 'var(--ibot-border-dark)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
              </div>
              <div
                className="text-[12px] text-[#A1A1AA] pl-3 border-l border-[#27272A] flex items-center gap-1.5"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <span>IBOT Enterprise</span>
                <span className="text-[#52525B]">/</span>
                <span>Candidate Dossier #EV-8842</span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span
                className="px-3 py-1 rounded-full text-[11px] font-semibold border flex items-center gap-1.5"
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  borderColor: 'rgba(16, 185, 129, 0.3)',
                  color: '#10B981',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <CheckCircle2 size={12} />
                <span>Readiness Confirmed</span>
              </span>
            </div>
          </div>

          {/* Candidate Dossier Header Banner */}
          <div
            className="p-5 sm:p-7 border-b flex flex-col md:flex-row md:items-center justify-between gap-4"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.01)',
              borderColor: 'var(--ibot-border-dark)',
            }}
          >
            <div>
              <div
                className="text-[11px] uppercase tracking-wider font-semibold text-[#818CF8] mb-1"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Lead Systems Engineer · Event Architecture
              </div>
              <h3
                className="text-[20px] sm:text-[24px] font-normal text-[#FAFAFA]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Candidate Performance &amp; Capability Record
              </h3>
              <p className="text-[12px] text-[#A1A1AA] mt-0.5">
                Completed in 72h Sandbox · Evaluated across 4 Production Gates
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-[11px] text-[#A1A1AA] font-mono">Panel Consensus</div>
                <div className="text-[13px] font-semibold text-[#10B981]">100% Sign-Off</div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs for the Manager */}
          <div
            className="flex items-center gap-2 px-6 pt-2 border-b overflow-x-auto"
            style={{
              borderColor: 'var(--ibot-border-dark)',
              backgroundColor: 'rgba(255, 255, 255, 0.01)',
            }}
          >
            {[
              { id: 'capabilities', label: 'Required Capabilities' },
              { id: 'work', label: 'Practical Work Completed' },
              { id: 'feedback', label: 'Reviewer Feedback & Adaptation' },
              { id: 'readiness', label: 'Readiness & Deployment Decision' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className="px-4 py-2.5 text-[13px] font-medium transition-all duration-150 border-b-2 whitespace-nowrap"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: isActive ? '#FAFAFA' : '#A1A1AA',
                    borderColor: isActive ? 'var(--ibot-accent-bright)' : 'transparent',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="p-5 sm:p-7 min-h-[300px]">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: REQUIRED CAPABILITIES */}
              {activeTab === 'capabilities' && (
                <motion.div
                  key="capabilities"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3.5"
                >
                  {[
                    {
                      title: 'Distributed Concurrency & State Isolation',
                      status: 'Demonstrated in Execution',
                      description: 'Partitioned distributed worker queues and avoided race conditions.',
                    },
                    {
                      title: 'Idempotent Event Ingestion',
                      status: 'Demonstrated in Execution',
                      description: 'Verified deduplication mechanics under simulated network dropouts.',
                    },
                    {
                      title: 'Production Telemetry & Observability',
                      status: 'Demonstrated in Execution',
                      description: 'Structured latency logs, health probes, and clear assertion traces.',
                    },
                    {
                      title: 'Constructive Adaptation to Critique',
                      status: 'Demonstrated in Execution',
                      description: 'Refactored contested partition locking into bucketed TTL keys in 4h.',
                    },
                  ].map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border flex flex-col justify-between"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        borderColor: 'var(--ibot-border-dark)',
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] text-[#10B981] font-mono font-medium flex items-center gap-1">
                            <CheckCircle2 size={12} />
                            {cap.status}
                          </span>
                        </div>
                        <h4 className="text-[15px] font-normal text-[#FAFAFA] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                          {cap.title}
                        </h4>
                        <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* TAB 2: PRACTICAL WORK COMPLETED */}
              {activeTab === 'work' && (
                <motion.div
                  key="work"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3.5"
                >
                  <div
                    className="p-4 sm:p-5 rounded-xl border flex flex-col gap-4"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderColor: 'var(--ibot-border-dark)',
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <GitPullRequest size={15} className="text-[#818CF8]" />
                          <span className="text-[14px] font-normal text-[#FAFAFA]" style={{ fontFamily: 'var(--font-display)' }}>
                            Pull Request #204: Partition Ingestion Engine
                          </span>
                        </div>
                        <p className="text-[12px] text-[#A1A1AA]">
                          Branch: feat/event-pipeline · <span className="text-[#10B981]">+1,420</span> <span className="text-[#EF4444]">-213</span> lines · 42 assertions passing
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded text-[11px] font-mono text-[#10B981] bg-[#10B981]/10 self-start sm:self-auto border border-[#10B981]/20">
                        Merged in Sandbox
                      </span>
                    </div>

                    <div className="rounded-lg overflow-hidden border border-[#27272A] bg-[#09090B] font-mono text-[11px] sm:text-[12px] leading-relaxed">
                      <div className="px-4 py-2 bg-[#18181B] border-b border-[#27272A] text-[#A1A1AA] flex items-center justify-between">
                        <span>src/engine/partitioning.ts</span>
                        <span className="text-[#FAFAFA] font-sans text-[11px] bg-[#27272A] px-2 py-0.5 rounded">View Diff</span>
                      </div>
                      <div className="p-4 overflow-x-auto">
                        <div className="text-[#A1A1AA] whitespace-pre">  // Ensure idempotent event processing</div>
                        <div className="text-[#EF4444] bg-[#EF4444]/10 whitespace-pre px-2 -mx-2 border-l-2 border-[#EF4444]">- const partitionKey = event.userId;</div>
                        <div className="text-[#10B981] bg-[#10B981]/10 whitespace-pre px-2 -mx-2 border-l-2 border-[#10B981]">+ const partitionKey = generateBucketedKey(event.userId, event.timestamp);</div>
                        <div className="text-[#A1A1AA] whitespace-pre">  </div>
                        <div className="text-[#EF4444] bg-[#EF4444]/10 whitespace-pre px-2 -mx-2 border-l-2 border-[#EF4444]">- await this.cache.set(partitionKey, event.data);</div>
                        <div className="text-[#10B981] bg-[#10B981]/10 whitespace-pre px-2 -mx-2 border-l-2 border-[#10B981]">+ await this.cache.set(partitionKey, event.data, {"{"}</div>
                        <div className="text-[#10B981] bg-[#10B981]/10 whitespace-pre px-2 -mx-2 border-l-2 border-[#10B981]">+   ttl: config.PARTITION_TTL,</div>
                        <div className="text-[#10B981] bg-[#10B981]/10 whitespace-pre px-2 -mx-2 border-l-2 border-[#10B981]">+   nx: true // Prevent concurrent overrides</div>
                        <div className="text-[#10B981] bg-[#10B981]/10 whitespace-pre px-2 -mx-2 border-l-2 border-[#10B981]">+ {"}"});</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="p-4 sm:p-5 rounded-xl border"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderColor: 'var(--ibot-border-dark)',
                    }}
                  >
                    <div className="text-[11px] font-mono text-[#818CF8] uppercase font-semibold mb-1.5">Automated Test Execution</div>
                    <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                      All 42 concurrency assertions succeeded under synthetic payload bursts. P99 latency verified at 38ms against internal target of 50ms.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: REVIEWER FEEDBACK & ADAPTATION */}
              {activeTab === 'feedback' && (
                <motion.div
                  key="feedback"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3.5"
                >
                  <div
                    className="p-4 sm:p-5 rounded-xl border"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderColor: 'var(--ibot-border-dark)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13px] font-normal text-[#FAFAFA]" style={{ fontFamily: 'var(--font-display)' }}>
                        Staff Platform Architect Review
                      </span>
                      <span className="text-[11px] text-[#A1A1AA] font-mono">Turnaround: 4h</span>
                    </div>
                    <p className="text-[13px] text-[#A1A1AA] leading-relaxed italic">
                      "Candidate's initial implementation had minor contention risk under high batch volume. When challenged in review, candidate refactored to bucketed TTL partition keys immediately without defensive pushback."
                    </p>
                  </div>

                  <div
                    className="p-3.5 rounded-xl border flex items-center justify-between text-[13px]"
                    style={{
                      backgroundColor: 'rgba(67, 56, 202, 0.1)',
                      borderColor: 'rgba(129, 140, 248, 0.2)',
                    }}
                  >
                    <span className="text-[#FAFAFA] font-medium">Coachability &amp; Learning Velocity:</span>
                    <span className="text-[#818CF8] font-semibold font-mono">Exceptional (Top 5% Benchmark)</span>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: READINESS DECISION */}
              {activeTab === 'readiness' && (
                <motion.div
                  key="readiness"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div
                    className="p-5 rounded-xl border"
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.05)',
                      borderColor: 'rgba(16, 185, 129, 0.2)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1.5 text-[#10B981] font-semibold text-[13px]">
                      <ShieldCheck size={16} />
                      <span>Executive Sign-Off: Ready for Immediate Deployment</span>
                    </div>
                    <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                      Based on verifiable pull requests, automated concurrency testing, and rapid peer review iteration, the candidate demonstrates senior-level competence in your environment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-lg border text-center" style={{ borderColor: 'var(--ibot-border-dark)' }}>
                      <div className="text-[11px] text-[#A1A1AA] font-mono">Recommended Path</div>
                      <div className="text-[13px] font-normal text-[#FAFAFA] mt-1" style={{ fontFamily: 'var(--font-display)' }}>
                        Direct Full-Time Hire
                      </div>
                    </div>
                    <div className="p-3.5 rounded-lg border text-center" style={{ borderColor: 'var(--ibot-border-dark)' }}>
                      <div className="text-[11px] text-[#A1A1AA] font-mono">Ramp-Up Lag</div>
                      <div className="text-[13px] font-semibold text-[#10B981] mt-1">Zero (Pre-familiarized)</div>
                    </div>
                    <div className="p-3.5 rounded-lg border text-center" style={{ borderColor: 'var(--ibot-border-dark)' }}>
                      <div className="text-[11px] text-[#A1A1AA] font-mono">Audit Status</div>
                      <div className="text-[13px] font-normal text-[#FAFAFA] mt-1" style={{ fontFamily: 'var(--font-display)' }}>
                        Permanent Ledger Saved
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Bottom Interface Status Bar */}
          <div
            className="px-6 py-3.5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[#A1A1AA]"
            style={{
              borderColor: 'var(--ibot-border-dark)',
              backgroundColor: 'rgba(255, 255, 255, 0.01)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <span>Role-Neutral Enterprise Capability Review</span>
            <span className="text-[#D4D4D8]">Audit Trail: Complete &amp; Exportable</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
