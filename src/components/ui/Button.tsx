import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'subtle' | 'ghost' | 'outline';
  theme?: 'gray' | 'blue' | 'red' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  label?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', theme = 'gray', size = 'md', loading, label, children, disabled, ...props }, ref) => {
    const effectiveTheme = theme === 'primary' ? 'gray' : theme;
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-2 disabled:pointer-events-none disabled:opacity-50',
          size === 'sm' && 'h-8 px-3 text-xs',
          size === 'md' && 'h-9 px-4 py-2',
          size === 'lg' && 'h-11 px-8 text-base',
          variant === 'solid' && effectiveTheme === 'gray' && 'bg-ink-gray-9 text-surface-base hover:bg-ink-gray-8',
          variant === 'subtle' && effectiveTheme === 'gray' && 'bg-surface-gray-2 text-ink-gray-9 hover:bg-surface-gray-2/80',
          variant === 'ghost' && effectiveTheme === 'gray' && 'bg-transparent text-ink-gray-9 hover:bg-surface-gray-1',
          variant === 'outline' && effectiveTheme === 'gray' && 'border border-outline-gray-2 bg-transparent text-ink-gray-9 hover:bg-surface-gray-1',
          variant === 'solid' && effectiveTheme === 'blue' && 'bg-ink-blue-6 text-white hover:bg-ink-blue-7',
          (variant === 'outline' || variant === 'subtle') && effectiveTheme === 'blue' && 'border border-outline-gray-2 bg-transparent text-ink-gray-9 hover:bg-surface-gray-1',
          className
        )}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {label || children}
      </button>
    );
  }
);
Button.displayName = 'Button';
