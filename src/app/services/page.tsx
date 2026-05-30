import { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import ServicesGrid from '@/components/home/ServicesGrid';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Services | DITconsult',
  description: 'Comprehensive cybersecurity consulting services including cloud security, compliance, incident response, and more.',
  keywords: ['cybersecurity services', 'cloud security', 'compliance', 'incident response', 'penetration testing'],
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-b from-black via-slate-900/20 to-black flex items-center py-20">
        <div className="container-custom text-center">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive Solutions"
            description="Full-spectrum cybersecurity consulting tailored to your organization's unique challenges and regulatory requirements."
            centered
            size="lg"
          />
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* CTA */}
      <CTASection />
    </>
  );
}
