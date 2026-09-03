# DiTconsult — Cybersecurity Advisory Platform

> Full-spectrum cybersecurity consulting website built with Next.js 16, TypeScript, and Tailwind CSS. Functions as both a marketing site and an interactive advisory platform with free tools that build trust, capture qualified leads, and demonstrate expertise before a visitor books a consultation.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Interactive Tools](#interactive-tools)
- [Industry Landing Pages](#industry-landing-pages)
- [Components](#components)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

---

## Overview

DiTconsult is a cybersecurity consulting firm website designed to go beyond a static brochure. It includes six interactive assessment tools, seven industry-specific landing pages, a full services directory, an executive dashboard preview, a resource library, a trust center, and a founder profile — all built to convert qualified visitors into consultation leads.

**Key design goals:**
- Demonstrate expertise _before_ the first call via free, interactive tools
- Capture leads at multiple points with low-friction CTAs
- Support SEO with dedicated pages per service, industry, and compliance framework
- Perform on mobile with a responsive dropdown navigation system

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language | TypeScript 6 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 12 |
| Forms | React Hook Form 7 |
| Icons | Custom SVG components |
| Font | System font stack via Tailwind |

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm 9+

```bash
# Clone the repo
git clone https://github.com/koayeni88/DiTconsult.git
cd DiTconsult

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. If port 3000 is in use, Next.js will automatically use the next available port (e.g. 3001).

---

## Project Structure

```
DiTconsult/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── page.tsx                  # Homepage
│   │   ├── layout.tsx                # Root layout (Header + Footer)
│   │   ├── globals.css               # Global styles & utility classes
│   │   ├── about/                    # Company about page
│   │   ├── blog/                     # Blog index
│   │   ├── cloud-security/           # Cloud security service page
│   │   ├── cloud-misconfiguration-demo/  # Interactive demo tool
│   │   ├── compliance/               # Compliance service page
│   │   ├── compliance-calculator/    # Interactive compliance tool
│   │   ├── contact/                  # Contact page
│   │   ├── cyber-risk-score/         # Free risk assessment tool
│   │   ├── executive-dashboard/      # Sample executive dashboard
│   │   ├── founder/                  # Founder profile page
│   │   ├── incident-response/        # IR service page
│   │   ├── industries/               # Industry landing pages
│   │   │   ├── cloud-teams/
│   │   │   ├── education/
│   │   │   ├── finance/
│   │   │   ├── government/
│   │   │   ├── healthcare/
│   │   │   ├── small-business/
│   │   │   └── startups/
│   │   ├── privacy/                  # Privacy policy
│   │   ├── resources/                # Resource library
│   │   ├── security-maturity/        # Maturity model tool
│   │   ├── security-roadmap/         # Roadmap generator tool
│   │   ├── services/                 # Full services directory
│   │   ├── terms/                    # Terms of service
│   │   ├── trust-center/             # Trust & transparency page
│   │   └── virtual-ciso/             # vCISO service page
│   ├── components/
│   │   ├── common/                   # Shared UI primitives
│   │   │   ├── Badge.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── GlassmorphismCard.tsx
│   │   │   ├── IndustryPageTemplate.tsx  # Shared template for all industry pages
│   │   │   ├── Logo.tsx
│   │   │   └── SectionHeading.tsx
│   │   ├── dashboard/
│   │   │   └── ExecutiveDashboard.tsx    # 4-tab interactive dashboard
│   │   ├── forms/
│   │   │   └── ContactForm.tsx
│   │   ├── home/                     # Homepage section components
│   │   │   ├── AIRemediationSection.tsx
│   │   │   ├── CapabilityStrip.tsx
│   │   │   ├── CoreStrengths.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── CustomerProblems.tsx
│   │   │   ├── CyberAtmosphere.tsx       # Shared cyber grid / glow layer
│   │   │   ├── DeliverablesSection.tsx
│   │   │   ├── ExampleEngagements.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── FeaturedServices.tsx
│   │   │   ├── FeaturedTools.tsx
│   │   │   ├── FloatingCyberElements.tsx # Animated cyber icons / particles
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroVisual.tsx
│   │   │   ├── IndustriesServed.tsx
│   │   │   ├── PackagedEngagements.tsx
│   │   │   └── ProcessSection.tsx
│   │   ├── icons/
│   │   │   └── CybersecurityIcons.tsx   # Custom SVG icon set
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx               # Dropdown navigation
│   │   │   └── MobileMenu.tsx
│   │   ├── services/
│   │   │   └── ServicePageTemplate.tsx
│   │   └── tools/                    # Interactive assessment tools
│   │       ├── CloudMisconfigDemo.tsx
│   │       ├── ComplianceCalculator.tsx
│   │       ├── CyberRiskScoreTool.tsx
│   │       ├── ResourceLibraryPage.tsx
│   │       ├── SecurityMaturityModel.tsx
│   │       └── SecurityRoadmapGenerator.tsx
│   ├── lib/
│   │   ├── animations.ts             # Framer Motion variants
│   │   ├── constants.ts              # Brand, nav, founder, site config
│   │   ├── content.ts                # Homepage and marketing copy
│   │   ├── insights.ts               # Blog / insights content
│   │   ├── services-data.ts          # Service page content
│   │   └── utils.ts                  # cn() and helper utilities
│   └── types/
│       └── index.ts                  # Shared TypeScript interfaces
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## Pages & Routes

### Core Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, stats, services overview, case studies, CTA |
| `/services` | Full services directory organized by category with anchor links |
| `/cloud-security` | Cloud security service detail page |
| `/compliance` | Compliance services overview |
| `/incident-response` | Incident response service detail |
| `/virtual-ciso` | Virtual CISO service detail |
| `/about` | Company mission, values, and team overview |
| `/founder` | Founder profile — background, expertise, credentials, career timeline |
| `/blog` | Blog index |
| `/contact` | Contact form and booking |
| `/trust-center` | Security practices, confidentiality, and methodology transparency |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

---

## Interactive Tools

All tools are free, require no sign-up, and are designed to convert visitors into leads by delivering immediate value.

### Cyber Risk Score — `/cyber-risk-score`
10-question interactive assessment covering identity, patching, network, incident response, and cloud controls. Scores from 0–30 are mapped to five risk levels (Critical → Resilient) with personalized recommendations and a category breakdown chart.

### Cloud Misconfiguration Demo — `/cloud-misconfiguration-demo`
Tabbed explorer of 11 real-world cloud findings across AWS, Azure, GCP, Terraform, and Kubernetes. Each finding includes severity, description, vulnerable code, and fixed code with a toggle to switch between the two views.

### Compliance Calculator — `/compliance-calculator`
Domain-by-domain readiness assessment for six frameworks: NIST CSF, SOC 2, ISO 27001, HIPAA, PCI DSS, and CMMC. Generates a percentage score per domain and an overall readiness label.

### Security Maturity Model — `/security-maturity`
Two-mode tool: a five-level maturity explorer and a five-question quiz. Both produce a maturity level (1–5: Reactive → Resilient) with characteristics, gaps, and recommended next steps.

### Security Roadmap Generator — `/security-roadmap`
Four-step wizard (business type → cloud environment → compliance need → maturity level) that generates a personalized 30/60/90-day action plan with effort and impact ratings for each item.

### Executive Dashboard — `/executive-dashboard`
Sample four-tab dashboard (Risk / Compliance / Remediation / Cloud) demonstrating the reporting format clients receive. Includes an animated risk gauge, framework score bars, remediation tracking table, and multi-cloud finding counts.

### Resource Library — `/resources`
Twelve downloadable resources (checklists, templates, guides, frameworks) with inline preview and download-via-contact-form flow.

---

## Industry Landing Pages

Each page uses the shared `IndustryPageTemplate` component and is tailored with industry-specific challenges, services, compliance frameworks, and stats.

| Route | Focus |
|---|---|
| `/industries/healthcare` | HIPAA, PHI protection, ransomware response |
| `/industries/finance` | PCI DSS, FFIEC, SOC 2, financial data |
| `/industries/education` | FERPA, K–12 networks, EdTech security |
| `/industries/small-business` | CIS IG1, cyber insurance, affordable security |
| `/industries/startups` | SOC 2 fast-track, DevSecOps, investor trust |
| `/industries/cloud-teams` | K8s hardening, IaC scanning, DevSecOps pipelines |
| `/industries/government` | CMMC 2.0, NIST SP 800-171, CUI protection, DoD contracts |

---

## Components

### Navigation — `Header.tsx`

Dropdown navigation powered by `NAV_GROUPS` from `constants.ts`. Groups:
- **Services** — All Services, Cloud Security, Compliance, Incident Response, Virtual CISO
- **Tools** — All six interactive tools
- **Industries** — All seven industry pages
- **Resources** — Resource Library, Trust Center, Blog

Desktop: click-to-open dropdowns with outside-click dismissal and active-state highlighting.
Mobile: full-screen slide-in menu via `MobileMenu.tsx`.

### Animation System — `src/lib/animations.ts`

Reusable Framer Motion variants:

```ts
fadeInUp        // opacity 0→1, y 20→0
fadeInDown      // opacity 0→1, y -20→0
fadeIn          // opacity only
scaleIn         // scale 0.95→1
staggerContainer  // parent with stagger children
containerVariants // viewport-triggered stagger
itemVariants    // child items
hoverScale      // whileHover scale 1.02
```

### Styling Conventions — `globals.css`

Custom utility classes used throughout:

| Class | Purpose |
|---|---|
| `glass-effect` | Semi-transparent dark card background |
| `glass-effect-lg` | Heavier glass with stronger blur |
| `gradient-text` | Blue→cyan gradient text |
| `shadow-neon` | Blue glow box shadow |
| `container-custom` | Max-width container with responsive padding |
| `section-padding` | Consistent vertical section spacing |
| `transition-smooth` | Standard `transition-all duration-300` |

---

## Configuration

### `tailwind.config.js`

- Extended color palette with `primary` (blue scale), `cyber` (green), `threat` (red)
- Custom `fontFamily` for sans and mono
- Safelist for dynamic class names used in tool components

### `next.config.js`

Standard Next.js config. Turbopack is enabled via the `--turbopack` flag in the dev script.

### `tsconfig.json`

- `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`
- Path alias: `@/*` → `./src/*`
- `ignoreDeprecations: "6.0"` to silence the `baseUrl` TypeScript 6 deprecation warning

---

## Scripts

```bash
npm run dev      # Start dev server with Turbopack (defaults to port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint via Next.js
npx tsc --noEmit # TypeScript type-check without emitting files
```

---

## Environment Variables

Copy `.env.example` to `.env.local` for local development. `.env.local` is gitignored and must never be committed.

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for the contact form |
| `CONTACT_EMAIL` | Inbox that receives form submissions (default: support@ditconsult.com) |
| `FROM_EMAIL` | Verified Resend sender address |
| `PORT` / `HOSTNAME` | Used by `server.js` for Hostinger-style deployments |

---

## Deployment

The site is a standard Next.js App Router project and can be deployed to:

- **Vercel** — connect the GitHub repo
- **Hostinger / Node host** — `npm run build` then `npm run start:hostinger` (or your `server.js` script)
- **Self-hosted** — run `npm run build && npm run start` behind a reverse proxy (nginx/Caddy)

### Pre-deployment checklist

- [ ] `npm run build` completes without errors
- [ ] Set `RESEND_API_KEY` and verified `FROM_EMAIL` in production
- [ ] Confirm `COMPANY_EMAIL` and `COMPANY_PHONE` in `src/lib/constants.ts`
- [ ] Confirm founder photo and LinkedIn URL in `FOUNDER`
- [ ] Never commit `.env.local` or API keys
- [ ] Smoke-test `/`, `/founder`, `/contact`, and one service page
- [ ] Confirm security headers in `next.config.js`

---

## License

ISC © DiTconsult
