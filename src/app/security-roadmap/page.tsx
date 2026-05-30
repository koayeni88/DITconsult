import { Metadata } from 'next';
import SecurityRoadmapGenerator from '@/components/tools/SecurityRoadmapGenerator';

export const metadata: Metadata = {
  title: 'Security Roadmap Generator | DITconsult',
  description: 'Get a personalized 30/60/90-day cybersecurity improvement roadmap based on your business type and cloud environment.',
  keywords: ['security roadmap', 'cybersecurity plan', '30 60 90 day plan', 'cloud security roadmap'],
};

export default function RoadmapPage() {
  return <SecurityRoadmapGenerator />;
}
