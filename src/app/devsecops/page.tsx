import { Metadata } from 'next';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { getServiceBySlug } from '@/lib/services-data';

const data = getServiceBySlug('devsecops')!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: { canonical: '/devsecops' },
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
