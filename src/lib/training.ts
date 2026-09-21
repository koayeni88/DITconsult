export type TrainingLevel =
  | 'foundational'
  | 'intermediate'
  | 'advanced'
  | 'expert'
  | 'foundational-to-expert';

export type PreparationNeed = 'specialist-instructor' | 'dedicated-labs' | 'further-preparation';

export type TrainingCategoryId =
  | 'core-cybersecurity'
  | 'security-operations'
  | 'application-security'
  | 'ai-cybersecurity'
  | 'governance-specialist'
  | 'corporate-it';

export interface TrainingCategory {
  id: TrainingCategoryId;
  title: string;
  description: string;
}

export interface TrainingArea {
  id: string;
  number: number;
  categoryId: TrainingCategoryId;
  title: string;
  description: string;
  audience: string;
  level: TrainingLevel;
  objectives: string[];
  topics: string[];
  /** Areas that typically need specialist delivery, labs, or extra prep before offering */
  preparationNeeds?: PreparationNeed[];
  preparationNote?: string;
}

export interface ProposedCourse {
  areaId: string;
  title: string;
  focus: string;
  level: TrainingLevel;
}

export interface FlagshipWorkshop {
  id: string;
  title: string;
  summary: string;
  audience: string;
  relatedAreaIds: string[];
}

export const CORPORATE_TRAINING_SERVICE = {
  id: 'corporate-training' as const,
  title: 'Corporate Cybersecurity & IT Training',
  shortDescription:
    'We provide corporate cybersecurity and IT training to help organizations strengthen employee awareness, develop technical skills, and support secure, effective use of technology.',
  description:
    'Corporate cybersecurity and IT training discussions tailored to your teams, goals, and technology environment.',
  href: '/corporate-training',
};

export const TRAINING_PAGE = {
  metaTitle: 'Corporate Cybersecurity & IT Training',
  metaDescription:
    'Explore DiTconsult’s corporate cybersecurity and IT training curriculum framework—awareness, cloud, operations, application security, AI security, governance, and corporate IT skills.',
  h1: 'Corporate Cybersecurity & IT Training',
  intro:
    'DiTconsult provides corporate cybersecurity and IT training to help organizations strengthen employee awareness, develop technical skills, and support secure, effective use of technology. Courses can be scoped from foundational to expert based on your team’s experience level. The curriculum below is a proposed framework for discussion—not a claim that every area is available as a scheduled public course.',
  homepageHeadline: 'Equip your people with practical security and IT skills',
  homepageCopy:
    'We provide corporate cybersecurity and IT training to help organizations strengthen employee awareness, develop technical skills, and support secure, effective use of technology—from foundational through expert levels.',
  discussNote:
    'Share your goals, topics of interest, team size, current experience level (foundational through expert), preferred delivery format, and preferred timeframe. Format and timeframe are preferences we will discuss with you. Prices, schedules, durations, and certifications or accreditation details are provided after you contact us.',
  frameworkNote:
    'These 19 areas are proposed curriculum categories that can be tailored from foundational to expert. We recommend starting with a focused set of proposed courses and flagship workshops, then expanding based on your priorities and readiness.',
};

export const TRAINING_CATEGORIES: TrainingCategory[] = [
  {
    id: 'core-cybersecurity',
    title: 'Core Cybersecurity',
    description: 'Controls spanning awareness, networks, identity, cloud, and vulnerability management—scoped from foundational to expert.',
  },
  {
    id: 'security-operations',
    title: 'Security Operations and Resilience',
    description: 'Detection, hunting, incident response, and business resilience practices for day-to-day and crisis scenarios.',
  },
  {
    id: 'application-security',
    title: 'Application Security and Security Testing',
    description: 'Secure development, ethical assessment practices, and protecting sensitive data across applications and services.',
  },
  {
    id: 'ai-cybersecurity',
    title: 'AI and Cybersecurity',
    description: 'Using AI to support security work, securing generative AI systems, and governing responsible AI use at work.',
  },
  {
    id: 'governance-specialist',
    title: 'Governance and Specialist Training',
    description: 'GRC, executive decision-making, and specialist domains such as operational technology and IoT security.',
  },
  {
    id: 'corporate-it',
    title: 'Corporate IT Training',
    description: 'Practical workplace technology skills, administration, cloud fundamentals, and workflow automation.',
  },
];

