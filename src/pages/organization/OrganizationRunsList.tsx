import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { OrganizationLayout } from '../../layouts/OrganizationLayout';
import { Button } from '../../components/ui/Button';
import { 
  Search, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Loader2 
} from 'lucide-react';
import { format } from 'date-fns';

export default function OrganizationRunsList() {
  const [runs, setRuns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRuns = async () => {
      try {
        const res = await fetch('http://localhost:3000/v1/projects/runs?orgId=default');
        if (!res.ok) throw new Error('Failed to fetch runs');
        const data = await res.json();
        setRuns(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRuns();
  }, []);

  if (loading) {
    return (
      <OrganizationLayout>
        <div className="p-6 md:p-8 flex flex-col min-h-full">
          <div className="max-w-7xl mx-auto w-full space-y-6">
            <div className="h-8 w-48 bg-outline-gray-2 rounded animate-pulse" />
            <div className="h-4 w-64 bg-outline-gray-2 rounded animate-pulse" />
            <div className="h-10 w-full bg-outline-gray-2 rounded animate-pulse mt-8" />
            <div className="h-64 w-full bg-outline-gray-2 rounded animate-pulse" />
          </div>
        </div>
      </OrganizationLayout>
    );
  }

  if (error) {
    return (
      <OrganizationLayout>
        <div className="flex flex-col h-full items-center justify-center gap-4">
          <p className="text-ink-gray-5">We couldn't load Project Runs.</p>
          <Button variant="solid" theme="gray" label="Try again" onClick={() => window.location.reload()} />
        </div>
      </OrganizationLayout>
    );
  }

  return (
    <OrganizationLayout>
      <div className="p-6 md:p-8 flex flex-col min-h-full">
        <div className="max-w-7xl mx-auto w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
          
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-1">Project Runs</h1>
            <p className="text-sm text-ink-gray-6">View Project Runs across your Organization.</p>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            <div className="flex flex-wrap items-center gap-3 w-full">
              {/* Search */}
              <div className="relative max-w-sm w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-gray-4" />
                <input 
                  type="text"
                  placeholder="Search Project Runs..."
                  className="w-full pl-9 pr-4 py-2 bg-surface-base border border-outline-gray-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ink-gray-9 focus:border-transparent transition-all"
                />
              </div>

              {/* Filters */}
              <button className="flex items-center gap-2 px-3 py-2 bg-surface-base border border-outline-gray-2 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 transition-colors">
                Project <ChevronDown className="size-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-surface-base border border-outline-gray-2 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 transition-colors">
                Run State <ChevronDown className="size-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-surface-base border border-outline-gray-2 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 transition-colors">
                Journey <ChevronDown className="size-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-surface-base border border-outline-gray-2 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 transition-colors">
                Active Phase <ChevronDown className="size-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors ml-auto sm:ml-0">
                More Filters <ChevronDown className="size-4" />
              </button>
            </div>
          </div>

          {/* Table Header Controls */}
          <div className="flex items-center justify-between text-sm text-ink-gray-5">
            <span>{runs.length} Runs</span>
            <button className="flex items-center gap-1 hover:text-ink-gray-9 transition-colors font-medium">
              Recently Updated <ChevronDown className="size-4" />
            </button>
          </div>

          {/* Main Table */}
          <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-surface-gray-1 text-ink-gray-5 font-bold uppercase tracking-wider text-xs border-b border-outline-gray-2">
                  <tr>
                    <th className="px-5 py-4">Project / Run</th>
                    <th className="px-5 py-4">Journey</th>
                    <th className="px-5 py-4">Active Phases</th>
                    <th className="px-5 py-4">Ownership</th>
                    <th className="px-5 py-4">Lead</th>
                    <th className="px-5 py-4">Dates</th>
                    <th className="px-5 py-4">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-gray-2 text-ink-gray-9">
                  {runs.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center">
                        <div className="text-ink-gray-9 font-medium mb-1">No Project Runs yet.</div>
                        <div className="text-ink-gray-5 mb-4">Project Runs will appear here when they are created from a Project.</div>
                        <Link to="/org/projects">
                          <Button variant="outline" theme="gray" label="View Projects →" />
                        </Link>
                      </td>
                    </tr>
                  ) : (
                    runs.map((run) => (
                      <tr key={run.id} className="hover:bg-surface-gray-1 transition-colors group">
                        <td className="px-5 py-3">
                          <Link to={`/org/projects/${run.projectId}`} className="font-semibold block hover:underline text-ink-gray-9 mb-0.5">
                            {run.project?.canonicalName || 'Unknown Project'}
                          </Link>
                          <Link to={`#`} className="text-ink-gray-6 hover:text-ink-gray-9 transition-colors block">
                            {run.displayName || run.runCode}
                          </Link>
                        </td>
                        <td className="px-5 py-3 font-medium text-ink-gray-6">
                          {/* Placeholder Journey logic. In a real app this would map from DB config */}
                          I &rarr; B &rarr; O &rarr; T
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2 font-bold text-xs tracking-widest text-ink-gray-8">
                            <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-ink-gray-9" /> I</span>
                            <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-ink-gray-9" /> B</span>
                            <span className="flex items-center gap-1 text-ink-gray-4"><span className="size-2 rounded-full border border-ink-gray-4" /> O</span>
                            <span className="flex items-center gap-1 text-ink-gray-4"><span className="size-2 rounded-full border border-ink-gray-4" /> T</span>
                          </div>
                        </td>
                        <td className="px-5 py-3 font-medium text-ink-gray-7">
                          Mixed
                        </td>
                        <td className="px-5 py-3 font-medium">
                          Not assigned
                        </td>
                        <td className="px-5 py-3 text-ink-gray-6">
                          —
                        </td>
                        <td className="px-5 py-3">
                          <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                            run.status === 'ACTIVE' 
                              ? 'bg-ink-green-1 text-ink-green-8 ring-ink-green-4' 
                              : 'bg-ink-gray-1 text-ink-gray-7 ring-outline-gray-2'
                          }`}>
                            {run.status.charAt(0).toUpperCase() + run.status.slice(1).toLowerCase()}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {runs.length > 0 && (
              <div className="px-5 py-3 border-t border-outline-gray-2 bg-surface-gray-1 flex items-center justify-between">
                <span className="text-sm text-ink-gray-5">
                  Showing 1–{Math.min(50, runs.length)} of {runs.length} Runs
                </span>
                <div className="flex items-center gap-1">
                  <Button variant="outline" theme="gray" size="sm" className="px-2" aria-label="Previous page">
                    <ChevronLeft className="size-4" />
                  </Button>
                  <button className="min-w-8 h-8 flex items-center justify-center rounded-md bg-ink-gray-9 text-white text-sm font-medium">
                    1
                  </button>
                  <button className="min-w-8 h-8 flex items-center justify-center rounded-md text-ink-gray-6 hover:bg-surface-gray-2 text-sm font-medium transition-colors">
                    2
                  </button>
                  <button className="min-w-8 h-8 flex items-center justify-center rounded-md text-ink-gray-6 hover:bg-surface-gray-2 text-sm font-medium transition-colors">
                    3
                  </button>
                  <span className="px-1 text-ink-gray-4">...</span>
                  <Button variant="outline" theme="gray" size="sm" className="px-2" aria-label="Next page">
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </OrganizationLayout>
  );
}
