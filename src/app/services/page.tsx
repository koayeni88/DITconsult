import { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Services | DITconsult',
  description: 'Full-spectrum cybersecurity consulting — cloud security, compliance, incident response, DevSecOps, Virtual CISO, and more.',
  keywords: ['cybersecurity services', 'cloud security', 'compliance', 'incident response', 'CMMC', 'SOC 2', 'virtual CISO'],
};

const categories = [
  {
    id: 'cloud',
    icon: '☁️',
    label: 'Cloud Security',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/30',
    accent: 'text-blue-400',
    services: [
      {
        title: 'Cloud Security Assessment',
        desc: 'Comprehensive review of your AWS, Azure, or GCP environment against CIS Benchmarks and NIST controls — with a prioritized remediation plan.',
        tags: ['AWS', 'Azure', 'GCP'],
        href: '/cloud-security',
      },
      {
        title: 'Cloud Misconfiguration Remediation',
        desc: 'Identify and fix critical misconfigurations in S3 buckets, IAM policies, network ACLs, security groups, and storage accounts before attackers do.',
        tags: ['IAM', 'Networking', 'Storage'],
        href: '/cloud-misconfiguration-demo',
      },
      {
        title: 'Kubernetes & Container Security',
        desc: 'Cluster hardening, RBAC review, network policy design, admission controller configuration, and runtime threat detection for container workloads.',
        tags: ['Kubernetes', 'Docker', 'EKS/AKS/GKE'],
        href: '/industries/cloud-teams',
      },
      {
        title: 'Cloud IAM & Privilege Review',
        desc: 'Audit IAM policies and service accounts for over-permissioned roles, privilege escalation paths, and cross-account trust misconfigurations.',
        tags: ['IAM', 'Least Privilege', 'Zero Trust'],
        href: '/cloud-security',
      },
      {
        title: 'Cloud Threat Detection & Response',
        desc: 'Configure GuardDuty, Microsoft Defender for Cloud, or GCP SCC with tuned alerts, suppression rules, and incident runbooks.',
        tags: ['SIEM', 'GuardDuty', 'Defender'],
        href: '/incident-response',
      },
    ],
  },
  {
    id: 'compliance',
    icon: '📋',
    label: 'Compliance & Regulatory',
    color: 'from-green-500/20 to-emerald-500/10',
    border: 'border-green-500/30',
    accent: 'text-green-400',
    services: [
      {
        title: 'SOC 2 Type II Readiness',
        desc: 'Gap analysis, control mapping, evidence collection guidance, and pre-audit assessment to achieve SOC 2 Type II certification faster.',
        tags: ['SOC 2', 'Trust Services', 'Audit Prep'],
        href: '/compliance',
      },
      {
        title: 'CMMC 2.0 Certification Readiness',
        desc: 'Complete NIST SP 800-171 gap assessment, SSP development, POA&M management, and mock assessments for DoD contractors.',
        tags: ['CMMC', 'NIST 800-171', 'DoD'],
        href: '/industries/government',
      },
      {
        title: 'HIPAA Security Rule Compliance',
        desc: 'Risk analysis, safeguard implementation review, business associate agreement assessment, and Security Rule gap remediation.',
        tags: ['HIPAA', 'PHI', 'Healthcare'],
        href: '/industries/healthcare',
      },
      {
        title: 'ISO 27001 Certification Support',
        desc: 'ISMS design, Annex A control gap analysis, documentation development, and readiness assessment ahead of third-party certification.',
        tags: ['ISO 27001', 'ISMS', 'Certification'],
        href: '/compliance',
      },
      {
        title: 'PCI DSS Assessment & Remediation',
        desc: 'Scope definition, SAQ guidance, network segmentation review, and control gap remediation for cardholder data environments.',
        tags: ['PCI DSS', 'CDE', 'Scoping'],
        href: '/compliance',
      },
      {
        title: 'NIST CSF Program Development',
        desc: 'Current-state profile, target-state profile, and prioritized roadmap to strengthen your security program against the NIST Cybersecurity Framework.',
        tags: ['NIST CSF', 'Framework', 'Roadmap'],
        href: '/compliance',
      },
    ],
  },
  {
    id: 'risk',
    icon: '🛡️',
    label: 'Risk & Vulnerability Management',
    color: 'from-orange-500/20 to-amber-500/10',
    border: 'border-orange-500/30',
    accent: 'text-orange-400',
    services: [
      {
        title: 'Security Risk Assessment',
        desc: 'In-depth analysis of your threat landscape, asset inventory, control effectiveness, and risk exposure — delivered with a business-impact-ranked remediation plan.',
        tags: ['Risk Quantification', 'Controls', 'Posture'],
        href: '/cyber-risk-score',
      },
      {
        title: 'Vulnerability Assessment & Remediation',
        desc: 'Systematic vulnerability scanning, CVSS-based prioritization, and guided remediation with compliance correlation and executive reporting.',
        tags: ['CVE', 'CVSS', 'Remediation'],
        href: '/services#vulnerability',
      },
      {
        title: 'Penetration Testing Coordination',
        desc: 'Scope definition, vendor selection, testing oversight, findings analysis, and remediation validation for network, web, and cloud penetration tests.',
        tags: ['Pentest', 'Red Team', 'Validation'],
        href: '/services#penetration-testing',
      },
      {
        title: 'Security Maturity Assessment',
        desc: 'Evaluate your program across five maturity domains — governance, detection, response, recovery, and supply chain — with a scored benchmark and roadmap.',
        tags: ['Maturity Model', 'Benchmarking', 'Program'],
        href: '/security-maturity',
      },
    ],
  },
  {
    id: 'devsecops',
    icon: '⚙️',
    label: 'DevSecOps & Secure Development',
    color: 'from-purple-500/20 to-violet-500/10',
    border: 'border-purple-500/30',
    accent: 'text-purple-400',
    services: [
      {
        title: 'DevSecOps Program Design',
        desc: 'Build a right-sized security program into your SDLC — pre-commit hooks, SAST, SCA, secrets detection, container scanning, and IaC security gates.',
        tags: ['CI/CD', 'SAST', 'SCA'],
        href: '/industries/cloud-teams',
      },
      {
        title: 'IaC Security Scanning Integration',
        desc: 'Integrate Checkov, Trivy, or Semgrep into your Terraform and CloudFormation pipelines to catch misconfigurations before they reach production.',
        tags: ['Terraform', 'Checkov', 'IaC'],
        href: '/cloud-misconfiguration-demo',
      },
      {
        title: 'Secure Architecture Review',
        desc: 'Evaluate proposed or existing cloud architecture for security gaps — network segmentation, encryption, authentication, secrets management, and blast radius.',
        tags: ['Architecture', 'Zero Trust', 'Design'],
        href: '/services#devsecops',
      },
      {
        title: 'Secrets & Credential Management',
        desc: 'Audit codebases, CI/CD pipelines, and infrastructure for hardcoded secrets; design a secrets management solution using Vault, AWS Secrets Manager, or Azure Key Vault.',
        tags: ['Secrets', 'Vault', 'Rotation'],
        href: '/services#devsecops',
      },
    ],
  },
  {
    id: 'ir',
    icon: '🚨',
    label: 'Incident Response',
    color: 'from-red-500/20 to-rose-500/10',
    border: 'border-red-500/30',
    accent: 'text-red-400',
    services: [
      {
        title: 'Incident Response Planning',
        desc: 'Develop a documented IR plan with roles, escalation paths, communication templates, and decision trees covering ransomware, data breach, and cloud compromise.',
        tags: ['IR Plan', 'Playbooks', 'NIST 800-61'],
        href: '/incident-response',
      },
      {
        title: 'Tabletop Exercises',
        desc: 'Facilitated scenario-based exercises that stress-test your IR plan, expose gaps in team coordination, and satisfy compliance requirements.',
        tags: ['Tabletop', 'Simulation', 'Training'],
        href: '/incident-response',
      },
      {
        title: 'Post-Incident Review & Hardening',
        desc: 'Root cause analysis, timeline reconstruction, control gap identification, and a prioritized hardening roadmap following a security incident.',
        tags: ['Forensics', 'Root Cause', 'Hardening'],
        href: '/incident-response',
      },
    ],
  },
  {
    id: 'strategy',
    icon: '🎯',
    label: 'Leadership & Strategy',
    color: 'from-cyan-500/20 to-sky-500/10',
    border: 'border-cyan-500/30',
    accent: 'text-cyan-400',
    services: [
      {
        title: 'Virtual CISO (vCISO)',
        desc: 'Ongoing fractional CISO engagement — security program ownership, board-level reporting, vendor reviews, policy management, and strategic roadmapping.',
        tags: ['vCISO', 'Strategy', 'Fractional'],
        href: '/virtual-ciso',
      },
      {
        title: 'Security Roadmap Development',
        desc: 'Personalized 30/60/90-day and 12-month security roadmap tailored to your business type, cloud environment, compliance needs, and current maturity level.',
        tags: ['Roadmap', '90-Day Plan', 'Priorities'],
        href: '/security-roadmap',
      },
      {
        title: 'Security Policy & Standards Library',
        desc: 'Develop or update your information security policies, standards, and procedures aligned to your chosen framework and organizational context.',
        tags: ['Policies', 'Standards', 'Documentation'],
        href: '/virtual-ciso',
      },
      {
        title: 'Security Awareness Training',
        desc: 'Customized training programs, phishing simulations, and compliance-focused training that builds a security-aware culture across your organization.',
        tags: ['Awareness', 'Phishing', 'Culture'],
        href: '/services#training',
      },
      {
        title: 'Executive Cyber Reporting',
        desc: 'Board-ready dashboards and executive briefings that translate technical risk into business impact — enabling informed decisions at the leadership level.',
        tags: ['Board Reporting', 'Metrics', 'KPIs'],
        href: '/executive-dashboard',
      },
    ],
  },
];

