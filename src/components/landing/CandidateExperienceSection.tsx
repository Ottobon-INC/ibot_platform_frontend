import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, GitPullRequest, Award, FileText, ArrowRight, UserCheck } from 'lucide-react';

export function CandidateExperienceSection() {
  const [activeTab, setActiveTab] = useState<'radar' | 'commits' | 'compliance'>('radar');

  const radarMetrics = [
    { label: 'Requirement Pivot Speed', score: '9.5', desc: 'Adapted in 18 min when specs shifted mid-task' },
    { label: 'API Learnability', score: '9.0', desc: 'Zero syntax blockers on unfamiliar vector DB endpoints' },
    { label: 'Architectural Hygiene', score: '9.8', desc: 'Strict module decoupling and dependency injection' },
    { label: 'Production Error Recovery', score: '9.8', desc: 'Graceful degradation on simulated network drop' },
    { label: 'Async Backpressure', score: '9.6', desc: 'Handled 10k req/s burst with pooled connection reuse' },
  ];

  const commits = [
    { hash: 'e82a10', title: 'refactor: isolate redis pool connection lifecycle', time: 'Day 2', passed: true },
    { hash: '4f91b2', title: 'fix: handle unhandled promise rejection in auth middleware', time: 'Day 3', passed: true },
    { hash: 'c7d031', title: 'test: add 16 integration regression assertions', time: 'Day 4', passed: true },
    { hash: '9b3e15', title: 'feat: implement exponential backoff retry policy', time: 'Day 5', passed: true },
  ];

  return (
    <section id="candidate-experience" className="relative w-full py-28 sm:py-36 bg-white border-b border-slate-200 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 max-w-[1200px]">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 sm:mb-20">
          <div className="text-[11px] font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">
            EVIDENCE-BASED VERIFICATION
          </div>
          <h2 className="text-slate-900 font-normal mb-6 text-[38px] sm:text-[48px] leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Stop reading resumes. <br />
            <span className="font-semibold text-orange-600">Start evaluating execution.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-[17px] sm:text-[19px] leading-relaxed">
            Move past static interview claims. Inspect how contributors solve real-world ambiguity, absorb feedback, and submit production-ready code before making a permanent offer.
          </p>
        </motion.div>

        {/* ── Executive Readiness Dossier Dashboard Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden"
        >
          
          {/* Card Top Banner: Candidate Metadata */}
          <div className="p-6 sm:p-8 bg-slate-50/80 border-b border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white font-bold flex items-center justify-center text-base shadow-sm">
                AM
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Alex Morgan</h3>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Verified Ready
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">
                  Senior AI Full-Stack Contributor · Cohort PRJ-R1
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-slate-400">Readiness:</span> <strong className="text-orange-600 text-sm">98%</strong>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-slate-400">Stack Match:</span> <strong className="text-emerald-600 text-sm">100%</strong>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="px-6 sm:px-8 border-b border-slate-200 flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-500 bg-white">
            <button
              type="button"
              onClick={() => setActiveTab('radar')}
              className={`py-4 border-b-2 transition-all cursor-pointer ${
                activeTab === 'radar' 
                  ? 'border-orange-600 text-orange-600 font-bold' 
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              Capability Radar
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('commits')}
              className={`py-4 border-b-2 transition-all cursor-pointer ${
                activeTab === 'commits' 
                  ? 'border-orange-600 text-orange-600 font-bold' 
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              Pull Request Trail
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('compliance')}
              className={`py-4 border-b-2 transition-all cursor-pointer ${
                activeTab === 'compliance' 
                  ? 'border-orange-600 text-orange-600 font-bold' 
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              Compliance & Handover
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {activeTab === 'radar' && (
                <motion.div
                  key="radar"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  {/* Left: Capability Metric Bars */}
                  <div className="md:col-span-7 flex flex-col gap-3.5">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Adaptive Competency Scores
                    </div>
                    {radarMetrics.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:bg-orange-50/40 transition-colors">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-1">
                          <span>{item.label}</span>
                          <span className="text-orange-600 font-mono font-bold">{item.score} / 10</span>
                        </div>
                        <div className="text-[11px] text-slate-500 leading-normal">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right: Verified Audit Summary Card */}
                  <div className="md:col-span-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-xl flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest mb-4">
                        <ShieldCheck size={16} /> Audit Summary
                      </div>
                      <h4 className="text-xl font-bold mb-4 text-white">
                        Project-Ready Clearance
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                        All milestones executed inside client replica dev-container. Zero synthetic test inflation.
                      </p>

                      <div className="space-y-3 pt-4 border-t border-slate-700/80 text-xs">
                        <div className="flex items-center gap-2.5 text-slate-200">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                          <span>16/16 Automated Test Assertions Passed</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-slate-200">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                          <span>Ottobon Principal Lead Verified</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-slate-200">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                          <span>One-Click Workday / Greenhouse Sync</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-700 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Dossier Hash: <span className="font-mono text-slate-200">#98-OB-AUDIT</span></span>
                      <span className="text-emerald-400 font-bold">Tamper-Evident</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'commits' && (
                <motion.div
                  key="commits"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Chronological Pull Request Commit Trail
                  </div>
                  {commits.map((c, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-200 flex items-center justify-between text-xs hover:border-slate-300 bg-white transition-all shadow-2xs">
                      <div className="flex items-center gap-3">
                        <GitPullRequest size={16} className="text-orange-600 shrink-0" />
                        <div>
                          <div className="font-mono font-semibold text-slate-800">{c.title}</div>
                          <div className="text-[10px] text-slate-400 font-mono mt-0.5">Commit {c.hash} · Submitted {c.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-600 font-semibold text-[11px]">
                        <CheckCircle2 size={14} /> Passed Review
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'compliance' && (
                <motion.div
                  key="compliance"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
                >
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <ShieldCheck size={24} className="text-orange-600 mx-auto mb-2" />
                    <div className="text-xs font-bold text-slate-800">SOC-2 Isolated</div>
                    <div className="text-[11px] text-slate-500 mt-1">Practice container sanitized</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <Award size={24} className="text-orange-600 mx-auto mb-2" />
                    <div className="text-xs font-bold text-slate-800">IP Clearance</div>
                    <div className="text-[11px] text-slate-500 mt-1">All rights pre-assigned</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <UserCheck size={24} className="text-orange-600 mx-auto mb-2" />
                    <div className="text-xs font-bold text-slate-800">Day-1 Absorption</div>
                    <div className="text-[11px] text-slate-500 mt-1">Instant internal transfer</div>
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
