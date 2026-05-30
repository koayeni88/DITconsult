import { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About DITconsult | Cybersecurity Consulting',
  description: 'Learn about DITconsult\'s mission, team, and approach to cybersecurity consulting.',
  keywords: ['about', 'cybersecurity consultants', 'team', 'mission', 'values'],
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-b from-black via-slate-900/20 to-black flex items-center py-20">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <SectionHeading
            title="About DITconsult"
            subtitle="Our Story"
            description="We're a team of experienced cybersecurity professionals dedicated to helping organizations build resilient security postures and respond confidently to modern threats."
            centered
            size="lg"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-black">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="Our Mission"
              description="Empower organizations with practical, expert cybersecurity guidance that builds resilience, reduces risk, and enables confident business growth."
              centered={false}
              size="md"
            />
          </div>
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-4">Core Values</h3>
            <ul className="space-y-3">
              {[
                'Practical expertise grounded in real-world experience',
                'Transparency and clear communication',
                'Business-focused recommendations',
                'Commitment to excellence',
                'Ethical and professional conduct',
              ].map((value, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-white/70">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-slate-950/50 border-y border-white/10">
        <div className="container-custom">
          <SectionHeading
            title="Our Approach"
            description="How we deliver cybersecurity excellence"
            centered
            size="md"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Listen', description: 'We understand your unique challenges, industry, and business objectives.' },
              { title: 'Assess', description: 'We conduct thorough, professional assessments to identify risks and gaps.' },
              { title: 'Guide', description: 'We provide clear, actionable recommendations aligned with your strategy.' },
            ].map((item, i) => (
              <div key={i} className="glass-effect rounded-xl p-6 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
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