export const TRAINING_AREAS: TrainingArea[] = [
  {
    id: 'cybersecurity-awareness-social-engineering',
    number: 1,
    categoryId: 'core-cybersecurity',
    title: 'Cybersecurity Awareness and Social Engineering',
    description:
      'Help employees recognize common social-engineering tactics and apply everyday security habits that reduce organizational risk.',
    audience: 'All employees, contractors, and teams that use business systems and handle company information.',
    level: 'foundational-to-expert',
    objectives: [
      'Recognize phishing, spear phishing, and business email compromise patterns.',
      'Apply verification procedures for unusual requests, including deepfake impersonation risks.',
      'Use stronger authentication practices and report suspicious activity promptly.',
    ],
    topics: [
      'Phishing, spear phishing, and business email compromise',
      'Deepfake impersonation and verification procedures',
      'Passwords, passkeys, and multifactor authentication',
      'Secure remote work and incident reporting',
    ],
  },
  {
    id: 'network-endpoint-security',
    number: 2,
    categoryId: 'core-cybersecurity',
    title: 'Network and Endpoint Security',
    description:
      'Strengthen defensive fundamentals for networks and endpoints, including segmentation, hardening, detection, and patch discipline.',
    audience: 'IT administrators, desktop support leads, and security practitioners supporting infrastructure.',
    level: 'foundational-to-expert',
    objectives: [
      'Explain practical network segmentation and secure remote-access patterns.',
      'Apply foundational Windows and Linux hardening concepts.',
      'Connect endpoint protection, patching, and detection workflows.',
    ],
    topics: [
      'Network segmentation, firewalls, and secure remote access',
      'Windows and Linux hardening',
      'Endpoint detection and response fundamentals',
      'Patch management and endpoint protection',
    ],
    preparationNeeds: ['dedicated-labs', 'further-preparation'],
    preparationNote: 'Hands-on hardening and EDR examples typically benefit from dedicated lab environments.',
  },
  {
    id: 'identity-access-management',
    number: 3,
    categoryId: 'core-cybersecurity',
    title: 'Identity and Access Management',
    description:
      'Build practical understanding of identity lifecycle, least privilege, privileged access, and Zero Trust-aligned access decisions.',
    audience: 'Identity administrators, IT and security teams, and technical managers overseeing access control.',
    level: 'foundational-to-expert',
    objectives: [
      'Describe identity lifecycle and access-review practices.',
      'Apply least-privilege and privileged-access concepts.',
      'Discuss Zero Trust principles in practical implementation terms (aligned with NIST SP 800-207 ideas such as continuous evaluation and least privilege).',
    ],
    topics: [
      'Identity lifecycle and access reviews',
      'Role-based access and least privilege',
      'Privileged access management',
      'Service accounts, workload identities, and secrets',
      'Zero Trust principles and practical implementation',
    ],
  },
  {
    id: 'cloud-container-security',
    number: 4,
    categoryId: 'core-cybersecurity',
    title: 'Cloud and Container Security',
    description:
      'Cover multi-cloud security foundations, shared responsibility, common misconfigurations, and container/Kubernetes basics.',
    audience: 'Cloud engineers, DevOps/platform teams, and security practitioners supporting AWS, Azure, or Google Cloud.',
    level: 'foundational-to-expert',
    objectives: [
      'Apply shared-responsibility and cloud-posture concepts across major cloud providers.',
      'Identify common misconfiguration and logging gaps.',
      'Discuss container image and Kubernetes security fundamentals.',
    ],
    topics: [
      'AWS, Azure, and Google Cloud security foundations',
      'Shared responsibility and cloud misconfigurations',
      'Cloud logging, posture management, and policy enforcement',
      'Container image and Kubernetes security',
      'Infrastructure-as-code security',
    ],
    preparationNeeds: ['dedicated-labs', 'further-preparation'],
    preparationNote: 'Container and Kubernetes labs may require additional environment preparation.',
  },
  {
    id: 'vulnerability-management-exposure',
    number: 5,
    categoryId: 'core-cybersecurity',
    title: 'Vulnerability Management and Exposure Reduction',
    description:
      'Turn discovery and scanning into risk-based remediation planning, tracking, and validation.',
    audience: 'Vulnerability management owners, IT operations, and security analysts.',
    level: 'foundational-to-expert',
    objectives: [
      'Connect asset inventories to vulnerability assessment workflows.',
      'Prioritize findings using business risk rather than raw severity alone.',
      'Plan remediation, tracking, and validation steps.',
    ],
    topics: [
      'Asset discovery and inventories',
      'Vulnerability assessment and scan interpretation',
      'Risk-based prioritization',
      'Remediation planning, tracking, and validation',
      'External attack surface management fundamentals',
    ],
  },
  {
    id: 'security-operations-siem',
    number: 6,
    categoryId: 'security-operations',
    title: 'Security Operations, SIEM, and Detection Engineering',
    description:
      'Develop practical SOC skills spanning log analysis, triage, detection logic, tuning, and reporting.',
    audience: 'SOC analysts, detection engineers, and security operations teams.',
    level: 'foundational-to-expert',
    objectives: [
      'Explain SIEM fundamentals and investigation workflows.',
      'Draft and evaluate detection logic with false-positive reduction in mind.',
      'Document security operations outcomes for stakeholders.',
    ],
    topics: [
      'Log collection, analysis, and SIEM fundamentals',
      'Alert triage and investigation',
      'Detection logic and query development',
      'Detection testing, tuning, and false-positive reduction',
      'Security operations workflows and reporting',
    ],
    preparationNeeds: ['specialist-instructor', 'dedicated-labs', 'further-preparation'],
    preparationNote: 'SIEM platforms and detection labs often require specialist delivery and prepared environments.',
  },
  {
    id: 'threat-intelligence-hunting',
    number: 7,
    categoryId: 'security-operations',
    title: 'Threat Intelligence and Threat Hunting',
    description:
      'Evaluate intelligence sources, map attacker behaviors, and practice hypothesis-driven hunting approaches.',
    audience: 'Threat analysts, SOC leads, and security engineers supporting detection and response.',
    level: 'foundational-to-expert',
    objectives: [
      'Evaluate threat intelligence sources and indicators of compromise.',
      'Relate activity patterns to frameworks such as MITRE ATT&CK.',
      'Communicate hunting findings that improve detections.',
    ],
    topics: [
      'Evaluating threat intelligence sources',
      'Indicators of compromise and attacker behaviors',
      'Mapping activity to MITRE ATT&CK',
      'Hypothesis-driven hunting',
      'Communicating findings and improving detections',
    ],
    preparationNeeds: ['specialist-instructor', 'dedicated-labs'],
    preparationNote: 'Threat hunting workshops typically need specialist instructors and curated datasets.',
  },
  {
    id: 'incident-response-forensics',
    number: 8,
    categoryId: 'security-operations',
    title: 'Incident Response and Digital Forensics Fundamentals',
    description:
      'Prepare teams for triage, evidence handling, investigation fundamentals, containment, and recovery.',
    audience: 'Incident responders, IT leads, and security teams supporting investigation workflows.',
    level: 'foundational-to-expert',
    objectives: [
      'Follow preparation, triage, and escalation practices.',
      'Preserve evidence and document investigations carefully.',
      'Apply containment, eradication, recovery, and lessons-learned loops.',
    ],
    topics: [
      'Incident preparation, triage, and escalation',
      'Evidence preservation and investigation documentation',
      'Endpoint, email, and cloud investigation fundamentals',
      'Containment, eradication, and recovery',
      'Lessons learned and response improvement',
    ],
    preparationNeeds: ['specialist-instructor', 'dedicated-labs', 'further-preparation'],
    preparationNote: 'Forensics exercises usually require specialist instruction and controlled lab evidence.',
  },
  {
    id: 'ransomware-business-resilience',
    number: 9,
    categoryId: 'security-operations',
    title: 'Ransomware Readiness and Business Resilience',
    description:
      'Practice ransomware decision-making, backup readiness, continuity planning, and crisis communication.',
    audience: 'IT and security teams, business continuity owners, and managers involved in crisis response.',
    level: 'foundational-to-expert',
    objectives: [
      'Walk through ransomware scenarios and response decisions.',
      'Connect backup protection and restoration testing to recovery outcomes.',
      'Practice technical and executive tabletop communication.',
    ],
    topics: [
      'Ransomware scenarios and response decisions',
      'Backup protection and restoration testing',
      'Business continuity and disaster recovery',
      'Crisis communication',
      'Technical and executive tabletop exercises',
    ],
  },
  {
    id: 'application-api-devsecops',
    number: 10,
    categoryId: 'application-security',
    title: 'Application, API, and DevSecOps Security',
    description:
      'Integrate secure design, API controls, and pipeline scanning into modern software delivery.',
    audience: 'Software engineers, DevOps teams, AppSec practitioners, and technical leads.',
    level: 'foundational-to-expert',
    objectives: [
      'Identify common application and API weaknesses.',
      'Apply threat-modeling and design-review habits.',
      'Use scanning and CI/CD controls with supply-chain risk in mind.',
    ],
    topics: [
      'Secure coding and common application weaknesses',
      'API authentication, authorization, and validation',
      'Threat modeling and security design reviews',
      'Code, dependency, and secrets scanning',
      'CI/CD and software supply chain security',
    ],
    preparationNeeds: ['further-preparation'],
    preparationNote: 'Delivery can be tailored to your languages, pipelines, and existing AppSec tooling.',
  },
  {
    id: 'ethical-hacking-assessment',
    number: 11,
    categoryId: 'application-security',
    title: 'Ethical Hacking and Security Assessment',
    description:
      'Introduce authorized assessment methodology, controlled testing practices, and business-focused reporting.',
    audience: 'Security testers, AppSec engineers, and technical teams preparing for authorized assessments.',
    level: 'foundational-to-expert',
    objectives: [
      'Respect authorization, scope, and rules of engagement.',
      'Apply reconnaissance and assessment methodology in controlled settings.',
      'Document findings with business impact and remediation recommendations.',
    ],
    topics: [
      'Authorization, scope, and rules of engagement',
      'Reconnaissance and assessment methodology',
      'Network and web application testing in controlled labs',
      'Validating findings and documenting business impact',
      'Remediation recommendations and retesting',
    ],
    preparationNeeds: ['specialist-instructor', 'dedicated-labs', 'further-preparation'],
    preparationNote: 'Requires specialist instructors, written authorization context, and isolated lab environments—never production systems without explicit scope.',
  },
  {
    id: 'data-security-protection',
    number: 12,
    categoryId: 'application-security',
    title: 'Data Security and Information Protection',
    description:
      'Protect sensitive information through classification, encryption fundamentals, DLP, and lifecycle controls.',
    audience: 'Security, compliance, IT, and data stewards responsible for handling sensitive information.',
    level: 'foundational-to-expert',
    objectives: [
      'Apply data classification and handling expectations.',
      'Explain encryption and key-management fundamentals at a practical level.',
      'Reduce oversharing and strengthen retention and disposal practices.',
    ],
    topics: [
      'Data classification and handling',
      'Encryption and key management fundamentals',
      'Data loss prevention',
      'Secure sharing, retention, and disposal',
      'Protecting sensitive information across cloud services',
    ],
  },
  {
    id: 'ai-cybersecurity-automation',
    number: 13,
    categoryId: 'ai-cybersecurity',
    title: 'AI in Cybersecurity and Security Automation',
    description:
      'Use AI to support analysis and triage while keeping human approval, accuracy checks, and auditability in place.',
    audience: 'Security analysts, engineers, and leaders exploring AI-assisted security workflows.',
    level: 'foundational-to-expert',
    objectives: [
      'Identify practical AI-assisted use cases for logs, intelligence, and prioritization.',
      'Validate AI outputs before operational use.',
      'Maintain human approval, audit trails, and rollback readiness.',
    ],
    topics: [
      'AI-assisted log analysis and alert triage',
      'Threat intelligence summarization',
      'Detection-query drafting and validation',
      'Vulnerability prioritization and remediation support',
      'Accuracy evaluation, human approval, audit trails, and rollback',
    ],
    preparationNeeds: ['further-preparation'],
    preparationNote: 'Content should be tailored to tools your organization already uses or is evaluating.',
  },
  {
    id: 'securing-generative-ai-agents',
    number: 14,
    categoryId: 'ai-cybersecurity',
    title: 'Securing Generative AI Applications and AI Agents',
    description:
      'Address generative AI application risks such as prompt injection, data leakage, retrieval boundaries, and agent permissions—aligned with current industry guidance including OWASP LLM Top 10 themes.',
    audience: 'Application owners, platform engineers, AppSec teams, and architects building or integrating AI systems.',
    level: 'foundational-to-expert',
    objectives: [
      'Recognize prompt injection and untrusted-content risks.',
      'Define retrieval permissions and data access boundaries.',
      'Evaluate agent permissions, tool connections, and output validation.',
    ],
    topics: [
      'Prompt injection and untrusted content',
      'Sensitive-information disclosure',
      'Retrieval permissions and data access boundaries',
      'Output validation and connected-tool security',
      'Agent permissions, threat modeling, and security evaluation',
    ],
    preparationNeeds: ['specialist-instructor', 'further-preparation'],
    preparationNote: 'Emerging domain; specialist facilitation and architecture context improve outcomes.',
  },
  {
    id: 'responsible-ai-governance',
    number: 15,
    categoryId: 'ai-cybersecurity',
    title: 'Responsible AI Use and AI Governance',
    description:
      'Set expectations for approved tools, confidential data handling, verification of AI-generated work, and oversight.',
    audience: 'Employees, managers, compliance stakeholders, and leaders setting workplace AI policy.',
    level: 'foundational-to-expert',
    objectives: [
      'Distinguish approved tools from shadow AI use.',
      'Handle confidential information carefully when using AI.',
      'Apply verification, accountability, and incident-handling expectations.',
    ],
    topics: [
      'Approved tools, acceptable use, and shadow AI',
      'Confidential information and AI data handling',
      'Verification of AI-generated work',
      'AI risk assessment and vendor review',
      'Accountability, oversight, and incident handling',
    ],
  },
  {
    id: 'cybersecurity-grc',
    number: 16,
    categoryId: 'governance-specialist',
    title: 'Cybersecurity Governance, Risk, and Compliance',
    description:
      'Connect policies, risk registers, framework mapping, third-party risk, and audit readiness.',
    audience: 'Compliance owners, security managers, and leaders preparing for audits or control programs.',
    level: 'foundational-to-expert',
    objectives: [
      'Clarify policy ownership and control accountability.',
      'Use risk assessments and registers to prioritize action.',
      'Prepare evidence collection and audit-ready reporting habits.',
    ],
    topics: [
      'Cybersecurity policies and control ownership',
      'Risk assessments and risk registers',
      'Framework mapping and evidence collection',
      'Third-party and supply chain risk',
      'Audit readiness and reporting',
    ],
  },
  {
    id: 'cybersecurity-leadership-executive',
    number: 17,
    categoryId: 'governance-specialist',
    title: 'Cybersecurity Leadership and Executive Decision-Making',
    description:
      'Help leaders communicate cyber risk in business terms and make prioritized security investment decisions.',
    audience: 'Executives, directors, and managers responsible for security strategy and reporting.',
    level: 'foundational-to-expert',
    objectives: [
      'Translate cyber risk into business language.',
      'Prioritize security investments and program milestones.',
      'Improve board, executive, and incident stakeholder communication.',
    ],
    topics: [
      'Communicating cyber risk in business terms',
      'Security strategy, priorities, and investment decisions',
      'Board and executive reporting',
      'Incident leadership and stakeholder communication',
      'Measuring security program progress',
    ],
  },
  {
    id: 'ot-iot-security',
    number: 18,
    categoryId: 'governance-specialist',
    title: 'Operational Technology and IoT Security Fundamentals',
    description:
      'Introduce IT/OT differences, segmentation, vendor access, safety considerations, and simulation-based preparedness.',
    audience: 'OT/IT convergence teams, industrial operators, and security staff supporting connected environments.',
    level: 'foundational-to-expert',
    objectives: [
      'Explain key differences between IT and operational technology environments.',
      'Discuss asset visibility, segmentation, and secure vendor access.',
      'Prepare for incidents using isolated simulation approaches.',
    ],
    topics: [
      'Differences between IT and operational technology',
      'Asset visibility and network segmentation',
      'Secure remote access and vendor access',
      'Safety, availability, and change-management considerations',
      'Incident preparedness using isolated simulations',
    ],
    preparationNeeds: ['specialist-instructor', 'dedicated-labs', 'further-preparation'],
    preparationNote: 'OT/IoT topics generally require specialist instructors and carefully isolated simulations.',
  },
  {
    id: 'corporate-it-m365-automation',
    number: 19,
    categoryId: 'corporate-it',
    title: 'Corporate IT, Microsoft 365, and Practical Automation',
    description:
      'Build day-to-day IT capability across collaboration tools, administration, cloud fundamentals, and practical scripting.',
    audience: 'IT support teams, administrators, and staff developing workplace technology skills.',
    level: 'foundational-to-expert',
    objectives: [
      'Use collaboration and secure file-sharing practices effectively.',
      'Apply IT administration and troubleshooting fundamentals.',
      'Introduce PowerShell/Python and workflow automation concepts.',
    ],
    topics: [
      'Workplace collaboration and secure file sharing',
      'IT administration and troubleshooting',
      'Cloud computing fundamentals',
      'PowerShell and Python fundamentals',
      'Practical workflow automation',
    ],
  },
];

