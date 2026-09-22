import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { PasswordInput, defaultRequirements } from '../components/ui/PasswordInput';
import { Check } from 'lucide-react';

type TokenState = 'VALIDATING' | 'VALID' | 'INVALID';

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const [tokenState, setTokenState] = useState<TokenState>('VALIDATING');
  const [email, setEmail] = useState<string>(''); // Will be fetched from token
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  // Validate Token on mount
  useEffect(() => {
    const validateToken = async () => {
      setTokenState('VALIDATING');
      try {
        // Fake API request to validate token
        await new Promise(resolve => setTimeout(resolve, 800));
        
        if (!token || token === 'expired') {
          throw new Error('Invalid token');
        }
        
        // If valid, backend would return the associated email
        setEmail('ravi@company.com');
        setTokenState('VALID');
      } catch (err) {
        setTokenState('INVALID');
      }
    };

    validateToken();
  }, [token]);

  // Mask email for privacy (e.g. ra•••@company.com)
  const getMaskedEmail = (fullEmail: string) => {
    if (!fullEmail) return '';
    const [local, domain] = fullEmail.split('@');
    if (!domain) return fullEmail;
    
    if (local.length <= 2) {
      return `•••@${domain}`;
    }
    return `${local.substring(0, 2)}•••@${domain}`;
  };

  const meetsAllRequirements = defaultRequirements.every(req => req.test(password));
  const hasStartedConfirming = confirmPassword.length > 0;
  const passwordsMatch = hasStartedConfirming && password === confirmPassword;
  
  const isValid = meetsAllRequirements && passwordsMatch;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    
    setIsSubmitting(true);
    setGlobalError(null);
    
    try {
      // Fake API request to update password
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success! Route to Password Reset Success (Page 9)
      navigate('/reset-password-success', { replace: true });
    } catch (err: any) {
      setGlobalError(err.message || "We couldn't reset your password right now. Try again.");
      setIsSubmitting(false);
    }
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
        <div className="w-full max-w-[440px] flex flex-col items-center">
          
          {tokenState === 'VALIDATING' && (
            <div className="text-center w-full">
              <div className="animate-pulse bg-outline-gray-2 h-4 w-32 rounded mx-auto mb-4" />
              <div className="animate-pulse bg-outline-gray-2 h-8 w-64 rounded mx-auto mb-8" />
              <div className="animate-pulse bg-outline-gray-2 h-10 w-full rounded" />
            </div>
          )}

          {tokenState === 'INVALID' && (
            <div className="w-full text-center">
              <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase">
                Invalid Request
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
                This reset link is not valid
              </h1>
              
              <p className="text-base text-ink-gray-6 mb-8 max-w-sm mx-auto">
                Your password reset link may have expired or already been used.
              </p>

              <Link to="/forgot-password" className="w-full block">
                <Button
                  variant="solid"
                  theme="gray"
                  size="lg"
                  className="w-full text-base"
                >
                  Request new reset link
                </Button>
              </Link>
              
              <div className="pt-6">
                <Link 
                  to="/sign-in"
                  className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 flex items-center justify-center gap-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1"
                >
                  Back to Sign In
                </Link>
              </div>
            </div>
          )}

          {tokenState === 'VALID' && (
            <div className="w-full">
              <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase w-full text-left">
                Reset Password
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3 w-full text-left">
                Create a new password
              </h1>
              
              <p className="text-base text-ink-gray-6 mb-4 w-full text-left">
                Choose a new password for your Ottobon account.
              </p>

              <div className="flex flex-col text-sm text-ink-gray-6 mb-8 bg-surface-gray-1 py-2 px-3 rounded-md w-fit border border-outline-gray-2">
                <span className="font-medium">Resetting password for</span>
                <span className="text-ink-gray-9 font-semibold">{getMaskedEmail(email)}</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 w-full text-left" noValidate>
                
                {globalError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm font-medium" role="alert">
                    {globalError}
                  </div>
                )}

                <div className="space-y-6">
                  <PasswordInput
                    label="New password *"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    showRequirements
                    disabled={isSubmitting}
                    autoFocus
                    autoComplete="new-password"
                  />
                  
                  <div className="space-y-1.5">
                    <PasswordInput
                      label="Confirm new password *"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={isSubmitting}
                      autoComplete="new-password"
                      error={hasStartedConfirming && !passwordsMatch ? "Passwords do not match." : undefined}
                    />
                    
                    {passwordsMatch && (
                      <div className="flex items-center gap-1.5 text-sm font-medium text-ink-green-6 pt-1">
                        <Check className="size-4" strokeWidth={3} />
                        <span>Passwords match</span>
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="solid"
                  theme="gray"
                  size="lg"
                  className="w-full text-base mt-4"
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                >
                  {isSubmitting ? 'Resetting password…' : 'Reset password'}
                </Button>
                
                <div className="pt-6 flex justify-center sm:justify-start">
                  <Link 
                    to="/sign-in"
                    className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 flex items-center gap-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1"
                  >
                    Back to Sign In
                  </Link>
                </div>
              </form>
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
