import React, { useState } from 'react';
import { SectionWrap } from './primitives';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  RotateCcw,
  Shield,
  Layers,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

/* =========================================================================
   CUSTOM EDITORIAL VECTOR GRAPHICS (Updated to Ottobon Ink / Blue / Teal)
   ========================================================================= */

// 1. Face Card: Unified IBOT Framework Art
function IbotFaceSvg() {
  return (
    <svg viewBox="0 0 280 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="ibot-dot-grid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.75" fill="#74818C" fillOpacity="0.4" />
        </pattern>
      </defs>
      <rect width="280" height="180" fill="url(#ibot-dot-grid)" />
      
      {/* Central orbital rings */}
      <circle cx="140" cy="90" r="58" stroke="#DCE4EA" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="140" cy="90" r="42" stroke="#182432" strokeWidth="1.5" strokeOpacity="0.15" />

      {/* 4 Connected Pipeline Nodes */}
      {/* Node 1: Top Left - I */}
      <line x1="140" y1="90" x2="88" y2="52" stroke="#315F8C" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="88" cy="52" r="16" fill="#FFFFFF" stroke="#182432" strokeWidth="1.5" />
      <text x="88" y="56" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#182432">I</text>

      {/* Node 2: Top Right - B */}
      <line x1="140" y1="90" x2="192" y2="52" stroke="#315F8C" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="192" cy="52" r="16" fill="#FFFFFF" stroke="#182432" strokeWidth="1.5" />
      <text x="192" y="56" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#182432">B</text>

      {/* Node 3: Bottom Right - O */}
      <line x1="140" y1="90" x2="192" y2="128" stroke="#315F8C" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="192" cy="128" r="16" fill="#FFFFFF" stroke="#182432" strokeWidth="1.5" />
      <text x="192" y="132" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#182432">O</text>

      {/* Node 4: Bottom Left - T */}
      <line x1="140" y1="90" x2="88" y2="128" stroke="#315F8C" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="88" cy="128" r="16" fill="#FFFFFF" stroke="#182432" strokeWidth="1.5" />
      <text x="88" y="132" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#182432">T</text>

      {/* Center Core Badge */}
      <circle cx="140" cy="90" r="22" fill="#182432" />
      <text x="140" y="94" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#FFFFFF" letterSpacing="0.05em">
        IBOT
      </text>

      {/* Subtle calibration crosshairs */}
      <line x1="140" y1="20" x2="140" y2="30" stroke="#74818C" strokeWidth="1" />
      <line x1="140" y1="150" x2="140" y2="160" stroke="#74818C" strokeWidth="1" />
      <line x1="20" y1="90" x2="30" y2="90" stroke="#74818C" strokeWidth="1" />
      <line x1="250" y1="90" x2="260" y2="90" stroke="#74818C" strokeWidth="1" />
    </svg>
  );
}

// 2. Phase 01: Identify (Screening / Code Reasoning Prism)
function PhaseIdentifySvg() {
  return (
    <svg viewBox="0 0 280 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="identify-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.6" fill="#74818C" fillOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="280" height="180" fill="url(#identify-dots)" />
      
      {/* Terminal / Code evaluation frame */}
      <rect x="50" y="32" width="180" height="116" rx="8" fill="#FFFFFF" stroke="#182432" strokeWidth="1.2" />
      <line x1="50" y1="56" x2="230" y2="56" stroke="#DCE4EA" strokeWidth="1" />
      <circle cx="64" cy="44" r="3" fill="#182432" fillOpacity="0.3" />
      <circle cx="74" cy="44" r="3" fill="#182432" fillOpacity="0.3" />
      <circle cx="84" cy="44" r="3" fill="#182432" fillOpacity="0.3" />

      {/* Terminal Text Lines */}
      <rect x="64" y="68" width="56" height="5" rx="2.5" fill="#315F8C" />
      <rect x="126" y="68" width="70" height="5" rx="2.5" fill="#DCE4EA" />
      <rect x="64" y="82" width="110" height="5" rx="2.5" fill="#DCE4EA" />
      <rect x="64" y="96" width="85" height="5" rx="2.5" fill="#DCE4EA" />

      {/* Verification Stamp */}
      <g transform="translate(145, 90)">
        <rect width="72" height="24" rx="4" fill="#EDF5F4" stroke="#4F7F7A" strokeWidth="1" />
        <text x="36" y="16" textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#4F7F7A">
          CALIBRATED
        </text>
      </g>
    </svg>
  );
}

