import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { OrganizationLayout } from '../../layouts/OrganizationLayout';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { ChevronDown, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function CreateProject() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const isValid = projectName.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      
      // Navigate to Project Detail after a short delay
      setTimeout(() => {
        // Generating a dummy ID for the new project
        navigate('/org/projects/proj_123');
      }, 1500);
    }, 1000);
  };

  return (
    <OrganizationLayout>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-in fade-in slide-in-from-top-4 flex items-center gap-3 bg-ink-gray-9 text-white px-4 py-3 rounded-md shadow-lg font-medium text-sm">
          <CheckCircle2 className="size-5 text-ink-green-4" />
          Project created successfully.
        </div>
      )}

      <div className="p-6 md:p-8 flex justify-center min-h-full">
        <div className="w-full max-w-2xl space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
          
          {/* Header */}
          <div className="space-y-4">
            <nav className="flex items-center text-sm font-medium text-ink-gray-5">
              <Link to="/org/projects" className="hover:text-ink-gray-9 transition-colors">Projects</Link>
              <ChevronRight className="size-4 mx-1 text-ink-gray-4" />
              <span className="text-ink-gray-9">Create Project</span>
            </nav>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">Create Project</h1>
              <p className="text-sm text-ink-gray-6">
                Create a reusable Project for your Organization. Project Runs can be configured separately after creation.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* PROJECT DETAILS */}
            <div className="space-y-6">
              <div className="pb-2 border-b border-outline-gray-2">
                <h2 className="font-bold text-ink-gray-9 text-xs uppercase tracking-wider">Project Details</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-ink-gray-9 mb-1.5">Organization</label>
                  <div className="px-3 py-2 bg-surface-gray-1 border border-outline-gray-2 rounded-md text-sm font-medium text-ink-gray-6 cursor-not-allowed">
                    ABC Technologies
                  </div>
                </div>

                <div>
                  <Input 
                    label="Project name *" 
                    placeholder="e.g. Graduate Talent Project" 
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    description="Use a name that can remain valid across multiple Runs."
                  />
                </div>

                <div>
                  <Input 
                    label="Objective" 
                    placeholder="e.g. Build and evaluate talent for upcoming workforce requirements." 
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="description" className="text-sm font-medium text-ink-gray-9">Description</label>
                  <textarea 
                    id="description"
                    rows={4}
                    placeholder="Add additional context about this Project..."
                    className="flex w-full rounded-md border border-outline-gray-2 bg-surface-base px-3 py-2 text-sm placeholder:text-ink-gray-5 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ink-gray-9 focus-visible:ring-offset-0 hover:border-ink-gray-4 resize-none"
                  />
                </div>

                <div>
                  <Input 
                    label="Approximate scale" 
                    placeholder="e.g. 500 candidates per year" 
                  />
                </div>
              </div>
            </div>

            {/* PROJECT RESPONSIBILITY */}
            <div className="space-y-6">
              <div className="pb-2 border-b border-outline-gray-2">
                <h2 className="font-bold text-ink-gray-9 text-xs uppercase tracking-wider">Project Responsibility</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-sm font-medium text-ink-gray-9">Primary Organization Contact</label>
                  <div className="relative">
                    <select className="appearance-none flex h-10 w-full rounded-md border border-outline-gray-2 bg-surface-base px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ink-gray-9 hover:border-ink-gray-4 cursor-pointer">
                      <option value="">Select member</option>
                      <option value="ravi">Ravi Kumar</option>
                      <option value="suresh">Suresh Kumar</option>
                      <option value="priya">Priya Rao</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-ink-gray-5 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-sm font-medium text-ink-gray-9">Project Lead</label>
                  <div className="relative">
                    <select className="appearance-none flex h-10 w-full rounded-md border border-outline-gray-2 bg-surface-base px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ink-gray-9 hover:border-ink-gray-4 cursor-pointer">
                      <option value="unassigned">Assign later</option>
                      <option value="ravi">Ravi Kumar</option>
                      <option value="suresh">Suresh Kumar</option>
                      <option value="priya">Priya Rao</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-ink-gray-5 pointer-events-none" />
                  </div>
                  <p className="text-sm text-ink-gray-5 pt-1">You can assign or change the Project Lead after creation.</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-outline-gray-2 flex items-center justify-end gap-3">
              <Link to="/org/projects">
                <Button variant="outline" theme="gray" label="Cancel" type="button" disabled={isSubmitting} />
              </Link>
              <Button 
                variant="solid" 
                theme="gray" 
                label={isSubmitting ? "Creating Project..." : "Create Project"} 
                type="submit" 
                disabled={!isValid || isSubmitting}
                className="min-w-32"
              />
            </div>

          </form>
        </div>
      </div>
    </OrganizationLayout>
  );
}
