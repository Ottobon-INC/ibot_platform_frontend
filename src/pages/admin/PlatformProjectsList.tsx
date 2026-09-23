import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../layouts/AdminLayout';
import { Button } from '../../components/ui/Button';
import { 
  ChevronRight,
  Search,
  Filter,
  ArrowDownUp,
  MoreHorizontal
} from 'lucide-react';

interface ProjectRow {
  id: string;
  name: string;
  organizationId: string;
  organizationName: string;
  organizationType: string;
  projectLead: string | null;
  runs: number;
  activeRuns: number;
  latestRunId: string | null;
  latestRunName: string | null;
  updated: string;
}

const mockProjects: ProjectRow[] = [
  {
    id: 'p1',
    name: 'Graduate Talent Project',
    organizationId: 'abc-tech',
    organizationName: 'ABC Technologies',
    organizationType: 'Enterprise',
    projectLead: 'Suresh Kumar',
    runs: 3,
    activeRuns: 1,
    latestRunId: 'r1',
    latestRunName: 'Apr 2027',
    updated: '2h ago'
  },
  {
    id: 'p2',
    name: 'AI Workforce Program',
    organizationId: 'xyz-academy',
    organizationName: 'XYZ Academy',
    organizationType: 'Academy',
    projectLead: 'Priya Rao',
    runs: 2,
    activeRuns: 1,
    latestRunId: 'r2',
    latestRunName: 'Sep 2026',
    updated: '6h ago'
  },
  {
    id: 'p3',
    name: 'Campus Hiring Project',
    organizationId: 'redclay',
    organizationName: 'RedClay',
    organizationType: 'Enterprise',
    projectLead: 'Kiran Kumar',
    runs: 4,
    activeRuns: 2,
    latestRunId: 'r3',
    latestRunName: 'Jul 2027',
    updated: '1d ago'
  },
  {
    id: 'p4',
    name: 'Future Talent Project',
    organizationId: 'abc-tech',
    organizationName: 'ABC Technologies',
    organizationType: 'Enterprise',
    projectLead: null,
    runs: 0,
    activeRuns: 0,
    latestRunId: null,
    latestRunName: null,
    updated: '4d ago'
  }
];

