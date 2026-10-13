import { FAQ } from '@/types';

export interface DivisionLink {
  label: string;
  href: string;
}

export interface DivisionService {
  title: string;
  description: string;
  href: string;
  status: 'established' | 'advisory-topic';
}

export interface BusinessDivision {
  id: string;
  title: string;
  shortTitle: string;
  href: string;
  icon: 'shield' | 'transform' | 'training' | 'education';
  overview: string;
  homepageDescription: string;
  homepageCapabilities: string[];
  homepageCta: string;
  primaryCta: string;
  primaryCtaHref: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  challenges: { title: string; description: string }[];
  services: DivisionService[];
  expertise: string[];
  approach: { title: string; description: string }[];
  deliverables: string[];
  industries: string[];
  faqs: FAQ[];
  menuLinks: DivisionLink[];
  note?: string;
}

export const DIVISIONS: BusinessDivision[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Consulting',
    shortTitle: 'Cybersecurity',
    href: '/services/cybersecurity-consulting',
    icon: 'shield',
    overview:
      'DiTconsult helps organizations assess cybersecurity risks, strengthen security controls, protect digital assets, and improve cyber resilience through practical security engineering, risk management, and strategic advisory.',
    homepageDescription:
      "Strengthen your organization's security posture through risk assessments, cloud security advisory, governance, and practical remediation planning.",
    homepageCapabilities: [
      'Multi-cloud security assessments',
      'Risk and compliance readiness',
      'AI-assisted remediation planning',
      'Virtual CISO advisory',
    ],
    homepageCta: 'Explore Cybersecurity Services',
    primaryCta: 'Request a Cybersecurity Consultation',
    primaryCtaHref: '/contact?service=cloud-security',
    metaTitle: 'Cybersecurity Consulting Services',
    metaDescription:
      'Cybersecurity consulting for multi-cloud security, risk assessment, GRC readiness, DevSecOps, incident-response planning, and virtual CISO advisory. DiTconsult does not issue certifications.',
    headline: 'Cybersecurity consulting for organizations that need ranked risk and practical next steps',
    subheadline:
      'Assess exposure across cloud, identity, applications, and governance. Receive defined deliverables your security, engineering, and leadership teams can execute. Production changes require human approval. DiTconsult does not issue certifications.',
    challenges: [
      {
        title: 'Cloud and identity exposure',
        description:
          'Public storage, over-privileged roles, and uneven logging create risk that perimeter controls do not address.',
      },
      {
        title: 'Unranked findings',
        description:
          'Scanner output and audit requests accumulate faster than teams can decide what to fix first.',
      },
      {
        title: 'Governance and evidence gaps',
        description:
          'Customers and regulators expect documented controls before internal ownership and evidence collection are ready.',
      },
      {
        title: 'Limited security leadership',
        description:
          'Growing organizations need program direction and executive reporting before they can fund a full-time CISO.',
      },
    ],
    services: [
      {
        title: 'Cybersecurity Risk Assessment and Management',
        description: 'Enterprise risk view, treatment options, and executive reporting.',
        href: '/security-risk-assessment',
        status: 'established',
      },
      {
        title: 'Cloud and Multi-Cloud Security Consulting',
        description: 'Identity, configuration, logging, and architecture review across AWS, Azure, and Google Cloud.',
        href: '/cloud-security',
        status: 'established',
      },
      {
        title: 'Vulnerability Assessment and Management',
        description: 'Risk-ranked scanner triage with owners and remediation guidance.',
        href: '/vulnerability-assessment',
        status: 'established',
      },
      {
        title: 'AI-Assisted Detection and Remediation',
        description: 'AI-assisted analysis of findings. Production changes require human approval.',
        href: '/ai-cloud-remediation',
        status: 'established',
      },
      {
        title: 'Governance, Risk, and Compliance Advisory',
        description: 'Readiness advisory for NIST CSF, ISO/IEC 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP-aligned reviews.',
        href: '/compliance',
        status: 'established',
      },
      {
        title: 'DevSecOps and Application Security',
        description: 'CI/CD, infrastructure as code, container, and architecture advisory.',
        href: '/devsecops',
        status: 'established',
      },
      {
        title: 'Security Operations and Incident Response Advisory',
        description: 'Playbooks, tabletop exercises, and notification workflows.',
        href: '/incident-response',
        status: 'established',
      },
      {
        title: 'Virtual Chief Information Security Officer (vCISO)',
        description: 'Fractional security leadership for strategy, governance, and board reporting.',
        href: '/virtual-ciso',
        status: 'established',
      },
      {
        title: 'Security Awareness Training',
        description: 'Role-based awareness and phishing-simulation design. Complements the corporate training catalog.',
        href: '/security-awareness',
        status: 'established',
      },
    ],
    expertise: [
      'Amazon Web Services, Microsoft Azure, and Google Cloud',
      'Identity and access management and least-privilege review',
      'Cloud Security Posture Management concepts and configuration baselines',
      'Zero Trust architecture principles applied to scoped environments',
      'NIST CSF, ISO/IEC 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP readiness',
      'OWASP-aligned application security advisory',
    ],
    approach: [
      { title: 'Discover', description: 'Confirm scope, stakeholders, systems, access needs, and success criteria.' },
      { title: 'Assess', description: 'Collect evidence through interviews, configuration review, and authorized testing only.' },
      { title: 'Prioritize', description: 'Rank findings by business impact, exposure, and compliance relevance.' },
      { title: 'Deliver', description: 'Provide reports, a remediation roadmap, and optional validation after agreed changes.' },
    ],
    deliverables: [
      'Executive risk summary',
      'Technical findings with supporting evidence',
      'Risk-ranked remediation backlog',
      'Compliance gap matrix when readiness is in scope',
      'Architecture and control recommendations',
    ],
    industries: [
      'Healthcare',
      'Financial services',
      'Government contractors',
      'Technology and SaaS',
      'Educational institutions',
      'Growing businesses',
    ],
    faqs: [
      {
        question: 'Does DiTconsult issue security certifications?',
        answer:
          'No. We provide readiness advisory, assessment, and remediation planning. Independent auditors and certifying bodies issue certifications and attestations.',
      },
      {
        question: 'Do you perform every type of penetration test?',
        answer:
          'No. DiTconsult coordinates penetration testing with qualified testers and translates results into remediation work. We do not claim to perform every test type independently.',
      },
      {
        question: 'Can Azure, AWS, and Google Cloud be assessed in one engagement?',
        answer:
          'Yes. Multi-cloud reviews are a core offering. Platform-specific guidance is included in the same ranked view rather than as separate empty service pages.',
      },
    ],
    menuLinks: [
      { label: 'Security Assessments', href: '/security-risk-assessment' },
      { label: 'Cloud Security', href: '/cloud-security' },
      { label: 'AI Security', href: '/ai-cloud-remediation' },
      { label: 'Governance & Compliance', href: '/compliance' },
      { label: 'DevSecOps', href: '/devsecops' },
      { label: 'vCISO', href: '/virtual-ciso' },
    ],
    note:
      'Azure, AWS, and Google Cloud security; Cloud Security Posture Management; identity and access management; Zero Trust architecture; and security-policy development are addressed inside established cloud, risk, compliance, and vCISO engagements rather than as separate unpublished product pages.',
  },
  {
    id: 'it-transformation',
    title: 'IT & Digital Transformation',
    shortTitle: 'IT Transformation',
    href: '/services/it-digital-transformation',
    icon: 'transform',
    overview:
      'DiTconsult supports organizations in modernizing technology environments, improving IT operations, adopting cloud infrastructure, and making secure technology decisions aligned with business objectives. This division is advisory. It is not a managed-services or staff-augmentation practice.',
    homepageDescription:
      'Modernize technology infrastructure, improve IT operations, and develop secure solutions aligned with organizational objectives.',
    homepageCapabilities: [
      'Secure cloud architecture advisory',
      'Infrastructure and delivery review',
      'Technology governance planning',
      'Continuity and recovery planning',
    ],
    homepageCta: 'Explore IT Consulting',
    primaryCta: 'Discuss Your IT Transformation Needs',
    primaryCtaHref: '/contact?service=devsecops',
    metaTitle: 'IT and Digital Transformation Consulting',
    metaDescription:
      'Advisory support for secure cloud adoption, infrastructure modernization, IT governance, and technology planning. DiTconsult distinguishes advisory work from implementation and managed services.',
    headline: 'IT and digital transformation advisory with security built into technology decisions',
    subheadline:
      'Use consulting to clarify architecture, modernization sequence, and operating practices before you invest in tools or large implementation programs. Engagements are scoped as advisory unless a separate implementation plan is agreed in writing.',
    challenges: [
      {
        title: 'Cloud adoption without a control model',
        description:
          'Migrations proceed by workload rather than by identity, logging, and operating-model design.',
      },
      {
        title: 'Aging infrastructure and undocumented dependencies',
        description:
          'Leaders need a practical modernization sequence, not a generic transformation slogan.',
      },
      {
        title: 'Technology decisions disconnected from governance',
        description:
          'New platforms are adopted faster than ownership, evidence, and recovery planning can keep up.',
      },
      {
        title: 'Delivery processes that leave security until the end',
        description:
          'Infrastructure as code, pipelines, and automation need controls that fit how teams already work.',
      },
    ],
    services: [
      {
        title: 'Cloud architecture and migration advisory',
        description: 'Secure design and posture review for AWS, Azure, and Google Cloud environments.',
        href: '/cloud-security',
        status: 'established',
      },
      {
        title: 'Infrastructure and delivery modernization',
        description: 'Architecture, CI/CD, infrastructure as code, and secrets-handling advisory.',
        href: '/devsecops',
        status: 'established',
      },
      {
        title: 'IT governance and technology planning',
        description: 'Control ownership, evidence planning, and readiness aligned to selected frameworks.',
        href: '/compliance',
        status: 'established',
      },
      {
        title: 'Continuity and recovery planning',
        description: 'Incident-response and notification workflows that support operational resilience.',
        href: '/incident-response',
        status: 'established',
      },
      {
        title: 'Technology risk and investment decisions',
        description: 'A business-oriented view of technology and security risk for executives.',
        href: '/security-risk-assessment',
        status: 'established',
      },
    ],
    expertise: [
      'Cloud architecture review across AWS, Azure, and Google Cloud',
      'Identity, logging, and network-boundary design principles',
      'Infrastructure as code and pipeline security',
      'IT governance aligned to selected security frameworks',
      'Recovery and notification planning',
    ],
    approach: [
      { title: 'Clarify objectives', description: 'Identify business outcomes, constraints, and current-state systems.' },
      { title: 'Assess the environment', description: 'Review architecture, operations, and control gaps in the agreed scope.' },
      { title: 'Sequence the work', description: 'Recommend a modernization and control plan that matches capacity.' },
      { title: 'Advise the next decision', description: 'Leave a roadmap, owners, and a clear boundary between advisory and later implementation.' },
    ],
    deliverables: [
      'Current-state technology and control summary',
      'Prioritized modernization or architecture recommendations',
      'Governance and ownership guidance when in scope',
      'Implementation roadmap for the client team or a later scoped engagement',
    ],
    industries: [
      'Corporate and enterprise organizations',
      'Public-sector and government contractors',
      'Educational institutions',
      'Healthcare and financial services',
      'Technology and SaaS teams',
    ],
    faqs: [
      {
        question: 'Does DiTconsult operate as a managed IT provider?',
        answer:
          'No. This division provides consulting and advisory services. Implementation support is scoped separately and is not advertised as 24/7 managed operations.',
      },
      {
        question: 'Can you implement Microsoft 365, networks, or enterprise systems end to end?',
        answer:
          'We advise on secure design, governance, and operating practices. Broader implementation, integration, or project-delivery models are discussed only when they fit an agreed scope. They are not published as standing productized services.',
      },
    ],
    menuLinks: [
      { label: 'IT Strategy', href: '/services/it-digital-transformation#strategy' },
      { label: 'Infrastructure', href: '/devsecops' },
      { label: 'Cloud Architecture', href: '/cloud-security' },
      { label: 'Technology Modernization', href: '/services/it-digital-transformation#modernization' },
      { label: 'Automation', href: '/devsecops' },
      { label: 'IT Governance', href: '/compliance' },
    ],
    note:
      'IT strategy, Microsoft 365 design, enterprise integration, infrastructure automation, and AI-adoption advisory are discussed during scoping. They are not published as standalone implementation offerings.',
  },
  {
    id: 'corporate-training',
    title: 'Corporate Training & Professional Development',
    shortTitle: 'Corporate Training',
    href: '/services/corporate-training',
    icon: 'training',
    overview:
      'DiTconsult designs practical cybersecurity and information technology training to strengthen workforce capability, improve security awareness, and help organizations develop technical competence. The curriculum is a proposed discussion framework, not a public enrollment catalog.',
    homepageDescription:
      'Build technical competence and cybersecurity awareness through practical, workforce-focused learning programs.',
    homepageCapabilities: [
      'Cybersecurity awareness and operations',
      'Cloud and identity fundamentals',
      'Responsible AI education',
      'Executive cyber-risk briefings',
    ],
    homepageCta: 'Explore Training Programs',
    primaryCta: 'Request a Corporate Training Proposal',
    primaryCtaHref: '/contact?service=corporate-training',
    metaTitle: 'Corporate Training and Professional Development',
    metaDescription:
      'Corporate cybersecurity and IT training for employees, technical teams, and leaders. Proposed curriculum for discussion—not scheduled public courses or accredited qualifications.',
    headline: 'Corporate training that builds skills people can apply at work',
    subheadline:
      'Workforce programs for employees, engineers, and leaders—from awareness and cloud fundamentals through operations, governance, and responsible AI. Distinct from educational and institutional consulting. DiTconsult does not issue certifications.',
    challenges: [
      {
        title: 'Awareness that stops at annual completion',
        description: 'Employees complete modules without changing reporting habits or phishing resistance.',
      },
      {
        title: 'Technical teams growing faster than security skill',
        description: 'Cloud, identity, and operations work requires role-specific training, not a generic course list.',
      },
      {
        title: 'Leaders making technology-risk decisions without a shared language',
        description: 'Executives need concise education on cyber risk, governance, and AI use—not engineer-level labs.',
      },
    ],
    services: [
      {
        title: 'Full proposed curriculum',
        description: 'Nineteen training areas, twelve proposed courses, and four flagship workshops for scoping discussions.',
        href: '/corporate-training',
        status: 'established',
      },
      {
        title: 'Cybersecurity awareness programs',
        description: 'Role-based awareness, phishing-simulation design, and leadership briefings.',
        href: '/security-awareness',
        status: 'established',
      },
      {
        title: 'Cybersecurity training areas',
        description: 'Awareness, operations, incident response, risk, and GRC topics in the proposed catalog.',
        href: '/corporate-training#core-cybersecurity',
        status: 'established',
      },
      {
        title: 'Cloud and infrastructure training',
        description: 'Cloud, identity, and network topics scoped from foundational to expert.',
        href: '/corporate-training#corporate-it',
        status: 'established',
      },
      {
        title: 'AI and emerging-technology training',
        description: 'AI in cybersecurity, generative AI security, and responsible AI governance.',
        href: '/corporate-training#ai-cybersecurity',
        status: 'established',
      },
      {
        title: 'Executive and management education',
        description: 'Leadership decision-making and cyber-risk governance workshops.',
        href: '/corporate-training#governance-specialist',
        status: 'established',
      },
    ],
    expertise: [
      'Foundational through expert scoping',
      'Corporate and group delivery discussed after inquiry',
      'Custom programs based on audience, environment, and goals',
      'Complementary institutional consulting for education clients',
    ],
    approach: [
      { title: 'Understand the audience', description: 'Confirm roles, current experience, and the outcomes you need.' },
      { title: 'Select a focused set', description: 'Start with proposed courses or workshops rather than the entire catalog.' },
      { title: 'Agree delivery preferences', description: 'Format and timeframe are preferences discussed during scoping.' },
      { title: 'Confirm commercial details', description: 'Prices, schedules, duration, and any credential details follow inquiry.' },
    ],
    deliverables: [
      'A scoped training proposal after discovery',
      'Audience and topic recommendations',
      'Materials for the agreed program when delivery is confirmed',
    ],
    industries: [
      'Corporations and growing businesses',
      'Technology and cloud teams',
      'Regulated industries with awareness requirements',
      'Public-sector and education employers seeking workforce programs',
    ],
    faqs: [
      {
        question: 'Can we enroll in a public course on a published date?',
        answer:
          'The website presents a proposed curriculum for discussion. Schedules, pricing, and delivery format are confirmed after you contact us. This is not an accredited learning platform.',
      },
      {
        question: 'How is this different from educational consulting?',
        answer:
          'Corporate training develops workforce skills inside an organization. Educational consulting advises schools and universities on institutional technology, campus security, and faculty development.',
      },
    ],
    menuLinks: [
      { label: 'Cybersecurity Training', href: '/corporate-training#core-cybersecurity' },
      { label: 'Cloud Training', href: '/corporate-training#corporate-it' },
      { label: 'AI Training', href: '/corporate-training#ai-cybersecurity' },
      { label: 'IT Professional Development', href: '/corporate-training#corporate-it' },
      { label: 'Executive Education', href: '/corporate-training#governance-specialist' },
    ],
    note:
      'The canonical training catalog remains /corporate-training. This page is the division overview. Individual course titles are proposed discussion topics, not open enrollment.',
  },
  {
    id: 'education',
    title: 'Educational & Institutional Consulting',
    shortTitle: 'Education Consulting',
    href: '/services/education-consulting',
    icon: 'education',
    overview:
      'DiTconsult supports educational institutions in strengthening technology governance, improving institutional cybersecurity, modernizing digital-learning environments, and developing faculty, administrator, and IT capability. DiTconsult does not grant degrees or affiliate with any university.',
    homepageDescription:
      'Support institutional technology modernization, cybersecurity governance, and digital learning initiatives.',
    homepageCapabilities: [
      'Campus identity and data-protection review',
      'Institutional IT governance',
      'EdTech and digital-learning advisory',
      'Faculty and staff development',
    ],
    homepageCta: 'Explore Education Consulting',
    primaryCta: 'Discuss Institutional Consulting Needs',
    primaryCtaHref: '/contact?service=educational-consulting',
    metaTitle: 'Educational and Institutional Consulting',
    metaDescription:
      'Institutional cybersecurity, campus IT governance, digital-learning advisory, and faculty development for universities, colleges, and education agencies. Distinct from corporate training.',
    headline: 'Institutional technology and cybersecurity advisory for education leaders',
    subheadline:
      'Written for presidents, provosts, administrators, CIOs, ICT directors, government education agencies, and procurement teams. Complementary to corporate training. No implied university partnerships or contracts.',
    challenges: [
      {
        title: 'Distributed campus technology decisions',
        description:
          'Academic, administrative, and research units often adopt tools faster than identity, governance, and evidence collection can keep up.',
      },
      {
        title: 'Student-record and research-data protection',
        description:
          'FERPA-aware handling, vendor access, and retention practices require institutional—not generic corporate—review.',
      },
      {
        title: 'Instructional disruption risk',
        description:
          'Ransomware and outages affect teaching, payroll, and family communication when recovery plans are untested.',
      },
      {
        title: 'Faculty and staff capability',
        description:
          'Institutional security depends on people who handle records and learning platforms. Development should fit education roles.',
      },
    ],
    services: [
      {
        title: 'Institutional cybersecurity and campus identity review',
        description: 'Access, segmentation, and student-data handling advisory for campus and cloud environments.',
        href: '/industries/education',
        status: 'established',
      },
      {
        title: 'IT governance for educational institutions',
        description: 'Control ownership, evidence planning, and risk language for administrators and campus IT.',
        href: '/compliance',
        status: 'established',
      },
      {
        title: 'Institutional risk assessment',
        description: 'A structured view of technology and security risk for education leadership.',
        href: '/security-risk-assessment',
        status: 'established',
      },
      {
        title: 'Faculty and staff cybersecurity development',
        description: 'Role-specific awareness and professional development. Not a degree program.',
        href: '/corporate-training',
        status: 'established',
      },
      {
        title: 'Fractional security leadership',
        description: 'Virtual CISO advisory for districts, campuses, and education-technology teams.',
        href: '/virtual-ciso',
        status: 'established',
      },
    ],
    expertise: [
      'FERPA-aware data-handling advisory',
      'Campus and cloud identity review',
      'EdTech vendor risk discussion',
      'Faculty and administrator development',
      'Institutional governance language for procurement and leadership',
    ],
    approach: [
      { title: 'Listen to institutional context', description: 'Understand academic calendar, governance, and operational constraints.' },
      { title: 'Assess the agreed scope', description: 'Review identity, data handling, vendors, or governance—not an unbounded campus audit.' },
      { title: 'Recommend practical work', description: 'Rank actions administrators and IT teams can own.' },
      { title: 'Separate training if needed', description: 'Faculty development can be scoped beside, not instead of, institutional advisory.' },
    ],
    deliverables: [
      'Institutional security and technology-risk summary',
      'Identity and student-data handling recommendations',
      'IT governance and evidence-planning guidance',
      'Faculty and staff development outline when training is also in scope',
    ],
    industries: [
      'Universities and colleges',
      'School systems and districts',
      'Education technology organizations',
      'Government education agencies',
    ],
    faqs: [
      {
        question: 'Is DiTconsult affiliated with a university?',
        answer:
          'No. We provide independent consulting and training advisory. We do not grant degrees, issue academic credit, or claim institutional partnerships.',
      },
      {
        question: 'Is this the same as corporate training?',
        answer:
          'No. Corporate training develops workforce skills inside a company. This division advises institutions on technology, security, governance, and faculty capability. Many education clients use both.',
      },
    ],
    menuLinks: [
      { label: 'University IT Advisory', href: '/services/education-consulting' },
      { label: 'Institutional Cybersecurity', href: '/industries/education' },
      { label: 'Educational Technology', href: '/services/education-consulting#edtech' },
      { label: 'Curriculum Advisory', href: '/services/education-consulting#curriculum' },
      { label: 'Faculty Development', href: '/corporate-training' },
    ],
    note:
      'Curriculum advisory, digital-learning infrastructure, and AI-literacy programs are discussed during institutional scoping. They are not published as accredited academic offerings.',
  },
];

export function getDivision(id: string): BusinessDivision | undefined {
  return DIVISIONS.find((division) => division.id === id);
}

export const HOMEPAGE_DIVISION_INTRO = {
  title: 'Integrated cybersecurity, technology, and professional development solutions',
  description:
    'DiTconsult helps organizations strengthen cybersecurity, modernize technology environments, develop workforce capabilities, and advance institutional technology initiatives through practical consulting and advisory services.',
};
