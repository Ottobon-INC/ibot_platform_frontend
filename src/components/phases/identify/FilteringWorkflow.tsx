import React from 'react';
import { GitBranch, ShieldCheck, UserCheck, ArrowRight, ArrowDown, Check, CheckCircle2 } from 'lucide-react';
import { IDENTIFY_CONTENT } from '../../../content/identifyContent';

export const FilteringWorkflow: React.FC = () => {
  const { workflow } = IDENTIFY_CONTENT;

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto py-16 sm:py-24 border-t border-slate-200/60">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <GitBranch size={13} className="shrink-0" />
          <span>{workflow.eyebrow}</span>
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.15] mb-5 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {workflow.headline}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {workflow.supportingCopy}
        </p>
      </div>

      {/* Connected 6-Stage Qualification Pipeline Journey */}
      <div className="mb-14">
        {/* Tier 1: Stages 01 to 03 (Architecture & Setup) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-6">
          {workflow.stages.slice(0, 3).map((stage, idx) => (
            <div
              key={stage.number}
              className="rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/70 uppercase tracking-wider">
                    STAGE {stage.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Step {stage.number} of 06</span>
                </div>

                {/* Stage Title */}
                <h3
                  className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stage.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {stage.summary}
                </p>
              </div>

              {/* Step indicator arrow */}
              <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{idx === 0 ? 'Requirements Intake' : idx === 1 ? 'Method Selection' : 'Scoring Rubrics'}</span>
                <ArrowRight size={13} className="text-slate-300 group-hover:text-orange-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Transitional Bridge (Desktop connector between setup and execution) */}
        <div className="hidden md:flex items-center justify-center my-4">
          <div className="h-px bg-slate-200 flex-1" />
          <div className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-500 font-semibold flex items-center gap-1.5">
            <span>Evidence Pipeline Progression</span>
            <ArrowDown size={12} className="text-slate-400" />
          </div>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        {/* Tier 2: Stages 04 to 06 (Assessment, Synthesis, and Human Shortlisting) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflow.stages.slice(3, 6).map((stage, idx) => {
            const isStage6 = stage.isGovernanceStage;

            return (
              <div
                key={stage.number}
                className={`rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all relative ${
                  isStage6
                    ? 'bg-slate-900 text-white border-slate-800 ring-2 ring-emerald-500/30 shadow-xl'
                    : 'bg-white border-slate-200/90 shadow-2xs hover:shadow-xs'
                }`}
              >
                <div>
                  {/* Stage Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                        isStage6
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-slate-100 text-slate-700 border border-slate-200/70'
                      }`}
                    >
                      STAGE {stage.number}
                    </span>

                    {isStage6 ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/80">
                        <UserCheck size={13} />
                        <span>HUMAN GOVERNANCE</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400">Step {stage.number} of 06</span>
                    )}
                  </div>

                  {/* Stage Title */}
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-2.5 ${
                      isStage6 ? 'text-white' : 'text-slate-900'
                    }`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stage.title}
                  </h3>

                  {/* Summary */}
                  <p
                    className={`text-xs sm:text-[13px] leading-relaxed ${
                      isStage6 ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {stage.summary}
                  </p>
                </div>

                {/* Step indicator footer */}
                <div
                  className={`mt-6 pt-3.5 border-t text-[11px] font-mono flex items-center justify-between ${
                    isStage6
                      ? 'border-slate-800 text-emerald-400'
                      : 'border-slate-100 text-slate-400'
                  }`}
                >
                  <span>
                    {isStage6 ? 'Authorized Decision' : idx === 0 ? 'Active Evaluation' : 'Dossier Generation'}
                  </span>
                  {isStage6 ? (
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <Check size={12} />
                      <span>Final Decision Point</span>
                    </span>
                  ) : (
                    <ArrowRight size={13} className="text-slate-300" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decision Governance Callout Box (Preserving exact wording & styling) */}
      <div className="rounded-3xl bg-amber-50/60 border border-amber-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-6 shadow-2xs">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
          <ShieldCheck size={24} className="text-amber-700" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="font-mono text-xs font-bold text-amber-800 uppercase tracking-wider">
              {workflow.governanceCallout.tag}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs font-semibold text-slate-800">
              {workflow.governanceCallout.title}
            </span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
            {workflow.governanceCallout.body}
          </p>
        </div>
      </div>
    </section>
  );
};
