import { NavGroup, Service } from '@/types';
import { BRAND_TAGLINE } from './content';

export const COMPANY_NAME = 'DiTconsult';
export const COMPANY_TAGLINE = BRAND_TAGLINE;
export const COMPANY_EMAIL = 'support@ditconsult.com';
export const COMPANY_PHONE = '(281) 885-9497';
export const COMPANY_DESCRIPTION =
  'DiTconsult is a cybersecurity and IT consulting firm that helps organizations assess multi-cloud risk, prepare for governance and compliance reviews, prioritize remediation, and develop workforce and institutional capability across AWS, Azure, and Google Cloud.';

/** Set real company profile URLs when ready; leave empty to hide footer social links. */
export const SOCIAL_LINKS = {
  linkedin: '', // e.g. 'https://www.linkedin.com/company/ditconsult'
  twitter: '',
} as const;

export const FOUNDER = {
  name: 'Korede Ayeni',
  title: 'President and CEO',
  linkedin: 'https://www.linkedin.com/in/korede-ayeni-10b89aa4/',
  initials: 'KA',
  /** Public career span communicated on founder/about pages */
  experienceYears: '15+',
  photoSrc: '/founder-korede-ayeni.jpg',
} as const;

export const SITE_URL = 'https://ditconsult.com';

