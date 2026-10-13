import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Financial Services Cybersecurity Consulting',
  alternates: { canonical: '/industries/finance' },
  description:
    'PCI DSS and SOC 2 readiness, cloud control review, and examination preparation for banks, fintechs, and payment teams. DiTconsult does not issue certifications.',
};

export default function FinancePage() {
  return (
    <IndustryPageTemplate
      industry="Finance & Fintech"
      badge="PCI DSS · SOC 2 · Cloud Controls"
      headline="Security advisory for"
      headlineAccent="Financial services and fintech"
      subheadline="Map payment and customer-data controls, prepare for PCI DSS or SOC 2 reviews, and reduce cloud misconfiguration risk in regulated environments."
      heroIcon="🏦"
      challenges={[
        {
          icon: '💳',
          title: 'Cardholder-data scope',
          desc: 'PCI DSS requires a defined cardholder data environment, segmentation, encryption, and recurring testing. Unclear scope is a frequent source of findings and rework.',
        },
        {
          icon: '🏴‍☠️',
          title: 'Fraud and account takeover',
          desc: 'Payment and digital-banking channels attract credential abuse, social engineering, and targeted intrusion. Identity, transaction monitoring, and vendor access need consistent owners.',
        },
        {
          icon: '☁️',
          title: 'Cloud workloads under examination',
          desc: 'Core and customer applications on AWS, Azure, or Google Cloud raise configuration, identity, logging, and data-residency questions examiners and customers will ask.',
        },
        {
          icon: '⚖️',
          title: 'Regulatory examination readiness',
          desc: 'OCC, FFIEC, FDIC, and state reviews expect documented cybersecurity programs. Thin evidence and unclear control owners create examination risk.',
        },
      ]}
      services={[
        {
          title: 'PCI DSS readiness advisory',
          desc: 'Scoping, gap assessment, and remediation planning for your cardholder data environment. Qualified Security Assessors issue Reports on Compliance.',
          link: '/compliance',
        },
        {
          title: 'SOC 2 readiness for fintechs',
          desc: 'Trust Services Criteria gap analysis, policy and evidence planning, and auditor coordination support. Independent auditors issue SOC 2 reports.',
          link: '/compliance',
        },
        {
          title: 'Cloud security for financial workloads',
          desc: 'Identity, logging, encryption, and network review of environments hosting applications, APIs, and customer data.',
          link: '/cloud-security',
        },
        {
          title: 'FFIEC-aligned program review',
          desc: 'Advisory mapping to FFIEC cybersecurity expectations to support internal preparation for regulatory examinations.',
          link: '/services',
        },
        {
          title: 'Vulnerability assessment and test coordination',
          desc: 'Risk-ranked findings from assessments and coordinated testing of applications and APIs. Scope and tester selection are agreed before work begins.',
          link: '/vulnerability-assessment',
        },
        {
          title: 'Incident-response planning',
          desc: 'Playbooks and tabletop exercises that include financial-sector notification, customer communication, and evidence preservation.',
          link: '/incident-response',
        },
      ]}
      frameworks={['PCI DSS', 'SOC 2 (readiness)', 'NIST CSF', 'FFIEC CAT (mapping)', 'ISO/IEC 27001 (readiness)', 'GLBA Safeguards Rule']}
      stats={[
        { label: 'Payment data', value: 'PCI DSS', sub: 'Scope, segmentation, and control readiness' },
        { label: 'Customer trust', value: 'SOC 2', sub: 'Readiness advisory before an independent audit' },
        { label: 'Cloud operations', value: 'Multi-cloud', sub: 'AWS, Azure, and Google Cloud posture review' },
      ]}
      cta="Schedule a Security Consultation"
    />
  );
}
