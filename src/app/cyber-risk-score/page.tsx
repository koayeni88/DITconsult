import { Metadata } from 'next';
import CyberRiskScoreTool from '@/components/tools/CyberRiskScoreTool';

export const metadata: Metadata = {
  title: 'Free Cyber Risk Score | DITconsult',
  description: 'Answer 10 quick questions and receive a personalized cyber risk rating with actionable recommendations — free from DITconsult.',
  keywords: ['cyber risk score', 'free security assessment', 'cybersecurity rating', 'risk evaluation'],
};

export default function CyberRiskScorePage() {
  return <CyberRiskScoreTool />;
}
