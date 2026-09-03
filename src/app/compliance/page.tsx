import { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { getServiceBySlug } from '@/lib/services-data';

const data = getServiceBySlug('compliance')!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: { canonical: '/compliance' },
};

export default function CompliancePage() {
  return <ServicePageTemplate data={data} />;
}
