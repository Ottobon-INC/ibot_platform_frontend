import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ============================================================
// FadeUp: Controlled opacity and subtle translate on scroll
// ============================================================
interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
}

export function FadeUp({
  children,
  className = '',
  delay = 0,
  yOffset = 8,
  duration = 0.35,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration,
        ease: [0.2, 0.8, 0.2, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================================
// SectionWrap: Warm Ink tonal section containers
// Tints:
//   'light'   → #FAFAF7  (cream 50) — default page canvas
//   'alt'     → #F4F3EE  (cream 100) — alternate section
//   'dark'    → #1A1915  (ink 900)
//   'deep'    → #0D0D0B  (ink 950)
//   'white'   → #FFFFFF
// Legacy aliases kept for ApproachSection compatibility
// ============================================================
interface SectionWrapProps {
  id?: string;
  white?: boolean;
  alt?: boolean;
  tint?: 'default' | 'light' | 'alt' | 'cool' | 'blue' | 'warm' | 'dark' | 'deep' | 'white';
  children: React.ReactNode;
  className?: string;
}

export function SectionWrap({
  id,
  white = false,
  alt = false,
  tint,
  children,
  className = '',
}: SectionWrapProps) {
  let bgClass = '';

  if (tint === 'deep' || tint === 'dark') {
    bgClass = 'bg-[#09090B] text-[#FAFAFA] border-b border-[rgba(255,255,255,0.08)]';
  } else if (tint === 'alt' || tint === 'warm' || tint === 'cool' || tint === 'blue' || alt) {
    bgClass = 'bg-[#F8F9FA] text-[#09090B] border-b border-[rgba(0,0,0,0.08)]';
  } else if (tint === 'white' || white) {
    bgClass = 'bg-white text-[#09090B] border-b border-[rgba(0,0,0,0.08)]';
  } else {
    // default / 'light'
    bgClass = 'bg-[#F8F9FA] text-[#09090B] border-b border-[rgba(0,0,0,0.08)]';
  }

  return (
    <section
      id={id}
      className={`relative w-full ${bgClass} ${className}`}
    >
      <div
        className="mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16"
        style={{ maxWidth: '1240px' }}
      >
        {children}
      </div>
    </section>
  );
}
