import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { StepIndicator } from '../components/ui/StepIndicator';

type AccountType = 'ENTERPRISE' | 'ACADEMY' | 'INDIVIDUAL';

const createAccountSchema = z.object({
  fullName: z.string().min(1, 'Enter your full name.'),
  email: z.string().min(1, 'Enter your email address.').email('Enter a valid email address.'),
});

type CreateAccountFormValues = z.infer<typeof createAccountSchema>;

export default function CreateAccount() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { accountType?: AccountType };

  // If accessed directly without selecting an account type, push back to entry
  if (!state?.accountType) {
    navigate('/', { replace: true });
    return null;
  }

  const { accountType } = state;
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateAccountFormValues>({
    resolver: zodResolver(createAccountSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: CreateAccountFormValues) => {
    setGlobalError(null);
    try {
      const [firstName, ...lastNameParts] = data.fullName.split(' ');
      const lastName = lastNameParts.join(' ') || 'User';

      // Navigate to next page based on account type
      if (accountType === 'INDIVIDUAL') {
        navigate('/email-verification', { 
          state: { 
            accountType,
            email: data.email,
            firstName,
            lastName
          }
        });
      } else {
        navigate('/registration-details', { 
          state: { 
            accountType,
            email: data.email,
            firstName,
            lastName
          }
        });
      }

    } catch (err: any) {
      setGlobalError(err.message || "We couldn't continue right now. Try again.");
    }
  };

  const isEnterprise = accountType === 'ENTERPRISE';
  const displayAccountType = 
    isEnterprise ? 'Enterprise' : 
    accountType === 'ACADEMY' ? 'Academy' : 'Individual';

  const emailLabel = isEnterprise ? 'Work email *' : 'Email address *';

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
          currentStep={0} 
          steps={['Account', 'Details', 'Verify', 'Password']} 
        />

        <div className="w-full max-w-[440px] flex flex-col">
          
          {/* Context Banner */}
          <div className="flex items-center justify-between px-4 py-3 bg-surface-gray-1 border border-outline-gray-1 rounded-md mb-8">
            <span className="text-sm font-medium text-ink-gray-7">
              Creating an {displayAccountType} account
            </span>
            <Link to="/" className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-1">
              Change
            </Link>
          </div>
          
          <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4">
            CREATE YOUR ACCOUNT
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
            Start with your details
          </h1>
          
          <p className="text-base text-ink-gray-6 mb-8">
            We'll use these details to create your Ottobon account.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full" noValidate>
            
            {globalError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm font-medium" role="alert">
                {globalError}
              </div>
            )}

            <Input
              label="Full name *"
              type="text"
              autoComplete="name"
              placeholder=""
              {...register('fullName')}
              error={errors.fullName?.message}
            />

            <Input
              label={emailLabel}
              type="email"
              autoComplete="email"
              placeholder=""
              {...register('email')}
              error={errors.email?.message}
            />
            
            <div className="pt-2 text-center sm:text-left text-sm text-ink-gray-5">
              By continuing, you agree to Ottobon's <a href="#" className="underline hover:text-ink-gray-8 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">Terms of Service</a> and acknowledge the <a href="#" className="underline hover:text-ink-gray-8 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">Privacy Policy</a>.
            </div>

            <Button
              type="submit"
              variant="solid"
              theme="gray"
              size="lg"
              className="w-full text-base mt-6"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              {isSubmitting ? 'Creating account…' : 'Continue'}
            </Button>
            
            <div className="pt-4 flex justify-center sm:justify-start">
              <Link 
                to="/" 
                className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 flex items-center gap-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1"
              >
                &larr; Back
              </Link>
            </div>
          </form>

        </div>
      </main>
    </div>
  );
}
