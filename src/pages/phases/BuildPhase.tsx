import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Terminal, Cpu, Bug, Layers, PlayCircle, GitCommit, FileText } from 'lucide-react';
import { PhaseNavbar } from '../../components/phases/PhaseNavbar';
import { Footer } from '../../components/landing/Footer';
import { LeadModal } from '../../components/landing/LeadModal';

export default function BuildPhase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      icon: <Bug size={24} className="text-orange-600" />,
      title: 'Real-World Incident Immersion',
      desc: 'Instead of abstract puzzle quizzes, engineers are dropped into realistic system failure modes—debugging degraded database connections, unhandled race conditions, and streaming backpressure.',
      highlights: ['Dirty logs & incomplete stack traces', 'Production-replica microservices', 'Trade-off analysis under real constraints']
    },
    {
      icon: <Layers size={24} className="text-orange-600" />,
      title: '5-Step Guided Nurturing Loop',
      desc: 'A structured cognitive feedback framework (Task → Problem Exploration → Targeted RFC Docs → Assertion Validation → Completion) builds autonomous judgment with zero senior manager burden.',
      highlights: ['Self-directed root cause discovery', 'Targeted architectural documentation', 'Eliminates repetitive senior lead mentoring']
    },
    {
      icon: <Cpu size={24} className="text-orange-600" />,
      title: 'Automated Regression Harness',
      desc: 'Every candidate commit is evaluated in an isolated containerized sandbox against automated regression assertion suites verifying memory safety, edge cases, and performance SLAs.',
      highlights: ['Zero exposure to proprietary client code', 'Instant automated assertion reporting', 'Deterministic pass/fail validation metrics']
    }
  ];

  const sequencerSteps = [
    {
      step: '01',
      title: 'Incident Ingestion',
      category: 'Simulated Outage',
      desc: 'Candidate receives a simulated production ticket: high latency spike in order processing service under burst load. Unstructured error logs and telemetry graphs provided.',
      metric: 'Telemetry Log Provided',
      status: 'Active Incident'
    },
    {
      step: '02',
      title: 'Root Cause Deconstruction',
      category: 'Diagnostic Hypothesis',
      desc: 'Candidate isolates the bottleneck: unindexed PostgreSQL query causing pool exhaustion during parallel worker writes. Formulates resolution strategy.',
      metric: 'Memory & Pool Analyzed',
      status: 'Diagnosis Verified'
    },
    {
      step: '03',
      title: 'Targeted Documentation',
      category: 'Guided Discovery',
      desc: 'Sandbox provides targeted documentation on connection pooling, batch write semantics, and circuit breaking patterns. No spoon-fed solutions.',
      metric: 'RFC Docs Referenced',
      status: 'Pattern Aligned'
    },
    {
      step: '04',
      title: 'Atomic Patch & Test Suite',
      category: 'Execution',
      desc: 'Candidate commits refactored batching handler with connection pool timeouts. Automated test harness executes 18 end-to-end regression assertions.',
      metric: '18 / 18 Assertions Passed',
      status: 'Clean Test Run'
    },
    {
      step: '05',
      title: 'Review-Ready Pull Request',
      category: 'Governance Review',
      desc: 'PR submitted with architectural rationale, benchmark numbers showing 82% latency reduction, and migration plan. Logged into candidate capability dossier.',
      metric: '+82% Throughput Gain',
      status: 'Approved for Operate'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--ibot-bg-light)] text-[var(--ibot-text-on-light)] font-sans selection:bg-[#2563EB] selection:text-white">
      <PhaseNavbar onCTA={() => setModalOpen(true)} />

      <main className="pt-28 sm:pt-36 pb-24">
        
        {/* ── HERO BANNER ── */}
        <section className="px-5 sm:px-8 max-w-[1200px] mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 font-mono text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Code2 size={14} /> Phase 02 · Practical Skill Nurturing
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Nurture delivery under ambiguity. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-orange-600">
              Not textbook theory.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-[18px] sm:text-[20px] max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Traditional technical interviews test memorized algorithm tricks. IBOT immerses engineers in realistic production environments—solving real outages, mastering your architecture, and producing audited code before deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-medium text-base shadow-lg shadow-orange-500/20 cursor-pointer transition-all hover:scale-[1.02]"
            >
              Calibrate Build Sandbox
            </button>
            <Link
              to="/phases/operate"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 font-medium text-base hover:bg-slate-50 transition-colors shadow-2xs"
            >
              Explore Next: Operate Phase <ArrowRight size={16} />
            </Link>
          </motion.div>
        </section>

        {/* ── 3 CORE PILLARS ── */}
        <section className="px-5 sm:px-8 max-w-[1200px] mx-auto mb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col gap-2.5">
                  {pillar.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── INTERACTIVE EXHIBIT: 5-STEP GUIDED NURTURING SEQUENCER ── */}
        <section className="px-5 sm:px-8 max-w-[1100px] mx-auto mb-28">
          <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-1">
                  Interactive Nurturing Simulator
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  The 5-Step Ambiguity Resolution Loop
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                  0 hrs / wk Senior Lead Drag
                </div>
              </div>
            </div>

            {/* Stepper Tabs */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-8">
              {sequencerSteps.map((stepItem, sIdx) => {
                const isActive = activeStep === sIdx;
                return (
                  <button
                    key={sIdx}
                    type="button"
                    onClick={() => setActiveStep(sIdx)}
                    className={`p-3 sm:p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-orange-500/20 border-orange-500/60 text-white shadow-md'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-mono text-xs text-orange-400 font-bold mb-1">
                      Step {stepItem.step}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold truncate text-white">
                      {stepItem.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step Detail Console */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 mb-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-orange-500/20 text-orange-300 font-mono text-xs uppercase font-semibold">
                      {sequencerSteps[activeStep].category}
                    </span>
                    <h4 className="text-xl font-bold text-white">
                      {sequencerSteps[activeStep].title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                    <CheckCircle2 size={15} />
                    <span>{sequencerSteps[activeStep].status}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {sequencerSteps[activeStep].desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-slate-400 block font-mono">Telemetry Outcome</span>
                    <span className="font-semibold text-orange-300 font-mono text-sm">
                      {sequencerSteps[activeStep].metric}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono">Sandbox Environment</span>
                    <span className="font-semibold text-white font-mono text-sm">
                      Isolated Dev-Container
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono">Hiring Manager Overhead</span>
                    <span className="font-semibold text-emerald-400 font-mono text-sm">
                      0 Minutes
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Metrics Bar */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Automated assertion test harness isolates skill without senior engineer time.</span>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-orange-400 font-bold hover:underline cursor-pointer"
              >
                Schedule Build Sandbox Walkthrough →
              </button>
            </div>

          </div>
        </section>

        {/* ── PHASE PROGRESSION STEPPER ── */}
        <section className="px-5 sm:px-8 max-w-[900px] mx-auto text-center">
          <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              to="/phases/identify"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 font-medium"
            >
              <ArrowLeft size={16} /> Previous: Phase 01 Identify
            </Link>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">
                Next Stage in the Lifecycle
              </span>
              <h4 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                Guided Remote Project Delivery
              </h4>
            </div>
            <Link
              to="/phases/operate"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 text-white font-semibold text-sm hover:bg-orange-700 transition-all cursor-pointer shadow-sm"
            >
              Proceed to Phase 03: Operate <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        preset="Build Phase Consultation"
      />
    </div>
  );
}
