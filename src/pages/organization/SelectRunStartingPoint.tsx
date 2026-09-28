import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { OrganizationLayout } from '../../layouts/OrganizationLayout';
import { Button } from '../../components/ui/Button';
import { ChevronRight, Loader2, ArrowLeft } from 'lucide-react';

export default function SelectRunStartingPoint() {
  const { id: projectId } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<any>(null);
  const [loadingProject, setLoadingProject] = useState(true);

  const [source, setSource] = useState<'previous' | 'blueprint' | 'blank' | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:3000/v1/projects/${projectId}`);
        if (!res.ok) throw new Error('Failed to fetch project');
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingProject(false);
      }
    };
    fetchProject();
  }, [projectId]);

  if (loadingProject) {
    return (
      <OrganizationLayout>
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-ink-gray-4" />
        </div>
      </OrganizationLayout>
    );
  }

  if (!project) {
    return (
      <OrganizationLayout>
        <div className="flex flex-col h-full items-center justify-center gap-4">
          <p className="text-ink-gray-5">We couldn't load the available Run starting options.</p>
          <Button variant="solid" theme="gray" label="Try again" onClick={() => window.location.reload()} />
          <Link to="/org/projects" className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 mt-4">
            Back to Projects
          </Link>
        </div>
      </OrganizationLayout>
    );
  }

  const previousRuns = project.runs || [];
  const hasPreviousRuns = previousRuns.length > 0;
  // TODO: Check if blueprint exists when we have that API
  const hasBlueprint = false; 

  const handleContinue = () => {
    if (!source) return;

    if (source === 'previous') {
      navigate(`/org/projects/${projectId}/runs/create/copy-previous`);
    } else if (source === 'blueprint') {
      navigate(`/org/projects/${projectId}/runs/create/use-blueprint`);
    } else if (source === 'blank') {
      navigate(`/org/projects/${projectId}/runs/create/blank`);
    }
  };

  return (
    <OrganizationLayout>
      <div className="p-6 md:p-8 flex flex-col min-h-full">
        <div className="max-w-3xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
          
          <nav className="flex items-center text-sm font-medium text-ink-gray-5 mb-8">
            <Link to="/org/projects" className="hover:text-ink-gray-9 transition-colors">Projects</Link>
            <ChevronRight className="size-4 mx-1 text-ink-gray-4" />
            <Link to={`/org/projects/${projectId}`} className="hover:text-ink-gray-9 transition-colors">{project.canonicalName}</Link>
            <ChevronRight className="size-4 mx-1 text-ink-gray-4" />
            <span className="text-ink-gray-9">Create Project Run</span>
          </nav>

          <div className="mb-2">
            <div className="text-sm font-bold text-ink-gray-5 tracking-widest uppercase mb-2">Create Project Run</div>
            <div className="flex items-center gap-2 text-sm text-ink-gray-5 mb-6">
              <span className="font-semibold text-ink-gray-9">Starting Point</span>
              <ChevronRight className="size-3" />
              <span>Run Setup</span>
              <ChevronRight className="size-3" />
              <span>Review</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-2">Choose a starting point</h1>
            <p className="text-ink-gray-6">Choose how you want to prepare this Project Run.</p>
          </div>

          <div className="space-y-12 mt-10">
            
            {/* Project Context (Read-only) */}
            <section className="space-y-4">
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">PROJECT</h2>
              <div className="bg-surface-base border border-outline-gray-2 rounded-lg p-5 shadow-sm">
                <div className="font-semibold text-ink-gray-9">{project.canonicalName}</div>
                <div className="text-sm text-ink-gray-6 mt-1">ABC Technologies</div>
              </div>
            </section>

            {/* Starting Configuration */}
            <section className="space-y-4">
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">STARTING POINT</h2>
              <div className="space-y-3">
                
                {/* Previous Run */}
                <label className={`block border rounded-lg p-5 transition-all ${
                    !hasPreviousRuns ? 'opacity-60 bg-surface-gray-1 border-outline-gray-2 cursor-not-allowed' :
                    source === 'previous' ? 'border-ink-gray-9 bg-surface-base shadow-sm ring-1 ring-ink-gray-9 cursor-pointer' : 'border-outline-gray-2 bg-surface-base hover:bg-surface-gray-1 cursor-pointer'
                  }`}>
                  <div className="flex gap-3">
                    <div className="mt-0.5">
                      <input 
                        type="radio" 
                        name="source" 
                        value="previous" 
                        disabled={!hasPreviousRuns}
                        checked={source === 'previous'} 
                        onChange={() => setSource('previous')}
                        className="size-4 text-ink-gray-9 focus:ring-ink-gray-9" 
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-ink-gray-9">Use Previous Run</div>
                      {!hasPreviousRuns ? (
                        <div className="text-sm text-ink-gray-6 mt-1">Unavailable — no previous Runs exist.</div>
                      ) : (
                        <>
                          <div className="text-sm text-ink-gray-6 mt-1">Start with configuration from one of this Project's earlier Runs.</div>
                          <div className="text-sm text-ink-gray-5 mt-3 font-medium">
                            Configuration can be reused.<br/>
                            Execution history will not be copied.
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </label>

                {/* Project Blueprint */}
                <label className={`block border rounded-lg p-5 transition-all ${
                    !hasBlueprint ? 'opacity-60 bg-surface-gray-1 border-outline-gray-2 cursor-not-allowed' :
                    source === 'blueprint' ? 'border-ink-gray-9 bg-surface-base shadow-sm ring-1 ring-ink-gray-9 cursor-pointer' : 'border-outline-gray-2 bg-surface-base hover:bg-surface-gray-1 cursor-pointer'
                  }`}>
                  <div className="flex gap-3">
                    <div className="mt-0.5">
                      <input 
                        type="radio" 
                        name="source" 
                        value="blueprint" 
                        disabled={!hasBlueprint}
                        checked={source === 'blueprint'} 
                        onChange={() => setSource('blueprint')}
                        className="size-4 text-ink-gray-9 focus:ring-ink-gray-9" 
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-ink-gray-9">Use Project Blueprint</div>
                      {!hasBlueprint ? (
                        <div className="text-sm text-ink-gray-6 mt-1">
                          Unavailable — no Blueprint configured.
                          <div className="mt-2">
                            <Link to={`/org/projects/${projectId}/blueprint`} className="text-ink-gray-9 font-medium hover:underline inline-flex items-center gap-1">
                              View Project Blueprint <ChevronRight className="size-3" />
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="text-sm text-ink-gray-6 mt-1">Start with the reusable defaults configured for this Project.</div>
                      )}
                    </div>
                  </div>
                </label>

                {/* Blank Run */}
                <label className={`block border rounded-lg p-5 cursor-pointer transition-all ${source === 'blank' ? 'border-ink-gray-9 bg-surface-base shadow-sm ring-1 ring-ink-gray-9' : 'border-outline-gray-2 bg-surface-base hover:bg-surface-gray-1'}`}>
                  <div className="flex gap-3">
                    <div className="mt-0.5">
                      <input 
                        type="radio" 
                        name="source" 
                        value="blank" 
                        checked={source === 'blank'} 
                        onChange={() => setSource('blank')}
                        className="size-4 text-ink-gray-9 focus:ring-ink-gray-9" 
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-ink-gray-9">Start Blank</div>
                      <div className="text-sm text-ink-gray-6 mt-1">Start without copied Run configuration.</div>
                    </div>
                  </div>
                </label>

              </div>
            </section>

            <div className="border-t border-outline-gray-2 pt-6 flex items-center justify-between">
              <Link to={`/org/projects/${projectId}`}>
                <Button variant="outline" theme="gray" label="← Back" type="button" className="border-transparent hover:bg-surface-gray-1 text-ink-gray-6" />
              </Link>
              <div className="flex items-center gap-3">
                <Link to={`/org/projects/${projectId}`}>
                  <Button variant="outline" theme="gray" label="Cancel" type="button" />
                </Link>
                <Button 
                  variant="solid" 
                  theme="gray" 
                  label="Continue" 
                  onClick={handleContinue}
                  disabled={!source}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </OrganizationLayout>
  );
}
