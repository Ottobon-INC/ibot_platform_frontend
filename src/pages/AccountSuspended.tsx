import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { AlertCircle } from 'lucide-react';

type RestrictionStatus = 'suspended' | 'disabled';

export default function AccountSuspended() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  
  // Allow toggling status via URL for easy testing (default to suspended)
  const statusParam = searchParams.get('status') as RestrictionStatus;
  const status: RestrictionStatus = ['suspended', 'disabled'].includes(statusParam) 
    ? statusParam 
    : 'suspended';

  // Mock Account Data
  const accountData = {
    name: 'Ravi Kumar',
    email: 'ravi@company.com',
    managedBy: 'ABC Technologies'
  };

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, clear auth tokens here
    navigate('/sign-in');
  };

  const isSuspended = status === 'suspended';

  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-ink-gray-9 font-sans">
      {/* Top bar (Restricted) */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-outline-gray-1">
        <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="hidden sm:inline text-ink-gray-6">{accountData.email}</span>
          <a href="#" onClick={handleSignOut} className="text-ink-gray-8 hover:text-ink-gray-9 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1">
            Sign Out
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 sm:py-16">
        <div className="w-full max-w-[440px] flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
          
          <div className="flex flex-col items-center text-center mb-10 w-full">
            <div className="size-12 rounded-full bg-surface-gray-1 border border-outline-gray-2 flex items-center justify-center mb-6 shadow-sm">
              <AlertCircle className="size-6 text-ink-gray-6" />
            </div>
            
            <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-3 uppercase">
              Account access
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-4">
              {isSuspended ? 'Your account access is suspended' : 'This account has been disabled'}
            </h1>
            
            <p className="text-base font-medium text-ink-gray-8 mb-2">
              {isSuspended 
                ? "You can't access Ottobon with this account right now." 
                : "This account no longer has access to Ottobon."}
            </p>
            
            <p className="text-base text-ink-gray-6">
              {isSuspended 
                ? "Contact your administrator or Ottobon support if you need help restoring access." 
                : "Contact your administrator if you believe this is incorrect."}
            </p>
          </div>

          {/* Account Summary Card */}
          <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-10">
            <div className="p-5 border-b border-outline-gray-2 bg-surface-gray-1 flex justify-between items-center">
              <div>
                <div className="text-xs font-semibold text-ink-gray-5 uppercase tracking-wider mb-1">Account</div>
                <div className="font-bold text-ink-gray-9">{accountData.name}</div>
                <div className="text-sm text-ink-gray-6 mt-0.5">{accountData.email}</div>
              </div>
              <div className="px-2.5 py-1 rounded bg-surface-base border border-outline-gray-2 text-xs font-medium text-ink-gray-7 shadow-sm capitalize">
                {status}
              </div>
            </div>
            <div className="p-5 text-sm">
              <div className="text-xs font-medium text-ink-gray-5 mb-1 uppercase tracking-wider">Access managed by</div>
              <div className="font-medium text-ink-gray-9">{accountData.managedBy}</div>
            </div>
          </div>

          <div className="w-full text-center">
            <h3 className="font-bold text-ink-gray-9 mb-2">Need help?</h3>
            <p className="text-sm text-ink-gray-6 mb-6">
              If you believe this is unexpected, contact your account administrator.
            </p>
            
            <div className="flex flex-col gap-3">
              <Button variant="solid" theme="gray" size="lg" className="w-full">
                Get help
              </Button>
              <button 
                onClick={handleSignOut}
                className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded"
              >
                Sign Out
              </button>
            </div>
          </div>

        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 flex flex-col sm:flex-row items-center justify-between px-6 text-xs text-ink-gray-5 border-t border-outline-gray-1 mt-auto gap-4">
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-ink-gray-8">Privacy</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-ink-gray-8">Terms</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-ink-gray-8">Help</a>
        </div>
        
        {/* Development util to toggle states */}
        <div className="flex items-center gap-2 bg-surface-gray-1 px-3 py-1.5 rounded border border-outline-gray-2 text-[10px] uppercase font-bold tracking-wider">
          <span className="text-ink-gray-4 mr-2">Test States:</span>
          <Link to="?status=suspended" className={`hover:text-ink-gray-9 ${isSuspended ? 'text-ink-gray-9' : ''}`}>Suspended</Link>
          <Link to="?status=disabled" className={`hover:text-ink-gray-9 ${!isSuspended ? 'text-ink-gray-9' : ''}`}>Disabled</Link>
        </div>
      </footer>
    </div>
  );
}
