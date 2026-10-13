import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'CMMC and FedRAMP Readiness Consulting',
  alternates: { canonical: '/industries/government' },
  description:
    'CMMC and FedRAMP readiness advisory for contractors handling CUI — gap analysis, SSP and POA&M support, and evidence planning. DiTconsult does not issue authorizations.',
};

export default function GovernmentPage() {
  return (
    <IndustryPageTemplate
      industry="Government Contractors"
      badge="CMMC · NIST 800-171 · FedRAMP Readiness"
      headline="CMMC and FedRAMP readiness for"
      headlineAccent="Government contractors"
      subheadline="Prepare CUI controls, documentation, and evidence for CMMC and FedRAMP-aligned reviews. Authorized third parties issue certifications and authorizations — we do not."
      heroIcon="🏛️"
      challenges={[
        {
          icon: '📜',
          title: 'CMMC contract expectations',
          desc: 'Department of Defense work increasingly requires CMMC alignment. Level 2 typically involves a C3PAO assessment. Readiness work should start before that formal assessment is scheduled.',
        },
        {
          icon: '🔐',
          title: 'Finding and protecting CUI',
          desc: 'Contractors must locate Controlled Unclassified Information across file shares, email, endpoints, and cloud services before controls can be scoped accurately.',
        },
        {
          icon: '📄',
          title: 'Incomplete SSPs and POA&Ms',
          desc: 'Assessors expect a current System Security Plan and a tracked Plan of Action and Milestones. Stale or generic documents are a common readiness gap.',
        },
        {
          icon: '🏢',
          title: 'Subcontractor flow-down',
          desc: 'Primes that share CUI remain accountable for supplier control expectations. Many programs have not documented which partners handle CUI or how those obligations are verified.',
        },
      ]}
      services={[
        {
          title: 'CMMC gap assessment',
          desc: 'Map current controls to CMMC and NIST SP 800-171 expectations. Produce a gap report and prioritized remediation plan. DiTconsult is not a C3PAO and does not issue CMMC status.',
          link: '/compliance',
        },
        {
          title: 'System Security Plan support',
          desc: 'Draft or update the SSP so it reflects actual systems, boundaries, and controls rather than a generic template.',
          link: '/services',
        },
        {
          title: 'POA&M development',
          desc: 'Build a Plan of Action and Milestones with owners, target dates, and residual-risk notes that your team can maintain.',
          link: '/services',
        },
        {
          title: 'CUI scoping and data-flow mapping',
          desc: 'Identify systems that process, store, or transmit CUI so the assessment boundary is defensible.',
          link: '/services',
        },
        {
          title: 'Pre-assessment readiness review',
          desc: 'An advisory dry-run against expected CMMC evidence. This is preparation support, not a certification decision.',
          link: '/compliance',
        },
        {
          title: 'Government cloud advisory',
          desc: 'Guidance for AWS GovCloud, Azure Government, and commercial services used for CUI. FedRAMP authorization is issued by authorizing officials, not DiTconsult.',
          link: '/cloud-security',
        },
      ]}
      frameworks={['CMMC 2.0 (Level 1 and 2 readiness)', 'NIST SP 800-171', 'DFARS 252.204-7012', 'FAR 52.204-21', 'FedRAMP (readiness)', 'NIST SP 800-53']}
      stats={[
        { label: 'Contract readiness', value: 'CMMC', sub: 'Gap analysis and evidence planning — not authorization' },
        { label: 'Sensitive data', value: 'CUI', sub: 'Scoping, handling, and control mapping' },
        { label: 'Cloud alignment', value: 'FedRAMP', sub: 'Readiness advisory for government cloud workloads' },
      ]}
      cta="Discuss CMMC Readiness"
    />
  );
}
