import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  description?: string;
  rightElement?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, description, rightElement, id, ...props }, ref) => {
    const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
    
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && (
          <div className="flex justify-between items-center">
            <label htmlFor={inputId} className="text-sm font-medium text-ink-gray-9">
              {label}
            </label>
            {rightElement && <div>{rightElement}</div>}
          </div>
        )}
        
        <div className="relative">
          <input
            id={inputId}
            type={type}
            className={cn(
              "flex h-10 w-full rounded-md border bg-surface-base px-3 py-2 text-sm",
              "ring-offset-surface-base file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "placeholder:text-ink-gray-5 outline-none transition-colors",
              "focus-visible:ring-2 focus-visible:ring-ink-gray-9 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
              error ? "border-red-500 focus-visible:ring-red-500" : "border-outline-gray-2 hover:border-ink-gray-4",
              className
            )}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
        </div>
        
        {description && !error && (
          <p className="text-sm text-ink-gray-5">{description}</p>
        )}
        {error && (
          <p id={`${inputId}-error`} className="text-sm font-medium text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
