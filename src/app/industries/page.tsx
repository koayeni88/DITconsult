import { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import CTASection from '@/components/home/CTASection';
import { INDUSTRIES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Cybersecurity consulting for healthcare, financial services, education, government contractors, SaaS companies, and growing businesses.',
  alternates: { canonical: '/industries' },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="section-padding-sm bg-gradient-to-b from-navy-900 to-navy-950 border-b border-white/10">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Industries' }]} />
          <div className="mt-8 max-w-3xl">
            <SectionHeading
              title="Security consulting tailored to your industry"
              subtitle="Industries"
              description="Regulatory requirements, data sensitivity, and operational models differ by sector. We align assessments and advisory to your context."
              centered={false}
              size="lg"
              as="h1"
            />
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy-900">
        <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.id}
              href={industry.href}
              className="glass-effect-lg rounded-2xl p-7 hover:border-primary-500/30 transition-smooth group"
            >
              <h2 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                {industry.name}
              </h2>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">{industry.description}</p>
              <ul className="space-y-2">
                {industry.outcomes.map((o) => (
                  <li key={o} className="text-white/50 text-xs flex gap-2">
                    <span className="text-primary-400">→</span>
                    {o}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
