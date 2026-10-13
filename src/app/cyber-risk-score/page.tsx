import { Metadata } from 'next';
import CyberRiskScoreTool from '@/components/tools/CyberRiskScoreTool';

export const metadata: Metadata = {
  title: 'Illustrative Cyber Risk Score',
  alternates: { canonical: '/cyber-risk-score' },
  description: 'An illustrative 10-question questionnaire that produces a directional cyber risk rating. It is not an audit, assessment, or certification.',
  keywords: ['cyber risk score', 'illustrative security questionnaire', 'cybersecurity rating', 'risk discussion'],
};

export default function CyberRiskScorePage() {
  return <CyberRiskScoreTool />;
}
