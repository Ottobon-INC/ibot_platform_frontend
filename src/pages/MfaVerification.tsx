import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { OtpInput } from '../components/ui/OtpInput';
import { QrCode, KeyRound, Smartphone, Mail } from 'lucide-react';

type MfaMethod = 'authenticator' | 'security_key' | 'sms' | 'email';

interface MethodConfig {
  id: MfaMethod;
  title: string;
  icon: React.ElementType;
}

const AVAILABLE_METHODS: Record<MfaMethod, MethodConfig> = {
  authenticator: { id: 'authenticator', title: 'Authenticator app', icon: QrCode },
  security_key: { id: 'security_key', title: 'Security key', icon: KeyRound },
  sms: { id: 'sms', title: 'Text message (SMS)', icon: Smartphone },
  email: { id: 'email', title: 'Email verification', icon: Mail }
};

export default function MfaVerification() {
  const navigate = useNavigate();

  // Mock verified methods for this user
  const verifiedMethods: MfaMethod[] = ['authenticator', 'email'];
  
  const [activeMethod, setActiveMethod] = useState<MfaMethod>(verifiedMethods[0]);
  const [isSelectingMethod, setIsSelectingMethod] = useState(false);
  
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);

  // Timer logic for Email/SMS resend
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Restart timer when switching to email/sms
  useEffect(() => {
    if ((activeMethod === 'email' || activeMethod === 'sms') && !isSelectingMethod) {
      setTimeLeft(30);
    }
  }, [activeMethod, isSelectingMethod]);

  const handleVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (activeMethod !== 'security_key' && code.length !== 6) return;
    
    setIsSubmitting(true);
    setGlobalError(null);
    
    try {
      // Fake API request to verify
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (activeMethod !== 'security_key' && code === '000000') {
            reject(new Error("That verification code is incorrect. Try again."));
          } else {
            resolve(true);
          }
        }, 1200);
      });
      
      // Success! Route to Dashboard
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      setGlobalError(err.message);
      setCode(''); // Clear code on error as per spec
      setIsSubmitting(false);
    }
  };

  const handleResend = () => {
    setTimeLeft(30);
    // Fake API call to trigger resend
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const renderMethodSelector = () => (
    <div className="w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase">
        Verify your identity
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-6">
        Choose a method
      </h1>
      
      <div className="space-y-3 mb-6">
        {verifiedMethods.map(methodId => {
          const method = AVAILABLE_METHODS[methodId];
          const Icon = method.icon;
          return (
            <button
              key={methodId}
              type="button"
              onClick={() => {
                setActiveMethod(methodId);
                setIsSelectingMethod(false);
                setGlobalError(null);
                setCode('');
              }}
              className="w-full flex items-center gap-3 p-4 rounded-lg border border-outline-gray-2 bg-surface-base hover:border-ink-gray-4 hover:bg-surface-gray-1 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9"
            >
              <Icon className="size-5 text-ink-gray-7" />
              <span className="font-medium text-ink-gray-9">{method.title}</span>
            </button>
          );
        })}
      </div>
      
      <button
        onClick={() => setIsSelectingMethod(false)}
        className="w-full text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors py-2 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded"
      >
        Cancel
      </button>
    </div>
  );

  const renderActiveMethod = () => {
    const isCodeMethod = activeMethod !== 'security_key';
    const isResendable = activeMethod === 'email' || activeMethod === 'sms';
    const isReadyToSubmit = isCodeMethod ? code.length === 6 : true;

    return (
      <div className="w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase">
          Verify your identity
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
          {activeMethod === 'authenticator' && 'Enter your verification code'}
          {activeMethod === 'email' && 'Check your email'}
          {activeMethod === 'sms' && 'Check your phone'}
          {activeMethod === 'security_key' && 'Verify with your security key'}
        </h1>
        
        <div className="text-base text-ink-gray-6 mb-8">
          {activeMethod === 'authenticator' && 'Open your authenticator app and enter the current 6-digit code.'}
          {activeMethod === 'security_key' && 'Use your registered security key to continue.'}
          {activeMethod === 'email' && (
            <>We sent a verification code to<br/><span className="font-semibold text-ink-gray-9 mt-1 block">ra•••@company.com</span></>
          )}
          {activeMethod === 'sms' && (
            <>We sent a verification code to<br/><span className="font-semibold text-ink-gray-9 mt-1 block">+91 ••••••4321</span></>
          )}
        </div>

        <form onSubmit={handleVerify} className="space-y-6">
          {globalError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm font-medium" role="alert">
              {globalError}
            </div>
          )}

          {isCodeMethod && (
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-ink-gray-9">
                Verification code *
              </label>
              <OtpInput
                value={code}
                onChange={setCode}
                length={6}
                disabled={isSubmitting}
                autoFocus
              />
            </div>
          )}

          <div className="pt-2">
            <Button
              type={isCodeMethod ? "submit" : "button"}
              onClick={!isCodeMethod ? handleVerify : undefined}
              variant="solid"
              theme="gray"
              size="lg"
              className="w-full text-base"
              disabled={!isReadyToSubmit || isSubmitting}
              loading={isSubmitting}
            >
              {activeMethod === 'security_key' ? 'Verify with security key' : 'Verify'}
            </Button>
          </div>
          
          <div className="flex flex-col items-center gap-4 pt-2">
            {isResendable && (
              <button
                type="button"
                onClick={handleResend}
                disabled={timeLeft > 0 || isSubmitting}
                className="text-sm font-medium text-ink-gray-9 hover:underline underline-offset-4 disabled:opacity-50 disabled:hover:no-underline disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2"
              >
                {timeLeft > 0 ? `Resend code in ${formatTime(timeLeft)}` : 'Resend code'}
              </button>
            )}

            {verifiedMethods.length > 1 && (
              <button
                type="button"
                onClick={() => setIsSelectingMethod(true)}
                disabled={isSubmitting}
                className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1"
              >
                Use another method
              </button>
            )}
            
            <a href="#" className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors mt-2 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1">
              Need help verifying?
            </a>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-ink-gray-9 font-sans">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-outline-gray-1">
        <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="hidden sm:inline text-ink-gray-6">ravi@company.com</span>
          <Link to="/sign-in" className="text-ink-gray-8 hover:text-ink-gray-9 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1">
            Sign Out
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 sm:py-16">
        <div className="w-full max-w-[440px] flex flex-col">
          {isSelectingMethod ? renderMethodSelector() : renderActiveMethod()}
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
