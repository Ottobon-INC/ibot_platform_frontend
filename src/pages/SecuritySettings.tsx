import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import PasswordInput from '../components/ui/PasswordInput';
import { 
  LayoutDashboard, 
  CheckCircle2, 
  ChevronRight, 
  LayoutTemplate,
  ShieldCheck,
  Laptop,
  Smartphone,
  AlertCircle
} from 'lucide-react';

export default function SecuritySettings() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  // Modals state
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  
  // Password form state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Sessions state (mock data to allow deletion)
  const [otherSessions, setOtherSessions] = useState([
    { id: 1, device: 'Windows · Chrome', time: 'Last active 2 hours ago' },
    { id: 2, device: 'Android', time: 'Last active yesterday' }
  ]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword && newPassword.length >= 12) {
      setIsPasswordModalOpen(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      showToast('Password updated successfully');
    }
  };

  const handleSignOutSession = (id: number) => {
    if (window.confirm("Sign out this session? That device will need to sign in again.")) {
      setOtherSessions(prev => prev.filter(session => session.id !== id));
      showToast('Session signed out');
    }
  };

  const handleSignOutAllOther = () => {
    if (window.confirm("Sign out all other sessions? All other devices will need to authenticate again.")) {
      setOtherSessions([]);
      showToast('All other sessions signed out');
    }
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

        {/* Main Content Area - Single Column layout max-w-3xl */}
        <main className="flex-1 flex flex-col items-center p-4 sm:p-8 md:p-12 overflow-y-auto relative">
          
          {/* Success Toast */}
          {showSuccessToast && (
            <div className="absolute top-6 right-6 bg-ink-gray-9 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-top-4 fade-in duration-300 z-40">
              <CheckCircle2 className="size-5 text-green-400" />
              <span className="text-sm font-medium">{toastMessage}</span>
            </div>
          )}

          <div className="w-full max-w-[800px] animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Breadcrumb & Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-medium text-ink-gray-5 mb-3">
                <Link to="/dashboard" className="hover:text-ink-gray-9 transition-colors">Home</Link>
                <ChevronRight className="size-3" />
                <span className="text-ink-gray-9">Security</span>
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">Security Settings</h1>
              <p className="text-sm text-ink-gray-6">Manage your password, multi-factor authentication and active sessions.</p>
            </div>

            {/* Account Security Overview Card */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm p-6 mb-8">
              <h2 className="text-sm font-bold text-ink-gray-5 uppercase tracking-wider mb-6">Account security</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-sm font-semibold text-ink-gray-9 mb-1">Password</div>
                  <div className="text-sm text-ink-gray-6">Updated 3 months ago</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-gray-9 mb-1">Multi-factor authentication</div>
                  <div className="text-sm text-ink-gray-6">Enabled</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-gray-9 mb-1">Active sessions</div>
                  <div className="text-sm text-ink-gray-6">{otherSessions.length + 1}</div>
                </div>
              </div>

              <div className="pt-5 border-t border-outline-gray-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-ink-gray-9">Status</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 text-green-700 border border-green-200 text-xs font-bold tracking-wider">
                  <ShieldCheck className="size-4" /> Protected
                </span>
              </div>
            </div>

            {/* Password Section */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Password</h3>
              </div>
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-ink-gray-9 mb-1">Last changed 18 Jun 2026</div>
                  <p className="text-sm text-ink-gray-6">A strong password helps protect your Ottobon account.</p>
                </div>
                <Button variant="outline" theme="gray" onClick={() => setIsPasswordModalOpen(true)}>Change password</Button>
              </div>
            </div>

            {/* Multi-factor Authentication Section */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Multi-factor authentication</h3>
              </div>
              <div className="p-6 border-b border-outline-gray-1">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 text-[10px] uppercase font-bold tracking-wider mb-4">
                  <div className="size-1.5 rounded-full bg-green-500" /> Enabled
                </span>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between sm:justify-start gap-12">
                      <span className="text-base font-medium text-ink-gray-9">Authenticator app</span>
                      <span className="text-sm font-semibold text-ink-gray-5 uppercase tracking-wider">Primary</span>
                    </div>
                    <div className="flex items-center justify-between sm:justify-start gap-12">
                      <span className="text-base font-medium text-ink-gray-9">Email verification</span>
                      <span className="text-sm font-semibold text-ink-gray-5 uppercase tracking-wider">Backup</span>
                    </div>
                  </div>
                  <Link to="#">
                    <Button variant="outline" theme="gray">Manage MFA</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Active Sessions Section */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Active sessions</h3>
              </div>
              <div className="divide-y divide-outline-gray-2">
                
                {/* Current Session */}
                <div className="p-6 flex items-start gap-4">
                  <div className="mt-0.5 text-ink-gray-5 bg-surface-gray-1 p-2 rounded-lg border border-outline-gray-2">
                    <Laptop className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink-gray-9 mb-1">Windows 11 &middot; Chrome</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-ink-gray-8">Current session</span>
                      <span className="text-ink-gray-4">&middot;</span>
                      <span className="inline-flex items-center gap-1 text-green-600 text-xs font-bold uppercase tracking-wider">
                        <div className="size-1.5 rounded-full bg-green-500" /> Active now
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Sessions */}
                {otherSessions.map(session => (
                  <div key={session.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 text-ink-gray-5 bg-surface-gray-1 p-2 rounded-lg border border-outline-gray-2">
                        {session.device.includes('Android') ? <Smartphone className="size-5" /> : <Laptop className="size-5" />}
                      </div>
                      <div>
                        <div className="font-semibold text-ink-gray-9 mb-1">{session.device}</div>
                        <div className="text-sm text-ink-gray-6">{session.time}</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleSignOutSession(session.id)}
                      className="text-sm font-medium text-ink-gray-6 hover:text-red-600 transition-colors border border-transparent hover:border-red-200 hover:bg-red-50 px-3 py-1.5 rounded outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    >
                      Sign out
                    </button>
                  </div>
                ))}
              </div>
              
              {otherSessions.length > 0 && (
                <div className="px-6 py-4 border-t border-outline-gray-2 bg-surface-gray-1 flex justify-end">
                  <Button variant="outline" theme="gray" onClick={handleSignOutAllOther}>
                    Sign out all other sessions
                  </Button>
                </div>
              )}
            </div>

            {/* Recent Security Activity */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Recent security activity</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-base text-ink-gray-9">Password changed</span>
                  <span className="text-sm text-ink-gray-6">21 Sep 2026, 2:40 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base text-ink-gray-9">New sign-in</span>
                  <span className="text-sm text-ink-gray-6">21 Sep 2026, 2:15 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base text-ink-gray-9">MFA method added</span>
                  <span className="text-sm text-ink-gray-6">18 Sep 2026</span>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-outline-gray-2 flex justify-end">
                <Link to="#" className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors flex items-center gap-1">
                  View security activity <ChevronRight className="size-3" />
                </Link>
              </div>
            </div>

            <div className="mb-12 text-sm text-ink-gray-5 flex items-start gap-2 max-w-lg">
              <AlertCircle className="size-4 shrink-0 mt-0.5" />
              <p>Sessions may expire periodically based on Ottobon or Organization security policies.</p>
            </div>

          </div>
        </main>
      </div>

      {/* Change Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            className="w-full max-w-md bg-surface-base rounded-2xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-outline-gray-2 flex items-center justify-between shrink-0">
              <h2 className="font-bold text-ink-gray-9 text-lg">Change password</h2>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <form onSubmit={handleUpdatePassword}>
                
                <div className="mb-6">
                  <PasswordInput 
                    label="Current password"
                    name="currentPassword"
                    value={currentPassword}
                    onChange={(val) => setCurrentPassword(val)}
                    showRequirements={false}
                    autoFocus
                  />
                  <div className="mt-2 text-right">
                    <Link to="/forgot-password" className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9">Forgot your current password?</Link>
                  </div>
                </div>
                
                <div className="mb-6">
                  <PasswordInput 
                    label="New password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(val) => setNewPassword(val)}
                    showRequirements={true}
                  />
                </div>

                <div className="mb-8">
                  <PasswordInput 
                    label="Confirm new password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(val) => setConfirmPassword(val)}
                    showRequirements={false}
                  />
                  {confirmPassword && newPassword !== confirmPassword && (
                    <p className="mt-2 text-sm text-red-600 font-medium">Passwords do not match.</p>
                  )}
                </div>
                
                <div className="flex items-center gap-3 justify-end pt-4 border-t border-outline-gray-2 mt-4">
                  <Button type="button" variant="outline" theme="gray" onClick={() => setIsPasswordModalOpen(false)}>Cancel</Button>
                  <Button 
                    type="submit" 
                    variant="solid" 
                    theme="gray"
                    disabled={!currentPassword || !newPassword || newPassword !== confirmPassword || newPassword.length < 12}
                  >
                    Update password
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
