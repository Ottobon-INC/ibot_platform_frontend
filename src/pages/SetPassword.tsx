import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { StepIndicator } from '../components/ui/StepIndicator';
import { PasswordInput, defaultRequirements } from '../components/ui/PasswordInput';
import { Check } from 'lucide-react';

export default function SetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as any;

  // Protect route
  if (!state?.email || !state?.emailVerified) {
    navigate('/', { replace: true });
    return null;
  }

  const { accountType, email } = state;
  const isIndividual = accountType === 'INDIVIDUAL';
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

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
      // Fake API request to create the actual user identity in DB
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success! Route to Dashboard (or "Account Under Review" page later)
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      setGlobalError(err.message || "We couldn't create your account right now. Try again.");
      setIsSubmitting(false);
    }
  };

  // Determine steps array based on account type
  const steps = isIndividual 
    ? ['Account', 'Verify', 'Password']
    : ['Account', 'Details', 'Verify', 'Password'];
    
  const currentStep = isIndividual ? 2 : 3;

  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-ink-gray-9 font-sans">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-outline-gray-1">
        <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
        <div className="flex items-center gap-4 text-sm">
          <span className="hidden sm:inline text-ink-gray-6">Already have an account?</span>
          <Link to="/sign-in">
            <Button variant="ghost" className="font-semibold text-ink-gray-8">Sign In</Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 sm:py-12">
        
        <StepIndicator 
          currentStep={currentStep} 
          steps={steps} 
        />

        <div className="w-full max-w-[440px] flex flex-col mt-8">
          
          <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase">
            Secure your account
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
            Create your password
          </h1>
          
          <p className="text-base text-ink-gray-6 mb-4">
            Choose a secure password for your Ottobon account.
          </p>

          <div className="flex items-center gap-1.5 text-sm font-medium text-ink-gray-9 mb-8 bg-surface-gray-1 py-1.5 px-3 rounded-md w-fit">
            <span>{email}</span>
            <Check className="size-4 text-ink-green-6" strokeWidth={3} />
            <span className="text-ink-green-6 ml-1">Verified</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 w-full" noValidate>
            
            {globalError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm font-medium" role="alert">
                {globalError}
              </div>
            )}

            <div className="space-y-6">
              <PasswordInput
                label="Password *"
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
                  label="Confirm password *"
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
              {isSubmitting ? 'Creating account…' : 'Create account'}
            </Button>
            
            <div className="pt-6 flex justify-center sm:justify-start">
              <button 
                type="button"
                onClick={() => navigate(-1)}
                className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 flex items-center gap-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1"
              >
                &larr; Back
              </button>
            </div>
          </form>

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
