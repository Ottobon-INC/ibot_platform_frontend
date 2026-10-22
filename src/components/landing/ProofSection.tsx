import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Rocket, LineChart, CheckCircle2, ArrowRight, Zap, Check, Lock, Sparkles, Building2 } from 'lucide-react';

interface ProofSectionProps {
  onCTA?: () => void;
}

const OUTCOMES = [
  {
    badge: 'COMMERCIAL SAFETY',
    metric: '0%',
    metricLabel: 'Bad-Hire Risk',
    icon: <ShieldCheck size={22} className="text-[#4F46E5]" />,
    title: 'Trial-to-Hire Runway',
    desc: 'Eliminate subjective interview gambles. Evaluate candidates executing live roadmap backlog features inside isolated dev-containers before extending a permanent offer.',
    tags: ['0 Upfront Placement Fees', 'All IP Rights Pre-Assigned', 'SOC-2 Sanitized Sandboxes', 'Zero Agency Lock-In'],
    highlights: [
      '30 to 90-day flexible project evaluation sprints',
      'One-click absorption into internal payroll without transfer penalties',
    ],
  },
  {
    badge: 'EXECUTION VELOCITY',
    metric: '0 Wks',
    metricLabel: 'Ramp-Up Drag',
    icon: <Rocket size={22} className="text-[#4F46E5]" />,
    title: 'Pre-Calibrated Onboarding',
    desc: 'Candidates ramp up against your actual repository conventions, lint rules, and PR standards before joining, delivering immediate velocity from day one.',
    type: 'velocity_meter',
    highlights: [
      'Zero internal engineering lead onboarding drag',
      'Pre-acclimated to your specific libraries, schemas & architecture',
    ],
  },
  {
    badge: 'AUDIT INTEGRITY',
    metric: '3.4x',
    metricLabel: 'Measurable ROI',
    icon: <LineChart size={22} className="text-[#4F46E5]" />,
    title: 'Tamper-Proof Dossier',
    desc: 'Every commit, automated test assertion, and architect review is compiled into a permanent, audit-ready executive ledger proving capability objectively.',
    type: 'audit_telemetry',
    highlights: [
      'Concrete evidence trail of real-world problem-solving',
      'Bi-directional sync with Workday, Greenhouse & Lever ATS',
    ],
  },
];

export function ProofSection({ onCTA }: ProofSectionProps) {
  return (
    <section id="outcomes" className="relative w-full py-28 sm:py-36 bg-slate-50/80 border-b border-slate-200 overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '36px 36px' }} />

      <div className="mx-auto w-full px-5 sm:px-8 max-w-[1240px] relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-[#4F46E5] font-mono text-[11px] font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={13} /> De-Risked Commercial Framework
          </div>
          <h2
            className="text-[#0F172A] font-normal mb-5 text-[38px] sm:text-[48px] leading-[1.12] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Commercial flexibility backed by <br />
            <span className="font-semibold text-[#4F46E5]">verified capability.</span>
          </h2>
          <p className="text-[#475569] text-[17px] sm:text-[19px] leading-relaxed">
            Eliminate placement guesswork and upfront recruiter lock-ins. Evaluate candidate execution inside client-replica dev-containers before committing to a permanent hire.
          </p>
        </motion.div>

        {/* 3 Enriched Outcome Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {OUTCOMES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="relative group rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)] hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between p-7 sm:p-8"
            >
              {/* Card Top: Metric Badge & Icon */}
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-mono text-[#0F172A] leading-none">
                      {item.metric}
                    </div>
                    <div className="text-[10px] text-[#4F46E5] font-mono uppercase tracking-wider font-semibold mt-1">
                      {item.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3
                  className="text-2xl text-[#0F172A] font-bold mb-3 tracking-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#475569] text-[14px] sm:text-[15px] leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>

                {/* Middle Micro-Artifact Visual */}
                {item.tags && (
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6 space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2">
                      Guaranteed Terms
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <div
                          key={tIdx}
                          className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/80 text-[11px] font-medium text-slate-700 flex items-center gap-1.5 shadow-2xs"
                        >
                          <Check size={12} className="text-emerald-500 shrink-0" />
                          <span className="truncate">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item.type === 'velocity_meter' && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6 space-y-3 font-mono">
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                      Ramp Comparison
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                        <span>Industry Standard</span>
                        <span className="text-red-500 font-semibold">6-8 Weeks Lag</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full bg-slate-400 w-1/4 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-700 font-semibold mb-1">
                        <span className="text-[#4F46E5]">IBOT Contributor</span>
                        <span className="text-emerald-600">Day 1 Review-Ready</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#4F46E5] to-emerald-500 w-full rounded-full" />
                      </div>
                    </div>
                  </div>
                )}

                {item.type === 'audit_telemetry' && (
                  <div className="p-3.5 rounded-2xl bg-slate-900 text-white border border-slate-800 mb-6 space-y-2 font-mono text-[11px]">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-slate-400 text-[10px] uppercase tracking-widest">
                      <span>Live Audit Hash</span>
                      <span className="text-emerald-400 font-semibold">#98-OB-AUDIT</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Regression Tests:</span>
                      <span className="text-emerald-400 font-bold">16/16 Passed</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Architect Approval:</span>
                      <span className="text-[#4F46E5] font-bold">Principal Signed</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Checklist */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Commercial Agreement Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
              <Building2 size={20} />
            </div>
            <div>
              <h4 className="text-[16px] sm:text-[17px] font-bold text-[#0F172A] tracking-tight">
                Flexible Commercial Models for Enterprise Procurement
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                Pilot with a 30-day single-team sprint, validate seasonal graduate cohorts, or deploy governed remote engineering pods.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onCTA}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold transition-all duration-150 shadow-sm hover:scale-[1.02] cursor-pointer shrink-0"
          >
            <span>Explore Pilot Terms</span>
            <ArrowRight size={14} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
