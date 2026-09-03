import { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { getServiceBySlug } from '@/lib/services-data';

const data = getServiceBySlug('cloud-security')!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: { canonical: '/cloud-security' },
};

export default function CloudSecurityPage() {
  return <ServicePageTemplate data={data} />;
}
