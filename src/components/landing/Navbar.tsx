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
          ? 'bg-[#09090B]/90 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] py-4 shadow-xl'
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
          className="flex items-center gap-3 focus:outline-none"
          aria-label="IBOT by Ottobon"
        >
          <span
            className="font-bold text-white text-[22px] tracking-[-0.03em] leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            IBOT
          </span>
          <span
            className="hidden sm:inline text-[10px] font-bold text-[#A1A1AA] tracking-[0.14em] uppercase px-2 py-0.5 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            by Ottobon
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              className="text-[14px] font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-150"
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
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold text-white bg-[#4338CA] hover:bg-[#4F46E5] transition-all duration-150 shadow-md shadow-[#4338CA]/25 border border-white/10"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <span>Request a Demo</span>
            <ArrowRight size={13} />
          </button>

          <button
            type="button"
            className="lg:hidden p-2 text-[#A1A1AA] hover:text-white"
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
        <div className="lg:hidden bg-[#09090B]/98 backdrop-blur-2xl border-t border-[rgba(255,255,255,0.1)] px-6 py-6 shadow-2xl">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-[16px] font-semibold text-[#A1A1AA] hover:text-white py-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[rgba(255,255,255,0.1)] mt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCTA();
                }}
                className="w-full btn-primary-glow justify-center py-3"
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
