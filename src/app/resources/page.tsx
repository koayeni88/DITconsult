import { Metadata } from 'next';
import ResourceLibraryPage from '@/components/tools/ResourceLibraryPage';

export const metadata: Metadata = {
  title: 'Cybersecurity Resource Library',
  description: 'Checklists, incident response templates, and compliance readiness guides from DiTconsult. Materials are educational starting points and are not certifications or formal assessments.',
  keywords: ['cybersecurity resources', 'free checklists', 'incident response template', 'compliance guide', 'security policy templates'],
  alternates: { canonical: '/resources' },
};

export default function ResourcesPage() {
  return <ResourceLibraryPage />;
}
