import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type WorkspaceStatus = 'active' | 'under_review' | 'suspended';

interface Workspace {
  id: string;
  name: string;
  type: string;
  role: string;
  info: string;
  status: WorkspaceStatus;
  initials: string;
  isRecent?: boolean;
}

export default function WorkspaceSelector() {
  const navigate = useNavigate();

  // Mock workspaces based on the spec
  const workspaces: Workspace[] = [
    {
      id: 'ws_1',
      name: 'ABC Technologies',
      type: 'Enterprise',
      role: 'Organization Owner',
      info: '6 active Projects',
      status: 'active',
      initials: 'AB',
      isRecent: true,
    },
    {
      id: 'ws_2',
      name: 'Ottobon',
      type: 'Internal',
      role: 'Project Lead',
      info: '3 assigned Projects',
      status: 'active',
      initials: 'O',
    },
    {
      id: 'ws_3',
      name: 'XYZ Academy',
      type: 'Academy',
      role: 'Build Lead',
      info: '1 active assignment',
      status: 'active',
      initials: 'XA',
    },
    {
      id: 'ws_4',
      name: 'NewCo Pvt Ltd',
      type: 'Enterprise',
      role: 'Organization Owner',
      info: 'Registration submitted',
      status: 'under_review',
      initials: 'NC',
    },
    {
      id: 'ws_5',
      name: 'RedClay',
      type: 'Enterprise',
      role: 'Project Lead',
      info: 'Access restricted',
      status: 'suspended',
      initials: 'RC',
    }
  ];

  const recentWorkspace = workspaces.find(w => w.isRecent);
  const otherWorkspaces = workspaces.filter(w => !w.isRecent);

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/sign-in');
  };

  const handleWorkspaceClick = (workspace: Workspace) => {
    if (workspace.status === 'suspended') return;
    if (workspace.status === 'under_review') {
      navigate('/under-review');
      return;
    }
    // Active workspace
    navigate('/dashboard');
  };

  const renderWorkspaceCard = (workspace: Workspace) => {
    const isSuspended = workspace.status === 'suspended';
    const isUnderReview = workspace.status === 'under_review';
    
    return (
      <button
        key={workspace.id}
        onClick={() => handleWorkspaceClick(workspace)}
        disabled={isSuspended}
        className={`w-full flex items-center p-4 rounded-xl border text-left transition-all ${
          isSuspended 
            ? 'border-outline-gray-2 bg-surface-gray-1 opacity-70 cursor-not-allowed' 
            : 'border-outline-gray-2 bg-surface-base hover:border-ink-gray-4 hover:shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9'
        }`}
      >
        {/* Avatar */}
        <div className={`shrink-0 flex items-center justify-center size-12 rounded-lg font-bold text-lg tracking-wider mr-4 ${
          isSuspended ? 'bg-outline-gray-2 text-ink-gray-5' : 'bg-ink-gray-9 text-white'
        }`}>
          {workspace.initials}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <span className={`font-bold truncate ${isSuspended ? 'text-ink-gray-6' : 'text-ink-gray-9'}`}>
              {workspace.name}
            </span>
            <span className="shrink-0 px-2 py-0.5 rounded-full bg-surface-gray-1 border border-outline-gray-2 text-[10px] uppercase tracking-wider font-semibold text-ink-gray-5">
              {workspace.type}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <span className={isSuspended ? 'text-ink-gray-5' : 'font-medium text-ink-gray-8'}>
              {workspace.role}
            </span>
            <span className="text-ink-gray-4">&bull;</span>
            <span className="text-ink-gray-5 truncate">
              {workspace.info}
            </span>
          </div>
        </div>

        {/* Action / Status */}
        <div className="shrink-0 ml-4 flex items-center justify-end min-w-[140px]">
          {isSuspended ? (
            <div className="text-sm font-semibold text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded">
              Unavailable
            </div>
          ) : isUnderReview ? (
            <div className="text-sm font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded">
              Under Review
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-sm font-semibold text-ink-gray-7 group-hover:text-ink-gray-9 transition-colors">
              Open workspace
              <ArrowRight className="size-4" />
            </div>
          )}
        </div>
      </button>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-ink-gray-9 font-sans">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-outline-gray-1">
        <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="hidden sm:inline text-ink-gray-6">Ravi Kumar <span className="text-ink-gray-4 mx-1">|</span> ravi@company.com</span>
          <a href="#" onClick={handleSignOut} className="text-ink-gray-8 hover:text-ink-gray-9 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1">
            Sign Out
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 sm:py-16">
        <div className="w-full max-w-2xl flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-300">
          
          <div className="flex flex-col items-center text-center mb-10">
            <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-3 uppercase">
              Choose workspace
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
              Where would you like to work?
            </h1>
            <p className="text-base text-ink-gray-6">
              Select a workspace to continue.
            </p>
          </div>

          <div className="space-y-8">
            {recentWorkspace && (
              <div>
                <h2 className="text-sm font-semibold text-ink-gray-9 mb-4">Recently used</h2>
                {renderWorkspaceCard(recentWorkspace)}
              </div>
            )}

            {otherWorkspaces.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-ink-gray-9 mb-4">Other workspaces</h2>
                <div className="space-y-3">
                  {otherWorkspaces.map(renderWorkspaceCard)}
                </div>
              </div>
            )}
          </div>

        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 flex items-center justify-center gap-4 text-xs text-ink-gray-5 border-t border-outline-gray-1 mt-auto">
        <a href="#" className="hover:text-ink-gray-8">Privacy</a>
        <span>&middot;</span>
        <a href="#" className="hover:text-ink-gray-8">Terms</a>
        <span>&middot;</span>
        <a href="#" className="hover:text-ink-gray-8">Help</a>
      </footer>
    </div>
  );
}