export default function PlatformProjectsList() {
  const [activeDropdownRow, setActiveDropdownRow] = useState<string | null>(null);

  return (
    <AdminLayout>
      <div className="p-6 md:p-8 animate-in fade-in duration-500 pb-24">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-ink-gray-5 mb-6 uppercase tracking-wider">
          <span className="text-ink-gray-9">Platform Administration</span>
          <ChevronRight className="size-3" />
          <span className="text-ink-gray-9">Projects</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">Projects</h1>
          <p className="text-sm font-medium text-ink-gray-6">View Projects across organizations and their execution history.</p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-gray-4" />
              <input 
                type="text" 
                placeholder="Search Projects..."
                className="w-full pl-9 pr-4 py-2 bg-surface-gray-1 border border-outline-gray-3 rounded-md text-sm text-ink-gray-9 placeholder:text-ink-gray-4 focus:outline-none focus:border-ink-gray-9 focus:bg-white transition-colors"
              />
            </div>
            
            <Button variant="outline" theme="gray" className="gap-2">
              Organization <Filter className="size-3.5" />
            </Button>
            <Button variant="outline" theme="gray" className="gap-2 hidden sm:flex">
              Type <Filter className="size-3.5" />
            </Button>
            <Button variant="outline" theme="gray" className="gap-2 hidden sm:flex">
              Run Activity <Filter className="size-3.5" />
            </Button>
            <Button variant="outline" theme="gray" className="gap-2">
              More Filters <Filter className="size-3.5" />
            </Button>
          </div>
          
          <Button variant="ghost" theme="gray" className="gap-2 self-start xl:self-auto">
            Recently Updated <ArrowDownUp className="size-3.5" />
          </Button>
        </div>

        <div className="text-xs font-medium text-ink-gray-5 mb-4">326 Projects</div>

        {/* Table */}
        <div className="border border-outline-gray-2 rounded-lg overflow-x-auto bg-white shadow-sm">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-surface-gray-1 border-b border-outline-gray-2">
                <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs">Project</th>
                <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs">Organization</th>
                <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs">Project Lead</th>
                <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs text-right">Runs</th>
                <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs text-right">Active Runs</th>
                <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs">Latest Run</th>
                <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs text-right">Updated</th>
                <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs text-center w-12"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-gray-2">
              {mockProjects.map((p) => (
                <tr key={p.id} className="hover:bg-surface-gray-1 transition-colors h-[52px]">
                  <td className="px-5 cursor-pointer">
                    <Link to={`/admin/projects/${p.id}`}>
                      <div className="font-semibold text-ink-gray-9 hover:underline decoration-outline-gray-3">{p.name}</div>
                    </Link>
                  </td>
                  <td className="px-5">
                    <Link to={`/admin/organizations/${p.organizationId}`}>
                      <div className="text-ink-gray-9 hover:underline decoration-outline-gray-3">{p.organizationName}</div>
                      <div className="text-xs text-ink-gray-5">{p.organizationType}</div>
                    </Link>
                  </td>
                  <td className="px-5">
                    {p.projectLead ? (
                      <span className="text-ink-gray-9">{p.projectLead}</span>
                    ) : (
                      <span className="text-ink-gray-4 italic">Not assigned</span>
                    )}
                  </td>
                  <td className="px-5 text-right font-medium text-ink-gray-9">{p.runs}</td>
                  <td className="px-5 text-right font-medium text-ink-gray-9">{p.activeRuns}</td>
                  <td className="px-5">
                    {p.latestRunName ? (
                      <Link to={`/admin/runs/${p.latestRunId}`} className="text-ink-gray-9 hover:underline decoration-outline-gray-3">
                        {p.latestRunName}
                      </Link>
                    ) : (
                      <span className="text-ink-gray-4">—</span>
                    )}
                  </td>
                  <td className="px-5 text-right text-ink-gray-5 text-xs font-mono">{p.updated}</td>
                  <td className="px-5 text-center">
                    <div className="relative inline-block text-left">
                      <button 
                        onClick={() => setActiveDropdownRow(activeDropdownRow === p.id ? null : p.id)}
                        className="p-1.5 text-ink-gray-4 hover:text-ink-gray-9 hover:bg-surface-gray-2 rounded-md transition-colors"
                      >
                        <MoreHorizontal className="size-4" />
                      </button>
                      {activeDropdownRow === p.id && (
                        <>
                          <div className="fixed inset-0 z-10" onClick={() => setActiveDropdownRow(null)} />
                          <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-outline-gray-2 rounded-md shadow-lg z-20 py-1 text-sm font-medium">
                            <Link to={`/admin/projects/${p.id}`} className="block w-full text-left px-4 py-2 text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors">View Project</Link>
                            <Link to={`/admin/projects/${p.id}/runs`} className="block w-full text-left px-4 py-2 text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors">View Project Runs</Link>
                            <Link to={`/admin/organizations/${p.organizationId}`} className="block w-full text-left px-4 py-2 text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors">View Organization</Link>
                            <Link to={`/admin/projects/${p.id}/activity`} className="block w-full text-left px-4 py-2 text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors">View Activity</Link>
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="px-5 py-3 border-t border-outline-gray-2 flex items-center justify-between text-xs text-ink-gray-5 bg-surface-gray-1">
            <div>Showing 1–50 of 326</div>
            <div className="flex gap-2">
              <button className="px-2 py-1 border border-outline-gray-3 rounded hover:bg-white text-ink-gray-4 cursor-not-allowed">Previous</button>
              <button className="px-2 py-1 border border-outline-gray-3 rounded hover:bg-white text-ink-gray-9 font-medium bg-white">1</button>
              <button className="px-2 py-1 border border-outline-gray-3 rounded hover:bg-white text-ink-gray-7">2</button>
              <button className="px-2 py-1 border border-outline-gray-3 rounded hover:bg-white text-ink-gray-7">3</button>
              <span className="px-1 py-1">...</span>
              <button className="px-2 py-1 border border-outline-gray-3 rounded hover:bg-white text-ink-gray-7">7</button>
              <button className="px-2 py-1 border border-outline-gray-3 rounded hover:bg-white text-ink-gray-9">Next</button>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