/** Initial proposed course set (12) drawn from the curriculum framework */
export const PROPOSED_COURSES: ProposedCourse[] = [
  {
    areaId: 'cybersecurity-awareness-social-engineering',
    title: 'Cybersecurity Awareness and Social Engineering',
    focus: 'Foundational employee awareness covering phishing, BEC, deepfakes, authentication, and reporting.',
    level: 'foundational-to-expert',
  },
  {
    areaId: 'identity-access-management',
    title: 'Identity and Access Management Essentials',
    focus: 'Identity lifecycle, least privilege, privileged access, and Zero Trust-aligned access practices.',
    level: 'foundational-to-expert',
  },
  {
    areaId: 'cloud-container-security',
    title: 'Cloud Security Foundations',
    focus: 'AWS, Azure, and Google Cloud security foundations, shared responsibility, and posture basics.',
    level: 'foundational-to-expert',
  },
  {
    areaId: 'vulnerability-management-exposure',
    title: 'Vulnerability Management and Exposure Reduction',
    focus: 'Inventories, scan interpretation, risk-based prioritization, and remediation tracking.',
    level: 'foundational-to-expert',
  },
  {
    areaId: 'incident-response-forensics',
    title: 'Incident Response Fundamentals',
    focus: 'Preparation, triage, evidence handling, containment, recovery, and lessons learned.',
    level: 'foundational-to-expert',
  },
  {
    areaId: 'ransomware-business-resilience',
    title: 'Ransomware Readiness and Business Resilience',
    focus: 'Scenario decisions, backup readiness, continuity, and crisis communication.',
    level: 'foundational-to-expert',
  },
  {
    areaId: 'application-api-devsecops',
    title: 'Application, API, and DevSecOps Security',
    focus: 'Secure design, API controls, scanning, and software supply chain practices.',
    level: 'foundational-to-expert',
  },
  {
    areaId: 'data-security-protection',
    title: 'Data Security and Information Protection',
    focus: 'Classification, encryption fundamentals, DLP, and secure data lifecycle handling.',
    level: 'foundational-to-expert',
  },
  {
    areaId: 'ai-cybersecurity-automation',
    title: 'AI in Cybersecurity and Security Automation',
    focus: 'AI-assisted analysis with human approval, validation, and audit trails.',
    level: 'foundational-to-expert',
  },
  {
    areaId: 'securing-generative-ai-agents',
    title: 'Securing Generative AI Applications and AI Agents',
    focus: 'Prompt injection, data boundaries, tool/agent permissions, and evaluation.',
    level: 'foundational-to-expert',
  },
  {
    areaId: 'responsible-ai-governance',
    title: 'Responsible AI Use and AI Governance',
    focus: 'Acceptable use, confidential data handling, verification, and oversight.',
    level: 'foundational-to-expert',
  },
  {
    areaId: 'corporate-it-m365-automation',
    title: 'Corporate IT, Microsoft 365, and Practical Automation',
    focus: 'Workplace collaboration, administration, cloud basics, and practical automation.',
    level: 'foundational-to-expert',
  },
];

