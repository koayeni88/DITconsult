import { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import GlassmorphismCard from '@/components/common/GlassmorphismCard';
import Button from '@/components/common/Button';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Compliance Readiness | DITconsult',
  description: 'NIST, ISO 27001, SOC 2, HIPAA, and PCI DSS compliance consulting. Get audit-ready with strategic guidance.',
  keywords: ['compliance', 'NIST', 'ISO 27001', 'SOC 2', 'HIPAA', 'PCI DSS', 'compliance readiness'],
};

export default function CompliancePage() {
  const frameworks = [
    { title: 'NIST Cybersecurity Framework', icon: '📋' },
    { title: 'ISO 27001 Certification', icon: '✓' },
    { title: 'SOC 2 Type II', icon: '🔐' },
    { title: 'HIPAA Security', icon: '🏥' },
    { title: 'PCI DSS', icon: '💳' },
    { title: 'Custom Compliance', icon: '⚙️' },
  ];

  const benefits = [
    'Strategic compliance roadmap aligned with business objectives',
    'Gap analysis against target frameworks',
    'Control implementation guidance',
    'Audit preparation and readiness',
    'Continuous compliance monitoring recommendations',
    'Staff training and awareness programs',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] bg-gradient-to-b from-black via-slate-900/20 to-black flex items-center py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionHeading
              title="Compliance Readiness"
              subtitle="Meet Your Regulatory Requirements"
              description="Strategic consulting to achieve and maintain compliance with NIST, ISO 27001, SOC 2, HIPAA, PCI DSS, and other regulatory frameworks."
              centered={false}
              size="lg"
            />
            <Button asLink href="/contact" variant="primary" size="lg" className="mt-8">
              Start Your Compliance Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <SectionHeading title="Compliance Frameworks" centered size="md" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {frameworks.map((framework, index) => (
              <GlassmorphismCard
                key={index}
                icon={framework.icon}
                title={framework.title}
                size="md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-slate-950/50 border-y border-white/10">
        <div className="container-custom">
          <SectionHeading title="How We Help" centered size="md" />
          <div className="space-y-4 mt-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-effect rounded-lg p-4 flex gap-4">
                <span className="text-primary-400 font-bold flex-shrink-0">✓</span>
                <span className="text-white/70">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
