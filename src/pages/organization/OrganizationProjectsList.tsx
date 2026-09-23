import React from 'react';
import { Link } from 'react-router-dom';
import { OrganizationLayout } from '../../layouts/OrganizationLayout';
import { Button } from '../../components/ui/Button';
import { 
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';

export default function OrganizationProjectsList() {
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
                  
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-gray-1 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="font-bold text-ink-gray-9 group-hover:text-ink-gray-9 transition-colors">Graduate Talent Project</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-ink-gray-7">Suresh Kumar</td>
                    <td className="px-6 py-4 font-bold">3</td>
                    <td className="px-6 py-4 font-bold">1</td>
                    <td className="px-6 py-4 font-medium text-ink-gray-7">Apr 2027</td>
                    <td className="px-6 py-4 text-right font-medium text-ink-gray-5">2h ago</td>
                    <td className="px-4 py-4 text-right">
                      <button className="p-1 rounded text-ink-gray-4 hover:bg-outline-gray-2 hover:text-ink-gray-9 transition-colors">
                        <MoreHorizontal className="size-5" />
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-surface-gray-1 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="font-bold text-ink-gray-9 group-hover:text-ink-gray-9 transition-colors">AI Workforce Project</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-ink-gray-7">Priya Rao</td>
                    <td className="px-6 py-4 font-bold">2</td>
                    <td className="px-6 py-4 font-bold">1</td>
                    <td className="px-6 py-4 font-medium text-ink-gray-7">Sep 2026</td>
                    <td className="px-6 py-4 text-right font-medium text-ink-gray-5">6h ago</td>
                    <td className="px-4 py-4 text-right">
                      <button className="p-1 rounded text-ink-gray-4 hover:bg-outline-gray-2 hover:text-ink-gray-9 transition-colors">
                        <MoreHorizontal className="size-5" />
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-surface-gray-1 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="font-bold text-ink-gray-9 group-hover:text-ink-gray-9 transition-colors">Campus Hiring Project</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-ink-gray-7">Kiran Kumar</td>
                    <td className="px-6 py-4 font-bold">4</td>
                    <td className="px-6 py-4 font-bold">2</td>
                    <td className="px-6 py-4 font-medium text-ink-gray-7">Jul 2027</td>
                    <td className="px-6 py-4 text-right font-medium text-ink-gray-5">1d ago</td>
                    <td className="px-4 py-4 text-right">
                      <button className="p-1 rounded text-ink-gray-4 hover:bg-outline-gray-2 hover:text-ink-gray-9 transition-colors">
                        <MoreHorizontal className="size-5" />
                      </button>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-surface-gray-1 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="font-bold text-ink-gray-9 group-hover:text-ink-gray-9 transition-colors">Future Talent Project</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-ink-gray-5">Not assigned</td>
                    <td className="px-6 py-4 font-bold text-ink-gray-5">0</td>
                    <td className="px-6 py-4 font-bold text-ink-gray-5">0</td>
                    <td className="px-6 py-4 font-medium text-ink-gray-4">—</td>
                    <td className="px-6 py-4 text-right font-medium text-ink-gray-5">3d ago</td>
                    <td className="px-4 py-4 text-right">
                      <button className="p-1 rounded text-ink-gray-4 hover:bg-outline-gray-2 hover:text-ink-gray-9 transition-colors">
                        <MoreHorizontal className="size-5" />
                      </button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-4 border-t border-outline-gray-2 flex items-center justify-between text-sm mt-auto bg-surface-gray-1">
              <div className="font-medium text-ink-gray-6">
                Showing <span className="font-bold text-ink-gray-9">1&ndash;24</span> of 24
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
