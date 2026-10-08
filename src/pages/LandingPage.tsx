import React, { useState } from 'react';
import { Navbar } from '../components/landing/Navbar';
import { Hero } from '../components/landing/Hero';
import { ShiftSection } from '../components/landing/ShiftSection';
import { NurturingSection } from '../components/landing/NurturingSection';
import { ApproachSection } from '../components/landing/ApproachSection';
import { CandidateExperienceSection } from '../components/landing/CandidateExperienceSection';
import { IntegrationSection } from '../components/landing/IntegrationSection';
import { EcosystemSection } from '../components/landing/EcosystemSection';
import { ProofSection } from '../components/landing/ProofSection';
import { CTASection } from '../components/landing/CTASection';
import { Footer } from '../components/landing/Footer';
import { LeadModal } from '../components/landing/LeadModal';

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPreset, setModalPreset] = useState<string | undefined>(undefined);

  function handleOpenCTA(preset?: string) {
    setModalPreset(preset);
    setModalOpen(true);
  }

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans selection:bg-[#4338CA] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "IBOT by Ottobon",
            "operatingSystem": "Web",
            "applicationCategory": "BusinessApplication",
            "description": "Enterprise talent validation and readiness platform.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      <Navbar onCTA={() => handleOpenCTA()} />

      <main id="main-content">
        <Hero onCTA={() => handleOpenCTA()} />
        <ShiftSection />
        <NurturingSection />
        <ApproachSection />
        <CandidateExperienceSection />
        <IntegrationSection />
        <EcosystemSection />
        <ProofSection onCTA={() => handleOpenCTA()} />
        <CTASection onCTA={() => handleOpenCTA()} />
      </main>

      <Footer />

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        preset={modalPreset}
      />
    </div>
  );
}
