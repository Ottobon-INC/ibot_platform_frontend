import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { StepIndicator } from '../components/ui/StepIndicator';
import { OtpInput } from '../components/ui/OtpInput';

export default function EmailVerification() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as any;

  // Protect route
  if (!state?.email) {
    navigate('/', { replace: true });
    return null;
  }

  const { accountType, email } = state;
  const isIndividual = accountType === 'INDIVIDUAL';
  
  const [code, setCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(30);
  
  // Use a ref to track if we've sent the OTP, so it survives React Strict Mode double-mounting
  const hasSentInitialOtp = useRef(false);

  // Send initial OTP
  useEffect(() => {
    if (!hasSentInitialOtp.current && email) {
      hasSentInitialOtp.current = true;
      fetch('http://localhost:3000/v1/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }).catch(err => {
        setGlobalError("Failed to send verification email. Please try resending.");
      });
    }
  }, [email]);

  // Timer effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleResend = () => {
    if (countdown > 0) return;
    setCountdown(30);
    setGlobalError(null);
    
    fetch('http://localhost:3000/v1/auth/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }).catch(err => {
      setGlobalError("Failed to resend verification email.");
      setCountdown(0);
    });
  };

  const handleChangeEmail = () => {
    // Return to Create Account (Page 3) safely preserving state
    navigate('/create-account', { state });
  };

  const handleVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (code.length !== 6) return;
    
    setIsVerifying(true);
    setGlobalError(null);
    
    try {
      const response = await fetch('http://localhost:3000/v1/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'That verification code is incorrect. Try again.');
      }
      
      // Navigate to Set Password (Page 6)
      navigate('/set-password', { state: { ...state, emailVerified: true } });
    } catch (err: any) {
      setCode('');
      setGlobalError(err.message || "We couldn't verify right now. Try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  // Auto-submit when 6 digits are entered
  useEffect(() => {
    if (code.length === 6) {
      handleVerify();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  // Determine steps array based on account type
  const steps = isIndividual 
    ? ['Account', 'Verify', 'Password']
    : ['Account', 'Details', 'Verify', 'Password'];
    
  const currentStep = isIndividual ? 1 : 2;

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
            Verify your email
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
            Check your email
          </h1>
          
          <div className="text-base text-ink-gray-6 mb-8">
            <p>We sent a 6-digit verification code to <span className="font-medium text-ink-gray-9">{email}</span></p>
            <button 
              onClick={handleChangeEmail}
              className="text-sm font-medium text-ink-gray-7 underline hover:text-ink-gray-9 mt-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded"
            >
              Change email
            </button>
          </div>

          <form onSubmit={handleVerify} className="space-y-6 w-full" noValidate>
            
            {globalError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm font-medium" role="alert">
                {globalError}
              </div>
            )}

            <div className="space-y-3">
              <label className="block text-sm font-medium text-ink-gray-9">
                Verification code *
              </label>
              
              <OtpInput 
                length={6} 
                value={code} 
                onChange={setCode} 
                disabled={isVerifying} 
              />
              
              <p className="text-xs text-ink-gray-5">Code expires shortly.</p>
            </div>

            <Button
              type="submit"
              variant="solid"
              theme="gray"
              size="lg"
              className="w-full text-base mt-6"
              disabled={code.length !== 6 || isVerifying}
              loading={isVerifying}
            >
              {isVerifying ? 'Verifying…' : 'Verify email'}
            </Button>
            
            <div className="pt-6 space-y-2">
              <p className="text-sm text-ink-gray-9 font-medium">Didn't receive the email?</p>
              
              <button 
                type="button"
                onClick={handleResend}
                disabled={countdown > 0}
                className="text-sm font-medium text-ink-gray-7 hover:text-ink-gray-9 disabled:text-ink-gray-4 disabled:hover:text-ink-gray-4 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-1 -ml-1"
              >
                {countdown > 0 ? `Resend code in 00:${countdown.toString().padStart(2, '0')}` : 'Resend code'}
              </button>
              
              <p className="text-xs text-ink-gray-5 pt-2">Check your spam or junk folder if you don't see it.</p>
            </div>

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
