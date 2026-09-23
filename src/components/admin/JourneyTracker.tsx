import React from 'react';

type PhaseState = 'active' | 'completed' | 'not_started';

interface JourneyTrackerProps {
  phases: {
    identify: PhaseState;
    build: PhaseState;
    operate: PhaseState;
    transfer: PhaseState;
  };
}

export const JourneyTracker: React.FC<JourneyTrackerProps> = ({ phases }) => {
  const renderPhase = (label: string, state: PhaseState) => {
    return (
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-medium text-ink-gray-9">{label}</span>
        {state === 'active' && (
          <div className="size-3 rounded-full bg-blue-600 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border-2 border-blue-600 animate-ping opacity-50" />
            <div className="size-1.5 bg-white rounded-full" />
          </div>
        )}
        {state === 'completed' && (
          <div className="size-3 rounded-full bg-ink-gray-9 flex items-center justify-center">
            <svg viewBox="0 0 14 14" className="size-2 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6667 3.5L5.25004 9.91667L2.33337 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
        {state === 'not_started' && (
          <div className="size-3 rounded-full border border-outline-gray-3 bg-surface-gray-1" />
        )}
      </div>
    );
  };

  return (
    <div className="flex items-center gap-4">
      {renderPhase('I', phases.identify)}
      {renderPhase('B', phases.build)}
      {renderPhase('O', phases.operate)}
      {renderPhase('T', phases.transfer)}
    </div>
  );
};
