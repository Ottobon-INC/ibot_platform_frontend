import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onCTA: () => void;
}

export function Navbar({ onCTA }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  function handleAnchor(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const navLinks = [
    { label: 'Evidence Trail', href: '#evidence-trail' },
    { label: 'The Gap', href: '#the-shift' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reviewer View', href: '#candidate-experience' },
    { label: "Who It's For", href: '#who-its-for' },
    { label: 'Outcomes', href: '#outcomes' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-black/5 py-4 shadow-sm'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div
        className="mx-auto flex items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16"
        style={{ maxWidth: '1280px' }}
      >
        {/* Brand Wordmark */}
        <a
          href="/"
          className="flex items-center gap-2 focus:outline-none group select-none"
          aria-label="OTTOBON ★ IBOT"
        >
          <span
            className="font-bold text-[#0F172A] text-[20px] sm:text-[22px] tracking-[-0.03em] leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            OTTOBON
          </span>
          <span className="text-[#EA580C] text-[13px] sm:text-[14px] leading-none font-bold transition-transform group-hover:scale-125 duration-200">
            ★
          </span>
          <span
            className="font-bold text-[#EA580C] text-[20px] sm:text-[22px] tracking-[-0.03em] leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            IBOT
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              className="text-[14px] font-medium text-[#475569] hover:text-[#0F172A] transition-colors duration-150"
              style={{ fontFamily: 'var(--font-sans)', letterSpacing: '-0.01em' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onCTA}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] transition-all duration-150 shadow-sm border border-transparent"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <span>Request a Demo</span>
            <ArrowRight size={13} />
          </button>

          <button
            type="button"
            className="lg:hidden p-2 text-[#0F172A] hover:text-[#EA580C]"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-t border-black/5 px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-[16px] font-semibold text-[#475569] hover:text-[#0F172A] py-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-black/5 mt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCTA();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md text-[15px] font-semibold text-white bg-[#0F172A] transition-all duration-150"
              >
                <span>Request a Demo</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
