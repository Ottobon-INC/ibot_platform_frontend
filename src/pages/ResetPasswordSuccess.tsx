import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Check } from 'lucide-react';

export default function ResetPasswordSuccess() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-ink-gray-9 font-sans">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-outline-gray-1">
        <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
        <div className="flex items-center gap-4 text-sm">
          <Link to="/sign-in">
            <Button variant="ghost" className="font-semibold text-ink-gray-8">Sign In</Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-[440px] flex flex-col items-center text-center">
          
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-ink-green-6/10 mb-6">
            <Check className="w-6 h-6 text-ink-green-6" strokeWidth={3} />
          </div>

          <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase w-full text-center">
            Password updated
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3 w-full text-center">
            Your password has been reset
          </h1>
          
          <p className="text-base text-ink-gray-6 mb-8 text-center">
            You can now sign in to Ottobon using your new password.
          </p>

          <Link to="/sign-in" className="w-full">
            <Button
              variant="solid"
              theme="gray"
              size="lg"
              className="w-full text-base"
            >
              Sign In
            </Button>
          </Link>

          <p className="text-xs text-ink-gray-5 mt-8 max-w-sm mx-auto">
            For your security, you may need to sign in again on your other devices.
          </p>
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
