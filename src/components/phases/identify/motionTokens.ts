// =========================================================================
// src/components/phases/identify/motionTokens.ts
// Centralized motion design tokens and storytelling animations for /phases/identify
// Principles: Purposeful product storytelling, subtle (4-10px), short durations,
// smooth enterprise easings (Linear/Stripe style), accessible keyboard/focus,
// full reduced-motion support.
// =========================================================================

import { Transition, Variants } from 'framer-motion';

/** Standard durations (seconds) */
export const MOTION_DURATIONS = {
  instant: 0.15,
  hover: 0.18,
  micro: 0.22,
  standard: 0.32,
  entrance: 0.42,
  slow: 0.55,
  assembly: 0.65,
  pipelineDraw: 0.85,
} as const;

/** Standard cubic-bezier easings */
export const MOTION_EASINGS = {
  // Smooth deceleration - standard for modern enterprise UI (Linear / Stripe)
  easeOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  easeInOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  gentle: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  // Bouncy spring for tactile docking
  tactileSpring: { type: 'spring', stiffness: 420, damping: 28 } as const,
  gentleSpring: { type: 'spring', stiffness: 260, damping: 24 } as const,
} as const;

/** Standard transitions */
export const transitions = {
  hover: {
    duration: MOTION_DURATIONS.hover,
    ease: MOTION_EASINGS.easeOut,
  } as Transition,

  entrance: {
    duration: MOTION_DURATIONS.entrance,
    ease: MOTION_EASINGS.easeOut,
  } as Transition,

  tabSwitch: {
    duration: MOTION_DURATIONS.micro,
    ease: MOTION_EASINGS.easeOut,
  } as Transition,

  drawer: {
    duration: MOTION_DURATIONS.standard,
    ease: MOTION_EASINGS.easeOut,
  } as Transition,

  blueprintDock: {
    type: 'spring',
    stiffness: 380,
    damping: 26,
  } as Transition,

  coverageBar: {
    duration: 0.5,
    ease: MOTION_EASINGS.easeOut,
  } as Transition,
};

/** Reusable entrance variants */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.entrance,
  },
};

/** Container stagger variants */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

/** Tab content slide/fade variant */
export const tabContentVariants: Variants = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Interactive button hover preset */
export const buttonHoverProps = {
  whileHover: { scale: 1.015, y: -1 },
  whileTap: { scale: 0.985, y: 0 },
  transition: transitions.hover,
};

/** Interactive card hover preset */
export const cardHoverProps = {
  whileHover: { y: -2 },
  transition: transitions.hover,
};

// =========================================================================
// Signature Storytelling Tokens
// =========================================================================

/** Hero Evidence Assembly Stage Timing Schedule (in seconds) */
export const HERO_ASSEMBLY_TIMINGS = {
  headerReveal: 0.05,
  module04: 0.3,
  module06: 0.5,
  module07: 0.7,
  compositeBar: 0.95,
  scoreReveal: 1.25,
  hrGate: 1.45,
  auditFormula: 1.65,
} as const;

/** Pipeline Journey Stage Timing Schedule */
export const JOURNEY_TIMINGS = {
  railDrawDuration: 0.9,
  nodeStagger: 0.12,
  pulseCycle: 2.4,
} as const;

