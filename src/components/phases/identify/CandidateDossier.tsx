import React, { useState } from 'react';
import { FileText, CheckCircle2, AlertTriangle, Code2, ShieldCheck, Check, UserCheck, TerminalSquare } from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';

export const CandidateDossier: React.FC = () => {
  const { dossier } = IDENTIFY_CONTENT;
  const { scorecard, codeArtifact, strengthsAndGaps, decisionPanel } = dossier;
  const [selectedDecision, setSelectedDecision] = useState<number>(0);

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto py-16 sm:py-24 border-t border-slate-200/60">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <FileText size={13} className="shrink-0" />
          <span>{dossier.eyebrow}</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.15] mb-5 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {dossier.headline}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {dossier.supportingCopy}
        </p>
      </div>

      {/* Main Dossier Card Container - Polished Enterprise Product Interface */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 p-5 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Dossier Header Strip */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200">
                {scorecard.configurationId}
              </span>
              <span className="font-mono text-xs font-semibold text-slate-400">
                {scorecard.badge}
              </span>
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {scorecard.profileLabel}
            </h3>
          </div>

          {/* Composite Score Result Tile */}
          <div className="flex items-center gap-4 bg-slate-50/90 p-4 sm:px-6 sm:py-3.5 rounded-2xl border border-slate-200/80 shrink-0">
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                Normalized Composite Score
              </div>
              <div className="text-xs text-slate-600">
                Baseline: <strong className="font-mono text-slate-900">{scorecard.qualificationThreshold}</strong>
              </div>
            </div>
            <div className="border-l border-slate-200 pl-4 sm:pl-5">
              <div className="text-3xl sm:text-4xl font-mono font-bold text-emerald-600 leading-none mb-1">
                {scorecard.compositeScore}
              </div>
              <div className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded inline-block">
                {scorecard.recommendation}
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Balanced Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Column 1: Configured Scored Modules & Audit Breakdown (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Scored Modules (85% Technical Weight)
              </span>
              <span className="text-xs font-mono text-slate-400">Normalized to 100%</span>
            </div>

            <div className="space-y-3">
              {scorecard.scoredModules.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm text-slate-900">
                      {m.name}
                    </span>
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        Weight: {m.weight}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-900 bg-white px-2.5 py-0.5 rounded border border-slate-200 shadow-2xs">
                        {m.score} ({m.rawPts})
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.rubric}
                  </p>
                </div>
              ))}

              {/* HR Client Pass/Fail Gate */}
              <div className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-slate-900">
                      {scorecard.gateModule.name}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                      {scorecard.gateModule.type}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-200">
                    {scorecard.gateModule.status}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {scorecard.gateModule.rubric}
                </p>
              </div>
            </div>

            {/* Validated Normalization Audit Note (Secondary supporting drawer) */}
            <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200/90 text-xs font-mono text-slate-700 mt-1">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-slate-600" />
                <span>Score Normalization Audit Trail</span>
              </div>
              <div className="text-slate-900 font-semibold mb-1">
                {scorecard.mathSummary.normalizedFormula}
              </div>
              <div className="text-[11px] text-slate-500 font-sans">
                {scorecard.mathSummary.note}
              </div>
            </div>
          </div>

          {/* Column 2: Practical Evidence Artifact & Strengths/Gaps (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Practical Work Evidence Artifact */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 size={13} className="text-slate-600" />
                  <span>Work Evidence Artifact</span>
                </span>
                <span className="text-[10px] font-mono text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded font-bold">
                  ILLUSTRATIVE WORK SAMPLE
                </span>
              </div>

              {/* IDE Code Review Display */}
              <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 text-white overflow-hidden border border-slate-800 shadow-md">
                <div className="text-xs font-mono text-slate-300 pb-2.5 mb-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="truncate ml-1 font-semibold">{codeArtifact.title}</span>
                  </div>
                </div>

                <pre className="font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed py-1 space-y-1">
                  <code>{codeArtifact.diffSnippet}</code>
                </pre>

                <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
                  <Check size={13} />
                  <span>{codeArtifact.telemetryNote}</span>
                </div>
              </div>
            </div>

            {/* Demonstrated Strengths & Growth Areas */}
            <div className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 flex flex-col gap-4">
              {/* Strengths */}
              <div>
                <div className="text-[11px] font-mono font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600" />
                  <span>Demonstrated Strengths</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {strengthsAndGaps.strengths.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capability Growth Gaps */}
              <div className="pt-3.5 border-t border-slate-200/70">
                <div className="text-[11px] font-mono font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <AlertTriangle size={14} className="text-amber-600" />
                  <span>Identified Capability Growth Gaps</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {strengthsAndGaps.gaps.map((g, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold shrink-0">·</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Hiring Committee Decision Panel */}
        <div className="pt-6 border-t border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/90">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-1">
                <UserCheck size={14} className="text-orange-600" />
                <span>{decisionPanel.statusBanner}</span>
              </div>
              <p className="text-xs text-slate-500">
                Authorized hiring managers and interview panels retain complete shortlisting authority.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {decisionPanel.options.map((opt, idx) => {
                const isActive = selectedDecision === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedDecision(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {isActive ? `✓ ${opt.label}` : opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 text-[11px] text-slate-400 text-center font-mono">
            {decisionPanel.footnote}
          </div>
        </div>
      </div>
    </section>
  );
};
