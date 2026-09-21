import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import CapabilityStrip from '@/components/home/CapabilityStrip';
import CoreStrengths from '@/components/home/CoreStrengths';
import CustomerProblems from '@/components/home/CustomerProblems';
import FeaturedServices from '@/components/home/FeaturedServices';
import CorporateTrainingSection from '@/components/home/CorporateTrainingSection';
import PackagedEngagements from '@/components/home/PackagedEngagements';
import FeaturedTools from '@/components/home/FeaturedTools';
import AIRemediationSection from '@/components/home/AIRemediationSection';
import IndustriesServed from '@/components/home/IndustriesServed';
import ProcessSection from '@/components/home/ProcessSection';
import DeliverablesSection from '@/components/home/DeliverablesSection';
import ExampleEngagements from '@/components/home/ExampleEngagements';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';
import { HOMEPAGE_FAQS } from '@/lib/content';
import { COMPANY_NAME, COMPANY_DESCRIPTION } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cybersecurity & Cloud Security Consulting',
  description: COMPANY_DESCRIPTION,
  keywords: [
    'DiTconsult',
    'cybersecurity consulting',
    'cloud security consulting',
    'AWS security assessment',
    'Azure security assessment',
    'Google Cloud security assessment',
    'multi-cloud security',
    'compliance readiness consulting',
    'risk-prioritized remediation',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: `${COMPANY_NAME} | Cybersecurity & Cloud Security Consulting`,
    description: COMPANY_DESCRIPTION,
    url: 'https://ditconsult.com',
    images: [{ url: '/logo.png', width: 1024, height: 390, alt: `${COMPANY_NAME} logo` }],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function Home() {
  return (
    <div className="cyber-home relative bg-navy-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <CapabilityStrip />
      <CoreStrengths />
      <CustomerProblems />
      <FeaturedServices />
      <CorporateTrainingSection />
      <PackagedEngagements />
      <FeaturedTools />
      <AIRemediationSection />
      <IndustriesServed />
      <ProcessSection />
      <DeliverablesSection />
      <ExampleEngagements />
      <FAQSection />
      <CTASection />
    </div>
  );
}
