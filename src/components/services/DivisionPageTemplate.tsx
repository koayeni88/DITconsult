import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';
import CTASection from '@/components/home/CTASection';
import { BusinessDivision, DIVISIONS } from '@/lib/divisions';
import { COMPANY_TAGLINE } from '@/lib/constants';

export default function DivisionPageTemplate({ division }: { division: BusinessDivision }) {
  const otherDivisions = DIVISIONS.filter((item) => item.id !== division.id);

  return (
    <>
      <section className="section-padding-sm bg-gradient-to-b from-navy-900 to-navy-950 border-b border-white/10">
        <div className="container-custom max-w-3xl">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: division.shortTitle },
            ]}
          />
          <div className="mt-8">
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">{COMPANY_TAGLINE}</p>
            <SectionHeading
              title={division.headline}
              description={division.subheadline}
              centered={false}
              size="lg"
              as="h1"
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asLink href={division.primaryCtaHref} variant="primary" size="lg">
                {division.primaryCta}
              </Button>
              <Button asLink href="/services" variant="secondary" size="lg">
                View all divisions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-white/70 leading-relaxed">{division.overview}</p>
          {division.note && <p className="mt-4 text-sm text-white/50 leading-relaxed">{division.note}</p>}
        </div>
      </section>

      <section className="section-padding-sm bg-navy-950/80 border-y border-white/10">
        <div className="container-custom">
          <SectionHeading title="Challenges we help address" centered={false} size="md" />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {division.challenges.map((challenge) => (
              <article key={challenge.title} className="glass-effect rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">{challenge.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{challenge.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-padding-sm bg-navy-900 scroll-mt-28">
        <div className="container-custom">
          <SectionHeading
            title="Service categories"
            description="Established pages are linked below. Advisory topics without a dedicated page are discussed during scoping rather than published as empty offerings."
            centered={false}
            size="md"
          />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {division.services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="glass-effect-lg rounded-2xl p-6 hover:border-primary-500/40 transition-smooth group h-full flex flex-col"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-400/80 mb-2">
                  {service.status === 'established' ? 'Established offering' : 'Advisory topic'}
                </p>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1">{service.description}</p>
                <span className="mt-4 text-primary-400 text-sm font-semibold">View details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="strategy"
        className="section-padding-sm bg-navy-950/80 border-y border-white/10 scroll-mt-28"
      >
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <div id="modernization" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-4">Relevant technical expertise</h2>
            <ul className="space-y-3">
              {division.expertise.map((item) => (
                <li key={item} className="flex gap-3 text-white/70 text-sm">
                  <span className="text-primary-400 shrink-0" aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Consulting approach</h2>
            <ol className="space-y-4">
              {division.approach.map((step, index) => (
                <li key={step.title} className="glass-effect rounded-xl p-5">
                  <p className="text-primary-400 text-xs font-bold tracking-widest uppercase mb-1">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="edtech" className="section-padding-sm bg-navy-900 scroll-mt-28">
        <div id="curriculum" className="container-custom grid lg:grid-cols-2 gap-12 scroll-mt-28">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Potential deliverables</h2>
            <ul className="space-y-3">
              {division.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-white/70 text-sm">
                  <span className="text-primary-400 shrink-0" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Where this work applies</h2>
            <ul className="space-y-3">
              {division.industries.map((item) => (
                <li key={item} className="flex gap-3 text-white/70 text-sm">
                  <span className="text-gold-400 shrink-0" aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {division.faqs.length > 0 && (
        <section className="section-padding-sm bg-navy-950/80 border-y border-white/10">
          <div className="container-custom max-w-3xl">
            <SectionHeading title="Frequently asked questions" centered={false} size="md" />
            <dl className="mt-10 space-y-6">
              {division.faqs.map((faq) => (
                <div key={faq.question} className="glass-effect rounded-xl p-6">
                  <dt className="text-white font-semibold mb-2">{faq.question}</dt>
                  <dd className="text-white/65 text-sm leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="section-padding-sm bg-navy-900">
        <div className="container-custom">
          <h2 className="text-xl font-bold text-white mb-6">Other DiTconsult divisions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {otherDivisions.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="glass-effect rounded-xl p-5 hover:border-primary-500/40 transition-smooth"
              >
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.homepageDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
