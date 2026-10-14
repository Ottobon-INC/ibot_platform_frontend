import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, FileCheck, Award, Lock, Sparkles, UserCheck, RefreshCw, FolderGit2 } from 'lucide-react';
import { PhaseNavbar } from '../../components/phases/PhaseNavbar';
import { Footer } from '../../components/landing/Footer';
import { LeadModal } from '../../components/landing/LeadModal';

export default function TransferPhase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'dossier' | 'ip' | 'onboarding'>('dossier');

  const pillars = [
    {
      icon: <FileCheck size={24} className="text-indigo-600" />,
      title: 'Audit-Ready Executive Dossier',
      desc: 'Complete chronological history of every task delivered, PR merged, architecture RFC reviewed, and regression test passed—giving executive teams indisputable evidence of delivery.',
      highlights: ['Full code review history & audit trail', '5-axis adaptability and velocity index', 'Eliminates hiring guesswork and buyer regret']
    },
    {
      icon: <Sparkles size={24} className="text-indigo-600" />,
      title: 'Zero Day-One Ramp-Up Lag',
      desc: 'Because the engineer has already shipped production code in your tech stack during the Operate phase, day one on your payroll yields 100% immediate delivery velocity.',
      highlights: ['Instant contributor productivity', 'Familiar with team communication cadences', 'Zero 6-to-8 week onboarding downtime']
    },
    {
      icon: <Lock size={24} className="text-indigo-600" />,
      title: 'Frictionless IP & HR Transition',
      desc: 'Clean legal transfer of intellectual property, repository permissions, SOC-2 compliance certifications, and 1-click candidate profile synchronization into Workday or Greenhouse.',
      highlights: ['Full legal IP assignment & NDA guarantees', 'IAM permission & key rotation protocol', 'Zero recruiter commission or broker markups']
    }
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
            <CheckCircle2 size={14} /> Phase 04 · Frictionless Transition
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Absorb proven contributors. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-600">
              With zero Day-One ramp lag.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-[18px] sm:text-[20px] max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Transition tested, culture-aligned talent directly onto your payroll and internal infrastructure. Backed by tamper-proof capability dossiers, clean IP handover, and zero recruiter broker fees.
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
              Plan Your Talent Transfer
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 font-medium text-base hover:bg-slate-50 transition-colors shadow-2xs"
            >
              Return to Framework Overview <ArrowRight size={16} />
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

        {/* ── INTERACTIVE EXHIBIT: EXECUTIVE HANDOVER LEDGER ── */}
        <section className="px-5 sm:px-8 max-w-[1100px] mx-auto mb-28">
          <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">
                  Executive Handover Verification
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Talent Transition & Readiness Dossier
                </h3>
              </div>
              
              {/* Tab Selector */}
              <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveTab('dossier')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'dossier' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Readiness Dossier
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ip')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'ip' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  IP & Compliance
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('onboarding')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'onboarding' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Day-1 Productivity
                </button>
              </div>
            </div>

            {/* Tab Contents */}
            <AnimatePresence mode="wait">
              {activeTab === 'dossier' && (
                <motion.div
                  key="dossier-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-center sm:text-left"
                >
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs font-mono text-slate-400 uppercase mb-1">Production PRs Merged</div>
                    <div className="text-3xl font-bold text-white font-mono">14 PRs</div>
                    <div className="text-xs text-slate-400 mt-1">100% peer review approval</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs font-mono text-slate-400 uppercase mb-1">Adaptability Index</div>
                    <div className="text-3xl font-bold text-indigo-400 font-mono">9.6 / 10</div>
                    <div className="text-xs text-slate-400 mt-1">Verified on distributed services</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs font-mono text-slate-400 uppercase mb-1">Offer Conversion Rate</div>
                    <div className="text-3xl font-bold text-emerald-400 font-mono">94%</div>
                    <div className="text-xs text-slate-400 mt-1">High retention after handover</div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'ip' && (
                <motion.div
                  key="ip-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8 space-y-3 font-mono text-xs"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-300">
                    <span className="font-bold text-white">LEGAL & INTELLECTUAL PROPERTY CLEARANCE</span>
                    <span className="text-emerald-400 font-bold">100% TRANSFERRED</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 pt-2 font-sans text-sm">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong>IP Assignment Agreement:</strong> Complete assignment executed under standard enterprise jurisdiction.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong>IAM Key Migration:</strong> Direct transfer of GitHub Enterprise and cloud staging IAM access.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong>SOC-2 Compliance History:</strong> Complete background checks and clean sandbox compliance logs.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong>Zero Recruiter Markups:</strong> Direct onboarding with zero broker fees or restrictive covenants.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'onboarding' && (
                <motion.div
                  key="onboarding-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8 font-mono text-xs space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400">
                    <span>Onboarding Friction Comparison</span>
                    <span className="text-indigo-400 font-bold">DAY-1 PRODUCTIVITY GUARANTEE</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-sans">
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-slate-300">
                      <div className="text-red-400 font-bold mb-2">Traditional Direct Hire:</div>
                      <ul className="space-y-1.5 text-xs text-slate-400">
                        <li>• 6 to 8 weeks ramp-up time before first production PR</li>
                        <li>• 12+ hrs/wk senior lead burden answering onboarding questions</li>
                        <li>• 25% probation churn due to unverified real-world execution</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-slate-300">
                      <div className="text-emerald-400 font-bold mb-2">IBOT Transfer Transition:</div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        <li>• 0 days ramp lag (already shipped 14+ PRs on your stack)</li>
                        <li>• 0 hrs/wk senior engineer onboarding burden</li>
                        <li>• Proven culture, communication, and engineering alignment</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Assurance */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Protected by verified code contribution history and legal IP assignment.</span>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-indigo-400 font-bold hover:underline cursor-pointer"
              >
                Schedule Talent Transition Consultation →
              </button>
            </div>

          </div>
        </section>

        {/* ── PHASE PROGRESSION STEPPER ── */}
        <section className="px-5 sm:px-8 max-w-[900px] mx-auto text-center">
          <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              to="/phases/operate"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 font-medium"
            >
              <ArrowLeft size={16} /> Previous: Phase 03 Operate
            </Link>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">
                Completed Full Lifecycle
              </span>
              <h4 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                Ready to transform your tech pipeline?
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-all cursor-pointer shadow-sm"
            >
              Connect With Us <ArrowRight size={16} />
            </button>
          </div>
        </section>

      </main>

      <Footer />

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        preset="Transfer Phase Consultation"
      />
    </div>
  );
}
