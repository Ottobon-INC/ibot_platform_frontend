import React from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../layouts/AdminLayout';
import { Button } from '../../components/ui/Button';
import { Search, ChevronDown, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const organizations = [
  { id: 'org-1', name: 'ABC Technologies', email: 'ravi@company.com', type: 'Enterprise', owner: 'Ravi Kumar', projects: 4, runs: 2, status: 'Active', updated: '12m ago' },
  { id: 'org-2', name: 'XYZ Academy', email: 'anjali@xyz.edu', type: 'Academy', owner: 'Anjali Rao', projects: 3, runs: 1, status: 'Active', updated: '1h ago' },
  { id: 'org-3', name: 'NewCo Learning', email: 'suresh@newco.com', type: 'Enterprise', owner: 'Suresh Kumar', projects: 0, runs: 0, status: 'Under Review', updated: '2h ago' },
  { id: 'org-4', name: 'Sainik Academy', email: 'kiran@sainik.edu', type: 'Academy', owner: 'Kiran', projects: 2, runs: 1, status: 'Active', updated: '1d ago' },
  { id: 'org-5', name: 'DEF Technologies', email: 'priya@def.com', type: 'Enterprise', owner: 'Priya', projects: 5, runs: 0, status: 'Suspended', updated: '3d ago' },
];

export default function OrganizationsList() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-600';
      case 'Under Review': return 'text-amber-600';
      case 'Suspended': return 'text-red-600';
      default: return 'text-ink-gray-5';
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 md:p-8 max-w-[1200px] mx-auto animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">Organizations</h1>
            <p className="text-sm text-ink-gray-6">View and manage organizations registered on Ottobon.</p>
          </div>
          <Button variant="outline" theme="gray" className="gap-2">
            Review pending <span className="bg-surface-gray-1 px-1.5 py-0.5 rounded text-xs font-bold text-ink-gray-9 border border-outline-gray-2 shadow-sm">4</span>
          </Button>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-gray-5" />
              <input 
                type="text" 
                placeholder="Search organizations..." 
                className="w-64 pl-9 pr-4 h-9 bg-white border border-outline-gray-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ink-gray-9 transition-colors shadow-sm"
              />
            </div>
            
            <button className="h-9 px-3 bg-white border border-outline-gray-3 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors shadow-sm flex items-center gap-1.5">
              Type <ChevronDown className="size-3.5 opacity-70" />
            </button>
            <button className="h-9 px-3 bg-white border border-outline-gray-3 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors shadow-sm flex items-center gap-1.5">
              Status <ChevronDown className="size-3.5 opacity-70" />
            </button>
            <button className="h-9 px-3 bg-white border border-outline-gray-3 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors shadow-sm flex items-center gap-1.5">
              Project activity <ChevronDown className="size-3.5 opacity-70" />
            </button>
            <button className="h-9 px-3 bg-white border border-outline-gray-3 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors shadow-sm flex items-center gap-1.5">
              More filters <ChevronDown className="size-3.5 opacity-70" />
            </button>
          </div>
          
          <div className="text-sm font-medium text-ink-gray-6 flex items-center gap-2">
            Sort: 
            <button className="text-ink-gray-9 hover:underline underline-offset-4 decoration-outline-gray-3 flex items-center gap-1">
              Recently updated <ChevronDown className="size-3.5" />
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="text-sm font-medium text-ink-gray-6 mb-2">
          157 organizations
        </div>

        {/* Data Table */}
        <div className="bg-white border border-outline-gray-2 rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-surface-gray-1 text-ink-gray-5 font-semibold border-b border-outline-gray-2">
                <tr>
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[240px]">ORGANIZATION</th>
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[140px]">TYPE</th>
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[160px]">OWNER</th>
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[100px] text-center">PROJECTS</th>
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[120px] text-center">ACTIVE RUNS</th>
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[140px]">STATUS</th>
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[100px]">UPDATED</th>
                  <th className="px-3 py-3 font-semibold w-[40px]"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-gray-2 text-ink-gray-9">
                {organizations.map((org) => (
                  <tr key={org.id} className="hover:bg-surface-gray-1 transition-colors group h-[52px]">
                    <td className="px-5 cursor-pointer">
                      <div className="font-semibold text-ink-gray-9">{org.name}</div>
                      <div className="text-xs text-ink-gray-5 mt-0.5">{org.email}</div>
                    </td>
                    <td className="px-5 text-ink-gray-7 cursor-pointer">{org.type}</td>
                    <td className="px-5 cursor-pointer">
                      <div className="text-ink-gray-9">{org.owner}</div>
                    </td>
                    <td className="px-5 text-center font-mono text-ink-gray-7 cursor-pointer">{org.projects}</td>
                    <td className="px-5 text-center font-mono text-ink-gray-7 cursor-pointer">{org.runs}</td>
                    <td className="px-5 cursor-pointer">
                      <div className={`flex items-center gap-1.5 font-medium ${getStatusColor(org.status)}`}>
                        <div className="size-1.5 rounded-full bg-current" />
                        {org.status}
                      </div>
                    </td>
                    <td className="px-5 text-ink-gray-5 text-xs font-medium cursor-pointer">{org.updated}</td>
                    <td className="px-3 text-right">
                      <button className="p-1.5 text-ink-gray-4 hover:text-ink-gray-9 rounded-md hover:bg-outline-gray-2 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                        <MoreHorizontal className="size-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between text-sm">
          <div className="text-ink-gray-6 font-medium">
            Showing 1–50 of 157
          </div>
          <div className="flex items-center gap-1">
            <button className="flex items-center gap-1 px-3 h-8 text-ink-gray-5 hover:text-ink-gray-9 font-medium transition-colors cursor-not-allowed">
              <ChevronLeft className="size-4" /> Previous
            </button>
            <button className="size-8 flex items-center justify-center rounded-md bg-ink-gray-9 text-white font-medium shadow-sm">1</button>
            <button className="size-8 flex items-center justify-center rounded-md text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 font-medium transition-colors">2</button>
            <button className="size-8 flex items-center justify-center rounded-md text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 font-medium transition-colors">3</button>
            <button className="size-8 flex items-center justify-center rounded-md text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 font-medium transition-colors">4</button>
            <button className="flex items-center gap-1 px-3 h-8 text-ink-gray-7 hover:text-ink-gray-9 font-medium transition-colors">
              Next <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
