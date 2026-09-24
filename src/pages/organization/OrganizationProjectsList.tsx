import React from 'react';
import { Link } from 'react-router-dom';
import { OrganizationLayout } from '../../layouts/OrganizationLayout';
import { Button } from '../../components/ui/Button';
import { 
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Loader2
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function OrganizationProjectsList() {
  const [projects, setProjects] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:3000/v1/projects?orgId=default');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <OrganizationLayout>
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-ink-gray-4" />
        </div>
      </OrganizationLayout>
    );
  }

  return (
    <OrganizationLayout>
      <div className="p-6 md:p-8 flex flex-col min-h-full">
        <div className="max-w-7xl mx-auto w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 flex-1 flex flex-col">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-1">Projects</h1>
              <p className="text-sm text-ink-gray-6">Manage Projects and their Project Runs.</p>
            </div>
            <Link to="/org/projects/create">
              <Button variant="solid" theme="gray" label="Create Project" className="w-full md:w-auto shadow-sm" />
            </Link>
          </div>

          {/* Table Container */}
          <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-sm flex flex-col flex-1">
            
            {/* Toolbar: Search & Filters */}
            <div className="px-5 py-4 border-b border-outline-gray-2 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-surface-gray-1">
              
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-gray-5" />
                <input 
                  type="text" 
                  placeholder="Search Projects..." 
                  className="w-full pl-9 pr-4 py-2 bg-surface-base border border-outline-gray-2 rounded-md text-sm font-medium text-ink-gray-9 focus:outline-none focus:ring-2 focus:ring-ink-gray-9 transition-colors placeholder:text-ink-gray-5 placeholder:font-normal"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <button className="flex items-center gap-2 px-3 py-2 bg-surface-base border border-outline-gray-2 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors">
                  Project Lead <ChevronDown className="size-4" />
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-surface-base border border-outline-gray-2 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors">
                  Run Activity <ChevronDown className="size-4" />
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-surface-base border border-outline-gray-2 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors">
                  More Filters <ChevronDown className="size-4" />
                </button>
                <div className="hidden sm:block w-px h-6 bg-outline-gray-2 mx-2" />
                <button className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-ink-gray-9 hover:bg-surface-gray-1 rounded-md transition-colors ml-auto md:ml-0">
                  Recently Updated <ChevronDown className="size-4" />
                </button>
              </div>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-surface-base text-ink-gray-5 font-semibold border-b border-outline-gray-2">
                  <tr>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">PROJECT</th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">PROJECT LEAD</th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">RUNS</th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">ACTIVE RUNS</th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">LATEST RUN</th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs text-right">UPDATED</th>
                    <th className="px-4 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-gray-2 text-ink-gray-9">
                  {projects.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-ink-gray-5">
                        No projects found. Create one to get started!
                      </td>
                    </tr>
                  ) : (
                    projects.map(project => {
                      const activeRunsCount = project.runs?.filter((r: any) => r.status === 'ACTIVE').length || 0;
                      const latestRun = project.runs?.[0] ? new Date(project.runs[0].createdAt).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }) : '—';
                      
                      return (
                        <tr key={project.id} className="hover:bg-surface-gray-1 transition-colors group cursor-pointer">
                          <td className="px-6 py-4">
                            <Link to={`/org/projects/${project.id}`} className="block">
                              <div className="font-bold text-ink-gray-9 group-hover:text-ink-gray-9 transition-colors">{project.canonicalName}</div>
                            </Link>
                          </td>
                          <td className="px-6 py-4 font-medium text-ink-gray-5">Not assigned</td>
                          <td className="px-6 py-4 font-bold">{project.runs?.length || 0}</td>
                          <td className="px-6 py-4 font-bold">{activeRunsCount}</td>
                          <td className="px-6 py-4 font-medium text-ink-gray-7">{latestRun}</td>
                          <td className="px-6 py-4 text-right font-medium text-ink-gray-5">
                            {formatDistanceToNow(new Date(project.updatedAt), { addSuffix: true })}
                          </td>
                          <td className="px-4 py-4 text-right">
                            <button className="p-1 rounded text-ink-gray-4 hover:bg-outline-gray-2 hover:text-ink-gray-9 transition-colors">
                              <MoreHorizontal className="size-5" />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-4 border-t border-outline-gray-2 flex items-center justify-between text-sm mt-auto bg-surface-gray-1">
              <div className="font-medium text-ink-gray-6">
                Showing <span className="font-bold text-ink-gray-9">1&ndash;{projects.length}</span> of {projects.length}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded text-ink-gray-4 cursor-not-allowed">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className="w-8 h-8 rounded bg-surface-base border border-outline-gray-2 font-bold text-ink-gray-9 flex items-center justify-center">1</button>
                  <button className="p-1.5 rounded text-ink-gray-4 cursor-not-allowed">
                    <ChevronRight className="size-4" />
                  </button>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="font-medium text-ink-gray-6">50 / page</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </OrganizationLayout>
  );
}
