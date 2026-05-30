import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Cybersecurity for Healthcare | DITconsult',
  description: 'HIPAA-compliant cybersecurity services for hospitals, clinics, and digital health companies. Protect PHI, pass audits, and respond to ransomware.',
  keywords: ['healthcare cybersecurity', 'HIPAA compliance', 'PHI security', 'hospital security', 'ransomware healthcare'],
};

export default function HealthcarePage() {
  return (
    <IndustryPageTemplate
      industry="Healthcare"
      badge="HIPAA · PHI Protection · Ransomware Defense"
      headline="Cybersecurity Built for"
      headlineAccent="Healthcare Organizations"
      subheadline="Protect patient data, pass HIPAA audits, and respond to ransomware — without disrupting care delivery."
      heroIcon="🏥"
      challenges={[
        { icon: '🔐', title: 'PHI Data Breaches', desc: 'Healthcare suffers the highest average breach cost of any industry — $10.9M per incident. EHR systems and medical devices are prime targets.' },
        { icon: '💊', title: 'Ransomware Attacks', desc: 'Hospitals face targeted ransomware that disrupts clinical operations, delays patient care, and forces costly system recoveries.' },
        { icon: '📋', title: 'HIPAA Compliance', desc: 'HIPAA Security Rule compliance is mandatory but complex. Gaps in risk analysis, BAAs, and technical safeguards create serious regulatory risk.' },
        { icon: '🩺', title: 'Medical Device Security', desc: 'Connected medical devices (IoMT) often run outdated software and cannot be patched, creating persistent network vulnerabilities.' },
      ]}
      services={[
        { title: 'HIPAA Security Rule Assessment', desc: 'Full risk analysis against HIPAA administrative, physical, and technical safeguards with documented findings and remediation plan.', link: '/compliance' },
        { title: 'Ransomware Preparedness', desc: 'Backup strategy, network segmentation, IR plan testing, and tabletop exercises specifically designed for healthcare operational environments.', link: '/incident-response' },
        { title: 'EHR & Cloud Security Review', desc: 'Security assessment of Epic, Cerner, and cloud-hosted EHR configurations, including access control, audit logging, and data protection controls.', link: '/cloud-security' },
        { title: 'Medical Device Security Assessment', desc: 'Inventory and risk assessment of connected medical devices with network isolation recommendations and compensating controls.', link: '/services' },
        { title: 'Business Associate Agreement Review', desc: 'Review and remediation of BAA gaps with vendors and cloud providers handling PHI on your behalf.', link: '/compliance' },
        { title: 'Virtual CISO for Healthcare', desc: 'Fractional CISO providing ongoing security leadership, board reporting, and regulatory guidance without the cost of a full-time hire.', link: '/virtual-ciso' },
      ]}
      frameworks={['HIPAA Security Rule', 'NIST CSF', 'HITRUST', 'SOC 2', 'CIS Controls v8']}
      stats={[
        { label: 'Healthcare breach cost', value: '$10.9M', sub: 'average per incident' },
        { label: 'Ransomware targets', value: '1 in 3', sub: 'healthcare orgs hit per year' },
        { label: 'PHI exposed in 2024', value: '184M', sub: 'records breached' },
      ]}
      cta="Get a HIPAA Security Assessment"
    />
  );
}
