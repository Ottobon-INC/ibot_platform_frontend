import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Rocket, Network, CheckCircle2, ShieldCheck, ArrowRight, Layers, Workflow, Check, Cpu } from 'lucide-react';

const ECOSYSTEM_TRACKS = [
  {
    id: 'enterprise',
    icon: <Building2 size={22} className="text-indigo-600" />,
    title: 'Enterprise Teams',
    subtitle: 'Internal Cohort Upskilling & Validation',
    metric: '0 hrs / wk',
    metricLabel: 'Lead Drag Required',
    pipeline: [
      { step: '01', name: 'Stack Replica' },
      { step: '02', name: 'Automated Loop' },
      { step: '03', name: 'Audit Scoring' }
    ],
    summary: 'Validate incoming cohorts on real system replicas without pulling engineering leads away from product delivery.',
    integrations: ['Workday', 'Greenhouse', 'GitHub Enterprise', 'AWS / GCP']
  },
  {
    id: 'scaleups',
    icon: <Rocket size={22} className="text-indigo-600" />,
    title: 'Growing Companies',
    subtitle: 'On-Demand AI Capability Injection',
    metric: '100% Day-1',
    metricLabel: 'Production Velocity',
    pipeline: [
      { step: '01', name: 'Pre-Vetted Talent' },
      { step: '02', name: 'Backlog Sprints' },
      { step: '03', name: 'Seamless Offer' }
    ],
    summary: 'Deploy pre-verified remote AI engineers who ship real backlog features before permanent hiring commitments.',
    integrations: ['Lever', 'Slack', 'Jira', 'GitHub']
  },
  {
    id: 'staffing',
    icon: <Network size={22} className="text-indigo-600" />,
    title: 'Staffing & Talent Partners',
    subtitle: 'Elevated Candidate Credibility',
    metric: '3.4x Higher',
    metricLabel: 'Placement Acceptance',
    pipeline: [
      { step: '01', name: 'Candidate Intake' },
      { step: '02', name: 'Sandbox Proof' },
      { step: '03', name: 'ATS Sync' }
    ],
    summary: 'Stand out across supplier networks by backing candidate submissions with verified, tamper-proof proof-of-work.',
    integrations: ['Bullhorn', 'Greenhouse', 'Workday', 'Lever']
  }
];

const COMMITMENTS = [
  {
    icon: <ShieldCheck size={18} className="text-emerald-600 shrink-0" />,
    title: 'Zero Daily Lead Overhead',
    desc: 'Managed entirely by Ottobon Principal Architects'
  },
  {
    icon: <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />,
    title: 'Full ATS Compatibility',
    desc: 'Bi-directional webhooks with Greenhouse, Lever & Workday'
  },
  {
    icon: <Cpu size={18} className="text-emerald-600 shrink-0" />,
    title: 'Dedicated Sandboxes',
    desc: 'SOC-2 compliant isolated environments mirroring client repos'
  }
];

export function EcosystemSection() {
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);

  return (
    <section id="ecosystem" className="relative w-full py-24 sm:py-32 bg-slate-50/60 border-b border-slate-200 overflow-hidden">
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 max-w-[1200px]">

        {/* Section Header - Streamlined & High Impact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-600 font-mono text-[11px] font-bold uppercase tracking-wider mb-4">
            <Workflow size={13} /> Ecosystem Architecture
          </div>
          <h2
            className="text-slate-900 font-bold mb-4 text-[34px] sm:text-[44px] leading-[1.12] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Strengthening the <br />
            <span className="text-indigo-600">talent supply chain.</span>
          </h2>
          <p className="text-slate-600 text-[16px] sm:text-[18px] leading-relaxed">
            One governed framework tailored for enterprise cohorts, fast-growing teams, and elite staffing partners.
          </p>
        </motion.div>

        {/* 3 Visual Ecosystem Cards - Low Text, High Signal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {ECOSYSTEM_TRACKS.map((track, idx) => {
            const isHovered = hoveredTrack === track.id;

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                onMouseEnter={() => setHoveredTrack(track.id)}
                onMouseLeave={() => setHoveredTrack(null)}
                className={`bg-white rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isHovered
                    ? 'border-indigo-300 shadow-xl -translate-y-1'
                    : 'border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                {/* Top Header & Stat Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {track.icon}
                    </div>
                    
                    {/* Outcome Metric Pill */}
                    <div className="text-right">
                      <div className="text-sm sm:text-base font-bold text-slate-900 font-mono leading-none">
                        {track.metric}
                      </div>
                      <div className="text-[10px] text-indigo-600 font-mono uppercase tracking-wider font-semibold mt-1">
                        {track.metricLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {track.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mb-4">
                    {track.subtitle}
                  </div>

                  {/* 1-Sentence High-Impact Summary */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-6">
                    {track.summary}
                  </p>
                </div>

                {/* Micro-Pipeline Visual (Replaces wordy bullet lists) */}
                <div className="pt-5 border-t border-slate-100 space-y-4">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                    Governed Workflow
                  </div>
                  
                  <div className="grid grid-cols-3 gap-1.5">
                    {track.pipeline.map((p, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-center flex flex-col justify-center min-h-[52px]"
                      >
                        <span className="text-[9px] font-mono text-indigo-600 font-bold leading-none mb-1">
                          {p.step}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                          {p.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tool Integration Badges */}
                  <div className="pt-3 flex flex-wrap items-center gap-1.5">
                    {track.integrations.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100/80 border border-slate-200/60 text-[10px] font-medium text-slate-600 font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Operational Commitments Bar - Unified & Ultra-Compact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {COMMITMENTS.map((item, cIdx) => (
              <div
                key={cIdx}
                className={`flex items-start gap-3.5 ${cIdx !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}
              >
                <div className="mt-0.5">{item.icon}</div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
