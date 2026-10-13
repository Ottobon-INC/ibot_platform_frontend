// =========================================================================
// src/content/identifyContent.ts
// Single source of truth for /phases/identify business messaging & data
// Approved 7-section structure with locked framework fidelity
// =========================================================================

export interface EvaluationMethod {
  id: string;
  number: string;
  title: string;
  domain: 'foundational' | 'execution' | 'collaborative';
  format: string;
  capabilityFocus: string;
  whenUsed: string;
  badge: string;
}

export interface FilteringStage {
  number: string;
  title: string;
  summary: string;
  isGovernanceStage?: boolean;
}

export const IDENTIFY_CONTENT = {
  // ── 01. HERO SECTION ──
  hero: {
    eyebrow: 'PHASE 01 · IDENTIFY',
    headline: 'Evaluate What Matters. Shortlist with Evidence.',
    supportingCopy:
      'IBOT helps companies configure role-relevant evaluations, assess demonstrated candidate capabilities, and review practical work samples before making shortlisting decisions.',
    ctaPrimary: 'Explore Evaluation Methods',
    ctaSecondary: 'Schedule a Consultation',
    anchors: [
      {
        title: 'Modular Setup',
        desc: '9 optional evaluation methods configured to your role profile.',
      },
      {
        title: 'Demonstrated Capability',
        desc: 'Assess hands-on execution and problem-solving beyond resume claims.',
      },
      {
        title: 'Human-Led Decisions',
        desc: 'Configured scorecards guide review; your hiring team makes final shortlisting calls.',
      },
    ],
    previewCard: {
      tag: 'ILLUSTRATIVE CONFIGURATION PREVIEW',
      roleTitle: 'Backend Developer Evaluation',
      baselineThreshold: '75.0%',
      compositeScore: '80.5%',
      status: 'Meets Shortlist Criteria',
      modules: [
        {
          code: '04',
          name: 'Technical MCQ (CS Fundamentals)',
          weight: '15%',
          score: '84.0%',
          contribution: '12.6 pts',
        },
        {
          code: '06',
          name: 'Technical Coding Round',
          weight: '40%',
          score: '78.0%',
          contribution: '31.2 pts',
        },
        {
          code: '07',
          name: 'AI-Pair Programming Round',
          weight: '30%',
          score: '82.0%',
          contribution: '24.6 pts',
        },
      ],
      gateModule: {
        code: '08',
        name: 'HR & Cultural Fitment',
        type: 'Separate Client Gate',
        status: 'CLEARED / PASS',
      },
      normalizationNote:
        'Scored modules (85% total weight) normalized to 100%: 68.4 / 0.85 = 80.5%.',
    },
  },

  // ── 02. THE HIRING PROBLEM ──
  problem: {
    eyebrow: 'THE SCREENING CHALLENGE',
    headline: 'The Inherent Limitations of Proxy Signals in Modern Hiring',
    supportingCopy:
      'Resumes, credentials, and unstructured interviews provide useful background context, but they remain indirect indicators. They reflect how well candidates present past experience, not necessarily how they will analyze problems, navigate ambiguity, or execute in your day-to-day work environment.',
    perspectives: [
      {
        id: 'conventional',
        tag: 'CONVENTIONAL SCREENING',
        title: 'What Conventional Screening Captures',
        coreFocus: 'Candidate Presentation & Historical Pedigree',
        bullets: [
          'Career chronology and keyword-optimized resume formatting',
          'Conversational recall during standard 45-minute interviews',
          'Familiarity with common campus interview questions',
        ],
        realityTag: 'The Practical Reality',
        realityText:
          'Valuable for initial screening context, but insufficient on its own to predict day-to-day execution depth and technical rigor.',
      },
      {
        id: 'blindspot',
        tag: 'THE EVALUATION BLINDSPOT',
        title: 'The Practical Evaluation Gap',
        coreFocus: 'Real-World Job Execution',
        bullets: [
          'Diagnosing unexpected bugs in unfamiliar codebases',
          'Writing maintainable logic with clean architectural boundaries',
          'Explaining technical trade-offs under real delivery constraints',
        ],
        realityTag: 'The Consequence',
        realityText:
          'Interviewers spend senior engineering hours uncovering capability mismatches that earlier practical evaluation would have surfaced.',
      },
      {
        id: 'ibot',
        tag: 'IBOT IDENTIFY',
        title: 'The IBOT Approach',
        coreFocus: 'Demonstrated Capability Evidence',
        bullets: [
          'Hands-on problem decomposition, error handling, and clean code habits',
          'Practical AI tool stewardship, prompt hygiene, and code auditing',
          'Technical articulation and asynchronous communication skills',
        ],
        realityTag: 'The Business Outcome',
        realityText:
          'Hiring committees review concrete work artifacts and candidate dossiers before committing to final interview rounds.',
      },
    ],
  },

  // ── 03. CONFIGURABLE EVALUATION CANVAS ──
  canvas: {
    eyebrow: 'CONFIGURABLE EVALUATION FRAMEWORK',
    headline: 'Your Hiring Requirements. Your Evaluation Process.',
    supportingCopy:
      'IBOT does not impose a mandatory sequential testing funnel. Companies select from nine distinct evaluation methods across foundational, execution, and collaborative domains. Choose one, several, or all nine to match your role profile, seniority level, and qualification criteria.',
    subnote:
      'The evaluation methods below represent the approved enterprise framework. In practice, talent teams select custom combinations per role profile.',
    domains: [
      {
        id: 'foundational',
        title: 'Foundational Capabilities',
        description: 'Baseline analytical horsepower, workplace communication, and cognitive agility.',
      },
      {
        id: 'execution',
        title: 'Technical Execution & Craftsmanship',
        description: 'Core computer science fundamentals, modular implementation, and AI copilot orchestration.',
      },
      {
        id: 'collaborative',
        title: 'Collaborative & Cultural Alignment',
        description: 'Peer group dynamics, cultural expectations, and cross-functional case defense.',
      },
    ],
    methods: [
      {
        id: 'aptitude',
        number: '01',
        title: 'Logical & Quantitative Aptitude Round',
        domain: 'foundational',
        format: '45–60 min timed objective assessment',
        capabilityFocus: 'Numerical problem-solving, pattern abstraction, and inductive logic.',
        whenUsed: 'Screens high-volume applicant pools for baseline analytical capability.',
        badge: 'Operational',
      },
      {
        id: 'communication',
        number: '02',
        title: 'Communication Assessment Round',
        domain: 'foundational',
        format: '20–30 min structured speech and written assessment',
        capabilityFocus: 'Spoken fluency, structured technical writing, and professional articulation.',
        whenUsed: 'Verifies professional corporate communication and client readiness.',
        badge: 'Operational',
      },
      {
        id: 'games',
        number: '03',
        title: 'Game-Based Assessment Round',
        domain: 'foundational',
        format: '15–25 min interactive cognitive exercises',
        capabilityFocus: 'Working memory, cognitive agility, and risk calibration under pressure.',
        whenUsed: 'Evaluates problem-solving agility and focus in an engaging format.',
        badge: 'Operational',
      },
      {
        id: 'mcq',
        number: '04',
        title: 'Technical MCQ Round (CS Fundamentals)',
        domain: 'execution',
        format: '30–45 min automated multiple-choice assessment',
        capabilityFocus: 'Operating Systems, DBMS/SQL query mechanics, and concurrency primitives.',
        whenUsed: 'Confirms essential conceptual foundations before hands-on tasks.',
        badge: 'Operational',
      },
      {
        id: 'gd',
        number: '05',
        title: 'Group Discussion (GD) Round',
        domain: 'collaborative',
        format: '15–20 min interactive peer discussion',
        capabilityFocus: 'Active listening, constructive debate, assertiveness, and composure in a peer dynamic.',
        whenUsed: 'Identifies collaboration styles and communication effectiveness.',
        badge: 'Operational',
      },
      {
        id: 'coding',
        number: '06',
        title: 'Technical Coding Round',
        domain: 'execution',
        format: '60 min structured coding session',
        capabilityFocus: 'Modular software design, separation of concerns, edge-case handling, and runtime efficiency.',
        whenUsed: 'Evaluates practical software craftsmanship and clean code habits.',
        badge: 'Operational',
      },
      {
        id: 'aipair',
        number: '07',
        title: 'AI-Pair Programming & Copilot Orchestration',
        domain: 'execution',
        format: '60 min modern build session with guided AI assistants',
        capabilityFocus: 'Prompt strategy, context feeding, code auditing, and catching hallucinations.',
        whenUsed: 'Tests whether an engineer can accelerate delivery safely using AI while maintaining high software standards.',
        badge: 'Operational',
      },
      {
        id: 'hr',
        number: '08',
        title: 'HR & Cultural Fitment Round',
        domain: 'collaborative',
        format: '15–30 min structured interview',
        capabilityFocus: 'Core values alignment, workplace expectations, and joining timeline.',
        whenUsed: 'Confirms team compatibility and validates candidate joining intent.',
        badge: 'Operational',
      },
      {
        id: 'casestudy',
        number: '09',
        title: 'Group Case Study & Presentation Round',
        domain: 'collaborative',
        format: '45 min preparation + 15 min presentation',
        capabilityFocus: 'Cross-functional collaboration, task delegation, and executive presentation defense.',
        whenUsed: 'Evaluates how candidates transition from solo execution to collaborative problem-solving.',
        badge: 'Operational',
      },
    ] as EvaluationMethod[],
    demoBanner: {
      label: 'DEMONSTRATION VIEW · PREVIEWING CAPABILITY COVERAGE',
      ctaText: 'Request a Custom Role Assessment Setup →',
    },
  },

  // ── 04. FILTERING WORKFLOW ──
  workflow: {
    eyebrow: 'QUALIFICATION ARCHITECTURE',
    headline: 'A Structured, Evidence-Led Qualification Journey',
    supportingCopy:
      'Every step of the Identify workflow is designed to translate role criteria into clear evaluation data—enabling hiring teams to make defensible shortlisting decisions backed by real work samples.',
    stages: [
      {
        number: '01',
        title: 'Define Role Requirements',
        summary:
          'Hiring teams specify core competency targets, expected seniority benchmarks, technical stack parameters, and role expectations.',
      },
      {
        number: '02',
        title: 'Select Evaluation Methods',
        summary:
          'Select relevant assessment methods from the 9-round enterprise menu tailored to the role’s specific demands.',
      },
      {
        number: '03',
        title: 'Configure Rubrics & Thresholds',
        summary:
          'Establish objective scoring rubrics, round weightings, and qualification baselines to ensure consistent and fair candidate evaluation.',
      },
      {
        number: '04',
        title: 'Conduct Selected Assessments',
        summary:
          'Administer chosen assessments across independent problem-solving tasks and guided AI-assisted assessment sessions.',
      },
      {
        number: '05',
        title: 'Aggregate Candidate Evidence',
        summary:
          'Synthesize performance scorecards, code diffs, execution telemetry, and identified capability gaps into a unified evaluation dossier.',
      },
      {
        number: '06',
        title: 'Human Review & Shortlisting Decision',
        summary:
          'Hiring managers and interview panels review the candidate dossier and retain complete decision authority over shortlisting progression.',
        isGovernanceStage: true,
      },
    ] as FilteringStage[],
    governanceCallout: {
      tag: 'DECISION RESPONSIBILITY',
      title: 'Automated Scoring Recommendations vs. Human Hiring Authority',
      body:
        'The IBOT platform computes qualification recommendations strictly against your configured scoring rubrics and benchmark thresholds. However, candidate selection is never delegated to an automated black box. Automated scorecards support your team’s review, while authorized hiring managers retain sole authority over final shortlisting, interview progression, and hiring decisions.',
    },
  },

  // ── 05. CANDIDATE DOSSIER ──
  dossier: {
    eyebrow: 'CANDIDATE EVALUATION OUTPUTS',
    headline: 'See Why a Candidate Meets Your Requirements.',
    supportingCopy:
      'Rather than relying solely on resume claims or interview impressions, hiring teams review a comprehensive candidate dossier detailing selected assessments, threshold comparisons, demonstrated strengths, identified capability gaps, and human review recommendations.',
    scorecard: {
      profileLabel: 'Illustrative Profile: Backend Developer',
      configurationId: 'CFG-BK-805',
      badge: 'ILLUSTRATIVE EXAMPLE · LOCKED FRAMEWORK',
      qualificationThreshold: '75.0% Composite Baseline',
      compositeScore: '80.5%',
      recommendation: 'QUALIFIED · MEETS SHORTLIST BASELINE',
      scoredModules: [
        {
          name: 'Technical MCQ (CS Fundamentals)',
          weight: '15%',
          score: '84.0%',
          rawPts: '12.6 pts',
          rubric: 'Solid conceptual understanding of database query plans, concurrency, and memory models.',
        },
        {
          name: 'Technical Coding Round',
          weight: '40%',
          score: '78.0%',
          rawPts: '31.2 pts',
          rubric: 'Strong code modularity, clear separation of concerns, and defensive error handling.',
        },
        {
          name: 'AI-Pair Programming Round',
          weight: '30%',
          score: '82.0%',
          rawPts: '24.6 pts',
          rubric: 'Effective prompt context feeding, caught hallucinated API method, adhered to strict linting.',
        },
      ],
      gateModule: {
        name: 'HR & Cultural Fitment Round',
        type: 'Client-Configured Gate',
        status: 'CLEARED / PASS',
        rubric: 'Alignment with team values, workplace expectations, and joining timeline verified.',
      },
      mathSummary: {
        rawSum: '68.4 pts',
        scoredWeightSum: '85%',
        normalizedFormula: '(12.6 + 31.2 + 24.6) / 0.85 = 68.4 / 0.85 = 80.47% ≈ 80.5%',
        note: 'Scored modules normalized across 85% technical weight; HR round serves as independent pass/fail gate.',
      },
    },
    codeArtifact: {
      title: 'Database Connection Pool Management under High Traffic',
      tag: 'ILLUSTRATIVE CANDIDATE WORK ARTIFACT',
      language: 'python',
      diffSnippet: `// Illustrative Task: Connection Pool Safety under Concurrency
- def fetch_unbounded():
-     conn = conn_pool.acquire()
-     return conn.execute_query()
+ def fetch_bounded(timeout_ms=500):
+     with conn_pool.acquire(timeout=timeout_ms) as conn:
+         return conn.execute_safely()`,
      telemetryNote: 'Automated test suite passed: 18/18 test cases. Code diff and execution record preserved.',
    },
    strengthsAndGaps: {
      strengths: [
        'Modular architecture with clean separation between data-access and business logic.',
        'Proactive edge-case coverage for connection exhaustion and timeout scenarios.',
        'Effective verification of generated code against strict linting standards.',
      ],
      gaps: [
        'Observed development area: Distributed transaction rollbacks across microservices boundaries.',
        'Recommended action: Target for focused mentorship during initial 30-day onboarding.',
      ],
    },
    decisionPanel: {
      statusBanner: 'Awaiting Hiring Committee Review',
      options: [
        { label: 'Advance to Team Interview', active: true },
        { label: 'Request Deep-Dive Review', active: false },
        { label: 'Retain in Talent Pipeline', active: false },
      ],
      footnote: 'Illustrative dossier example based on the locked evaluation framework specification.',
    },
  },

  // ── 06. BUSINESS VALUE & STRATEGY ──
  businessValue: {
    eyebrow: 'EMPLOYER VALUE & STRATEGY',
    headline: 'Clearer Signals. Better-Informed Hiring Decisions.',
    supportingCopy:
      'Hiring succeeds when evaluation mirrors the actual responsibilities of the role. IBOT gives employers early clarity into candidate readiness, surfaces specific growth areas before offers are made, and equips hiring teams with the evidence needed to shortlist with confidence.',
    pillars: [
      {
        number: '01',
        title: 'Role-Relevant Evaluation',
        desc: 'Align assessments directly with day-to-day job demands rather than abstract campus puzzles or generic tests.',
      },
      {
        number: '02',
        title: 'Early Capability-Gap Identification',
        desc: 'Pinpoint specific technical and communication development areas upfront, setting realistic expectations and streamlining onboarding.',
      },
      {
        number: '03',
        title: 'Better-Informed Shortlisting Decisions',
        desc: 'Ground committee reviews in concrete work artifacts and standardized rubrics, reducing reliance on conversational recall and subjective impressions.',
      },
    ],
    dualTrackExample: {
      contextNote:
        'Supporting Example: As generative tools become standard in technical workflows, evaluation should measure both unassisted foundations and responsible AI tool stewardship.',
      tracks: [
        {
          badge: 'TRACK 01 · UNASSISTED EXECUTION',
          title: 'Independent Assessment',
          focus: 'Unassisted Engineering Foundations',
          whatIsEvaluated:
            'Problem decomposition, algorithmic thinking, clean code design, and foundational system concepts without external tools.',
          employerValue:
            'Confirms genuine core comprehension and verifies the candidate can reason through technical challenges independently.',
        },
        {
          badge: 'TRACK 02 · ORCHESTRATION & VERIFICATION',
          title: 'AI-Assisted Assessment',
          focus: 'Guided Tool Stewardship & Quality Auditing',
          whatIsEvaluated:
            'Prompt context feeding, active code auditing (identifying hallucinations and security oversights), and maintaining strict quality standards under faster build velocity.',
          employerValue:
            'Reflects practical modern delivery where generative tools augment output, while engineer judgment protects codebase integrity.',
        },
      ],
    },
  },

  // ── 07. FINAL CTA ──
  cta: {
    eyebrow: 'NEXT STEPS',
    headline: 'See How IBOT Fits Your Hiring Process.',
    supportingCopy:
      'Explore how configurable evaluation methods and candidate dossiers can bring clarity to your technical screening and shortlisting decisions.',
    ctaPrimary: 'Schedule an Identify Consultation',
    ctaSecondary: 'Explore the Full IBOT Model',
    anchors: [
      'CONFIGURABLE EVALUATION METHODS',
      'DEMONSTRATED WORK SAMPLES',
      'AUTHORIZED HUMAN GOVERNANCE',
    ],
    nextPhase: {
      tag: 'NEXT IN THE LIFECYCLE',
      title: 'Ready to see how skills are nurtured?',
      linkText: 'Explore Phase 02: Build Phase →',
      href: '/phases/build',
    },
  },
};
