import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Code2, Briefcase, Network, CheckCircle2 } from 'lucide-react';

const AUDIENCES = [
  {
    icon: <Users size={22} />,
    role: 'Talent Leaders',
    coreNeed: 'Signal before the offer.',
    solution: 'Eliminate subjective interviews. Get concrete, reproducible evidence of how candidates actually build and adapt under real requirements.',
    highlights: ['Standardized learnability signals', 'Zero resume keyword bias', 'Accelerated hiring cycles']
  },
  {
    icon: <Code2 size={22} />,
    role: 'Engineering Leaders',
    coreNeed: 'Readiness before production.',
    solution: 'Candidates complete sandbox tasks mirrored on your conventions. Inspect pull requests, test coverage, and coachability before day one.',
    highlights: ['Zero onboarding drag on senior engineers', 'Real production stack replicas', 'Atomic diffs and commit hygiene']
  },
  {
    icon: <Briefcase size={22} />,
    role: 'Capability Leaders',
    coreNeed: 'Direct connection to role.',
    solution: 'Move past static completion certificates. Benchmark actual capability gaps across realistic operational milestones and emerging AI workflows.',
    highlights: ['Measurable competency metrics', 'Role-specific learning paths', 'Verified problem-solving adaptability']
  },
  {
    icon: <Network size={22} />,
    role: 'Workforce Partners',
    coreNeed: 'Pre-validated placements.',
    solution: 'Deliver pre-tested contributors backed by audited sandbox execution records on the client’s exact stack without redundant screening rounds.',
    highlights: ['Higher placement acceptance rate', 'Tamper-evident candidate proof', 'Differentiated vendor capability']
  },
];

export function IntegrationSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeAudience = AUDIENCES[activeTab];

  return (
    <section id="who-its-for" className="relative w-full py-28 sm:py-36 bg-white border-b border-slate-200 overflow-hidden">
      <div className="mx-auto w-full px-5 sm:px-8 max-w-[1200px] relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 sm:mb-20">
          <div className="text-[11px] font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">
            ALIGNED BY LEADERSHIP ROLE
          </div>
          <h2 className="text-[#0F172A] font-normal mb-6 text-[38px] sm:text-[48px] leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Built for enterprise <br className="sm:hidden" /> <span className="font-semibold text-orange-600">decision makers.</span>
          </h2>
          <p className="text-slate-600 text-[17px] sm:text-[19px] max-w-2xl mx-auto">
            Select your leadership focus to see how IBOT solves your exact capability bottleneck.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Interactive Tab Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {AUDIENCES.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 relative overflow-hidden flex flex-col justify-center cursor-pointer ${
                    isActive 
                      ? 'border-orange-500 bg-orange-50/70 shadow-md ring-1 ring-orange-500/20 translate-x-1' 
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {item.icon}
                      </div>
                      <h3 className={`text-lg font-bold transition-colors ${isActive ? 'text-orange-600' : 'text-slate-900'}`}>
                        {item.role}
                      </h3>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-orange-600" />
                    )}
                  </div>
                  <div className="text-xs sm:text-[13px] font-mono text-slate-500 mt-2.5 font-semibold tracking-wide pl-12">
                    {item.coreNeed}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Persona Solution Card (Clean AnimatePresence, No Scroll Trap!) */}
          <div className="lg:col-span-7 rounded-[2rem] bg-slate-900 shadow-2xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col justify-between min-h-[420px]">
            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-500/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="relative z-10 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-orange-400 shadow-inner">
                      {activeAudience.icon}
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {activeAudience.role} Focus
                    </span>
                  </div>
                  
                  <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-white leading-tight">
                    {activeAudience.coreNeed}
                  </h4>
                  
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-light mb-8">
                    {activeAudience.solution}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-slate-800">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Key Outcomes
                    </div>
                    {activeAudience.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-3 text-sm text-slate-200">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs sm:text-sm text-slate-400">
                  <span>Selected Focus: <strong className="text-white">{activeAudience.role}</strong></span>
                  <div className="flex items-center gap-1.5">
                    {AUDIENCES.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setActiveTab(dotIdx)}
                        aria-label={`Switch to tab ${dotIdx + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          dotIdx === activeTab ? 'bg-orange-500 w-6' : 'bg-slate-700 hover:bg-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
          
        </div>

        {/* Live Governance & Zero-Overhead Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-200/80 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                OB
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Ottobon Guided Project Run: Core API & AI Orchestration
                </h4>
                <div className="text-xs text-slate-500 font-mono">
                  Managed delivery sprint with zero client management drag
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Active Governed Sprint
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold mb-1">
                Internal Lead Time Required
              </div>
              <div className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
                0 hrs / wk
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">Optimal internal allocation</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold mb-1">
                Sprint Velocity
              </div>
              <div className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                94 pts <span className="text-xs text-emerald-600 font-normal font-mono">100% on schedule</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">Continuous delivery cadence</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold mb-1">
                Lead Oversight
              </div>
              <div className="text-sm font-bold text-slate-900 leading-snug">
                Ottobon Principal Architect
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Reviewing PRs & enforcing standards</div>
            </div>
          </div>

          {/* Active Milestone Progress Bar */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-bold text-slate-900">Sprint Milestones:</span>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>Day-1 Tasks (15/20)</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>PR Reviews (8 Approved)</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>Security & License Clearance</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px] shrink-0">
              <span>ATS Integration:</span>
              <span className="font-semibold text-emerald-600">Auto-Synced</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
