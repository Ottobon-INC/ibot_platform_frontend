import React, { useEffect, useRef, useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================================
// submitLead: preserved existing integration function
// ============================================================
async function submitLead(data: LeadFormData): Promise<void> {
  console.log('[IBOT Lead Form Submission - Enterprise Lead]', data);
  await new Promise((resolve) => setTimeout(resolve, 600));
}

export interface LeadFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  pipeline: string;
  selectedStage?: string;
  preset?: string;
}

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
  preset?: string;
}

const STAGE_OPTIONS = [
  'Identify (Assessment)',
  'Build (Skill Nurturing)',
  'Operate (Remote Squads)',
  'Transfer (Handover)',
  'Full Pipeline (End-to-End)',
];

export function LeadModal({ open, onClose, preset }: LeadModalProps) {
  const [form, setForm] = useState<LeadFormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    pipeline: '',
    selectedStage: 'Build (Skill Nurturing)',
    preset,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<LeadFormData>>({});
  const firstInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Trap focus & reset on open
  useEffect(() => {
    if (open) {
      setSuccess(false);
      setErrors({});
      setForm({
        name: '',
        email: '',
        company: '',
        role: '',
        pipeline: '',
        selectedStage: 'Build (Skill Nurturing)',
        preset,
      });
      const t = setTimeout(() => firstInputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [open, preset]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function validate(): boolean {
    const e: Partial<LeadFormData> = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid work email address.';
    if (!form.company.trim()) e.company = 'Please enter your company or organization.';
    if (!form.role.trim()) e.role = 'Please specify your role (e.g. Head of Talent, VP Eng).';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await submitLead(form);
      setSuccess(true);
    } catch {
      setErrors({ pipeline: 'Something went wrong. Please try again or reach out directly.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-[#1F1E1D]/50 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            ref={modalRef}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-lp-surface border border-lp-border-decor rounded-card shadow-2xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-start justify-between px-6 sm:px-8 pt-7 pb-5 border-b"
              style={{ backgroundColor: '#F8F9FA', borderColor: 'rgba(0, 0, 0, 0.08)' }}
            >
              <div>
                <h2
                  id="modal-title"
                  className="text-2xl font-bold text-[#09090B]"
                  style={{
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                  }}
                >
                  Discuss your hiring or deployment requirement.
                </h2>
                <p
                  className="text-xs sm:text-sm text-[#4B5563] mt-1.5 font-normal"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Tell us what your team needs so we can make the demo relevant.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-[#6B7280] hover:text-[#09090B] hover:bg-[#F3F4F6] transition-colors rounded-md border border-transparent hover:border-gray-200 shrink-0 ml-3"
                aria-label="Close dialog"
              >
                <X size={18} strokeWidth={1.8} />
              </button>
            </div>

            {/* Content Body */}
            <div className="px-6 sm:px-8 py-6">
              {success ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-6 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-12 h-12 bg-lp-success-surface border border-[#D5E4D8] rounded-full flex items-center justify-center text-lp-success">
                    <Check size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-lp-heading">
                      Thank you.
                    </h3>
                    <p className="text-xs sm:text-sm text-lp-body mt-2 max-w-sm mx-auto leading-relaxed">
                      We will be in touch within one business day to align around your process.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="lp-btn-primary w-full mt-4 justify-center"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 font-sans text-xs">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-lp-heading mb-1.5">
                        Full name <span className="text-lp-cta-primary">*</span>
                      </label>
                      <input
                        ref={firstInputRef}
                        type="text"
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className={`w-full px-3 py-2 text-xs rounded border bg-lp-surface text-lp-heading focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-lp-border-decor focus:border-lp-border-inter'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-lp-heading mb-1.5">
                        Work email <span className="text-lp-cta-primary">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className={`w-full px-3 py-2 text-xs rounded border bg-lp-surface text-lp-heading focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-lp-border-decor focus:border-lp-border-inter'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-lp-heading mb-1.5">
                        Company <span className="text-lp-cta-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                        className={`w-full px-3 py-2 text-xs rounded border bg-lp-surface text-lp-heading focus:outline-none transition-colors ${
                          errors.company
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-lp-border-decor focus:border-lp-border-inter'
                        }`}
                      />
                      {errors.company && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-lp-heading mb-1.5">
                        Your role <span className="text-lp-cta-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="VP of Engineering, Head of Talent"
                        value={form.role}
                        onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                        className={`w-full px-3 py-2 text-xs rounded border bg-lp-surface text-lp-heading focus:outline-none transition-colors ${
                          errors.role
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-lp-border-decor focus:border-lp-border-inter'
                        }`}
                      />
                      {errors.role && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.role}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Program Phase Focus */}
                  <div>
                    <label className="block text-xs font-medium text-lp-heading mb-1.5">
                      Primary phase of interest
                    </label>
                    <select
                      value={form.selectedStage}
                      onChange={(e) => setForm((f) => ({ ...f, selectedStage: e.target.value }))}
                      className="w-full px-3 py-2 text-xs rounded border border-lp-border-decor bg-lp-surface text-lp-heading focus:outline-none focus:border-lp-border-inter"
                    >
                      {STAGE_OPTIONS.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Requirements Textarea */}
                  <div>
                    <label className="block text-xs font-medium text-lp-heading mb-1.5">
                      Where do you want to strengthen your pipeline?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the roles, frameworks, or deployment requirements you need to validate."
                      value={form.pipeline}
                      onChange={(e) => setForm((f) => ({ ...f, pipeline: e.target.value }))}
                      className="w-full px-3 py-2 text-xs rounded border border-lp-border-decor bg-lp-surface text-lp-heading focus:outline-none focus:border-lp-border-inter leading-relaxed resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white transition-all duration-150 shadow-md shadow-[#2563EB]/30"
                      style={{
                        backgroundColor: '#2563EB',
                        fontFamily: 'var(--font-sans)',
                        letterSpacing: '-0.01em',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1D4ED8')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563EB')}
                    >
                      {submitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Request a demo</span>
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </div>

                  <p
                    className="text-[11px] text-[#6B7280] text-center mt-1"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Confidential alignment consultation. No recruitment disruption.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
