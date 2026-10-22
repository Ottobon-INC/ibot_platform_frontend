import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  GitPullRequest, 
  Award, 
  FileText, 
  ArrowRight, 
  UserCheck,
  FileCode2,
  Lock,
  GitBranch,
  Sparkles,
  ExternalLink,
  Cpu
} from 'lucide-react';

export function CandidateExperienceSection() {
  const [activeTab, setActiveTab] = useState<'radar' | 'commits' | 'compliance'>('radar');

  const radarMetrics = [
    { label: 'Requirement Pivot Speed', score: '9.5 / 10', desc: 'Adapted in 18 min when specs shifted mid-sprint without regression' },
    { label: 'API Learnability & Discovery', score: '9.2 / 10', desc: 'Zero syntax blockers on unfamiliar vector DB endpoints & client auth' },
    { label: 'Architectural Hygiene', score: '9.8 / 10', desc: 'Strict module decoupling, clean dependency injection, zero leak patterns' },
    { label: 'Production Error Recovery', score: '9.8 / 10', desc: 'Graceful degradation on simulated network drop with circuit breaker' },
    { label: 'Async Backpressure Handling', score: '9.6 / 10', desc: 'Handled 10k req/s burst with pooled connection reuse & rate limiters' },
  ];

  const commits = [
    { 
      hash: 'e82a10', 
      title: 'refactor: isolate redis pool connection lifecycle', 
      time: 'Sprint Day 2', 
      diff: '+48 -12 lines',
      assertions: '16/16 Passed'
    },
    { 
      hash: '4f91b2', 
      title: 'fix: handle unhandled promise rejection in auth middleware', 
      time: 'Sprint Day 3', 
      diff: '+24 -8 lines',
      assertions: '8/8 Passed'
    },
    { 
      hash: 'c7d031', 
      title: 'test: add 16 integration regression assertions to order pipeline', 
      time: 'Sprint Day 4', 
      diff: '+112 -0 lines',
      assertions: '16/16 Passed'
    },
    { 
      hash: '9b3e15', 
      title: 'feat: implement exponential backoff retry policy on db deadlock', 
      time: 'Sprint Day 5', 
      diff: '+36 -4 lines',
      assertions: '12/12 Passed'
    },
  ];

  return (
    <section id="candidate-experience" className="relative w-full py-28 sm:py-36 bg-slate-50/60 border-b border-slate-200 overflow-hidden">
      
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 max-w-[1240px]">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-[#4F46E5] text-[11px] font-mono font-bold uppercase tracking-wider mb-5">
            <FileText size={13} />
            <span>Auditable Proof-of-Work</span>
          </div>
          <h2 
            className="text-[#0F172A] font-normal mb-5 text-[38px] sm:text-[46px] leading-[1.12] tracking-tight" 
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Stop reading resumes. <br />
            <span className="font-semibold text-[#4F46E5]">Start evaluating verified execution.</span>
          </h2>
          <p className="text-[#475569] text-[17px] sm:text-[18px] leading-relaxed">
            Every candidate builds an audit-ready ledger of real commits, automated test passes, and architectural decisions executed inside client-replica sandboxes.
          </p>
        </motion.div>

        {/* ── Executive Readiness Dossier Dashboard Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden"
        >
          
          {/* Card Top Banner: Candidate Identity & Cryptographic Audit Stamp */}
          <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4F46E5] text-white font-bold flex items-center justify-center text-base font-mono shadow-md">
                AM
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg font-bold text-white">Alex Morgan</h3>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40 uppercase tracking-wider">
                    Verified Ready
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  Senior Full-Stack AI Engineer · Sandbox Cohort PRJ-R1
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-slate-400 text-[10px] block uppercase font-bold">Readiness Score</span>
                <strong className="text-emerald-400 text-sm">98.4%</strong>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-slate-400 text-[10px] block uppercase font-bold">Audit Hash</span>
                <strong className="text-indigo-300 text-xs font-mono">#98-OB-AUDIT</strong>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="px-6 sm:px-8 border-b border-slate-200 flex items-center gap-8 text-xs sm:text-sm font-semibold text-slate-500 bg-slate-50/50">
            <button
              type="button"
              onClick={() => setActiveTab('radar')}
              className={`py-4 border-b-2 transition-all cursor-pointer ${
                activeTab === 'radar' 
                  ? 'border-[#4F46E5] text-[#4F46E5] font-bold' 
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              Adaptive Competency Matrix
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('commits')}
              className={`py-4 border-b-2 transition-all cursor-pointer ${
                activeTab === 'commits' 
                  ? 'border-[#4F46E5] text-[#4F46E5] font-bold' 
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              Verifiable Pull Request Trail
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('compliance')}
              className={`py-4 border-b-2 transition-all cursor-pointer ${
                activeTab === 'compliance' 
                  ? 'border-[#4F46E5] text-[#4F46E5] font-bold' 
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              Compliance & IP Handover
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {activeTab === 'radar' && (
                <motion.div
                  key="radar"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
                >
                  {/* Left: Capability Metric Rows */}
                  <div className="md:col-span-7 flex flex-col gap-3">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Audited Performance Dimensions
                    </div>
                    {radarMetrics.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-indigo-50/40 transition-colors">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                          <span>{item.label}</span>
                          <span className="text-[#4F46E5] font-mono font-bold">{item.score}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right: Verified Audit Summary Card */}
                  <div className="md:col-span-5 rounded-2xl bg-[#0F172A] p-6 text-white shadow-xl flex flex-col justify-between border border-slate-800">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        <ShieldCheck size={16} /> Audit Certification
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-white">
                        Project-Ready Clearance
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-6">
                        All milestones tested inside isolated Docker replica. Zero algorithmic trivia or synthetic test inflation.
                      </p>

                      <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                        <div className="flex items-center gap-2.5 text-slate-200">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                          <span>16/16 Automated Test Assertions Passed</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-slate-200">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                          <span>Ottobon Principal Architect Verified</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-slate-200">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                          <span>1-Click Workday & Greenhouse Sync</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Ledger: <strong className="text-white">#98-OB-AUDIT</strong></span>
                      <span className="text-emerald-400 font-bold">Tamper-Evident</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'commits' && (
                <motion.div
                  key="commits"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Verified Pull Request Commit Ledger
                  </div>
                  {commits.map((c, i) => (
                    <div key={i} className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between text-xs hover:border-slate-300 bg-white transition-all shadow-2xs">
                      <div className="flex items-center gap-3.5">
                        <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-[#4F46E5] shrink-0">
                          <GitPullRequest size={16} />
                        </div>
                        <div>
                          <div className="font-mono font-bold text-slate-900">{c.title}</div>
                          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                            Commit <span className="text-slate-700 font-semibold">{c.hash}</span> · {c.time} · {c.diff}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 font-mono font-semibold text-[11px]">
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span>{c.assertions}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'compliance' && (
                <motion.div
                  key="compliance"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
                >
                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center mb-3">
                      <ShieldCheck size={20} />
                    </div>
                    <div className="text-sm font-bold text-slate-900">SOC-2 Isolated</div>
                    <div className="text-xs text-slate-500 mt-1 leading-snug">
                      Containers wiped and sanitized upon transition
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center mb-3">
                      <Award size={20} />
                    </div>
                    <div className="text-sm font-bold text-slate-900">100% IP Clearance</div>
                    <div className="text-xs text-slate-500 mt-1 leading-snug">
                      All commit copyrights pre-assigned to client
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center mb-3">
                      <UserCheck size={20} />
                    </div>
                    <div className="text-sm font-bold text-slate-900">Day-1 Absorption</div>
                    <div className="text-xs text-slate-500 mt-1 leading-snug">
                      Zero buyout markups or placement fee friction
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
