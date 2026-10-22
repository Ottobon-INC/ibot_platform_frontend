import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Terminal, 
  GitBranch, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ArrowRight,
  Sparkles,
  FileCode2,
  Clock,
  ShieldAlert
} from 'lucide-react';

interface SignalCase {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  proxyHeadline: string;
  proxyDetail: string;
  proxyMetric: string;
  evidenceHeadline: string;
  evidenceDetail: string;
  evidenceMetric: string;
  terminalCode: string;
  language: string;
  diffSummary: string;
}

export function ShiftSection() {
  const [activeSignal, setActiveSignal] = useState(0);

  const signalCases: SignalCase[] = [
    {
      id: 'claims-vs-execution',
      tag: 'SIGNAL 01 · CLAIMS VS. RUNTIME',
      title: 'Resume Claims vs. Sandbox Execution',
      subtitle: 'Self-reported CV bullet points vs. live Docker container runtime with passing test suites.',
      proxyHeadline: '"Led distributed caching & concurrency at scale"',
      proxyDetail: 'Static resume bullet point with zero auditable execution proof or architectural context.',
      proxyMetric: 'Unverified Claim',
      evidenceHeadline: '16/16 Test Assertions Passed · Docker Sandbox',
      evidenceDetail: 'Context-managed connection pool with pooled reuse, backpressure throttling, and zero memory leaks.',
      evidenceMetric: 'Verified Runtime Proof',
      language: 'typescript',
      diffSummary: 'PASS: redis_pool_lifecycle.test.ts (16 assertions, 42ms)',
      terminalCode: `// IBOT Sandbox Telemetry: Connection Pool Lifecycle
export async function acquirePooledConnection(config: PoolConfig) {
  const connection = await pool.acquire({ timeoutMs: 2500 });
  // Enforces pooled reuse & backpressure backoff
  connection.on('backpressure', (level) => throttleRate(level));
  return connection; // Verified: 0 connection leak regressions
}`
    },
    {
      id: 'riddles-vs-ambiguity',
      tag: 'SIGNAL 02 · RIDDLES VS. AMBIGUITY',
      title: 'Trivia Riddles vs. Real Incident Debugging',
      subtitle: 'Memorized algorithm puzzles vs. diagnosing and patching root-cause architecture leaks.',
      proxyHeadline: '"Invert a Binary Tree in 20 minutes"',
      proxyDetail: 'Algorithmic trivia recall that has no bearing on actual production outages or daily sprint tickets.',
      proxyMetric: 'Trivia Recall',
      evidenceHeadline: 'Fixed Unhandled Async State Outage in 18 Min',
      evidenceDetail: 'Candidate traced error back to missing dependency injection in the auth middleware, not just a null check.',
      evidenceMetric: 'Root Cause Resolution',
      language: 'typescript',
      diffSummary: 'FIX: auth_middleware.ts (Root cause patched, 0 regressions)',
      terminalCode: `// IBOT Validation: Resolving Root-Cause Architecture Leak
try {
  const session = await authContainer.resolve<SessionService>();
  return await session.validateToken(token, { refreshPolicy: 'graceful' });
} catch (error) {
  logger.warn('Token validation degraded, initiating graceful fallback', { error });
  return fallbackAnonymousSession();
}`
    },
    {
      id: 'ramp-vs-governance',
      tag: 'SIGNAL 03 · RAMP DRAG VS. GOVERNANCE',
      title: '8-Week Ramp Drag vs. Principal-Governed Delivery',
      subtitle: 'Unsupervised hires draining lead capacity vs. contributors delivering backlog PRs under an Ottobon Principal.',
      proxyHeadline: '15–20 hrs/week Senior Lead Supervision',
      proxyDetail: 'Senior tech leads pulled from critical roadmaps to hand-hold new hires through internal conventions.',
      proxyMetric: 'Lead Burnout Drag',
      evidenceHeadline: '0 hrs/wk Lead Overhead · Day-1 Backlog Commits',
      evidenceDetail: 'Ottobon Principal Architect reviews code, enforces repo linting, and guarantees delivery SLA before merge.',
      evidenceMetric: 'Guaranteed Velocity SLA',
      language: 'bash',
      diffSummary: 'MERGE: PR #142 (Approved by Ottobon Principal Architect)',
      terminalCode: `[OTTOBON-GOVERNANCE-SLA]
> Contributor: Alex Morgan (Cohort PRJ-R1)
> Branch: feat/async-event-pipeline
> Review: Ottobon Principal Architect (Verified Clean)
> Test Matrix: 100% CI assertions passing
> Client Lead Time Required: 0 hrs / week`
    }
  ];

  const current = signalCases[activeSignal];

  return (
    <section
      id="the-shift"
      className="relative w-full py-24 sm:py-32 border-b overflow-hidden"
      style={{
        backgroundColor: 'var(--ibot-bg-light)',
        borderColor: 'var(--ibot-border-light)',
      }}
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
            <Layers size={13} />
            <span>The Capability Signal Gap</span>
          </div>
          <h2 
            className="text-[#0F172A] font-normal mb-5 text-[38px] sm:text-[46px] leading-[1.12] tracking-tight" 
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Built for the engineering signals <br />
            <span className="font-semibold text-[#4F46E5]">
              that actually matter in production.
            </span>
          </h2>
          <p className="text-[#475569] text-[17px] sm:text-[18px] leading-[1.6]">
            Traditional hiring relies on memorized syntax puzzles and unverified resumes. IBOT replaces guesswork with auditable execution inside production-replica sandboxes.
          </p>
        </motion.div>

        {/* ── Interactive Signal Selection Ribbon ── */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {signalCases.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveSignal(idx)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2.5 whitespace-nowrap ${
                activeSignal === idx
                  ? 'bg-[#0F172A] text-white shadow-lg ring-1 ring-slate-900'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeSignal === idx ? 'bg-[#4F46E5]' : 'bg-slate-300'}`} />
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* ── Novel Diagnostic Comparison Console ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: The Conventional Hiring Proxy (Amber Warning Tone) */}
          <motion.div 
            key={`proxy-${activeSignal}`}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-5 rounded-3xl bg-slate-100/90 border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-200">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <ShieldAlert size={14} className="text-amber-600" />
                  <span>Conventional Screening</span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  {current.proxyMetric}
                </span>
              </div>

              <div className="mb-6">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                  What Reaches Your Team
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs font-mono text-xs text-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">
                    Candidate Claim
                  </div>
                  <div className="font-semibold text-slate-900 leading-snug">
                    {current.proxyHeadline}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold">
                  The Hidden Blindspot
                </div>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  {current.proxyDetail}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-amber-800 font-mono flex items-center gap-2">
              <AlertTriangle size={14} className="shrink-0 text-amber-600" />
              <span>Zero runtime telemetry or auditable diff available.</span>
            </div>
          </motion.div>

          {/* Right Column: The IBOT Verified Execution Console (Deep Navy Surface) */}
          <motion.div 
            key={`evidence-${activeSignal}`}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 rounded-3xl bg-[#0F172A] text-white p-7 sm:p-8 flex flex-col justify-between shadow-2xl border border-slate-800 relative overflow-hidden"
          >
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#4F46E5] uppercase tracking-wider">
                  <ShieldCheck size={16} />
                  <span>IBOT Verified Sandbox Execution</span>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                  {current.evidenceMetric}
                </span>
              </div>

              {/* Verified Outcome Banner */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-5">
                <div className="text-[10px] font-mono text-indigo-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                  <Sparkles size={12} />
                  <span>Verified Capability Telemetry</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white font-mono leading-snug">
                  {current.evidenceHeadline}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {current.evidenceDetail}
                </p>
              </div>

              {/* IDE Code / Execution Window */}
              <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-xs">
                {/* File Header */}
                <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    </div>
                    <span className="text-slate-300 ml-2 flex items-center gap-1">
                      <FileCode2 size={13} className="text-[#4F46E5]" />
                      sandbox_execution_audit.{current.language === 'bash' ? 'log' : 'ts'}
                    </span>
                  </div>
                  <span className="text-emerald-400 font-bold text-[10px]">
                    100% CI PASS
                  </span>
                </div>

                {/* Code body */}
                <div className="p-4 overflow-x-auto text-slate-300 text-[11px] sm:text-xs leading-relaxed">
                  <pre className="font-mono">
                    <code>{current.terminalCode}</code>
                  </pre>
                </div>
              </div>

            </div>

            {/* Bottom Status Bar */}
            <div className="relative z-10 mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 size={13} />
                <span>{current.diffSummary}</span>
              </span>
              <span className="text-slate-500">
                Audited & Logged to Readiness Ledger
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
