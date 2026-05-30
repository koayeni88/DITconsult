import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Cybersecurity for Government Contractors | DITconsult',
  description: 'CMMC 2.0, NIST SP 800-171, and DoD contractor cybersecurity. Protect CUI, pass assessments, and maintain your DoD contract eligibility.',
};

export default function GovernmentPage() {
  return (
    <IndustryPageTemplate
      industry="Government Contractors"
      badge="CMMC 2.0 · NIST 800-171 · CUI Protection"
      headline="CMMC Readiness for"
      headlineAccent="DoD Contractors"
      subheadline="Protect Controlled Unclassified Information (CUI), achieve CMMC certification, and maintain your DoD contract eligibility."
      heroIcon="🏛️"
      challenges={[
        { icon: '📜', title: 'CMMC 2.0 Certification Mandate', desc: 'New DoD contracts require CMMC 2.0 certification. Level 2 requires a formal third-party assessment (C3PAO) — preparation takes 6–18 months.' },
        { icon: '🔐', title: 'CUI Handling Requirements', desc: 'Contractors must protect Controlled Unclassified Information per NIST SP 800-171. Identifying where CUI lives is the first and often hardest step.' },
        { icon: '📄', title: 'System Security Plan (SSP)', desc: 'A complete and accurate SSP is required for contract award and CMMC assessment. Many contractors have incomplete or outdated plans.' },
        { icon: '🏢', title: 'Supply Chain & Subcontractor Risk', desc: 'Prime contractors are responsible for ensuring subcontractors handling CUI also meet CMMC requirements — creating complex supply chain obligations.' },
      ]}
      services={[
        { title: 'CMMC 2.0 Gap Assessment', desc: 'Assessment of your environment against all 110 NIST SP 800-171 practices with a scored gap report and prioritized remediation plan.', link: '/compliance' },
        { title: 'System Security Plan (SSP) Development', desc: 'Create or update your SSP to accurately reflect your environment, systems, and controls in the format required for CMMC assessment.', link: '/services' },
        { title: 'POA&M Development & Tracking', desc: 'Build and manage a Plan of Action and Milestones to track remediation of CMMC gaps with defined timelines and owners.', link: '/services' },
        { title: 'CUI Scoping & Data Flow Mapping', desc: 'Identify and document all systems, networks, and cloud services that process, store, or transmit CUI to define accurate assessment scope.', link: '/services' },
        { title: 'CMMC Pre-Assessment Readiness', desc: 'A full mock assessment before your C3PAO engagement to identify and fix remaining gaps and avoid costly assessment failures.', link: '/compliance' },
        { title: 'Cloud Environment for CUI (GovCloud)', desc: 'Assessment and guidance for using AWS GovCloud, Azure Government, or other FedRAMP-authorized cloud services for CUI workloads.', link: '/cloud-security' },
      ]}
      frameworks={['CMMC 2.0 Level 1 & 2', 'NIST SP 800-171 Rev 3', 'DFARS 252.204-7012', 'FAR 52.204-21', 'FedRAMP', 'NIST SP 800-53']}
      stats={[
        { label: 'CMMC contracts', value: '300K+', sub: 'DoD contractor companies affected' },
        { label: 'Assessment timeline', value: '6–18 mo', sub: 'typical CMMC readiness period' },
        { label: 'Contract risk', value: 'High', sub: 'non-compliance = contract loss' },
      ]}
      cta="Start CMMC Readiness Assessment"
    />
  );
}
