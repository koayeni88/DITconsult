import { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import GlassmorphismCard from '@/components/common/GlassmorphismCard';
import Button from '@/components/common/Button';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Virtual CISO Services | DITconsult',
  description: 'Strategic cybersecurity leadership and Chief Information Security Officer services for organizations building or scaling security functions.',
  keywords: ['virtual CISO', 'CISO', 'cybersecurity strategy', 'security leadership', 'security advisory'],
};

export default function VirtualCISOPage() {
  const services = [
    { title: 'Strategic Planning', description: 'Multi-year security roadmap development', icon: '🗺️' },
    { title: 'Board Reporting', description: 'Executive and board-level security updates', icon: '📊' },
    { title: 'Policy Development', description: 'Security policies and procedures', icon: '📋' },
    { title: 'Risk Management', description: 'Enterprise risk assessment and mitigation', icon: '⚖️' },
    { title: 'Team Leadership', description: 'Guidance and mentoring for security teams', icon: '👔' },
    { title: 'Vendor Management', description: 'Security vendor evaluation and oversight', icon: '🤝' },
  ];

  const benefits = [
    'Experienced security leadership without full-time hire cost',
    'Strategic roadmap aligned with business objectives',
    'Executive credibility and board-level presence',
    'Risk-based decision making and prioritization',
    'Industry best practices and benchmarking',
    'Crisis leadership and incident response oversight',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] bg-gradient-to-b from-black via-slate-900/20 to-black flex items-center py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionHeading
              title="Virtual CISO Services"
              subtitle="Executive Security Leadership"
              description="Strategic cybersecurity guidance and Chief Information Security Officer-level leadership. Perfect for organizations building security functions or seeking experienced strategic guidance."
              centered={false}
              size="lg"
            />
            <Button asLink href="/contact" variant="primary" size="lg" className="mt-8">
              Schedule Executive Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <SectionHeading title="vCISO Engagements" centered size="md" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <GlassmorphismCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                size="md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why vCISO */}
      <section className="section-padding bg-slate-950/50 border-y border-white/10">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Virtual CISO"
            description="Strategic benefits of our approach"
            centered
            size="md"
          />
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
