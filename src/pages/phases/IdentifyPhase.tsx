import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, CheckCircle2, ArrowRight, Layers, Cpu, Server, FileCheck } from 'lucide-react';
import { PhaseNavbar } from '../../components/phases/PhaseNavbar';
import { Footer } from '../../components/landing/Footer';
import { LeadModal } from '../../components/landing/LeadModal';

export default function IdentifyPhase() {
  const [modalOpen, setModalOpen] = useState(false);

  const pillars = [
    {
      icon: <Server size={24} className="text-orange-600" />,
      title: 'Production-Replica Baseline',
      desc: 'Before any code is reviewed, IBOT provisions an isolated dev-container mapped directly to your actual tech stack, database schemas, and API conventions.',
      highlights: ['Custom IAM roles & mock dependencies', 'Zero access to proprietary live credentials', 'Authentic developer tooling environment']
    },
    {
      icon: <Cpu size={24} className="text-orange-600" />,
      title: 'Learnability & Judgment Indexing',
      desc: 'Rather than testing memorized algorithms, our diagnostics measure how rapidly an engineer navigates unfamiliar documentation, digests edge cases, and isolates root causes.',
      highlights: ['Ambiguity navigation scoring', 'Real-world problem deconstruction', 'Eliminates synthetic interview prep bias']
    },
    {
      icon: <Layers size={24} className="text-orange-600" />,
      title: 'Zero ATS Disruption',
      desc: 'Seamlessly connects with your existing applicant tracking systems (Greenhouse, Lever, Workday) through real-time webhooks without altering team workflows.',
      highlights: ['Automatic candidate status synchronization', 'Standardized scorecards pushed directly to ATS', 'Zero workflow changes for hiring managers']
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
            <Terminal size={14} /> Phase 01 · Diagnostic Calibration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Pinpoint learnability. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-orange-600">
              Not resume keywords.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-[18px] sm:text-[20px] max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Run your standard recruitment process as usual, or snap in Ottobon's specialized diagnostic sandbox when filtering for high-ambiguity roles and emerging AI technologies.
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
              Calibrate Your Pipeline
            </button>
            <Link
              to="/phases/build"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 font-medium text-base hover:bg-slate-50 transition-colors shadow-2xs"
            >
              Explore Next: Build Phase <ArrowRight size={16} />
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

        {/* ── INTERACTIVE EXHIBIT: SAMPLE DIAGNOSTIC SCORECARD ── */}
        <section className="px-5 sm:px-8 max-w-[1100px] mx-auto mb-28">
          <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-1">
                  Sample Diagnostic Output
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Learnability Calibration Ledger
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                  SOC-2 Sandbox Verified
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-center sm:text-left">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase mb-1">Stack Authenticity</div>
                <div className="text-3xl font-bold text-white font-mono">100%</div>
                <div className="text-xs text-slate-400 mt-1">Mirrors client production repo</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase mb-1">Learnability Index</div>
                <div className="text-3xl font-bold text-orange-400 font-mono">9.4 / 10</div>
                <div className="text-xs text-slate-400 mt-1">High ambiguity adaptability</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase mb-1">Manager Overhead</div>
                <div className="text-3xl font-bold text-emerald-400 font-mono">0 Hours</div>
                <div className="text-xs text-slate-400 mt-1">Fully managed evaluation</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <FileCheck size={16} className="text-emerald-400" />
                <span>Standardized evaluation ready to export directly into your ATS pipeline.</span>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-orange-400 font-bold hover:underline cursor-pointer"
              >
                Request Sample Diagnostic Scorecard →
              </button>
            </div>
          </div>
        </section>

        {/* ── PHASE PROGRESSION STEPPER ── */}
        <section className="px-5 sm:px-8 max-w-[900px] mx-auto text-center">
          <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">
              Next Stage in the Lifecycle
            </span>
            <h4 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to see how skills are nurtured?
            </h4>
            <Link
              to="/phases/build"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 text-white font-semibold text-sm hover:bg-orange-700 transition-all cursor-pointer shadow-sm"
            >
              Proceed to Phase 02: Build <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        preset="Identify Phase Consultation"
      />
    </div>
  );
}
