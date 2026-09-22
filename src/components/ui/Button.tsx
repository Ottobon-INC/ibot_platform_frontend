import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'subtle' | 'ghost';
  theme?: 'gray' | 'blue' | 'red';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', theme = 'gray', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'h-8 px-3 text-xs': size === 'sm',
            'h-9 px-4 py-2': size === 'md',
            'h-11 px-8 text-base': size === 'lg',
          },
          {
            'bg-ink-gray-9 text-surface-base hover:bg-ink-gray-8': variant === 'solid' && theme === 'gray',
            'bg-surface-gray-2 text-ink-gray-9 hover:bg-surface-gray-2/80': variant === 'subtle' && theme === 'gray',
            'bg-transparent text-ink-gray-9 hover:bg-surface-gray-1': variant === 'ghost' && theme === 'gray',
          },
          className
        )}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
