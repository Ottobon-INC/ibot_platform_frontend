# Ottobon · IBOT — Landing Page

Production-quality single-page marketing site for Ottobon's IBOT programme.

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19 |
| Vite | ^6.2 |
| TypeScript | ^6.0 |
| Tailwind CSS | v4 |
| Framer Motion | ^12 |
| lucide-react | ^1.47 |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
```

Open **http://localhost:5173** to see the landing page at `/`.

```bash
# Type-check (no emit)
npx tsc --noEmit

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Project Structure (Landing Page)

```
src/
├── content.ts                     ← ALL copy, stat values, logo names live here
├── pages/
│   └── LandingPage.tsx            ← Root assembly: navbar + 7 sections + footer + modal
└── components/
    └── landing/
        ├── primitives.tsx         ← FadeUp, ExhibitPlacard, SectionWrap
        └── LeadModal.tsx          ← Contact modal with form + submitLead() stub
```

---

## Editing Copy

**All visible text is in `src/content.ts`.**  Edit that file to:

- Change any headline, body copy, or tagline
- Update stat placeholder values (`XX%`, `XX+`)
- Replace logo placeholders with real partner names and `src` paths
- Customize the modal field labels and success message

---

## Connecting the Lead Form

In `src/components/landing/LeadModal.tsx`, find:

```ts
async function submitLead(data: LeadFormData): Promise<void> {
  // TODO: Replace with actual API call, e.g.:
  // await fetch('/api/leads', { method: 'POST', body: JSON.stringify(data) })
  console.log('[IBOT Lead Form Submission]', data);
}
```

Replace the `console.log` line with your real API call.

---

## Design Tokens

All palette values are defined as CSS variables in `src/index.css`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--lp-paper` | `#F7F4EE` | Section backgrounds |
| `--lp-ink` | `#1A1816` | Headings + primary text |
| `--lp-muted` | `#5E5A54` | Body copy, secondary labels |
| `--lp-hairline` | `#D9D4CA` | Borders, dividers |
| `--lp-accent` | `#1F3D36` | CTAs, links, markers |
| `--lp-dark` | `#141210` | Hero + CTA dark sections |

---

## Placeholders to Fill

| Item | Location | Notes |
|------|----------|-------|
| Partner logos | `src/content.ts` → `SECTION_PROOF.logos` | Add `src` path under `/public/logos/` |
| Stat values | `src/content.ts` → `SECTION_PROOF.stats` | Replace `XX%`, `XX+` |
| Lead form endpoint | `LeadModal.tsx` → `submitLead()` | Replace `console.log` |
| OG image | `/public/og-image.png` | 1200×630px |
| Favicon | `/public/favicon.svg` | Replace SVG with brand mark |
| Site URL | `index.html` + `content.ts` `META.siteUrl` | Replace `https://ottobon.com` |
| Twitter handle | `content.ts` `META.twitterHandle` | Replace `@Ottobon` |

---

## Architecture Notes

- The existing app routes (`/sign-in`, `/org/*`, `/admin/*`) are untouched. The landing page lives at `/` via `LandingPage.tsx` in `App.tsx`.  
- The Platform Entry page (account type selection) was moved to `/get-started` to free up the root.  
- No backend, no cookies, no tracking — fully static HTML/CSS/JS.

---

## Route Map

| Path | Component | Notes |
|------|-----------|-------|
| `/` | `LandingPage` | Marketing site |
| `/get-started` | `PlatformEntry` | Account type selection |
| `/sign-in` | `SignIn` | Auth |
| `/admin/*` | Admin pages | OTTOBON workspace only |
| `/org/*` | Organization pages | Active org members |
