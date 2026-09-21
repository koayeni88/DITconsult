import { NavGroup, Service } from '@/types';
import { BRAND_TAGLINE } from './content';

export const COMPANY_NAME = 'DiTconsult';
export const COMPANY_TAGLINE = BRAND_TAGLINE;
export const COMPANY_EMAIL = 'support@ditconsult.com';
export const COMPANY_PHONE = '(281) 885-9497';
export const COMPANY_DESCRIPTION =
  'DiTconsult helps organizations assess cloud security, improve compliance readiness, and deliver risk-prioritized remediation across AWS, Azure, and Google Cloud. We also provide corporate cybersecurity and IT training.';

/** Set real company profile URLs when ready; leave empty to hide footer social links. */
export const SOCIAL_LINKS = {
  linkedin: '', // e.g. 'https://www.linkedin.com/company/ditconsult'
  twitter: '',
} as const;

export const FOUNDER = {
  name: 'Korede Ayeni',
  title: 'Founder & Principal Consultant',
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
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Cloud Security Assessment', href: '/cloud-security' },
      { label: 'AI-Assisted Cloud Remediation', href: '/ai-cloud-remediation' },
      { label: 'Compliance Readiness', href: '/compliance' },
      { label: 'Vulnerability Assessment', href: '/vulnerability-assessment' },
      { label: 'Security Risk Assessment', href: '/security-risk-assessment' },
      { label: 'Incident Response Planning', href: '/incident-response' },
      { label: 'DevSecOps & Secure Architecture', href: '/devsecops' },
      { label: 'Security Awareness Training', href: '/security-awareness' },
      { label: 'Corporate Cybersecurity & IT Training', href: '/corporate-training' },
      { label: 'Virtual CISO', href: '/virtual-ciso' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'All Industries', href: '/industries' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Financial Services', href: '/industries/finance' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Government Contractors', href: '/industries/government' },
      { label: 'SaaS & Cloud-Native', href: '/industries/startups' },
      { label: 'Growing Businesses', href: '/industries/small-business' },
    ],
  },
  {
    label: 'Tools',
    children: [
      { label: 'Cyber Risk Score', href: '/cyber-risk-score' },
      { label: 'Cloud Misconfiguration Demo', href: '/cloud-misconfiguration-demo' },
      { label: 'Compliance Calculator', href: '/compliance-calculator' },
      { label: 'Security Maturity Model', href: '/security-maturity' },
      { label: 'Security Roadmap Generator', href: '/security-roadmap' },
      { label: 'Executive Dashboard', href: '/executive-dashboard' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'cloud-security',
    title: 'Cloud Security Assessment',
    shortDescription: 'Assess misconfigurations and control gaps across AWS, Azure, and Google Cloud.',
    description: 'Multi-cloud security assessment with risk-prioritized remediation guidance.',
    icon: 'cloud-lock',
    href: '/cloud-security',
  },
  {
    id: 'ai-remediation',
    title: 'AI-Assisted Cloud Remediation',
    shortDescription: 'Detect, prioritize, and guide remediation of cloud misconfigurations with human oversight.',
    description: 'AI-assisted workflows for faster, risk-aware cloud security improvement.',
    icon: 'shield',
    href: '/ai-cloud-remediation',
  },
  {
    id: 'compliance',
    title: 'Compliance Readiness',
    shortDescription: 'Gap analysis and advisory for NIST, ISO 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP readiness.',
    description: 'Structured compliance readiness without certification claims.',
    icon: 'compliance',
    href: '/compliance',
  },
  {
    id: 'vulnerability-management',
    title: 'Vulnerability Assessment and Remediation',
    shortDescription: 'Risk-based vulnerability triage and remediation guidance.',
    description: 'Prioritize and remediate vulnerabilities based on business impact.',
    icon: 'vulnerability',
    href: '/vulnerability-assessment',
  },
  {
    id: 'risk-assessment',
    title: 'Security Risk Assessment',
    shortDescription: 'Executive-focused risk visibility and mitigation roadmaps.',
    description: 'Quantify exposure and prioritize security investments.',
    icon: 'shield',
    href: '/security-risk-assessment',
  },
  {
    id: 'incident-response',
    title: 'Incident Response Planning',
    shortDescription: 'Playbooks, tabletop exercises, and communication workflows.',
    description: 'Build tested incident response capabilities.',
    icon: 'incident-response',
    href: '/incident-response',
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing Coordination',
    shortDescription: 'Plan, coordinate, and oversee controlled adversarial testing.',
    description: 'Validate security through managed penetration testing engagements.',
    icon: 'vulnerability',
    href: '/contact',
  },
  {
    id: 'security-training',
    title: 'Security Awareness Training',
    shortDescription: 'Role-based training, phishing simulations, and leadership briefings.',
    description: 'Build security-aware culture with measurable programs.',
    icon: 'data-protection',
    href: '/security-awareness',
  },
  {
    id: 'corporate-training',
    title: 'Corporate Cybersecurity & IT Training',
    shortDescription:
      'We provide corporate cybersecurity and IT training to help organizations strengthen employee awareness, develop technical skills, and support secure, effective use of technology.',
    description:
      'Corporate cybersecurity and IT training discussions tailored to your teams, goals, and technology environment.',
    icon: 'data-protection',
    href: '/corporate-training',
  },
  {
    id: 'devsecops',
    title: 'DevSecOps and Secure Architecture',
    shortDescription: 'Integrate security into CI/CD, IaC, and cloud architecture.',
    description: 'Secure-by-design engineering practices.',
    icon: 'devsecops',
    href: '/devsecops',
  },
  {
    id: 'vciso',
    title: 'Virtual CISO Services',
    shortDescription: 'Strategic security leadership, governance, and executive reporting.',
    description: 'Fractional CISO advisory for growing organizations.',
    icon: 'ciso',
    href: '/virtual-ciso',
  },
];

export const FOOTER_SECTIONS = {
  services: [
    { label: 'Cloud Security', href: '/cloud-security' },
    { label: 'AI Cloud Remediation', href: '/ai-cloud-remediation' },
    { label: 'Compliance Readiness', href: '/compliance' },
    { label: 'Corporate Training', href: '/corporate-training' },
    { label: 'Virtual CISO', href: '/virtual-ciso' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Founder', href: '/founder' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
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
