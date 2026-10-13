import { Metadata } from 'next';
import SecurityRoadmapGenerator from '@/components/tools/SecurityRoadmapGenerator';

export const metadata: Metadata = {
  title: 'Illustrative Security Roadmap Generator',
  alternates: { canonical: '/security-roadmap' },
  description: 'An illustrative 30/60/90-day cybersecurity planning aid based on the answers you supply. It is not a scoped engagement plan or certification.',
  keywords: ['security roadmap', 'cybersecurity plan', '30 60 90 day plan', 'cloud security roadmap'],
};

export default function RoadmapPage() {
  return <SecurityRoadmapGenerator />;
}
