import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Lock, ArrowLeft, LayoutDashboard, LayoutTemplate } from 'lucide-react';

type RestrictionType = 'generic' | 'project' | 'phase' | 'workspace_mismatch';

export default function AccessDenied() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  
  // Allow toggling type via URL for easy testing (default to generic)
  const typeParam = searchParams.get('type') as RestrictionType;
  const type: RestrictionType = ['generic', 'project', 'phase', 'workspace_mismatch'].includes(typeParam) 
    ? typeParam 
    : 'generic';

  // Mock Context Data
  const currentWorkspace = 'ABC Technologies';
  const targetWorkspace = 'XYZ Academy';
  const requestedResource = 'Graduate Talent Project';

  const handleGoBack = () => {
    // In a real app, you might use navigate(-1) safely, or fallback to dashboard
    navigate('/dashboard');
  };

  const renderContent = () => {
    switch (type) {
      case 'project':
        return (
          <>
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-4">
              You don't have access to this Project
            </h1>
            <p className="text-base text-ink-gray-6 mb-8 max-w-sm mx-auto">
              This Project hasn't been assigned to your account.
            </p>

            <div className="border border-outline-gray-2 rounded-lg bg-surface-gray-1 px-4 py-3 text-sm flex items-center justify-center gap-2 mb-10 w-fit mx-auto">
              <span className="text-ink-gray-5 uppercase tracking-wider text-xs font-bold">Requested Area:</span>
              <span className="font-semibold text-ink-gray-9">{requestedResource}</span>
            </div>

            <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
              <Link to="/dashboard">
                <Button variant="solid" theme="gray" size="lg" className="w-full">
                  Go to My Projects
                </Button>
              </Link>
              <button 
                onClick={handleGoBack}
                className="flex items-center justify-center gap-2 text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded"
              >
                <ArrowLeft className="size-4" /> Go back
              </button>
            </div>

            <div className="mt-12 text-sm text-ink-gray-5">
              Need access? Contact your Organization Owner.
            </div>
          </>
        );

      case 'phase':
        return (
          <>
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-4">
              You don't have access to this phase
            </h1>
            <p className="text-base text-ink-gray-6 mb-8 max-w-sm mx-auto">
              Your current Project assignment doesn't include access to this phase.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
              <Link to="/dashboard">
                <Button variant="solid" theme="gray" size="lg" className="w-full">
                  Return to Project
                </Button>
              </Link>
            </div>
          </>
        );

      case 'workspace_mismatch':
        return (
          <>
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-4">
              Different workspace
            </h1>
            <p className="text-base font-medium text-ink-gray-9 mb-1">
              This page belongs to {targetWorkspace}.
            </p>
            <p className="text-base text-ink-gray-6 mb-10">
              You're currently working in {currentWorkspace}.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
              <Button variant="solid" theme="gray" size="lg" className="w-full">
                Switch to {targetWorkspace}
              </Button>
              <button 
                onClick={handleGoBack}
                className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded border border-outline-gray-2 bg-surface-base shadow-sm"
              >
                Stay in {currentWorkspace}
              </button>
            </div>
          </>
        );

      case 'generic':
      default:
        return (
          <>
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-4">
              You don't have access to this page
            </h1>
            <p className="text-base text-ink-gray-6 mb-8 max-w-sm mx-auto">
              Your account is active, but your current permissions don't allow access to this area.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
              <Link to="/dashboard">
                <Button variant="solid" theme="gray" size="lg" className="w-full">
                  Go to my dashboard
                </Button>
              </Link>
              <button 
                onClick={handleGoBack}
                className="flex items-center justify-center gap-2 text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded"
              >
                <ArrowLeft className="size-4" /> Go back
              </button>
            </div>

            <div className="mt-12 text-sm text-ink-gray-5">
              Need access to this area? Contact your administrator.
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-gray-1 text-ink-gray-9 font-sans">
      
      {/* Mock Authenticated Shell Header */}
      <header className="flex items-center justify-between px-6 h-14 bg-surface-base border-b border-outline-gray-2 shrink-0">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
          <div className="h-4 w-px bg-outline-gray-2" />
          <div className="text-sm font-semibold text-ink-gray-8">{currentWorkspace}</div>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="text-ink-gray-9">Ravi Kumar ▾</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Mock Sidebar (Optional layout context) */}
        <aside className="w-64 border-r border-outline-gray-2 bg-surface-base hidden md:block shrink-0">
          <nav className="p-4 space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-ink-gray-6 hover:bg-surface-gray-1 hover:text-ink-gray-9 cursor-pointer transition-colors">
              <LayoutDashboard className="size-4" /> Dashboard
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-ink-gray-6 hover:bg-surface-gray-1 hover:text-ink-gray-9 cursor-pointer transition-colors">
              <LayoutTemplate className="size-4" /> My Projects
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto relative">
          
          <div className="w-full max-w-2xl bg-surface-base rounded-2xl border border-outline-gray-2 p-10 sm:p-16 flex flex-col items-center text-center shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            <div className="size-14 rounded-full bg-surface-gray-1 border border-outline-gray-2 flex items-center justify-center mb-6 shadow-sm">
              <Lock className="size-6 text-ink-gray-6" />
            </div>
            
            <div className="text-xs font-bold tracking-widest text-ink-gray-5 mb-4 uppercase">
              Access Restricted
            </div>
            
            {renderContent()}

          </div>

          {/* Development util to toggle states */}
          <div className="absolute bottom-6 flex items-center gap-2 bg-surface-base px-3 py-1.5 rounded-full border border-outline-gray-2 text-[10px] uppercase font-bold tracking-wider shadow-sm">
            <span className="text-ink-gray-4 mr-2">Test Denials:</span>
            <Link to="?type=generic" className={`hover:text-ink-gray-9 ${type === 'generic' ? 'text-ink-gray-9' : 'text-ink-gray-5'}`}>Generic</Link>
            <Link to="?type=project" className={`hover:text-ink-gray-9 ${type === 'project' ? 'text-ink-gray-9' : 'text-ink-gray-5'}`}>Project</Link>
            <Link to="?type=phase" className={`hover:text-ink-gray-9 ${type === 'phase' ? 'text-ink-gray-9' : 'text-ink-gray-5'}`}>Phase</Link>
            <Link to="?type=workspace_mismatch" className={`hover:text-ink-gray-9 ${type === 'workspace_mismatch' ? 'text-ink-gray-9' : 'text-ink-gray-5'}`}>Mismatch</Link>
          </div>
        </main>
      </div>

    </div>
  );
}
