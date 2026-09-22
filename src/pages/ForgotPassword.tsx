import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Enter a valid email address.'),
});

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Timer effect for resend cooldown
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError('Enter your email address.');
      return;
    }
    
    const parsed = schema.safeParse({ email: trimmedEmail });
    if (!parsed.success) {
      setError(parsed.error.errors[0].message);
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      // Fake API request to trigger password reset
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Always succeed visually to prevent user enumeration
      setIsSubmitted(true);
      setCountdown(30); // start 30s cooldown
    } catch (err) {
      setError("We couldn't send password reset instructions right now. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    if (countdown > 0) return;
    setCountdown(30);
    // Fake API resend
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setCountdown(0);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-ink-gray-9 font-sans">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-outline-gray-1">
        <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
        <div className="flex items-center gap-4 text-sm">
          <span className="hidden sm:inline text-ink-gray-6">Remember your password?</span>
          <Link to="/sign-in">
            <Button variant="ghost" className="font-semibold text-ink-gray-8">Sign In</Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-[440px] flex flex-col items-center text-center">
          
          {!isSubmitted ? (
            // INITIAL STATE
            <>
              <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase w-full text-left">
                Password recovery
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3 w-full text-left">
                Forgot your password?
              </h1>
              
              <p className="text-base text-ink-gray-6 mb-8 w-full text-left">
                Enter the email address associated with your Ottobon account.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 w-full text-left" noValidate>
                <Input
                  label="Email address *"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  error={error || undefined}
                  autoFocus
                  disabled={isSubmitting}
                />

                <Button
                  type="submit"
                  variant="solid"
                  theme="gray"
                  size="lg"
                  className="w-full text-base mt-2"
                  disabled={isSubmitting || !email.trim()}
                  loading={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Send reset link'}
                </Button>
                
                <div className="pt-6 flex justify-center">
                  <Link 
                    to="/sign-in"
                    className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 flex items-center gap-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1"
                  >
                    &larr; Back to Sign In
                  </Link>
                </div>
              </form>
            </>
          ) : (
            // SUBMITTED STATE
            <div className="flex flex-col items-center w-full">
              <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase w-full text-center">
                Check your email
              </div>
              
              <p className="text-base text-ink-gray-9 mb-8 text-center max-w-sm">
                If an Ottobon account is associated with <span className="font-semibold">{email.trim()}</span>, we've sent password reset instructions.
              </p>

              <Link to="/sign-in" className="w-full">
                <Button
                  variant="solid"
                  theme="gray"
                  size="lg"
                  className="w-full text-base"
                >
                  Back to Sign In
                </Button>
              </Link>
              
              <div className="mt-8 space-y-4 flex flex-col items-center">
                <button 
                  type="button"
                  onClick={handleResend}
                  disabled={countdown > 0}
                  className="text-sm font-medium text-ink-gray-7 hover:text-ink-gray-9 disabled:text-ink-gray-4 disabled:hover:text-ink-gray-4 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1"
                >
                  {countdown > 0 ? `Resend available in 00:${countdown.toString().padStart(2, '0')}` : 'Resend email'}
                </button>
                
                <button 
                  type="button"
                  onClick={handleResetForm}
                  className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 underline transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1"
                >
                  Use a different email
                </button>
              </div>
            </div>
          )}

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
