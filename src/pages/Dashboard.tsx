import React from 'react';
import { AppShell } from '../components/layout/AppShell';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';

export default function Dashboard() {
  return (
    <AppShell>
      <PageHeader 
        title="Dashboard" 
        subtitle="Overview of your active cohorts and participants."
        actions={<Button variant="solid" label="New Cohort" />}
      />
      
      {/* Dashboard Body */}
      <div className="mx-auto max-w-4xl space-y-6 px-3 sm:px-5 pt-5 pb-20">
        
        {/* KPI Strip */}
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-outline-gray-2 rounded-lg border border-outline-gray-2 bg-surface-base shadow-sm">
          <div className="flex flex-1 flex-col p-4 sm:p-6">
            <span className="text-sm font-medium text-ink-gray-5">Total Participants</span>
            <span className="mt-2 text-3xl font-semibold text-ink-gray-9">1,248</span>
          </div>
          <div className="flex flex-1 flex-col p-4 sm:p-6">
            <span className="text-sm font-medium text-ink-gray-5">Active Cohorts</span>
            <span className="mt-2 text-3xl font-semibold text-ink-gray-9">14</span>
          </div>
          <div className="flex flex-1 flex-col p-4 sm:p-6">
            <span className="text-sm font-medium text-ink-gray-5">Pending Reviews</span>
            <span className="mt-2 text-3xl font-semibold text-ink-gray-9">5</span>
          </div>
        </div>

        {/* Recent Activity (Feed list archetype) */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-ink-gray-8">Recent Activity</h2>
          <div className="divide-y divide-outline-gray-1 border-t border-b border-outline-gray-2 bg-surface-base">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex h-15 md:h-17 items-center px-4 hover:bg-surface-gray-1 cursor-pointer transition-colors">
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium text-ink-gray-9">Participant Application Submitted</span>
                    {i === 1 && (
                      <span className="h-2 w-2 rounded-full bg-amber-600 dark:bg-dark-amber-500" />
                    )}
                  </div>
                  <span className="text-sm text-ink-gray-5 mt-1.5">
                    Jane Doe applied to the Fall 2026 Software Engineering cohort.
                  </span>
                </div>
                <span className="text-sm text-ink-gray-5">2h ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
