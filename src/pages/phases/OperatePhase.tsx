import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GitPullRequest, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Users, Clock, Award, Activity, Check, GitCommit, FileCode } from 'lucide-react';
import { PhaseNavbar } from '../../components/phases/PhaseNavbar';
import { Footer } from '../../components/landing/Footer';
import { LeadModal } from '../../components/landing/LeadModal';

export default function OperatePhase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'sprint' | 'reviews' | 'sla'>('sprint');

  const pillars = [
    {
      icon: <Users size={24} className="text-indigo-600" />,
      title: 'Principal Architect Oversight',
      desc: 'An assigned Ottobon Principal Architect manages daily standups, breaks down complex stories, and enforces code standards, completely shielding your internal engineering leads.',
      highlights: ['0 hrs / wk client lead management overhead', 'Daily standup & sprint coordination', 'Rigorous PR review & quality gates']
    },
    {
      icon: <GitPullRequest size={24} className="text-indigo-600" />,
      title: 'Real Roadmap Feature Delivery',
      desc: 'Rather than sitting in synthetic sandbox loops, engineers write code for real backlog items, shipping tested features and integrations into client staging environments.',
      highlights: ['True production velocity tracking', 'CI/CD pipeline and lint adherence', 'Direct milestone accountability']
    },
    {
      icon: <Clock size={24} className="text-indigo-600" />,
      title: 'De-risked Trial-to-Hire Runway',
      desc: 'Evaluate technical judgment, communication clarity, and teamwork dynamics over 4 to 12 weeks of live delivery before making permanent hiring or payroll commitments.',
      highlights: ['Zero hiring risk or sunk severance cost', 'Transparent velocity and quality scorecards', 'Seamless progression into Transfer phase']
    }
  ];

  const sprintItems = [
    { id: 'OTT-204', title: 'Implement idempotency key middleware on billing webhook router', status: 'Completed', pts: 8, lead: 'Approved by Principal Architect' },
    { id: 'OTT-208', title: 'Refactor connection pool timeout & add exponential backoff retry', status: 'Completed', pts: 5, lead: '100% Test Coverage' },
    { id: 'OTT-211', title: 'Provision OpenTelemetry distributed trace context propagation', status: 'In Review', pts: 8, lead: 'Lead Review Pending' },
    { id: 'OTT-215', title: 'Migrate legacy user role authorization to fine-grained RBAC cache', status: 'In Progress', pts: 13, lead: 'In Development' },
  ];

  return (
    <div className="min-h-screen bg-[var(--ibot-bg-light)] text-[var(--ibot-text-on-light)] font-sans selection:bg-[#4F46E5] selection:text-white">
      <PhaseNavbar onCTA={() => setModalOpen(true)} />

      <main className="pt-28 sm:pt-36 pb-24">
        
        {/* ── HERO BANNER ── */}
        <section className="px-5 sm:px-8 max-w-[1200px] mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-600 font-mono text-xs font-bold uppercase tracking-widest mb-6"
          >
            <GitPullRequest size={14} /> Phase 03 · Guided Project Delivery
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Execute real features today. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-600">
              With zero internal lead drag.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-[18px] sm:text-[20px] max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Deploy remote, pre-vetted engineers directly on your product roadmap under the continuous governance of Ottobon Principal Architects. Deliver production milestones before making formal hiring commitments.
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
              className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-base shadow-lg shadow-indigo-500/20 cursor-pointer transition-all hover:scale-[1.02]"
            >
              Spin Up Guided Delivery Team
            </button>
            <Link
              to="/phases/transfer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 font-medium text-base hover:bg-slate-50 transition-colors shadow-2xs"
            >
              Explore Next: Transfer Phase <ArrowRight size={16} />
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
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
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

        {/* ── INTERACTIVE EXHIBIT: MULTI-TIER GOVERNANCE CONSOLE ── */}
        <section className="px-5 sm:px-8 max-w-[1100px] mx-auto mb-28">
          <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">
                  Live Project Governance Console
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Guided Delivery & Quality Assurance
                </h3>
              </div>
              
              {/* Tab Selector */}
              <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveTab('sprint')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'sprint' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Active Sprint
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('reviews')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'reviews' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  PR Reviews
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('sla')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'sla' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Zero-Lead SLA
                </button>
              </div>
            </div>

            {/* Tab Contents */}
            <AnimatePresence mode="wait">
              {activeTab === 'sprint' && (
                <motion.div
                  key="sprint-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 mb-8"
                >
                  {sprintItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded">
                          {item.id}
                        </span>
                        <span className="font-medium text-slate-200">{item.title}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-mono shrink-0">
                        <span className="text-slate-400">{item.pts} pts</span>
                        <span className={`px-2.5 py-0.5 rounded-full ${
                          item.status === 'Completed'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : item.status === 'In Review'
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {item.status}
                        </span>
                        <span className="text-slate-400 hidden md:inline">{item.lead}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div
                  key="reviews-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8 font-mono text-xs space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400">
                    <span>Pull Request #89: idempotency-billing-fix</span>
                    <span className="text-emerald-400">STATUS: APPROVED & READY FOR STAGING</span>
                  </div>
                  <div className="text-slate-300 leading-relaxed font-sans text-sm">
                    <strong>Review from Ottobon Principal Architect:</strong> "Clean atomic changes. Redis key TTL properly scoped to 24h with lock acquisition fallback. Benchmark run showed zero performance degradation on concurrent webhook spikes. Merge approved."
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-slate-400 text-xs">
                    <div>Assertions: <span className="text-white">24/24 Passed</span></div>
                    <div>SonarQube: <span className="text-emerald-400">0 Vulnerabilities</span></div>
                    <div>Coverage: <span className="text-white">96.8%</span></div>
                    <div>Lead Time: <span className="text-indigo-400">0 Client Hours</span></div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'sla' && (
                <motion.div
                  key="sla-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-center sm:text-left"
                >
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs font-mono text-slate-400 uppercase mb-1">Internal Lead Burden</div>
                    <div className="text-3xl font-bold text-emerald-400 font-mono">0 hrs / wk</div>
                    <div className="text-xs text-slate-400 mt-1">Ottobon leads handle daily governance</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs font-mono text-slate-400 uppercase mb-1">Sprint Velocity</div>
                    <div className="text-3xl font-bold text-indigo-400 font-mono">94 pts / sprint</div>
                    <div className="text-xs text-slate-400 mt-1">Consistent production throughput</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs font-mono text-slate-400 uppercase mb-1">Client Offer Risk</div>
                    <div className="text-3xl font-bold text-white font-mono">0% Sunk Cost</div>
                    <div className="text-xs text-slate-400 mt-1">Hiring decision backed by weeks of proof</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Assurance */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Protected by dedicated Ottobon Principal Architect oversight on every commit.</span>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-indigo-400 font-bold hover:underline cursor-pointer"
              >
                Discuss Guided Delivery Teams →
              </button>
            </div>

          </div>
        </section>

        {/* ── PHASE PROGRESSION STEPPER ── */}
        <section className="px-5 sm:px-8 max-w-[900px] mx-auto text-center">
          <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              to="/phases/build"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 font-medium"
            >
              <ArrowLeft size={16} /> Previous: Phase 02 Build
            </Link>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">
                Final Stage in the Lifecycle
              </span>
              <h4 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                Frictionless Organizational Handover
              </h4>
            </div>
            <Link
              to="/phases/transfer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-all cursor-pointer shadow-sm"
            >
              Proceed to Phase 04: Transfer <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        preset="Operate Phase Consultation"
      />
    </div>
  );
}
