import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, FolderKanban, Settings, HelpCircle, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  count?: number;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Participants', href: '/participants', icon: Users, count: 12 },
  { name: 'Cohorts', href: '/cohorts', icon: FolderKanban },
];

const bottomNavItems: NavItem[] = [
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Help & Support', href: '/help', icon: HelpCircle },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full w-[14rem] flex-col border-r border-outline-gray-2 bg-surface-base">
      {/* Sidebar Header */}
      <div className="flex min-h-12 items-center px-4">
        <Link to="/dashboard" className="flex items-center gap-2 font-semibold text-ink-gray-9">
          <div className="flex size-6 items-center justify-center rounded bg-ink-gray-9 text-surface-base">
            <span className="text-xs font-bold">OB</span>
          </div>
          <span>Ottobon</span>
        </Link>
      </div>

      {/* Main Nav (ScrollArea equivalent) */}
      <div className="min-h-0 flex-1 overflow-y-auto px-2 pt-0.5 pb-10">
        <div className="space-y-0.5">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'group flex h-7 items-center gap-2 rounded px-2 text-sm transition-colors',
                  isActive 
                    ? 'bg-surface-gray-2 text-ink-gray-9 font-medium' 
                    : 'text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9'
                )}
              >
                <item.icon className="size-4 shrink-0" />
                <span className="flex-1 truncate">{item.name}</span>
                {item.count !== undefined && (
                  <span className="mr-1 text-xs text-ink-gray-5">{item.count}</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="mt-auto border-t border-outline-gray-1 px-2 py-3">
        <div className="space-y-0.5">
          {bottomNavItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'group flex h-7 items-center gap-2 rounded px-2 text-sm transition-colors',
                  isActive 
                    ? 'bg-surface-gray-2 text-ink-gray-9 font-medium' 
                    : 'text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9'
                )}
              >
                <item.icon className="size-4 shrink-0" />
                <span className="flex-1 truncate">{item.name}</span>
              </Link>
            );
          })}
          
          <Link
            to="/sign-in"
            className="group flex h-7 items-center gap-2 rounded px-2 text-sm text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors mt-2"
          >
            <LogOut className="size-4 shrink-0" />
            <span className="flex-1 truncate">Log out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
