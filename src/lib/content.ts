import { FAQ, FeaturedService, Industry, ProcessStep } from '@/types';

export const BRAND_TAGLINE = 'Secure. Transform. Protect.';

export const HERO = {
  headline: 'Secure your cloud. Reduce your risk. Build digital trust.',
  subheadline:
    'DiTconsult helps organizations strengthen multi-cloud security, improve compliance readiness, and remediate the risks that matter most—with clear priorities, not generic reports. We also provide corporate cybersecurity and IT training to help teams build practical skills.',
  ctaPrimary: 'Book a Security Consultation',
  ctaSecondary: 'Explore Our Services',
  capabilities: [
    'AWS · Azure · Google Cloud',
    'Compliance readiness advisory',
    'Risk-prioritized remediation',
    'Corporate cybersecurity & IT training',
  ],
};

export const CORE_STRENGTHS = [
  {
    title: 'Multi-cloud security',
    description:
      'Assess and harden AWS, Azure, and Google Cloud environments—identity, configuration, logging, and architecture.',
    href: '/cloud-security',
  },
  {
    title: 'Compliance readiness',
    description:
      'Gap analysis and remediation planning for NIST CSF, ISO 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP readiness.',
    href: '/compliance',
  },
  {
    title: 'Risk-prioritized remediation',
    description:
      'Turn findings into an actionable backlog ranked by business impact, with guided fixes and validation evidence.',
    href: '/ai-cloud-remediation',
  },
];

export const CAPABILITY_STRIP = [
  { label: 'Multi-cloud security', detail: 'AWS, Azure, and Google Cloud' },
  { label: 'Compliance readiness', detail: 'NIST CSF, ISO 27001, SOC 2, and more' },
  { label: 'Risk-prioritized remediation', detail: 'Fix what matters first' },
  { label: 'Executive clarity', detail: 'Business-ready summaries and roadmaps' },
];

export const CUSTOMER_PROBLEMS = [
  {
    title: 'Cloud misconfigurations',
    description:
      'Public storage, excessive permissions, and configuration drift create exposure across accounts and environments.',
  },
  {
    title: 'Excessive identity permissions',
    description:
      'Over-privileged roles, weak MFA adoption, and unclear access paths increase the blast radius of compromise.',
  },
  {
    title: 'Security and compliance gaps',
    description:
      'Audit requirements outpace internal capacity, leaving control gaps and unclear evidence collection.',
  },
  {
    title: 'Vulnerability backlogs',
    description:
      'Findings accumulate faster than teams can remediate, without consistent prioritization against business risk.',
  },
  {
    title: 'Incident-readiness weaknesses',
    description:
      'Playbooks exist on paper but are untested, leaving teams uncertain about roles, timing, and communication.',
  },
  {
    title: 'Limited security leadership',
    description:
      'Growing organizations need strategic guidance, board reporting, and program direction without a full-time CISO.',
  },
  {
    title: 'Multi-cloud visibility gaps',
    description:
      'Security tooling and logging vary by platform, making it difficult to see risk consistently across the estate.',
  },
];

export const FEATURED_SERVICES: FeaturedService[] = [
  {
    id: 'cloud-security',
    title: 'Cloud Security Assessment',
    problem: 'Misconfigurations and weak controls expose data and workloads across cloud environments.',
    approach:
      'Assess identity, network, logging, encryption, and configuration posture across AWS, Azure, and Google Cloud.',
    deliverable: 'Risk-ranked findings report, remediation backlog, and executive summary.',
    href: '/cloud-security',
    icon: 'cloud-lock',
  },
  {
    id: 'compliance',
    title: 'Compliance Readiness',
    problem: 'Regulatory and customer requirements demand structured controls and audit-ready evidence.',
    approach:
      'Map gaps against NIST CSF, ISO 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP readiness criteria.',
    deliverable: 'Compliance gap matrix, control roadmap, and evidence collection guidance.',
    href: '/compliance',
    icon: 'compliance',
  },
  {
    id: 'ai-remediation',
    title: 'Risk-Prioritized Remediation',
    problem: 'Findings accumulate faster than teams can triage and remediate with confidence.',
    approach:
      'Prioritize by business risk and guide controlled remediation—with human approval and validation evidence.',
    deliverable: 'Prioritized remediation plan, change recommendations, and validation reporting.',
    href: '/ai-cloud-remediation',
    icon: 'shield',
  },
];

