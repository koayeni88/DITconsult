import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { COMPANY_NAME, COMPANY_DESCRIPTION, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_TAGLINE } from '@/lib/constants';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeProvider from '@/components/common/ThemeProvider';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | Cybersecurity Consulting`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: [
    'cybersecurity consulting',
    'cloud security consulting',
    'AWS security',
    'Azure security',
    'vulnerability management',
    'compliance readiness',
    'NIST',
    'CIS Controls',
    'ISO 27001',
    'SOC 2',
    'incident response',
    'vCISO services',
    'risk management',
  ],
  authors: [{ name: COMPANY_NAME }],
  metadataBase: new URL('https://ditconsult.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ditconsult.com',
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | ${COMPANY_TAGLINE}`,
    description: COMPANY_DESCRIPTION,
    images: [{ url: '/logo.png', width: 1024, height: 390, alt: `${COMPANY_NAME} logo` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} | Cybersecurity Consulting`,
    description: COMPANY_DESCRIPTION,
    images: ['/logo.png'],
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: [{ url: '/apple-touch-icon.png' }],
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
    'Cybersecurity Consulting',
    'Cloud Security Consulting',
    'AWS and Azure Security Assessments',
    'Compliance Readiness',
    'Incident Response Readiness',
    'Vulnerability Management',
    'vCISO Advisory Services',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-navy-900 text-white font-sans antialiased">
        <ThemeProvider>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