/** Recommended flagship workshops (4) */
export const FLAGSHIP_WORKSHOPS: FlagshipWorkshop[] = [
  {
    id: 'workshop-awareness',
    title: 'Security Awareness & Social Engineering Workshop',
    summary:
      'Interactive session on phishing, BEC, deepfake verification, authentication habits, and reporting—designed for broad employee audiences.',
    audience: 'All employees and contractors',
    relatedAreaIds: ['cybersecurity-awareness-social-engineering'],
  },
  {
    id: 'workshop-cloud',
    title: 'Cloud Security Foundations Workshop',
    summary:
      'Focused workshop on multi-cloud shared responsibility, common misconfigurations, logging, and posture priorities.',
    audience: 'Cloud, platform, and security teams',
    relatedAreaIds: ['cloud-container-security'],
  },
  {
    id: 'workshop-ransomware',
    title: 'Ransomware Readiness Tabletop Workshop',
    summary:
      'Facilitated technical and executive tabletop covering decision points, backup recovery, and crisis communication.',
    audience: 'IT, security, and business leaders',
    relatedAreaIds: ['ransomware-business-resilience'],
  },
  {
    id: 'workshop-responsible-ai',
    title: 'Responsible Workplace AI Workshop',
    summary:
      'Practical guidance on approved tools, confidential data handling, verification of AI-generated work, and governance expectations.',
    audience: 'Employees, managers, and policy owners',
    relatedAreaIds: ['responsible-ai-governance'],
  },
];

