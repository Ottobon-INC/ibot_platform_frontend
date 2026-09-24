import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { OrganizationLayout } from '../../layouts/OrganizationLayout';
import { Button } from '../../components/ui/Button';
import { 
  ChevronRight, 
  Loader2,
  MoreHorizontal,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export default function OrganizationProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:3000/v1/projects/${id}`);
        if (!res.ok) throw new Error('Failed to fetch project');
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <OrganizationLayout>
        <div className="p-6 md:p-8 flex flex-col min-h-full">
          <div className="max-w-4xl mx-auto w-full space-y-8 animate-in fade-in pb-20">
            {/* Header skeleton */}
            <div className="space-y-4">
              <div className="h-4 w-48 bg-outline-gray-2 rounded animate-pulse" />
              <div className="flex justify-between items-start">
                <div>
                  <div className="h-8 w-64 bg-outline-gray-2 rounded animate-pulse mb-2" />
                  <div className="h-4 w-32 bg-outline-gray-2 rounded animate-pulse" />
                </div>
              </div>
              <div className="h-10 w-full bg-outline-gray-2 rounded animate-pulse" />
            </div>
            {/* Section skeleton */}
            <div className="h-48 w-full bg-outline-gray-2 rounded animate-pulse" />
            <div className="h-48 w-full bg-outline-gray-2 rounded animate-pulse" />
          </div>
        </div>
      </OrganizationLayout>
    );
  }

  if (error || !project) {
    return (
      <OrganizationLayout>
        <div className="flex flex-col h-full items-center justify-center gap-4">
          <p className="text-ink-gray-5">We couldn't load this Project.</p>
          <div className="flex gap-3">
            <Button variant="solid" theme="gray" label="Try again" onClick={() => window.location.reload()} />
            <Link to="/org/projects">
              <Button variant="outline" theme="gray" label="Back to Projects" />
            </Link>
          </div>
        </div>
      </OrganizationLayout>
    );
  }

  const activeRunsCount = project.runs?.filter((r: any) => r.status === 'ACTIVE').length || 0;
  const projectMembersCount = 0; // Stub
  const actionsRequiredCount = 1; // Example stub
  const projectLead = "Not assigned"; // Stub

  return (
    <OrganizationLayout>
      <div className="p-6 md:p-8 flex flex-col min-h-full">
        <div className="max-w-4xl mx-auto w-full space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
          
          {/* Header */}
          <div className="space-y-4">
            <nav className="flex items-center text-sm font-medium text-ink-gray-5">
              <Link to="/org/projects" className="hover:text-ink-gray-9 transition-colors">Projects</Link>
              <ChevronRight className="size-4 mx-1 text-ink-gray-4" />
              <span className="text-ink-gray-9">{project.canonicalName}</span>
            </nav>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-1">{project.canonicalName}</h1>
                <p className="text-ink-gray-6 font-medium">Project Lead: <span className="text-ink-gray-9">{projectLead}</span></p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link to={`/org/projects/${project.id}/runs/create`}>
                  <Button variant="solid" theme="gray" label="Create Project Run" />
                </Link>
                <button className="p-2 border border-outline-gray-2 rounded-md bg-surface-base hover:bg-surface-gray-1 text-ink-gray-6 transition-colors shadow-sm">
                  <MoreHorizontal className="size-5" />
                </button>
              </div>
            </div>

            {/* Summary Strip (Frappe Style) */}
            <div className="flex items-center bg-surface-gray-1 border border-outline-gray-2 rounded-md px-4 py-2 text-sm font-medium text-ink-gray-7 overflow-x-auto">
              <div className="flex-1 min-w-max pr-4 border-r border-outline-gray-2">
                <span className="font-bold text-ink-gray-9">{project.runs?.length || 0}</span> Runs
              </div>
              <div className="flex-1 min-w-max px-4 border-r border-outline-gray-2">
                <span className="font-bold text-ink-gray-9">{activeRunsCount}</span> Active Run
              </div>
              <div className="flex-1 min-w-max px-4 border-r border-outline-gray-2">
                <span className="font-bold text-ink-gray-9">{projectMembersCount}</span> Project Members
              </div>
              <div className="flex-1 min-w-max pl-4">
                <span className="font-bold text-ink-gray-9">{actionsRequiredCount}</span> Action Required
              </div>
            </div>
          </div>

          {/* Action Required */}
          {actionsRequiredCount > 0 && (
            <section className="space-y-4">
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">Actions Required</h2>
              <div className="flex items-center justify-between p-4 bg-ink-gray-9 text-white rounded-md shadow-sm">
                <div className="flex items-center gap-3 font-medium">
                  <AlertCircle className="size-5 text-ink-green-4" />
                  Project Lead not assigned
                </div>
                <button className="text-sm font-semibold flex items-center gap-1 hover:text-ink-gray-3 transition-colors">
                  Assign Project Lead <ArrowRight className="size-4" />
                </button>
              </div>
            </section>
          )}

          {/* Empty State / Get this Project Ready */}
          {project.runs?.length === 0 && (
            <section className="space-y-4">
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">Get this Project ready</h2>
              <div className="bg-surface-base border border-outline-gray-2 rounded-lg p-5 shadow-sm space-y-3">
                <p className="text-sm text-ink-gray-6 mb-4">Complete these initial steps to start executing this Project.</p>
                <div className="flex items-center justify-between py-2 border-b border-outline-gray-2/50">
                  <span className="font-medium text-ink-gray-9">Assign Project Lead</span>
                  <Link to="#" className="text-sm font-semibold text-ink-gray-6 flex items-center gap-1 hover:text-ink-gray-9">Assign →</Link>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-outline-gray-2/50">
                  <span className="font-medium text-ink-gray-9">Build Project Team</span>
                  <Link to="#" className="text-sm font-semibold text-ink-gray-6 flex items-center gap-1 hover:text-ink-gray-9">Build →</Link>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-outline-gray-2/50">
                  <span className="font-medium text-ink-gray-9">Configure Project Blueprint</span>
                  <Link to="#" className="text-sm font-semibold text-ink-gray-6 flex items-center gap-1 hover:text-ink-gray-9">Configure →</Link>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-medium text-ink-gray-9">Create first Project Run</span>
                  <Link to={`/org/projects/${project.id}/runs/create`} className="text-sm font-semibold text-ink-gray-6 flex items-center gap-1 hover:text-ink-gray-9">Create Run →</Link>
                </div>
              </div>
            </section>
          )}

          {/* Project Information */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">Project Information</h2>
            <div className="bg-surface-base border border-outline-gray-2 rounded-lg shadow-sm">
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 text-sm">
                <div>
                  <div className="text-ink-gray-5 font-medium mb-1">Organization</div>
                  <div className="font-semibold text-ink-gray-9">ABC Technologies</div>
                </div>
                <div>
                  <div className="text-ink-gray-5 font-medium mb-1">Project Lead</div>
                  <div className="font-semibold text-ink-gray-9">{projectLead}</div>
                </div>
                <div>
                  <div className="text-ink-gray-5 font-medium mb-1">Primary Contact</div>
                  <div className="font-semibold text-ink-gray-9">Priya Rao</div>
                </div>
                <div>
                  <div className="text-ink-gray-5 font-medium mb-1">Objective</div>
                  <div className="font-semibold text-ink-gray-9">Build and evaluate talent for workforce requirements.</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-ink-gray-5 font-medium mb-1">Description</div>
                  <div className="text-ink-gray-9 max-w-2xl leading-relaxed">{project.description || 'No description provided.'}</div>
                </div>
              </div>
              <div className="px-5 py-3 border-t border-outline-gray-2 bg-surface-gray-1 text-right rounded-b-lg">
                <Link to="#" className="text-sm font-semibold text-ink-gray-6 flex items-center justify-end gap-1 hover:text-ink-gray-9 transition-colors w-full">
                  Edit Details <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Project Runs */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">Project Runs</h2>
            <div className="bg-surface-base border border-outline-gray-2 rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <tbody className="divide-y divide-outline-gray-2 text-ink-gray-9">
                    {project.runs?.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-ink-gray-5">
                          No Project Runs have been created yet.<br/><br/>
                          <Link to={`/org/projects/${project.id}/runs/create`}>
                            <Button variant="outline" theme="gray" label="Create Project Run" />
                          </Link>
                        </td>
                      </tr>
                    ) : (
                      project.runs?.map((run: any) => (
                        <tr key={run.id} className="hover:bg-surface-gray-1 transition-colors group cursor-pointer">
                          <td className="px-5 py-4 font-bold text-ink-gray-9 w-1/4">
                            {run.displayName}
                          </td>
                          <td className="px-5 py-4 font-medium text-ink-gray-6 w-1/4">
                            I → B → O → T
                          </td>
                          <td className="px-5 py-4 w-1/4">
                            <span className="text-ink-gray-6">Active: </span>
                            <span className="font-semibold text-ink-gray-9">Identify + Build</span>
                          </td>
                          <td className="px-5 py-4 w-1/4 text-right">
                            <span className="inline-flex items-center rounded-md bg-ink-gray-1 px-2 py-1 text-xs font-medium text-ink-gray-7 ring-1 ring-inset ring-outline-gray-2">
                              {run.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {project.runs?.length > 0 && (
                <div className="px-5 py-3 border-t border-outline-gray-2 bg-surface-gray-1 text-right rounded-b-lg">
                  <Link to="#" className="text-sm font-semibold text-ink-gray-6 flex items-center justify-end gap-1 hover:text-ink-gray-9 transition-colors w-full">
                    View all Runs <ArrowRight className="size-4" />
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* Project Blueprint */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">Project Blueprint</h2>
            <div className="bg-surface-base border border-outline-gray-2 rounded-lg shadow-sm">
              <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">
                <div>
                  <div className="text-ink-gray-5 mb-1">Entry Policy Defaults</div>
                  <div className="text-ink-gray-9">Configured</div>
                </div>
                <div>
                  <div className="text-ink-gray-5 mb-1">Journey Defaults</div>
                  <div className="text-ink-gray-9">Configured</div>
                </div>
                <div>
                  <div className="text-ink-gray-5 mb-1">Ownership Defaults</div>
                  <div className="text-ink-gray-9">Configured</div>
                </div>
                <div>
                  <div className="text-ink-gray-5 mb-1">Phase Defaults</div>
                  <div className="text-ink-gray-9">Configured</div>
                </div>
              </div>
              <div className="px-5 py-3 border-t border-outline-gray-2 bg-surface-gray-1 text-right rounded-b-lg">
                <Link to="#" className="text-sm font-semibold text-ink-gray-6 flex items-center justify-end gap-1 hover:text-ink-gray-9 transition-colors w-full">
                  View Blueprint <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Project Team */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">Project Team</h2>
            <div className="bg-surface-base border border-outline-gray-2 rounded-lg shadow-sm">
              <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-medium">
                <div>
                  <div className="text-ink-gray-5 mb-1">Project Lead</div>
                  <div className="text-ink-gray-9">{projectLead}</div>
                </div>
                <div>
                  <div className="text-ink-gray-5 mb-1">Organization Members</div>
                  <div className="text-ink-gray-9">5</div>
                </div>
                <div>
                  <div className="text-ink-gray-5 mb-1">Ottobon Members</div>
                  <div className="text-ink-gray-9">3</div>
                </div>
              </div>
              <div className="px-5 py-3 border-t border-outline-gray-2 bg-surface-gray-1 text-right rounded-b-lg">
                <Link to="#" className="text-sm font-semibold text-ink-gray-6 flex items-center justify-end gap-1 hover:text-ink-gray-9 transition-colors w-full">
                  View Team <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Curricula */}
            <section className="space-y-4">
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">Curricula</h2>
              <div className="bg-surface-base border border-outline-gray-2 rounded-lg shadow-sm h-full flex flex-col">
                <div className="p-5 space-y-3 text-sm font-medium flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-ink-gray-5">Published Versions</span>
                    <span className="text-ink-gray-9">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-ink-gray-5">Draft Versions</span>
                    <span className="text-ink-gray-9">1</span>
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-outline-gray-2 bg-surface-gray-1 text-right rounded-b-lg mt-auto">
                  <Link to="#" className="text-sm font-semibold text-ink-gray-6 flex items-center justify-end gap-1 hover:text-ink-gray-9 transition-colors w-full">
                    View Curricula <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Commercial */}
            <section className="space-y-4">
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">Commercial</h2>
              <div className="bg-surface-base border border-outline-gray-2 rounded-lg shadow-sm h-full flex flex-col">
                <div className="p-5 space-y-3 text-sm font-medium flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-ink-gray-5">Active Configurations</span>
                    <span className="text-ink-gray-9">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-ink-gray-5">Pending Review</span>
                    <span className="text-ink-gray-9">1</span>
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-outline-gray-2 bg-surface-gray-1 text-right rounded-b-lg mt-auto">
                  <Link to="#" className="text-sm font-semibold text-ink-gray-6 flex items-center justify-end gap-1 hover:text-ink-gray-9 transition-colors w-full">
                    Commercial History <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Recent Activity */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">Recent Activity</h2>
            <div className="bg-surface-base border border-outline-gray-2 rounded-lg shadow-sm">
              <div className="p-5 space-y-4 text-sm font-medium">
                <div className="flex justify-between items-center">
                  <span className="text-ink-gray-9">Apr 2027 Run created</span>
                  <span className="text-ink-gray-5 font-normal">2h ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ink-gray-9">Project Lead assigned</span>
                  <span className="text-ink-gray-5 font-normal">1d ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ink-gray-9">Blueprint updated</span>
                  <span className="text-ink-gray-5 font-normal">2d ago</span>
                </div>
              </div>
              <div className="px-5 py-3 border-t border-outline-gray-2 bg-surface-gray-1 text-right rounded-b-lg">
                <Link to="#" className="text-sm font-semibold text-ink-gray-6 flex items-center justify-end gap-1 hover:text-ink-gray-9 transition-colors w-full">
                  View Activity <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </OrganizationLayout>
  );
}
