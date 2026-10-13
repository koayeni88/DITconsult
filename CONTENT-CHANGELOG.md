# Content changelog — October 2026 editorial rewrite

## Brand positioning pass (same session)

Applied four strategic objectives across customer-facing copy:

1. **Executive and institutional credibility** — About now states purpose, mission, vision, and consulting philosophy without invented history or credentials. Homepage hero explains who DiTconsult serves and how an engagement starts.
2. **Differentiated core services** — Multi-cloud security, risk assessment, AI-assisted detection and remediation, GRC advisory, DevSecOps, virtual CISO, and corporate training now have distinct problems, approaches, deliverables, and next steps. The services index is grouped so offerings are not interchangeable.
3. **Educational vs. corporate training** — Educational and institutional consulting is presented as a complementary category (existing `/industries/education` route). Corporate training remains workforce development. Contact, homepage, training, and About copy keep the distinction visible.
4. **Unified brand voice** — Secure. Transform. Protect. now maps to Security, Transformation, Governance, and Capability development. Navigation, footer, contact options, and service names use the same terminology.

No new URLs were added. Educational consulting continues to live at `/industries/education`.

This log records the professional content transformation of ditconsult.com. Routes, layout, forms, and contact delivery logic were preserved.

## Editorial standards applied

- Voice: executive B2B American English; specific; no guaranteed outcomes.
- Slogan retained: **Secure. Transform. Protect.**
- Leadership title: President and CEO.
- Experience: over 15 years in Information Technology.
- DiTconsult does not issue certifications or attestations.
- Penetration testing is described as coordination, not a claim to perform every test type.
- AI-assisted remediation requires human approval before production changes.
- Website tools are labeled illustrative, not audits.
- Training curriculum remains a proposed discussion framework.
- Example engagements remain labeled illustrative, not case studies.

## Pages and content areas rewritten

- Homepage shared copy (`src/lib/content.ts`): hero, strengths, services, packages, tools, FAQs, final CTA.
- Company description and service blurbs (`src/lib/constants.ts`).
- About, founder, contact, services listing, corporate training chrome.
- All industry pages and `IndustryPageTemplate` chrome.
- Service page data (`src/lib/services-data.ts`).
- Resource library titles/descriptions and tool page chrome.
- Footer and homepage CTA section.
- Contact form labels, placeholders, and user-facing success/error text only.
- Privacy and terms wording clarified where already accurate; legal obligations were not rewritten as new policy.
- Insights article description tightened.

## SEO

- Homepage and default company description now state consulting, multi-cloud platforms, readiness advisory, and training.
- Service and industry meta titles/descriptions were rewritten for distinct, accurate search snippets.
- Canonical paths and URLs were not changed.
- Keyword stuffing and city-based keywords were not added.

## Source files updated (primary)

- `src/lib/content.ts`
- `src/lib/constants.ts`
- `src/lib/services-data.ts`
- `src/lib/training.ts` (intro and homepage training copy)
- `src/lib/insights.ts`
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/services/page.tsx`
- `src/app/corporate-training/page.tsx`
- `src/app/founder/page.tsx`
- `src/app/founder/layout.tsx`
- `src/app/industries/**`
- `src/app/resources/page.tsx`
- Tool and dashboard page/component chrome listed in the implementation review
- `src/components/common/IndustryPageTemplate.tsx`
- `src/components/home/CTASection.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/forms/ContactForm.tsx` (copy only)

## Not changed

- Contact API / Resend send logic, rate limits, and honeypot.
- Environment variables and secrets.
- Logo, palette, navigation architecture, and URL paths.
- Training area IDs and proposed course inventory (content refined at the page intro only).
- Privacy and terms legal duties beyond wording clarity.

## Items requiring business-owner verification

- Founder enterprise role at General Motors (current vs past wording).
- Trust Center encryption statements (AES-256 / TLS 1.3) if still used.
- Framework version numbers cited on Trust Center (NIST CSF 2.0, ISO/IEC 27001:2022, PCI DSS v4.0, CMMC 2.0).
- Named tools on the founder skills list (CrowdStrike, Wiz, Cisco UCS, Azure VMware Solution).
- Whether HITRUST, FFIEC CAT, IoMT device advisory, GovCloud/Azure Government advisory, and cyber-insurance questionnaire support should remain public offerings.
- CMMC revision (2.0 Level 1/2 readiness language).
- Resource library PDF titles and page counts.
- 24/7 incident-response retainer availability (still described as scope-dependent).
