import type { Metadata } from 'next';
import { COMPANY_NAME, FOUNDER } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Founder | ${COMPANY_NAME}`,
  description: `Meet ${FOUNDER.name}, founder of ${COMPANY_NAME}, with ${FOUNDER.experienceYears} years of cybersecurity and IT experience. Cloud security, compliance readiness, and remediation consulting.`,
  keywords: [
    FOUNDER.name,
    `${COMPANY_NAME} founder`,
    'cybersecurity consultant',
    '15+ years cybersecurity experience',
    'cloud security advisor',
    'CISM',
    'CEH',
  ],
};

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
