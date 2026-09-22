import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { StepIndicator } from '../components/ui/StepIndicator';

type AccountType = 'ENTERPRISE' | 'ACADEMY' | 'INDIVIDUAL';

const registrationSchema = z.object({
  name: z.string().min(1, 'Enter your organization name.'),
  country: z.string().min(1, 'Select your country or region.'),
  website: z.string().url('Enter a valid website address.').optional().or(z.literal('')),
  role: z.string().optional(),
  contactNumber: z.string().optional(),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export default function RegistrationDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { accountType?: AccountType; draftId?: string; email?: string } | null;

  // Protect route
  if (!state?.accountType || state.accountType === 'INDIVIDUAL') {
    navigate('/', { replace: true });
    return null;
  }

  const { accountType } = state;
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: RegistrationFormValues) => {
    setGlobalError(null);
    try {
      // Fake API request to update onboarding draft
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to Email Verification (Page 5)
      navigate('/email-verification', { 
        state: { 
          ...state,
          organizationDetails: data
        }
      });
    } catch (err) {
      setGlobalError("We couldn't continue right now. Try again.");
    }
  };

  const isEnterprise = accountType === 'ENTERPRISE';
  const displayAccountType = isEnterprise ? 'Enterprise' : 'Academy';
  
  const heading = isEnterprise ? 'Tell us about your organization' : 'Tell us about your academy';
  const description = isEnterprise 
    ? 'Add the basic details we need to set up your organization.' 
    : 'Add the basic details we need to set up your academy.';
  
  const nameLabel = isEnterprise ? 'Organization name *' : 'Academy / Institution name *';

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
          currentStep={1} 
          steps={['Account', 'Details', 'Verify', 'Password']} 
        />

        <div className="w-full max-w-[620px] sm:max-w-[680px] flex flex-col mt-8">
          
          {/* Context Banner */}
          <div className="flex items-center justify-center px-4 py-2 bg-surface-gray-1 border border-outline-gray-1 rounded-md mb-10 w-fit mx-auto">
            <span className="text-sm font-medium text-ink-gray-7">
              {displayAccountType} account
            </span>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
              {heading}
            </h1>
            
            <p className="text-base text-ink-gray-6 mb-12">
              {description}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-[440px] mx-auto" noValidate>
            
            {globalError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm font-medium" role="alert">
                {globalError}
              </div>
            )}

            <Input
              label={nameLabel}
              type="text"
              placeholder=""
              {...register('name')}
              error={errors.name?.message}
            />

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-ink-gray-9">
                Country / Region *
              </label>
              <select 
                {...register('country')}
                className="w-full h-10 px-3 py-2 bg-surface-base border border-outline-gray-3 rounded-md text-sm text-ink-gray-9 focus:outline-none focus:ring-2 focus:ring-ink-gray-9 focus:border-transparent transition-shadow appearance-none"
              >
                <option value="">Select country</option>
                <option value="US">United States</option>
                <option value="IN">India</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
              </select>
              {errors.country?.message && (
                <p className="text-sm font-medium text-red-600">{errors.country.message as string}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Input
                label={isEnterprise ? "Website" : "Website or profile link"}
                type="url"
                placeholder="https://"
                {...register('website')}
                error={errors.website?.message}
              />
              <p className="text-xs text-ink-gray-5">Optional</p>
            </div>

            <div className="space-y-1.5">
              <Input
                label="Your role / title"
                type="text"
                placeholder=""
                {...register('role')}
                error={errors.role?.message}
              />
              <p className="text-xs text-ink-gray-5">This does not affect your platform permissions.</p>
            </div>

            <div className="space-y-1.5">
              <Input
                label="Contact number"
                type="tel"
                placeholder=""
                {...register('contactNumber')}
                error={errors.contactNumber?.message}
              />
              <p className="text-xs text-ink-gray-5">Optional</p>
            </div>

            <Button
              type="submit"
              variant="solid"
              theme="gray"
              size="lg"
              className="w-full text-base mt-8"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              {isSubmitting ? 'Saving…' : 'Continue'}
            </Button>
            
            <div className="pt-4 flex justify-center sm:justify-start">
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
