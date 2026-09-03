import { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { getServiceBySlug } from '@/lib/services-data';

const data = getServiceBySlug('virtual-ciso')!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: { canonical: '/virtual-ciso' },
};

export default function VirtualCISOPage() {
  return <ServicePageTemplate data={data} />;
}
