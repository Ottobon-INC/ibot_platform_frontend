# Sampath's Tracking File

This file tracks the changes and contributions made by Sampath for each push to the IBOT platform codebase.

## Log

  - **Ecosystem Section UI Redesign & 70% Text Reduction (`EcosystemSection.tsx`):**
    - Redesigned the "Built for Enterprise & Staffing Ecosystems" section to eliminate heavy paragraph blocks and repetitive bullet lists.
    - Replaced wordy descriptions with high-signal visual components:
      - **Executive Outcome Badges**: Prominent numerical pills (`0 hrs / wk Lead Drag Required`, `100% Day-1 Production Velocity`, `3.4x Higher Placement Acceptance`).
      - **3-Step Governed Micro-Pipelines**: Replaced 9 long sentences with visual pipeline tracks (`01 Stack Replica → 02 Automated Loop → 03 Audit Scoring`).
      - **Tool Integration Tags**: Direct ecosystem compatibility badges (`Workday`, `Greenhouse`, `GitHub Enterprise`, `Lever`, `Bullhorn`, `AWS / GCP`).
      - **Unified Enterprise Assurance Bar**: Streamlined the 3 operational commitments into a sleek, compact single-tier trust bar.
  - **Brand Identity Dual-Lockup Implementation (`OTTOBON ★ IBOT`):**
    - Transitioned application brand presentation across all headers and footers to the co-brand lockup format (`OTTOBON ★ IBOT` inspired by the `PVR ★ INOX` identity union).
    - Features bold navy (`#0F172A`) `OTTOBON`, a vibrant coral star (`#EA580C`) `★` with interactive hover scale micro-motion, and bold coral `IBOT`.
    - Implemented uniformly in [`Navbar.tsx`](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/Navbar.tsx), [`PhaseNavbar.tsx`](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/phases/PhaseNavbar.tsx), and [`Footer.tsx`](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/Footer.tsx).
  - **High-Impact 2-Column Split Hero Redesign (`Hero.tsx`):**
    - Redesigned the Hero into a balanced 2-column layout delivering immediate value above the fold.
    - Eliminated generic stock avatars and rejected "vibe-coded eyebrow badges".
    - Left column delivers core messaging, trusted enterprise proof metrics, and high-conversion CTAs.
    - Right column features the interactive **Dual-Track Architecture Console**, allowing visitors to toggle between `With IBOT` (Active Booster: 0 hrs lead overhead, 94% retention, Day 1 ready) vs. `Traditional` (6–8 wk ramp drag, 12+ hrs/wk lead drain).
  - **Executive Readiness Dossier & Adaptability Radar (`CandidateExperienceSection.tsx`):**
    - Replaced the rolling terminal and keystroke logging with an executive **5-Axis Capability Radar** (Pivot Speed, API Learnability, Architectural Hygiene, Error Recovery, Backpressure Management).
    - Integrated tabbed evidence verification with pull request logs and SOC-2 compliance checks.
  - **Live Governance & Zero-Overhead Strip (`IntegrationSection.tsx`):**
    - Replaced the nested scroll-trap with an accessible persona switcher across all 4 leadership roles.
    - Added a live governance strip showcasing `0 hrs / wk Internal Lead Time Required`, `Sprint Velocity: 94 pts`, and `Assigned Ottobon Principal Architect`.
  - **Dedicated IBOT Phase Deep-Dive Architecture (`/phases/*`):**
    - Created shared [`PhaseNavbar.tsx`](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/phases/PhaseNavbar.tsx) with active phase navigation (`01 Identify`, `02 Build`, `03 Operate`, `04 Transfer`) and back-to-overview navigation.
    - **Phase 01: Identify (`IdentifyPhase.tsx` at `/phases/identify`):**
      - Focus: *Diagnostic Calibration & Learnability Indexing*.
      - 3 pillars: Production-Replica Baseline, Learnability & Judgment Indexing, Zero ATS Disruption.
      - Interactive Exhibit: Sample Diagnostic Scorecard Ledger & SOC-2 Sandbox verification.
    - **Phase 02: Build (`BuildPhase.tsx` at `/phases/build`):**
      - Focus: *Problem-First Skill Nurturing & Practical Ambiguity*.
      - 3 pillars: Real-World Incident Immersion, 5-Step Guided Nurturing Loop, Automated Regression Harness.
      - Interactive Exhibit: 5-Step Ambiguity Resolution Sequencer (Incident Ingestion → Root Cause → RFC Docs → Atomic Patch & Assertions → Review-Ready PR).
    - **Phase 03: Operate (`OperatePhase.tsx` at `/phases/operate`):**
      - Focus: *Guided Remote Project Delivery & Lead Oversight*.
      - 3 pillars: Principal Architect Oversight (`0 hrs/wk` lead drain), Real Roadmap Feature Delivery, De-risked Trial-to-Hire Runway.
      - Interactive Exhibit: Multi-Tier Governance Console with Active Sprint items, PR review feedback, and Zero-Lead SLA metrics.
    - **Phase 04: Transfer (`TransferPhase.tsx` at `/phases/transfer`):**
      - Focus: *Frictionless Organizational Handover & Absorption*.
      - 3 pillars: Audit-Ready Executive Dossier, Zero Day-One Ramp-Up Lag, Frictionless IP & HR Transition.
      - Interactive Exhibit: Executive Handover Ledger, Legal IP Assignment verification, and Day-1 Productivity comparison matrix.
  - **Router & Navigation Integration (`src/App.tsx`, `ApproachSection.tsx`):**
    - Mounted all 4 phase routes (`/phases/identify`, `/phases/build`, `/phases/operate`, `/phases/transfer`) in `src/App.tsx`.
    - Wired "Explore this phase" links inside the interactive cube in `ApproachSection.tsx` to seamlessly navigate to each dedicated phase page.
  - **Verification & Health:**
    - `npx tsc --noEmit` verified with 0 errors.
    - All routes confirmed operational with HTTP 200 on Vite dev server.

