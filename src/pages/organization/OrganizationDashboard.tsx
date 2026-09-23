import React from 'react';
import { Link } from 'react-router-dom';
import { OrganizationLayout } from '../../layouts/OrganizationLayout';
import { Button } from '../../components/ui/Button';
import { 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function OrganizationDashboard() {
  return (
    <OrganizationLayout>
      <div className="p-6 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-1">Organization Dashboard</h1>
              <p className="text-sm text-ink-gray-6">Overview of your active projects, team, and financials.</p>
            </div>
            <Button variant="solid" theme="gray" label="Create Project" className="w-full md:w-auto shadow-sm" />
          </div>

          {/* Top Summary Strip (Frappe Style) */}
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-outline-gray-2 rounded-xl border border-outline-gray-2 bg-surface-base shadow-sm">
            <Link to="/org/projects" className="flex flex-1 flex-col p-4 sm:p-5 hover:bg-surface-gray-1 transition-colors group">
              <span className="text-xs font-semibold text-ink-gray-5 uppercase tracking-wider group-hover:text-ink-gray-7 transition-colors">Projects</span>
              <span className="mt-1 text-2xl font-bold text-ink-gray-9">6</span>
            </Link>
            <Link to="/org/runs" className="flex flex-1 flex-col p-4 sm:p-5 hover:bg-surface-gray-1 transition-colors group">
              <span className="text-xs font-semibold text-ink-gray-5 uppercase tracking-wider group-hover:text-ink-gray-7 transition-colors">Active Runs</span>
              <span className="mt-1 text-2xl font-bold text-ink-gray-9">3</span>
            </Link>
            <Link to="/org/team" className="flex flex-1 flex-col p-4 sm:p-5 hover:bg-surface-gray-1 transition-colors group">
              <span className="text-xs font-semibold text-ink-gray-5 uppercase tracking-wider group-hover:text-ink-gray-7 transition-colors">Team Members</span>
              <span className="mt-1 text-2xl font-bold text-ink-gray-9">18</span>
            </Link>
            <Link to="/org/approvals" className="flex flex-1 flex-col p-4 sm:p-5 hover:bg-surface-gray-1 transition-colors group">
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider group-hover:text-amber-700 transition-colors">Actions Required</span>
              <span className="mt-1 text-2xl font-bold text-amber-700">2</span>
            </Link>
          </div>

          {/* ACTIONS REQUIRED Section */}
          <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-gray-2 bg-amber-50/50">
              <h3 className="font-bold text-amber-900 text-sm uppercase tracking-wider">Actions Required</h3>
            </div>
            <div className="divide-y divide-outline-gray-2">
              <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface-gray-1 transition-colors">
                <div>
                  <div className="text-sm font-semibold text-ink-gray-9 mb-0.5">Graduate Talent Project &middot; Apr 2027</div>
                  <div className="text-sm font-medium text-amber-700">Run setup requires completion</div>
                </div>
                <Button variant="outline" theme="gray" size="sm" className="w-full sm:w-auto shrink-0 bg-surface-base">
                  Complete Setup <ArrowRight className="size-4 ml-1" />
                </Button>
              </div>
              <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface-gray-1 transition-colors">
                <div>
                  <div className="text-sm font-semibold text-ink-gray-9 mb-0.5">AI Workforce Project</div>
                  <div className="text-sm font-medium text-amber-700">Build Lead has not been assigned</div>
                </div>
                <Button variant="outline" theme="gray" size="sm" className="w-full sm:w-auto shrink-0 bg-surface-base">
                  Review Team <ArrowRight className="size-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* ACTIVE PROJECT RUNS Section */}
          <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
              <h3 className="font-bold text-ink-gray-9 text-sm uppercase tracking-wider">Active Project Runs</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-base text-ink-gray-5 font-semibold border-b border-outline-gray-2">
                  <tr>
                    <th className="px-6 py-3 font-semibold">PROJECT / RUN</th>
                    <th className="px-6 py-3 font-semibold">JOURNEY</th>
                    <th className="px-6 py-3 font-semibold">ACTIVE PHASES</th>
                    <th className="px-6 py-3 font-semibold">PROJECT LEAD</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-gray-2 text-ink-gray-9">
                  <tr className="hover:bg-surface-gray-1 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold">Graduate Talent</div>
                      <div className="text-ink-gray-6">Apr 2027</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-ink-gray-6">I &rarr; B &rarr; O &rarr; T</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 font-bold text-xs tracking-widest text-ink-gray-8">
                        <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-ink-gray-9" /> I</span>
                        <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-ink-gray-9" /> B</span>
                        <span className="flex items-center gap-1 text-ink-gray-4"><span className="size-2 rounded-full border border-ink-gray-4" /> O</span>
                        <span className="flex items-center gap-1 text-ink-gray-4"><span className="size-2 rounded-full border border-ink-gray-4" /> T</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium">Suresh Kumar</td>
                  </tr>
                  <tr className="hover:bg-surface-gray-1 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold">AI Workforce</div>
                      <div className="text-ink-gray-6">Sep 2026</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-ink-gray-6">B &rarr; O</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 font-bold text-xs tracking-widest text-ink-gray-8">
                        <span className="flex items-center gap-1 text-ink-green-6"><CheckSquare className="size-3" strokeWidth={3} /> B</span>
                        <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-ink-gray-9" /> O</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium">Priya Rao</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link to="/org/runs" className="block px-6 py-3 text-sm font-semibold text-ink-gray-6 hover:text-ink-gray-9 hover:bg-surface-gray-1 transition-colors border-t border-outline-gray-2 text-center sm:text-right">
              View all Runs &rarr;
            </Link>
          </div>

          {/* PROJECTS Section */}
          <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
              <h3 className="font-bold text-ink-gray-9 text-sm uppercase tracking-wider">Projects</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-outline-gray-2 text-ink-gray-9">
                  <tr className="hover:bg-surface-gray-1 transition-colors">
                    <td className="px-6 py-4 font-semibold w-1/3">Graduate Talent Project</td>
                    <td className="px-6 py-4 text-ink-gray-6 font-medium">Suresh Kumar</td>
                    <td className="px-6 py-4"><span className="font-semibold">3</span> Runs</td>
                    <td className="px-6 py-4"><span className="font-semibold">1</span> Active</td>
                    <td className="px-6 py-4 text-right text-ink-gray-5">2h ago</td>
                  </tr>
                  <tr className="hover:bg-surface-gray-1 transition-colors">
                    <td className="px-6 py-4 font-semibold w-1/3">AI Workforce Project</td>
                    <td className="px-6 py-4 text-ink-gray-6 font-medium">Priya Rao</td>
                    <td className="px-6 py-4"><span className="font-semibold">2</span> Runs</td>
                    <td className="px-6 py-4"><span className="font-semibold">1</span> Active</td>
                    <td className="px-6 py-4 text-right text-ink-gray-5">6h ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link to="/org/projects" className="block px-6 py-3 text-sm font-semibold text-ink-gray-6 hover:text-ink-gray-9 hover:bg-surface-gray-1 transition-colors border-t border-outline-gray-2 text-center sm:text-right">
              View all Projects &rarr;
            </Link>
          </div>

          {/* Two-Column Grid for Team / Commercials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* TEAM */}
            <div className="flex flex-col">
              <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-sm overflow-hidden flex-1 flex flex-col">
                <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                  <h3 className="font-bold text-ink-gray-9 text-sm uppercase tracking-wider">Team</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center gap-4 text-sm font-semibold text-ink-gray-7">
                  <div className="flex items-center justify-between">
                    <span>Active Members</span>
                    <span className="text-2xl font-bold text-ink-gray-9">18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Pending Invitations</span>
                    <span className="text-2xl font-bold text-ink-gray-9">3</span>
                  </div>
                </div>
                <Link to="/org/team" className="block px-6 py-3 text-sm font-semibold text-ink-gray-6 hover:text-ink-gray-9 hover:bg-surface-gray-1 transition-colors border-t border-outline-gray-2 text-center sm:text-right mt-auto">
                  View Team &rarr;
                </Link>
              </div>
            </div>

            {/* COMMERCIALS & BILLING */}
            <div className="flex flex-col">
              <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-sm overflow-hidden flex-1 flex flex-col">
                <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                  <h3 className="font-bold text-ink-gray-9 text-sm uppercase tracking-wider">Commercials & Billing</h3>
                </div>
                <div className="p-6 flex-1 grid grid-cols-2 gap-6 text-sm font-semibold text-ink-gray-7">
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-ink-gray-9 mb-1">3</div>
                      <div className="leading-tight">Active Commercial<br/>Setups</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-ink-gray-9 mb-1">1</div>
                      <div className="leading-tight">Pending Commercial<br/>Review</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-ink-gray-9 mb-1">2</div>
                      <div className="leading-tight">Open<br/>Invoices</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-ink-gray-9 mb-1">1</div>
                      <div className="leading-tight">Payment<br/>Pending</div>
                    </div>
                  </div>
                </div>
                <div className="flex divide-x divide-outline-gray-2 border-t border-outline-gray-2 mt-auto">
                  <Link to="/org/commercials" className="flex-1 block px-6 py-3 text-sm font-semibold text-ink-gray-6 hover:text-ink-gray-9 hover:bg-surface-gray-1 transition-colors text-center">
                    Commercials &rarr;
                  </Link>
                  <Link to="/org/billing" className="flex-1 block px-6 py-3 text-sm font-semibold text-ink-gray-6 hover:text-ink-gray-9 hover:bg-surface-gray-1 transition-colors text-center">
                    Billing &rarr;
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* RECENT ACTIVITY Section */}
          <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
              <h3 className="font-bold text-ink-gray-9 text-sm uppercase tracking-wider">Recent Activity</h3>
            </div>
            <div className="divide-y divide-outline-gray-2">
              <div className="p-4 sm:px-6 flex items-center justify-between gap-4 hover:bg-surface-gray-1 transition-colors">
                <span className="text-sm font-medium text-ink-gray-9">Apr 2027 Run created</span>
                <span className="text-sm font-medium text-ink-gray-5">2h ago</span>
              </div>
              <div className="p-4 sm:px-6 flex items-center justify-between gap-4 hover:bg-surface-gray-1 transition-colors">
                <span className="text-sm font-medium text-ink-gray-9">Project Lead assigned</span>
                <span className="text-sm font-medium text-ink-gray-5">5h ago</span>
              </div>
              <div className="p-4 sm:px-6 flex items-center justify-between gap-4 hover:bg-surface-gray-1 transition-colors">
                <span className="text-sm font-medium text-ink-gray-9">Team Member invited</span>
                <span className="text-sm font-medium text-ink-gray-5">1d ago</span>
              </div>
            </div>
            <Link to="/org/activity" className="block px-6 py-3 text-sm font-semibold text-ink-gray-6 hover:text-ink-gray-9 hover:bg-surface-gray-1 transition-colors border-t border-outline-gray-2 text-center sm:text-right">
              View all Activity &rarr;
            </Link>
          </div>

        </div>
      </div>
    </OrganizationLayout>
  );
}
