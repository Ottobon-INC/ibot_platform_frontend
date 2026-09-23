import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  LayoutDashboard, 
  CheckCircle2, 
  ChevronRight, 
  LayoutTemplate,
  Lock,
  Mail,
  Bell
} from 'lucide-react';

type PreferenceState = 'on' | 'off' | 'required';

interface PreferenceRowProps {
  label: string;
  inApp: PreferenceState;
  email: PreferenceState;
  onChange?: (channel: 'inApp' | 'email', newState: PreferenceState) => void;
}

const PreferenceToggle = ({ state, onClick }: { state: PreferenceState, onClick?: () => void }) => {
  if (state === 'required') {
    return (
      <div className="flex items-center gap-1.5 text-ink-gray-5 text-sm font-semibold uppercase tracking-wider select-none">
        <Lock className="size-3.5" /> Required
      </div>
    );
  }

  const isOn = state === 'on';
  return (
    <button 
      type="button"
      onClick={onClick}
      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 transition-colors ${isOn ? 'bg-ink-gray-9' : 'bg-outline-gray-3'}`}
    >
      <span className="sr-only">Toggle setting</span>
      <span aria-hidden="true" className={`pointer-events-none absolute left-0.5 inline-block size-4 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${isOn ? 'translate-x-4' : 'translate-x-0'}`} />
    </button>
  );
};

const PreferenceRow = ({ label, inApp, email, onChange }: PreferenceRowProps) => (
  <div className="flex items-center py-4 border-b border-outline-gray-2 last:border-0 hover:bg-surface-gray-1 px-4 -mx-4 rounded-lg transition-colors">
    <div className="flex-1 text-sm font-medium text-ink-gray-9 pr-4">{label}</div>
    <div className="w-32 flex justify-center shrink-0">
      <PreferenceToggle 
        state={inApp} 
        onClick={() => onChange && inApp !== 'required' && onChange('inApp', inApp === 'on' ? 'off' : 'on')} 
      />
    </div>
    <div className="w-32 flex justify-center shrink-0">
      <PreferenceToggle 
        state={email} 
        onClick={() => onChange && email !== 'required' && onChange('email', email === 'on' ? 'off' : 'on')} 
      />
    </div>
  </div>
);

export default function NotificationPreferences() {
  const navigate = useNavigate();
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  
  // State for preferences (simplified for mock)
  const [prefs, setPrefs] = useState({
    assignments_new: { inApp: 'required' as PreferenceState, email: 'on' as PreferenceState },
    assignments_changes: { inApp: 'required' as PreferenceState, email: 'on' as PreferenceState },
    access_changes: { inApp: 'required' as PreferenceState, email: 'on' as PreferenceState },
    
    projects_activity: { inApp: 'on' as PreferenceState, email: 'on' as PreferenceState },
    projects_approval: { inApp: 'required' as PreferenceState, email: 'on' as PreferenceState },
    projects_status: { inApp: 'on' as PreferenceState, email: 'off' as PreferenceState },

    phase_handovers: { inApp: 'required' as PreferenceState, email: 'on' as PreferenceState },
    phase_reviews: { inApp: 'required' as PreferenceState, email: 'on' as PreferenceState },
    phase_status: { inApp: 'on' as PreferenceState, email: 'off' as PreferenceState },

    general_product: { inApp: 'on' as PreferenceState, email: 'off' as PreferenceState },
    general_tips: { inApp: 'off' as PreferenceState, email: 'off' as PreferenceState },
  });

  const [useGlobal, setUseGlobal] = useState(true);
  const [frequency, setFrequency] = useState('daily');

  // Track changes to prompt before leaving
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const handlePrefChange = (key: keyof typeof prefs, channel: 'inApp' | 'email', newState: PreferenceState) => {
    setPrefs(prev => ({
      ...prev,
      [key]: { ...prev[key], [channel]: newState }
    }));
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    setHasUnsavedChanges(false);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm("Reset notification preferences? Your custom notification settings will be replaced with Ottobon's defaults.")) {
      // Mock reset logic
      setHasUnsavedChanges(false);
      window.location.reload();
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

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center p-4 sm:p-8 md:p-12 overflow-y-auto relative pb-32">
          
          {/* Success Toast */}
          {showSuccessToast && (
            <div className="fixed top-20 right-6 bg-ink-gray-9 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-top-4 fade-in duration-300 z-50">
              <CheckCircle2 className="size-5 text-green-400" />
              <span className="text-sm font-medium">Notification preferences updated</span>
            </div>
          )}

          <div className="w-full max-w-[800px] animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Breadcrumb & Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-ink-gray-5 mb-3">
                  <Link to="/dashboard" className="hover:text-ink-gray-9 transition-colors">Home</Link>
                  <ChevronRight className="size-3" />
                  <span className="text-ink-gray-9">Notification Preferences</span>
                </div>
                
                <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">Notification Preferences</h1>
                <p className="text-sm text-ink-gray-6">Choose how you want to receive updates from Ottobon.</p>
              </div>
              <Button 
                variant="solid" 
                theme="gray" 
                onClick={handleSave}
                disabled={!hasUnsavedChanges}
              >
                Save changes
              </Button>
            </div>

            {/* Notification Channels */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Notification channels</h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 text-ink-gray-5 bg-surface-gray-1 p-2 rounded-lg border border-outline-gray-2">
                    <Bell className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink-gray-9 mb-1">In-app</div>
                    <div className="text-sm text-ink-gray-6 flex items-center gap-1">
                      <CheckCircle2 className="size-4 text-green-600" /> Available
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 text-ink-gray-5 bg-surface-gray-1 p-2 rounded-lg border border-outline-gray-2">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink-gray-9 mb-1">Email</div>
                    <div className="text-sm text-ink-gray-6">ravi@company.com</div>
                    <div className="text-sm text-ink-gray-6 flex items-center gap-1 mt-1">
                      <CheckCircle2 className="size-4 text-green-600" /> Verified
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Header Row Component for consistency */}
            <div className="flex items-center px-6 mb-2 mt-12 text-xs font-bold text-ink-gray-5 uppercase tracking-wider">
              <div className="flex-1">Category</div>
              <div className="w-32 text-center">In-App</div>
              <div className="w-32 text-center">Email</div>
            </div>

            {/* Critical account & security */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="font-semibold text-ink-gray-9">Critical account & security</h3>
                <span className="text-xs text-ink-gray-6 bg-white px-2 py-1 rounded border border-outline-gray-2 shadow-sm">Important messages cannot be disabled</span>
              </div>
              <div className="px-6 py-2">
                <PreferenceRow label="Security activity" inApp="required" email="required" />
                <PreferenceRow label="Password / MFA changes" inApp="required" email="required" />
                <PreferenceRow label="Account access changes" inApp="required" email="required" />
              </div>
            </div>

            {/* Assignments & Access */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Assignments & access</h3>
              </div>
              <div className="px-6 py-2">
                <PreferenceRow 
                  label="New assignment" 
                  inApp={prefs.assignments_new.inApp} 
                  email={prefs.assignments_new.email} 
                  onChange={(c, s) => handlePrefChange('assignments_new', c, s)}
                />
                <PreferenceRow 
                  label="Assignment changes" 
                  inApp={prefs.assignments_changes.inApp} 
                  email={prefs.assignments_changes.email} 
                  onChange={(c, s) => handlePrefChange('assignments_changes', c, s)}
                />
                <PreferenceRow 
                  label="Access changes" 
                  inApp={prefs.access_changes.inApp} 
                  email={prefs.access_changes.email} 
                  onChange={(c, s) => handlePrefChange('access_changes', c, s)}
                />
              </div>
            </div>

            {/* Projects & Runs */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1 flex items-center justify-between">
                <h3 className="font-semibold text-ink-gray-9">Projects & Runs</h3>
              </div>
              <div className="px-6 py-2">
                <PreferenceRow 
                  label="Project / Run activity" 
                  inApp={prefs.projects_activity.inApp} 
                  email={prefs.projects_activity.email} 
                  onChange={(c, s) => handlePrefChange('projects_activity', c, s)}
                />
                <PreferenceRow 
                  label="Run approval required" 
                  inApp={prefs.projects_approval.inApp} 
                  email={prefs.projects_approval.email} 
                  onChange={(c, s) => handlePrefChange('projects_approval', c, s)}
                />
                <PreferenceRow 
                  label="Run status changes" 
                  inApp={prefs.projects_status.inApp} 
                  email={prefs.projects_status.email} 
                  onChange={(c, s) => handlePrefChange('projects_status', c, s)}
                />
              </div>
              <div className="px-6 py-3 border-t border-outline-gray-2 bg-surface-gray-1 flex justify-end">
                <button className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors">
                  Customize settings &rarr;
                </button>
              </div>
            </div>

            {/* Phase Operations */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1 flex items-center justify-between">
                <h3 className="font-semibold text-ink-gray-9">Phase Operations</h3>
              </div>
              <div className="px-6 py-2">
                <PreferenceRow 
                  label="Handover awaiting action" 
                  inApp={prefs.phase_handovers.inApp} 
                  email={prefs.phase_handovers.email} 
                  onChange={(c, s) => handlePrefChange('phase_handovers', c, s)}
                />
                <PreferenceRow 
                  label="Reviews requiring action" 
                  inApp={prefs.phase_reviews.inApp} 
                  email={prefs.phase_reviews.email} 
                  onChange={(c, s) => handlePrefChange('phase_reviews', c, s)}
                />
                <PreferenceRow 
                  label="Phase status updates" 
                  inApp={prefs.phase_status.inApp} 
                  email={prefs.phase_status.email} 
                  onChange={(c, s) => handlePrefChange('phase_status', c, s)}
                />
              </div>
              <div className="px-6 py-3 border-t border-outline-gray-2 bg-surface-gray-1 flex justify-end">
                <button className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors">
                  Customize settings &rarr;
                </button>
              </div>
            </div>

            {/* General updates */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1 flex items-center justify-between">
                <h3 className="font-semibold text-ink-gray-9">General updates</h3>
              </div>
              <div className="px-6 py-2">
                <PreferenceRow 
                  label="Product announcements" 
                  inApp={prefs.general_product.inApp} 
                  email={prefs.general_product.email} 
                  onChange={(c, s) => handlePrefChange('general_product', c, s)}
                />
                <PreferenceRow 
                  label="Tips & updates" 
                  inApp={prefs.general_tips.inApp} 
                  email={prefs.general_tips.email} 
                  onChange={(c, s) => handlePrefChange('general_tips', c, s)}
                />
              </div>
            </div>

            {/* Workspace preferences */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Workspace preferences</h3>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="font-medium text-ink-gray-9 mb-1">Use these preferences for all workspaces</div>
                  <div className="text-sm text-ink-gray-6">Turn off to customize settings per workspace.</div>
                </div>
                <PreferenceToggle 
                  state={useGlobal ? 'on' : 'off'} 
                  onClick={() => { setUseGlobal(!useGlobal); setHasUnsavedChanges(true); }} 
                />
              </div>
              {!useGlobal && (
                <div className="px-6 pb-6 pt-0 border-t border-outline-gray-1 mt-4 divide-y divide-outline-gray-2">
                  <div className="py-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-ink-gray-9">ABC Technologies</span>
                    <button className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9">Customize &rarr;</button>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-ink-gray-9">Ottobon</span>
                    <button className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9">Customize &rarr;</button>
                  </div>
                </div>
              )}
            </div>

            {/* Notification frequency */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-12">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Notification frequency</h3>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-ink-gray-9 mb-4">Non-critical updates</div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="frequency" 
                      value="immediate"
                      checked={frequency === 'immediate'}
                      onChange={() => { setFrequency('immediate'); setHasUnsavedChanges(true); }}
                      className="text-ink-gray-9 focus:ring-ink-gray-9"
                    />
                    <span className="text-sm text-ink-gray-9">Immediately</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="frequency" 
                      value="daily"
                      checked={frequency === 'daily'}
                      onChange={() => { setFrequency('daily'); setHasUnsavedChanges(true); }}
                      className="text-ink-gray-9 focus:ring-ink-gray-9"
                    />
                    <span className="text-sm text-ink-gray-9">Daily digest</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="frequency" 
                      value="off"
                      checked={frequency === 'off'}
                      onChange={() => { setFrequency('off'); setHasUnsavedChanges(true); }}
                      className="text-ink-gray-9 focus:ring-ink-gray-9"
                    />
                    <span className="text-sm text-ink-gray-9">Off</span>
                  </label>
                </div>

                {frequency === 'daily' && (
                  <div className="bg-surface-gray-1 p-4 rounded-lg border border-outline-gray-2 inline-block">
                    <div className="text-sm font-semibold text-ink-gray-9 mb-2">Daily digest time</div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <select 
                        className="h-9 px-3 rounded-md border border-outline-gray-3 bg-surface-base text-sm focus:outline-none focus:ring-2 focus:ring-ink-gray-9"
                        onChange={() => setHasUnsavedChanges(true)}
                        defaultValue="09:00"
                      >
                        <option value="08:00">8:00 AM</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                      <span className="text-sm text-ink-gray-6">Asia/Kolkata (GMT+05:30)</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-outline-gray-2 mb-12">
              <button 
                onClick={handleReset}
                className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors"
              >
                Reset to defaults
              </button>
              <Button 
                variant="solid" 
                theme="gray" 
                onClick={handleSave}
                disabled={!hasUnsavedChanges}
              >
                Save changes
              </Button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
