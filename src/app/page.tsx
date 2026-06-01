import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';

export const metadata: Metadata = {
  title: 'DITconsult | Enterprise Cybersecurity Consulting',
  description: 'DITconsult helps organizations identify cyber risk, strengthen cloud security, meet compliance requirements, and respond confidently to modern threats.',
  keywords: ['cybersecurity consulting', 'cloud security', 'compliance', 'incident response', 'virtual CISO', 'risk management'],
};
import StatsBar from '@/components/home/StatsBar';
import TrustBar from '@/components/home/TrustBar';
import ProblemSection from '@/components/home/ProblemSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProcessSection from '@/components/home/ProcessSection';
import IndustriesServed from '@/components/home/IndustriesServed';
import AIRemediationSection from '@/components/home/AIRemediationSection';
import CaseStudies from '@/components/home/CaseStudies';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <TrustBar />
      <ProblemSection />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSection />
      <IndustriesServed />
      <AIRemediationSection />
      <CaseStudies />
      <CTASection />
    </>
  );
}
