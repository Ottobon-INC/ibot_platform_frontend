import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { JourneyTracker } from '../../components/admin/JourneyTracker';
import { AdminLayout } from '../../layouts/AdminLayout';
import { 
  ChevronRight,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export default function PlatformDashboard() {
  return (
    <AdminLayout>
      <div className="p-6 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
          
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">Platform Dashboard</h1>
            <p className="text-sm text-ink-gray-6">Monitor organizations, Projects, active Runs, approvals and platform activity.</p>
          </div>

          {/* Top Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-base border border-outline-gray-2 rounded-xl p-5 shadow-sm hover:border-outline-gray-3 transition-colors cursor-pointer group">
              <div className="text-sm font-semibold text-ink-gray-6 mb-2 group-hover:text-ink-gray-9 transition-colors">Active Organizations</div>
              <div className="text-3xl font-bold text-ink-gray-9">148</div>
            </div>
            <div className="bg-surface-base border border-outline-gray-2 rounded-xl p-5 shadow-sm hover:border-outline-gray-3 transition-colors cursor-pointer group">
              <div className="text-sm font-semibold text-ink-gray-6 mb-2 group-hover:text-ink-gray-9 transition-colors">Active Projects</div>
              <div className="text-3xl font-bold text-ink-gray-9">326</div>
            </div>
            <div className="bg-surface-base border border-outline-gray-2 rounded-xl p-5 shadow-sm hover:border-outline-gray-3 transition-colors cursor-pointer group">
              <div className="text-sm font-semibold text-ink-gray-6 mb-2 group-hover:text-ink-gray-9 transition-colors">Active Runs</div>
              <div className="text-3xl font-bold text-ink-gray-9">84</div>
            </div>
            <div className="bg-surface-gray-9 border border-ink-gray-9 rounded-xl p-5 shadow-sm hover:bg-black transition-colors cursor-pointer group text-white">
              <div className="text-sm font-semibold text-white/80 mb-2">Actions Required</div>
              <div className="text-3xl font-bold">17</div>
            </div>
          </div>

          {/* Actions Required Table - Highest Priority */}
          <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
              <h3 className="font-bold text-ink-gray-9">Actions Required</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-base text-ink-gray-5 font-semibold border-b border-outline-gray-2">
                  <tr>
                    <th className="px-6 py-3 font-semibold">TYPE</th>
                    <th className="px-6 py-3 font-semibold">ORGANIZATION</th>
                    <th className="px-6 py-3 font-semibold">PROJECT</th>
                    <th className="px-6 py-3 font-semibold">AGE</th>
                    <th className="px-6 py-3 font-semibold text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-gray-2 text-ink-gray-9 font-medium">
                  <tr className="hover:bg-surface-gray-1 transition-colors">
                    <td className="px-6 py-4">Organization Review</td>
                    <td className="px-6 py-4">ABC Technologies</td>
                    <td className="px-6 py-4 text-ink-gray-4">—</td>
                    <td className="px-6 py-4 text-amber-600">Today</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="outline" theme="gray" size="sm">Review &rarr;</Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-gray-1 transition-colors">
                    <td className="px-6 py-4">Run Setup Review</td>
                    <td className="px-6 py-4">RedClay</td>
                    <td className="px-6 py-4">Graduate Project</td>
                    <td className="px-6 py-4">2h</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="outline" theme="gray" size="sm">Review &rarr;</Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-gray-1 transition-colors">
                    <td className="px-6 py-4">Commercial Review</td>
                    <td className="px-6 py-4">XYZ Academy</td>
                    <td className="px-6 py-4">AI Project</td>
                    <td className="px-6 py-4">5h</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="outline" theme="gray" size="sm">Review &rarr;</Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-gray-1 transition-colors">
                    <td className="px-6 py-4">Ownership Change</td>
                    <td className="px-6 py-4">ABC Technologies</td>
                    <td className="px-6 py-4">Talent Project</td>
                    <td className="px-6 py-4">1d</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="outline" theme="gray" size="sm">Review &rarr;</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Organizations & Projects Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Organizations summary */}
            <div className="space-y-4">
              <h3 className="font-bold text-ink-gray-9 flex items-center justify-between">
                Organizations
                <Link to="/admin/organizations" className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 flex items-center gap-1">View all <ChevronRight className="size-3" /></Link>
              </h3>
              <div className="bg-surface-base border border-outline-gray-2 rounded-xl p-5 shadow-sm">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-ink-gray-6 mb-1">Active</div>
                    <div className="text-2xl font-bold text-ink-gray-9">148</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-gray-6 mb-1">Under Review</div>
                    <div className="text-2xl font-bold text-ink-gray-9">4</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-gray-6 mb-1">Suspended</div>
                    <div className="text-2xl font-bold text-ink-gray-9">2</div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-4 border-t border-outline-gray-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <div className="font-semibold text-ink-gray-9">ABC Technologies</div>
                      <div className="text-ink-gray-5">Enterprise &middot; Ravi Kumar</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-ink-gray-9">2 Active Runs</div>
                      <div className="text-green-600 font-semibold text-xs uppercase tracking-wider">Active</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <div className="font-semibold text-ink-gray-9">XYZ Academy</div>
                      <div className="text-ink-gray-5">Academy &middot; Anjali</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-ink-gray-9">1 Active Run</div>
                      <div className="text-green-600 font-semibold text-xs uppercase tracking-wider">Active</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <div className="font-semibold text-ink-gray-9">NewCo Learning</div>
                      <div className="text-ink-gray-5">Enterprise &middot; Suresh</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-ink-gray-9">0 Active Runs</div>
                      <div className="text-amber-600 font-semibold text-xs uppercase tracking-wider">Under Review</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects & Runs summary */}
            <div className="space-y-4">
              <h3 className="font-bold text-ink-gray-9 flex items-center justify-between">
                Projects & Runs
                <Link to="#" className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 flex items-center gap-1">View all <ChevronRight className="size-3" /></Link>
              </h3>
              <div className="bg-surface-base border border-outline-gray-2 rounded-xl p-5 shadow-sm">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-ink-gray-6 mb-1">Active Projects</div>
                    <div className="text-2xl font-bold text-ink-gray-9">326</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-gray-6 mb-1">Active Runs</div>
                    <div className="text-2xl font-bold text-ink-gray-9">84</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-gray-6 mb-1">Runs On Hold</div>
                    <div className="text-2xl font-bold text-ink-gray-9">6</div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-4 border-t border-outline-gray-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <div className="font-semibold text-ink-gray-9 mb-1">ABC Technologies</div>
                      <div className="text-ink-gray-8">Graduate Talent Project &middot; Apr 2027</div>
                      <div className="text-xs text-ink-gray-5 mt-1">Active: Identify + Build</div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <JourneyTracker phases={{ identify: 'active', build: 'active', operate: 'not_started', transfer: 'not_started' }} />
                      <div className="text-green-600 font-semibold text-xs uppercase tracking-wider">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Attention Grid (4 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-5 hover:bg-amber-50 transition-colors cursor-pointer group">
              <h4 className="font-bold text-amber-900 mb-3 flex items-center justify-between">
                Commercial
                <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
              </h4>
              <div className="space-y-2 text-sm text-amber-800 font-medium">
                <div>3 Awaiting Internal Review</div>
                <div>2 Awaiting Client Approval</div>
                <div>1 Amendment Pending</div>
              </div>
            </div>
            
            <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-5 hover:bg-blue-50 transition-colors cursor-pointer group">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center justify-between">
                Finance
                <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
              </h4>
              <div className="space-y-2 text-sm text-blue-800 font-medium">
                <div>5 Outstanding Invoices</div>
                <div>2 Reconciliation Cases</div>
                <div>3 Success Fee Reviews</div>
              </div>
            </div>

            <div className="bg-red-50/50 border border-red-200 rounded-xl p-5 hover:bg-red-50 transition-colors cursor-pointer group">
              <h4 className="font-bold text-red-900 mb-3 flex items-center justify-between">
                Ottobon Team
                <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
              </h4>
              <div className="space-y-2 text-sm text-red-800 font-medium">
                <div>2 active Runs missing Phase Lead</div>
                <div>1 Project awaiting Lead assignment</div>
              </div>
            </div>

            <div className="bg-surface-gray-1 border border-outline-gray-2 rounded-xl p-5 hover:border-outline-gray-3 transition-colors cursor-pointer group">
              <h4 className="font-bold text-ink-gray-9 mb-3 flex items-center justify-between">
                Operations
                <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
              </h4>
              <div className="space-y-2 text-sm text-ink-gray-7 font-medium">
                <div>3 Notification failures</div>
                <div>1 Integration error</div>
                <div>2 Failed background jobs</div>
              </div>
            </div>

          </div>

          {/* Integrations & Recent Activity Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="space-y-4">
              <h3 className="font-bold text-ink-gray-9">Integrations</h3>
              <div className="bg-surface-base border border-outline-gray-2 rounded-xl p-5 shadow-sm divide-y divide-outline-gray-2">
                <div className="flex items-center justify-between py-2 first:pt-0">
                  <span className="text-sm font-medium text-ink-gray-9">SMTP</span>
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Healthy</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-ink-gray-9">Payments</span>
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Healthy</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-ink-gray-9 flex items-center gap-1.5">
                    <AlertCircle className="size-3.5 text-amber-500" /> WhatsApp
                  </span>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Attention</span>
                </div>
                <div className="flex items-center justify-between py-2 pb-0">
                  <span className="text-sm font-medium text-ink-gray-9">Storage</span>
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Healthy</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-ink-gray-9 flex items-center justify-between">
                Recent Activity
                <Link to="#" className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 flex items-center gap-1">View Audit <ChevronRight className="size-3" /></Link>
              </h3>
              <div className="bg-surface-base border border-outline-gray-2 rounded-xl p-5 shadow-sm">
                <div className="space-y-5 relative before:absolute before:inset-y-1 before:left-[11px] before:w-px before:bg-outline-gray-2">
                  
                  <div className="relative pl-8">
                    <div className="absolute left-1.5 top-1.5 size-2 rounded-full bg-ink-gray-4 ring-4 ring-white" />
                    <div className="text-sm font-medium text-ink-gray-9">ABC Technologies approved</div>
                    <div className="text-xs text-ink-gray-5 mt-0.5">12 min ago</div>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute left-1.5 top-1.5 size-2 rounded-full bg-blue-500 ring-4 ring-white" />
                    <div className="text-sm font-medium text-ink-gray-9">Graduate Talent Project — Apr 2027 Run activated</div>
                    <div className="text-xs text-ink-gray-5 mt-0.5">38 min ago</div>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute left-1.5 top-1.5 size-2 rounded-full bg-green-500 ring-4 ring-white" />
                    <div className="text-sm font-medium text-ink-gray-9">Commercial V2 approved for XYZ Academy</div>
                    <div className="text-xs text-ink-gray-5 mt-0.5">1h ago</div>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute left-1.5 top-1.5 size-2 rounded-full bg-ink-gray-4 ring-4 ring-white" />
                    <div className="text-sm font-medium text-ink-gray-9">Phase ownership changed for Talent Project</div>
                    <div className="text-xs text-ink-gray-5 mt-0.5">2h ago</div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
