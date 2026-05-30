import { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import GlassmorphismCard from '@/components/common/GlassmorphismCard';
import Button from '@/components/common/Button';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Cloud Security Consulting | DITconsult',
  description: 'Enterprise cloud security assessment for AWS, Azure, and GCP. Identify and eliminate misconfigurations, strengthen your cloud posture.',
  keywords: ['cloud security', 'AWS security', 'Azure security', 'GCP security', 'cloud assessment', 'cloud remediation'],
};

export default function CloudSecurityPage() {
  const benefits = [
    'Multi-cloud assessment (AWS, Azure, GCP)',
    'Misconfiguration identification and remediation',
    'Access control and identity management review',
    'Data protection and encryption validation',
    'Network security architecture assessment',
    'Compliance alignment and governance',
  ];

  const deliverables = [
    'Comprehensive security inventory',
    'Risk assessment report with prioritization',
    'Remediation roadmap',
    'Executive summary',
    'Technical deep-dive documentation',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] bg-gradient-to-b from-black via-slate-900/20 to-black flex items-center py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionHeading
              title="Cloud Security Consulting"
              subtitle="Secure Your Cloud Infrastructure"
              description="Comprehensive security assessment and remediation for AWS, Azure, and GCP environments. Eliminate misconfigurations, strengthen access controls, and protect cloud data."
              centered={false}
              size="lg"
            />
            <Button asLink href="/contact" variant="primary" size="lg" className="mt-8">
              Get Cloud Security Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <SectionHeading title="What's Included" centered size="md" />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <GlassmorphismCard key={index} icon="✓" title={benefit} size="sm" />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-950/50 border-y border-white/10">
        <div className="container-custom">
          <SectionHeading
            title="Our Assessment Process"
            description="A systematic approach to cloud security"
            centered
            size="md"
          />
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {['Discovery', 'Analysis', 'Reporting', 'Roadmap'].map((step, index) => (
              <div key={index} className="glass-effect rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-primary-400 mb-2">{index + 1}</div>
                <h3 className="font-semibold text-white">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <SectionHeading
            title="Deliverables"
            description="What you'll receive"
            centered
            size="md"
          />
          <div className="space-y-4 mt-12 max-w-2xl mx-auto">
            {deliverables.map((item, index) => (
              <div key={index} className="glass-effect rounded-lg p-4 flex gap-4">
                <span className="text-primary-400 font-bold flex-shrink-0">→</span>
                <span className="text-white/70">{item}</span>
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
