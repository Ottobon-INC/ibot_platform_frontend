import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../layouts/AdminLayout';
import { Button } from '../../components/ui/Button';
import { 
  ChevronRight, 
  MoreHorizontal, 
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

type MemberState = 'Active' | 'Paused';

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  access: MemberState;
  projects: number;
  phases: number;
  updated: string;
}

const initialMembers: Member[] = [
  { id: '1', name: 'Ravi Kumar', email: 'ravi@abctech.com', role: 'Organization Owner', access: 'Active', projects: 4, phases: 2, updated: '1h' },
  { id: '2', name: 'Suresh Kumar', email: 'suresh@abctech.com', role: 'Organization Member', access: 'Active', projects: 3, phases: 1, updated: '3h' },
  { id: '3', name: 'Priya Rao', email: 'priya@abctech.com', role: 'Organization Member', access: 'Active', projects: 2, phases: 2, updated: '1d' },
  { id: '4', name: 'Anjali Kumar', email: 'anjali@abctech.com', role: 'Organization Member', access: 'Paused', projects: 1, phases: 0, updated: '2d' },
];

export default function OrganizationAccessManagement() {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [isSuspended, setIsSuspended] = useState(false);
  const [showOrgDropdown, setShowOrgDropdown] = useState(false);
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  
  // Member action state
  const [activeDropdownRow, setActiveDropdownRow] = useState<string | null>(null);
  const [memberToToggle, setMemberToToggle] = useState<Member | null>(null);

  const toggleOrgSuspension = () => {
    setIsSuspended(!isSuspended);
    setShowSuspendModal(false);
  };

  const toggleMemberAccess = () => {
    if (memberToToggle) {
      setMembers(members.map(m => 
        m.id === memberToToggle.id 
          ? { ...m, access: m.access === 'Active' ? 'Paused' : 'Active' } 
          : m
      ));
    }
    setMemberToToggle(null);
  };

  return (
    <AdminLayout>
      <div className="p-6 md:p-8 max-w-[1200px] mx-auto animate-in fade-in duration-500 pb-24">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-ink-gray-5 mb-6 uppercase tracking-wider">
          <Link to="/admin/organizations" className="hover:text-ink-gray-9 transition-colors">Organizations</Link>
          <ChevronRight className="size-3" />
          <Link to="/admin/organizations/abc-tech" className="hover:text-ink-gray-9 transition-colors">ABC Technologies</Link>
          <ChevronRight className="size-3" />
          <span className="text-ink-gray-9">Access</span>
        </div>

        {/* Suspension Banner */}
        {isSuspended && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="size-5 text-red-600 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-red-900">Organization access is suspended.</h3>
              <p className="text-sm text-red-800 mt-1">Members cannot currently enter this workspace. Existing data and assignments remain unchanged.</p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-1">Organization Access</h1>
          <p className="text-sm font-medium text-ink-gray-6 mb-4">Manage access to the ABC Technologies workspace.</p>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-outline-gray-2">
            <div>
              <div className="text-sm font-bold text-ink-gray-9">ABC Technologies</div>
              <div className="text-sm text-ink-gray-6">Enterprise</div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs ${isSuspended ? 'text-red-600' : 'text-green-600'}`}>
                <div className="size-2 rounded-full bg-current" /> {isSuspended ? 'Suspended' : 'Active'}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          
          {/* Workspace Access Summary */}
          <section>
            <div className="flex items-center justify-between mb-4 border-b border-outline-gray-2 pb-2">
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider">Workspace Access</h2>
              <div className="relative">
                <Button 
                  onClick={() => setShowOrgDropdown(!showOrgDropdown)} 
                  variant="ghost" 
                  theme="gray" 
                  size="sm"
                  className="px-2 h-7"
                >
                  <MoreHorizontal className="size-4" />
                </Button>
                {showOrgDropdown && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setShowOrgDropdown(false)} />
                    <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-outline-gray-2 rounded-md shadow-lg z-20 overflow-hidden py-1">
                      <button 
                        onClick={() => {
                          setShowOrgDropdown(false);
                          setShowSuspendModal(true);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${isSuspended ? 'text-green-600 hover:bg-green-50' : 'text-red-600 hover:bg-red-50'}`}
                      >
                        {isSuspended ? 'Reactivate Organization' : 'Suspend Organization'}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 text-sm">
              <div>
                <div className="text-ink-gray-5 font-medium mb-1">Status</div>
                <div className="font-bold text-ink-gray-9">{isSuspended ? 'Suspended' : 'Active'}</div>
              </div>
              <div>
                <div className="text-ink-gray-5 font-medium mb-1">Organization Owner</div>
                <div className="font-bold text-ink-gray-9">Ravi Kumar</div>
              </div>
              <div>
                <div className="text-ink-gray-5 font-medium mb-1">Active Members</div>
                <div className="font-bold text-ink-gray-9">12</div>
              </div>
              <div>
                <div className="text-ink-gray-5 font-medium mb-1">Pending Invitations</div>
                <div className="font-bold text-ink-gray-9">2</div>
              </div>
              <div>
                <div className="text-ink-gray-5 font-medium mb-1">Suspended Members</div>
                <div className="font-bold text-ink-gray-9">1</div>
              </div>
            </div>
          </section>

          {/* Organization Members Table */}
          <section>
            <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4 border-b border-outline-gray-2 pb-2">Organization Members</h2>
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-gray-4" />
                <input 
                  type="text" 
                  placeholder="Search members..."
                  className="w-full pl-9 pr-4 py-2 bg-surface-gray-1 border border-outline-gray-3 rounded-md text-sm text-ink-gray-9 placeholder:text-ink-gray-4 focus:outline-none focus:border-ink-gray-9 focus:bg-white transition-colors"
                />
              </div>
              <Button variant="outline" theme="gray" className="gap-2">
                Access Status <Filter className="size-3.5" />
              </Button>
              <Button variant="outline" theme="gray" className="gap-2">
                Assignment <Filter className="size-3.5" />
              </Button>
            </div>

            {/* Table */}
            <div className="border border-outline-gray-2 rounded-lg overflow-x-auto bg-white shadow-sm">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="bg-surface-gray-1 border-b border-outline-gray-2">
                    <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs">Member</th>
                    <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs">Email</th>
                    <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs">Access</th>
                    <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs text-right">Projects</th>
                    <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs text-right">Phases</th>
                    <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs text-right">Updated</th>
                    <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs text-center w-12"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-gray-2">
                  {members.map((member) => (
                    <tr key={member.id} className="hover:bg-surface-gray-1 transition-colors">
                      <td className="px-5 py-3">
                        <div className="font-bold text-ink-gray-9">{member.name}</div>
                        <div className="text-xs text-ink-gray-5 font-medium">{member.role}</div>
                      </td>
                      <td className="px-5 py-3 text-ink-gray-7">{member.email}</td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex items-center text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          isSuspended ? 'bg-surface-gray-2 text-ink-gray-6' : 
                          member.access === 'Active' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                        }`}>
                          {isSuspended ? 'Blocked by Org' : member.access}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-right font-medium text-ink-gray-9">{member.projects}</td>
                      <td className="px-5 py-3 text-right font-medium text-ink-gray-9">{member.phases}</td>
                      <td className="px-5 py-3 text-right text-ink-gray-5 text-xs font-mono">{member.updated}</td>
                      <td className="px-5 py-3 text-center">
                        <div className="relative inline-block text-left">
                          <button 
                            onClick={() => setActiveDropdownRow(activeDropdownRow === member.id ? null : member.id)}
                            className="p-1.5 text-ink-gray-4 hover:text-ink-gray-9 hover:bg-surface-gray-2 rounded-md transition-colors"
                          >
                            <MoreHorizontal className="size-4" />
                          </button>
                          {activeDropdownRow === member.id && (
                            <>
                              <div className="fixed inset-0 z-10" onClick={() => setActiveDropdownRow(null)} />
                              <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-outline-gray-2 rounded-md shadow-lg z-20 py-1 text-sm font-medium">
                                <button className="w-full text-left px-4 py-2 text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors">View Member</button>
                                <button className="w-full text-left px-4 py-2 text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors">View Assignments</button>
                                <button 
                                  onClick={() => {
                                    setMemberToToggle(member);
                                    setActiveDropdownRow(null);
                                  }}
                                  className="w-full text-left px-4 py-2 text-amber-600 hover:bg-amber-50 transition-colors border-t border-outline-gray-2 mt-1"
                                >
                                  {member.access === 'Active' ? 'Pause Organization Access' : 'Restore Organization Access'}
                                </button>
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
                <div>Showing 1–4 of 13</div>
                <div className="flex gap-2">
                  <button className="px-2 py-1 border border-outline-gray-3 rounded hover:bg-white text-ink-gray-4 cursor-not-allowed">Previous</button>
                  <button className="px-2 py-1 border border-outline-gray-3 rounded hover:bg-white text-ink-gray-9 font-medium bg-white">1</button>
                  <button className="px-2 py-1 border border-outline-gray-3 rounded hover:bg-white text-ink-gray-7">2</button>
                  <button className="px-2 py-1 border border-outline-gray-3 rounded hover:bg-white text-ink-gray-9">Next</button>
                </div>
              </div>
            </div>
          </section>

          {/* Pending Invitations */}
          <section>
            <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4 border-b border-outline-gray-2 pb-2">Pending Invitations</h2>
            <div className="border border-outline-gray-2 rounded-lg overflow-x-auto bg-white shadow-sm">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="bg-surface-gray-1 border-b border-outline-gray-2">
                    <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs">Email</th>
                    <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs">Invited By</th>
                    <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs text-right">Sent</th>
                    <th className="px-5 py-3 font-bold text-ink-gray-5 uppercase tracking-wider text-xs text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-gray-2">
                  <tr className="hover:bg-surface-gray-1 transition-colors">
                    <td className="px-5 py-3 font-medium text-ink-gray-9">kiran@abctech.com</td>
                    <td className="px-5 py-3 text-ink-gray-7">Ravi Kumar</td>
                    <td className="px-5 py-3 text-right text-ink-gray-5">22 Sep 2026</td>
                    <td className="px-5 py-3 text-right">
                      <span className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider bg-surface-gray-2 px-2 py-0.5 rounded">Pending</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-gray-1 transition-colors">
                    <td className="px-5 py-3 font-medium text-ink-gray-9">amita@abctech.com</td>
                    <td className="px-5 py-3 text-ink-gray-7">Ravi Kumar</td>
                    <td className="px-5 py-3 text-right text-ink-gray-5">20 Sep 2026</td>
                    <td className="px-5 py-3 text-right">
                      <span className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider bg-surface-gray-2 px-2 py-0.5 rounded">Pending</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Access History */}
          <section>
            <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4 border-b border-outline-gray-2 pb-2">Access History</h2>
            <div className="space-y-6 relative before:absolute before:inset-y-1 before:left-[11px] before:w-px before:bg-outline-gray-2 ml-1">
              
              <div className="relative pl-8">
                <div className="absolute left-1.5 top-1.5 size-2 rounded-full bg-amber-500 ring-4 ring-white" />
                <div className="text-sm font-medium text-ink-gray-9">Organization access suspended</div>
                <div className="text-xs text-ink-gray-5 mt-0.5">by Ravi Kumar · Ottobon Platform Admin<br/>22 Sep 2026, 4:20 PM</div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-1.5 top-1.5 size-2 rounded-full bg-green-500 ring-4 ring-white" />
                <div className="text-sm font-medium text-ink-gray-9">Organization reactivated</div>
                <div className="text-xs text-ink-gray-5 mt-0.5">by Ravi Kumar · Ottobon Platform Admin<br/>22 Sep 2026, 5:05 PM</div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-1.5 top-1.5 size-2 rounded-full bg-amber-500 ring-4 ring-white" />
                <div className="text-sm font-medium text-ink-gray-9">Suresh Kumar's Organization access paused</div>
                <div className="text-xs text-ink-gray-5 mt-0.5">by authorized administrator<br/>21 Sep 2026, 11:00 AM</div>
              </div>

            </div>
          </section>

        </div>
      </div>

      {/* Modals */}

      {/* Suspend Org Modal */}
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
                  ? 'Members will regain Organization access according to their existing membership and assignments.' 
                  : 'Members will temporarily lose access to this Organization workspace. Existing Projects, Runs, assignments and historical data will remain unchanged.'}
              </p>
              <div className="flex justify-end gap-3">
                <Button onClick={() => setShowSuspendModal(false)} variant="outline" theme="gray">Cancel</Button>
                <button 
                  onClick={toggleOrgSuspension}
                  className={`px-4 py-2 text-white rounded-md text-sm font-semibold transition-colors ${isSuspended ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
                >
                  {isSuspended ? 'Reactivate Organization' : 'Suspend Organization'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pause Member Modal */}
      {memberToToggle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMemberToToggle(null)} />
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6">
              <h3 className={`text-lg font-bold mb-2 ${memberToToggle.access === 'Active' ? 'text-amber-600' : 'text-green-600'}`}>
                {memberToToggle.access === 'Active' 
                  ? `Pause ${memberToToggle.name}'s access to ABC Technologies?` 
                  : `Restore ${memberToToggle.name}'s access to ABC Technologies?`
                }
              </h3>
              <p className="text-sm text-ink-gray-6 mb-6">
                {memberToToggle.access === 'Active'
                  ? `${memberToToggle.name.split(' ')[0]} will temporarily lose access to this Organization. Existing Project and Phase assignments and historical activity will remain unchanged.`
                  : `${memberToToggle.name.split(' ')[0]} will regain access to this Organization according to their existing assignments.`
                }
              </p>
              <div className="flex justify-end gap-3">
                <Button onClick={() => setMemberToToggle(null)} variant="outline" theme="gray">Cancel</Button>
                <button 
                  onClick={toggleMemberAccess}
                  className={`px-4 py-2 text-white rounded-md text-sm font-semibold transition-colors ${memberToToggle.access === 'Active' ? 'bg-amber-600 hover:bg-amber-700' : 'bg-green-600 hover:bg-green-700'}`}
                >
                  {memberToToggle.access === 'Active' ? 'Pause Access' : 'Restore Access'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  );
}
