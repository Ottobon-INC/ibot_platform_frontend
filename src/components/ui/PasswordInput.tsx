import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Check, Circle } from 'lucide-react';

export interface PasswordRequirement {
  id: string;
  label: string;
  test: (val: string) => boolean;
}

export const defaultRequirements: PasswordRequirement[] = [
  { id: 'length', label: 'At least 8 characters', test: (v) => v.length >= 8 },
  { id: 'upper', label: 'One uppercase letter', test: (v) => /[A-Z]/.test(v) },
  { id: 'number', label: 'One number', test: (v) => /[0-9]/.test(v) },
];

interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showRequirements?: boolean;
  requirements?: PasswordRequirement[];
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, label, error, value, onChange, showRequirements = false, requirements = defaultRequirements, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    // Calculate score (0 to requirements.length)
    const score = value ? requirements.reduce((acc, req) => acc + (req.test(value) ? 1 : 0), 0) : 0;
    const isPerfect = score === requirements.length;
    const strengthPercentage = requirements.length > 0 ? (score / requirements.length) * 100 : 0;
    
    // Determine color based on strength
    let strengthColor = 'bg-ink-gray-3';
    let strengthLabel = 'Weak';
    if (value) {
      if (isPerfect) {
        strengthColor = 'bg-ink-green-6 dark:bg-ink-green-5';
        strengthLabel = 'Strong';
      } else if (score >= Math.ceil(requirements.length / 2)) {
        strengthColor = 'bg-ink-amber-6 dark:bg-dark-amber-500';
        strengthLabel = 'Fair';
      } else {
        strengthColor = 'bg-ink-red-6 dark:bg-ink-red-5';
        strengthLabel = 'Weak';
      }
    }

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-ink-gray-9">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <input
            type={showPassword ? 'text' : 'password'}
            className={cn(
              "flex h-10 w-full rounded-md border bg-surface-base px-3 py-2 text-sm text-ink-gray-9 pr-16",
              "focus:outline-none focus:ring-2 focus:ring-ink-gray-9 focus:border-transparent transition-shadow",
              "disabled:cursor-not-allowed disabled:bg-surface-gray-1 disabled:opacity-50",
              error ? "border-ink-red-6" : "border-outline-gray-3",
              className
            )}
            ref={ref}
            value={value}
            onChange={onChange}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {error && (
          <p className="text-sm font-medium text-ink-red-6 dark:text-ink-red-5">{error}</p>
        )}

        {/* Requirements and Strength */}
        {showRequirements && (
          <div className="mt-2 space-y-4">
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-ink-gray-9">Password requirements</p>
              {requirements.map((req) => {
                const met = req.test(value);
                return (
                  <div key={req.id} className="flex items-center gap-2 text-sm">
                    {met ? (
                      <Check className="size-4 text-ink-green-6 dark:text-ink-green-5" strokeWidth={3} />
                    ) : (
                      <Circle className="size-4 text-ink-gray-4" strokeWidth={2} />
                    )}
                    <span className={met ? 'text-ink-gray-8' : 'text-ink-gray-6'}>{req.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="space-y-1.5">
              <p className="text-sm font-medium text-ink-gray-9 flex justify-between">
                <span>Password strength</span>
                {value && <span className={cn(
                  isPerfect ? 'text-ink-green-6' : score > 0 ? 'text-ink-amber-6' : 'text-ink-gray-5'
                )}>{strengthLabel}</span>}
              </p>
              <div className="h-1.5 w-full bg-outline-gray-2 rounded-full overflow-hidden">
                <div 
                  className={cn("h-full transition-all duration-300", value ? strengthColor : "bg-transparent")}
                  style={{ width: `${strengthPercentage}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';
