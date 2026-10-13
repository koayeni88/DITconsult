# DiTconsult website architecture — four business divisions

Implementation report for the navigation and service-architecture reorganization. Existing branding, routes, contact delivery, and training catalog were preserved.

## 1. Navigation hierarchy

- Home → `/`
- Services (mega-menu) → `/services`
  - Cybersecurity Consulting → `/services/cybersecurity-consulting`
  - IT & Digital Transformation → `/services/it-digital-transformation`
  - Corporate Training & Professional Development → `/services/corporate-training`
  - Educational & Institutional Consulting → `/services/education-consulting`
- Industries → `/industries` and established sector pages
- Training → `/corporate-training` (canonical catalog)
- Resources → library, insights, established tools, Trust Center
- About Us → `/about` anchors and `/founder`
- Contact → `/contact`
- Book a Consultation → `/contact`

## 2. Four divisions and associated services

### Cybersecurity Consulting

Established detail pages: risk assessment, multi-cloud security, vulnerability assessment, AI-assisted remediation, GRC advisory, DevSecOps, incident-response planning, vCISO, security awareness.

Azure, AWS, Google Cloud, CSPM, IAM, Zero Trust, and policy development are addressed inside those established engagements rather than as empty standalone pages.

### IT & Digital Transformation

Advisory division. Established destinations: cloud architecture review (`/cloud-security`), delivery/infrastructure (`/devsecops`), IT governance (`/compliance`), continuity planning (`/incident-response`), technology risk (`/security-risk-assessment`).

Not published as productized implementation or managed services: Microsoft 365 deployment, enterprise systems integration, staff augmentation, or 24/7 IT operations.

### Corporate Training & Professional Development

Division overview: `/services/corporate-training`. Canonical catalog: `/corporate-training`. Awareness program: `/security-awareness`. Curriculum remains a proposed discussion framework.

### Educational & Institutional Consulting

Division overview: `/services/education-consulting`. Sector page: `/industries/education`. Related established pages: compliance, risk assessment, corporate training, vCISO.

## 3. Route mapping

| Previous destination | Current role |
| --- | --- |
| `/services` | Four-division directory |
| `/cloud-security`, `/compliance`, `/devsecops`, `/virtual-ciso`, `/security-risk-assessment`, `/vulnerability-assessment`, `/incident-response`, `/ai-cloud-remediation`, `/security-awareness` | Unchanged canonical service pages |
| `/corporate-training` | Unchanged training catalog |
| `/industries/education` | Industry application page |
| `/services/cybersecurity-consulting` | New division landing |
| `/services/it-digital-transformation` | New division landing |
| `/services/corporate-training` | New division landing (not a second catalog) |
| `/services/education-consulting` | New division landing |

No existing public URLs were removed. No 301s were required for legacy service pages.

## 4. Created and updated pages

Created: four division landings under `/services/*`.

Updated: homepage service section, `/services`, navigation, mobile menu, footer, About anchors, industries index, education industry cross-links, sitemap.

## 5. Homepage modifications

The seven-card featured-service grid was replaced with four division cards. Process, industries, training catalog preview, tools, FAQs, and consultation sections remain.

## 6. Navigation changes

Desktop: Services opens a four-column mega-menu. Other groups remain compact dropdowns. Escape closes menus.

Mobile: accordion navigation. Services expands to the four divisions; each division can expand to established links. Tap targets are at least 44px. `aria-expanded` and `aria-controls` are set.

## 7. SEO

New unique titles and meta descriptions on division pages. Canonical tags point to the new routes. Sitemap includes the four landings. Existing service URLs and canonicals are unchanged.

## 8. Offerings requiring owner verification

- Whether IT strategy, Microsoft 365, network implementation, enterprise integration, or AI-adoption advisory should become standalone pages
- Whether Azure, AWS, and Google Cloud should later receive dedicated pages instead of mapping to `/cloud-security`
- Whether curriculum advisory and digital-learning infrastructure should be published as established education services
- Whether a Corporate/Enterprise industry page should be added (not created; no existing page)

## 9. Validation

`next build` should be run after this report. Existing contact API, training inquiry fields, and resource downloads were not modified.

## 10. Follow-up

Browser-check the mega-menu on laptop and phone widths after deploy. Confirm the owner-verification list before advertising additional IT implementation services.
