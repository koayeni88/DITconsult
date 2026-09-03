import { ServicePageData } from '@/types';

const sharedProcess = [
  { title: 'Discover', description: 'Align on scope, stakeholders, systems in scope, and success criteria.' },
  { title: 'Assess', description: 'Collect evidence through interviews, configuration review, and testing where appropriate.' },
  { title: 'Prioritize', description: 'Rank findings by business impact, likelihood, and compliance relevance.' },
  { title: 'Deliver', description: 'Provide reports, roadmaps, and optional remediation support with validation.' },
];

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  'cloud-security': {
    slug: 'cloud-security',
    title: 'Cloud Security Assessment',
    metaTitle: 'Cloud Security Assessment | AWS, Azure & Google Cloud',
    metaDescription:
      'Multi-cloud security assessments for AWS, Azure, and Google Cloud. Identify misconfigurations, strengthen identity controls, and receive a risk-prioritized remediation plan.',
    keywords: ['cloud security assessment', 'AWS security', 'Azure security', 'Google Cloud security', 'multi-cloud security'],
    subtitle: 'Multi-Cloud Security',
    heroDescription:
      'Identify misconfigurations, excessive permissions, and control gaps across AWS, Azure, and Google Cloud—with findings your engineering and leadership teams can act on.',
    problem:
      'Cloud environments evolve quickly. Misconfigurations, weak identity controls, and inconsistent logging create exposure that traditional perimeter security does not address.',
    audience: [
      'Organizations migrating to or operating in AWS, Azure, or Google Cloud',
      'Teams preparing for customer security reviews or audits',
      'Engineering leaders who need a prioritized remediation backlog',
    ],
    warningSigns: [
      'Publicly accessible storage or databases discovered in scans',
      'IAM roles with broad administrative permissions',
      'Inconsistent logging and monitoring across accounts',
      'Security findings backlog growing faster than remediation',
    ],
    included: [
      'Identity and access management review',
      'Network and segmentation assessment',
      'Storage and encryption configuration review',
      'Logging, monitoring, and alerting evaluation',
      'Configuration baseline and drift analysis',
      'Compliance-relevant control mapping (when in scope)',
    ],
    process: sharedProcess,
    deliverables: [
      'Executive risk summary',
      'Technical findings with evidence',
      'Risk-ranked remediation backlog',
      'Architecture and hardening recommendations',
      'Optional re-validation after remediation',
    ],
    frameworks: ['CIS Benchmarks', 'NIST CSF', 'CSA CCM'],
    platforms: ['AWS', 'Microsoft Azure', 'Google Cloud'],
    faqs: [
      {
        question: 'Do you need production access?',
        answer: 'Scope determines access. Many assessments use read-only access, configuration exports, and interviews. We align on least-privilege access before work begins.',
      },
      {
        question: 'Can you assess multiple cloud providers in one engagement?',
        answer: 'Yes. Multi-cloud and hybrid assessments are common. We provide a unified risk view with platform-specific remediation guidance.',
      },
    ],
  },
  'ai-cloud-remediation': {
    slug: 'ai-cloud-remediation',
    title: 'AI-Assisted Cloud Remediation',
    metaTitle: 'AI-Assisted Cloud Misconfiguration Remediation',
    metaDescription:
      'AI-assisted workflows to detect, prioritize, and guide remediation of cloud misconfigurations across AWS, Azure, and Google Cloud—with human oversight and auditability.',
    keywords: ['cloud misconfiguration remediation', 'AI-assisted security', 'multi-cloud remediation', 'CSPM'],
    subtitle: 'Intelligent Remediation',
    heroDescription:
      'Accelerate cloud security improvement with AI-assisted detection and prioritization—while keeping humans in control of every production change.',
    problem:
      'Cloud security findings accumulate across accounts and services. Manual triage slows remediation and leaves high-risk misconfigurations open longer than necessary.',
    audience: [
      'Teams with large cloud footprints and growing finding backlogs',
      'Organizations seeking faster, risk-aware remediation workflows',
      'Security and platform teams needing audit-ready change evidence',
    ],
    warningSigns: [
      'Critical misconfigurations remain open for weeks',
      'No consistent prioritization method across cloud platforms',
      'Remediation efforts lack validation or documentation',
      'Configuration drift reintroduces resolved issues',
    ],
    included: [
      'Cloud asset and configuration discovery',
      'Misconfiguration and policy drift detection',
      'AI-assisted risk prioritization with business context',
      'Human-reviewed remediation recommendations',
      'Change validation and evidence documentation',
      'Ongoing posture monitoring guidance',
    ],
    process: [
      { title: 'Discover', description: 'Inventory cloud assets, policies, and configuration baselines.' },
      { title: 'Detect', description: 'Identify misconfigurations, drift, and policy violations.' },
      { title: 'Prioritize', description: 'Rank findings using risk context—not volume alone.' },
      { title: 'Remediate', description: 'Guide approved changes with validation and audit evidence.' },
      { title: 'Monitor', description: 'Track posture and prevent recurrence through continuous review.' },
    ],
    deliverables: [
      'Prioritized remediation backlog',
      'Step-by-step change recommendations',
      'Validation and evidence reports',
      'Executive progress summaries',
    ],
    frameworks: ['CIS Benchmarks', 'NIST CSF'],
    platforms: ['AWS', 'Microsoft Azure', 'Google Cloud'],
    faqs: [
      {
        question: 'Does AI make changes automatically in production?',
        answer:
          'No. AI assists with detection, prioritization, and recommendation. Production changes require human review and approval. Rollback planning and least-privilege principles apply throughout.',
      },
      {
        question: 'How is auditability maintained?',
        answer: 'Recommendations, approvals, and validation results are documented to support internal audit and compliance evidence needs.',
      },
    ],
  },
  'vulnerability-assessment': {
    slug: 'vulnerability-assessment',
    title: 'Vulnerability Assessment and Remediation',
    metaTitle: 'Vulnerability Assessment & Remediation Consulting',
    metaDescription:
      'Risk-based vulnerability assessment and remediation guidance across cloud infrastructure and critical systems.',
    keywords: ['vulnerability assessment', 'vulnerability remediation', 'risk-based patching', 'security scanning'],
    subtitle: 'Risk-Based Triage',
    heroDescription:
      'Move beyond scan volume to actionable remediation—prioritized by exploitability, exposure, and business impact.',
    problem:
      'Vulnerability scanners produce thousands of findings. Without risk context, teams patch the wrong things first—or nothing at all.',
    audience: [
      'Teams overwhelmed by scanner output',
      'Organizations preparing for audits or penetration tests',
      'Engineering leaders who need a defensible prioritization method',
    ],
    warningSigns: [
      'Critical CVEs open beyond agreed SLA windows',
      'No consistent scoring or ownership for findings',
      'Scan results disconnected from asset criticality',
      'Repeat findings after superficial fixes',
    ],
    included: [
      'Vulnerability discovery and inventory alignment',
      'Risk-based prioritization methodology',
      'Remediation guidance with ownership assignment',
      'Compliance correlation (when in scope)',
      'Validation and re-scan coordination',
    ],
    process: sharedProcess,
    deliverables: [
      'Risk-ranked vulnerability backlog',
      'Remediation playbooks for top findings',
      'Executive summary of exposure trends',
      'Validation evidence after remediation',
    ],
    frameworks: ['CVSS contextualization', 'NIST CSF'],
    platforms: ['Cloud infrastructure', 'Endpoints', 'Applications (scope-dependent)'],
    faqs: [
      {
        question: 'Do you run scans or use our existing tools?',
        answer: 'We can work with your existing scanning tools and processes or help evaluate tooling gaps as part of scope planning.',
      },
    ],
  },
  'compliance': {
    slug: 'compliance',
    title: 'Compliance Readiness',
    metaTitle: 'Compliance Readiness Consulting | SOC 2, HIPAA, PCI, ISO 27001',
    metaDescription:
      'Compliance readiness advisory for NIST CSF, ISO 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP. Gap analysis, control mapping, and remediation planning.',
    keywords: ['compliance readiness', 'SOC 2 readiness', 'HIPAA compliance advisory', 'ISO 27001 readiness', 'PCI DSS'],
    subtitle: 'Audit-Ready Programs',
    heroDescription:
      'Build structured, evidence-ready security programs aligned to the frameworks your customers and regulators expect—without claiming certification on your behalf.',
    problem:
      'Compliance requirements are complex and evolving. Teams struggle to map controls, collect evidence, and close gaps before audit deadlines.',
    audience: [
      'Organizations pursuing SOC 2, ISO 27001, or industry-specific compliance',
      'Healthcare and financial services with regulatory obligations',
      'Government contractors preparing for CMMC or FedRAMP alignment',
    ],
    warningSigns: [
      'Policies exist but are not operationalized',
      'Audit preparation consumes weeks of manual effort',
      'Control owners unclear on evidence requirements',
      'Gaps discovered late in the audit cycle',
    ],
    included: [
      'Framework selection and scoping guidance',
      'Control gap analysis and maturity assessment',
      'Policy and procedure advisory',
      'Evidence collection planning',
      'Remediation roadmap aligned to audit timelines',
      'Auditor coordination support (advisory only)',
    ],
    process: sharedProcess,
    deliverables: [
      'Compliance gap matrix',
      'Control implementation roadmap',
      'Evidence collection checklist',
      'Executive readiness summary',
    ],
    frameworks: ['NIST CSF', 'ISO 27001', 'SOC 2', 'HIPAA', 'PCI DSS', 'CMMC', 'FedRAMP (readiness)'],
    platforms: ['Cloud and on-premises (scope-dependent)'],
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
    title: 'Security Risk Assessment',
    metaTitle: 'Security Risk Assessment Consulting',
    metaDescription:
      'Executive-focused security risk assessments that quantify exposure, evaluate controls, and produce prioritized mitigation roadmaps.',
    keywords: ['security risk assessment', 'cyber risk assessment', 'risk quantification', 'security posture'],
    subtitle: 'Risk Visibility',
    heroDescription:
      'Understand your security posture in business terms—with clear control gaps, threat scenarios, and prioritized mitigation actions.',
    problem:
      'Leadership needs risk visibility that connects technical findings to business consequences—not disconnected scan results.',
    audience: [
      'Executives planning security investments',
      'Boards requesting cyber risk reporting',
      'Teams preparing for M&A diligence or insurance reviews',
    ],
    warningSigns: [
      'No shared view of top cyber risks across leadership',
      'Security spending without measurable risk reduction',
      'Inconsistent risk language between IT and business units',
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
    frameworks: ['NIST CSF', 'NIST 800-30 (risk guidance)', 'ISO 27005'],
    platforms: ['Enterprise-wide (scope-defined)'],
    faqs: [
      {
        question: 'Is this different from a penetration test?',
        answer: 'Yes. Risk assessments evaluate controls and exposure holistically. Penetration testing validates specific attack paths. Both can complement each other.',
      },
    ],
  },
  'incident-response': {
    slug: 'incident-response',
    title: 'Incident Response Planning',
    metaTitle: 'Incident Response Planning & Tabletop Exercises',
    metaDescription:
      'Build and test incident response capabilities with playbooks, tabletop exercises, and communication workflows aligned to your organization.',
    keywords: ['incident response planning', 'tabletop exercises', 'IR playbooks', 'incident readiness'],
    subtitle: 'Prepared Response',
    heroDescription:
      'Develop tested incident response procedures so your team knows what to do, who to notify, and how to contain threats when minutes matter.',
    problem:
      'Untested incident plans fail under pressure. Unclear roles, missing communication paths, and outdated procedures extend damage and recovery time.',
    audience: [
      'Organizations without formal IR procedures',
      'Teams that have not exercised their plan in 12+ months',
      'Regulated industries with breach notification requirements',
    ],
    warningSigns: [
      'No documented escalation paths',
      'Legal, PR, and IT roles undefined during incidents',
      'Backups untested for recovery scenarios',
      'Tabletop exercises never conducted',
    ],
    included: [
      'IR plan and playbook development',
      'Role and responsibility mapping',
      'Tabletop exercise facilitation',
      'Communication and notification templates',
      'Post-exercise improvement planning',
      'Integration with existing security tooling (scope-dependent)',
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
    faqs: [
      {
        question: 'Do you provide 24/7 incident response retainer services?',
        answer: 'Scope varies by engagement. Contact us to discuss readiness planning versus active incident support needs.',
      },
    ],
  },
  'devsecops': {
    slug: 'devsecops',
    title: 'DevSecOps and Secure Architecture',
    metaTitle: 'DevSecOps & Secure Cloud Architecture Consulting',
    metaDescription:
      'Integrate security into CI/CD pipelines, infrastructure as code, and cloud architecture with practical DevSecOps controls.',
    keywords: ['DevSecOps consulting', 'secure architecture', 'CI/CD security', 'infrastructure as code security'],
    subtitle: 'Secure by Design',
    heroDescription:
      'Embed security into how you build and deploy—secure architecture, pipeline controls, and IaC scanning that developers can adopt.',
    problem:
      'Security bolted on after deployment is expensive and ineffective. Teams need security integrated into design, build, and release workflows.',
    audience: [
      'Platform and DevOps teams scaling cloud delivery',
      'Organizations adopting infrastructure as code',
      'SaaS companies shipping frequently to production',
    ],
    warningSigns: [
      'No security gates in CI/CD pipelines',
      'Containers and IaC deployed without scanning',
      'Architecture reviews skipped under delivery pressure',
      'Secrets or credentials found in repositories',
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
      'IaC and container hardening guide',
      'Implementation roadmap',
    ],
    frameworks: ['CIS Benchmarks', 'NIST SSDF', 'OWASP'],
    platforms: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes (scope-dependent)'],
    faqs: [
      {
        question: 'Will this slow down our release cadence?',
        answer: 'Effective DevSecOps automates checks early in the pipeline—reducing late-stage failures and rework. We design controls that fit your delivery model.',
      },
    ],
  },
  'security-awareness': {
    slug: 'security-awareness',
    title: 'Security Awareness Training',
    metaTitle: 'Security Awareness Training Programs',
    metaDescription:
      'Role-based security awareness training, phishing simulations, and leadership briefings tailored to your organization.',
    keywords: ['security awareness training', 'phishing simulation', 'security culture', 'employee training'],
    subtitle: 'Human Layer Defense',
    heroDescription:
      'Build security-aware teams with targeted training, realistic simulations, and leadership engagement—not annual checkbox compliance.',
    problem:
      'Human error remains a leading factor in breaches. Generic annual training does not change behavior or reduce phishing susceptibility.',
    audience: [
      'Organizations with compliance training requirements',
      'Teams experiencing phishing or social engineering incidents',
      'Leaders building security culture across departments',
    ],
    warningSigns: [
      'High click rates on simulated phishing',
      'Employees unsure how to report suspicious activity',
      'No role-specific security guidance',
      'Training completion without measurable behavior change',
    ],
    included: [
      'Training needs assessment',
      'Customized curriculum development',
      'Phishing simulation program design',
      'Role-based modules (executive, engineering, general staff)',
      'Compliance-aligned content (when required)',
      'Metrics and improvement reporting',
    ],
    process: sharedProcess,
    deliverables: [
      'Training program plan',
      'Custom training materials',
      'Simulation results report',
      'Improvement recommendations',
    ],
    frameworks: ['NIST CSF Protect function', 'HIPAA (when applicable)'],
    platforms: ['Organization-wide'],
    faqs: [
      {
        question: 'How often should training run?',
        answer: 'Frequency depends on risk profile and regulatory requirements. We recommend ongoing micro-learning and periodic simulations rather than one annual session.',
      },
    ],
  },
  'virtual-ciso': {
    slug: 'virtual-ciso',
    title: 'Virtual CISO Services',
    metaTitle: 'Virtual CISO (vCISO) Advisory Services',
    metaDescription:
      'Strategic cybersecurity leadership for organizations that need executive guidance, governance, and board-ready reporting without a full-time CISO.',
    keywords: ['virtual CISO', 'vCISO services', 'fractional CISO', 'cybersecurity leadership'],
    subtitle: 'Executive Leadership',
    heroDescription:
      'Access experienced security leadership for strategy, governance, risk reporting, and program direction—on a schedule that fits your organization.',
    problem:
      'Growing organizations face increasing security and compliance expectations without budget or need for a full-time Chief Information Security Officer.',
    audience: [
      'SMBs and mid-market companies without a CISO',
      'Startups preparing for enterprise customers or funding diligence',
      'Organizations between CISO hires',
    ],
    warningSigns: [
      'No security strategy aligned to business goals',
      'Board or investors requesting cyber risk updates',
      'Compliance deadlines without program ownership',
      'Security decisions made ad hoc by IT',
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
      { title: 'Plan', description: 'Develop strategy, roadmap, and governance cadence.' },
      { title: 'Execute', description: 'Guide program initiatives and cross-functional alignment.' },
      { title: 'Report', description: 'Deliver recurring executive and board-ready updates.' },
    ],
    deliverables: [
      'Security strategy and roadmap',
      'Risk governance framework',
      'Executive and board reporting package',
      'Policy and program documentation',
    ],
    frameworks: ['NIST CSF', 'ISO 27001', 'SOC 2 (program alignment)'],
    platforms: ['Organization-wide'],
    faqs: [
      {
        question: 'How is vCISO different from a managed security provider?',
        answer:
          'vCISO provides strategic leadership and governance—not outsourced SOC monitoring. We advise your organization; operational security tooling remains your choice.',
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
