import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../layouts/AdminLayout';
import { Button } from '../../components/ui/Button';
import { Search, ChevronDown, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

type TabType = 'Needs Review' | 'Waiting for Information' | 'All';

const mockReviews = [
  { id: 'rev-1', name: 'NewCo Learning', location: 'India', type: 'Enterprise', owner: 'Suresh Kumar', email: 'suresh@newco.com', submitted: 'Today 10:15', status: 'Needs Review', age: '6h', requestedInfo: null },
  { id: 'rev-2', name: 'ABC Learning', location: 'India', type: 'Academy', owner: 'Priya Rao', email: 'priya@abc.in', submitted: 'Today 12:40', status: 'Information Received', age: '4h', requestedInfo: null },
  { id: 'rev-3', name: 'TalentWorks', location: 'United States', type: 'Enterprise', owner: 'Kiran Kumar', email: 'kiran@talentworks.com', submitted: 'Yesterday', status: 'Needs Review', age: '1d', requestedInfo: null },
  { id: 'rev-4', name: 'Future Academy', location: 'United Kingdom', type: 'Academy', owner: 'Anjali Reddy', email: 'anjali@future.in', submitted: '19 Sep', status: 'Needs Review', age: '2d', requestedInfo: null },
  { id: 'rev-5', name: 'XYZ Academy', location: 'India', type: 'Academy', owner: 'Anjali Rao', email: 'anjali@xyz.edu', submitted: '18 Sep', status: 'Waiting for Information', age: '3d', requestedInfo: 'Website' },
  { id: 'rev-6', name: 'ABC Enterprise', location: 'United States', type: 'Enterprise', owner: 'Ravi Kumar', email: 'ravi@company.com', submitted: '17 Sep', status: 'Waiting for Information', age: '4d', requestedInfo: 'Contact number' },
];

export default function OrganizationReviewQueue() {
  const [activeTab, setActiveTab] = useState<TabType>('Needs Review');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Needs Review': return 'text-amber-600';
      case 'Information Received': return 'text-blue-600';
      case 'Waiting for Information': return 'text-ink-gray-5';
      default: return 'text-ink-gray-5';
    }
  };

  const filteredReviews = mockReviews.filter(r => {
    if (activeTab === 'Needs Review') return r.status === 'Needs Review' || r.status === 'Information Received';
    if (activeTab === 'Waiting for Information') return r.status === 'Waiting for Information';
    return true;
  });

  return (
    <AdminLayout>
      <div className="p-6 md:p-8 max-w-[1200px] mx-auto animate-in fade-in duration-500">
        
        {/* Header Area */}
        <div className="mb-8">
          <Link to="/admin/organizations" className="inline-flex items-center gap-1 text-sm font-medium text-ink-gray-5 hover:text-ink-gray-9 transition-colors mb-4">
            <ArrowLeft className="size-3.5" /> All Organizations
          </Link>
          <div className="flex items-center gap-2 text-xs font-medium text-ink-gray-5 mb-2 uppercase tracking-wider">
            Organizations / Review Queue
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">Organization Reviews</h1>
          <p className="text-sm text-ink-gray-6">Review new organization registrations submitted to Ottobon.</p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-outline-gray-2 mb-6">
          {(['Needs Review', 'Waiting for Information', 'All'] as TabType[]).map((tab) => {
            const count = tab === 'Needs Review' ? 4 : tab === 'Waiting for Information' ? 2 : 6;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 flex items-center gap-2 text-sm font-medium border-b-2 transition-colors -mb-[1px] ${
                  isActive 
                    ? 'border-ink-gray-9 text-ink-gray-9' 
                    : 'border-transparent text-ink-gray-5 hover:text-ink-gray-7 hover:border-outline-gray-3'
                }`}
              >
                {tab}
                <span className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                  isActive ? 'bg-ink-gray-9 text-white' : 'bg-surface-gray-1 border border-outline-gray-2 text-ink-gray-6'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-gray-5" />
              <input 
                type="text" 
                placeholder="Search reviews..." 
                className="w-64 pl-9 pr-4 h-9 bg-white border border-outline-gray-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ink-gray-9 transition-colors shadow-sm"
              />
            </div>
            
            <button className="h-9 px-3 bg-white border border-outline-gray-3 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors shadow-sm flex items-center gap-1.5">
              Type <ChevronDown className="size-3.5 opacity-70" />
            </button>
            <button className="h-9 px-3 bg-white border border-outline-gray-3 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors shadow-sm flex items-center gap-1.5">
              Submitted <ChevronDown className="size-3.5 opacity-70" />
            </button>
            <button className="h-9 px-3 bg-white border border-outline-gray-3 rounded-md text-sm font-medium text-ink-gray-7 hover:bg-surface-gray-1 hover:text-ink-gray-9 transition-colors shadow-sm flex items-center gap-1.5">
              More filters <ChevronDown className="size-3.5 opacity-70" />
            </button>
          </div>
          
          <div className="text-sm font-medium text-ink-gray-6 flex items-center gap-2">
            Sort: 
            <button className="text-ink-gray-9 hover:underline underline-offset-4 decoration-outline-gray-3 flex items-center gap-1">
              Oldest first <ChevronDown className="size-3.5" />
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="text-sm font-medium text-ink-gray-6 mb-2">
          {filteredReviews.length} organizations {activeTab === 'Waiting for Information' ? 'waiting for information' : 'awaiting review'}
        </div>

        {/* Data Table */}
        <div className="bg-white border border-outline-gray-2 rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-surface-gray-1 text-ink-gray-5 font-semibold border-b border-outline-gray-2">
                <tr>
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[260px]">ORGANIZATION</th>
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[140px]">TYPE</th>
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[200px]">OWNER</th>
                  {activeTab === 'Waiting for Information' && (
                    <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[160px]">REQUESTED</th>
                  )}
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[140px]">SUBMITTED</th>
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[180px]">STATUS</th>
                  <th className="px-5 py-3 font-semibold hover:text-ink-gray-9 cursor-pointer transition-colors w-[80px] text-right">AGE</th>
                  <th className="px-5 py-3 font-semibold w-[100px] text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-gray-2 text-ink-gray-9">
                {filteredReviews.map((r) => (
                  <tr key={r.id} className="hover:bg-surface-gray-1 transition-colors group h-[52px]">
                    <td className="px-5 cursor-pointer">
                      <div className="font-semibold text-ink-gray-9">{r.name}</div>
                      <div className="text-xs text-ink-gray-5 mt-0.5">{r.location}</div>
                    </td>
                    <td className="px-5 text-ink-gray-7 cursor-pointer">{r.type}</td>
                    <td className="px-5 cursor-pointer">
                      <div className="text-ink-gray-9">{r.owner}</div>
                      <div className="text-xs text-ink-gray-5 mt-0.5">{r.email}</div>
                    </td>
                    {activeTab === 'Waiting for Information' && (
                      <td className="px-5 cursor-pointer">
                        <div className="text-ink-gray-9 max-w-[140px] truncate">{r.requestedInfo}</div>
                      </td>
                    )}
                    <td className="px-5 cursor-pointer text-ink-gray-7">{r.submitted}</td>
                    <td className="px-5 cursor-pointer">
                      <div className={`flex items-center gap-1.5 font-medium ${getStatusColor(r.status)}`}>
                        <div className="size-1.5 rounded-full bg-current" />
                        {r.status}
                      </div>
                    </td>
                    <td className="px-5 text-right font-mono text-ink-gray-5 text-xs cursor-pointer">{r.age}</td>
                    <td className="px-5 text-right">
                      <Link to={`/admin/organizations/reviews/${r.id}`}>
                        <Button variant="outline" theme="gray" size="sm">Review</Button>
                      </Link>
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
            Showing 1–{filteredReviews.length} of {filteredReviews.length}
          </div>
          <div className="flex items-center gap-1">
            <button className="flex items-center gap-1 px-3 h-8 text-ink-gray-5 hover:text-ink-gray-9 font-medium transition-colors cursor-not-allowed">
              <ChevronLeft className="size-4" /> Previous
            </button>
            <button className="size-8 flex items-center justify-center rounded-md bg-ink-gray-9 text-white font-medium shadow-sm">1</button>
            <button className="flex items-center gap-1 px-3 h-8 text-ink-gray-5 hover:text-ink-gray-9 font-medium transition-colors cursor-not-allowed">
              Next <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