export const NAV_GROUPS: NavGroup[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    variant: 'mega',
  },
  {
    label: 'Industries',
    children: [
      { label: 'All Industries', href: '/industries' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Financial Services', href: '/industries/finance' },
      { label: 'Universities and Educational Institutions', href: '/industries/education' },
      { label: 'Government and Public Sector', href: '/industries/government' },
      { label: 'Technology and SaaS', href: '/industries/startups' },
      { label: 'Small and Medium-Sized Businesses', href: '/industries/small-business' },
      { label: 'Cloud and Platform Teams', href: '/industries/cloud-teams' },
    ],
  },
  { label: 'Training', href: '/corporate-training' },
  {
    label: 'Resources',
    children: [
      { label: 'Resource Library', href: '/resources' },
      { label: 'Articles and Insights', href: '/blog' },
      { label: 'Cyber Risk Score', href: '/cyber-risk-score' },
      { label: 'Cloud Security Demo', href: '/cloud-misconfiguration-demo' },
      { label: 'Compliance Calculator', href: '/compliance-calculator' },
      { label: 'Security Roadmap Generator', href: '/security-roadmap' },
      { label: 'Trust Center', href: '/trust-center' },
    ],
  },
  {
    label: 'About Us',
    children: [
      { label: 'Company Overview', href: '/about#overview' },
      { label: 'Mission and Vision', href: '/about#mission' },
      { label: 'Leadership', href: '/founder' },
      { label: 'Our Consulting Approach', href: '/about#approach' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'cloud-security',
    title: 'Multi-Cloud Security Consulting',
    shortDescription:
      'Assess identity, configuration, logging, and architecture across AWS, Azure, and Google Cloud, then rank the work to close first.',
    description:
      'A scoped multi-cloud security review that produces one risk view for engineering and leadership. Distinct from enterprise risk registers and from finding-by-finding remediation support.',
    icon: 'cloud-lock',
    href: '/cloud-security',
  },
  {
    id: 'risk-assessment',
    title: 'Cybersecurity Risk Assessment and Management',
    shortDescription:
      'Give executives a shared view of cyber risk, control gaps, treatment options, and investment priorities.',
    description:
      'Business-oriented risk assessment and treatment planning. Distinct from cloud configuration reviews and from vulnerability-scanner triage.',
    icon: 'shield',
    href: '/security-risk-assessment',
  },
  {
    id: 'ai-remediation',
    title: 'AI-Assisted Security Detection and Remediation',
    shortDescription:
      'Triage security findings, recommend controlled fixes, and document validation. Production changes require human approval.',
    description:
      'Detection and remediation planning that uses AI to accelerate analysis. Distinct from a one-time cloud assessment; this service focuses on closing known issues under human control.',
    icon: 'shield',
    href: '/ai-cloud-remediation',
  },
  {
    id: 'compliance',
    title: 'Governance, Risk, and Compliance Advisory',
    shortDescription:
      'Control gap analysis, evidence planning, and readiness support for NIST CSF, ISO/IEC 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP-aligned reviews.',
    description:
      'Readiness advisory that prepares your team for independent audit or assessment. DiTconsult does not issue certifications or attestations.',
    icon: 'compliance',
    href: '/compliance',
  },
  {
    id: 'devsecops',
    title: 'DevSecOps and Infrastructure Security',
    shortDescription:
      'Build security into CI/CD pipelines, infrastructure as code, containers, and cloud architecture.',
    description:
      'Advisory for how software and infrastructure are designed, built, and released. Distinct from point-in-time cloud posture assessments.',
    icon: 'devsecops',
    href: '/devsecops',
  },
  {
    id: 'vciso',
    title: 'Virtual CISO and Strategic Security Advisory',
    shortDescription:
      'Fractional security leadership for strategy, governance, executive reporting, and program direction.',
    description:
      'Ongoing advisory leadership for organizations that need senior direction without a full-time CISO hire. Distinct from a single assessment engagement.',
    icon: 'ciso',
    href: '/virtual-ciso',
  },
  {
    id: 'corporate-training',
    title: 'Corporate Cybersecurity and IT Training',
    shortDescription:
      'Practical workforce training for employees, technical teams, and leaders, scoped from foundational to expert.',
    description:
      'Corporate training discussions tailored to audience, environment, and goals. Distinct from educational and institutional consulting. Schedules, pricing, and any credentials are confirmed after inquiry.',
    icon: 'data-protection',
    href: '/corporate-training',
  },
  {
    id: 'educational-consulting',
    title: 'Educational and Institutional Consulting',
    shortDescription:
      'Institutional technology strategy, campus cybersecurity, IT governance, faculty development, and digital-learning advisory for schools and universities.',
    description:
      'Advisory for education leaders and campus IT teams. Distinct from corporate workforce training. DiTconsult does not grant degrees or affiliate with any university.',
    icon: 'data-protection',
    href: '/services/education-consulting',
  },
  {
    id: 'vulnerability-management',
    title: 'Vulnerability Assessment and Remediation',
    shortDescription: 'Convert scanner output into a risk-ranked backlog with owners and remediation guidance.',
    description: 'Vulnerability triage based on exploitability, exposure, and business impact rather than volume alone.',
    icon: 'vulnerability',
    href: '/vulnerability-assessment',
  },
  {
    id: 'incident-response',
    title: 'Incident Response Planning',
    shortDescription: 'Playbooks, tabletop exercises, and notification workflows your teams can execute during an incident.',
    description: 'Incident-response readiness planning and exercises. Scope for active incident support is discussed separately.',
    icon: 'incident-response',
    href: '/incident-response',
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing Coordination',
    shortDescription: 'Define scope, coordinate qualified testers, and translate results into remediation work.',
    description: 'Penetration testing coordination and oversight. DiTconsult coordinates testing; it does not claim to perform every test type independently.',
    icon: 'vulnerability',
    href: '/contact',
  },
  {
    id: 'security-training',
    title: 'Security Awareness Training',
    shortDescription: 'Role-based awareness programs, phishing simulation design, and leadership briefings.',
    description: 'Security-awareness programs designed to improve reporting habits, not only record completion. DiTconsult does not issue certifications.',
    icon: 'data-protection',
    href: '/security-awareness',
  },
];

export const SERVICE_CATEGORIES = [
  {
    id: 'core-consulting',
    title: 'Core consulting services',
    description:
      'Distinct engagements for cloud security, enterprise risk, detection and remediation, governance, secure delivery, and security leadership.',
    serviceIds: [
      'cloud-security',
      'risk-assessment',
      'ai-remediation',
      'compliance',
      'devsecops',
      'vciso',
    ],
  },
  {
    id: 'capability-development',
    title: 'Workforce capability development',
    description:
      'Corporate training and awareness programs that build skills employees can apply in daily work. These offerings are not degree programs.',
    serviceIds: ['corporate-training', 'security-training'],
  },
  {
    id: 'institutional',
    title: 'Educational and institutional consulting',
    description:
      'Advisory for universities, schools, and education technology organizations. Complementary to corporate training, with a different audience and scope.',
    serviceIds: ['educational-consulting'],
  },
  {
    id: 'additional-advisory',
    title: 'Additional advisory services',
    description: 'Supporting work that can stand alone or follow a core engagement.',
    serviceIds: ['vulnerability-management', 'incident-response', 'penetration-testing'],
  },
];

export const FOOTER_SECTIONS = {
  services: [
    { label: 'Cybersecurity Consulting', href: '/services/cybersecurity-consulting' },
    { label: 'IT & Digital Transformation', href: '/services/it-digital-transformation' },
    { label: 'Corporate Training', href: '/corporate-training' },
    { label: 'Educational Consulting', href: '/services/education-consulting' },
    { label: 'All Services', href: '/services' },
    { label: 'Virtual CISO', href: '/virtual-ciso' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Founder', href: '/founder' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
    { label: 'Trust Center', href: '/trust-center' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  tools: [
    { label: 'Cyber Risk Score', href: '/cyber-risk-score' },
    { label: 'Cloud Misconfiguration Demo', href: '/cloud-misconfiguration-demo' },
    { label: 'Compliance Calculator', href: '/compliance-calculator' },
    { label: 'Security Maturity Model', href: '/security-maturity' },
    { label: 'Security Roadmap Generator', href: '/security-roadmap' },
    { label: 'Executive Dashboard', href: '/executive-dashboard' },
    { label: 'Resource Library', href: '/resources' },
  ],
};
