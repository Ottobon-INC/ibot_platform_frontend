import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
            <Shield size={13} />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#253238] tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#78828A]">
            Effective Date: October 8, 2026. Last updated: October 2026.
          </p>
        </div>

        <div className="space-y-10 text-sm sm:text-base text-[#4C575D] leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              1. Overview and Scope
            </h2>
            <p>
              Ottobon ("we," "our," or "us") operates the IBOT talent capability platform and website (ottobon.com). This Privacy Policy explains how we collect, handle, use, and protect enterprise inquiry information and personal data when business leaders, talent partners, and engineering executives interact with our platform.
            </p>
            <p>
              We treat corporate inquiries with the highest level of confidentiality. We do not sell, rent, or monetize corporate contact records.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              2. Information We Collect
            </h2>
            <p>
              When requesting an architectural consultation or submitting an inquiry via our contact modules, we collect the following business details:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-[#253238]">Business Identification:</strong> Name, work email address, company or organization name, and corporate title or role.
              </li>
              <li>
                <strong className="text-[#253238]">Pipeline Requirements:</strong> Specific talent capability requirements, primary stages of interest (Identify, Build, Operate, Transfer), and technical stack context submitted in inquiry forms.
              </li>
              <li>
                <strong className="text-[#253238]">Technical Telemetry:</strong> Standard non-identifying server log data, browser user agent, IP address, and platform diagnostic timestamps necessary for security operations.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              3. Purpose and Legal Basis
            </h2>
            <p>We process collected information solely for legitimate enterprise business purposes, including:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Preparing tailored talent capability architecture proposals and pipeline blueprints.</li>
              <li>Scheduling confidential discovery discussions with authorized enterprise representatives.</li>
              <li>Verifying organizational identity and preventing fraudulent or unauthorized submissions.</li>
              <li>Maintaining audit records of contractual interactions and platform availability.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              4. Non-Solicitation and Privacy Commitments
            </h2>
            <p>
              We respect your internal team integrity. When conducting discovery conversations or evaluating candidate pipelines:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>We never contact internal engineers or recruitment personnel without explicit organizational authorization.</li>
              <li>We never share your tech stack specs, hiring gaps, or company roadmap with external commercial parties.</li>
              <li>Inquiry data is isolated from public systems and accessible strictly by designated Ottobon partner leads.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              5. Data Sharing and Third Parties
            </h2>
            <p>We do not share inquiry data with marketing networks or advertisers. Disclosures occur strictly under the following narrow circumstances:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-[#253238]">Infrastructure Providers:</strong> Secure enterprise cloud and hosting providers operating under confidentiality agreements.
              </li>
              <li>
                <strong className="text-[#253238]">Legal Obligations:</strong> Compliance with applicable statutory requirements, regulatory proceedings, or enforceable governmental requests.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              6. Data Security and Retention
            </h2>
            <p>
              We employ industry-standard encryption, strict role-based access controls, and regular infrastructure audits to safeguard organizational information. Information is retained only as long as necessary to fulfill the business purposes outlined in this policy or to comply with statutory legal requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              7. Your Rights
            </h2>
            <p>
              Enterprise representatives may request access to, correction of, or deletion of their submitted business contact information at any time. Inquiries may be directed to our designated compliance contact.
            </p>
          </section>

          <section className="space-y-3 pb-6">
            <h2 className="text-lg font-bold text-[#253238] tracking-tight">
              8. Contact Information
            </h2>
            <p>
              For privacy-related inquiries, data verification requests, or security notices, please contact:
            </p>
            <div className="p-4 rounded-[2px] bg-white border border-[#E2DFD8] text-xs sm:text-sm text-[#4C575D] space-y-1 font-mono">
              <p className="font-bold text-[#253238]">Ottobon Legal and Data Protection</p>
              <p>Email: privacy@ottobon.com</p>
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
