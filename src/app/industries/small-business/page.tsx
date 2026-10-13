import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Cybersecurity Consulting for Growing Businesses',
  alternates: { canonical: '/industries/small-business' },
  description:
    'Practical identity, email, backup, and compliance-readiness guidance for organizations without a dedicated security team.',
};

export default function SmallBusinessPage() {
  return (
    <IndustryPageTemplate
      industry="Small Business"
      badge="Identity · Backup · Practical Controls"
      headline="Practical security for"
      headlineAccent="Growing businesses"
      subheadline="Prioritize the controls that reduce real exposure — identity, email, backup, and basic governance — without enterprise program overhead."
      heroIcon="🏪"
      challenges={[
        {
          icon: '🎯',
          title: 'You are still a target',
          desc: 'Attackers often prefer organizations with weaker email, identity, and backup practices, including as a path into larger customers or partners.',
        },
        {
          icon: '💸',
          title: 'Limited budget and staff',
          desc: 'Without a security hire, teams struggle to separate essential work from vendor noise and do not know which gaps to close first.',
        },
        {
          icon: '☁️',
          title: 'Cloud tools without baselines',
          desc: 'Microsoft 365, Google Workspace, accounting platforms, and file sharing introduce risk when MFA, external sharing, and admin roles stay at defaults.',
        },
        {
          icon: '🔑',
          title: 'Email and credential abuse',
          desc: 'Business email compromise and reused passwords remain common causes of wire fraud, mailbox takeover, and unauthorized vendor-payment changes.',
        },
      ]}
      services={[
        {
          title: 'Focused security assessment',
          desc: 'Identify the highest-impact exposures and produce a prioritized, budget-aware remediation plan your team can execute.',
          link: '/security-risk-assessment',
        },
        {
          title: 'Microsoft 365 and Google Workspace hardening',
          desc: 'Review identity, email, sharing, and administrator policies so everyday collaboration tools are not left at insecure defaults.',
          link: '/cloud-security',
        },
        {
          title: 'Identity, email, and backup guidance',
          desc: 'MFA, mailbox protection, and recovery planning sized to a small team rather than an enterprise control catalog.',
          link: '/services',
        },
        {
          title: 'Customer and insurance questionnaire support',
          desc: 'Practical help with customer security asks and cyber-insurance applications. We do not sell insurance or guarantee premiums or coverage.',
          link: '/compliance',
        },
        {
          title: 'Compliance readiness for smaller teams',
          desc: 'Right-sized policy and evidence guidance when customers or contracts request SOC 2-style controls or basic regulatory alignment.',
          link: '/compliance',
        },
        {
          title: 'Security awareness for small teams',
          desc: 'Short, role-relevant training on phishing, password hygiene, and social engineering.',
          link: '/security-awareness',
        },
      ]}
      frameworks={['CIS Controls (Implementation Group 1)', 'NIST CSF', 'SOC 2 (customer-driven readiness)', 'CMMC Level 1 (if in scope)']}
      stats={[
        { label: 'First priorities', value: 'Identity', sub: 'MFA, email, and access hygiene' },
        { label: 'Resilience', value: 'Backup', sub: 'Recovery planning for ransomware and outages' },
        { label: 'External asks', value: 'Readiness', sub: 'Customer and insurance questionnaire support' },
      ]}
      cta="Schedule a Security Consultation"
    />
  );
}
