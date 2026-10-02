import type { Metadata } from 'next';
import { COMPANY_NAME, FOUNDER, SITE_URL } from '@/lib/constants';
import { CREDENTIALS, EDUCATION } from '@/lib/founder-profile';

export const metadata: Metadata = {
  title: 'Founder',
  alternates: { canonical: '/founder' },
  description: `Meet ${FOUNDER.name}, President and CEO of ${COMPANY_NAME}, with over 15 years of experience in Information Technology. Cloud security, compliance readiness, and remediation consulting.`,
  keywords: [
    FOUNDER.name,
    `${COMPANY_NAME} founder`,
    'President and CEO',
    'cybersecurity consultant',
    'over 15 years Information Technology experience',
    'cloud security advisor',
    'CISM',
    'CEH',
    'CJIS',
  ],
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: FOUNDER.name,
  jobTitle: FOUNDER.title,
  url: `${SITE_URL}/founder`,
  image: `${SITE_URL}${FOUNDER.photoSrc}`,
  sameAs: [FOUNDER.linkedin],
  worksFor: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_URL },
  knowsAbout: [
    'Cloud security',
    'Compliance readiness',
    'Security remediation',
    'Virtual CISO advisory',
    'Corporate cybersecurity and IT training',
  ],
  hasCredential: CREDENTIALS.map((credential) => ({
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'certification',
    name: credential.name,
    recognizedBy: { '@type': 'Organization', name: credential.org },
  })),
  alumniOf: EDUCATION.map((degree) => ({
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'degree',
    name: degree.degree,
  })),
};

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {children}
    </>
  );
}
