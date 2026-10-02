import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SERVICE_SLUGS } from '@/lib/services-data';
import { INSIGHTS } from '@/lib/insights';

const staticRoutes = [
  '',
  '/about',
  '/founder',
  '/contact',
  '/services',
  '/corporate-training',
  '/industries',
  '/cloud-security',
  '/compliance',
  '/incident-response',
  '/virtual-ciso',
  '/resources',
  '/trust-center',
  '/blog',
  '/privacy',
  '/terms',
  '/industries/healthcare',
  '/industries/finance',
  '/industries/education',
  '/industries/government',
  '/industries/startups',
  '/industries/small-business',
  '/industries/cloud-teams',
  '/cyber-risk-score',
  '/compliance-calculator',
  '/security-maturity',
  '/security-roadmap',
  '/cloud-misconfiguration-demo',
];

// Excluded on purpose: /executive-dashboard is disallowed in robots.ts, so listing it
// here would report as "indexed URL blocked by robots.txt" in Search Console.

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...staticRoutes,
    ...SERVICE_SLUGS.filter((s) => !staticRoutes.includes(`/${s}`)).map((s) => `/${s}`),
    ...INSIGHTS.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/industries') ? 0.7 : 0.8,
  }));
}
