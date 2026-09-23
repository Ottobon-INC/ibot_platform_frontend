import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { QrCode, KeyRound, Smartphone, Mail, ShieldAlert, CheckCircle2 } from 'lucide-react';

type MfaMethod = 'authenticator' | 'security_key' | 'sms' | 'email';
type SetupState = 'LOADING' | 'SELECT_METHOD' | 'SETUP_METHOD';

interface MethodConfig {
  id: MfaMethod;
  title: string;
  description: string;
  icon: React.ElementType;
}

const AVAILABLE_METHODS: Record<MfaMethod, MethodConfig> = {
  authenticator: {
    id: 'authenticator',
    title: 'Authenticator app',
    description: 'Use a compatible authenticator application.',
    icon: QrCode
  },
  security_key: {
    id: 'security_key',
    title: 'Security key',
    description: 'Use an approved hardware security key.',
    icon: KeyRound
  },
  sms: {
    id: 'sms',
    title: 'Text message (SMS)',
    description: 'Receive a verification code via SMS.',
    icon: Smartphone
  },
  email: {
    id: 'email',
    title: 'Email verification',
    description: 'Receive a verification code via email.',
    icon: Mail
  }
};

export default function MfaSetup() {
  const navigate = useNavigate();

  // Mocking the backend policy configuration
  // Change this array to test different states (e.g. ['authenticator'] vs ['authenticator', 'security_key'])
  const enabledMethods: MfaMethod[] = ['authenticator', 'security_key'];
  const isMandatory = true;
  
  const [setupState, setSetupState] = useState<SetupState>('LOADING');
  const [selectedMethod, setSelectedMethod] = useState<MfaMethod | null>(null);
  const [showManualKey, setShowManualKey] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Smart routing logic
  useEffect(() => {
    const checkMethods = async () => {
      // Simulate fetch
      await new Promise(resolve => setTimeout(resolve, 600));
      
      if (enabledMethods.length === 1) {
        setSelectedMethod(enabledMethods[0]);
        setSetupState('SETUP_METHOD');
      } else {
        setSetupState('SELECT_METHOD');
      }
    };
    checkMethods();
  }, []);

  const handleContinueToSetup = () => {
    if (selectedMethod) {
      setSetupState('SETUP_METHOD');
    }
  };

  const handleContinueToVerification = async () => {
    setIsSubmitting(true);
    try {
      // Fake API request to generate pending setup
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/mfa-verification');
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText('JBSW Y3DP F8ZK N2MX');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // UI Components based on state
  const renderMethodSelection = () => (
    <div className="w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-ink-gray-9 mb-1">Choose a verification method</h3>
      </div>
      
      <div className="space-y-3 mb-8">
        {enabledMethods.map(methodId => {
          const method = AVAILABLE_METHODS[methodId];
          const isSelected = selectedMethod === methodId;
          const Icon = method.icon;
          
          return (
            <button
              key={methodId}
              type="button"
              onClick={() => setSelectedMethod(methodId)}
              className={`w-full flex items-start gap-4 p-4 rounded-lg border text-left transition-all ${
                isSelected 
                  ? 'border-ink-gray-9 bg-surface-gray-1 ring-1 ring-ink-gray-9' 
                  : 'border-outline-gray-2 bg-surface-base hover:border-ink-gray-4 hover:bg-surface-gray-1'
              } outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 focus-visible:ring-offset-1`}
            >
              <div className={`mt-0.5 shrink-0 flex items-center justify-center size-5 rounded-full border ${isSelected ? 'border-ink-gray-9' : 'border-ink-gray-4'}`}>
                {isSelected && <div className="size-2.5 bg-ink-gray-9 rounded-full" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`size-4 ${isSelected ? 'text-ink-gray-9' : 'text-ink-gray-5'}`} />
                  <span className={`font-semibold ${isSelected ? 'text-ink-gray-9' : 'text-ink-gray-8'}`}>{method.title}</span>
                </div>
                <div className="text-sm text-ink-gray-6">
                  {method.description}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <Button
        variant="solid"
        theme="gray"
        size="lg"
        className="w-full"
        onClick={handleContinueToSetup}
        disabled={!selectedMethod}
      >
        Continue to setup
      </Button>
    </div>
  );

  const renderAuthenticatorSetup = () => (
    <div className="w-full animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="mb-6 flex items-center gap-2 border-b border-outline-gray-2 pb-4">
        <QrCode className="size-5 text-ink-gray-7" />
        <h3 className="text-lg font-bold text-ink-gray-9">Authenticator app</h3>
      </div>
      
      <div className="space-y-6 mb-8">
        <div>
          <div className="font-semibold text-ink-gray-9 mb-1">1. Open your authenticator app.</div>
          <div className="text-ink-gray-6 text-sm">Use Google Authenticator, Authy, or any compatible app.</div>
        </div>
        
        <div>
          <div className="font-semibold text-ink-gray-9 mb-4">2. Scan the QR code below.</div>
          <div className="bg-white border border-outline-gray-2 rounded-xl p-4 w-fit mx-auto shadow-sm">
            {/* Placeholder styling representing a QR Code */}
            <div className="size-48 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMCA4SDBWMHhoOFY4em00LTRINHY0SDhWNHpNOCA4aDRWNkg4djJ6bS00IDRoNHY0SDR2LTR6bTgtMmg0djRINHYteiIgZmlsbD0iIzMzMyIgZmlsbC1vcGFjaXR5PSIwLjE1IiAvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48cGF0aCBkPSJNMCAwdjI0aDI0VjBIMHptMjIgMjJIMnYtMjBoMjB2MjB6TTE2IDE2aDR2NGgtNHYtNHoiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJNNDggMHYyNGgyNFYwaC0yNHptMjIgMjJoLTIwdi0yMGgyMHYyMHptLTggLThoNHY0aC00di00eiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik0wIDQ4djI0aDI0di0yNEgwem0yMiAyMkgydi0yMGgyMHYyMHptLTE2IC04aDR2NGgtNHYtNHoiIGZpbGw9IiMzMzMyIvPjwvc3ZnPg==')] opacity-80 mix-blend-multiply" />
          </div>
        </div>

        <div className="pt-2">
          {!showManualKey ? (
            <button
              onClick={() => setShowManualKey(true)}
              className="text-sm font-semibold text-ink-gray-7 hover:text-ink-gray-9 transition-colors flex flex-col mx-auto items-center"
            >
              <span>Can't scan the code?</span>
              <span className="underline decoration-outline-gray-3 underline-offset-4">Enter setup key manually</span>
            </button>
          ) : (
            <div className="animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="text-xs font-semibold text-ink-gray-5 uppercase tracking-wider mb-2 text-center">Setup key</div>
              <div className="flex items-center justify-between p-3 bg-surface-gray-1 border border-outline-gray-2 rounded-lg font-mono text-sm font-medium tracking-widest text-ink-gray-9">
                <span>JBSW Y3DP F8ZK N2MX</span>
                <button 
                  onClick={handleCopyKey}
                  className="text-ink-gray-5 hover:text-ink-gray-9 transition-colors p-1"
                  title="Copy to clipboard"
                >
                  {isCopied ? <CheckCircle2 className="size-4 text-ink-green-6" /> : <span className="text-xs font-sans tracking-normal bg-white border border-outline-gray-2 px-2 py-0.5 rounded shadow-sm">Copy</span>}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <Button
          variant="solid"
          theme="gray"
          size="lg"
          className="w-full"
          onClick={handleContinueToVerification}
          loading={isSubmitting}
        >
          Continue to verification
        </Button>
        
        {enabledMethods.length > 1 && (
          <button
            onClick={() => setSetupState('SELECT_METHOD')}
            disabled={isSubmitting}
            className="w-full text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors py-2 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded"
          >
            Choose another method
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-ink-gray-9 font-sans">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-outline-gray-1">
        <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
        <div className="text-sm text-ink-gray-6 font-medium">
          Signed in as <span className="text-ink-gray-9">ravi@company.com</span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-[440px] flex flex-col">
          
          <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase">
            Secure your account
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
            Set up multi-factor authentication
          </h1>
          
          <p className="text-base text-ink-gray-6 mb-6">
            Add an extra layer of security to your Ottobon account.
          </p>

          {isMandatory && (
            <div className="flex items-start gap-3 p-4 bg-surface-gray-1 border border-outline-gray-2 rounded-lg mb-8">
              <ShieldAlert className="size-5 text-ink-gray-7 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-ink-gray-9">Required for your account</div>
                <div className="text-sm text-ink-gray-6 mt-0.5">Complete MFA setup to continue.</div>
              </div>
            </div>
          )}

          {setupState === 'LOADING' && (
            <div className="w-full space-y-4">
              <div className="h-20 w-full bg-outline-gray-1 animate-pulse rounded-lg" />
              <div className="h-20 w-full bg-outline-gray-1 animate-pulse rounded-lg" />
            </div>
          )}
          {setupState === 'SELECT_METHOD' && renderMethodSelection()}
          {setupState === 'SETUP_METHOD' && selectedMethod === 'authenticator' && renderAuthenticatorSetup()}
          {setupState === 'SETUP_METHOD' && selectedMethod !== 'authenticator' && (
             <div className="text-center p-8 border border-outline-gray-2 rounded-lg">
                <div className="text-ink-gray-6">Setup flow for {AVAILABLE_METHODS[selectedMethod!].title} will render here.</div>
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