export const LEVEL_LABELS: Record<TrainingLevel, string> = {
  foundational: 'Foundational',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  expert: 'Expert',
  'foundational-to-expert': 'Foundational → Expert',
};

export const LEVEL_BADGE_CLASS: Record<TrainingLevel, string> = {
  foundational: 'bg-emerald-500/15 text-emerald-300',
  intermediate: 'bg-cyan-500/15 text-cyan-300',
  advanced: 'bg-primary-500/15 text-primary-300',
  expert: 'bg-violet-500/15 text-violet-300',
  'foundational-to-expert': 'bg-gold-400/15 text-gold-300',
};

export const PREPARATION_LABELS: Record<PreparationNeed, string> = {
  'specialist-instructor': 'Specialist instructor recommended',
  'dedicated-labs': 'Dedicated labs typically required',
  'further-preparation': 'Further preparation needed before delivery',
};

export function getAreasByCategory(categoryId: TrainingCategoryId): TrainingArea[] {
  return TRAINING_AREAS.filter((area) => area.categoryId === categoryId);
}

export function getAreaById(id: string): TrainingArea | undefined {
  return TRAINING_AREAS.find((area) => area.id === id);
}

/** Contact-form topic options grouped by category */
export const TRAINING_TOPIC_OPTIONS = [
  { id: '', label: 'Select a topic area...', categoryId: null as TrainingCategoryId | null },
  ...TRAINING_AREAS.map((area) => ({
    id: area.id,
    label: `${area.number}. ${area.title}`,
    categoryId: area.categoryId,
  })),
  { id: 'other', label: 'Other / multiple areas', categoryId: null as TrainingCategoryId | null },
];

export const DELIVERY_FORMAT_OPTIONS = [
  { id: '', label: 'No preference / discuss with us' },
  { id: 'virtual', label: 'Virtual (preference)' },
  { id: 'onsite', label: 'Onsite (preference)' },
  { id: 'hybrid', label: 'Hybrid (preference)' },
] as const;

export const TIMEFRAME_OPTIONS = [
  { id: '', label: 'No preference / discuss with us' },
  { id: 'asap', label: 'As soon as practical (preference)' },
  { id: '1-3-months', label: 'Within 1–3 months (preference)' },
  { id: '3-6-months', label: 'Within 3–6 months (preference)' },
  { id: 'planning', label: 'Planning / exploratory' },
] as const;
