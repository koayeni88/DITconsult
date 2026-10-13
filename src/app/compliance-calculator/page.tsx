import { Metadata } from 'next';
import ComplianceCalculator from '@/components/tools/ComplianceCalculator';

export const metadata: Metadata = {
  title: 'Illustrative Compliance Readiness Calculator',
  alternates: { canonical: '/compliance-calculator' },
  description: 'An illustrative readiness estimator for NIST CSF, SOC 2, ISO 27001, HIPAA, PCI DSS, and CMMC. Results are educational and are not an attestation or certification.',
  keywords: ['compliance readiness', 'NIST CSF', 'SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS', 'CMMC'],
};

export default function CompliancePage() {
  return <ComplianceCalculator />;
}
