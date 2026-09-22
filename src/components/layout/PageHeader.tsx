import React from 'react';
import { cn } from '../../lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}

export function PageHeader({ title, subtitle, actions, className }: PageHeaderProps) {
  return (
    <header 
      className={cn(
        "flex min-h-12 w-full items-center justify-between px-5 py-3", 
        className
      )}
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold leading-tight text-ink-gray-9">{title}</h1>
        {subtitle && (
          <p className="text-sm text-ink-gray-5 leading-tight">{subtitle}</p>
        )}
      </div>
      
      {actions && (
        <div className="flex items-center gap-2">
          {actions}
        </div>
      )}
    </header>
  );
}
