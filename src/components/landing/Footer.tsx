import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  function handleAnchor(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <footer
      className="border-t py-16"
      style={{
        backgroundColor: 'var(--ibot-bg-light)',
        borderColor: 'var(--ibot-border-light)',
      }}
    >
      <div
        className="mx-auto px-5 sm:px-8 md:px-12 lg:px-16"
        style={{ maxWidth: '1280px' }}
      >
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-8 border-b"
          style={{ borderColor: 'var(--ibot-border-light)' }}
        >
          {/* Brand */}
          <div className="flex items-center gap-2 select-none">
            <span
              className="font-bold text-[#0F172A] text-[22px] tracking-[-0.03em] leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              OTTOBON
            </span>
            <span className="text-[#EA580C] text-[13px] leading-none font-bold">
              ★
            </span>
            <span
              className="font-bold text-[#EA580C] text-[22px] tracking-[-0.03em] leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              IBOT
            </span>
          </div>

          {/* Navigation & Legal Links */}
          <div
            className="flex flex-wrap items-center gap-x-8 gap-y-2.5 text-[14px] text-[#475569] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <a
              href="#evidence-trail"
              onClick={(e) => handleAnchor(e, '#evidence-trail')}
              className="hover:text-[#0F172A] transition-colors duration-150"
            >
              Evidence Trail
            </a>
            <a
              href="#the-shift"
              onClick={(e) => handleAnchor(e, '#the-shift')}
              className="hover:text-[#0F172A] transition-colors duration-150"
            >
              The Gap
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleAnchor(e, '#how-it-works')}
              className="hover:text-[#0F172A] transition-colors duration-150"
            >
              How It Works
            </a>
            <a
              href="#candidate-experience"
              onClick={(e) => handleAnchor(e, '#candidate-experience')}
              className="hover:text-[#0F172A] transition-colors duration-150"
            >
              Reviewer View
            </a>
            <a
              href="#who-its-for"
              onClick={(e) => handleAnchor(e, '#who-its-for')}
              className="hover:text-[#0F172A] transition-colors duration-150"
            >
              Who It’s For
            </a>
            <a
              href="#outcomes"
              onClick={(e) => handleAnchor(e, '#outcomes')}
              className="hover:text-[#0F172A] transition-colors duration-150"
            >
              Outcomes
            </a>
            <Link
              to="/privacy"
              className="hover:text-[#0F172A] transition-colors duration-150"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#0F172A] transition-colors duration-150"
            >
              Terms
            </Link>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[13px] text-[#64748B]"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <p>© {currentYear} Ottobon Inc. All rights reserved.</p>
          <p
            className="text-[12px] text-[#64748B]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Enterprise Capability Validation &amp; Talent Readiness
          </p>
        </div>
      </div>
    </footer>
  );
}
