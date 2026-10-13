import React, { useState } from 'react';
import { PhaseNavbar } from '../../components/phases/PhaseNavbar';
import { Footer } from '../../components/landing/Footer';
import { LeadModal } from '../../components/landing/LeadModal';
import { IdentifyHero } from '../../components/phases/identify/IdentifyHero';
import { IdentifyProblemSection } from '../../components/phases/identify/IdentifyProblemSection';
import { EvaluationCanvas } from '../../components/phases/identify/EvaluationCanvas';
import { FilteringWorkflow } from '../../components/phases/identify/FilteringWorkflow';
import { CandidateDossier } from '../../components/phases/identify/CandidateDossier';
import { BusinessValueSection } from '../../components/phases/identify/BusinessValueSection';
import { IdentifyCtaSection } from '../../components/phases/identify/IdentifyCtaSection';

export default function IdentifyPhase() {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToEvaluationMethods = () => {
    const el = document.getElementById('evaluation-methods');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--ibot-bg-dark)] text-[var(--ibot-text-on-dark)] font-sans selection:bg-[#EA580C] selection:text-white">
      {/* Universal Phase Navigation */}
      <PhaseNavbar onCTA={() => setModalOpen(true)} />

      {/* Main Page Flow - Approved 7-Section Architecture */}
      <main className="pt-24 sm:pt-28">
        {/* Section 01: Hero Section */}
        <IdentifyHero
          onOpenModal={() => setModalOpen(true)}
          onExploreMethods={scrollToEvaluationMethods}
        />

        {/* Section 02: The Hiring Problem (Conventional Screening Limitations) */}
        <IdentifyProblemSection />

        {/* Section 03: Configurable Evaluation Canvas (9 Optional Methods) */}
        <EvaluationCanvas onOpenModal={() => setModalOpen(true)} />

        {/* Section 04: How IBOT Filtering Works (6-Stage Locked Pipeline) */}
        <FilteringWorkflow />

        {/* Section 05: What Employers Receive (Candidate Dossier & 80.5% Scorecard) */}
        <CandidateDossier />

        {/* Section 06: Business Value & Strategy (Clearer Signals. Better-Informed Hiring Decisions.) */}
        <BusinessValueSection />

        {/* Section 07: Final CTA (See How IBOT Fits Your Hiring Process) */}
        <IdentifyCtaSection onOpenModal={() => setModalOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer onCTA={() => setModalOpen(true)} />

      {/* Enterprise Consultation Lead Capture Modal */}
      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        preset="Identify (Assessment)"
      />
    </div>
  );
}
