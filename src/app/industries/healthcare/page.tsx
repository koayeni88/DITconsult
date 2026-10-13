import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Healthcare Cybersecurity Consulting',
  alternates: { canonical: '/industries/healthcare' },
  description:
    'HIPAA Security Rule readiness, PHI access review, and incident-notification planning for hospitals, clinics, and digital health teams. Advisory only — DiTconsult does not issue certifications.',
};

export default function HealthcarePage() {
  return (
    <IndustryPageTemplate
      industry="Healthcare"
      badge="HIPAA · PHI · Incident Readiness"
      headline="Security advisory for"
      headlineAccent="Healthcare organizations"
      subheadline="Review PHI access, strengthen HIPAA-aligned controls, and plan notification workflows without claiming certification or interrupting clinical operations."
      heroIcon="🏥"
      challenges={[
        {
          icon: '🔐',
          title: 'PHI concentrated in clinical systems',
          desc: 'Electronic health records, imaging, and cloud stores hold patient data. Weak access control, incomplete audit logs, and uneven encryption leave records exposed to misuse or theft.',
        },
        {
          icon: '💊',
          title: 'Ransomware and care disruption',
          desc: 'Attacks on clinical and revenue-cycle systems can halt scheduling, records, and care coordination. Tested backup, segmentation, and notification plans matter more than tools alone.',
        },
        {
          icon: '📋',
          title: 'HIPAA Security Rule gaps',
          desc: 'Required risk analysis, Business Associate Agreements, and technical safeguards are often incomplete or outdated. Those gaps create regulatory, contractual, and patient-trust risk.',
        },
        {
          icon: '🩺',
          title: 'Connected medical devices',
          desc: 'Many IoMT devices cannot be patched on clinical timelines. Network isolation and compensating controls are often the practical way to reduce exposure.',
        },
      ]}
      services={[
        {
          title: 'HIPAA Security Rule readiness',
          desc: 'Gap analysis against administrative, physical, and technical safeguards, with documented findings and a remediation plan. Independent authorities determine compliance status.',
          link: '/compliance',
        },
        {
          title: 'Ransomware and incident readiness',
          desc: 'Backup strategy, segmentation guidance, notification-workflow planning, and tabletop exercises for clinical, IT, and leadership roles.',
          link: '/incident-response',
        },
        {
          title: 'EHR and cloud security review',
          desc: 'Access control, audit logging, and data-protection review of cloud-hosted clinical systems and supporting infrastructure.',
          link: '/cloud-security',
        },
        {
          title: 'Medical device network advisory',
          desc: 'Inventory support, risk ranking, and isolation recommendations for connected devices that cannot follow standard patch cycles.',
          link: '/services',
        },
        {
          title: 'Business Associate Agreement review',
          desc: 'Identify BAA and vendor-control gaps for parties that create, receive, maintain, or transmit PHI on your behalf.',
          link: '/compliance',
        },
        {
          title: 'Virtual CISO for healthcare',
          desc: 'Fractional security leadership for risk treatment, board reporting, and regulatory preparation when a full-time CISO is not in place.',
          link: '/virtual-ciso',
        },
      ]}
      frameworks={['HIPAA Security Rule', 'NIST CSF', 'HITRUST CSF (mapping)', 'SOC 2 (readiness)', 'CIS Controls']}
      stats={[
        { label: 'Patient data', value: 'PHI', sub: 'Access, encryption, and audit-logging review' },
        { label: 'Operational risk', value: 'Ransomware', sub: 'Backup, segmentation, and notification planning' },
        { label: 'Regulatory posture', value: 'HIPAA', sub: 'Security Rule readiness advisory, not certification' },
      ]}
      cta="Schedule a Security Consultation"
    />
  );
}