// 3. Phase 02: Build (Sandbox / Git Construction)
function PhaseBuildSvg() {
  return (
    <svg viewBox="0 0 280 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="build-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.6" fill="#74818C" fillOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="280" height="180" fill="url(#build-dots)" />

      {/* Git Tree & Sandbox Container */}
      <rect x="45" y="30" width="190" height="120" rx="8" fill="#FFFFFF" stroke="#182432" strokeWidth="1.2" />
      
      {/* Git Commit Line */}
      <line x1="80" y1="50" x2="80" y2="130" stroke="#74818C" strokeWidth="2" />
      <circle cx="80" cy="62" r="6" fill="#FFFFFF" stroke="#182432" strokeWidth="2" />
      <circle cx="80" cy="92" r="6" fill="#315F8C" stroke="#315F8C" strokeWidth="2" />
      <circle cx="80" cy="122" r="6" fill="#4F7F7A" stroke="#4F7F7A" strokeWidth="2" />

      {/* Branch Path */}
      <path d="M 80 62 Q 110 62 110 82 L 110 102 Q 110 122 80 122" stroke="#74818C" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

      {/* Sandbox Specs on right */}
      <rect x="125" y="52" width="92" height="18" rx="4" fill="#EEF4F8" stroke="#DCE4EA" strokeWidth="1" />
      <text x="171" y="64" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#182432">devcontainer: up</text>

      <rect x="125" y="80" width="92" height="18" rx="4" fill="#EEF4F8" stroke="#DCE4EA" strokeWidth="1" />
      <text x="171" y="92" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#182432">tests: 48/48 pass</text>

      <rect x="125" y="108" width="92" height="18" rx="4" fill="#EDF5F4" stroke="#4F7F7A" strokeWidth="1" />
      <text x="171" y="120" textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#4F7F7A">PR #104 ready</text>
    </svg>
  );
}

// 4. Phase 03: Operate (Supervised Sprint / Telemetry)
function PhaseOperateSvg() {
  return (
    <svg viewBox="0 0 280 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="operate-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.6" fill="#74818C" fillOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="280" height="180" fill="url(#operate-dots)" />

      {/* Telemetry Scope & Reviewer Pair */}
      <rect x="45" y="30" width="190" height="120" rx="8" fill="#FFFFFF" stroke="#182432" strokeWidth="1.2" />

      {/* Sprint Velocity Sparkline */}
      <path d="M 60 115 L 90 95 L 120 102 L 150 75 L 180 82 L 215 55" stroke="#182432" strokeWidth="2" fill="none" />
      <circle cx="215" cy="55" r="4" fill="#315F8C" />

      {/* Baseline Dashed Line */}
      <line x1="60" y1="125" x2="220" y2="125" stroke="#DCE4EA" strokeWidth="1" strokeDasharray="3 3" />

      {/* Reviewer Sign-off pill */}
      <g transform="translate(60, 42)">
        <rect width="96" height="20" rx="10" fill="#EEF4F8" stroke="#DCE4EA" strokeWidth="1" />
        <circle cx="12" cy="10" r="4" fill="#4F7F7A" />
        <text x="56" y="14" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#182432">
          tech lead paired
        </text>
      </g>
    </svg>
  );
}

// 5. Phase 04: Transfer (Handover Dossier / Key Seal)
function PhaseTransferSvg() {
  return (
    <svg viewBox="0 0 280 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="transfer-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.6" fill="#74818C" fillOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="280" height="180" fill="url(#transfer-dots)" />

      {/* Dossier Card with Shield */}
      <rect x="55" y="30" width="170" height="120" rx="8" fill="#FFFFFF" stroke="#182432" strokeWidth="1.2" />
      
      {/* Certificate Header Line */}
      <line x1="75" y1="52" x2="205" y2="52" stroke="#DCE4EA" strokeWidth="1" />

      {/* Shield Crest in center */}
      <g transform="translate(125, 62)">
        <path d="M 15 5 L 28 10 L 28 25 Q 28 38 15 45 Q 2 38 2 25 L 2 10 Z" fill="#EDF5F4" stroke="#4F7F7A" strokeWidth="1.5" />
        <path d="M 10 24 L 14 28 L 21 19" stroke="#4F7F7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Handover Stamp */}
      <rect x="75" y="118" width="130" height="18" rx="4" fill="#182432" />
      <text x="140" y="130" textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#FFFFFF">
        PHASE OWNER APPROVED
      </text>
    </svg>
  );
}

/* =========================================================================
   PHASES DATA SPECIFICATION (Exact Authoritative Copy)
   ========================================================================= */

