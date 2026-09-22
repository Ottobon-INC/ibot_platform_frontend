import React from 'react';
import { cn } from '../../lib/utils';

export interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto mb-8 sm:mb-12">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        
        return (
          <React.Fragment key={step}>
            {/* Step Item */}
            <div className="flex flex-col items-center gap-2">
              <span 
                className={cn(
                  "text-xs font-medium tracking-wide transition-colors",
                  isCurrent ? "text-ink-gray-9" : isCompleted ? "text-ink-gray-9" : "text-ink-gray-4"
                )}
              >
                {step}
              </span>
              <div 
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  isCurrent ? "bg-ink-gray-9" : isCompleted ? "bg-ink-gray-9" : "border-2 border-outline-gray-2 bg-transparent"
                )}
              />
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  "flex-1 h-px mt-6 mx-2 transition-colors",
                  index < currentStep ? "bg-ink-gray-9" : "bg-outline-gray-2"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
