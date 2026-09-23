import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { PasswordInput, defaultRequirements } from '../components/ui/PasswordInput';
import { Check } from 'lucide-react';

export default function SetPasswordInvitation() {
  const navigate = useNavigate();
  
  // Mock data representing the accepted invitation context passed from Page 10
  const invitationContext = {
    email: 'ravi@company.com',
    organization: 'ABC Technologies',
    project: 'Graduate Talent Project',
    roleTitle: 'Build Lead',
    hasFullName: false // If false, we must ask for Full Name
  };

  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const meetsAllRequirements = defaultRequirements.every(req => req.test(password));
  const hasStartedConfirming = confirmPassword.length > 0;
  const passwordsMatch = hasStartedConfirming && password === confirmPassword;
  
  // If the system doesn't know their name, they must provide it
  const isNameValid = invitationContext.hasFullName || fullName.trim().length > 0;
  
  const isValid = meetsAllRequirements && passwordsMatch && isNameValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    
    setIsSubmitting(true);
    setGlobalError(null);
    
    try {
      // Fake API request to create account & activate access
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success! Route directly to Dashboard (no auto-sign-in required as per specs, wait, specs say "continuing directly gives better UX... Route to relevant workspace/dashboard")
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      setGlobalError(err.message || "We couldn't finish creating your account right now. Try again.");
      setIsSubmitting(false);
    }
  };

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
        <div className="w-full max-w-[440px] flex flex-col">
          
          <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase">
            Complete your account
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
            Create your password
          </h1>
          
          <p className="text-base text-ink-gray-6 mb-8">
            Set a password to finish creating your Ottobon account.
          </p>

          {/* Invitation Email Badge */}
          <div className="flex items-center justify-between border border-outline-gray-2 rounded-lg p-4 bg-surface-gray-1 mb-8">
            <span className="font-medium text-ink-gray-9">{invitationContext.email}</span>
            <div className="flex items-center gap-1.5 text-sm font-medium text-ink-green-6">
              <Check className="size-4" strokeWidth={3} />
              <span>Accepted</span>
            </div>
          </div>

          {/* Compact Invitation Context */}
          <div className="mb-8">
            <div className="text-xs font-semibold text-ink-gray-5 uppercase tracking-wider mb-2">Joining</div>
            <div className="font-medium text-ink-gray-9">{invitationContext.organization}</div>
            {invitationContext.project && (
              <div className="text-ink-gray-6">{invitationContext.project}</div>
            )}
            
            <div className="text-xs font-semibold text-ink-gray-5 uppercase tracking-wider mt-4 mb-1">Your role</div>
            <div className="font-medium text-ink-gray-9">{invitationContext.roleTitle}</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 w-full" noValidate>
            
            {globalError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm font-medium" role="alert">
                {globalError}
              </div>
            )}

            <div className="space-y-6">
              
              {!invitationContext.hasFullName && (
                <Input
                  label="Full name *"
                  name="fullName"
                  placeholder="e.g. Ravi Kumar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={isSubmitting}
                  autoFocus
                />
              )}

              <PasswordInput
                label="Password *"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                showRequirements
                disabled={isSubmitting}
                autoFocus={invitationContext.hasFullName} // autofocus password if name isn't needed
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
              {isSubmitting ? 'Creating account…' : 'Create account & continue'}
            </Button>
            
            <div className="pt-6 flex justify-center sm:justify-start">
              <button 
                type="button"
                onClick={() => navigate(-1)}
                className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 flex items-center gap-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1"
              >
                &larr; Back to invitation
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