export const ENGAGEMENT_PACKAGES = [
  {
    id: 'cloud-posture-review',
    name: 'Cloud Posture Review',
    bestFor: 'Teams that need a clear view of multi-cloud risk before a larger program.',
    includes: [
      'Scoped AWS, Azure, and/or Google Cloud assessment',
      'Executive risk summary',
      'Risk-ranked remediation backlog',
      'Debrief with recommended next steps',
    ],
    outcome: 'A prioritized action list your engineering and leadership teams can execute.',
    href: '/cloud-security',
    cta: 'Request this package',
  },
  {
    id: 'compliance-readiness-sprint',
    name: 'Compliance Readiness Sprint',
    bestFor: 'Organizations preparing for SOC 2, ISO 27001, HIPAA, PCI DSS, CMMC, or FedRAMP-aligned reviews.',
    includes: [
      'Framework scoping and control gap analysis',
      'Compliance gap matrix',
      'Evidence collection guidance',
      'Remediation roadmap aligned to audit timelines',
    ],
    outcome: 'A readiness plan that clarifies owners, gaps, and what auditors will expect.',
    href: '/compliance',
    cta: 'Request this package',
  },
  {
    id: 'remediation-acceleration',
    name: 'Remediation Acceleration',
    bestFor: 'Teams with open cloud findings that need prioritized, controlled remediation support.',
    includes: [
      'Finding triage by business risk',
      'Guided remediation recommendations',
      'Human-approved change planning',
      'Validation and evidence documentation',
    ],
    outcome: 'Faster closure of high-risk issues with audit-ready validation.',
    href: '/ai-cloud-remediation',
    cta: 'Request this package',
  },
];

export const FEATURED_TOOLS = [
  {
    title: 'Cyber Risk Score',
    description: 'Answer a short set of questions and receive a practical risk rating with recommended next actions.',
    href: '/cyber-risk-score',
    cta: 'Get your risk score',
  },
  {
    title: 'Compliance Calculator',
    description: 'Estimate readiness across major frameworks and identify where advisory support will help most.',
    href: '/compliance-calculator',
    cta: 'Check compliance readiness',
  },
];

export const EXAMPLE_ENGAGEMENTS = [
  {
    title: 'Multi-cloud posture review for a SaaS scale-up',
    challenge:
      'A growing SaaS team needed visibility into misconfigurations and identity risk across AWS and Azure before enterprise customer reviews.',
    scope: 'Cloud security assessment, identity and storage review, remediation backlog.',
    approach:
      'Mapped critical assets, assessed configuration and access controls, and ranked findings by exploitability and business impact.',
    outcomePattern:
      'Leadership received an executive summary and engineers received a prioritized backlog with clear owners and next steps.',
  },
  {
    title: 'SOC 2 readiness advisory for a financial services firm',
    challenge:
      'A financial services organization needed structured readiness work before engaging an auditor for SOC 2.',
    scope: 'Compliance gap analysis, control mapping, evidence planning, remediation roadmap.',
    approach:
      'Aligned scope to Trust Services Criteria, identified control gaps, and built a practical remediation sequence.',
    outcomePattern:
      'The team entered the audit cycle with clearer ownership, documentation priorities, and a defined readiness plan.',
  },
  {
    title: 'Incident-response readiness for a healthcare organization',
    challenge:
      'A healthcare organization had an incident plan on paper but limited practice across clinical, IT, and leadership roles.',
    scope: 'Playbook refinement, tabletop exercises, communication workflow alignment.',
    approach:
      'Simplified role-based playbooks and facilitated exercises focused on containment and notification decisions.',
    outcomePattern:
      'Teams left with tested procedures, clearer escalation paths, and an improvement plan for the next cycle.',
  },
];

