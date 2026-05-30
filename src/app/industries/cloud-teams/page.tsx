import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Cybersecurity for Cloud Teams | DITconsult',
  description: 'Cloud-native security, DevSecOps, and Kubernetes hardening for engineering teams. Secure your AWS, Azure, GCP workloads and shift security left.',
};

export default function CloudTeamsPage() {
  return (
    <IndustryPageTemplate
      industry="Cloud Teams"
      badge="Cloud-Native · DevSecOps · K8s Security"
      headline="Security Built for"
      headlineAccent="Cloud-Native Teams"
      subheadline="Embed security into every layer of your cloud infrastructure — from IaC pipelines to runtime containers — without slowing down your team."
      heroIcon="☁️"
      challenges={[
        { icon: '⚙️', title: 'IaC Misconfigurations at Scale', desc: 'Infrastructure as Code enables speed but misconfigurations in Terraform, Pulumi, or CloudFormation propagate instantly across environments. Most teams lack automated scanning.' },
        { icon: '🐳', title: 'Container & Kubernetes Attack Surface', desc: 'Kubernetes clusters running with privileged containers, exposed dashboards, or weak RBAC are a top attack vector — and many teams are unaware of their exposure.' },
        { icon: '🔑', title: 'Secrets & Credential Sprawl', desc: 'Hardcoded secrets in code, overly-permissive IAM roles, and misconfigured service accounts create persistent blast radius across cloud accounts.' },
        { icon: '🔄', title: 'Shifting Security Left Without Friction', desc: 'Engineering teams resist security tooling that slows CI/CD pipelines or generates noisy alerts. Effective DevSecOps requires targeted, high-signal controls.' },
      ]}
      services={[
        { title: 'Cloud Security Posture Management', desc: 'Continuous assessment of your AWS, Azure, or GCP environment against CIS Benchmarks, NIST, and custom policies — with prioritized remediation by risk.', link: '/cloud-security' },
        { title: 'Kubernetes & Container Security', desc: 'Cluster hardening, RBAC review, network policy design, admission controller configuration, and runtime threat detection for container workloads.', link: '/cloud-security' },
        { title: 'IaC Security Scanning', desc: 'Integrate Checkov, Trivy, or Semgrep into your Terraform and CloudFormation pipelines to catch misconfigurations before they reach production.', link: '/services' },
        { title: 'DevSecOps Program Design', desc: 'Build a right-sized security program into your SDLC — from pre-commit hooks and SAST to secrets detection, container scanning, and SCA in CI/CD.', link: '/services' },
        { title: 'Cloud IAM & Privilege Review', desc: 'Audit IAM policies, service accounts, and assumed roles for least-privilege violations and identify credential sprawl across cloud and SaaS.', link: '/cloud-security' },
        { title: 'Cloud Threat Detection & Response', desc: 'Configure GuardDuty, Microsoft Defender for Cloud, or GCP Security Command Center for meaningful alerting with runbooks for incident response.', link: '/incident-response' },
      ]}
      frameworks={['CIS Benchmarks (AWS/Azure/GCP)', 'NIST CSF', 'SOC 2 Type II', 'ISO 27001', 'OWASP Top 10', 'PCI DSS (cloud scope)']}
      stats={[
        { label: 'Cloud breaches', value: '82%', sub: 'involve misconfiguration or credential theft' },
        { label: 'Detection time', value: '197 days', sub: 'average time to detect cloud breach' },
        { label: 'IaC findings', value: '60%+', sub: 'of cloud issues start in code' },
      ]}
      cta="Get a Cloud Security Review"
    />
  );
}
