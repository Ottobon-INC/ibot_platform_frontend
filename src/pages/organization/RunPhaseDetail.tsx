import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { OrganizationLayout } from '../../layouts/OrganizationLayout';
import { Button } from '../../components/ui/Button';
import { 
  ChevronRight, 
  UserCheck, 
  ArrowRight, 
  Users, 
  Send,
  Inbox,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  X,
  Plus,
  AlertCircle,
  FileCheck
} from 'lucide-react';

export default function RunPhaseDetail() {
  const { projectId, runId, phaseId } = useParams();
  const navigate = useNavigate();

  const [phase, setPhase] = useState<any>(null);
  const [run, setRun] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Candidate Selection for Handover
  const [selectedCandidateIds, setSelectedCandidateIds] = useState<string[]>([]);

  // Initiate Handover Modal
  const [showInitiateModal, setShowInitiateModal] = useState(false);
  const [targetPhaseId, setTargetPhaseId] = useState('');
  const [handoverTitle, setHandoverTitle] = useState('');
  const [handoverReason, setHandoverReason] = useState('');
  const [isInitiating, setIsInitiating] = useState(false);

  // Incoming Handovers Modal
  const [showIncomingModal, setShowIncomingModal] = useState(false);
  const [incomingHandovers, setIncomingHandovers] = useState<any[]>([]);
  const [isAccepting, setIsAccepting] = useState(false);

  // Toast State
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const fetchData = async () => {
    try {
      // Fetch Phase details
      const phaseRes = await fetch(`http://localhost:3000/v1/runs/phases/${phaseId}`);
      if (!phaseRes.ok) throw new Error('Failed to fetch phase details');
      const phaseData = await phaseRes.json();
      setPhase(phaseData);

      // Fetch Run details for sibling phases
      const runRes = await fetch(`http://localhost:3000/v1/runs/${runId}`);
      if (runRes.ok) {
        const runData = await runRes.json();
        setRun(runData);

        // Set default target phase to the next sequence phase if available
        if (phaseData && runData.runPhases) {
          const nextPhase = runData.runPhases.find((p: any) => p.sequenceNo > phaseData.sequenceNo);
          if (nextPhase) setTargetPhaseId(nextPhase.id);
        }
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (phaseId && runId) fetchData();
  }, [phaseId, runId]);

  const toggleCandidateSelect = (id: string) => {
    if (selectedCandidateIds.includes(id)) {
      setSelectedCandidateIds(selectedCandidateIds.filter(cId => cId !== id));
    } else {
      setSelectedCandidateIds([...selectedCandidateIds, id]);
    }
  };

  const toggleSelectAllCandidates = () => {
    if (!phase?.phaseParticipations) return;
    const activeCandidates = phase.phaseParticipations.filter((p: any) => p.status === 'ACTIVE');
    if (selectedCandidateIds.length === activeCandidates.length) {
      setSelectedCandidateIds([]);
    } else {
      setSelectedCandidateIds(activeCandidates.map((c: any) => c.id));
    }
  };

  const handleOpenInitiateHandover = () => {
    if (selectedCandidateIds.length === 0) return;
    const targetPhase = run?.runPhases?.find((p: any) => p.id === targetPhaseId);
    setHandoverTitle(`Handover: ${phase.phaseType} → ${targetPhase?.phaseType || 'Next Phase'}`);
    setHandoverReason('Qualified candidates ready for next phase intake and execution.');
    setShowInitiateModal(true);
  };

  const handleInitiateHandoverSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetPhaseId || selectedCandidateIds.length === 0 || isInitiating) return;

    setIsInitiating(true);
    try {
      const res = await fetch(`http://localhost:3000/v1/runs/handovers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          organizationId: phase.organizationId,
          projectRunId: runId,
          fromRunPhaseId: phaseId,
          toRunPhaseId: targetPhaseId,
          candidateIds: selectedCandidateIds,
          initiatedByPersonId: '00000000-0000-0000-0000-000000000001', // Identify Lead
          title: handoverTitle,
          reason: handoverReason
        })
      });

      if (!res.ok) throw new Error('Failed to initiate handover');

      setShowInitiateModal(false);
      setSelectedCandidateIds([]);
      await fetchData();
      setToastMessage(`Handover package sent successfully for ${selectedCandidateIds.length} candidate(s)!`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsInitiating(false);
    }
  };

  const handleAcceptHandover = async (handoverId: string) => {
    if (isAccepting) return;
    setIsAccepting(true);
    try {
      const res = await fetch(`http://localhost:3000/v1/runs/handovers/${handoverId}/accept`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          acceptedByPersonId: '00000000-0000-0000-0000-000000000002' // Build Lead
        })
      });

      if (!res.ok) throw new Error('Failed to accept handover');

      setShowIncomingModal(false);
      await fetchData();
      setToastMessage('Handover accepted! Candidates successfully enrolled into phase.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAccepting(false);
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

  if (error || !phase) {
    return (
      <OrganizationLayout>
        <div className="p-6 md:p-8 flex flex-col items-center justify-center min-h-[60vh]">
          <AlertCircle className="size-12 text-ink-red-3 mb-4" />
          <h2 className="text-xl font-bold text-ink-gray-9 mb-2">Phase Workbench Not Found</h2>
          <p className="text-ink-gray-6 mb-6">Unable to fetch details for Run Phase ID: {phaseId}</p>
          <Button variant="solid" theme="gray" onClick={() => navigate(`/org/projects/${projectId}/runs/${runId}`)}>
            Return to Run Dashboard
          </Button>
        </div>
      </OrganizationLayout>
    );
  }

  const phaseLeadAssignment = phase.phaseAssignments?.[0];
  const phaseLead = phaseLeadAssignment?.person;
  const activeCandidates = phase.phaseParticipations?.filter((p: any) => p.status === 'ACTIVE') || [];
  const completedCandidates = phase.phaseParticipations?.filter((p: any) => p.status === 'COMPLETED') || [];
  const otherPhases = run?.runPhases?.filter((p: any) => p.id !== phaseId) || [];

  return (
    <OrganizationLayout>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-ink-gray-9 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 border border-outline-gray-2 animate-in fade-in slide-in-from-bottom-5">
          <CheckCircle2 className="size-5 text-ink-green-4" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Initiate Handover Modal */}
      {showInitiateModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-2xl max-w-lg w-full p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-outline-gray-2 mb-4">
              <h3 className="text-lg font-bold text-ink-gray-9 flex items-center gap-2">
                <Send className="size-5 text-ink-gray-7" />
                Initiate Manual Phase Handover
              </h3>
              <button 
                onClick={() => setShowInitiateModal(null)} 
                className="p-1 text-ink-gray-5 hover:text-ink-gray-9 rounded-md transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            
            <form onSubmit={handleInitiateHandoverSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-ink-gray-6 uppercase tracking-wider mb-2">
                  Target Next Phase
                </label>
                <select
                  value={targetPhaseId}
                  onChange={(e) => setTargetPhaseId(e.target.value)}
                  className="w-full px-3 py-2 border border-outline-gray-2 rounded-lg bg-surface-base text-ink-gray-9 text-sm focus:outline-none focus:ring-2 focus:ring-ink-gray-9"
                >
                  {otherPhases.map((p: any) => (
                    <option key={p.id} value={p.id}>
                      {p.phaseType} Phase (Seq #{p.sequenceNo}) — {p.ownershipType}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-gray-6 uppercase tracking-wider mb-2">
                  Handover Package Title
                </label>
                <input
                  type="text"
                  value={handoverTitle}
                  onChange={(e) => setHandoverTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-outline-gray-2 rounded-lg bg-surface-base text-ink-gray-9 text-sm focus:outline-none focus:ring-2 focus:ring-ink-gray-9"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-gray-6 uppercase tracking-wider mb-2">
                  Justification / Intake Reason
                </label>
                <textarea
                  value={handoverReason}
                  onChange={(e) => setHandoverReason(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-outline-gray-2 rounded-lg bg-surface-base text-ink-gray-9 text-sm focus:outline-none focus:ring-2 focus:ring-ink-gray-9"
                />
              </div>

              <div className="p-3 bg-surface-gray-1 border border-outline-gray-2 rounded-lg text-xs text-ink-gray-7">
                <span className="font-bold text-ink-gray-9">{selectedCandidateIds.length} candidate(s)</span> selected for transfer from <strong className="text-ink-gray-9">{phase.phaseType}</strong>.
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-outline-gray-2">
                <Button 
                  type="button" 
                  variant="subtle" 
                  theme="gray" 
                  onClick={() => setShowInitiateModal(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  variant="solid" 
                  theme="gray"
                  disabled={isInitiating}
                >
                  {isInitiating ? 'Sending Handover...' : 'Send Handover Package'}
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
                {phase.projectRun?.project?.canonicalName || 'Project'}
              </Link>
              <ChevronRight className="size-4 mx-1 text-ink-gray-4" />
              <Link to={`/org/projects/${projectId}/runs/${runId}`} className="hover:text-ink-gray-9 transition-colors">
                {phase.projectRun?.displayName || 'Run Execution'}
              </Link>
              <ChevronRight className="size-4 mx-1 text-ink-gray-4" />
              <span className="text-ink-gray-9">{phase.phaseType} Phase Workbench</span>
            </nav>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9">{phase.phaseType} Phase Workbench</h1>
                  <span className="inline-flex items-center rounded-md bg-ink-gray-9 px-2.5 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                    {phase.ownershipType || 'ORGANIZATION'}
                  </span>
                </div>
                <p className="text-ink-gray-6 font-medium text-sm">
                  Sequence #{phase.sequenceNo} • Phase Lead: <strong className="text-ink-gray-9">{phaseLead ? `${phaseLead.firstName} ${phaseLead.lastName}` : 'Unassigned'}</strong>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button 
                  variant="solid" 
                  theme="gray"
                  disabled={selectedCandidateIds.length === 0}
                  onClick={handleOpenInitiateHandover}
                >
                  <Send className="size-4 mr-2" />
                  Initiate Handover ({selectedCandidateIds.length})
                </Button>
              </div>
            </div>

            {/* Summary Strip */}
            <div className="flex items-center bg-surface-gray-1 border border-outline-gray-2 rounded-lg px-4 py-3 text-sm font-medium text-ink-gray-7 overflow-x-auto shadow-sm">
              <div className="flex-1 min-w-max pr-6 border-r border-outline-gray-2 flex items-center gap-3">
                <Users className="size-5 text-ink-gray-6" />
                <div>
                  <div className="text-xs text-ink-gray-5">Active Roster</div>
                  <div className="font-bold text-ink-gray-9 text-base">{activeCandidates.length} Candidates</div>
                </div>
              </div>

              <div className="flex-1 min-w-max px-6 border-r border-outline-gray-2 flex items-center gap-3">
                <FileCheck className="size-5 text-ink-gray-6" />
                <div>
                  <div className="text-xs text-ink-gray-5">Completed / Handed Over</div>
                  <div className="font-bold text-ink-gray-9 text-base">{completedCandidates.length} Candidates</div>
                </div>
              </div>

              <div className="flex-1 min-w-max pl-6 flex items-center gap-3">
                <ShieldCheck className="size-5 text-ink-gray-6" />
                <div>
                  <div className="text-xs text-ink-gray-5">Phase Status</div>
                  <div className="font-bold text-ink-gray-9 text-base">{phase.status || 'ACTIVE'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Candidate Roster Table */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-outline-gray-2 pb-2">
              <h2 className="text-xs font-bold text-ink-gray-5 uppercase tracking-wider">
                Phase Candidate Roster ({phase.phaseParticipations?.length || 0})
              </h2>

              {selectedCandidateIds.length > 0 && (
                <span className="text-xs font-semibold text-ink-gray-9 bg-surface-gray-1 px-2.5 py-1 rounded border border-outline-gray-2">
                  {selectedCandidateIds.length} candidate(s) selected
                </span>
              )}
            </div>

            <div className="bg-surface-base border border-outline-gray-2 rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-surface-gray-1 border-b border-outline-gray-2 text-xs font-bold text-ink-gray-5 uppercase tracking-wider">
                    <tr>
                      <th className="px-5 py-3 w-10">
                        <input 
                          type="checkbox"
                          checked={activeCandidates.length > 0 && selectedCandidateIds.length === activeCandidates.length}
                          onChange={toggleSelectAllCandidates}
                          className="rounded border-outline-gray-2 text-ink-gray-9 focus:ring-ink-gray-9 cursor-pointer"
                        />
                      </th>
                      <th className="px-5 py-3">Candidate</th>
                      <th className="px-5 py-3">Intake Source</th>
                      <th className="px-5 py-3">Entered At</th>
                      <th className="px-5 py-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-gray-2 text-ink-gray-9">
                    {phase.phaseParticipations?.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-ink-gray-5">
                          No candidates currently enrolled in this phase.<br/>
                          Candidates enter via Direct Intake or Manual Handover acceptance.
                        </td>
                      </tr>
                    ) : (
                      phase.phaseParticipations?.map((part: any) => {
                        const personName = part.person 
                          ? `${part.person.firstName} ${part.person.lastName}`
                          : `Candidate #${part.id.slice(0, 8)}`;
                        const isSelected = selectedCandidateIds.includes(part.id);
                        const isActive = part.status === 'ACTIVE';

                        return (
                          <tr 
                            key={part.id} 
                            className={`transition-colors ${isSelected ? 'bg-surface-gray-1' : 'hover:bg-surface-gray-1/50'}`}
                          >
                            <td className="px-5 py-4">
                              <input 
                                type="checkbox"
                                disabled={!isActive}
                                checked={isSelected}
                                onChange={() => toggleCandidateSelect(part.id)}
                                className="rounded border-outline-gray-2 text-ink-gray-9 focus:ring-ink-gray-9 cursor-pointer disabled:opacity-40"
                              />
                            </td>
                            <td className="px-5 py-4 font-semibold text-ink-gray-9">
                              <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-surface-gray-1 border border-outline-gray-2 flex items-center justify-center font-bold text-xs text-ink-gray-7">
                                  {personName[0]}
                                </div>
                                <div>
                                  <div>{personName}</div>
                                  <div className="text-xs text-ink-gray-5 font-mono">{part.id.slice(0, 12)}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-4 text-ink-gray-6 font-medium">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface-gray-1 border border-outline-gray-2 text-ink-gray-7">
                                {part.intakeSourceType || 'DIRECT'}
                              </span>
                            </td>
                            <td className="px-5 py-4 text-ink-gray-6 text-xs font-medium">
                              {new Date(part.enteredAt).toLocaleString()}
                            </td>
                            <td className="px-5 py-4 text-right">
                              <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
                                isActive 
                                  ? 'bg-ink-green-1 text-ink-green-7 ring-ink-green-3' 
                                  : 'bg-ink-gray-1 text-ink-gray-7 ring-outline-gray-2'
                              }`}>
                                {part.status}
                              </span>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

        </div>
      </div>
    </OrganizationLayout>
  );
}