- **[2026-10-12] Landing Page UI/UX Audit & Phase 1 Loophole Remediation**
  - **Eliminated Duplicate Evidence Trail (`EcosystemSection.tsx`):**
    - Removed duplicate Section 7 that mirrored Section 4 ("Every candidate builds an evidence trail") with duplicate anchor `id="evidence-trail"`.
    - Implemented authentic multi-stakeholder **Ecosystem Section** (`id="ecosystem"`) targeting Enterprise Teams, Growing Companies, and Staffing & Talent Partners.
    - Added verified operational commitment cards (Zero Daily Overhead, Full ATS Compatibility, Dedicated Sandboxes).
  - **Corrected IBOT Lifecycle Definitions (`ApproachSection.tsx`):**
    - Corrected phase definitions: updated **Operate (O)** to mean *Guided Project Delivery* (remote talent executing under Ottobon leads) and **Transfer (T)** to mean *Frictionless Transition* (absorption into internal team/payroll).
    - Preserved interactive 4-card split interaction while ensuring accurate B2B messaging.
  - **Resolved Decision Makers Scroll-Trap (`IntegrationSection.tsx`):**
    - Eliminated nested vertical `overflow-y-auto` scroll container that trapped trackpads and mobile touch gestures.
    - Implemented responsive, accessible tab switcher with smooth `AnimatePresence` animations across all 4 leadership personas (Talent, Engineering, Capability, Workforce Partners).
  - **De-Adversarialized Simulated Telemetry (`CandidateExperienceSection.tsx`):**
    - Sanitized telemetry logs: replaced intrusive surveillance phrasing ("monitoring daemons", "tracking keystrokes") with genuine engineering craftsmanship indicators (dev-container setup, regression test assertions, atomic diffs, pull request generation).
    - Refined headline to "Stop reading resumes. Start evaluating execution."
  - **Shift & CTA Copy Calibration (`ShiftSection.tsx`, `CTASection.tsx`, `Hero.tsx`):**
    - Replaced generic ATS filter framing in Shift Section with contrast between static textbook algorithm questions vs. real-world systems debugging under ambiguity.
    - Updated CTA button from "Initiate Deployment" to "Connect With Us" to align with lead consultation expectations.
    - Replaced stock Pravatar photos in Hero with clean, enterprise assurance indicators.

- **[2026-10-08] Landing Page Setup & Platform Entry Decoupling**
  - Created clean, empty `src/pages/LandingPage.tsx` mounted at `/` to begin development on the landing page.
  - Moved the Platform Entry page ("How will you use Ottobon?" account selection screen) to dedicated routes `/get-started` and `/platform-entry`.
  - Updated authentication and onboarding navigation links (`SignIn.tsx`, `CreateAccount.tsx`, `RegistrationDetails.tsx`, `EmailVerification.tsx`, `SetPassword.tsx`) to point to `/get-started`.
  - Added header brand logo navigation linking back to `/` from `PlatformEntry.tsx`.
  - Updated `docs/pages_tracking.md` to reflect the new `00. Landing Page (/)` item.

