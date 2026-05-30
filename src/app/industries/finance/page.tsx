import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Cybersecurity for Finance & Fintech | DITconsult',
  description: 'PCI DSS, SOC 2, and financial services cybersecurity. Protect cardholder data, meet regulatory requirements, and secure cloud banking infrastructure.',
};

export default function FinancePage() {
  return (
    <IndustryPageTemplate
      industry="Finance & Fintech"
      badge="PCI DSS · SOC 2 · Financial Services"
      headline="Enterprise Security for"
      headlineAccent="Finance & Fintech"
      subheadline="PCI DSS compliance, SOC 2 readiness, and cloud security for banks, fintechs, and financial services companies."
      heroIcon="🏦"
      challenges={[
        { icon: '💳', title: 'PCI DSS Compliance', desc: 'Processing payments requires PCI DSS compliance — scope definition, network segmentation, encryption, and quarterly scanning must all be maintained.' },
        { icon: '🏴‍☠️', title: 'Financial Fraud & APT Attacks', desc: 'Financial institutions are prime targets for sophisticated nation-state and criminal threat actors using supply chain attacks, insider threats, and account takeover.' },
        { icon: '☁️', title: 'Cloud Banking Security', desc: 'Moving core banking to AWS, Azure, or GCP introduces new misconfiguration risks, data sovereignty questions, and regulatory examination expectations.' },
        { icon: '⚖️', title: 'Regulatory Examinations', desc: 'OCC, FFIEC, FDIC, and state regulators examine cybersecurity programs. Gaps can result in enforcement actions, fines, and reputational damage.' },
      ]}
      services={[
        { title: 'PCI DSS Assessment & Remediation', desc: 'Scoping, gap assessment, and remediation support for PCI DSS v4.0 compliance across your cardholder data environment.', link: '/compliance' },
        { title: 'SOC 2 Readiness for Fintechs', desc: 'SOC 2 Type II readiness assessment, policy development, evidence collection, and auditor coordination.', link: '/compliance' },
        { title: 'Cloud Security for Financial Services', desc: 'Security assessment and hardening of cloud environments hosting financial applications, APIs, and customer data.', link: '/cloud-security' },
        { title: 'FFIEC Cybersecurity Assessment', desc: 'Assessment against the FFIEC Cybersecurity Assessment Tool (CAT) to prepare for regulatory examinations.', link: '/services' },
        { title: 'Penetration Testing', desc: 'External and internal penetration testing of financial applications, APIs, and network infrastructure.', link: '/services' },
        { title: 'Incident Response Planning', desc: 'Financial-services-specific IR plan development and testing, including regulatory notification procedures.', link: '/incident-response' },
      ]}
      frameworks={['PCI DSS v4.0', 'SOC 2 Type II', 'NIST CSF', 'FFIEC CAT', 'ISO 27001', 'GLBA Safeguards Rule']}
      stats={[
        { label: 'Finance breach cost', value: '$6.1M', sub: 'average per incident' },
        { label: 'Fintech growth', value: '3x', sub: 'increase in cloud-native threats' },
        { label: 'PCI fines', value: '$100K/mo', sub: 'for non-compliance' },
      ]}
      cta="Schedule a Financial Services Assessment"
    />
  );
}
