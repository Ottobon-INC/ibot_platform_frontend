import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  TestTube2, 
  GitPullRequest, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  FileCode2,
  GitBranch,
  Play
} from 'lucide-react';

interface SandboxStep {
  id: string;
  stepNum: string;
  name: string;
  tag: string;
  headline: string;
  desc: string;
  artifactType: 'terminal' | 'tests' | 'review';
  tabLabel: string;
  codeSnippet: string;
  statusBadge: string;
  telemetry: { label: string; val: string }[];
}

export function NurturingSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: SandboxStep[] = [
    {
      id: 'step-01',
      stepNum: '01',
      name: 'Stack Ingestion',
      tag: 'STAGE 01 · CONTAINER ENVIRONMENT',
      headline: 'Instant Replica Dev-Containers',
      desc: 'Before touching your repo, contributors are immersed in dedicated Docker containers configured to your exact framework, linters, and database constraints.',
      artifactType: 'terminal',
      tabLabel: 'docker-compose.sandbox.yml',
      statusBadge: 'Environment Ready',
      codeSnippet: `services:
  app-sandbox:
    image: client-runtime-node20:latest
    environment:
      - NODE_ENV=development
      - MOCK_AUTH_URL=http://auth-mock:8080
    volumes:
      - ./src:/workspace/src:ro
    security_opt:
      - no-new-privileges:true
# Verified: 100% Isolated SOC-2 practice container`,
      telemetry: [
        { label: 'Container Init', val: '1.8s' },
        { label: 'Security Context', val: 'Read-Only Host Mount' },
        { label: 'Repo Mirror', val: 'Client Stack V2.4' }
      ]
    },
    {
      id: 'step-02',
      stepNum: '02',
      name: 'Ambiguity Injection',
      tag: 'STAGE 02 · AMBIGUITY CHALLENGE',
      headline: 'Real Engineering Incidents, Not LeetCode',
      desc: 'Candidates are tasked with solving a live production incident where specifications shift mid-sprint, testing architectural discipline and edge-case handling.',
      artifactType: 'terminal',
      tabLabel: 'incident_repro.ts',
      statusBadge: 'Incident Replicated',
      codeSnippet: `// Incident Alert: Unhandled async reject under heavy load
async function processOrderBatch(orders: Order[]) {
  // Candidate must diagnose missing transaction boundary
  // and handle database lock acquisition timeouts
  const tx = await db.beginTransaction();
  try {
    for (const order of orders) {
      await orderEngine.lockAndProcess(order, tx);
    }
    await tx.commit();
  } catch (err) {
    await tx.rollback(); // Requires graceful backoff policy
  }
}`,
      telemetry: [
        { label: 'Task Domain', val: 'Distributed Concurrency' },
        { label: 'Incident Type', val: 'Transaction Deadlock' },
        { label: 'Time Allowed', val: '60 Minutes' }
      ]
    },
    {
      id: 'step-03',
      stepNum: '03',
      name: 'Automated Regression Harness',
      tag: 'STAGE 03 · AUTOMATED ASSERTIONS',
      headline: '16 Automated CI/CD Regression Tests',
      desc: 'Every candidate solution must satisfy an automated test harness enforcing performance thresholds, memory limits, and zero regression criteria.',
      artifactType: 'tests',
      tabLabel: 'test_runner_telemetry.log',
      statusBadge: '16/16 Passed',
      codeSnippet: `RUN  npm test -- --coverage
✓ TestSuite 01: Connection pool reuse under 10k burst [PASS] (14ms)
✓ TestSuite 02: Graceful error recovery on Redis drop [PASS] (8ms)
✓ TestSuite 03: Architectural modularity & DI check   [PASS] (6ms)
✓ TestSuite 04: Zero memory leaks over 500 requests   [PASS] (12ms)
-----------------------------------------------------------------
Total: 16 passed, 0 failed, 100% assertions satisfied`,
      telemetry: [
        { label: 'Total Assertions', val: '16 Passed' },
        { label: 'Regression Leaks', val: '0 Detected' },
        { label: 'Test Runtime', val: '42ms' }
      ]
    },
    {
      id: 'step-04',
      stepNum: '04',
      name: 'Principal Lead Review',
      tag: 'STAGE 04 · GOVERNED CODE REVIEW',
      headline: 'Ottobon Principal Architect Gate',
      desc: 'An experienced Ottobon Principal reviews every commit for code hygiene, documentation, and maintainability before approving placement onto your sprint backlog.',
      artifactType: 'review',
      tabLabel: 'pr_review_approval.md',
      statusBadge: 'Approved for Production',
      codeSnippet: `## PR #142 Review: feat/deadlock-resilient-batch-processing
Author: Alex Morgan (Verified Ready)
Reviewer: Ottobon Principal Tech Lead (@principal-lead)

Status: [APPROVED - ZERO REGRESSIONS]
Notes: Excellent handling of transaction isolation levels.
Added proper exponential backoff on deadlock retry.
Commit history is clean, atomic, and adheres to client standards.`,
      telemetry: [
        { label: 'Lead Oversight', val: 'Principal Architect' },
        { label: 'Code Cleanliness', val: '9.8 / 10' },
        { label: 'Merge Status', val: 'Ready for Backlog' }
      ]
    }
  ];

  const current = steps[activeStep];

  return (
    <section
      id="sandbox-workbench"
      className="relative w-full py-24 sm:py-32 bg-white border-b border-slate-200 overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 max-w-[1240px]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-[#4F46E5] text-[11px] font-mono font-bold uppercase tracking-wider mb-5">
            <Cpu size={13} />
            <span>The Sandbox Nurturing Engine</span>
          </div>
          <h2 
            className="text-[#0F172A] font-normal mb-5 text-[38px] sm:text-[46px] leading-[1.12] tracking-tight" 
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Inside the sandbox: how we turn <br />
            <span className="font-semibold text-[#4F46E5]">
              potential into production velocity.
            </span>
          </h2>
          <p className="text-[#475569] text-[17px] sm:text-[18px] leading-[1.6]">
            Before touching your codebase, contributors tackle real-world engineering ambiguity inside dedicated production replicas mapped to your stack.
          </p>
        </motion.div>

        {/* ── 4-Step Interactive Stepper Strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl ring-2 ring-indigo-500/30 -translate-y-0.5'
                    : 'bg-slate-50 hover:bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${
                    isActive ? 'bg-[#4F46E5] text-white' : 'bg-slate-200/80 text-slate-600'
                  }`}>
                    STEP {s.stepNum}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>
                <div className={`text-sm sm:text-base font-bold leading-snug ${
                  isActive ? 'text-white' : 'text-slate-900'
                }`}>
                  {s.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Main Interactive Sandbox Workbench Console ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Step Narrative & Telemetry Overview (5 Cols) */}
          <motion.div
            key={`left-${activeStep}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 rounded-3xl bg-slate-50 border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#4F46E5] font-bold uppercase tracking-wider mb-2">
                {current.tag}
              </div>
              <h3 
                className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {current.headline}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {current.desc}
              </p>

              {/* Concrete Telemetry Points */}
              <div className="space-y-2.5 pt-4 border-t border-slate-200">
                <div className="text-[11px] font-mono uppercase text-slate-400 font-bold mb-2">
                  Sandbox Verification Telemetry
                </div>
                {current.telemetry.map((t, tIdx) => (
                  <div key={tIdx} className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 text-xs font-mono">
                    <span className="text-slate-500">{t.label}:</span>
                    <strong className="text-slate-900 font-bold">{t.val}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <ShieldCheck size={15} />
                <span>Zero Synthetic Test Prep</span>
              </span>
              <span>100% Auditable</span>
            </div>
          </motion.div>

          {/* Right Side: Live Container Terminal / Test Artifact (7 Cols) */}
          <motion.div
            key={`right-${activeStep}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 rounded-3xl bg-[#0F172A] text-white border border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Top Terminal Bar */}
            <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
                <span className="text-slate-300 font-medium flex items-center gap-1.5 text-[11px]">
                  <FileCode2 size={13} className="text-[#4F46E5]" />
                  {current.tabLabel}
                </span>
              </div>

              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold uppercase tracking-wider">
                {current.statusBadge}
              </span>
            </div>

            {/* Code / Terminal Content Area */}
            <div className="p-5 sm:p-6 font-mono text-xs overflow-x-auto text-slate-300 leading-relaxed bg-[#0F172A]">
              <pre className="whitespace-pre">
                <code>{current.codeSnippet}</code>
              </pre>
            </div>

            {/* Terminal Bottom Controls */}
            <div className="px-5 py-3.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-2 text-indigo-300">
                <Sparkles size={13} />
                <span>Automated sandbox telemetry mapped directly to candidate ledger.</span>
              </span>
              <button
                type="button"
                onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                className="hover:text-white flex items-center gap-1 text-slate-300 transition-colors cursor-pointer"
              >
                <span>Next Step</span>
                <ChevronRight size={13} />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
