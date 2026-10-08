import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#253238] font-sans selection:bg-[#A74726] selection:text-white">
      {/* Top Header */}
      <header className="border-b border-[#E2DFD8] bg-[#FAF9F6]/90 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-[#253238] hover:text-[#A74726] transition-colors"
          >
            <div className="w-7 h-7 rounded-[2px] bg-[#A74726] flex items-center justify-center text-white font-bold text-xs">
              O
            </div>
            <span className="font-bold text-sm tracking-tight">Ottobon · IBOT</span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#253238] hover:text-[#A74726] bg-white px-3 py-1.5 rounded-[2px] border border-[#E2DFD8] hover:border-[#253238] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
        <div className="mb-10 pb-8 border-b border-[#E2DFD8]">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] bg-[#EAF2F5] border border-[#E2DFD8] text-[#7CA6B8] text-xs font-mono font-semibold uppercase mb-4">
            <FileText size={13} />
            <span>Commercial Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#253238] tracking-tight mb-3">
            Terms and Conditions
          </h1>
          <p className="text-sm text-[#78828A]">
            Effective Date: October 8, 2026. Last updated: October 2026.
          </p>
        </div>

        <div className="space-y-10 text-sm sm:text-base text-[#4C575D] leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              These Terms and Conditions ("Terms") govern your organization's access to and use of the Ottobon IBOT marketing website (ottobon.com) and associated consultation services provided by Ottobon ("we", "us", or "our").
            </p>
            <p>
              By accessing this website, requesting an overview, or submitting a consultation inquiry, you acknowledge that you represent an authorized corporate entity and agree to be bound by these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              2. Nature of the Platform
            </h2>
            <p>
              The IBOT model (Identify, Build, Operate, Transfer) provides modular talent capability augmentation to enterprise employers, growth stage companies, and staffing networks.
            </p>
            <p>
              Information on this website is provided for informational and architectural evaluation purposes. Specific commercial deliverables, service level agreements (SLAs), candidate guarantees, and engagement scopes are governed by separate master services agreements (MSAs) executed directly between your organization and Ottobon.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              3. Modular Engagement and Non-Disruption
            </h2>
            <p>
              Our capabilities are structured to complement, not displace, your existing hiring processes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-[#253238]">Standalone Adoption:</strong> Organizations may engage individual modules (e.g., Build-only upskilling, Operate-only project squads) or the full sequential IBOT cycle without long-term lock-in.
              </li>
              <li>
                <strong className="text-[#253238]">Zero Vendor Interference:</strong> We do not alter your internal HR policies, existing ATS pipelines, or enterprise interview loops unless specifically requested under a written agreement.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              4. Intellectual Property
            </h2>
            <p>
              All proprietary training curricula, sandbox simulation architectures, methodology documents, and branding published on this site are the exclusive property of Ottobon. Unauthorized replication, redistribution, or framing of these materials is strictly prohibited.
            </p>
            <p>
              Any customer repositories, internal toolchains, and proprietary code bases shared during customized enterprise engagements remain the exclusive property of the respective client organization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              5. Inquiry Submissions and Accuracy
            </h2>
            <p>
              By submitting corporate details via our contact forms, you confirm that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You are authorized to initiate talent inquiries on behalf of your named organization.</li>
              <li>The email address provided is an active, valid corporate domain email.</li>
              <li>You consent to receiving targeted, confidential communications regarding your stated talent requirements.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, Ottobon shall not be liable for any indirect, incidental, or consequential damages resulting from the use of or inability to use this website. All marketing representations are subject to final contract verification.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              7. Governing Law and Dispute Resolution
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of Delaware, United States, without regard to conflict of law principles. Any formal disputes arising from website interactions shall be settled through binding commercial arbitration.
            </p>
          </section>

          <section className="space-y-3 pb-6">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              8. Contact Information
            </h2>
            <p>
              For legal inquiries, terms clarification, or corporate agreement verification, please contact:
            </p>
            <div className="p-4 rounded-[2px] bg-white border border-[#E2DFD8] text-xs sm:text-sm text-[#4C575D] space-y-1 font-mono">
              <p className="font-bold text-[#253238]">Ottobon Legal & Commercial Operations</p>
              <p>Email: legal@ottobon.com</p>
              <p>Website: https://ottobon.com</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E2DFD8] bg-[#FAF9F6] py-8 text-center text-xs text-[#78828A]">
        <p>© {new Date().getFullYear()} Ottobon. All rights reserved.</p>
      </footer>
    </div>
  );
}
