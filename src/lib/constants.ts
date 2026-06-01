import { Service, Industry, CaseStudy, ProcessStep, NavLink, NavGroup } from '@/types';

// Note: Icon components are imported in component files to avoid circular dependencies
// See ServicesGrid.tsx for icon mapping

export const COMPANY_NAME = 'DITconsult';
export const COMPANY_TAGLINE = 'Enterprise Cybersecurity Consulting';
export const COMPANY_EMAIL = 'support@ditconsult.com';
export const COMPANY_PHONE = '(281) 885-9497';
export const COMPANY_DESCRIPTION =
  'DITconsult helps organizations identify cyber risk, strengthen cloud security, meet compliance requirements, and respond confidently to modern threats.';

export const NAVIGATION_LINKS: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Cloud Security', href: '/cloud-security' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Incident Response', href: '/incident-response' },
  { label: 'Virtual CISO', href: '/virtual-ciso' },
  { label: 'About', href: '/about' },
  { label: 'Founder', href: '/founder' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Cyber Risk Score', href: '/cyber-risk-score' },
  { label: 'Cloud Misconfiguration Demo', href: '/cloud-misconfiguration-demo' },
  { label: 'Compliance Calculator', href: '/compliance-calculator' },
  { label: 'Security Maturity', href: '/security-maturity' },
  { label: 'Security Roadmap', href: '/security-roadmap' },
  { label: 'Executive Dashboard', href: '/executive-dashboard' },
  { label: 'Resource Library', href: '/resources' },
  { label: 'Trust Center', href: '/trust-center' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Finance', href: '/industries/finance' },
  { label: 'Education', href: '/industries/education' },
  { label: 'Small Business', href: '/industries/small-business' },
  { label: 'Startups', href: '/industries/startups' },
  { label: 'Cloud Teams', href: '/industries/cloud-teams' },
  { label: 'Government', href: '/industries/government' },
];

export const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Cloud Security', href: '/cloud-security' },
      { label: 'Compliance', href: '/compliance' },
      { label: 'Incident Response', href: '/incident-response' },
      { label: 'Virtual CISO', href: '/virtual-ciso' },
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
  {
    label: 'Industries',
    children: [
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Finance', href: '/industries/finance' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Small Business', href: '/industries/small-business' },
      { label: 'Startups', href: '/industries/startups' },
      { label: 'Cloud Teams', href: '/industries/cloud-teams' },
      { label: 'Government Contractors', href: '/industries/government' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Resource Library', href: '/resources' },
      { label: 'Trust Center', href: '/trust-center' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'cloud-security',
    title: 'Cloud Security Assessment',
    shortDescription: 'Identify and eliminate cloud misconfigurations across AWS, Azure, and GCP.',
    description: 'Comprehensive security assessment of your cloud infrastructure with actionable remediation.',
    icon: 'cloud-lock',
    href: '/cloud-security',
    benefits: [
      'Multi-cloud assessment (AWS, Azure, GCP)',
      'Misconfiguration detection',
      'Access control review',
      'Data protection validation',
    ],
  },
  {
    id: 'vulnerability-management',
    title: 'Vulnerability Assessment & Remediation',
    shortDescription:
      'Discover, prioritize, and remediate security vulnerabilities across your infrastructure.',
    description: 'Systematic vulnerability identification and guided remediation with executive reporting.',
    icon: 'vulnerability',
    href: '/services#vulnerability',
    benefits: [
      'Comprehensive vulnerability scanning',
      'Risk prioritization',
      'Remediation guidance',
      'Compliance correlation',
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance Readiness',
    shortDescription:
      'Meet NIST, ISO 27001, SOC 2, HIPAA, PCI DSS, and other regulatory requirements.',
    description:
      'Strategic compliance consulting aligned with your business objectives and regulatory landscape.',
    icon: 'compliance',
    href: '/compliance',
    benefits: [
      'NIST cybersecurity framework',
      'ISO 27001 certification support',
      'SOC 2 Type II readiness',
      'HIPAA security compliance',
      'PCI DSS preparation',
    ],
  },
  {
    id: 'risk-assessment',
    title: 'Security Risk Assessment',
    shortDescription: 'Understand your current security posture and risk exposure.',
    description: 'In-depth analysis of your security controls, processes, and risk profile.',
    icon: 'shield',
    href: '/services#risk-assessment',
    benefits: [
      'Current state analysis',
      'Risk quantification',
      'Control evaluation',
      'Roadmap development',
    ],
  },
  {
    id: 'incident-response',
    title: 'Incident Response Planning',
    shortDescription: 'Prepare for and respond confidently to security incidents.',
    description: 'Develop and validate incident response procedures for your organization.',
    icon: 'incident-response',
    href: '/incident-response',
    benefits: [
      'Incident response planning',
      'Tabletop exercises',
      'Team training',
      'Communication frameworks',
    ],
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing Coordination',
    shortDescription: 'Validate your security through controlled adversarial testing.',
    description:
      'Coordinate and manage penetration testing engagements that reveal real-world vulnerabilities.',
    icon: 'vulnerability',
    href: '/services#penetration-testing',
    benefits: [
      'Pentest planning and coordination',
      'Findings analysis',
      'Remediation oversight',
      'Executive reporting',
    ],
  },
  {
    id: 'security-training',
    title: 'Security Awareness Training',
    shortDescription: 'Build a security-aware culture throughout your organization.',
    description: 'Tailored security awareness programs that drive employee engagement and behavior change.',
    icon: 'data-protection',
    href: '/services#training',
    benefits: [
      'Customized training programs',
      'Phishing simulations',
      'Compliance training',
      'Leadership briefings',
    ],
  },
  {
    id: 'devsecops',
    title: 'DevSecOps & Secure Architecture',
    shortDescription: 'Integrate security into your development and deployment pipelines.',
    description: 'Design and implement secure cloud architecture with modern DevSecOps practices.',
    icon: 'devsecops',
    href: '/services#devsecops',
    benefits: [
      'Secure architecture design',
      'Pipeline security integration',
      'Container security',
      'Infrastructure-as-code best practices',
    ],
  },
  {
    id: 'vciso',
    title: 'Virtual CISO Services',
    shortDescription: 'Get experienced cybersecurity leadership when you need it.',
    description: 'Strategic cybersecurity guidance and executive leadership from experienced security professionals.',
    icon: 'ciso',
    href: '/virtual-ciso',
    benefits: [
      'Strategic planning',
      'Board-level reporting',
      'Security roadmap development',
      'Executive guidance',
    ],
  },
  {
    id: 'ai-remediation',
    title: 'AI-Assisted Cloud Remediation',
    shortDescription: 'Automate detection and remediation of cloud misconfigurations.',
    description:
      'Leverage AI and automation to identify and guide remediation of cloud security misconfigurations at scale.',
    icon: 'shield',
    href: '/services#ai-remediation',
    benefits: [
      'Automated misconfiguration detection',
      'AI-powered prioritization',
      'Guided remediation',
      'Multi-cloud coverage',
    ],
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'HIPAA compliance and patient data protection expertise.',
    icon: '🏥',
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'PCI DSS and SOC 2 compliance for financial institutions.',
    icon: '💰',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Campus network security and student data protection.',
    icon: '🎓',
  },
  {
    id: 'small-business',
    name: 'Small Business',
    description: 'Affordable security strategies for growing companies.',
    icon: '🏢',
  },
  {
    id: 'government',
    name: 'Government Contractors',
    description: 'CMMC and FedRAMP readiness for government work.',
    icon: '🏛️',
  },
  {
    id: 'cloud-native',
    name: 'Cloud-Native Startups',
    description: 'Secure-by-design architecture and rapid compliance scaling.',
    icon: '🚀',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    slug: 'cloud-misconfiguration-saas',
    industry: 'Enterprise SaaS',
    title: 'Reduced Cloud Misconfiguration Exposure',
    description:
      'An enterprise SaaS company eliminated 87% of critical cloud misconfigurations across AWS and Azure through systematic assessment and guided remediation.',
    metric: 'Critical issues resolved',
    metricValue: '87%',
    challenge:
      'A fast-growing SaaS company had scaled their AWS and Azure infrastructure rapidly, accumulating years of misconfigured IAM roles, publicly accessible S3 buckets, and unencrypted data stores. A routine penetration test flagged over 140 critical findings across both clouds.',
    approach: [
      'Performed a full Cloud Security Posture Management (CSPM) assessment across AWS and Azure tenants',
      'Prioritized findings by exploitability and blast radius using a custom risk scoring matrix',
      'Delivered per-team remediation tickets integrated directly into their Jira workflow',
      'Ran three rounds of validation scanning over a 60-day remediation sprint',
      'Implemented IaC scanning in their CI/CD pipeline to prevent new misconfigurations',
    ],
    outcome: [
      '87% of critical findings remediated within 60 days',
      'Zero publicly exposed S3 buckets or storage accounts remaining',
      'IAM least-privilege policies enforced across 14 AWS accounts',
      'IaC security gates blocking 100% of misconfigured infrastructure from reaching production',
      'Security posture score improved from 42/100 to 91/100 on their CSPM platform',
    ],
    services: ['Cloud Security Assessment', 'DevSecOps & Secure Architecture', 'Vulnerability Assessment & Remediation'],
  },
  {
    id: 'case-2',
    slug: 'soc2-financial-services',
    industry: 'Financial Services',
    title: 'Accelerated SOC 2 Type II Readiness',
    description:
      'A financial services firm achieved SOC 2 Type II readiness three months ahead of schedule with a structured gap analysis and remediation roadmap.',
    metric: 'Timeline saved',
    metricValue: '3 mo',
    challenge:
      'A Series B fintech company had committed to SOC 2 Type II in customer contracts but had no formal security program in place. Their engineering team had no bandwidth for compliance work, and their initial audit firm estimate was 18 months to certification.',
    approach: [
      'Conducted a 2-week gap analysis against SOC 2 Trust Services Criteria',
      'Built a prioritized 90-day remediation roadmap scoped to engineer capacity',
      'Implemented lightweight policy documentation using existing tooling (Notion + GitHub)',
      'Configured automated evidence collection to eliminate manual audit prep',
      'Coordinated directly with the auditor to align on evidence requirements upfront',
    ],
    outcome: [
      'SOC 2 Type II audit completed in 9 months vs. the projected 12',
      'Zero audit findings in access control and change management categories',
      'Automated evidence collection reduced audit prep from 3 weeks to 2 days',
      'Security policies adopted by engineering team with zero process disruption',
      'Customer contracts unblocked, contributing to $2.1M in new ARR',
    ],
    services: ['Compliance Readiness', 'Security Risk Assessment', 'Virtual CISO Services'],
  },
  {
    id: 'case-3',
    slug: 'incident-response-healthcare',
    industry: 'Healthcare',
    title: 'Strengthened Incident Response',
    description:
      'A healthcare organization cut mean time to containment by 60% after tabletop exercises, playbooks, and executive communication drills.',
    metric: 'Faster containment',
    metricValue: '60%',
    challenge:
      'A regional healthcare network had experienced a ransomware near-miss that exposed their IR plan as theoretical — their team had never practiced it, executives did not know their roles, and the communication chain broke down completely during the incident.',
    approach: [
      'Reviewed and rewrote the existing 180-page IR plan into 6 concise, role-specific playbooks',
      'Facilitated three tabletop exercises simulating ransomware, insider threat, and PHI breach scenarios',
      'Trained the executive team on HIPAA breach notification timelines and media communication',
      'Implemented a 24/7 on-call escalation matrix with clear decision authorities',
      'Deployed endpoint detection and response (EDR) tooling with monitored alerting thresholds',
    ],
    outcome: [
      'Mean time to containment reduced from 4.2 hours to 1.7 hours in simulation',
      'All 6 playbooks tested and approved by clinical, IT, and legal stakeholders',
      'Executive team passed HIPAA breach notification simulation with full compliance',
      'EDR deployment identified 3 active threats within the first 30 days of operation',
      'Organization passed OCR audit with no IR-related findings',
    ],
    services: ['Incident Response Planning', 'Security Awareness Training', 'Compliance Readiness'],
  },
];

export const COMPANY_STATS = [
  { value: '3', label: 'Cloud platforms', detail: 'AWS, Azure & GCP' },
  { value: '24h', label: 'Response time', detail: 'On new inquiries' },
  { value: '10+', label: 'Service areas', detail: 'End-to-end security' },
  { value: '100%', label: 'Actionable output', detail: 'No shelf-ware reports' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Discover',
    description: 'Understand your environment, threats, and compliance requirements through discovery workshops and assessment.',
  },
  {
    number: 2,
    title: 'Assess',
    description: 'Execute comprehensive security assessments identifying gaps, risks, and compliance misalignments.',
  },
  {
    number: 3,
    title: 'Secure',
    description: 'Implement strategic recommendations with clear roadmaps, remediation plans, and executive guidance.',
  },
  {
    number: 4,
    title: 'Monitor & Improve',
    description: 'Establish continuous improvement processes with monitoring, reporting, and regular strategic reviews.',
  },
];

export const TRUST_SIGNALS = [
  'Cybersecurity',
  'Cloud Security',
  'Risk Management',
  'Compliance',
  'Incident Response',
  'DevSecOps',
  'Vulnerability Management',
  'Data Privacy',
  'Virtual CISO',
];

export const WHY_CHOOSE_US = [
  'Practical cybersecurity experience from real-world engagements',
  'Cloud-first security expertise across AWS, Azure, and GCP',
  'Business-focused recommendations aligned with your strategy',
  'Compliance-aligned solutions for regulated industries',
  'Clear reporting for executives and technical teams',
  'Actionable remediation plans, not generic reports',
];

export const FOOTER_SECTIONS = {
  services: [
    { label: 'Cloud Security', href: '/cloud-security' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Incident Response', href: '/incident-response' },
    { label: 'Virtual CISO', href: '/virtual-ciso' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

export const HERO_HEADLINE = 'Secure your cloud. Protect your business.';
export const HERO_HEADLINE_ACCENT = 'Build digital trust.';
export const HERO_SUBHEADLINE =
  'Practical cybersecurity consulting for organizations that need clear risk visibility, stronger cloud posture, and compliance confidence—without the noise.';
export const HERO_CTA_PRIMARY = 'Book a Security Consultation';
export const HERO_CTA_SECONDARY = 'View Our Services';

export const PROBLEM_HEADLINE = 'Cyber threats move fast. Your security strategy must move faster.';
export const PROBLEM_DESCRIPTION =
  'Modern organizations face evolving cloud misconfigurations, sophisticated ransomware, targeted phishing, intense compliance pressure, weak identity controls, and persistent visibility gaps. DITconsult helps you address these challenges with strategic, practical, and actionable security solutions.';

export const WHY_CHOOSE_TITLE = 'Why Choose DITconsult';
export const WHY_CHOOSE_DESCRIPTION =
  'We combine deep technical expertise with strategic business acumen to deliver security solutions that are both secure and sustainable.';

export const AI_REMEDIATION_TITLE = 'AI-Assisted Cloud Security Remediation';
export const AI_REMEDIATION_DESCRIPTION =
  'Detect, prioritize, and remediate cloud misconfigurations at scale across your multi-cloud environment.';

export const CTA_FINAL_HEADLINE = 'Ready to strengthen your cybersecurity posture?';
export const CTA_FINAL_DESCRIPTION = "Let's discuss your security needs and develop a roadmap for success.";
