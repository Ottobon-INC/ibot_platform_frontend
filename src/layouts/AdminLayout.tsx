import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  FolderKanban, 
  PlaySquare, 
  Users, 
  ShieldCheck, 
  Briefcase, 
  CircleDollarSign, 
  Settings2, 
  Network, 
  FileText,
  Search,
  Bell
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const NavItem = ({ to, icon: Icon, label, suffix }: { to: string, icon: any, label: string, suffix?: React.ReactNode }) => {
    const active = isActive(to);
    return (
      <Link 
        to={to} 
        className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
          active 
            ? 'bg-ink-gray-9 text-white' 
            : 'text-ink-gray-6 hover:bg-surface-gray-1 hover:text-ink-gray-9'
        }`}
      >
        <div className="flex items-center gap-3">
          <Icon className="size-4" /> 
          {label}
        </div>
        {suffix && suffix}
      </Link>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-gray-1 text-ink-gray-9 font-sans">
      
      {/* Platform Admin Shell Header */}
      <header className="flex items-center justify-between px-6 h-14 bg-surface-base border-b border-outline-gray-2 shrink-0 sticky top-0 z-20">
        <div className="flex items-center gap-6">
          <Link to="/admin/dashboard" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
          <div className="h-4 w-px bg-outline-gray-2 hidden md:block" />
          <div className="text-sm font-semibold text-ink-gray-8 hidden md:block">Platform Administration</div>
        </div>
        
        <div className="flex-1 max-w-xl mx-8 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-gray-5" />
            <input 
              type="text" 
              placeholder="Global Search..." 
              className="w-full pl-9 pr-4 py-1.5 bg-surface-gray-1 border border-outline-gray-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ink-gray-9 focus:bg-surface-base transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="text-ink-gray-6 hover:text-ink-gray-9 transition-colors">
            <Bell className="size-5" />
          </button>
          <div className="h-4 w-px bg-outline-gray-2" />
          <span className="text-ink-gray-9 cursor-pointer hover:bg-surface-gray-1 px-2 py-1 rounded">Admin ▾</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Admin Sidebar */}
        <aside className="w-64 border-r border-outline-gray-2 bg-surface-base hidden md:block shrink-0 overflow-y-auto">
          <nav className="p-4 space-y-8">
            
            <div className="space-y-1">
              <NavItem to="/admin/dashboard" icon={LayoutDashboard} label="Dashboard" />
              <NavItem 
                to="/admin/organizations" 
                icon={Building2} 
                label="Organizations" 
                suffix={<span className="text-xs font-semibold bg-outline-gray-2 text-ink-gray-9 px-1.5 py-0.5 rounded">4</span>}
              />
              <NavItem to="#" icon={FolderKanban} label="Projects" />
              <NavItem to="#" icon={PlaySquare} label="Project Runs" />
              <NavItem to="#" icon={Users} label="Ottobon Team" />
            </div>

            <div className="space-y-1">
              <div className="px-3 mb-2 text-xs font-bold text-ink-gray-5 uppercase tracking-wider">Business</div>
              <NavItem to="#" icon={ShieldCheck} label="Setup & Approvals" />
              <NavItem to="#" icon={Briefcase} label="Commercials" />
              <NavItem to="#" icon={CircleDollarSign} label="Finance" />
            </div>

            <div className="space-y-1">
              <div className="px-3 mb-2 text-xs font-bold text-ink-gray-5 uppercase tracking-wider">Platform</div>
              <NavItem to="#" icon={Settings2} label="Operations" />
              <NavItem to="#" icon={Network} label="Integrations" />
              <NavItem to="#" icon={FileText} label="Audit" />
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
