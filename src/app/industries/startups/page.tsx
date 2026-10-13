import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'SaaS and Startup Cybersecurity Consulting',
  alternates: { canonical: '/industries/startups' },
  description:
    'Cloud architecture review, SOC 2 readiness, and customer-questionnaire support for product companies selling to enterprise buyers. Independent auditors issue SOC 2 reports.',
};

export default function StartupsPage() {
  return (
    <IndustryPageTemplate
      industry="Startups"
      badge="SOC 2 Readiness · Cloud Architecture · vCISO"
      headline="Security that supports"
      headlineAccent="Product and company growth"
      subheadline="Review cloud architecture, prepare for SOC 2 and enterprise security questionnaires, and give leadership a clear view of risk. Independent auditors issue SOC 2 reports."
      heroIcon="🚀"
      challenges={[
        {
          icon: '📈',
          title: 'Enterprise buyers expect evidence',
          desc: 'Security questionnaires and SOC 2 requests often appear late in the sales cycle. Incomplete controls and documentation stall diligence and delay revenue.',
        },
        {
          icon: '⚡',
          title: 'Security debt in early architecture',
          desc: 'Identity, tenancy, logging, and secrets decisions made under delivery pressure become expensive to unwind before investor or customer reviews.',
        },
        {
          icon: '👥',
          title: 'No dedicated security owner',
          desc: 'Security work frequently sits with engineering or a founder. Prioritization, vendor reviews, and customer security calls lack a consistent owner.',
        },
        {
          icon: '☁️',
          title: 'Cloud and SaaS sprawl',
          desc: 'AWS, Azure, or Google Cloud plus a long SaaS stack expand identity and data exposure when IAM, keys, and admin roles stay overly broad.',
        },
      ]}
      services={[
        {
          title: 'SOC 2 readiness advisory',
          desc: 'Gap assessment, policy and evidence planning, and auditor coordination. DiTconsult does not issue SOC 2 reports or attestations.',
          link: '/compliance',
        },
        {
          title: 'Cloud architecture review',
          desc: 'IAM, networking, data stores, and deployment-pipeline review across AWS, Azure, and Google Cloud.',
          link: '/cloud-security',
        },
        {
          title: 'DevSecOps advisory',
          desc: 'SAST, secret scanning, container checks, and infrastructure-as-code review designed to fit the CI/CD process you already run.',
          link: '/devsecops',
        },
        {
          title: 'Security questionnaire support',
          desc: 'Help complete enterprise customer questionnaires with accurate, consistent answers tied to your actual controls.',
          link: '/services',
        },
        {
          title: 'Investor and board risk reporting',
          desc: 'Plain-language posture summaries for diligence and board updates — not a substitute for an audit.',
          link: '/services',
        },
        {
          title: 'Fractional CISO for product companies',
          desc: 'Security strategy, vendor reviews, and customer security discussions without a full-time CISO hire.',
          link: '/virtual-ciso',
        },
      ]}
      frameworks={['SOC 2 (readiness)', 'NIST CSF', 'CIS Controls', 'OWASP Top 10', 'ISO/IEC 27001 (readiness)']}
      stats={[
        { label: 'Enterprise sales', value: 'SOC 2', sub: 'Readiness planning for customer security reviews' },
        { label: 'Product security', value: 'Cloud', sub: 'IAM, storage, and pipeline control review' },
        { label: 'Leadership', value: 'vCISO', sub: 'Fractional security direction without a full-time hire' },
      ]}
      cta="Discuss SOC 2 Readiness"
    />
  );
}
