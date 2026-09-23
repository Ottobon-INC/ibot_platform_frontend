import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../layouts/AdminLayout';
import { Button } from '../../components/ui/Button';
import { JourneyTracker } from '../../components/admin/JourneyTracker';
import { 
  CheckCircle2, 
  ChevronRight, 
  MoreHorizontal, 
  ArrowRight,
  ExternalLink,
  AlertTriangle
} from 'lucide-react';

type TabType = 'Overview' | 'Projects' | 'Team' | 'Commercials' | 'Billing' | 'Activity' | 'Access';

export default function OrganizationDetail() {
  const [activeTab, setActiveTab] = useState<TabType>('Overview');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);

  const handleSuspendToggle = () => {
    setIsSuspended(!isSuspended);
    setShowSuspendModal(false);
  };

  return (
    <AdminLayout>
      <div className="p-6 md:p-8 max-w-[1000px] mx-auto animate-in fade-in duration-500 pb-24">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-ink-gray-5 mb-6 uppercase tracking-wider">
          <Link to="/admin/organizations" className="hover:text-ink-gray-9 transition-colors">Organizations</Link>
          <ChevronRight className="size-3" />
          <span className="text-ink-gray-9">ABC Technologies</span>
        </div>

        {/* Suspension Banner */}
        {isSuspended && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="size-5 text-red-600 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-red-900">Organization suspended</h3>
              <p className="text-sm text-red-800 mt-1">Normal Organization access is currently unavailable.</p>
            </div>
          </div>
        )}
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="size-16 rounded-lg bg-surface-gray-1 border border-outline-gray-3 flex items-center justify-center text-xl font-bold text-ink-gray-6 shadow-sm shrink-0">
              AB
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-1">ABC Technologies</h1>
              <div className="text-sm font-medium text-ink-gray-6 flex items-center gap-2 mb-3">
                Enterprise
              </div>
              <div className="text-sm text-ink-gray-6 space-y-1">
                <div><span className="font-medium text-ink-gray-9">Ravi Kumar</span> · Organization Owner</div>
                <div>India · <a href="#" className="hover:underline hover:text-ink-gray-9 transition-colors">abc.com</a></div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs ${isSuspended ? 'text-red-600' : 'text-green-600'}`}>
              <div className="size-2 rounded-full bg-current" /> {isSuspended ? 'Suspended' : 'Active'}
            </div>
            
            <div className="relative">
              <Button 
                onClick={() => setShowDropdown(!showDropdown)} 
                variant="ghost" 
                theme="gray" 
                className="px-2"
              >
                <MoreHorizontal className="size-4" />
              </Button>
              
              {showDropdown && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowDropdown(false)} />
                  <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-outline-gray-2 rounded-md shadow-lg z-20 overflow-hidden py-1 text-sm font-medium">
                    <button 
                      onClick={() => setShowDropdown(false)}
                      className="w-full text-left px-4 py-2 text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors"
                    >
                      View Audit Activity
                    </button>
                    <button 
                      onClick={() => {
                        setShowDropdown(false);
                        setShowSuspendModal(true);
                      }}
                      className={`w-full text-left px-4 py-2 transition-colors border-t border-outline-gray-2 mt-1 ${isSuspended ? 'text-green-600 hover:bg-green-50' : 'text-red-600 hover:bg-red-50'}`}
                    >
                      {isSuspended ? 'Reactivate Organization' : 'Suspend Organization'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* KPI Strip */}
        <div className="flex items-center text-sm mb-8 border border-outline-gray-2 rounded-lg bg-white shadow-sm divide-x divide-outline-gray-2 overflow-hidden">
          <div className="px-6 py-3 flex-1 flex items-baseline gap-2">
            <span className="text-xl font-bold text-ink-gray-9">4</span>
            <span className="font-medium text-ink-gray-6">Projects</span>
          </div>
          <div className="px-6 py-3 flex-1 flex items-baseline gap-2">
            <span className="text-xl font-bold text-ink-gray-9">2</span>
            <span className="font-medium text-ink-gray-6">Active Runs</span>
          </div>
          <div className="px-6 py-3 flex-1 flex items-baseline gap-2">
            <span className="text-xl font-bold text-ink-gray-9">12</span>
            <span className="font-medium text-ink-gray-6">Members</span>
          </div>
          <div className="px-6 py-3 flex-1 flex items-baseline gap-2">
            <span className="text-xl font-bold text-ink-gray-9">1</span>
            <span className="font-medium text-ink-gray-6">Action</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-outline-gray-2 mb-8 overflow-x-auto">
          {(['Overview', 'Projects', 'Team', 'Commercials', 'Billing', 'Activity', 'Access'] as TabType[]).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap -mb-[1px] ${
                  isActive 
                    ? 'border-ink-gray-9 text-ink-gray-9' 
                    : 'border-transparent text-ink-gray-5 hover:text-ink-gray-7 hover:border-outline-gray-3'
                }`}
              >
                {tab}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'Overview' && (
          <div className="space-y-12">
            
            {/* Needs Attention */}
            <section>
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4 border-b border-outline-gray-2 pb-2">Needs Attention</h2>
              <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-5 flex items-center justify-between group">
                <div>
                  <div className="text-sm font-bold text-amber-900 mb-1">Commercial V2 awaiting review</div>
                  <div className="text-sm font-medium text-amber-800">Graduate Talent Project</div>
                </div>
                <Button variant="outline" theme="gray" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Review &rarr;</Button>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-12">
                {/* Organization Information */}
                <section>
                  <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4 border-b border-outline-gray-2 pb-2">Organization Information</h2>
                  <div className="grid grid-cols-[140px_1fr] gap-y-4 text-sm">
                    <div className="text-ink-gray-6">Organization name</div>
                    <div className="font-medium text-ink-gray-9">ABC Technologies</div>
                    
                    <div className="text-ink-gray-6">Type</div>
                    <div className="font-medium text-ink-gray-9">Enterprise</div>
                    
                    <div className="text-ink-gray-6">Country / Region</div>
                    <div className="font-medium text-ink-gray-9">India</div>
                    
                    <div className="text-ink-gray-6">Website</div>
                    <div className="font-medium text-ink-gray-9 flex items-center gap-1.5">
                      <a href="#" className="hover:underline underline-offset-4 text-ink-gray-9">abc.com</a>
                    </div>

                    <div className="text-ink-gray-6">Status</div>
                    <div className="font-medium text-ink-gray-9">{isSuspended ? 'Suspended' : 'Active'}</div>
                  </div>
                </section>

                {/* Organization Owner */}
                <section>
                  <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4 border-b border-outline-gray-2 pb-2">Organization Owner</h2>
                  <div className="mb-4">
                    <div className="font-bold text-ink-gray-9 text-base">Ravi Kumar</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-ink-gray-6">ravi@company.com</span>
                      <span className="flex items-center gap-1 text-green-600 text-[10px] font-bold uppercase tracking-wider bg-green-50 px-1.5 py-0.5 rounded">
                        <CheckCircle2 className="size-3" /> Verified
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-[140px_1fr] gap-y-4 text-sm">
                    <div className="text-ink-gray-6">Platform role</div>
                    <div className="font-medium text-ink-gray-9">Organization Owner</div>
                    
                    <div className="text-ink-gray-6">Designation</div>
                    <div className="font-medium text-ink-gray-9">Head of Talent Acquisition</div>
                  </div>
                </section>
              </div>

              <div className="space-y-12">
                {/* Active Projects & Runs */}
                <section>
                  <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4 border-b border-outline-gray-2 pb-2">Active Projects & Runs</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-ink-gray-9">Graduate Talent Project</div>
                        <div className="text-sm font-medium text-ink-gray-6">Apr 2027</div>
                      </div>
                      <div className="flex items-center gap-4 text-sm mt-3">
                        <JourneyTracker phases={{ identify: 'active', build: 'active', operate: 'not_started', transfer: 'not_started' }} />
                        <div className="text-xs text-ink-gray-5 font-medium">Identify + Build</div>
                      </div>
                      <div className="text-sm mt-3 pt-3 border-t border-outline-gray-2 flex items-center justify-between">
                        <div className="text-ink-gray-6">Lead: <span className="font-medium text-ink-gray-9">Suresh Kumar</span></div>
                        <div className="text-green-600 text-xs font-bold uppercase tracking-wider">Active</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Summaries */}
                <div className="space-y-8">
                  <section>
                    <div className="flex items-center justify-between mb-4 border-b border-outline-gray-2 pb-2">
                      <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider">Access</h2>
                      <Link to="/admin/organizations/abc-tech/access" className="text-xs font-bold text-ink-gray-9 hover:underline flex items-center gap-1">Manage Access <ArrowRight className="size-3" /></Link>
                    </div>
                    <div className="text-sm space-y-2 font-medium">
                      <div className="flex items-center justify-between">
                        <span className="text-ink-gray-6">Organization Owner</span>
                        <span className="text-ink-gray-9">Ravi Kumar</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-ink-gray-6">Active Members</span>
                        <span className="text-ink-gray-9">12</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-ink-gray-6">Pending Invitations</span>
                        <span className="text-ink-gray-9">2</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-ink-gray-6">Suspended Members</span>
                        <span className="text-ink-gray-9">1</span>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center justify-between mb-4 border-b border-outline-gray-2 pb-2">
                      <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider">Commercial</h2>
                      <button onClick={() => setActiveTab('Commercials')} className="text-xs font-bold text-ink-gray-9 hover:underline flex items-center gap-1">View Commercials <ArrowRight className="size-3" /></button>
                    </div>
                    <div className="text-sm space-y-2 font-medium">
                      <div className="flex items-center justify-between">
                        <span className="text-ink-gray-6">Active configurations</span>
                        <span className="text-ink-gray-9">2</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-ink-gray-6">Pending reviews</span>
                        <span className="text-ink-gray-9">1</span>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center justify-between mb-4 border-b border-outline-gray-2 pb-2">
                      <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider">Billing</h2>
                      <button onClick={() => setActiveTab('Billing')} className="text-xs font-bold text-ink-gray-9 hover:underline flex items-center gap-1">View Billing <ArrowRight className="size-3" /></button>
                    </div>
                    <div className="text-sm space-y-2 font-medium">
                      <div className="flex items-center justify-between">
                        <span className="text-ink-gray-6">Outstanding invoices</span>
                        <span className="text-ink-gray-9">2</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-ink-gray-6">Payment issues</span>
                        <span className="text-ink-gray-9">0</span>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center justify-between mb-4 border-b border-outline-gray-2 pb-2">
                      <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider">Recent Activity</h2>
                      <Link to="/admin/organizations/abc-tech/activity" className="text-xs font-bold text-ink-gray-9 hover:underline flex items-center gap-1">View all <ArrowRight className="size-3" /></Link>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-bold text-ink-gray-9">Project created</div>
                        <div className="flex items-center justify-between mt-0.5">
                          <span className="text-xs text-ink-gray-6">Graduate Talent Project</span>
                          <span className="text-xs font-mono text-ink-gray-5">2h ago</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink-gray-9">Project Run activated</div>
                        <div className="flex items-center justify-between mt-0.5">
                          <span className="text-xs text-ink-gray-6">Apr 2027</span>
                          <span className="text-xs font-mono text-ink-gray-5">5h ago</span>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Empty States for other tabs */}
        {activeTab !== 'Overview' && (
          <div className="py-20 text-center">
            <h3 className="text-lg font-bold text-ink-gray-9 mb-2">{activeTab}</h3>
            <p className="text-sm text-ink-gray-5">This tab is currently under construction.</p>
          </div>
        )}

      </div>

      {/* Suspend Modal */}
      {showSuspendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowSuspendModal(false)} />
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6">
              <h3 className={`text-lg font-bold mb-2 ${isSuspended ? 'text-green-600' : 'text-red-600'}`}>
                {isSuspended ? 'Reactivate ABC Technologies?' : 'Suspend ABC Technologies?'}
              </h3>
              <p className="text-sm text-ink-gray-6 mb-6">
                {isSuspended 
                  ? 'Authorized Organization members will regain access according to their existing assignments.' 
                  : 'Organization members will lose normal access to this workspace. Historical data will remain unchanged.'}
              </p>
              <div className="flex justify-end gap-3">
                <Button onClick={() => setShowSuspendModal(false)} variant="outline" theme="gray">Cancel</Button>
                <button 
                  onClick={handleSuspendToggle}
                  className={`px-4 py-2 text-white rounded-md text-sm font-semibold transition-colors ${isSuspended ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
                >
                  {isSuspended ? 'Reactivate' : 'Suspend'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  );
}
