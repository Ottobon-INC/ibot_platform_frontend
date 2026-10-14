import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';

interface PhaseNavbarProps {
  onCTA: () => void;
}

const PHASES = [
  { num: '01', label: 'Identify', path: '/phases/identify' },
  { num: '02', label: 'Build', path: '/phases/build' },
  { num: '03', label: 'Operate', path: '/phases/operate' },
  { num: '04', label: 'Transfer', path: '/phases/transfer' },
];

export function PhaseNavbar({ onCTA }: PhaseNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-3 sm:py-3.5 shadow-xs'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-3.5 sm:py-4'
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-[1280px] w-full">
        
        {/* Brand & Home Link */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 focus:outline-hidden group select-none" aria-label="OTTOBON ★ IBOT">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span
                className="font-bold text-[#0F172A] text-[19px] sm:text-[21px] tracking-[-0.03em] leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                OTTOBON
              </span>
              <span className="text-[#4F46E5] text-[12px] sm:text-[14px] leading-none font-bold transition-transform group-hover:scale-125 duration-200">
                ★
              </span>
              <span
                className="font-bold text-[#4F46E5] text-[19px] sm:text-[21px] tracking-[-0.03em] leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                IBOT
              </span>
            </div>
            <span
              className="text-[9px] sm:text-[10px] font-bold text-[#4F46E5] tracking-[0.14em] uppercase px-2 py-0.5 rounded-full border border-[#4F46E5]/20 bg-[#4F46E5]/5"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Phases
            </span>
          </Link>

          <Link
            to="/"
            className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors pl-3 sm:pl-4 border-l border-slate-200 shrink-0"
          >
            <ArrowLeft size={13} />
            <span className="hidden xl:inline">Back to Overview</span>
            <span className="xl:hidden">Overview</span>
          </Link>
        </div>

        {/* Phase Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/90 p-1 rounded-2xl border border-slate-200/70 shrink-0" aria-label="Phases">
          {PHASES.map((phase) => {
            const isActive = location.pathname === phase.path;
            return (
              <Link
                key={phase.path}
                to={phase.path}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-white text-indigo-600 shadow-xs ring-1 ring-indigo-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <span className="font-mono text-[10px] opacity-60">{phase.num}</span>
                <span>{phase.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onCTA}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#4F46E5] hover:bg-[#4338CA] transition-all shadow-sm cursor-pointer shrink-0"
          >
            <span>Book a Demo</span>
            <ArrowRight size={13} />
          </button>

          <button
            type="button"
            className="lg:hidden p-2 text-[#0F172A] hover:text-[#4F46E5] cursor-pointer shrink-0"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-3 shadow-xl">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-1">
            IBOT Phases
          </div>
          {PHASES.map((phase) => {
            const isActive = location.pathname === phase.path;
            return (
              <Link
                key={phase.path}
                to={phase.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold ${
                  isActive ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs opacity-60">{phase.num}</span>
                  <span>{phase.label} Phase</span>
                </div>
                <ArrowRight size={15} />
              </Link>
            );
          })}
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center gap-1.5">
            <ArrowLeft size={13} />
            <span>Return to Overview Landing Page</span>
          </Link>
        </div>
      )}
    </header>
  );
}
