import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SERVICE_SLUGS } from '@/lib/services-data';

const staticRoutes = [
  '',
  '/about',
  '/contact',
  '/services',
  '/industries',
  '/cloud-security',
  '/compliance',
  '/incident-response',
  '/virtual-ciso',
  '/privacy',
  '/terms',
  '/industries/healthcare',
  '/industries/finance',
  '/industries/education',
  '/industries/government',
  '/industries/startups',
  '/industries/small-business',
  '/blog/multi-cloud-security-assessment-guide',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...staticRoutes,
    ...SERVICE_SLUGS.filter((s) => !staticRoutes.includes(`/${s}`)).map((s) => `/${s}`),
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/industries') ? 0.7 : 0.8,
  }));
}