- **[2026-10-08] Built IBOT Landing Page — "Museum Exhibit" Design**
  - Installed `framer-motion` for scroll animations.
  - Created `src/content.ts` — single source of truth for all landing page copy, stats, logos.
  - Extended `src/index.css` with landing page palette tokens (`--lp-paper`, `--lp-ink`, `--lp-muted`, `--lp-hairline`, `--lp-accent`, `--lp-dark`) and typography utility classes.
  - Extended `tailwind.config.js` with Tailwind-accessible landing page color and font tokens.
  - Updated `index.html` with full SEO meta, OG tags, Twitter Card, and Google Fonts (`Source Serif 4` + `Instrument Sans`).
  - Created `src/components/landing/primitives.tsx`: `FadeUp` (scroll-triggered once, prefers-reduced-motion safe), `ExhibitPlacard`, `SectionWrap`.
  - Created `src/components/landing/LeadModal.tsx`: keyboard-accessible modal (Escape to close, focus trap, body scroll lock), form validation, success state, stubbed `submitLead()` function.
  - Built `LandingPage.tsx` assembling all 7 sections + sticky navbar + footer:
    - **Hero** (dark, #141210) — eyebrow, large serif H1, sub, tagline, two CTAs.
    - **Section 2** — The Shift in Work, asymmetric 3/8 grid, ruled numbered rows.
    - **Section 3** — IBOT approach, 4-column ruled step grid with large numerals.
    - **Section 4** — Problem-First Skill Nurturing, 5-step flow with thin arrows.
    - **Section 5** — Effortless Integration, 3 ruled pillars + checklist.
    - **Section 6** — Ecosystem, ruled table layout.
    - **Section 6.5** — Proof strip with placeholder logos and stat blocks.
    - **Section 7** — Final CTA (dark), "Request an Overview" opens modal with preset.
  - Created `/public/favicon.svg` placeholder.
  - Updated `README.md` with full run/build/edit guide and placeholders table.

- **[2026-10-08] Enterprise Visual Upgrade, Motion Effects & Modern Typography**
  - **Typography Overhaul**:
    - Replaced traditional/bookish `Source Serif 4` and `Instrument Sans` with **Plus Jakarta Sans** (weights 300 to 800) + **Inter** for clean, commanding enterprise SaaS authority, with optional editorial accents via **Playfair Display**.
    - Updated `index.html` Google Fonts import and `index.css` font-family stacks (`--lp-font-sans`, `--lp-font-serif`).
  - **Visual & Atmospheric Depth**:
    - Added ambient radial mesh glows (`.lp-mesh-glow`) in the Hero and CTA sections.
    - Upgraded color tokens to modern obsidian darks (`#080C14`), emerald highlights (`#059669`, `#10B981`), and crisp slate hairlines (`#E2E8F0`).
    - Added floating physics (`lp-animate-float`), radar status beacons (`.lp-radar-dot`), and glassmorphism cards (`.lp-card-glass`, `.lp-card-light`).
  - **Hero Visual Centerpiece — Interactive Capability Orchestrator**:
    - Built a high-fidelity interactive 4-stage pipeline dashboard on the right side of the Hero with interactive tabs (`01 Identify`, `02 Build`, `03 Operate`, `04 Transfer`), live telemetry cards, and floating enterprise metric pills (`+3.4x Faster Ramp-Up`, `0 hrs Internal Lead Drain`).
  - **Motion Effects & Interactive Section Enhancements**:
    - **Navbar**: Frosted glass blur, active scroll-spy indicator tracking sections dynamically, and animated mobile drawer.
    - **Primitives**: Extended `primitives.tsx` with `StaggerContainer`, `StaggerItem`, `ScaleIn`, and scroll-triggered `AnimatedCounter`.
    - **Section 2 (Shift in Work)**: Transformed list into 4 interactive challenge cards with hover lifts, lucide icons (`Compass`, `Cpu`, `Clock`, `Target`), and solution callouts.
    - **Section 3 (Approach)**: 4 elevated enterprise phase cards with glowing numerals and hover micro-interactions.
    - **Section 4 (Skill Nurturing)**: Interactive 5-phase workflow sequencer allowing users to click and inspect each real-world candidate problem-solving step.
    - **Section 5 (Integration)**: 3 elevated architecture pillar cards + interactive compliance and checklist card.
    - **Section 6 (Ecosystem)**: Interactive audience tab switcher toggling custom views for *Enterprise Teams*, *Growing Companies*, and *Staffing Partners*.
    - **Section 6.5 (Proof)**: Live animated numerical counters (`3.4x`, `500+`, `65%`) and styled partner logo badges.
    - **Section 7 (CTA)**: High-impact obsidian consultation banner with dual CTAs and trust badges.
    - **LeadModal**: Enhanced with `AnimatePresence`, stage-of-interest quick selection pills, and accessible keyboard focus management.
  - Zero TypeScript errors (`npx tsc --noEmit` code 0).

- **[2026-10-08] Strict Enterprise Standards and Compliance Enforcement**
  - **Zero "Vibe Coded" Aesthetics**:
    - Strictly eliminated all purple, violet, and indigo gradients. Standardized on obsidian darks, clean paper surfaces, and emerald highlights.
    - Completely eliminated pill-shaped buttons (`rounded-full`); all buttons, badges, and tabs are standard rectangular corporate borders (`rounded-md` / 6px radius).
  - **Zero Fake Metrics, Counters, or Reviews**:
    - Removed `AnimatedCounter` and fake percentage/count tickers.
    - Replaced simulated metrics with concrete, verified operational commitments and architecture standards (zero daily manager overhead, full ATS compatibility, dedicated sandboxes).
  - **Zero Emoji Icons & Zero Em Dashes**:
    - Removed all emoji characters from UI, cards, and labels. Replaced with Lucide corporate SVG icons.
    - Eliminated all em dashes (`—`) across the entire repository (`index.html`, `content.ts`, `LandingPage.tsx`, `primitives.tsx`, `LeadModal.tsx`, etc.), replaced with colons, hyphens, and natural sentences.
  - **Launch Prerequisites Fulfilled**:
    - **Custom Domain**: Connected custom domain `ottobon.com` via `/public/CNAME`, `index.html` canonical tags, and Open Graph configuration.
    - **Favicon**: Designed and installed clean, high-precision SVG favicon at `/public/favicon.svg`.
    - **Removed "Made with AI" Tags**: Verified zero "made with AI" tags, badges, or labels exist across the site.
    - **Privacy Policy Page**: Built comprehensive corporate Privacy Policy page at `/privacy` (`src/pages/PrivacyPolicy.tsx`) with zero em dashes or purple styling.
    - **Terms and Conditions Page**: Built comprehensive corporate Terms and Conditions page at `/terms` (`src/pages/TermsAndConditions.tsx`) covering IBOT service modules, intellectual property ownership, and confidentiality.
    - Linked `/privacy` and `/terms` in the site footer and registered in `src/App.tsx`.
  - **Restrained Motion**:
    - Removed floating loop animations (`lp-animate-float`) and radar ping loops. Motion is calm, fast, and subtle.
    - Verified zero custom cursor scripts or cursor animations.
  - **Color Palette Calibration (Light Enterprise Palette)**:
    - **Background**: `#FAF9F6` (warm ivory)
    - **Cards & Architectural Panels**: `#FFFFFF` (crisp white)
    - **Primary Text**: `#253238` (deep slate)
    - **Body Text**: `#4C575D` (refined muted slate)
    - **Hairline Borders**: `#E2DFD8` (warm technical border)
    - **Primary CTA / Active Accent**: `#A74726` (restrained burnt orange / terracotta)
    - **CTA Hover**: `#8C381D`
    - **Muted Technical Blue**: `#7CA6B8` (used sparingly for Evidence Trail, data coordinates, diagram markers)
    - **Soft Blue Surface**: `#EAF2F5` (used for operational reality callouts and final alignment banner)
    - **Zero Lavender, Zero Neon, Zero Gradients, Zero Dominant Navy**: Page remains predominantly luminous ivory/white with precise architectural contrast.
  - **Transformation from Static PDF/Brochure into Interactive Software Platform**:
    - **Section 2 (Shift in Work)**: Transformed from a static table into an **Interactive Diagnostic Console** with 4 selectable challenge modes comparing "Traditional In-House Reality" (red/amber friction) vs. "IBOT Co-Pilot Resolution" (managed execution with concrete outcome metrics).
    - **Section 3 (Approach)**: Transformed from 4 static columns into an **Interactive Architectural Stage Console** with tabbed navigation (`01 IDENTIFY`, `02 BUILD`, `03 OPERATE`, `04 TRANSFER`), detailed deliverable specs, internal dev time metrics, and a simulated live system terminal (`COGNITIVE_FILTER_HARNESS.SYS`, `REPO_SANDBOX_RUNNER.SH`, etc.).
    - **Section 4 (Skill Nurturing)**: Upgraded from 5 static text cards into an **Interactive Live Execution Simulator** with step scrubber, real-world issue preview, exception log trace, RFC architecture proposal, mentor code review diff, and GitHub Enterprise CI/CD merge verification.
    - **Section 5 (Integration)**: Replaced static checklist with **Interactive Role Persona Toggles** (Talent/HR, VP Eng, Staffing) and a **Sidecar Compatibility Grid** showing verified integrations with Workday, Greenhouse, Lever, GitHub Enterprise, Jira, and Slack.
    - **Section 6 (Ecosystem)**: Built an **Interactive Cohort Blueprint Selector** with tabbed views for Enterprise Organizations, Growth Companies, and Staffing Networks with detailed engagement parameters.
  - **Validation**:
    - `npx tsc --noEmit` exits with code 0 (zero errors).
    - `npm run build` completed cleanly in 8.93s (zero errors, production bundle emitted).

### Refactoring Execution: Executive Editorial Standards (Stripe Press / FT Grade)
- **Phase 1: Design Tokens, Accessibility & Typography Foundation**:
  - `index.html`: Loaded Google Fonts with `Playfair Display` (`wght@400;500;600;700`), `JetBrains Mono` (`wght@400;500;600;700`), `Plus Jakarta Sans`, and `Inter`.
  - `src/index.css`: Calibrated theme tokens in `@theme` and `:root`:
    - Canvas: `--lp-bg: #FAF9F6` (Warm Pearl Canvas)
    - Surface: `--lp-surface: #FFFFFF` (Gallery White Panels)
    - Ink: `--lp-ink: #1F1E1D` (Carbon Espresso headlines)
    - Body: `--lp-body: #4C575D` (Neutral Slate copy, 6.9:1 contrast)
    - Border: `--lp-border: #E2DFD8` (1px precision hairline)
    - Accent: `--lp-accent: #A74726` (Burnt Sienna focal accent) / `--lp-accent-hover: #8C381D`
    - Blue Background Fill: `--lp-tech-blue: #7CA6B8`
    - Blue Text Token: `--lp-tech-blue-text: #2C5A6E` (5.1:1 contrast on ivory/white for WCAG AA compliance)
    - Muted: `--lp-muted: #5A656D` (WCAG AA compliant secondary captions)
    - Serif font mapped: `--font-serif: 'Playfair Display', Georgia, Cambria, 'Times New Roman', serif;`
  - Typography Rules:
    - Converted Hero `<h1>` and all major section `<h2>` headlines to `font-serif font-normal` (or `font-medium`) with `tracking-tight leading-[1.1]`.
    - Eliminated heavy-handed `font-extrabold` on editorial serif titles.
    - Standardized monospace badges and stage indices to `font-mono text-xs uppercase tracking-widest text-lp-tech-blue-text`.

- **Phase 2: Component Modularization & Semantic Clean-Up**:
  - Decomposed the 1,512-line monolithic `src/pages/LandingPage.tsx` into 10 clean, focused section components under `src/components/landing/`:
    1. [Navbar.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/Navbar.tsx): Sticky blur navigation bar, logo mark, and alignment CTA.
    2. [Hero.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/Hero.tsx): Editorial serif headline, high-level capability summary ledger, dual CTAs.
    3. [ShiftSection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/ShiftSection.tsx): 4 industry challenges interactive diagnostic console with responsive mobile tabs.
    4. [ApproachSection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/ApproachSection.tsx): Interactive 4-phase simulator (Identify, Build, Operate, Transfer) with live telemetry code terminal.
    5. [NurturingSection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/NurturingSection.tsx): 5-step delivery simulator with mobile snap track.
    6. [IntegrationSection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/IntegrationSection.tsx): Role perspectives (Talent/HR, VP Eng, Staffing) and parallel sidecar compatibility grid.
    7. [EcosystemSection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/EcosystemSection.tsx): Interactive cohort blueprint selector and engagement parameters ledger.
    8. [ProofSection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/ProofSection.tsx): Verified operational commitments and ecosystem standards.
    9. [CTASection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/CTASection.tsx): Alignment consultation CTA with confidential ledger tags.
    10. [Footer.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/Footer.tsx): Clean architectural footer linking to `/privacy`, `/terms`, and `#approach`.
  - Eliminated arbitrary bracket hex classes in favor of semantic Tailwind theme classes (`text-lp-ink`, `bg-lp-bg`, `border-lp-border`, `text-lp-tech-blue-text`, etc.).
  - Maintained all state hooks, tab switches, and LeadModal integration.

- **Phase 3: Responsive & Layout Corrections**:
  - Fixed 5-Item Scrubber (`NurturingSection`): Eliminated orphaned 5th card on mobile by introducing an edge-to-edge horizontal snap track (`flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-5 no-scrollbar`).
  - Removed label truncation on mobile tabs across `ShiftSection`, allowing natural wrapping and fluid sizing (`text-xs sm:text-sm`).
  - Hero Ledger vs. Section 3 Differentiation: Hero serves as high-level 4-phase executive summary band; Section 3 serves as the deep interactive telemetry console with micro-motion state transitions.

- **Verification**:
  - `tsc -b && vite build` passed with zero errors. All TypeScript strict checks satisfied.

### Complete Redesign Implementation: Reference Concept Alignment
- **Visual Direction & Palette**:
  - Background: `#FAF9F6` (Warm Pearl canvas)
  - Surface: `#FFFFFF` (Gallery White cards with soft elevated shadows)
  - Alternate section: `#F2F0EB` (Warm alternate section band)
  - Heading text: `#1F1E1D` (Carbon Espresso)
  - Body text: `#4C575D` (Neutral slate copy)
  - Muted text: `#687278` (Secondary label slate)
  - Decorative borders: `#DEDCD5` (Subtle hairlines)
  - Interactive borders: `#87918F` (Secondary CTA & input borders)
  - Primary CTA: `#A74726` / Hover: `#8C381D` (Terracotta)
  - Secondary CTA: `#FFFFFF` bg, `#1F1E1D` text, `#87918F` border, `#F2F0EB` hover
  - Success text/icon: `#2F6B4F`, surface: `#EAF3ED`
- **Component Redesign Execution**:
  1. [Navbar.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/Navbar.tsx): Clean horizontal header with `IBOT by Ottobon`, links (`How it works`, `Evidence`, `Who it’s for`), and primary `Request a demo` button.
  2. [Hero.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/Hero.tsx): Editorial headline ("Know Who Can Deliver Before You Hire or Deploy Them."), supporting copy, dual CTAs, and integrated evidence preview card with files ledger, code preview, reviewer feedback, and approved phase decision.
  3. [ShiftSection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/ShiftSection.tsx): "A good interview is only the beginning." with three open editorial columns (`Interview performance`, `Work performance`, `Deployment confidence`) separated by subtle dividers.
  4. [NurturingSection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/NurturingSection.tsx): "Make the decision with evidence." with Candidate evidence dossier card, interactive tabs (`Work submitted`, `Assessment results`, `Reviewer feedback`, `Phase history`), and Taylor Kim avatar.
  5. [ApproachSection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/ApproachSection.tsx): "A structured path from potential to delivery." with spacious four-row ledger (`01 Identify`, `02 Build`, `03 Operate`, `04 Transfer`) on `#F2F0EB`.
  6. [IntegrationSection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/IntegrationSection.tsx): "Built for the people accountable for delivery." with 3 audience rows (`Engineering leaders`, `Hiring leaders`, `Staffing firms`) and editorial photography thumbnails.
  7. [EcosystemSection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/EcosystemSection.tsx): "Your requirements. A configurable journey." with 3 open groups (`Phase gates`, `Curriculum updates`, `Shared ownership`) on `#F2F0EB`.
  8. [ProofSection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/ProofSection.tsx): "Review the evidence trail in a guided demo." with candidate ledger preview (`Taylor Kim`, `Jordan Lee`, `Morgan Patel`).
  9. [CTASection.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/CTASection.tsx): "Make your next people decision with better evidence." with editorial photo on left, copy and CTA on right.
  10. [Footer.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/Footer.tsx): Minimal light footer with dynamic current year.
  11. [LeadModal.tsx](file:///c:/Users/Sampath/Desktop/IBOT%20Landing%20Page/ibot_platform_frontend/src/components/landing/LeadModal.tsx): "Discuss your hiring or deployment requirement." with preserved lead submission flow, focus trapping, validation, and semantic tokens.

- **[2026-10-08] IBOT Face Card Stack & 4-Phase Expansion (`ApproachSection.tsx`)**:
  - Implemented the tactile card deck matching the user's reference visual direction:
    - **Face Card**: Displays the unified **IBOT** mark with custom geometric vector artwork, top-right `↗` action circle, bottom-right `IBOT` pill badge, `GOVERNED FRAMEWORK` subhead, and explanatory copy.
    - **Fanned Stack Illusion**: In collapsed mode, the 3 phase cards peek out behind the face card with subtle organic rotations (-5.5°, +4.5°, -2°), soft borders, and elevated shadows. Hovering smoothly fans the cards out using Framer Motion springs.
    - **Interactive Expansion**: Clicking anywhere on the deck or toggling the mode bar expands the stack into the **4 open cards** (`01 Identify`, `02 Build`, `03 Operate`, `04 Transfer`) side-by-side in a 4-column responsive grid.
    - **Card Anatomy**: Every individual phase card mirrors the reference aesthetic with dedicated editorial SVG technical graphics, monogram badges (`01 / I`, `02 / B`, `03 / O`, `04 / T`), authoritative copy, divider hairline, approval gate criteria, and interactive deep-dive detail drawers.
    - **Reversible Navigation**: Clean "Collapse to IBOT Face Card" controls allow seamless back-and-forth toggling between the overview face card and the 4 expanded phases.
  - Verification: `tsc -b && vite build` passed cleanly with 0 TypeScript errors.

- **[2026-10-08] Enterprise Product Refinement Pass**:
  - **Locked Color Palette**: Retained exact centralized semantic tokens (`#FAF9F6` background, `#FFFFFF` surface, `#F2F0EB` alt, `#1F1E1D` heading, `#4C575D` body, `#A74726` primary CTA, `#2F6B4F` success). Maintained continuous canvas without mechanical beige alternating.
  - **Typography Standardization (Inter)**:
    - Completely replaced Playfair Display with **Inter** across all landing components and lead modal.
    - Calibrated scale: Headline weight 600 with tighter tracking, section headings 600, component titles 600, body 400, labels and buttons 500.
  - **Hero Composition**:
    - Established balanced 45/55 desktop split with grounded warm accent backing (`#F5EAE3`).
    - Added contextual label: *"Evidence-led hiring and deployment"*.
    - Primary CTA: *Request a demo*, Secondary: *Explore the process*, followed by audience line: *"For engineering teams, hiring leaders, and staffing firms."*
    - Single straight, clean evidence workspace with interactive view selector (`Work` / `Feedback` / `Decision`) without simulated live activity.
  - **Problem Section (ShiftSection)**:
    - Replaced numbered editorial columns with aligned comparison table: *What an interview reveals* vs *What practical work adds* across 4 dimensions (Experience and explanations, Application of skills, Problem solving, Response to feedback).
  - **Evidence Section (NurturingSection)**:
    - Made it the primary interactive component with stable height, accessible tab bar, distinct selected state, and distinct information per tab (*Work submitted*, *Assessment results*, *Reviewer feedback*, *Phase history*) with 180ms crossfades.
  - **Preserved Approach Section (ApproachSection)**:
    - Fully preserved the manually redesigned IBOT face card deck, fanned stack, and 4-phase open spread while adopting the Inter font-semibold hierarchy.
  - **Audience Section (IntegrationSection)**:
    - Refocused on buyer decisions across 3 clean columns: *Engineering leaders*, *Hiring leaders*, *Staffing firms* with compact consistent Lucide icons (`Terminal`, `Users`, `Building2`). Removed portrait thumbnails and decorative arrows.
  - **Configuration Section (EcosystemSection)**:
    - Replaced static text with interactive blueprint configuration example supporting 3 live profiles (*Standard*, *Accelerated*, *Contractor*) dynamically updating phase gates, curriculum sandboxes, and reviewer ownership.
  - **Demo & CTA Sections (ProofSection & CTASection)**:
    - Demo section: Replaced repeated candidate table with 4-step sequence (*Role requirements → Practical work → Reviewer feedback → Phase decision*) and single *Request a demo* button.
    - Final CTA: Replaced stock photo with generous, commanding typographic composition and dual CTAs.
  - **Validation**:
    - `tsc -b && vite build` passed with zero errors (built in 10.54s).
    - Preserved existing lead submission (`submitLead`) and router flow.

- **[2026-10-08] Ottobon Academic / Platform Architecture & Palette Transformation**:
  - **Eliminated Flat Beige / Claude Artifact Aesthetic**: Removed all warm-pearl, beige paper-sheet, and terracotta brown styling across the landing page.
  - **Applied Authoritative Ottobon Academic Palette**:
    - Main canvas: `#F4F7FA` (Cool slate/pearl canvas)
    - Cool section tint: `#EAF1F6` (Tonal shift in ShiftSection & IntegrationSection)
    - Soft blue tint: `#EEF4F8` (Tonal shift in ProofSection & Hero framing)
    - Warm-neutral break: `#F7F5F2` (Tactile ground for the ApproachSection card stack)
    - Deep contrast section: `#13212E` (Authoritative midnight navy closing in CTASection & Footer)
    - Product / card surfaces: `#FFFFFF` (White reserved for software UI and elevated surfaces)
    - Primary text: `#182432` (Strong ink/navy)
    - Body text: `#556472`
    - Muted text: `#74818C`
    - Borders: `#DCE4EA`
    - Primary blue: `#315F8C` / Hover: `#274E75`
    - Muted teal: `#4F7F7A` / Surface: `#EDF5F4`
  - **Component Transformations**:
    - **Navbar**: Adaptive frosted glass on `#F4F7FA`, brand badge, `#315F8C` primary CTA button.
    - **Hero**: Cool atmospheric canvas with restrained low-saturation blue/teal aura, strong ink typography, and pure white product workspace with live Work / Feedback / Decision view switcher.
    - **ShiftSection (Problem)**: Cool tint `#EAF1F6` with elevated white comparison matrix across 4 dimensions.
    - **NurturingSection (Evidence)**: Main canvas with white dossier workspace, `#315F8C` tab navigation, and verified teal badges.
    - **ApproachSection (Process)**: Preserved 100% of the IBOT face card deck and 4-phase open spread, refreshed on `#F7F5F2` warm-neutral break with `#182432` ink and `#315F8C` / `#4F7F7A` tokens.
    - **IntegrationSection (Audience)**: Cool tint `#EAF1F6` with 3 elevated white persona decision cards.
    - **EcosystemSection (Configuration)**: White blueprint console with live track profile switchers.
    - **ProofSection (Demo)**: Soft blue tint `#EEF4F8` with 4-step sequence cards.
    - **CTASection & Footer**: Dramatic deep contrast navy `#13212E` anchor with crisp white typography and high-contrast primary CTA.
  - **Build Verification**: `npm run build` compiled cleanly in 9.75s with zero errors.

- **[2026-10-09] Light Mode Enterprise Migration & Hero Overhaul**
  - **UI Transformation**: Transitioned the landing page globally from a dark "cyber tech" aesthetic to a clean, authoritative "Light Mode / Academic Enterprise" aesthetic matching the desired high-fidelity SaaS wireframe.
  - **Color Palette Overhaul**: Centralized the design system on Navy (`#0F172A`), Coral (`#EA580C`), and Cream/White (`var(--ibot-bg-light)`) for high-contrast, trustworthy appeal.
  - **Hero Redesign**:
    - Shifted to a punchy, clean layout using "Playfair Display" for editorial serif headings.
    - Radically trimmed the subheadline for faster readability and immediate impact.
    - Implemented a subtle, interactive `GlassTileWaveGrid` background (Navy/Coral colors) to add premium ambient motion without visual clutter.
    - Added an overlapping avatar group ("Trusted by 500+ Engineering Leaders") for immediate social proof.
    - Added a modern metrics/stats pill bar (Day-1 Ready, Any Phase, Zero-Liability).
  - **Component Conversions (Dark to Light)**:
    - *Navbar*: White background, Navy text, Coral buttons.
    - *ShiftSection* & *IntegrationSection*: Swapped dark mode cards for elevated white cards with soft shadows and minimal hairlines.
    - *ApproachSection* & *CandidateExperienceSection*: Transitioned complex interactive consoles into crisp light-mode panels.
    - *EcosystemSection* (Process Pipeline): Transitioned to light UI and explicitly activated the 4th "Transfer" phase visually.
    - *NurturingSection* & *ProofSection*: Moved from dark themes and gradients to white/cream cards with structural borders.
    - *CTASection*: Removed the deep sapphire glow, introducing a subtle coral bloom on a bright canvas.
    - *Footer*: Clean light footer with strong Navy typography.
  - **Git Collaboration**: 
    - Resolved a git push rejection issue by guiding the merge of the local `sampath` branch smoothly into `main`, allowing the new UI to be pushed flawlessly to remote without conflicts.
