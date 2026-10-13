import { FAQ, FeaturedService, Industry, ProcessStep } from '@/types';

export const BRAND_TAGLINE = 'Secure. Transform. Protect.';

export const HERO = {
  headline: 'Identify the risks that matter. Strengthen the controls that last.',
  subheadline:
    'DiTconsult advises corporations, public-sector organizations, educational institutions, and growing businesses on multi-cloud security, risk management, compliance readiness, and capability development. An engagement begins with a scoped conversation and produces defined deliverables your teams can execute.',
  ctaPrimary: 'Schedule a Security Consultation',
  ctaSecondary: 'Explore Our Consulting Services',
  capabilities: [
    'AWS · Azure · Google Cloud',
    'Governance and compliance readiness',
    'Risk-prioritized remediation',
    'Corporate training and institutional advisory',
  ],
};

export const CORE_STRENGTHS = [
  {
    title: 'Security',
    description:
      'Assess identity, configuration, logging, and architecture across AWS, Azure, and Google Cloud so exposure is visible and ranked.',
    href: '/cloud-security',
  },
  {
    title: 'Transformation',
    description:
      'Support secure cloud adoption, modernization, and practical improvements to how teams build, deploy, and operate technology.',
    href: '/devsecops',
  },
  {
    title: 'Governance',
    description:
      'Prepare for NIST CSF, ISO/IEC 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP-aligned reviews through gap analysis and evidence planning. We do not issue certifications.',
    href: '/compliance',
  },
  {
    title: 'Capability development',
    description:
      'Equip employees, technical teams, leaders, and educational institutions with practical cybersecurity and IT skills they can apply in daily work.',
    href: '/corporate-training',
  },
];

export const CAPABILITY_STRIP = [
  { label: 'Secure', detail: 'Assess risk and strengthen preventive controls' },
  { label: 'Transform', detail: 'Modernize cloud, delivery, and IT operations securely' },
  { label: 'Protect', detail: 'Govern risk, prepare for review, and develop capability' },
  { label: 'Engage', detail: 'Scoped discovery, defined deliverables, clear next step' },
];

export const EDUCATION_CONSULTING = {
  title: 'Educational and Institutional Consulting',
  homepageHeadline: 'Institutional technology and cybersecurity advisory for education leaders',
  homepageCopy:
    'Educational consulting addresses campus technology strategy, student-data protection, IT governance, faculty development, and digital-learning infrastructure. It is complementary to corporate training, which focuses on workforce skills inside a company.',
  distinction:
    'Corporate training develops employee and technical-team skills. Educational consulting supports universities, schools, and education technology organizations on institutional security, governance, and capacity building. DiTconsult does not grant degrees or affiliate with any university.',
  href: '/services/education-consulting',
  cta: 'Discuss Institutional Consulting Needs',
};

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
    title: 'Multi-Cloud Security Consulting',
    problem: 'Misconfigurations, weak identity controls, and inconsistent logging leave data and workloads exposed across AWS, Azure, and Google Cloud.',
    approach:
      'Review identity, network, encryption, logging, and architecture so you receive one ranked view of cloud exposure.',
    deliverable: 'Executive risk summary, technical findings, and a risk-ranked remediation backlog.',
    href: '/cloud-security',
    icon: 'cloud-lock',
  },
  {
    id: 'risk-assessment',
    title: 'Cybersecurity Risk Assessment',
    problem: 'Leadership needs a shared view of cyber risk that connects technical findings to business consequences and funding decisions.',
    approach:
      'Evaluate controls, develop realistic risk scenarios, and present treatment options executives can prioritize.',
    deliverable: 'Executive risk summary, risk register, and a treatment roadmap.',
    href: '/security-risk-assessment',
    icon: 'shield',
  },
  {
    id: 'ai-remediation',
    title: 'AI-Assisted Detection and Remediation',
    problem: 'Findings accumulate faster than teams can triage, leaving high-impact issues open.',
    approach:
      'Use AI-assisted analysis to rank work and recommend controlled changes. Production changes require human approval.',
    deliverable: 'Prioritized remediation plan, recommended changes, and validation documentation.',
    href: '/ai-cloud-remediation',
    icon: 'vulnerability',
  },
  {
    id: 'compliance',
    title: 'Governance, Risk, and Compliance Advisory',
    problem: 'Customers and regulators expect documented controls and evidence, often faster than internal teams can produce them.',
    approach:
      'Map gaps to NIST CSF, ISO/IEC 27001, SOC 2, HIPAA, PCI DSS, CMMC, or FedRAMP readiness criteria selected for your scope.',
    deliverable: 'Gap matrix, control roadmap, and evidence-collection guidance. Independent auditors issue certifications.',
    href: '/compliance',
    icon: 'compliance',
  },
  {
    id: 'devsecops',
    title: 'DevSecOps and Infrastructure Security',
    problem: 'Controls added after deployment are costly and incomplete when teams ship infrastructure and software continuously.',
    approach:
      'Review architecture, CI/CD gates, infrastructure as code, and secrets handling so security fits how your teams already deliver.',
    deliverable: 'Architecture recommendations, pipeline control blueprint, and an implementation roadmap.',
    href: '/devsecops',
    icon: 'devsecops',
  },
  {
    id: 'vciso',
    title: 'Virtual CISO Advisory',
    problem: 'Growing organizations face rising security and compliance expectations before they can fund a full-time CISO.',
    approach:
      'Provide fractional security leadership for strategy, governance, board reporting, and program direction.',
    deliverable: 'Security roadmap, governance cadence, and executive reporting package.',
    href: '/virtual-ciso',
    icon: 'ciso',
  },
  {
    id: 'corporate-training',
    title: 'Corporate Cybersecurity and IT Training',
    problem: 'Employees and technical teams need practical skills to use technology securely, not only an annual awareness module.',
    approach:
      'Scope workforce programs from foundational to expert across awareness, cloud, operations, identity, governance, and responsible AI.',
    deliverable: 'A proposed curriculum, audience plan, and training discussion—schedules and credentials are confirmed after inquiry.',
    href: '/corporate-training',
    icon: 'data-protection',
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
    cta: 'Request a Cybersecurity Assessment',
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
    outcome: 'A readiness plan that clarifies owners, gaps, and what an independent auditor will expect.',
    href: '/compliance',
    cta: 'Discuss Compliance Readiness',
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
    outcome: 'Faster closure of high-risk issues with documented validation. No unsupervised production changes.',
    href: '/ai-cloud-remediation',
    cta: 'Discuss Remediation Support',
  },
];

