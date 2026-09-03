import { Metadata } from 'next';
import ResourceLibraryPage from '@/components/tools/ResourceLibraryPage';

export const metadata: Metadata = {
  title: 'Free Cybersecurity Resources | DiTconsult',
  description: 'Download free cybersecurity checklists, incident response templates, compliance guides, and security frameworks from DiTconsult.',
  keywords: ['cybersecurity resources', 'free checklists', 'incident response template', 'compliance guide', 'security policy templates'],
};

export default function ResourcesPage() {
  return <ResourceLibraryPage />;
}
