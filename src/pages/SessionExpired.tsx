import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Clock, CheckCircle2 } from 'lucide-react';

export default function SessionExpired() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  
  // Allow toggling draft state via URL for easy testing
  const hasSavedDraft = searchParams.get('draft') === 'true';

  const handleSignInAgain = () => {
    // Pass a parameter to simulate "return to previous destination"
    navigate('/sign-in?returnTo=previous');
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-ink-gray-9 font-sans">
      
      {/* Unauthenticated Header */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-outline-gray-1">
        <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
        <Link to="/sign-in" className="text-sm font-medium text-ink-gray-8 hover:text-ink-gray-9 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1">
          Sign In
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-16 overflow-y-auto">
        <div className="w-full max-w-md flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
          
          <div className="size-14 rounded-full bg-surface-gray-1 border border-outline-gray-2 flex items-center justify-center mb-6 shadow-sm">
            <Clock className="size-6 text-ink-gray-6" />
          </div>
          
          <div className="text-xs font-bold tracking-widest text-ink-gray-5 mb-3 uppercase">
            Session Ended
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-4">
            Your session has expired
          </h1>
          
          {hasSavedDraft ? (
            <p className="text-base text-ink-gray-6 mb-8">
              Sign in again to continue.
            </p>
          ) : (
            <>
              <p className="text-base font-medium text-ink-gray-8 mb-2">
                Sign in again to continue using Ottobon.
              </p>
              <p className="text-base text-ink-gray-6 mb-10">
                We'll take you back to where you were when possible.
              </p>
            </>
          )}

          {/* Optional Draft Saved UI block */}
          {hasSavedDraft && (
            <div className="w-full mb-10 bg-green-50/50 border border-green-200 rounded-xl p-5 text-left flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="size-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Your draft has been saved.</h3>
                <p className="text-sm text-green-700">We'll restore it after you sign in.</p>
              </div>
            </div>
          )}

          <div className="w-full max-w-[280px]">
            <Button 
              variant="solid" 
              theme="gray" 
              size="lg" 
              className="w-full"
              onClick={handleSignInAgain}
            >
              Sign in again
            </Button>
          </div>

          <div className="mt-10 text-sm text-ink-gray-5 max-w-[280px]">
            Sessions may end periodically to help protect your account.
          </div>

        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 flex flex-col sm:flex-row items-center justify-between px-6 text-xs text-ink-gray-5 border-t border-outline-gray-1 mt-auto gap-4">
        <div className="flex items-center gap-4">
          <Link to="/sign-in" className="hover:text-ink-gray-8">Need help signing in?</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-ink-gray-8">Privacy</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-ink-gray-8">Terms</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-ink-gray-8">Help</a>
        </div>
        
        {/* Development util to toggle states */}
        <div className="flex items-center gap-2 bg-surface-gray-1 px-3 py-1.5 rounded border border-outline-gray-2 text-[10px] uppercase font-bold tracking-wider hidden sm:flex">
          <span className="text-ink-gray-4 mr-2">Test State:</span>
          <Link to="?draft=true" className={`hover:text-ink-gray-9 ${hasSavedDraft ? 'text-ink-gray-9' : ''}`}>Draft Saved</Link>
          <Link to="?" className={`hover:text-ink-gray-9 ${!hasSavedDraft ? 'text-ink-gray-9' : ''}`}>Standard</Link>
        </div>
      </footer>
    </div>
  );
}