interface Phase {
  num: string;
  letter: string;
  title: string;
  subhead: string;
  desc: string;
  detail: string;
  gate: string;
  optional?: boolean;
  svg: () => React.JSX.Element;
}

const PHASES: Phase[] = [
  {
    num: '01',
    letter: 'I',
    title: 'Identify',
    subhead: 'ROLE CALIBRATION',
    desc: 'Assess people against the requirements of the role.',
    detail: 'Filtering for code reasoning and problem navigation under ambiguous specifications. Optional module based on your current screening pipeline.',
    gate: 'Cognitive problem navigation verified',
    optional: true,
    svg: PhaseIdentifySvg,
  },
  {
    num: '02',
    letter: 'B',
    title: 'Build',
    subhead: 'PRACTICAL SKILL NURTURING',
    desc: 'Develop relevant skills through structured learning and practical tasks.',
    detail: 'Hands-on problem solving inside sandboxes matching your exact repository stack, dev-containers, and internal code conventions.',
    gate: 'Autonomous PR verification & test pass',
    optional: false,
    svg: PhaseBuildSvg,
  },
  {
    num: '03',
    letter: 'O',
    title: 'Operate',
    subhead: 'SUPERVISED EXECUTION',
    desc: 'Observe performance through practical work and reviewer feedback.',
    detail: 'Contributors paired with experienced Ottobon technical leads delivering live sprint milestones without draining your senior staff.',
    gate: 'Production milestone code review sign-off',
    optional: false,
    svg: PhaseOperateSvg,
  },
  {
    num: '04',
    letter: 'T',
    title: 'Transfer',
    subhead: 'DIRECT TEAM HANDOVER',
    desc: 'Bring the evidence forward to support hiring or deployment decisions.',
    detail: 'Complete knowledge transfer and repository familiarity aligned to your standard offer and onboarding cycle.',
    gate: 'Phase owner handover approval',
    optional: false,
    svg: PhaseTransferSvg,
  },
];

/* =========================================================================
   MAIN COMPONENT: APPROACH SECTION (PRESERVED STRUCTURE & BEHAVIOR)
   ========================================================================= */