export const AI_REMEDIATION_WORKFLOW = [
  {
    step: 1,
    title: 'Discover assets and configurations',
    description: 'Inventory cloud resources, policies, and configuration baselines across connected environments.',
  },
  {
    step: 2,
    title: 'Detect misconfigurations and drift',
    description: 'Identify policy violations, insecure defaults, and changes that increase exposure.',
  },
  {
    step: 3,
    title: 'Prioritize by business risk',
    description: 'Rank findings using exploitability, blast radius, data sensitivity, and compliance relevance.',
  },
  {
    step: 4,
    title: 'Recommend controlled remediation',
    description: 'Propose specific changes with least-privilege principles—always subject to human review and approval.',
  },
  {
    step: 5,
    title: 'Validate and document changes',
    description: 'Confirm remediation effectiveness, preserve audit evidence, and support rollback planning.',
  },
  {
    step: 6,
    title: 'Monitor posture continuously',
    description: 'Track configuration drift and emerging misconfigurations to sustain improvement over time.',
  },
];

export const AI_REMEDIATION_GUARDRAILS = [
  'Human oversight and approval before production changes',
  'Least-privilege access for assessment and remediation activities',
  'Audit trails and evidence preservation for accountability',
  'Rollback readiness for recommended configuration changes',
  'No claim of unsupervised autonomous production remediation',
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Protect patient data and strengthen HIPAA-aligned security controls.',
    outcomes: [
      'PHI access and encryption review',
      'HIPAA security readiness advisory',
      'Incident notification workflow planning',
    ],
    href: '/industries/healthcare',
    icon: 'healthcare',
  },
  {
    id: 'finance',
    name: 'Financial Services',
    description: 'Support PCI DSS and SOC 2 readiness for regulated financial operations.',
    outcomes: [
      'Payment and data-flow control mapping',
      'Third-party and vendor risk alignment',
      'Audit evidence preparation guidance',
    ],
    href: '/industries/finance',
    icon: 'finance',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Secure student and institutional data across campus and cloud systems.',
    outcomes: [
      'Identity and access governance review',
      'FERPA-aware data protection planning',
      'Security awareness for faculty and staff',
    ],
    href: '/industries/education',
    icon: 'education',
  },
  {
    id: 'government',
    name: 'Government Contractors',
    description: 'Prepare for CMMC and FedRAMP-aligned control expectations.',
    outcomes: [
      'Control gap assessment against contract requirements',
      'Documentation and evidence readiness',
      'Supply-chain security advisory',
    ],
    href: '/industries/government',
    icon: 'government',
  },
  {
    id: 'saas',
    name: 'SaaS and Cloud-Native',
    description: 'Build secure architecture and compliance programs that scale with product growth.',
    outcomes: [
      'Secure CI/CD and IaC review',
      'Customer trust and SOC 2 readiness planning',
      'Multi-tenant and API security advisory',
    ],
    href: '/industries/startups',
    icon: 'saas',
  },
  {
    id: 'smb',
    name: 'Growing Businesses',
    description: 'Right-sized security programs for teams with limited dedicated security staff.',
    outcomes: [
      'Prioritized risk reduction roadmap',
      'Policy and process templates scaled to team size',
      'Fractional security leadership options',
    ],
    href: '/industries/small-business',
    icon: 'business',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Discover',
    description: 'Understand your environment, stakeholders, regulatory context, and business priorities.',
    clientExpectation: 'Kickoff workshop, scope agreement, and access planning.',
  },
  {
    number: 2,
    title: 'Assess',
    description: 'Evaluate technical controls, processes, and gaps using structured assessment methods.',
    clientExpectation: 'Interviews, configuration review, and evidence collection.',
  },
  {
    number: 3,
    title: 'Prioritize',
    description: 'Rank findings by business impact, exploitability, and compliance relevance.',
    clientExpectation: 'Executive risk summary and ranked remediation backlog.',
  },
  {
    number: 4,
    title: 'Remediate and Improve',
    description: 'Guide implementation, validate improvements, and establish ongoing monitoring practices.',
    clientExpectation: 'Remediation support, validation reporting, and next-step roadmap.',
  },
];

