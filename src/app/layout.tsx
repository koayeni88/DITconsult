import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { COMPANY_NAME, COMPANY_DESCRIPTION, COMPANY_EMAIL, COMPANY_PHONE } from '@/lib/constants';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | Enterprise Cybersecurity Consulting`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: [
    'cybersecurity consulting',
    'cloud security',
    'AWS security',
    'Azure security',
    'GCP security',
    'compliance readiness',
    'incident response',
    'virtual CISO',
    'DevSecOps',
  ],
  authors: [{ name: COMPANY_NAME }],
  metadataBase: new URL('https://ditconsult.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ditconsult.com',
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Enterprise Cybersecurity Consulting`,
    description: COMPANY_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: COMPANY_NAME,
  description: COMPANY_DESCRIPTION,
  url: 'https://ditconsult.com',
  email: COMPANY_EMAIL,
  telephone: COMPANY_PHONE,
  areaServed: 'US',
  serviceType: [
    'Cloud Security Assessment',
    'Compliance Readiness',
    'Incident Response Planning',
    'Virtual CISO',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230066ff'/><text x='50' y='72' font-size='56' font-weight='bold' fill='white' text-anchor='middle' font-family='system-ui'>D</text></svg>"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-black text-white font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-20 md:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
