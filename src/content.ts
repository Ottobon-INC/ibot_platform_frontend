// ============================================================
// src/content.ts: Single source of truth for landing page copy.
// ============================================================

export const META = {
  title: 'Ottobon · IBOT: Build AI-Era Talent Capability',
  description:
    'Ottobon IBOT complements your existing hiring and training process. Identify learnability, build practical skills, and support remote project execution at the exact stage you need.',
  ogImage: '/og-image.png',
  twitterHandle: '@Ottobon',
  siteUrl: 'https://ottobon.com',
};

export const NAV = {
  brand: 'Ottobon · IBOT',
  links: [
    { label: 'Shift', href: '#shift' },
    { label: 'Approach', href: '#approach' },
    { label: 'Integration', href: '#integration' },
    { label: 'Who It Is For', href: '#ecosystem' },
  ],
  cta: 'Connect With Us',
};

export const HERO = {
  eyebrow: 'IBOT: Identify, Build, Operate, Transfer',
  h1: 'Build AI-era talent capability inside your existing hiring process.',
  sub: 'Your recruitment and training frameworks stay in place. Ottobon plugs in alongside your teams to identify learnability, nurture skills through practical work, and support remote project execution.',
  tagline: 'Keep your current framework. Augment where needed. Engage at any stage.',
  ctaPrimary: 'Connect With Us',
  ctaSecondary: 'Explore IBOT',
  ctaSecondaryHref: '#approach',
};

export const SECTION_SHIFT = {
  exhibit: 'EXHIBIT 01',
  exhibitSub: 'THE SHIFT IN WORK',
  h2: 'New technologies need a specialized layer of preparation.',
  body: 'Established hiring and training processes are built for scale and consistency. Modern AI-era development adds high ambiguity: engineers must talk to customers, understand shifting requirements, build, test, and take ownership. Meanwhile, project pressure limits how much time internal teams can spend nurturing these skills.',
  rows: [
    'High-Ambiguity Roles',
    'Emerging Tech Requirements',
    'Compressed Training Timelines',
    'Need for Real-World Adaptability',
  ],
  closing: 'Keep your established framework intact while adding a dedicated layer for AI-era readiness.',
};

export const SECTION_APPROACH = {
  exhibit: 'EXHIBIT 02',
  exhibitSub: 'IDENTIFY. BUILD. OPERATE. TRANSFER.',
  h2: 'Complement your talent pipeline at the exact stage you need.',
  steps: [
    {
      numeral: '01',
      label: 'Identify',
      body: 'Run your standard recruitment process as usual, or bring in our specialized assessment methods when filtering for learnability and emerging-technology roles.',
    },
    {
      numeral: '02',
      label: 'Build',
      body: 'Augment your internal training. We nurture candidates through hands-on, project-driven problem solving tailored to the tools your teams actually use.',
    },
    {
      numeral: '03',
      label: 'Operate',
      body: 'Access remote, guided talent and Ottobon consultants, who build practical experience on real tasks and applications.',
    },
    {
      numeral: '04',
      label: 'Transfer',
      body: 'Bring project-tested contributors into your organization smoothly, aligned with your standard onboarding timelines.',
    },
  ],
  closing: 'Engage a single module or combine stages to support your existing workflow.',
};

export const SECTION_NURTURING = {
  exhibit: 'EXHIBIT 03',
  exhibitSub: 'PROBLEM-FIRST SKILL NURTURING',
  h2: 'Real adaptability comes from navigating real situations.',
  body: 'Pre-planned reading alone does not prepare someone for live project ambiguity. Within the Build phase, candidates learn by working through actual technical challenges.',
  flowSteps: [
    'Start with a Task',
    'Encounter a Question',
    'Surface Targeted Documentation',
    'Validate Understanding',
    'Complete the Work',
  ],
  closing: 'Guided by workflows and experienced practitioners, talent develops the exact capabilities the job requires.',
};

export const SECTION_INTEGRATION = {
  exhibit: 'EXHIBIT 04',
  exhibitSub: 'EFFORTLESS INTEGRATION',
  h2: 'Add value to your talent pipeline without adding work for your team.',
  sub: 'Adopting a new capability should not mean changing internal policies or creating daily oversight tasks for your leaders.',
  pillars: [
    'Your Existing Process Stays in Place',
    'Managed Execution by Ottobon',
    'Flexible Involvement',
  ],
  checklist: [
    'Fits smoothly around your current interview, offer, and onboarding cycles.',
    'No obligation for your managers to log in daily, monitor progress, or grade tasks.',
    'Flexibility to step in, review, or customize whenever your team chooses.',
  ],
};

export const SECTION_ECOSYSTEM = {
  exhibit: 'EXHIBIT 05',
  exhibitSub: 'BUILT FOR ENTERPRISE AND STAFFING ECOSYSTEMS',
  h2: 'Strengthening the talent supply chain.',
  audiences: [
    {
      label: 'Enterprise teams',
      body: 'Nurture incoming hires for emerging tech.',
    },
    {
      label: 'Growing companies',
      body: 'Add remote AI application developers.',
    },
    {
      label: 'Staffing partners',
      body: 'Elevate candidate quality across your vendor network.',
    },
  ],
  closing: 'IBOT works alongside your current operations.',
};

// Verified operational commitments: no fake customer counters or fake metrics.
export const SECTION_PROOF = {
  trustedByLabel: 'Ecosystem Standards',
  principles: [
    {
      title: 'Zero Daily Overhead',
      desc: 'No requirement for internal engineering leads to manage exercises or supervise daily onboarding sprints.',
    },
    {
      title: 'Full ATS Compatibility',
      desc: 'Operates alongside your existing systems (Workday, Greenhouse, Lever) without data disruption.',
    },
    {
      title: 'Dedicated Sandboxes',
      desc: 'Candidates practice in isolated, production-grade environments mirroring your actual tools.',
    },
  ],
};

export const SECTION_CTA = {
  h2: 'Extend your talent capabilities without changing how you work.',
  sub: 'Tell us where you want to strengthen your pipeline, and we will align around your process.',
  ctaPrimary: 'Connect With Us',
  ctaSecondary: 'Request an Overview',
};

export const MODAL = {
  title: 'Connect With Us',
  titlePreset: 'Request an Overview',
  fields: {
    name: 'Full name',
    email: 'Work email',
    company: 'Company',
    role: 'Your role',
    pipeline: 'Where do you want to strengthen your pipeline?',
    pipelinePlaceholder:
      'Tell us which stage of your talent pipeline you would like to improve (Identify, Build, Operate, or Transfer) and any context about your current process.',
  },
  submit: 'Send',
  success: {
    heading: 'Thank you.',
    body: 'We will be in touch within one business day to align around your process.',
  },
};

export const FOOTER = {
  brand: 'Ottobon',
  tagline: 'Build AI-era talent capability inside your existing process.',
  links: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact', href: '#contact' },
  ],
  copyright: `© ${new Date().getFullYear()} Ottobon. All rights reserved.`,
};
