import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Clock, AlertTriangle, CheckCircle2, XCircle, Check } from 'lucide-react';

import { useAuth } from '../contexts/AuthContext';

type ReviewStatus = 'under_review' | 'action_required' | 'approved' | 'rejected';

export default function AccountUnderReview() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const searchParams = new URLSearchParams(location.search);
  
  // Allow toggling status via URL for easy testing (default to under_review)
  const statusParam = searchParams.get('status') as ReviewStatus;
  const status: ReviewStatus = ['under_review', 'action_required', 'approved', 'rejected'].includes(statusParam) 
    ? statusParam 
    : 'under_review';

  // Get dynamic organization data from AuthContext workspaces
  const orgWorkspace = user?.workspaces?.find(w => w.workspaceType === 'ORGANIZATION');
  
  const orgData = {
    name: orgWorkspace?.organizationName || 'Unknown Organization',
    type: orgWorkspace?.organizationType || 'ENTERPRISE',
    owner: user?.displayName || 'Organization Owner',
    email: user?.email || '',
    submitted: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) // Approximation for now
  };

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, clear auth tokens here
    navigate('/sign-in');
  };

  const renderTimeline = () => (
    <div className="mb-10 pl-2">
      <div className="relative border-l-2 border-outline-gray-2 space-y-6 pb-2">
        
        {/* Step 1 */}
        <div className="relative pl-6">
          <div className="absolute -left-[9px] top-0.5 bg-ink-gray-9 rounded-full p-0.5 border-2 border-surface-base">
            <Check className="size-2.5 text-white stroke-[4]" />
          </div>
          <div className="font-semibold text-ink-gray-9 text-sm">Account created</div>
        </div>

        {/* Step 2 */}
        <div className="relative pl-6">
          <div className="absolute -left-[9px] top-0.5 bg-ink-gray-9 rounded-full p-0.5 border-2 border-surface-base">
            <Check className="size-2.5 text-white stroke-[4]" />
          </div>
          <div className="font-semibold text-ink-gray-9 text-sm">Email verified</div>
        </div>

        {/* Step 3 */}
        <div className="relative pl-6">
          <div className="absolute -left-[9px] top-0.5 bg-ink-gray-9 rounded-full p-0.5 border-2 border-surface-base">
            <Check className="size-2.5 text-white stroke-[4]" />
          </div>
          <div className="font-semibold text-ink-gray-9 text-sm">Organization submitted</div>
        </div>

        {/* Step 4 */}
        <div className="relative pl-6">
          <div className="absolute -left-[9px] top-0.5 bg-surface-base rounded-full p-[3px] border-2 border-ink-gray-9">
             <div className="size-1.5 bg-ink-gray-9 rounded-full" />
          </div>
          <div className="font-semibold text-ink-gray-9 text-sm">Ottobon review</div>
        </div>

        {/* Step 5 */}
        <div className="relative pl-6">
          <div className="absolute -left-[9px] top-0.5 bg-surface-base rounded-full p-1.5 border-2 border-outline-gray-3">
          </div>
          <div className="font-medium text-ink-gray-5 text-sm">Organization activation</div>
        </div>

      </div>
    </div>
  );

  const renderUnderReview = () => (
    <div className="w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="size-12 rounded-full bg-surface-gray-1 border border-outline-gray-2 flex items-center justify-center mb-6 shadow-sm">
          <Clock className="size-6 text-ink-gray-6" />
        </div>
        <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-3 uppercase">
          Organization review
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-4">
          Your organization is under review
        </h1>
        <p className="text-base text-ink-gray-6 mb-1">
          We've received your registration and are reviewing the details you submitted.
        </p>
        <p className="text-base font-medium text-ink-gray-8">
          We'll notify you by email when the review is complete.
        </p>
      </div>

      {/* Organization Summary Card */}
      <div className="border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-10">
        <div className="p-5 border-b border-outline-gray-2 bg-surface-gray-1 flex justify-between items-center">
          <div>
            <div className="text-xs font-semibold text-ink-gray-5 uppercase tracking-wider mb-1">Organization</div>
            <div className="font-bold text-ink-gray-9">{orgData.name}</div>
          </div>
          <div className="px-2.5 py-1 rounded bg-surface-base border border-outline-gray-2 text-xs font-medium text-ink-gray-7 shadow-sm">
            Under Review
          </div>
        </div>
        <div className="p-5 grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
          <div>
            <div className="text-xs font-medium text-ink-gray-5 mb-1">Account type</div>
            <div className="font-medium text-ink-gray-9">{orgData.type}</div>
          </div>
          <div>
            <div className="text-xs font-medium text-ink-gray-5 mb-1">Submitted</div>
            <div className="font-medium text-ink-gray-9">{orgData.submitted}</div>
          </div>
          <div>
            <div className="text-xs font-medium text-ink-gray-5 mb-1">Organization owner</div>
            <div className="font-medium text-ink-gray-9">{orgData.owner}</div>
          </div>
          <div>
            <div className="text-xs font-medium text-ink-gray-5 mb-1">Email</div>
            <div className="font-medium text-ink-gray-9">{orgData.email}</div>
          </div>
        </div>
      </div>

      {renderTimeline()}

      <div className="bg-surface-gray-1 border border-outline-gray-2 rounded-lg p-5 mb-8">
        <h3 className="font-bold text-ink-gray-9 mb-3">What happens next</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-ink-gray-7">
          <li>Ottobon reviews your organization details.</li>
          <li>You'll be notified when the review is complete.</li>
          <li>Once approved, your workspace will become available.</li>
        </ol>
      </div>

      <div className="flex flex-col gap-3">
        <Button variant="solid" theme="gray" size="lg" className="w-full">
          Review submitted details
        </Button>
        <button className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">
          Need help? Contact Ottobon
        </button>
      </div>
    </div>
  );

  const renderActionRequired = () => (
    <div className="w-full animate-in fade-in zoom-in-95 duration-300">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="size-12 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center mb-6 shadow-sm">
          <AlertTriangle className="size-6 text-orange-600" />
        </div>
        <div className="text-xs font-semibold tracking-widest text-orange-600 mb-3 uppercase">
          Action required
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-4">
          We need some additional information
        </h1>
        <p className="text-base text-ink-gray-6">
          Ottobon has requested more information before your organization can be approved.
        </p>
      </div>

      <div className="border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
        <div className="p-5 border-b border-outline-gray-2 bg-surface-gray-1">
          <div className="text-xs font-semibold text-ink-gray-9 uppercase tracking-wider">Requested information</div>
        </div>
        <div className="p-5 text-sm text-ink-gray-8 leading-relaxed font-medium">
          Please confirm your organization website and primary contact number.
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button variant="solid" theme="gray" size="lg" className="w-full">
          Provide information
        </Button>
        <button className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">
          Contact Ottobon
        </button>
      </div>
    </div>
  );

  const renderApproved = () => (
    <div className="w-full text-center animate-in fade-in zoom-in-95 duration-300 py-12">
      <div className="size-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-6 shadow-sm mx-auto">
        <CheckCircle2 className="size-8 text-green-600" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
        Your organization is ready
      </h1>
      <p className="text-base text-ink-gray-6 mb-10">
        Your organization has been approved.
      </p>
      
      <Link to="/dashboard" className="block w-full max-w-sm mx-auto">
        <Button variant="solid" theme="gray" size="lg" className="w-full">
          Continue to Ottobon
        </Button>
      </Link>
    </div>
  );

  const renderRejected = () => (
    <div className="w-full text-center animate-in fade-in zoom-in-95 duration-300 py-12">
      <div className="size-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mb-6 shadow-sm mx-auto">
        <XCircle className="size-8 text-red-600" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
        We couldn't activate your organization
      </h1>
      <p className="text-base text-ink-gray-6 mb-10 max-w-sm mx-auto">
        Please check your email for more details regarding our decision.
      </p>
      
      <div className="flex flex-col gap-3 max-w-sm mx-auto">
        <Button variant="solid" theme="gray" size="lg" className="w-full">
          Contact Ottobon
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-ink-gray-9 font-sans">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-outline-gray-1">
        <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="hidden sm:inline text-ink-gray-6">{orgData.email}</span>
          <a href="#" onClick={handleSignOut} className="text-ink-gray-8 hover:text-ink-gray-9 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-2 py-1">
            Sign Out
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 sm:py-16">
        <div className="w-full max-w-[480px] flex flex-col items-center">
          {status === 'under_review' && renderUnderReview()}
          {status === 'action_required' && renderActionRequired()}
          {status === 'approved' && renderApproved()}
          {status === 'rejected' && renderRejected()}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 flex flex-col sm:flex-row items-center justify-between px-6 text-xs text-ink-gray-5 border-t border-outline-gray-1 mt-auto gap-4">
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-ink-gray-8">Privacy</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-ink-gray-8">Terms</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-ink-gray-8">Help</a>
        </div>
        
        {/* Development util to toggle states */}
        <div className="flex items-center gap-2 bg-surface-gray-1 px-3 py-1.5 rounded border border-outline-gray-2 text-[10px] uppercase font-bold tracking-wider">
          <span className="text-ink-gray-4 mr-2">Test States:</span>
          <Link to="?status=under_review" className={`hover:text-ink-gray-9 ${status === 'under_review' ? 'text-ink-gray-9' : ''}`}>Review</Link>
          <Link to="?status=action_required" className={`hover:text-orange-600 ${status === 'action_required' ? 'text-orange-600' : ''}`}>Action</Link>
          <Link to="?status=approved" className={`hover:text-green-600 ${status === 'approved' ? 'text-green-600' : ''}`}>Approve</Link>
          <Link to="?status=rejected" className={`hover:text-red-600 ${status === 'rejected' ? 'text-red-600' : ''}`}>Reject</Link>
        </div>
      </footer>
    </div>
  );
}
