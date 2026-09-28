import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { OrganizationLayout } from '../../layouts/OrganizationLayout';
import { Button } from '../../components/ui/Button';
import { 
  ChevronRight, 
  UserCheck, 
  ArrowRight, 
  Users, 
  Activity, 
  ShieldAlert,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  ChevronRightCircle,
  X
} from 'lucide-react';

export default function OrganizationRunDetail() {
  const { projectId, runId } = useParams();
  const navigate = useNavigate();

  const [run, setRun] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Assign Lead Modal
  const [selectedPhaseForAssignment, setSelectedPhaseForAssignment] = useState<any>(null);
  const [personIdInput, setPersonIdInput] = useState('');
  const [isAssigning, setIsAssigning] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const fetchRun = async () => {
    try {
      const res = await fetch(`http://localhost:3000/v1/runs/${runId}`);
      if (!res.ok) throw new Error('Failed to fetch run details');
      const data = await res.json();
      setRun(data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (runId) fetchRun();
  }, [runId]);

  const handleOpenAssignModal = (phase: any) => {
    setSelectedPhaseForAssignment(phase);
    // Pre-fill personId if already assigned
    const currentLead = phase.phaseAssignments?.[0]?.person;
    setPersonIdInput(currentLead?.id || '00000000-0000-0000-0000-000000000001');
  };

  const handleAssignLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPhaseForAssignment || !personIdInput.trim() || isAssigning) return;

    setIsAssigning(true);
    try {
      const res = await fetch(`http://localhost:3000/v1/runs/phases/${selectedPhaseForAssignment.id}/assignments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          organizationId: run.organizationId,
          personId: personIdInput,
          partySide: selectedPhaseForAssignment.ownershipType || 'ORGANIZATION'
        })
      });

      if (!res.ok) throw new Error('Failed to assign phase lead');

      await fetchRun();
      setSelectedPhaseForAssignment(null);
      setToastMessage('Phase Lead assigned successfully!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAssigning(false);
    }
  };

  if (loading) {
    return (
      <OrganizationLayout>
        <div className="p-6 md:p-8 flex flex-col min-h-full">
          <div className="max-w-5xl mx-auto w-full space-y-6 animate-pulse">
            <div className="h-4 bg-outline-gray-2/50 rounded w-1/4"></div>
            <div className="h-10 bg-outline-gray-2/50 rounded w-1/2"></div>
            <div className="h-24 bg-outline-gray-2/50 rounded w-full"></div>
          </div>
        </div>
      </OrganizationLayout>
    );
  }

  if (error || !run) {
    return (
      <OrganizationLayout>
        <div className="p-6 md:p-8 flex flex-col items-center justify-center min-h-[60vh]">
          <ShieldAlert className="size-12 text-ink-red-3 mb-4" />
          <h2 className="text-xl font-bold text-ink-gray-9 mb-2">Run Execution Not Found</h2>
          <p className="text-ink-gray-6 mb-6">Unable to fetch details for Project Run ID: {runId}</p>
          <Button variant="solid" theme="gray" onClick={() => navigate(`/org/projects/${projectId}`)}>
            Return to Project
          </Button>
        </div>
      </OrganizationLayout>
    );
  }

  const activePhasesCount = run.runPhases?.length || 0;
  const totalParticipations = run.runParticipations?.length || 0;

  return (
    <OrganizationLayout>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-ink-gray-9 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 border border-outline-gray-2 animate-in fade-in slide-in-from-bottom-5">
          <CheckCircle2 className="size-5 text-ink-green-4" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Assign Lead Modal */}
      {selectedPhaseForAssignment && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-outline-gray-2 mb-4">
              <h3 className="text-lg font-bold text-ink-gray-9 flex items-center gap-2">
                <UserCheck className="size-5 text-ink-gray-7" />
                Assign Lead for {selectedPhaseForAssignment.phaseType} Phase
              </h3>
              <button 
                onClick={() => setSelectedPhaseForAssignment(null)} 
                className="p-1 text-ink-gray-5 hover:text-ink-gray-9 rounded-md transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            
            <form onSubmit={handleAssignLeadSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-ink-gray-6 uppercase tracking-wider mb-2">
                  Select Team Lead (Person ID)
                </label>
                <select
                  value={personIdInput}
                  onChange={(e) => setPersonIdInput(e.target.value)}
                  className="w-full px-3 py-2 border border-outline-gray-2 rounded-lg bg-surface-base text-ink-gray-9 text-sm focus:outline-none focus:ring-2 focus:ring-ink-gray-9"
                >
                  <option value="00000000-0000-0000-0000-000000000001">John Doe (Identify Lead)</option>
                  <option value="00000000-0000-0000-0000-000000000002">Jane Smith (Build Lead)</option>
                  <option value="00000000-0000-0000-0000-000000000003">Alex Vance (Operate Lead)</option>
                  <option value="00000000-0000-0000-0000-000000000004">Sarah Connor (Transfer Lead)</option>
                </select>
                <p className="text-xs text-ink-gray-5 mt-1">
                  Assigns responsible team lead for candidate intake & phase governance.
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-outline-gray-2">
                <Button 
                  type="button" 
                  variant="subtle" 
                  theme="gray" 
                  onClick={() => setSelectedPhaseForAssignment(null)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  variant="solid" 
                  theme="gray"
                  disabled={isAssigning}
                >
                  {isAssigning ? 'Assigning...' : 'Confirm Assignment'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col min-h-full">
        <div className="max-w-5xl mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
          
          {/* Header */}
          <div className="space-y-4">
            <nav className="flex items-center text-sm font-medium text-ink-gray-5">
              <Link to="/org/projects" className="hover:text-ink-gray-9 transition-colors">Projects</Link>
              <ChevronRight className="size-4 mx-1 text-ink-gray-4" />
              <Link to={`/org/projects/${projectId}`} className="hover:text-ink-gray-9 transition-colors">
                {run.project?.canonicalName || 'Project'}
              </Link>
              <ChevronRight className="size-4 mx-1 text-ink-gray-4" />
              <span className="text-ink-gray-9">{run.displayName}</span>
            </nav>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9">{run.displayName}</h1>
                  <span className="inline-flex items-center rounded-md bg-ink-green-1 px-2.5 py-1 text-xs font-semibold text-ink-green-7 ring-1 ring-inset ring-ink-green-3">
                    {run.status || 'ACTIVE'}
                  </span>
                </div>
                <p className="text-ink-gray-6 font-medium text-sm">
                  {run.description || 'Active operational run cycle executing candidate handovers across journey phases.'}
                </p>
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="flex items-center bg-surface-gray-1 border border-outline-gray-2 rounded-lg px-4 py-3 text-sm font-medium text-ink-gray-7 overflow-x-auto shadow-sm">
              <div className="flex-1 min-w-max pr-6 border-r border-outline-gray-2 flex items-center gap-3">
                <Layers className="size-5 text-ink-gray-6" />
                <div>
                  <div className="text-xs text-ink-gray-5">Enabled Phases</div>
                  <div className="font-bold text-ink-gray-9 text-base">{activePhasesCount} Active Phases</div>
                </div>
              </div>

              <div className="flex-1 min-w-max px-6 border-r border-outline-gray-2 flex items-center gap-3">
                <Users className="size-5 text-ink-gray-6" />
                <div>
                  <div className="text-xs text-ink-gray-5">Target Intake</div>
                  <div className="font-bold text-ink-gray-9 text-base">{run.targetParticipantCount || 50} Candidates</div>
                </div>
              </div>

              <div className="flex-1 min-w-max px-6 border-r border-outline-gray-2 flex items-center gap-3">
                <Activity className="size-5 text-ink-gray-6" />
                <div>
                  <div className="text-xs text-ink-gray-5">Total Participations</div>
                  <div className="font-bold text-ink-gray-9 text-base">{totalParticipations} Enrolled</div>
                </div>
              </div>

              <div className="flex-1 min-w-max pl-6 flex items-center gap-3">
                <Sparkles className="size-5 text-ink-gray-6" />
                <div>
                  <div className="text-xs text-ink-gray-5">Phase Progression</div>
                  <div className="font-bold text-ink-gray-9 text-base">Manual Handovers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Journey Stepper */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-outline-gray-2 pb-2">
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider">Run Journey Architecture</h2>
              <span className="text-xs text-ink-gray-5 font-medium">HLD Rule 5 Enforced</span>
            </div>

            <div className="bg-surface-base border border-outline-gray-2 rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                {run.runPhases?.map((phase: any, index: number) => {
                  const leadAssignment = phase.phaseAssignments?.[0];
                  const hasLead = !!leadAssignment?.person;
                  const phaseLeadName = hasLead 
                    ? `${leadAssignment.person.firstName} ${leadAssignment.person.lastName}`
                    : 'Unassigned';

                  return (
                    <div 
                      key={phase.id} 
                      className="border border-outline-gray-2 rounded-lg p-4 bg-surface-gray-1/40 hover:bg-surface-gray-1 transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-ink-gray-9 text-white tracking-wide">
                          STEP 0{index + 1}
                        </span>
                        <span className="text-xs font-semibold text-ink-gray-6 uppercase tracking-wider">
                          {phase.ownershipType || 'ORGANIZATION'}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-bold text-ink-gray-9 text-lg mb-1">{phase.phaseType}</h3>
                        <div className="flex items-center gap-1.5 text-xs text-ink-gray-6">
                          <UserCheck className="size-3.5 text-ink-gray-5" />
                          <span>Lead: <strong className="text-ink-gray-9">{phaseLeadName}</strong></span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-outline-gray-2/60 flex items-center justify-between">
                        <span className="text-xs font-semibold text-ink-green-7 flex items-center gap-1">
                          <Clock className="size-3.5" /> ACTIVE
                        </span>
                        <Button 
                          variant="subtle" 
                          theme="gray" 
                          onClick={() => navigate(`/org/projects/${projectId}/runs/${runId}/phases/${phase.id}`)}
                        >
                          Workbench →
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Phase Execution & Governance Cards */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider border-b border-outline-gray-2 pb-2">
              Phase Workbenches & Governance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {run.runPhases?.map((phase: any) => {
                const leadAssignment = phase.phaseAssignments?.[0];
                const phaseLead = leadAssignment?.person;

                return (
                  <div 
                    key={phase.id} 
                    className="bg-surface-base border border-outline-gray-2 rounded-xl p-6 shadow-sm hover:border-outline-gray-3 transition-all flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="p-2 rounded-lg bg-surface-gray-1 border border-outline-gray-2 text-ink-gray-9 font-bold text-sm">
                            {phase.phaseType.slice(0, 3)}
                          </span>
                          <div>
                            <h3 className="font-bold text-ink-gray-9 text-xl">{phase.phaseType} Phase</h3>
                            <p className="text-xs text-ink-gray-5">Seq #{phase.sequenceNo} • {phase.ownershipType || 'ORGANIZATION'} Governance</p>
                          </div>
                        </div>

                        <span className="inline-flex items-center rounded-md bg-ink-gray-1 px-2.5 py-1 text-xs font-medium text-ink-gray-7 ring-1 ring-inset ring-outline-gray-2">
                          {phase.status || 'ACTIVE'}
                        </span>
                      </div>

                      {/* Team Lead Card */}
                      <div className="p-4 rounded-lg bg-surface-gray-1/60 border border-outline-gray-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-full bg-ink-gray-9 text-white flex items-center justify-center font-bold text-sm">
                            {phaseLead ? `${phaseLead.firstName[0]}${phaseLead.lastName[0]}` : '?'}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-ink-gray-5">Assigned Phase Lead</div>
                            <div className="font-bold text-ink-gray-9 text-sm">
                              {phaseLead ? `${phaseLead.firstName} ${phaseLead.lastName}` : 'No Lead Assigned'}
                            </div>
                          </div>
                        </div>

                        <Button 
                          variant="subtle" 
                          theme="gray"
                          onClick={() => handleOpenAssignModal(phase)}
                        >
                          {phaseLead ? 'Change' : 'Assign'}
                        </Button>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-outline-gray-2 flex items-center justify-between">
                      <div className="text-xs text-ink-gray-5">
                        Handover Ready
                      </div>

                      <Button 
                        variant="solid" 
                        theme="gray" 
                        onClick={() => navigate(`/org/projects/${projectId}/runs/${runId}/phases/${phase.id}`)}
                      >
                        Enter Phase Workbench <ChevronRightCircle className="size-4 ml-1.5" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </div>
    </OrganizationLayout>
  );
}
