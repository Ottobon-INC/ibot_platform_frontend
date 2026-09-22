import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';
import { Check } from 'lucide-react';

type AccountType = 'ENTERPRISE' | 'ACADEMY' | 'INDIVIDUAL';

export default function PlatformEntry() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<AccountType | null>(null);

  const handleContinue = () => {
    if (selectedType) {
      // In a real app, this would pass the state or save to a store/context
      navigate('/create-account', { state: { accountType: selectedType } });
    }
  };

  const accountOptions: { type: AccountType; title: string; description: string; label: string }[] = [
    {
      type: 'ENTERPRISE',
      title: 'Enterprise',
      description: 'For organizations running talent, learning, hiring or workforce programs.',
      label: 'Create an Enterprise account',
    },
    {
      type: 'ACADEMY',
      title: 'Academy',
      description: 'For academies and training organizations delivering learning programs.',
      label: 'Create an Academy account',
    },
    {
      type: 'INDIVIDUAL',
      title: 'Individual',
      description: 'For individuals joining programs, learning opportunities or talent journeys.',
      label: 'Create an Individual account',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-ink-gray-9 font-sans">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-outline-gray-1">
        <div className="font-bold tracking-tight text-lg">OTTOBON</div>
        <div className="flex items-center gap-4 text-sm">
          <span className="hidden sm:inline text-ink-gray-6">Already have an account?</span>
          <Link to="/sign-in">
            <Button variant="ghost" className="font-semibold text-ink-gray-8">Sign In</Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-24">
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          
          <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4">GET STARTED</div>
          
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-gray-9 mb-3">
            How will you use Ottobon?
          </h1>
          
          <p className="text-base sm:text-lg text-ink-gray-6 mb-12 max-w-xl">
            Choose the option that best represents how you want to get started.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-10">
            {accountOptions.map((option) => {
              const isSelected = selectedType === option.type;
              return (
                <button
                  key={option.type}
                  onClick={() => setSelectedType(option.type)}
                  className={cn(
                    "relative flex flex-col text-left p-6 rounded-xl border transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9",
                    isSelected 
                      ? "border-ink-gray-4 bg-surface-gray-1 shadow-sm" 
                      : "border-outline-gray-1 bg-surface-base hover:border-outline-gray-2 hover:bg-surface-gray-1/50"
                  )}
                  aria-pressed={isSelected}
                >
                  {isSelected && (
                    <div className="absolute top-4 right-4 text-ink-gray-9">
                      <Check className="w-5 h-5" />
                    </div>
                  )}
                  <h2 className="text-lg font-semibold text-ink-gray-9 mb-2 pr-6">
                    {option.title}
                  </h2>
                  <p className="text-sm text-ink-gray-6 flex-1 mb-4">
                    {option.description}
                  </p>
                  <span className="text-xs font-medium text-ink-gray-5">
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="w-full md:w-auto">
            <Button 
              variant="solid" 
              theme="gray" 
              size="lg"
              className="w-full md:w-64 h-12 text-base"
              disabled={!selectedType}
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-outline-gray-1 flex flex-col items-center justify-center gap-2 text-sm text-ink-gray-5">
        <div className="flex gap-4">
          <a href="#" className="hover:text-ink-gray-8 transition-colors">Privacy</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-ink-gray-8 transition-colors">Terms</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-ink-gray-8 transition-colors">Help</a>
        </div>
        <div className="text-xs text-ink-gray-4">&copy; {new Date().getFullYear()} Ottobon</div>
      </footer>
    </div>
  );
}
