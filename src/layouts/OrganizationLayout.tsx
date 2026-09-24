import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Users, 
  CheckSquare, 
  Briefcase, 
  CircleDollarSign, 
  BarChart3, 
  ActivitySquare, 
  Settings,
  Bell
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface OrganizationLayoutProps {
  children: React.ReactNode;
}

export function OrganizationLayout({ children }: OrganizationLayoutProps) {
  const location = useLocation();
  const { user } = useAuth();

  const orgName = user?.workspaces?.[0]?.organizationName || 'My Organization';
  const firstName = user?.displayName?.split(' ')[0] || 'User';

  const isActive = (path: string) => {
    if (path === '/org/dashboard' && location.pathname === '/org/dashboard') return true;
    if (path !== '/org/dashboard' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const NavItem = ({ to, icon: Icon, label }: { to: string, icon: any, label: string }) => {
    const active = isActive(to);
    return (
      <Link 
        to={to} 
        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
          active 
            ? 'bg-ink-gray-9 text-white' 
            : 'text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9'
        }`}
      >
        <Icon className="size-4 shrink-0" /> 
        {label}
      </Link>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-gray-1 text-ink-gray-9 font-sans">
      
      {/* Organization Header */}
      <header className="flex items-center justify-between px-6 h-14 bg-surface-base border-b border-outline-gray-2 shrink-0 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <Link to="/org/dashboard" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">
            {orgName} ▾
          </Link>
        </div>
        
        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="text-ink-gray-6 hover:text-ink-gray-9 transition-colors">
            <Bell className="size-5" />
          </button>
          <div className="h-4 w-px bg-outline-gray-2" />
          <span className="text-ink-gray-9 cursor-pointer hover:bg-surface-gray-1 px-2 py-1 rounded">{firstName} ▾</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Organization Sidebar */}
        <aside className="w-64 border-r border-outline-gray-2 bg-surface-base hidden md:block shrink-0 overflow-y-auto">
          <nav className="p-4 space-y-8">
            
            <div className="space-y-1">
              <NavItem to="/org/dashboard" icon={LayoutDashboard} label="Dashboard" />
            </div>

            <div className="space-y-1">
              <NavItem to="/org/projects" icon={FolderKanban} label="Projects" />
              <NavItem to="/org/team" icon={Users} label="Team Members" />
              <NavItem to="/org/approvals" icon={CheckSquare} label="Approvals" />
            </div>

            <div className="space-y-1">
              <NavItem to="/org/commercials" icon={Briefcase} label="Commercials" />
              <NavItem to="/org/billing" icon={CircleDollarSign} label="Billing" />
            </div>

            <div className="space-y-1">
              <NavItem to="/org/reports" icon={BarChart3} label="Reports" />
              <NavItem to="/org/activity" icon={ActivitySquare} label="Activity" />
            </div>

            <div className="space-y-1 pt-4 border-t border-outline-gray-2">
              <NavItem to="/org/settings" icon={Settings} label="Settings" />
            </div>

          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto relative bg-surface-gray-1">
          {children}
        </main>
      </div>
    </div>
  );
}
