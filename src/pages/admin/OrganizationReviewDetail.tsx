import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../layouts/AdminLayout';
import { Button } from '../../components/ui/Button';
import { 
  CheckCircle2, 
  ChevronRight, 
  MoreHorizontal, 
  ArrowRight,
  ExternalLink,
  MessageSquarePlus,
  AlertTriangle
} from 'lucide-react';

type ModalType = 'none' | 'approve' | 'request_info' | 'not_approve';

export default function OrganizationReviewDetail() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<ModalType>('none');
  const [showDropdown, setShowDropdown] = useState(false);

  // Mock handlers
  const handleApprove = () => {
    setActiveModal('none');
    // In real app: toast.success('Organization approved');
    // Then navigate to the active Organization Detail page (Page 27)
    navigate('/admin/organizations/org-1'); 
  };

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-56px)]">
        
        {/* Main Content Area (Left) */}
        <div className="flex-1 p-6 md:p-8 max-w-[800px] animate-in fade-in duration-500 pb-24">
          
          {/* Breadcrumb & Header */}
          <div className="mb-8">
            <div className="flex items-center gap-1.5 text-xs font-medium text-ink-gray-5 mb-3 uppercase tracking-wider">
              <Link to="/admin/organizations" className="hover:text-ink-gray-9 transition-colors">Organizations</Link>
              <ChevronRight className="size-3" />
              <Link to="/admin/organizations/reviews" className="hover:text-ink-gray-9 transition-colors">Reviews</Link>
              <ChevronRight className="size-3" />
              <span className="text-ink-gray-9">NewCo Learning</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">NewCo Learning</h1>
            <div className="text-sm font-medium text-ink-gray-6 flex items-center gap-2">
              Enterprise <span className="text-ink-gray-4">•</span> Submitted 21 Sep 2026
            </div>
          </div>

          <div className="space-y-10">
            
            {/* Organization Details */}
            <section>
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4 border-b border-outline-gray-2 pb-2">Organization Details</h2>
              <div className="grid grid-cols-[140px_1fr] gap-y-4 text-sm">
                <div className="text-ink-gray-6">Organization name</div>
                <div className="font-medium text-ink-gray-9">NewCo Learning</div>
                
                <div className="text-ink-gray-6">Account type</div>
                <div className="font-medium text-ink-gray-9">Enterprise</div>
                
                <div className="text-ink-gray-6">Country / Region</div>
                <div className="font-medium text-ink-gray-9">India</div>
                
                <div className="text-ink-gray-6">Website</div>
                <div className="font-medium text-ink-gray-9 flex items-center gap-1.5">
                  <a href="#" className="hover:underline underline-offset-4 text-ink-gray-9">newcolearning.com</a>
                  <ExternalLink className="size-3.5 text-ink-gray-4" />
                </div>
              </div>
            </section>

            {/* Organization Owner */}
            <section>
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4 border-b border-outline-gray-2 pb-2">Organization Owner</h2>
              <div className="grid grid-cols-[140px_1fr] gap-y-4 text-sm">
                <div className="text-ink-gray-6">Full name</div>
                <div className="font-medium text-ink-gray-9">Suresh Kumar</div>
                
                <div className="text-ink-gray-6">Email</div>
                <div>
                  <div className="font-medium text-ink-gray-9">suresh@newcolearning.com</div>
                  <div className="flex items-center gap-1 text-green-600 text-xs font-bold mt-1 uppercase tracking-wider">
                    <CheckCircle2 className="size-3.5" /> Verified
                  </div>
                </div>
                
                <div className="text-ink-gray-6">Role / title</div>
                <div className="font-medium text-ink-gray-9">Founder</div>
                
                <div className="text-ink-gray-6">Contact number</div>
                <div className="font-medium text-ink-gray-9">+91 98••• •••21</div>
              </div>
            </section>

            {/* Review History */}
            <section>
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4 border-b border-outline-gray-2 pb-2">Review History</h2>
              
              <div className="space-y-6 relative before:absolute before:inset-y-1 before:left-[11px] before:w-px before:bg-outline-gray-2">
                
                <div className="relative pl-8">
                  <div className="absolute left-1.5 top-1.5 size-2 rounded-full bg-ink-gray-9 ring-4 ring-surface-gray-1" />
                  <div className="text-sm font-medium text-ink-gray-9">Registration submitted</div>
                  <div className="text-xs text-ink-gray-5 mt-0.5">21 Sep 2026 · 10:15 AM</div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-1.5 top-1.5 size-2 rounded-full bg-green-500 ring-4 ring-surface-gray-1" />
                  <div className="text-sm font-medium text-ink-gray-9">Email verified</div>
                  <div className="text-xs text-ink-gray-5 mt-0.5">21 Sep 2026 · 10:16 AM</div>
                </div>

              </div>
            </section>

            {/* Internal Notes */}
            <section>
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4 border-b border-outline-gray-2 pb-2">Internal Notes</h2>
              
              <div className="bg-surface-base border border-outline-gray-2 rounded-lg p-4 text-center">
                <div className="text-sm text-ink-gray-6 mb-3">No internal notes yet.</div>
                <Button variant="outline" theme="gray" size="sm" className="gap-2 mx-auto">
                  <MessageSquarePlus className="size-4" /> Add note
                </Button>
              </div>
            </section>

          </div>
        </div>

        {/* Fixed Meta Panel (Right) */}
        <div className="w-full md:w-[320px] bg-surface-base border-l border-outline-gray-2 shrink-0 md:sticky md:top-14 h-fit md:min-h-[calc(100vh-56px)]">
          <div className="p-6">
            
            <div className="mb-8">
              <h3 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4">Review</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-ink-gray-6 mb-1">Status</div>
                  <div className="flex items-center gap-1.5 font-medium text-amber-600">
                    <div className="size-2 rounded-full bg-current" /> Needs Review
                  </div>
                </div>
                <div>
                  <div className="text-xs text-ink-gray-6 mb-1">Submitted</div>
                  <div className="text-sm font-medium text-ink-gray-9">21 Sep 2026</div>
                  <div className="text-xs text-ink-gray-5">10:15 AM</div>
                </div>
                <div>
                  <div className="text-xs text-ink-gray-6 mb-1">Account type</div>
                  <div className="text-sm font-medium text-ink-gray-9">Enterprise</div>
                </div>
                <div>
                  <div className="text-xs text-ink-gray-6 mb-1">Email</div>
                  <div className="flex items-center gap-1 text-green-600 text-sm font-bold">
                    <CheckCircle2 className="size-3.5" /> Verified
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-outline-gray-2">
              <h3 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider mb-4">Actions</h3>
              <div className="space-y-3">
                <Button onClick={() => setActiveModal('approve')} variant="solid" theme="primary" className="w-full justify-between">
                  Approve organization <ArrowRight className="size-4" />
                </Button>
                
                <Button onClick={() => setActiveModal('request_info')} variant="outline" theme="gray" className="w-full">
                  Request information
                </Button>
                
                <div className="relative">
                  <Button 
                    onClick={() => setShowDropdown(!showDropdown)} 
                    variant="ghost" 
                    theme="gray" 
                    className="w-full"
                  >
                    <MoreHorizontal className="size-4" />
                  </Button>
                  
                  {showDropdown && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setShowDropdown(false)} />
                      <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-outline-gray-2 rounded-md shadow-lg z-20 overflow-hidden">
                        <button 
                          onClick={() => {
                            setShowDropdown(false);
                            setActiveModal('not_approve');
                          }}
                          className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-surface-gray-1 transition-colors"
                        >
                          Not approve registration
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Modals */}

      {/* Approve Modal */}
      {activeModal === 'approve' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setActiveModal('none')} />
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6">
              <h3 className="text-lg font-bold text-ink-gray-9 mb-2">Approve NewCo Learning?</h3>
              <p className="text-sm text-ink-gray-6 mb-6">
                This will activate the organization and allow its Organization Owner to access the Organization workspace.
              </p>
              <div className="flex justify-end gap-3">
                <Button onClick={() => setActiveModal('none')} variant="outline" theme="gray">Cancel</Button>
                <Button onClick={handleApprove} variant="solid" theme="primary">Approve organization</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Request Info Modal */}
      {activeModal === 'request_info' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setActiveModal('none')} />
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6">
              <h3 className="text-lg font-bold text-ink-gray-9 mb-6">Request additional information</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-bold text-ink-gray-9 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white border border-outline-gray-3 rounded-md px-3 py-2 text-sm text-ink-gray-9 focus:outline-none focus:border-ink-gray-9 focus:ring-1 focus:ring-ink-gray-9 transition-colors placeholder:text-ink-gray-4"
                    placeholder="Explain what information or correction is required..."
                  />
                  <p className="mt-2 text-xs text-ink-gray-5 flex items-center gap-1.5">
                    <AlertTriangle className="size-3.5 text-amber-500" />
                    This message will be sent to the Organization Owner.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-outline-gray-2">
                <Button onClick={() => setActiveModal('none')} variant="outline" theme="gray">Cancel</Button>
                <Button onClick={() => setActiveModal('none')} variant="solid" theme="gray">Send request</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Not Approve Modal */}
      {activeModal === 'not_approve' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setActiveModal('none')} />
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6">
              <h3 className="text-lg font-bold text-red-600 mb-6">Not approve this registration?</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-bold text-ink-gray-9 mb-1.5">
                    Reason <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white border border-outline-gray-3 rounded-md px-3 py-2 text-sm text-ink-gray-9 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors placeholder:text-ink-gray-4"
                    placeholder="Enter the reason for not approving..."
                  />
                  <p className="mt-2 text-xs text-ink-gray-5 flex items-center gap-1.5">
                    <AlertTriangle className="size-3.5 text-amber-500" />
                    This reason may be shown to the Organization Owner.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-outline-gray-2">
                <Button onClick={() => setActiveModal('none')} variant="outline" theme="gray">Cancel</Button>
                <button 
                  onClick={() => setActiveModal('none')}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-semibold transition-colors"
                >
                  Not approve
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  );
}
