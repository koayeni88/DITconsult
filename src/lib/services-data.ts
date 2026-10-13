import { ServicePageData } from '@/types';

const sharedProcess = [
  { title: 'Discover', description: 'Confirm scope, stakeholders, systems in scope, access needs, and success criteria.' },
  { title: 'Assess', description: 'Collect evidence through interviews, configuration review, and testing only where authorized.' },
  { title: 'Prioritize', description: 'Rank findings by business impact, exposure, and compliance relevance—not volume.' },
  { title: 'Deliver', description: 'Provide reports, a remediation roadmap, and optional validation after agreed changes.' },
];

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  'cloud-security': {
    slug: 'cloud-security',
    title: 'Multi-Cloud Security Consulting',
    metaTitle: 'Multi-Cloud Security Consulting | AWS, Azure, and Google Cloud',
    metaDescription:
      'Multi-cloud security consulting across AWS, Azure, and Google Cloud. Review identity, configuration, logging, and architecture, then receive a risk-ranked remediation plan.',
    keywords: ['multi-cloud security consulting', 'cloud security assessment', 'AWS security', 'Azure security', 'Google Cloud security'],
    subtitle: 'Cloud posture and architecture',
    heroDescription:
      'Review identity, network, storage, encryption, and logging across AWS, Azure, and Google Cloud. Findings are ranked so engineering and leadership can act on the same list.',
    problem:
      'Cloud estates change quickly. Public storage, over-privileged identities, and uneven logging create exposure that perimeter controls do not address. This service examines the cloud environment itself—not the enterprise risk register, scanner backlog, or delivery pipeline.',
    audience: [
      'Organizations operating or migrating to AWS, Azure, or Google Cloud',
      'Teams preparing for customer security reviews or independent audits',
      'Engineering and security leaders who need a ranked remediation backlog',
    ],
    warningSigns: [
      'Publicly accessible storage or databases appear in scans',
      'IAM roles carry broad administrative permissions',
      'Logging and monitoring differ by account or subscription',
      'Security findings accumulate faster than they are closed',
    ],
    included: [
      'Identity and access management review',
      'Network and segmentation review',
      'Storage and encryption configuration review',
      'Logging, monitoring, and alerting review',
      'Configuration baseline and drift analysis',
      'Compliance-relevant control mapping when that work is in scope',
    ],
    process: sharedProcess,
    deliverables: [
      'Executive risk summary',
      'Technical findings with supporting evidence',
      'Risk-ranked remediation backlog',
      'Architecture and hardening recommendations',
      'Optional re-validation after agreed remediation',
    ],
    frameworks: ['CIS Benchmarks', 'NIST CSF', 'CSA CCM'],
    platforms: ['AWS', 'Microsoft Azure', 'Google Cloud'],
    benefits: [
      'A single ranked view of cloud exposure instead of disconnected platform reports',
      'Clear owners and next actions for identity, storage, network, and logging gaps',
      'Evidence that supports later compliance readiness work without treating this as an audit',
    ],
    nextStep:
      'Request a cybersecurity assessment to confirm platforms in scope, access needs, and whether a Cloud Posture Review is the right starting point.',
    ctaLabel: 'Request a Cybersecurity Assessment',
    ctaHref: '/contact?service=cloud-security',
    faqs: [
      {
        question: 'Do you need production access?',
        answer:
          'Access depends on scope. Many assessments use read-only access, configuration exports, and interviews. We agree least-privilege access before work begins.',
      },
      {
        question: 'Can you assess more than one cloud provider in a single engagement?',
        answer:
          'Yes. Multi-cloud and hybrid reviews are common. You receive one risk view with platform-specific remediation guidance.',
      },
      {
        question: 'How is this different from a risk assessment or remediation engagement?',
        answer:
          'This service evaluates cloud configuration, identity, and architecture. A cybersecurity risk assessment describes enterprise risk in business terms. AI-assisted detection and remediation focuses on closing known findings under human approval.',
      },
    ],
  },
  'ai-cloud-remediation': {
    slug: 'ai-cloud-remediation',
    title: 'AI-Assisted Security Detection and Remediation',
    metaTitle: 'AI-Assisted Security Detection and Remediation',
    metaDescription:
      'AI-assisted detection and prioritization of security findings across AWS, Azure, and Google Cloud. Production changes require human review and approval.',
    keywords: ['AI-assisted security', 'cloud misconfiguration remediation', 'multi-cloud remediation', 'CSPM'],
    subtitle: 'Detection, triage, and controlled change',
    heroDescription:
      'Use AI-assisted detection and prioritization to move security findings into a controlled remediation plan. People review and approve every production change.',
    problem:
      'Findings accumulate across accounts and services. Manual triage slows closure and leaves high-impact issues open longer than the business can accept. This service is for closing known work—not for producing a first-time cloud assessment or an enterprise risk register.',
    audience: [
      'Teams with large cloud estates and growing finding backlogs',
      'Organizations that need faster, risk-aware remediation planning',
      'Security and platform teams that must document change evidence',
    ],
    warningSigns: [
      'Critical misconfigurations remain open for weeks',
      'Prioritization methods differ across cloud platforms',
      'Remediation work lacks validation or written evidence',
      'Configuration drift reintroduces issues that were already closed',
    ],
    included: [
      'Cloud asset and configuration discovery',
      'Misconfiguration and policy-drift detection',
      'AI-assisted risk prioritization with business context',
      'Human-reviewed remediation recommendations',
      'Change validation and evidence documentation',
      'Guidance for ongoing posture monitoring',
    ],
    process: [
      { title: 'Discover', description: 'Inventory cloud assets, policies, and configuration baselines.' },
      { title: 'Detect', description: 'Identify misconfigurations, drift, and policy violations.' },
      { title: 'Prioritize', description: 'Rank findings by risk context, not ticket volume.' },
      { title: 'Remediate', description: 'Guide approved changes with validation and audit evidence. Production changes require human approval.' },
      { title: 'Monitor', description: 'Track posture and reduce recurrence through scheduled review.' },
    ],
    deliverables: [
      'Prioritized remediation backlog',
      'Step-by-step change recommendations',
      'Validation and evidence reports',
      'Executive progress summaries',
    ],
    frameworks: ['CIS Benchmarks', 'NIST CSF'],
    platforms: ['AWS', 'Microsoft Azure', 'Google Cloud'],
    benefits: [
      'Faster triage of high-impact findings without unsupervised production changes',
      'Documented recommendations, approvals, and validation for audit evidence',
      'A repeatable method for ranking work by business risk rather than ticket volume',
    ],
    nextStep:
      'Discuss remediation support if you already have findings and need a controlled plan to close the highest-risk items first.',
    ctaLabel: 'Discuss Remediation Support',
    ctaHref: '/contact?service=ai-remediation',
    faqs: [
      {
        question: 'Does AI make changes automatically in production?',
        answer:
          'No. AI assists with detection, prioritization, and recommendation. Production changes require human review and approval. Rollback planning and least-privilege access apply throughout.',
      },
      {
        question: 'How is auditability maintained?',
        answer:
          'Recommendations, approvals, and validation results are documented to support internal audit and compliance evidence needs.',
      },
    ],
  },
  'vulnerability-assessment': {
    slug: 'vulnerability-assessment',
    title: 'Vulnerability Assessment and Remediation',
    metaTitle: 'Vulnerability Assessment and Remediation Consulting',
    metaDescription:
      'Risk-based vulnerability assessment and remediation guidance for cloud infrastructure and other systems in scope. Findings are ranked by exploitability, exposure, and business impact.',
    keywords: ['vulnerability assessment', 'vulnerability remediation', 'risk-based patching', 'security scanning'],
    subtitle: 'Risk-based triage',
    heroDescription:
      'Convert scanner output into a remediation backlog ranked by exploitability, exposure, and business impact—not by finding count alone.',
    problem:
      'Vulnerability scanners produce large volumes of findings. Without risk context, teams patch the wrong items first or stall entirely.',
    audience: [
      'Teams overloaded by scanner output',
      'Organizations preparing for audits or coordinated penetration testing',
      'Engineering leaders who need a defensible prioritization method',
    ],
    warningSigns: [
      'Critical CVEs remain open past agreed SLA windows',
      'Findings lack consistent scoring or named owners',
      'Scan results are not tied to asset criticality',
      'The same findings return after incomplete fixes',
    ],
    included: [
      'Vulnerability discovery and inventory alignment',
      'Risk-based prioritization method',
      'Remediation guidance with ownership assignment',
      'Compliance correlation when that work is in scope',
      'Validation and re-scan coordination',
    ],
    process: sharedProcess,
    deliverables: [
      'Risk-ranked vulnerability backlog',
      'Remediation playbooks for the highest-priority findings',
      'Executive summary of exposure trends',
      'Validation evidence after agreed remediation',
    ],
    frameworks: ['CVSS contextualization', 'NIST CSF'],
    platforms: ['Cloud infrastructure', 'Endpoints', 'Applications (scope-dependent)'],
    benefits: [
      'A backlog ranked by exploitability and business impact rather than finding count',
      'Named owners and guidance for the highest-priority items',
      'Validation evidence after agreed remediation',
    ],
    nextStep:
      'Speak with a security consultant if scanner output is growing faster than your team can close it.',
    ctaLabel: 'Speak With a Security Consultant',
    ctaHref: '/contact?service=vulnerability-management',
    faqs: [
      {
        question: 'Do you run scans or use our existing tools?',
        answer:
          'We can work with your existing scanning tools and processes, or help evaluate tooling gaps during scope planning.',
      },
    ],
  },
  'compliance': {
    slug: 'compliance',
    title: 'Governance, Risk, and Compliance Advisory',
    metaTitle: 'Governance, Risk, and Compliance Advisory | SOC 2, HIPAA, ISO/IEC 27001',
    metaDescription:
      'GRC advisory for NIST CSF, ISO/IEC 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP readiness. Gap analysis, control mapping, and evidence planning. DiTconsult does not issue certifications.',
    keywords: ['governance risk compliance', 'compliance readiness', 'SOC 2 readiness', 'HIPAA compliance advisory', 'ISO 27001 readiness'],
    subtitle: 'Readiness for independent review',
    heroDescription:
      'Structure cybersecurity governance, control ownership, and evidence so your team can enter an independent review with a clear plan. DiTconsult advises on readiness; independent auditors and certifying bodies issue certifications.',
    problem:
      'Framework requirements are detailed and change over time. Teams struggle to map controls, collect evidence, and close gaps before review deadlines. This service is readiness advisory—not a cloud configuration assessment and not a certification.',
    audience: [
      'Organizations preparing for SOC 2, ISO 27001, or industry-specific reviews',
      'Healthcare and financial services teams with regulatory obligations',
      'Government contractors aligning to CMMC or FedRAMP expectations',
    ],
    warningSigns: [
      'Policies exist but are not followed in daily operations',
      'Audit preparation requires weeks of unstructured effort',
      'Control owners are unclear on evidence requirements',
      'Gaps appear late in the audit or assessment cycle',
    ],
    included: [
      'Framework selection and scoping guidance',
      'Control gap analysis and maturity review',
      'Policy and procedure advisory',
      'Evidence collection planning',
      'Remediation roadmap aligned to review timelines',
      'Auditor coordination support (advisory only)',
    ],
    process: sharedProcess,
    deliverables: [
      'Compliance gap matrix',
      'Control implementation roadmap',
      'Evidence collection checklist',
      'Executive readiness summary',
    ],
    frameworks: ['NIST CSF', 'ISO/IEC 27001', 'SOC 2', 'HIPAA', 'PCI DSS', 'CMMC', 'FedRAMP (readiness)'],
    platforms: ['Cloud and on-premises (scope-dependent)'],
    benefits: [
      'A control gap matrix tied to the frameworks in your agreed scope',
      'Clearer ownership of evidence collection before an auditor is engaged',
      'A remediation sequence that leadership can fund against review timelines',
    ],
    nextStep:
      'Discuss compliance readiness if you are preparing for SOC 2, ISO/IEC 27001, HIPAA, PCI DSS, CMMC, or a related review.',
    ctaLabel: 'Discuss Compliance Readiness',
    ctaHref: '/contact?service=compliance',
    faqs: [
      {
        question: 'Do you provide certification or attestation?',
        answer:
          'No. DiTconsult provides readiness advisory—gap analysis, remediation planning, and evidence guidance. Certification and attestation are performed by independent auditors and certifying bodies.',
      },
    ],
  },
  'security-risk-assessment': {
    slug: 'security-risk-assessment',
    title: 'Cybersecurity Risk Assessment and Management',
    metaTitle: 'Cybersecurity Risk Assessment and Management Consulting',
    metaDescription:
      'Cybersecurity risk assessments that describe exposure in business terms, evaluate controls, and produce a prioritized treatment roadmap for executives and boards.',
    keywords: ['cybersecurity risk assessment', 'security risk assessment', 'risk management consulting', 'security posture'],
    subtitle: 'Enterprise risk and treatment decisions',
    heroDescription:
      'Describe security posture in business terms: control gaps, realistic threat scenarios, and prioritized treatment options leadership can fund and track.',
    problem:
      'Leadership needs a shared view of cyber risk that connects technical findings to business consequences—not disconnected scan results or a cloud configuration inventory.',
    audience: [
      'Executives planning security investment',
      'Boards requesting cyber risk reporting',
      'Teams preparing for merger diligence or insurance reviews',
    ],
    warningSigns: [
      'Leadership does not share a view of the top cyber risks',
      'Security spending is not tied to measurable risk reduction',
      'IT and business units use inconsistent risk language',
    ],
    included: [
      'Current-state control evaluation',
      'Threat and vulnerability correlation',
      'Risk scenario development',
      'Risk prioritization and treatment options',
      'Executive reporting package',
    ],
    process: sharedProcess,
    deliverables: [
      'Executive risk summary',
      'Risk register with treatment recommendations',
      'Control maturity assessment',
      'Implementation roadmap',
    ],
    frameworks: ['NIST CSF', 'NIST SP 800-30 (risk guidance)', 'ISO/IEC 27005'],
    platforms: ['Enterprise-wide (scope-defined)'],
    benefits: [
      'A shared risk language for executives, boards, and technical teams',
      'Treatment options tied to business impact rather than finding volume',
      'A foundation for later compliance, remediation, or virtual CISO work',
    ],
    nextStep:
      'Schedule a security consultation to define assessment scope, stakeholders, and the decisions this work should support.',
    ctaLabel: 'Schedule a Security Consultation',
    ctaHref: '/contact?service=risk-assessment',
    faqs: [
      {
        question: 'Is this different from a penetration test?',
        answer:
          'Yes. A risk assessment evaluates controls and exposure across the agreed scope. Penetration testing validates specific attack paths. DiTconsult coordinates penetration testing; the two services can complement each other when both are in scope.',
      },
      {
        question: 'How is this different from a cloud security assessment?',
        answer:
          'A multi-cloud security review examines configuration, identity, and architecture on AWS, Azure, and Google Cloud. This service produces an enterprise risk view and treatment options. The two can be sequenced when both are needed.',
      },
    ],
  },
  'incident-response': {
    slug: 'incident-response',
    title: 'Incident Response Planning',
    metaTitle: 'Incident Response Planning and Tabletop Exercises',
    metaDescription:
      'Incident response planning, playbooks, tabletop exercises, and communication workflows aligned to your organization and notification requirements.',
    keywords: ['incident response planning', 'tabletop exercises', 'IR playbooks', 'incident readiness'],
    subtitle: 'Prepared response',
    heroDescription:
      'Build and exercise incident response procedures so roles, notification paths, and containment decisions are clear before an event occurs.',
    problem:
      'Untested plans break under pressure. Unclear roles, missing communication paths, and outdated procedures extend impact and recovery time.',
    audience: [
      'Organizations without formal incident response procedures',
      'Teams that have not exercised their plan in 12 or more months',
      'Regulated industries with breach notification requirements',
    ],
    warningSigns: [
      'Escalation paths are undocumented',
      'Legal, communications, and IT roles are undefined during incidents',
      'Backups have not been tested for recovery scenarios',
      'Tabletop exercises have not been conducted',
    ],
    included: [
      'Incident response plan and playbook development',
      'Role and responsibility mapping',
      'Tabletop exercise facilitation',
      'Communication and notification templates',
      'Post-exercise improvement planning',
      'Integration with existing security tooling when in scope',
    ],
    process: sharedProcess,
    deliverables: [
      'Incident response playbooks',
      'Communication templates',
      'Tabletop exercise report',
      'Improvement action plan',
    ],
    frameworks: ['NIST CSF Respond function', 'NIST 800-61'],
    platforms: ['Organization-wide'],
    benefits: [
      'Role-based procedures teams can follow under pressure',
      'Practiced notification and escalation paths',
      'An improvement plan after tabletop exercises',
    ],
    nextStep:
      'Schedule a security consultation to discuss readiness planning. Active-incident support is scoped separately.',
    ctaLabel: 'Schedule a Security Consultation',
    ctaHref: '/contact?service=incident-response',
    faqs: [
      {
        question: 'Do you provide 24/7 incident response retainer services?',
        answer:
          'Scope varies by engagement. Contact us to discuss readiness planning versus support during an active incident.',
      },
    ],
  },
  'devsecops': {
    slug: 'devsecops',
    title: 'DevSecOps and Infrastructure Security',
    metaTitle: 'DevSecOps and Infrastructure Security Consulting',
    metaDescription:
      'Security advisory for CI/CD pipelines, infrastructure as code, containers, and cloud architecture. Practical controls designed to fit how your teams already build and deploy.',
    keywords: ['DevSecOps consulting', 'infrastructure security', 'CI/CD security', 'infrastructure as code security'],
    subtitle: 'Secure delivery and infrastructure',
    heroDescription:
      'Build security into design, pipeline, and release workflows—architecture review, CI/CD controls, and infrastructure-as-code guidance your developers can adopt.',
    problem:
      'Controls added after deployment are costly and incomplete. Teams need security in design, build, and release—not only in a point-in-time production review.',
    audience: [
      'Platform and DevOps teams scaling cloud delivery',
      'Organizations adopting infrastructure as code',
      'SaaS companies shipping frequently to production',
    ],
    warningSigns: [
      'CI/CD pipelines have no security gates',
      'Containers and infrastructure as code deploy without scanning',
      'Architecture reviews are skipped under delivery pressure',
      'Secrets or credentials appear in repositories',
    ],
    included: [
      'Secure architecture design review',
      'CI/CD pipeline security integration',
      'Container and image security advisory',
      'Infrastructure-as-code scanning guidance',
      'Secrets management recommendations',
      'Developer security workflow design',
    ],
    process: sharedProcess,
    deliverables: [
      'Architecture security recommendations',
      'Pipeline security control blueprint',
      'Infrastructure-as-code and container hardening guide',
      'Implementation roadmap',
    ],
    frameworks: ['CIS Benchmarks', 'NIST SSDF', 'OWASP'],
    platforms: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes (scope-dependent)'],
    benefits: [
      'Security checks placed where developers already work',
      'Clearer handling of secrets, images, and infrastructure as code',
      'Architecture guidance that can be adopted incrementally',
    ],
    nextStep:
      'Explore cloud security and delivery controls if your teams are scaling CI/CD, infrastructure as code, or multi-cloud release processes.',
    ctaLabel: 'Explore Cloud Security Solutions',
    ctaHref: '/contact?service=devsecops',
    faqs: [
      {
        question: 'Will this slow our release cadence?',
        answer:
          'Well-placed checks run early in the pipeline and reduce late-stage failures and rework. We design controls to fit your delivery model; we do not promise a specific change in release speed.',
      },
    ],
  },
  'security-awareness': {
    slug: 'security-awareness',
    title: 'Security Awareness Training',
    metaTitle: 'Security Awareness Training Programs',
    metaDescription:
      'Role-based security awareness training, phishing simulation design, and leadership briefings tailored to your organization. DiTconsult does not issue certifications.',
    keywords: ['security awareness training', 'phishing simulation', 'security culture', 'employee training'],
    subtitle: 'Workforce awareness',
    heroDescription:
      'Give employees, engineers, and leaders role-specific guidance, realistic simulations, and reporting habits—not a single annual completion exercise.',
    problem:
      'People remain a common factor in security incidents. Generic annual training rarely changes reporting behavior or phishing susceptibility.',
    audience: [
      'Organizations with compliance-driven training requirements',
      'Teams that have seen phishing or social-engineering incidents',
      'Leaders building consistent security practice across departments',
    ],
    warningSigns: [
      'High click rates on simulated phishing',
      'Employees are unsure how to report suspicious activity',
      'No role-specific security guidance exists',
      'Training completion is tracked without behavior measures',
    ],
    included: [
      'Training needs assessment',
      'Curriculum development for your audience',
      'Phishing simulation program design',
      'Role-based modules for executives, engineering, and general staff',
      'Compliance-aligned content when required',
      'Metrics and improvement reporting',
    ],
    process: sharedProcess,
    deliverables: [
      'Training program plan',
      'Training materials for the agreed audience',
      'Simulation results report when simulations are in scope',
      'Improvement recommendations',
    ],
    frameworks: ['NIST CSF Protect function', 'HIPAA (when applicable)'],
    platforms: ['Organization-wide'],
    benefits: [
      'Role-specific guidance instead of a single annual module',
      'Clearer reporting habits for suspicious activity',
      'Awareness work that can sit alongside broader corporate training',
    ],
    nextStep:
      'Discuss your training requirements if you need awareness programs, or explore the broader corporate curriculum if technical upskilling is also in scope.',
    ctaLabel: 'Discuss Your Training Requirements',
    ctaHref: '/contact?service=security-training',
    faqs: [
      {
        question: 'How often should training run?',
        answer:
          'Frequency depends on risk profile and regulatory requirements. Many organizations benefit from short, recurring sessions and periodic simulations rather than one annual session. We confirm cadence during scoping.',
      },
      {
        question: 'How is this different from corporate or educational consulting?',
        answer:
          'Awareness training focuses on everyday security habits and social engineering. Corporate training covers broader technical and leadership skills. Educational consulting advises institutions on campus technology, governance, and faculty development.',
      },
    ],
  },
  'virtual-ciso': {
    slug: 'virtual-ciso',
    title: 'Virtual CISO and Strategic Security Advisory',
    metaTitle: 'Virtual CISO and Strategic Security Advisory',
    metaDescription:
      'Fractional cybersecurity leadership for strategy, governance, risk reporting, and program direction. Virtual CISO advisory does not replace an internal security operations team.',
    keywords: ['virtual CISO', 'vCISO services', 'fractional CISO', 'cybersecurity leadership'],
    subtitle: 'Ongoing security leadership',
    heroDescription:
      'Add senior security leadership for strategy, governance, risk reporting, and program direction—without hiring a full-time chief information security officer.',
    problem:
      'Growing organizations face rising security and compliance expectations before they need, or can fund, a full-time CISO.',
    audience: [
      'Small and mid-market companies without a CISO',
      'Startups preparing for enterprise customers or investor diligence',
      'Organizations between CISO hires',
    ],
    warningSigns: [
      'No security strategy aligned to business goals',
      'The board or investors request cyber risk updates',
      'Compliance deadlines exist without program ownership',
      'Security decisions are made ad hoc by IT',
    ],
    included: [
      'Security strategy and roadmap development',
      'Risk governance and policy advisory',
      'Vendor and third-party risk guidance',
      'Board and executive reporting',
      'Audit and compliance coordination',
      'Team mentoring and hiring advisory',
    ],
    process: [
      { title: 'Assess', description: 'Evaluate current program maturity and stakeholder expectations.' },
      { title: 'Plan', description: 'Develop strategy, roadmap, and a governance cadence.' },
      { title: 'Execute', description: 'Guide program work and cross-functional alignment.' },
      { title: 'Report', description: 'Deliver recurring executive and board-ready updates.' },
    ],
    deliverables: [
      'Security strategy and roadmap',
      'Risk governance framework',
      'Executive and board reporting package',
      'Policy and program documentation',
    ],
    frameworks: ['NIST CSF', 'ISO/IEC 27001', 'SOC 2 (program alignment)'],
    platforms: ['Organization-wide'],
    benefits: [
      'Senior direction without a full-time CISO hire',
      'A governance cadence leadership can sustain',
      'Clearer ownership of risk reporting and program decisions',
    ],
    nextStep:
      'Speak with a security consultant to discuss whether fractional leadership, a time-boxed assessment, or both would fit your organization.',
    ctaLabel: 'Speak With a Security Consultant',
    ctaHref: '/contact?service=vciso',
    faqs: [
      {
        question: 'How is a virtual CISO different from a managed security provider?',
        answer:
          'A virtual CISO provides strategic leadership and governance. It is not outsourced security operations center monitoring. We advise your organization; you choose operational tooling and providers.',
      },
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICE_PAGES);

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return SERVICE_PAGES[slug];
}

/** Map legacy routes to service slugs */
export const SERVICE_ROUTE_MAP: Record<string, string> = {
  '/cloud-security': 'cloud-security',
  '/compliance': 'compliance',
  '/incident-response': 'incident-response',
  '/virtual-ciso': 'virtual-ciso',
  '/ai-cloud-remediation': 'ai-cloud-remediation',
  '/vulnerability-assessment': 'vulnerability-assessment',
  '/security-risk-assessment': 'security-risk-assessment',
  '/devsecops': 'devsecops',
  '/security-awareness': 'security-awareness',
};
