import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import OtpInput from '../components/ui/OtpInput';
import { 
  LayoutDashboard, 
  CheckCircle2, 
  ChevronRight, 
  LayoutTemplate,
  Copy,
  User,
  Shield,
  Bell
} from 'lucide-react';

export default function MyAccount() {
  const navigate = useNavigate();
  const [currentEmail, setCurrentEmail] = useState('ravi@company.com');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<'enter_email' | 'verify'>('enter_email');
  const [newEmail, setNewEmail] = useState('');
  
  // Handle copy
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('OTB-7F2K9');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Modal actions
  const openModal = () => {
    setModalStep('enter_email');
    setNewEmail('');
    setIsModalOpen(true);
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEmail.trim()) {
      setModalStep('verify');
    }
  };

  const handleVerify = () => {
    // Simulate successful verification
    setCurrentEmail(newEmail);
    setIsModalOpen(false);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-gray-1 text-ink-gray-9 font-sans">
      
      {/* Authenticated Shell Header */}
      <header className="flex items-center justify-between px-6 h-14 bg-surface-base border-b border-outline-gray-2 shrink-0 sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
          <div className="h-4 w-px bg-outline-gray-2 hidden md:block" />
          <div className="text-sm font-semibold text-ink-gray-8 hidden md:block">ABC Technologies</div>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="text-ink-gray-9 cursor-pointer hover:bg-surface-gray-1 px-2 py-1 rounded">Ravi Kumar ▾</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside className="w-64 border-r border-outline-gray-2 bg-surface-base hidden md:block shrink-0 overflow-y-auto">
          <nav className="p-4 space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-ink-gray-6 hover:bg-surface-gray-1 hover:text-ink-gray-9 cursor-pointer transition-colors">
              <LayoutDashboard className="size-4" /> Dashboard
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-ink-gray-6 hover:bg-surface-gray-1 hover:text-ink-gray-9 cursor-pointer transition-colors">
              <LayoutTemplate className="size-4" /> My Projects
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center p-4 sm:p-8 md:p-12 overflow-y-auto relative">
          
          {/* Success Toast */}
          {showSuccessToast && (
            <div className="absolute top-6 right-6 bg-ink-gray-9 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-top-4 fade-in duration-300 z-40">
              <CheckCircle2 className="size-5 text-green-400" />
              <span className="text-sm font-medium">Sign-in email updated</span>
            </div>
          )}

          <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Breadcrumb & Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-medium text-ink-gray-5 mb-3">
                <Link to="/dashboard" className="hover:text-ink-gray-9 transition-colors">Home</Link>
                <ChevronRight className="size-3" />
                <span className="text-ink-gray-9">My Account</span>
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">My Account</h1>
              <p className="text-sm text-ink-gray-6">Manage your Ottobon account details and sign-in identity.</p>
            </div>

            {/* Account Summary Card */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm p-6 mb-8">
              <div className="flex items-start gap-5 mb-6 pb-6 border-b border-outline-gray-2">
                <div className="shrink-0 size-16 rounded-xl bg-surface-gray-1 border border-outline-gray-2 flex items-center justify-center text-xl font-bold tracking-wider text-ink-gray-7">
                  RK
                </div>
                <div>
                  <h2 className="text-lg font-bold text-ink-gray-9 mb-1">Ravi Kumar</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-ink-gray-6">{currentEmail}</span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-200 text-[10px] uppercase font-bold tracking-wider">
                      <CheckCircle2 className="size-3" /> Verified
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm font-semibold text-ink-gray-9 mb-1">Account status</div>
                  <div className="text-base text-ink-gray-8">Active</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-gray-9 mb-1">Account created</div>
                  <div className="text-base text-ink-gray-8">21 Sep 2026</div>
                </div>
              </div>
            </div>

            {/* Sign-in Email Section */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Sign-in email</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-medium text-ink-gray-9">{currentEmail}</span>
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-200 text-[10px] uppercase font-bold tracking-wider">
                        <CheckCircle2 className="size-3" /> Verified
                      </span>
                    </div>
                    <p className="text-sm text-ink-gray-6">This email is used to sign in and receive account messages.</p>
                  </div>
                  <Button variant="outline" theme="gray" onClick={openModal}>Change email</Button>
                </div>
              </div>
            </div>

            {/* Workspaces Section */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Workspaces</h3>
              </div>
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-base font-medium text-ink-gray-9 mb-1">3 workspaces available</div>
                  <p className="text-sm text-ink-gray-6">ABC Technologies &middot; Ottobon &middot; XYZ Academy</p>
                </div>
                <Link to="/workspaces" className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors flex items-center gap-1">
                  Switch workspace <ChevronRight className="size-3" />
                </Link>
              </div>
            </div>

            {/* Account Reference Section */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Account reference</h3>
              </div>
              <div className="p-6 flex items-center justify-between">
                <span className="text-base font-mono tracking-wider text-ink-gray-9 bg-surface-gray-1 px-3 py-1.5 rounded border border-outline-gray-2">OTB-7F2K9</span>
                <button 
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded p-1"
                >
                  <Copy className="size-4" />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Profile */}
              <Link to="/profile" className="group block border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm p-5 hover:border-outline-gray-3 hover:shadow-md transition-all outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9">
                <div className="size-10 bg-surface-gray-1 rounded-lg border border-outline-gray-2 flex items-center justify-center mb-4 text-ink-gray-6 group-hover:text-ink-gray-9 transition-colors">
                  <User className="size-5" />
                </div>
                <h3 className="font-semibold text-ink-gray-9 mb-1">Profile</h3>
                <p className="text-xs text-ink-gray-6 mb-4 line-clamp-2">Manage your name, photo, designation and time zone.</p>
                <div className="text-sm font-medium text-ink-gray-9 flex items-center gap-1 group-hover:underline">
                  Go to My Profile <ChevronRight className="size-3" />
                </div>
              </Link>
              
              {/* Security */}
              <Link to="#" className="group block border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm p-5 hover:border-outline-gray-3 hover:shadow-md transition-all outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9">
                <div className="size-10 bg-surface-gray-1 rounded-lg border border-outline-gray-2 flex items-center justify-center mb-4 text-ink-gray-6 group-hover:text-ink-gray-9 transition-colors">
                  <Shield className="size-5" />
                </div>
                <h3 className="font-semibold text-ink-gray-9 mb-1">Security</h3>
                <p className="text-xs text-ink-gray-6 mb-4 line-clamp-2">Manage your password, MFA, sessions, and recovery.</p>
                <div className="text-sm font-medium text-ink-gray-9 flex items-center gap-1 group-hover:underline">
                  Security Settings <ChevronRight className="size-3" />
                </div>
              </Link>
              
              {/* Notifications */}
              <Link to="#" className="group block border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm p-5 hover:border-outline-gray-3 hover:shadow-md transition-all outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9">
                <div className="size-10 bg-surface-gray-1 rounded-lg border border-outline-gray-2 flex items-center justify-center mb-4 text-ink-gray-6 group-hover:text-ink-gray-9 transition-colors">
                  <Bell className="size-5" />
                </div>
                <h3 className="font-semibold text-ink-gray-9 mb-1">Notifications</h3>
                <p className="text-xs text-ink-gray-6 mb-4 line-clamp-2">Choose how Ottobon sends you updates and alerts.</p>
                <div className="text-sm font-medium text-ink-gray-9 flex items-center gap-1 group-hover:underline">
                  Notification Preferences <ChevronRight className="size-3" />
                </div>
              </Link>
            </div>

          </div>
        </main>
      </div>

      {/* Change Email Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            className="w-full max-w-md bg-surface-base rounded-2xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-outline-gray-2 flex items-center justify-between">
              <h2 className="font-bold text-ink-gray-9 text-lg">Change sign-in email</h2>
            </div>
            
            <div className="p-6">
              {modalStep === 'enter_email' ? (
                <form onSubmit={handleContinue}>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-ink-gray-6 mb-1">Current email</label>
                    <div className="text-base font-semibold text-ink-gray-9">{currentEmail}</div>
                  </div>
                  
                  <div className="mb-8">
                    <Input 
                      label="New email"
                      type="email"
                      required
                      value={newEmail}
                      onChange={e => setNewEmail(e.target.value)}
                      placeholder="Enter new email address"
                      autoFocus
                    />
                  </div>
                  
                  <div className="flex items-center gap-3 justify-end">
                    <Button type="button" variant="outline" theme="gray" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                    <Button type="submit" variant="solid" theme="gray">Continue</Button>
                  </div>
                </form>
              ) : (
                <div className="animate-in slide-in-from-right-4 duration-300">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-ink-gray-9 mb-2">Verify your new email</h3>
                    <p className="text-sm text-ink-gray-6">We sent a verification code to <span className="font-semibold text-ink-gray-9">{newEmail}</span></p>
                  </div>
                  
                  <div className="mb-8 flex justify-center">
                    <OtpInput 
                      length={6} 
                      onComplete={handleVerify} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <button onClick={() => setModalStep('enter_email')} className="text-ink-gray-6 hover:text-ink-gray-9 font-medium">Back</button>
                    <button className="text-ink-gray-9 hover:underline font-bold">Resend code</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
