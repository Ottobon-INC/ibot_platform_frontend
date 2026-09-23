import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { LayoutDashboard, CheckCircle2, ChevronRight, LayoutTemplate } from 'lucide-react';

interface ProfileData {
  fullName: string;
  displayName: string;
  email: string;
  phone: string;
  jobTitle: string;
  country: string;
  timezone: string;
}

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showUnsavedWarning, setShowUnsavedWarning] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Initial mocked profile data
  const [initialData] = useState<ProfileData>({
    fullName: 'Ravi Kumar',
    displayName: 'Ravi',
    email: 'ravi@company.com',
    phone: '+91 98765 43210',
    jobTitle: 'Head of Talent Acquisition',
    country: 'India',
    timezone: 'Asia/Kolkata (GMT+05:30)'
  });

  // Working data for the form
  const [formData, setFormData] = useState<ProfileData>(initialData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const hasChanges = JSON.stringify(initialData) !== JSON.stringify(formData);

  const handleCancelClick = () => {
    if (hasChanges) {
      setShowUnsavedWarning(true);
    } else {
      setIsEditing(false);
    }
  };

  const handleDiscardChanges = () => {
    setFormData(initialData); // revert
    setShowUnsavedWarning(false);
    setIsEditing(false);
  };

  const handleSave = () => {
    // In a real app, send to API here
    setIsEditing(false);
    setShowUnsavedWarning(false);
    
    // Simulate save success toast
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const renderField = (
    label: string, 
    name: keyof ProfileData, 
    type: 'text' | 'tel' | 'select' = 'text', 
    options?: string[],
    helperText?: string
  ) => {
    const value = formData[name];
    
    return (
      <div className="mb-6 border-b border-outline-gray-1 pb-6 last:border-0 last:pb-0">
        <label className="block text-sm font-semibold text-ink-gray-9 mb-1">
          {label}
        </label>
        
        {isEditing ? (
          <div>
            {type === 'select' ? (
              <select
                name={name}
                value={value}
                onChange={handleInputChange}
                className="w-full h-11 px-3 bg-surface-base border border-outline-gray-3 rounded-lg text-ink-gray-9 text-base focus:outline-none focus:ring-2 focus:ring-ink-gray-9 focus:border-ink-gray-9 transition-shadow appearance-none"
              >
                {options?.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <Input 
                type={type}
                name={name}
                value={value}
                onChange={handleInputChange}
                className="max-w-md"
              />
            )}
            {helperText && (
              <p className="mt-2 text-xs text-ink-gray-5">{helperText}</p>
            )}
          </div>
        ) : (
          <div>
            <div className="text-base text-ink-gray-8 mt-1.5">{value || <span className="text-ink-gray-4 italic">Not provided</span>}</div>
            {helperText && (
              <p className="mt-1.5 text-xs text-ink-gray-5">{helperText}</p>
            )}
          </div>
        )}
      </div>
    );
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

      <div className="flex flex-1 overflow-hidden">
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
            <div className="absolute top-6 right-6 bg-ink-gray-9 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-top-4 fade-in duration-300 z-50">
              <CheckCircle2 className="size-5 text-green-400" />
              <span className="text-sm font-medium">Profile updated successfully</span>
            </div>
          )}

          <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Breadcrumb & Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-medium text-ink-gray-5 mb-3">
                <Link to="/dashboard" className="hover:text-ink-gray-9 transition-colors">Home</Link>
                <ChevronRight className="size-3" />
                <span className="text-ink-gray-9">My Profile</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">My Profile</h1>
                  <p className="text-sm text-ink-gray-6">Manage your personal information used across Ottobon.</p>
                </div>
                
                <div className="shrink-0">
                  {isEditing ? (
                    <div className="flex items-center gap-3">
                      <Button variant="outline" theme="gray" onClick={handleCancelClick}>Cancel</Button>
                      <Button variant="solid" theme="gray" onClick={handleSave}>Save changes</Button>
                    </div>
                  ) : (
                    <Button variant="outline" theme="gray" onClick={() => setIsEditing(true)}>Edit profile</Button>
                  )}
                </div>
              </div>
            </div>

            {/* Unsaved Changes Warning */}
            {showUnsavedWarning && (
              <div className="mb-6 p-4 rounded-xl border border-orange-200 bg-orange-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-orange-800 mb-1">You have unsaved changes</h3>
                  <p className="text-sm text-orange-700">Are you sure you want to discard your edits?</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button onClick={() => setShowUnsavedWarning(false)} className="text-sm font-medium text-orange-800 hover:text-orange-900 px-3 py-1.5 outline-none focus-visible:ring-2 focus-visible:ring-orange-800 rounded">
                    Keep editing
                  </button>
                  <button onClick={handleDiscardChanges} className="text-sm font-medium bg-white text-orange-800 border border-orange-200 shadow-sm hover:bg-orange-100 px-3 py-1.5 rounded outline-none focus-visible:ring-2 focus-visible:ring-orange-800 transition-colors">
                    Discard changes
                  </button>
                </div>
              </div>
            )}

            {/* Profile Summary Card */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm p-6 mb-8 flex items-start gap-5">
              <div className="shrink-0 size-16 rounded-xl bg-surface-gray-1 border border-outline-gray-2 flex items-center justify-center text-xl font-bold tracking-wider text-ink-gray-7">
                RK
              </div>
              <div>
                <h2 className="text-lg font-bold text-ink-gray-9 mb-1">{formData.fullName}</h2>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-ink-gray-6">{initialData.email}</span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-200 text-[10px] uppercase font-bold tracking-wider">
                    <CheckCircle2 className="size-3" /> Verified
                  </span>
                </div>
                <p className="text-sm font-medium text-ink-gray-8">{formData.jobTitle}</p>
              </div>
            </div>

            {/* Personal Information */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Personal information</h3>
              </div>
              <div className="p-6">
                
                {renderField('Full name', 'fullName', 'text')}
                {renderField('Display name', 'displayName', 'text')}
                
                {/* Email is strictly read-only */}
                <div className="mb-6 border-b border-outline-gray-1 pb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <label className="block text-sm font-semibold text-ink-gray-9 mb-1.5">Email address</label>
                      <div className="flex items-center gap-2">
                        <span className="text-base text-ink-gray-8">{initialData.email}</span>
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-200 text-[10px] uppercase font-bold tracking-wider">
                          <CheckCircle2 className="size-3" /> Verified
                        </span>
                      </div>
                    </div>
                    {/* In edit mode, we still don't allow changing email here. We link to My Account */}
                    {isEditing && (
                      <Link to="#" className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors flex items-center gap-1">
                        Manage account <ChevronRight className="size-3" />
                      </Link>
                    )}
                  </div>
                </div>

                {renderField('Phone number', 'phone', 'tel')}
                {renderField('Job title / designation', 'jobTitle', 'text', undefined, 'This does not change your Ottobon permissions.')}
                {renderField('Country / Region', 'country', 'select', ['India', 'United States', 'United Kingdom', 'Singapore', 'Australia'])}
                {renderField('Time zone', 'timezone', 'select', ['Asia/Kolkata (GMT+05:30)', 'UTC (GMT+00:00)', 'America/New_York (GMT-05:00)'], 'Used to display dates and times correctly.')}

              </div>
            </div>

            {/* Workspaces Section (Read Only) */}
            <div className="w-full border border-outline-gray-2 rounded-xl bg-surface-base shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-outline-gray-2 bg-surface-gray-1">
                <h3 className="font-semibold text-ink-gray-9">Workspaces</h3>
              </div>
              <div className="divide-y divide-outline-gray-2">
                
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-ink-gray-9">ABC Technologies</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-gray-1 border border-outline-gray-2 text-[10px] uppercase tracking-wider font-semibold text-ink-gray-5">Enterprise</span>
                    </div>
                    <div className="text-sm text-ink-gray-6">Organization Owner</div>
                  </div>
                  <Link to="/workspaces" className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors flex items-center gap-1">
                    Switch workspace <ChevronRight className="size-3" />
                  </Link>
                </div>

                <div className="p-6 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-ink-gray-9">Ottobon</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-gray-1 border border-outline-gray-2 text-[10px] uppercase tracking-wider font-semibold text-ink-gray-5">Internal</span>
                    </div>
                    <div className="text-sm text-ink-gray-6">Project Lead</div>
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-ink-gray-9">XYZ Academy</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-gray-1 border border-outline-gray-2 text-[10px] uppercase tracking-wider font-semibold text-ink-gray-5">Academy</span>
                    </div>
                    <div className="text-sm text-ink-gray-6">Build Lead</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
