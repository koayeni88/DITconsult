import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Cybersecurity for Startups | DITconsult',
  description: 'Security-by-design for fast-growing startups. SOC 2 readiness, cloud security, and investor-ready security posture without slowing down development.',
};

export default function StartupsPage() {
  return (
    <IndustryPageTemplate
      industry="Startups"
      badge="SOC 2 · Cloud-Native · Move Fast Securely"
      headline="Security That Scales"
      headlineAccent="With Your Startup"
      subheadline="Build security into your product from day one. Close enterprise deals faster with SOC 2, protect user data, and satisfy investor due diligence."
      heroIcon="🚀"
      challenges={[
        { icon: '📈', title: 'Enterprise Customers Require SOC 2', desc: 'Closing B2B deals often requires SOC 2 compliance. Without it, deals stall or fall through during security reviews — costing months of runway.' },
        { icon: '⚡', title: 'Speed vs. Security', desc: 'Startups move fast and security is often an afterthought. Technical debt accumulated early becomes expensive and painful to unwind at Series A or B.' },
        { icon: '👥', title: 'No Security Staff', desc: 'Most startups cannot afford to hire a CISO or dedicated security team. Security responsibilities fall on engineering or are ignored entirely.' },
        { icon: '☁️', title: 'Cloud-Native Attack Surface', desc: 'Modern startups are all-in on cloud — AWS, GCP, or Azure with dozens of SaaS tools. Each misconfiguration or overly permissive IAM policy is a potential breach.' },
      ]}
      services={[
        { title: 'SOC 2 Fast-Track Program', desc: 'Get SOC 2 Type II ready in 3–6 months. We handle gap assessment, policy creation, evidence collection prep, and auditor coordination.', link: '/compliance' },
        { title: 'Cloud Security Architecture Review', desc: 'Architecture review and hardening of your AWS/GCP/Azure environment — IAM, networking, data stores, and deployment pipelines.', link: '/cloud-security' },
        { title: 'DevSecOps Integration', desc: 'Add security gates to your CI/CD pipeline — SAST, secret scanning, container scanning, and IaC security — without slowing your team down.', link: '/services' },
        { title: 'Security Questionnaire Support', desc: 'Help you complete and respond to enterprise security questionnaires from potential customers during the sales process.', link: '/services' },
        { title: 'Investor & Board Security Reporting', desc: 'Prepare security posture summaries and risk reports for investor due diligence and board presentations.', link: '/services' },
        { title: 'Fractional CISO for Startups', desc: 'On-demand CISO-level guidance at a fraction of the cost — security strategy, vendor reviews, and customer calls included.', link: '/virtual-ciso' },
      ]}
      frameworks={['SOC 2 Type II', 'NIST CSF', 'CIS Controls v8', 'OWASP Top 10', 'ISO 27001 (Series A+)']}
      stats={[
        { label: 'Deals lost to security', value: '35%', sub: 'of B2B deals blocked by security reviews' },
        { label: 'SOC 2 timeline', value: '3–6 mo', sub: 'with expert guidance' },
        { label: 'Investor requirement', value: 'Growing', sub: 'security posture in due diligence' },
      ]}
      cta="Start Your SOC 2 Journey"
    />
  );
}
