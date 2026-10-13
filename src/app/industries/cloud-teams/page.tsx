import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Cloud and Platform Team Security Consulting',
  alternates: { canonical: '/industries/cloud-teams' },
  description:
    'IAM, infrastructure-as-code, Kubernetes, and CI/CD control review for engineering teams running AWS, Azure, and Google Cloud.',
};

export default function CloudTeamsPage() {
  return (
    <IndustryPageTemplate
      industry="Cloud Teams"
      badge="IAM · IaC · Kubernetes"
      headline="Security advisory for"
      headlineAccent="Cloud and platform teams"
      subheadline="Review identity, infrastructure as code, containers, and pipeline controls so engineering can ship with fewer high-impact gaps."
      heroIcon="☁️"
      challenges={[
        {
          icon: '⚙️',
          title: 'IaC mistakes that replicate at scale',
          desc: 'Insecure defaults in Terraform, Bicep, or CloudFormation copy across accounts and regions. Manual review rarely keeps pace with delivery.',
        },
        {
          icon: '🐳',
          title: 'Kubernetes and container exposure',
          desc: 'Privileged pods, weak RBAC, and reachable dashboards create a large blast radius when clusters sit near the public internet.',
        },
        {
          icon: '🔑',
          title: 'Secrets and standing privilege',
          desc: 'Hardcoded credentials, long-lived keys, and broad IAM roles extend the impact of a single compromised identity or pipeline.',
        },
        {
          icon: '🔄',
          title: 'Pipeline controls that teams ignore',
          desc: 'Gates that block every build or flood chat channels lose support. Platform teams need high-signal checks and clear owners.',
        },
      ]}
      services={[
        {
          title: 'Multi-cloud posture review',
          desc: 'Assessment of AWS, Azure, and Google Cloud against CIS Benchmarks and your policies, with a risk-ranked remediation backlog.',
          link: '/cloud-security',
        },
        {
          title: 'Kubernetes and container review',
          desc: 'Cluster hardening, RBAC, network policy, and admission-control recommendations for container workloads.',
          link: '/cloud-security',
        },
        {
          title: 'IaC and pipeline guardrails',
          desc: 'Add configuration and image checks to infrastructure-as-code and CI/CD so issues are caught before production.',
          link: '/devsecops',
        },
        {
          title: 'DevSecOps program design',
          desc: 'Right-sized SAST, secrets detection, software composition analysis, and container scanning in the SDLC you already run.',
          link: '/devsecops',
        },
        {
          title: 'Cloud IAM and privilege review',
          desc: 'Policies, service accounts, and assumed roles reviewed for least-privilege gaps across cloud accounts and related SaaS admin paths.',
          link: '/cloud-security',
        },
        {
          title: 'Cloud detection and response design',
          desc: 'Configure native detection services and write runbooks your on-call engineers can execute. Active incident retainers are scoped separately.',
          link: '/incident-response',
        },
      ]}
      frameworks={['CIS Benchmarks (AWS / Azure / Google Cloud)', 'NIST CSF', 'SOC 2 (readiness)', 'ISO/IEC 27001 (readiness)', 'OWASP Top 10']}
      stats={[
        { label: 'Configuration risk', value: 'IaC', sub: 'Terraform, Bicep, and pipeline control review' },
        { label: 'Runtime exposure', value: 'Kubernetes', sub: 'RBAC, network policy, and cluster hardening' },
        { label: 'Access risk', value: 'IAM', sub: 'Least-privilege review across cloud accounts' },
      ]}
      cta="Schedule a Security Consultation"
    />
  );
}
