import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { OrganizationLayout } from '../../layouts/OrganizationLayout';
import { Button } from '../../components/ui/Button';
import { ChevronRight, Loader2, Search, Info } from 'lucide-react';
import { format } from 'date-fns';

export default function CopyPreviousRun() {
  const { id: projectId } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<any>(null);
  const [loadingProject, setLoadingProject] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRunId, setSelectedRunId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:3000/v1/projects/${projectId}`);
        if (!res.ok) throw new Error('Failed to fetch project');
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingProject(false);
      }
    };
    fetchProject();
  }, [projectId]);

  const previousRuns = project?.runs || [];

  const filteredRuns = useMemo(() => {
    if (!searchQuery.trim()) return previousRuns;
    return previousRuns.filter((run: any) => 
      run.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      run.runCode.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [previousRuns, searchQuery]);

  const selectedRun = useMemo(() => {
    return previousRuns.find((r: any) => r.id === selectedRunId);
  }, [previousRuns, selectedRunId]);

  if (loadingProject) {
    return (
      <OrganizationLayout>
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-ink-gray-4" />
        </div>
      </OrganizationLayout>
    );
  }

  if (!project) {
    return (
      <OrganizationLayout>
        <div className="flex flex-col h-full items-center justify-center gap-4">
          <p className="text-ink-gray-5">We couldn't load previous Runs.</p>
          <Button variant="solid" theme="gray" label="Try again" onClick={() => window.location.reload()} />
          <Link to={`/org/projects/${projectId}/runs/create`} className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 mt-4">
            Back to Starting Point
          </Link>
        </div>
      </OrganizationLayout>
    );
  }

  const handleContinue = () => {
    if (!selectedRunId) return;
    navigate(`/org/projects/${projectId}/runs/create/preview?source=previous&sourceId=${selectedRunId}`);
  };

  return (
    <OrganizationLayout>
      <div className="p-6 md:p-8 flex flex-col min-h-full">
        <div className="max-w-4xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
          
          <nav className="flex items-center text-sm font-medium text-ink-gray-5 mb-8">
            <Link to="/org/projects" className="hover:text-ink-gray-9 transition-colors">Projects</Link>
            <ChevronRight className="size-4 mx-1 text-ink-gray-4" />
            <Link to={`/org/projects/${projectId}`} className="hover:text-ink-gray-9 transition-colors">{project.canonicalName}</Link>
            <ChevronRight className="size-4 mx-1 text-ink-gray-4" />
            <Link to={`/org/projects/${projectId}/runs/create`} className="hover:text-ink-gray-9 transition-colors">Create Run</Link>
            <ChevronRight className="size-4 mx-1 text-ink-gray-4" />
            <span className="text-ink-gray-9">Previous Run</span>
          </nav>

          <div className="mb-2">
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">Choose a Previous Run</h1>
            <p className="text-ink-gray-6">Select an earlier Run from this Project to use as the starting configuration.</p>
          </div>

          <div className="space-y-12 mt-10">
            
            {/* Project Context (Read-only) */}
            <section className="space-y-4">
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">PROJECT</h2>
              <div className="bg-surface-base border border-outline-gray-2 rounded-lg p-5 shadow-sm">
                <div className="font-semibold text-ink-gray-9">{project.canonicalName}</div>
                <div className="text-sm text-ink-gray-6 mt-1">ABC Technologies</div>
              </div>

              <div className="flex items-start gap-2 bg-surface-gray-1 border border-outline-gray-2 p-3 rounded-md text-sm text-ink-gray-7">
                <Info className="size-4 shrink-0 text-ink-gray-5 mt-0.5" />
                <p>
                  <span className="font-semibold text-ink-gray-9">Only configuration will be reused.</span><br />
                  Participants and execution history will not be copied.
                </p>
              </div>
            </section>

            {/* Previous Runs List */}
            <section className="space-y-4">
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">PREVIOUS RUNS</h2>
              
              {previousRuns.length === 0 ? (
                <div className="py-12 text-center border border-outline-gray-2 rounded-lg bg-surface-base">
                  <div className="text-ink-gray-9 font-medium mb-2">No previous Runs are available for this Project.</div>
                  <div className="text-ink-gray-5 mb-6">Choose another starting point.</div>
                  <Link to={`/org/projects/${projectId}/runs/create`}>
                    <Button variant="outline" theme="gray" label="Back to Starting Point" />
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-gray-4" />
                    <input 
                      type="text"
                      placeholder="Search previous Runs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-surface-base border border-outline-gray-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ink-gray-9 transition-all"
                    />
                  </div>

                  <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-surface-gray-1 text-ink-gray-5 font-bold uppercase tracking-wider text-xs border-b border-outline-gray-2">
                          <tr>
                            <th className="px-5 py-4 w-10"></th>
                            <th className="px-5 py-4">Run</th>
                            <th className="px-5 py-4">Dates</th>
                            <th className="px-5 py-4">Journey</th>
                            <th className="px-5 py-4">State</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-gray-2 text-ink-gray-9">
                          {filteredRuns.length === 0 ? (
                            <tr>
                              <td colSpan={5} className="px-6 py-12 text-center text-ink-gray-5">
                                No previous Runs match your search.
                              </td>
                            </tr>
                          ) : (
                            filteredRuns.map((run: any) => {
                              const formatDates = () => {
                                if (!run.plannedStartAt) return '—';
                                const start = format(new Date(run.plannedStartAt), 'MMM yyyy');
                                const end = run.plannedEndAt ? format(new Date(run.plannedEndAt), 'MMM yyyy') : '';
                                return start === end ? start : `${start} - ${end}`;
                              };

                              return (
                                <tr 
                                  key={run.id} 
                                  onClick={() => setSelectedRunId(run.id)}
                                  className={`hover:bg-surface-gray-1 transition-colors group cursor-pointer ${selectedRunId === run.id ? 'bg-surface-gray-1' : ''}`}
                                >
                                  <td className="px-5 py-3 text-center">
                                    <input 
                                      type="radio" 
                                      name="sourceRun" 
                                      checked={selectedRunId === run.id}
                                      onChange={() => setSelectedRunId(run.id)}
                                      className="size-4 text-ink-gray-9 focus:ring-ink-gray-9 cursor-pointer" 
                                    />
                                  </td>
                                  <td className="px-5 py-3 font-semibold text-ink-gray-9">
                                    {run.displayName || run.runCode}
                                  </td>
                                  <td className="px-5 py-3 text-ink-gray-6">
                                    {formatDates()}
                                  </td>
                                  <td className="px-5 py-3 font-medium text-ink-gray-6">
                                    I &rarr; B &rarr; O &rarr; T
                                  </td>
                                  <td className="px-5 py-3">
                                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                                      run.status === 'COMPLETED' 
                                        ? 'bg-ink-green-1 text-ink-green-8 ring-ink-green-4' 
                                        : 'bg-ink-gray-1 text-ink-gray-7 ring-outline-gray-2'
                                    }`}>
                                      {run.status.charAt(0).toUpperCase() + run.status.slice(1).toLowerCase()}
                                    </span>
                                  </td>
                                </tr>
                              );
                            })
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Selected Run Summary */}
            {selectedRun && (
              <section className="space-y-4 animate-in fade-in">
                <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">SELECTED RUN</h2>
                <div className="bg-surface-gray-1 border border-outline-gray-2 rounded-lg p-5">
                  <div className="font-semibold text-ink-gray-9 mb-4">{selectedRun.displayName}</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 text-sm">
                    <div>
                      <div className="text-ink-gray-5 mb-1">Journey</div>
                      <div className="font-medium text-ink-gray-9">Identify &rarr; Build &rarr; Operate &rarr; Transfer</div>
                    </div>
                    <div>
                      <div className="text-ink-gray-5 mb-1">Dates</div>
                      <div className="font-medium text-ink-gray-9">
                        {selectedRun.plannedStartAt ? format(new Date(selectedRun.plannedStartAt), 'MMM yyyy') : '—'}
                      </div>
                    </div>
                    <div>
                      <div className="text-ink-gray-5 mb-1">State</div>
                      <div className="font-medium text-ink-gray-9 capitalize">{selectedRun.status.toLowerCase()}</div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            <div className="border-t border-outline-gray-2 pt-6 flex items-center justify-between">
              <Link to={`/org/projects/${projectId}/runs/create`}>
                <Button variant="outline" theme="gray" label="← Back" type="button" className="border-transparent hover:bg-surface-gray-1 text-ink-gray-6" />
              </Link>
              <div className="flex items-center gap-3">
                <Link to={`/org/projects/${projectId}`}>
                  <Button variant="outline" theme="gray" label="Cancel" type="button" />
                </Link>
                <Button 
                  variant="solid" 
                  theme="gray" 
                  label="Continue" 
                  onClick={handleContinue}
                  disabled={!selectedRunId}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </OrganizationLayout>
  );
}
