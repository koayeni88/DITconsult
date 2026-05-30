import { Metadata } from 'next';
import ComplianceCalculator from '@/components/tools/ComplianceCalculator';

export const metadata: Metadata = {
  title: 'Compliance Readiness Calculator | DITconsult',
  description: 'Assess your readiness for NIST CSF, SOC 2, ISO 27001, HIPAA, PCI DSS, and CMMC with our interactive compliance calculator.',
  keywords: ['compliance readiness', 'NIST CSF', 'SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS', 'CMMC'],
};

export default function CompliancePage() {
  return <ComplianceCalculator />;
}