const tools = [
  { icon: '⚡', title: 'Cyber Risk Score', desc: 'Free 10-question assessment — get your risk level in 3 minutes.', href: '/cyber-risk-score', cta: 'Take the Assessment' },
  { icon: '🔍', title: 'Cloud Misconfiguration Demo', desc: 'See real-world cloud findings across AWS, Azure, GCP, and Kubernetes.', href: '/cloud-misconfiguration-demo', cta: 'Explore Findings' },
  { icon: '📊', title: 'Compliance Calculator', desc: 'Check your readiness across NIST, SOC 2, ISO 27001, HIPAA, PCI, and CMMC.', href: '/compliance-calculator', cta: 'Calculate Readiness' },
  { icon: '📈', title: 'Security Maturity Model', desc: 'Discover where your program sits on a 5-level maturity scale.', href: '/security-maturity', cta: 'Assess Maturity' },
  { icon: '🗺️', title: 'Security Roadmap Generator', desc: 'Get a personalized 30/60/90-day security plan in minutes.', href: '/security-roadmap', cta: 'Build My Roadmap' },
  { icon: '📉', title: 'Executive Dashboard', desc: 'Preview a sample cybersecurity executive dashboard and reporting format.', href: '/executive-dashboard', cta: 'View Dashboard' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[55vh] bg-gradient-to-b from-black via-slate-900/20 to-black flex items-center py-20">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-primary-500/30 rounded-full px-4 py-2 text-sm text-primary-400 font-medium mb-6 bg-primary-500/5">
            <span>🛡️</span> Full-Spectrum Cybersecurity
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Everything You Need to
            <span className="block gradient-text">Secure Your Organization</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto mb-10">
            From cloud security and compliance to incident response and executive strategy — practical, senior-level expertise delivered without the overhead of a large consulting firm.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-7 py-3.5 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-colors shadow-neon">
              Start a Conversation
            </Link>
            <Link href="/cyber-risk-score" className="px-7 py-3.5 border border-white/15 hover:border-primary-500/40 text-white rounded-xl font-semibold transition-colors bg-white/3">
              Free Risk Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-black pb-8">
        <div className="container-custom">
          {/* Quick-jump pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-20">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 text-sm font-medium transition-colors bg-white/3"
              >
                <span>{cat.icon}</span> {cat.label}
              </a>
            ))}
          </div>

          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="mb-20 scroll-mt-24">
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} border ${cat.border} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {cat.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{cat.label}</h2>
                  <div className={`h-0.5 w-16 mt-2 rounded bg-gradient-to-r ${cat.color}`} />
                </div>
              </div>

              {/* Services list */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {cat.services.map((svc, i) => (
                  <Link
                    key={i}
                    href={svc.href}
                    className={`group relative rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.color} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
                  >
                    <h3 className="font-bold text-white mb-2 group-hover:text-primary-300 transition-colors pr-6">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((tag) => (
                        <span key={tag} className={`text-xs px-2.5 py-0.5 rounded-full bg-black/30 ${cat.accent} font-medium border border-white/10`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="absolute top-5 right-5 text-white/20 group-hover:text-white/60 transition-colors text-lg">→</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Free Interactive Tools */}
      <section className="section-padding bg-gradient-to-b from-black via-slate-900/20 to-black border-t border-white/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 border border-primary-500/30 rounded-full px-4 py-1.5 text-sm text-primary-400 font-medium mb-4 bg-primary-500/5">
              Free Tools
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Try Before You Engage
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Get real value from our interactive tools before booking a single call. All free, no signup required.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool, i) => (
              <Link
                key={i}
                href={tool.href}
                className="group glass-effect-lg rounded-2xl border border-white/8 p-6 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">{tool.desc}</p>
                <div className="text-sm font-semibold text-primary-400 group-hover:gap-2 transition-all flex items-center gap-1.5">
                  {tool.cta} <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
