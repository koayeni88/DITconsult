import { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import GlassmorphismCard from '@/components/common/GlassmorphismCard';
import Button from '@/components/common/Button';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Incident Response Planning | DITconsult',
  description: 'Develop and validate incident response procedures. Tabletop exercises, team training, and communication frameworks.',
  keywords: ['incident response', 'incident response planning', 'breach response', 'incident management'],
};

export default function IncidentResponsePage() {
  const services = [
    { title: 'Incident Response Planning', description: 'Develop comprehensive plans and procedures', icon: '📋' },
    { title: 'Tabletop Exercises', description: 'Validate plans and identify gaps through simulations', icon: '🎯' },
    { title: 'Response Team Training', description: 'Prepare your team to respond effectively', icon: '👥' },
    { title: 'Communication Frameworks', description: 'Establish clear communication protocols', icon: '💬' },
    { title: 'Forensics Coordination', description: 'Guidance on forensic investigations', icon: '🔍' },
    { title: 'Recovery Planning', description: 'Business continuity and disaster recovery', icon: '🔄' },
  ];

  const planning = [
    'Current state assessment of incident response maturity',
    'Industry best practices and frameworks (NIST, SANS)',
    'IR plan development and documentation',
    'Role and responsibility definition',
    'Communication escalation procedures',
    'Ongoing training and exercise schedule',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] bg-gradient-to-b from-black via-slate-900/20 to-black flex items-center py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionHeading
              title="Incident Response Planning"
              subtitle="Prepare for Threats"
              description="Develop, validate, and maintain incident response procedures that enable your organization to detect, respond to, and recover from security incidents quickly and effectively."
              centered={false}
              size="lg"
            />
            <Button asLink href="/contact" variant="primary" size="lg" className="mt-8">
              Develop Your IR Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <SectionHeading title="Our Services" centered size="md" />
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

      {/* Planning Process */}
      <section className="section-padding bg-slate-950/50 border-y border-white/10">
        <div className="container-custom">
          <SectionHeading
            title="IR Planning Process"
            description="What's included in our consulting"
            centered
            size="md"
          />
          <div className="space-y-4 mt-12 max-w-2xl mx-auto">
            {planning.map((item, index) => (
              <div key={index} className="glass-effect rounded-lg p-4 flex gap-4">
                <span className="text-primary-400 font-bold flex-shrink-0">{index + 1}</span>
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
