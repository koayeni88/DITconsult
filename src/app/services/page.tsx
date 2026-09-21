import { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import CTASection from '@/components/home/CTASection';
import { SERVICES, COMPANY_TAGLINE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cybersecurity Services',
  description:
    'Cloud security assessments, compliance readiness, vulnerability management, incident response planning, DevSecOps, virtual CISO, and corporate cybersecurity and IT training.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding-sm bg-gradient-to-b from-navy-900 to-navy-950 border-b border-white/10">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">{COMPANY_TAGLINE}</p>
            <SectionHeading
              title="Cybersecurity services for cloud, compliance, and resilience"
              description="Practical consulting engagements with clear scope, deliverables, and risk-prioritized recommendations."
              centered={false}
              size="lg"
              as="h1"
            />
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy-900">
        <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="glass-effect-lg rounded-2xl p-7 hover:border-primary-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 transition-smooth group h-full flex flex-col"
            >
              <h2 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                {service.title}
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">{service.shortDescription}</p>
              <span className="inline-block mt-4 text-primary-400 text-sm font-semibold group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