export const FEATURED_TOOLS = [
  {
    title: 'Cyber Risk Score',
    description: 'An illustrative questionnaire that produces a directional risk rating and suggested discussion points. It is not an audit or certification.',
    href: '/cyber-risk-score',
    cta: 'Review the risk score tool',
  },
  {
    title: 'Compliance Calculator',
    description: 'An illustrative readiness estimator across common frameworks. Results are educational and do not constitute an attestation.',
    href: '/compliance-calculator',
    cta: 'Review the readiness tool',
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
    description: 'HIPAA Security Rule readiness, PHI access review, and incident-notification planning for care organizations.',
    outcomes: [
      'PHI access, encryption, and logging review',
      'HIPAA Security Rule gap analysis',
      'Ransomware and notification workflow planning',
    ],
    href: '/industries/healthcare',
    icon: 'healthcare',
  },
  {
    id: 'finance',
    name: 'Financial Services',
    description: 'PCI DSS and SOC 2 readiness advisory for banks, fintechs, and payment operations.',
    outcomes: [
      'Cardholder-data scope and control mapping',
      'Vendor and third-party risk alignment',
      'Audit evidence and examination prep',
    ],
    href: '/industries/finance',
    icon: 'finance',
  },
  {
    id: 'education',
    name: 'Education',
    description:
      'Institutional cybersecurity, campus IT governance, student-data protection, and faculty development for schools, universities, and EdTech teams.',
    outcomes: [
      'Campus technology and identity review',
      'FERPA-aware data-handling advisory',
      'Faculty development distinct from corporate training',
    ],
    href: '/industries/education',
    icon: 'education',
  },
  {
    id: 'government',
    name: 'Government Contractors',
    description: 'CMMC and FedRAMP readiness advisory for contractors handling CUI. We do not issue authorizations.',
    outcomes: [
      'NIST SP 800-171 and CMMC gap assessment',
      'SSP, POA&M, and evidence planning',
      'CUI scoping and subcontractor advisory',
    ],
    href: '/industries/government',
    icon: 'government',
  },
  {
    id: 'saas',
    name: 'SaaS and Cloud-Native',
    description: 'Cloud architecture review and SOC 2 readiness for product teams selling to enterprise buyers.',
    outcomes: [
      'CI/CD, IaC, and multi-tenant security review',
      'SOC 2 readiness and questionnaire support',
      'API and identity control advisory',
    ],
    href: '/industries/startups',
    icon: 'saas',
  },
  {
    id: 'smb',
    name: 'Growing Businesses',
    description: 'Prioritized security programs for organizations without a dedicated security team.',
    outcomes: [
      'Risk-ranked identity, email, and backup roadmap',
      'Customer and insurance questionnaire support',
      'Fractional security leadership options',
    ],
    href: '/industries/small-business',
    icon: 'business',
  },
  {
    id: 'cloud-teams',
    name: 'Cloud and Platform Teams',
    description: 'IAM, infrastructure-as-code, and pipeline control review for platform engineering teams.',
    outcomes: [
      'IaC and container security review',
      'Cloud IAM and least-privilege assessment',
      'CI/CD guardrail and detection design',
    ],
    href: '/industries/cloud-teams',
    icon: 'saas',
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
      'We discuss your environment, regulatory context, constraints, and goals. After you submit the form, DiTconsult confirms receipt and proposes a short discovery call. Following that call, you receive a recommended scope—such as a Cloud Posture Review, Compliance Readiness Sprint, Remediation Acceleration package, or a training discussion—before any commitment.',
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
      'Yes. DiTconsult provides compliance readiness advisory: gap analysis, control mapping, evidence guidance, and remediation planning. We do not issue certifications, attestations, or regulatory approvals. Independent auditors and certifying bodies perform those functions.',
  },
  {
    question: 'Does DiTconsult replace an internal security team?',
    answer:
      'No. We complement your team with specialized expertise, program structure, and executive reporting—especially valuable when a full-time CISO or dedicated cloud security function is not yet in place.',
  },
  {
    question: 'How is corporate training different from educational consulting?',
    answer:
      'Corporate training develops workforce skills inside an organization—awareness, technical competence, and leadership education. Educational and institutional consulting advises schools and universities on campus cybersecurity, IT governance, digital-learning infrastructure, and faculty development. Many institutions use both. DiTconsult does not grant degrees or affiliate with any university.',
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
  headline: 'Start with a scoped conversation',
  description:
    'Request a DiTconsult consultation to review cloud risk, governance readiness, remediation priorities, corporate training, or educational consulting. After you submit the form, we confirm receipt, hold a short discovery call, and recommend a next engagement. DiTconsult does not issue certifications.',
  bullets: [
    'State a clear reason to reach out: security, transformation, governance, or capability development',
    'What happens next: confirmation, discovery call, scoped recommendation',
    'Do not include passwords, access keys, or incident evidence in the form',
  ],
};
