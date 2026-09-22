import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, FolderKanban } from 'lucide-react';

interface AppShellProps {
  children: React.ReactNode;
}

const mobileNavItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Participants', href: '/participants', icon: Users },
  { name: 'Cohorts', href: '/cohorts', icon: FolderKanban },
];

export function AppShell({ children }: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen w-full bg-surface-base text-ink-gray-9 overflow-hidden">
      {/* Desktop Sidebar (Hidden on mobile) */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile Header (Hidden on desktop) */}
        <div className="flex min-h-12 items-center justify-between border-b border-outline-gray-2 px-4 md:hidden">
          <div className="flex items-center gap-2 font-semibold text-ink-gray-9">
            <div className="flex size-6 items-center justify-center rounded bg-ink-gray-9 text-surface-base">
              <span className="text-xs font-bold">OB</span>
            </div>
            <span>Ottobon</span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-ink-gray-7 hover:text-ink-gray-9"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Overlay Menu */}
        {mobileMenuOpen && (
          <div className="absolute inset-x-0 top-12 bottom-0 z-50 bg-surface-base md:hidden">
            <Sidebar />
          </div>
        )}

        {/* Scrollable Page Body */}
        <div className="flex-1 overflow-y-auto bg-surface-gray-1">
          {children}
        </div>

        {/* Mobile Bottom Nav */}
        <div className="flex h-14 border-t border-outline-gray-2 bg-surface-base md:hidden justify-around items-center px-2">
          {mobileNavItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex flex-col items-center gap-1 rounded p-2 text-xs transition-colors',
                  isActive 
                    ? 'text-ink-gray-9 font-medium' 
                    : 'text-ink-gray-5 hover:text-ink-gray-9'
                )}
              >
                <item.icon className="size-5 shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