export function ApproachSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedPhaseIdx, setExpandedPhaseIdx] = useState<number | null>(null);
  const [isHoveringDeck, setIsHoveringDeck] = useState(false);

  return (
    <SectionWrap id="how-it-works" tint="alt" className="py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="max-w-xl">
          <p
            className="uppercase mb-3 font-bold text-[#4338CA] text-[11px] tracking-[0.18em]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            The Operating Model
          </p>
          <h2
            className="mb-3 font-normal text-[#09090B] text-[30px] sm:text-[38px] leading-[1.12] tracking-[-0.015em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            A Structured Path from Potential to Delivery.
          </h2>
          <p
            className="text-[15px] sm:text-[16px] text-[#4B5563] leading-relaxed max-w-[48ch]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            The journey is configured for each program run. Phase owners review and approve progression at every gate.
          </p>
        </div>

        {/* State Toggle Bar */}
        <div
          className="flex items-center gap-1.5 self-start md:self-end p-1 rounded-xl text-xs"
          style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--ibot-border-light)' }}
        >
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors"
            style={{
              backgroundColor: !isExpanded ? 'rgba(67, 56, 202, 0.12)' : 'transparent',
              color: !isExpanded ? '#4338CA' : '#71717A',
              fontWeight: !isExpanded ? 600 : 500,
              fontFamily: 'var(--font-sans)',
            }}
          >
            <Layers size={13} />
            <span>IBOT Face Card</span>
          </button>
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors"
            style={{
              backgroundColor: isExpanded ? 'rgba(67, 56, 202, 0.12)' : 'transparent',
              color: isExpanded ? '#4338CA' : '#71717A',
              fontWeight: isExpanded ? 600 : 500,
              fontFamily: 'var(--font-sans)',
            }}
          >
            <ArrowUpRight size={13} />
            <span>Open All 4 Phases</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Deck / Expanded Content Container */}
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          /* =================================================================
             COLLAPSED STATE: STACKED CARD DECK (PRESERVED ARCHITECTURE)
             ================================================================= */
          <motion.div
            key="collapsed-deck-view"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center py-6 sm:py-10"
          >
            {/* The Physical Card Stack Container */}
            <div
              className="relative w-full max-w-[340px] sm:max-w-[370px] min-h-[490px] sm:min-h-[520px] cursor-pointer select-none group"
              onClick={() => setIsExpanded(true)}
              onMouseEnter={() => setIsHoveringDeck(true)}
              onMouseLeave={() => setIsHoveringDeck(false)}
            >
              {/* Card 4 Behind (Transfer - tilted left) */}
              <motion.div
                animate={
                  isHoveringDeck
                    ? { rotate: -10, x: -18, y: -4, scale: 0.94 }
                    : { rotate: -5.5, x: -8, y: -2, scale: 0.95 }
                }
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="absolute inset-0 bg-[#E2E9F0] border border-lp-border rounded-[28px] shadow-sm pointer-events-none"
              >
                <div className="p-6 opacity-30">
                  <div className="h-44 bg-[#D5E0EB] rounded-[20px] mb-4" />
                  <div className="h-3 w-16 bg-[#C5D5E3] rounded mb-2" />
                  <div className="h-6 w-28 bg-[#C5D5E3] rounded" />
                </div>
              </motion.div>

              {/* Card 3 Behind (Operate - tilted right) */}
              <motion.div
                animate={
                  isHoveringDeck
                    ? { rotate: 8, x: 16, y: 0, scale: 0.96 }
                    : { rotate: 4.5, x: 7, y: 0, scale: 0.97 }
                }
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="absolute inset-0 bg-[#EBF1F6] border border-lp-border rounded-[28px] shadow-sm pointer-events-none"
              >
                <div className="p-6 opacity-40">
                  <div className="h-44 bg-[#DEE9F2] rounded-[20px] mb-4" />
                  <div className="h-3 w-16 bg-[#C5D5E3] rounded mb-2" />
                  <div className="h-6 w-28 bg-[#C5D5E3] rounded" />
                </div>
              </motion.div>

              {/* Card 2 Behind (Build - slightly counter-angled) */}
              <motion.div
                animate={
                  isHoveringDeck
                    ? { rotate: -4, x: -8, y: -2, scale: 0.98 }
                    : { rotate: -2, x: -3, y: -1, scale: 0.99 }
                }
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="absolute inset-0 bg-[#F3F7FA] border border-lp-border rounded-[28px] shadow-sm pointer-events-none"
              >
                <div className="p-6 opacity-50">
                  <div className="h-44 bg-[#EAF1F6] rounded-[20px] mb-4" />
                  <div className="h-3 w-16 bg-[#DCE4EA] rounded mb-2" />
                  <div className="h-6 w-28 bg-[#DCE4EA] rounded" />
                </div>
              </motion.div>

              {/* Top Face Card: Displays "IBOT" (Front & Center) */}
              <motion.div
                animate={
                  isHoveringDeck
                    ? { y: -8, scale: 1.01 }
                    : { y: 0, scale: 1 }
                }
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                className="relative bg-lp-surface border border-lp-border rounded-[28px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(24,36,50,0.08)] group-hover:shadow-[0_25px_60px_rgba(24,36,50,0.14)] transition-shadow duration-300 z-10"
              >
                {/* Top Inset Graphic Frame */}
                <div className="relative bg-lp-section-blue border border-lp-border rounded-[20px] h-48 sm:h-52 overflow-hidden flex items-center justify-center p-3 mb-5">
                  <IbotFaceSvg />

                  {/* Top Right Circle Button with Arrow */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-lp-heading text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                    <ArrowUpRight size={16} />
                  </div>

                  {/* Bottom Right Monogram Pill Badge */}
                  <div className="absolute bottom-3 right-3 bg-lp-heading text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider shadow-xs">
                    IBOT
                  </div>
                </div>

                {/* Subhead / Category */}
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-lp-muted font-semibold mb-1">
                  GOVERNED FRAMEWORK
                </div>

                {/* Card Title */}
                <h3 className="text-2xl sm:text-[26px] font-semibold text-lp-heading tracking-tight leading-tight mb-2.5">
                  The IBOT Pathway
                </h3>

                {/* Body Text */}
                <p className="text-xs sm:text-[13px] text-lp-body leading-relaxed mb-5 font-normal">
                  A four-phase pipeline that verifies how people perform before you hire or deploy them. Click to open and inspect each phase.
                </p>

                {/* Divider Line */}
                <div className="border-t border-lp-border pt-4 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-lp-muted uppercase tracking-wider text-[10px]">
                    4 Governed Phases
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-lp-cta-primary group-hover:underline">
                    <span>Open all 4 cards</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Click Prompt Hint */}
            <p className="mt-5 text-xs text-lp-muted font-normal flex items-center gap-1.5">
              <span>Click card deck or choose &ldquo;Open All 4 Phases&rdquo; above</span>
            </p>
          </motion.div>
        ) : (
          /* =================================================================
             EXPANDED STATE: ALL 4 CARDS OPEN (I · B · O · T)
             ================================================================= */
          <motion.div
            key="expanded-grid-view"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* Quick Header Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-lp-border text-xs">
              <span className="text-lp-heading font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lp-teal" />
                <span>Showing 4 Governed Phases in Sequence</span>
              </span>

              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-1.5 text-lp-muted hover:text-lp-heading font-medium transition-colors"
              >
                <RotateCcw size={12} />
                <span>Collapse to IBOT Face Card</span>
              </button>
            </div>

            {/* The 4 Individual Cards Spread Out Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {PHASES.map((phase, idx) => {
                const SvgComponent = phase.svg;
                const isDetailOpen = expandedPhaseIdx === idx;

                return (
                  <motion.div
                    key={phase.num}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06, duration: 0.28 }}
                    className={`bg-lp-surface border rounded-[26px] p-5 shadow-[0_12px_32px_rgba(24,36,50,0.06)] hover:shadow-[0_18px_44px_rgba(24,36,50,0.10)] transition-all duration-200 flex flex-col justify-between ${
                      isDetailOpen
                        ? 'border-lp-cta-primary ring-1 ring-lp-cta-primary/30'
                        : 'border-lp-border hover:border-lp-border-inter'
                    }`}
                  >
                    <div>
                      {/* Top Inset Graphic Frame */}
                      <div className="relative bg-lp-section-blue border border-lp-border rounded-[18px] h-40 sm:h-44 overflow-hidden flex items-center justify-center p-2 mb-4">
                        <SvgComponent />

                        {/* Top Right Stage Arrow Button */}
                        <button
                          type="button"
                          onClick={() => setExpandedPhaseIdx(isDetailOpen ? null : idx)}
                          aria-label={`Toggle details for ${phase.title}`}
                          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-lp-heading text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                        >
                          <ArrowUpRight size={14} />
                        </button>

                        {/* Bottom Right Monogram Badge */}
                        <div className="absolute bottom-2.5 right-2.5 bg-lp-heading text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider shadow-xs">
                          {phase.num} / {phase.letter}
                        </div>
                      </div>

                      {/* Subhead */}
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-lp-muted font-semibold mb-1">
                        PHASE {phase.num} · {phase.subhead}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-[22px] font-semibold text-lp-heading tracking-tight mb-2">
                        {phase.title}
                      </h3>

                      {/* Core Authoritative Description */}
                      <p className="text-xs sm:text-[13px] text-lp-body leading-relaxed mb-4 font-normal">
                        {phase.desc}
                      </p>
                    </div>

                    {/* Bottom Area with Divider & Gate Details */}
                    <div>
                      <div className="border-t border-lp-border pt-3.5 space-y-2.5">
                        {/* Approval Gate Badge */}
                        <div className="flex items-start gap-1.5 text-[11px] text-lp-heading font-medium leading-tight">
                          <Shield size={13} className="text-lp-teal shrink-0 mt-0.5" />
                          <span>Gate: {phase.gate}</span>
                        </div>

                        {/* Optional Module or Core Flag */}
                        <div className="flex items-center justify-between text-[10px] text-lp-muted font-mono pt-1">
                          <span>
                            {phase.optional ? '[ OPTIONAL MODULE ]' : '[ CORE GATE ]'}
                          </span>
                          
                          <button
                            type="button"
                            onClick={() => setExpandedPhaseIdx(isDetailOpen ? null : idx)}
                            className="text-lp-cta-primary font-sans hover:underline flex items-center gap-0.5 font-semibold"
                          >
                            <span>{isDetailOpen ? 'Less' : 'Details'}</span>
                            {isDetailOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                          </button>
                        </div>

                        {/* Expandable Deep Dive Drawer */}
                        <AnimatePresence>
                          {isDetailOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pt-2 text-[11px] text-lp-body leading-relaxed border-t border-lp-border"
                            >
                              <div className="p-2.5 bg-lp-bg rounded border border-lp-border">
                                <span className="font-semibold text-lp-heading block mb-1">
                                  Program Execution:
                                </span>
                                {phase.detail}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Governance Note */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-lp-muted">
              <span>
                Progression is reviewed and approved by the phase owner. Not all runs require every phase.
              </span>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-1.5 text-lp-cta-primary hover:underline font-semibold"
              >
                <RotateCcw size={11} />
                <span>Return to stacked deck</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrap>
  );
}
