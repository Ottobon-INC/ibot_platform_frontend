import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck } from 'lucide-react';

interface ProgramPreset {
  id: string;
  name: string;
  description: string;
  activePhases: string[];
}

const PRESETS: ProgramPreset[] = [
  {
    id: 'full',
    name: 'Standard Full-Time Hire',
    description: 'Comprehensive 4-phase journey ensuring architectural reasoning, pull request execution, and coachability before extending permanent offers.',
    activePhases: ['identify', 'build', 'operate', 'transfer'],
  },
  {
    id: 'contract',
    name: 'Urgent Contractor Surge',
    description: 'Bypasses the optional Identify screen to immediately test hands-on codebase execution velocity and test coverage.',
    activePhases: ['build', 'operate'],
  },
  {
    id: 'partner',
    name: 'External Staffing Placement',
    description: 'Pre-screens role specifications and validates sandbox execution with formal client stakeholder handover.',
    activePhases: ['identify', 'build', 'transfer'],
  },
];

const PHASES = [
  {
    id: 'identify',
    num: '01',
    name: 'Identify',
    badge: 'Optional Stage',
    purpose: 'Problem Framing & System Diagnostic',
    owner: 'Hiring Manager / Talent Lead',
    gateRule: 'Explicit panel approval on architectural reasoning before sandbox release',
  },
  {
    id: 'build',
    num: '02',
    name: 'Build',
    badge: 'Core Evaluation',
    purpose: 'Sandbox Execution & Automated Tests',
    owner: 'Senior Tech Lead',
    gateRule: 'All automated assertions passing with clean commit hygiene',
  },
  {
    id: 'operate',
    num: '03',
    name: 'Operate',
    badge: 'Collaboration Gate',
    purpose: 'Peer Code Review & Iteration',
    owner: 'Principal Engineer',
    gateRule: 'Demonstrated adaptation to reviewer critique with zero regressions',
  },
  {
    id: 'transfer',
    num: '04',
    name: 'Transfer',
    badge: 'Final Sign-Off',
    purpose: 'Readiness Dossier & Handover',
    owner: 'VP of Engineering / Delivery Lead',
    gateRule: 'Final executive deployment sign-off recorded in permanent audit ledger',
  },
];

export function EcosystemSection() {
  const [selectedPresetId, setSelectedPresetId] = useState('full');
  const activePreset = PRESETS.find((p) => p.id === selectedPresetId)!;

  return (
    <section
      id="configuration"
      className="relative w-full py-24 sm:py-32 border-b text-white overflow-hidden"
      style={{
        backgroundColor: 'var(--ibot-bg-dark)',
        borderColor: 'var(--ibot-border-dark)',
      }}
    >
      {/* ── Background Ambient Depth ── */}
      <div
        className="pointer-events-none absolute top-1/3 right-1/4 w-[700px] h-[450px] rounded-full blur-[150px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(67, 56, 202, 0.4) 0%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16"
        style={{ maxWidth: '1240px' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <p
            className="text-[11px] tracking-[0.18em] uppercase font-bold mb-3 text-[#818CF8]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Configurable Program Runs
          </p>
          <h2
            className="text-[#FAFAFA] font-normal mb-4 text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.12] tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Keep Your Process. Add Evidence Where You Need It.
          </h2>
          <p
            className="text-[#A1A1AA] text-[16px] sm:text-[17px] leading-[1.6] max-w-[54ch]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            You do not need to replace your existing recruiting or development operations. Configure modular Program Runs that align with your exact workflow, activate specific gates, and assign stage owners.
          </p>
        </motion.div>

        {/* Preset Selector */}
        <div
          className="flex flex-wrap items-center gap-2.5 mb-8 border-b pb-5"
          style={{ borderColor: 'var(--ibot-border-dark)' }}
        >
          {PRESETS.map((p) => {
            const isActive = p.id === selectedPresetId;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPresetId(p.id)}
                className="px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-150 border"
                style={{
                  backgroundColor: isActive ? 'var(--ibot-accent-primary)' : 'rgba(255, 255, 255, 0.03)',
                  borderColor: isActive ? 'var(--ibot-accent-bright)' : 'var(--ibot-border-dark)',
                  color: isActive ? '#FFFFFF' : '#A1A1AA',
                  fontFamily: 'var(--font-sans)',
                  boxShadow: isActive ? '0 4px 16px rgba(67, 56, 202, 0.35)' : 'none',
                }}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        {/* Active Preset Description */}
        <div className="mb-8 max-w-2xl">
          <p className="text-[14px] sm:text-[15px] text-[#A1A1AA] leading-relaxed">
            {activePreset.description}
          </p>
        </div>

        {/* ── 4 Modular Phase Sequence ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHASES.map((phase) => {
            const isEnabled = activePreset.activePhases.includes(phase.id);
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-5 sm:p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between"
                style={{
                  backgroundColor: isEnabled ? 'var(--ibot-bg-dark-card)' : 'rgba(18, 18, 22, 0.4)',
                  borderColor: isEnabled ? 'var(--ibot-accent-bright)' : 'var(--ibot-border-dark)',
                  opacity: isEnabled ? 1 : 0.45,
                  boxShadow: isEnabled ? '0 8px 24px -4px rgba(67, 56, 202, 0.15)' : 'none',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[11px] font-semibold"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color: isEnabled ? '#818CF8' : '#71717A',
                      }}
                    >
                      Phase {phase.num}
                    </span>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded font-mono"
                      style={{
                        backgroundColor: isEnabled ? 'rgba(67, 56, 202, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                        color: isEnabled ? '#818CF8' : '#71717A',
                      }}
                    >
                      {isEnabled ? 'Active Gate' : 'Bypassed'}
                    </span>
                  </div>

                  <h3
                    className="text-[19px] font-normal text-[#FAFAFA] mb-0.5"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {phase.name}
                  </h3>
                  <div className="text-[11px] text-[#818CF8] font-medium mb-3 font-mono">
                    {phase.badge}
                  </div>

                  <p className="text-[13px] text-[#A1A1AA] leading-relaxed mb-5">
                    {phase.purpose}
                  </p>
                </div>

                <div className="space-y-2.5 pt-3.5 border-t" style={{ borderColor: 'var(--ibot-border-dark)' }}>
                  <div>
                    <div className="text-[10px] text-[#71717A] uppercase font-mono">Phase Sign-Off Lead</div>
                    <div className="text-[12px] font-medium text-[#FAFAFA] mt-0.5">{phase.owner}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#71717A] uppercase font-mono">Gate Rule</div>
                    <div className="text-[11px] text-[#A1A1AA] mt-0.5 leading-snug">{phase.gateRule}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explicit Owner Control Assurance */}
        <div
          className="mt-10 pt-5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[12px] text-[#71717A]"
          style={{ borderColor: 'var(--ibot-border-dark)', fontFamily: 'var(--font-sans)' }}
        >
          <div className="flex items-center gap-2">
            <UserCheck size={15} className="text-[#10B981]" />
            <span>Candidate progression requires explicit owner sign-off. Zero automated or opaque hiring decisions.</span>
          </div>
          <span className="font-mono text-[#818CF8]">Customizable per requisition</span>
        </div>

      </div>
    </section>
  );
}