export const DELIVERABLES = [
  {
    title: 'Executive risk summary',
    description: 'Plain-language overview of top risks, business impact, and recommended priorities.',
  },
  {
    title: 'Technical findings report',
    description: 'Detailed evidence of gaps with clear reproduction steps and affected assets.',
  },
  {
    title: 'Risk-ranked remediation backlog',
    description: 'Actionable tasks with owners, effort estimates, and dependency notes.',
  },
  {
    title: 'Compliance gap matrix',
    description: 'Control mapping against selected frameworks with readiness status and evidence needs.',
  },
  {
    title: 'Architecture recommendations',
    description: 'Secure design guidance for cloud, identity, logging, and network boundaries.',
  },
  {
    title: 'Incident-response playbooks',
    description: 'Role-based procedures for detection, containment, communication, and recovery.',
  },
  {
    title: 'Implementation roadmap',
    description: 'Phased plan aligned to capacity, risk reduction, and audit timelines.',
  },
  {
    title: 'Progress and validation reporting',
    description: 'Status updates and re-assessment evidence to confirm improvements.',
  },
];

export const ENGAGEMENT_INCLUDES = [
  'Structured discovery aligned to your business objectives',
  'Technical assessment with documented evidence',
  'Executive and engineering-ready reporting formats',
  'Risk-prioritized recommendations—not undifferentiated findings lists',
  'Framework mapping where compliance readiness is in scope',
  'Clear next steps whether you need advisory support or hands-on guidance',
];

export const HOMEPAGE_FAQS: FAQ[] = [
  {
    question: 'What happens during the initial consultation?',
    answer:
      'We discuss your environment, regulatory context, current challenges, and goals. Within one business day of your inquiry, DiTconsult confirms receipt and proposes a short discovery call. After that call, you receive a recommended engagement scope—such as a Cloud Posture Review, Compliance Readiness Sprint, or Remediation Acceleration package—before any commitment.',
  },
  {
    question: 'Which cloud platforms do you support?',
    answer:
      'DiTconsult assesses and advises across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud. Multi-cloud and hybrid environments are supported.',
  },
  {
    question: 'Does DiTconsult perform remediation or only assessments?',
    answer:
      'Both, depending on scope. Assessments identify and prioritize gaps; remediation engagements include guided implementation support, validation, and documentation. AI-assisted workflows support prioritization and recommendations—production changes always require human approval.',
  },
  {
    question: 'Can you help with SOC 2, HIPAA, PCI DSS, or ISO 27001 readiness?',
    answer:
      'Yes. DiTconsult provides compliance readiness advisory—gap analysis, control mapping, evidence guidance, and remediation planning. We do not issue certifications or attestations; auditors and certifying bodies perform those independently.',
  },
  {
    question: 'Does DiTconsult replace an internal security team?',
    answer:
      'No. We complement your team with specialized expertise, program structure, and executive reporting—especially valuable when a full-time CISO or dedicated cloud security function is not yet in place.',
  },
  {
    question: 'How are sensitive client data and credentials protected?',
    answer:
      'Access is limited to agreed scope, least-privilege principles, and documented handling procedures. We do not request passwords, long-lived access keys, or payment data through the general contact form. Credential sharing follows your organization’s secure onboarding process.',
  },
  {
    question: 'What deliverables does a client receive?',
    answer:
      'Typical outputs include an executive risk summary, technical findings, a risk-ranked remediation backlog, compliance gap matrix (when in scope), architecture recommendations, and an implementation roadmap. Deliverables vary by engagement package.',
  },
  {
    question: 'How long does an engagement typically take?',
    answer:
      'Duration depends on environment size, scope, framework requirements, and remediation depth. A focused assessment may take a few weeks; broader programs span multiple phases. We provide a scoped timeline after discovery.',
  },
];

export const FINAL_CTA = {
  headline: 'Get a clear next step for your security posture',
  description:
    'Book a DiTconsult consultation to review your cloud, compliance, or remediation priorities. After you submit the form, we confirm receipt, schedule a short discovery call, and recommend the right packaged engagement.',
  bullets: [
    'Specific reason to reach out: cloud risk, compliance readiness, or remediation backlog',
    'What happens next: confirmation, discovery call, scoped recommendation',
    'No passwords, access keys, or incident evidence needed in the form',
  ],
};
