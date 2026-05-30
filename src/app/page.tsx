import HeroSection from '@/components/home/HeroSection';
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
