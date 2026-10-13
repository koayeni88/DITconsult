import { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';
import CTASection from '@/components/home/CTASection';
import { DIVISIONS, HOMEPAGE_DIVISION_INTRO } from '@/lib/divisions';
import { PROCESS_STEPS, INDUSTRIES } from '@/lib/content';
import { COMPANY_TAGLINE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Consulting and Training Services',
  description:
    'DiTconsult organizes its work into four divisions: cybersecurity consulting, IT and digital transformation advisory, corporate training, and educational consulting.',
  alternates: { canonical: '/services' },
};

const faqs = [
  {
    question: 'How should I choose a division?',
    answer:
      'Start with the problem. Security assessments, cloud posture, compliance, and vCISO work sit in cybersecurity. Modernization and technology planning sit in IT advisory. Workforce skill development sits in corporate training. Campus and university initiatives sit in educational consulting.',
  },
  {
    question: 'Will I be asked to buy a bundled program?',
    answer:
      'No. After a short discovery conversation we recommend a scoped next step. Individual service pages remain available when you already know the work you need.',
  },
  {
    question: 'Does DiTconsult issue certifications or degrees?',
    answer:
      'No. We provide consulting, readiness advisory, and proposed training. Independent auditors issue certifications. Universities issue academic credentials.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding-sm bg-gradient-to-b from-navy-900 to-navy-950 border-b border-white/10">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">{COMPANY_TAGLINE}</p>
            <SectionHeading
              title={HOMEPAGE_DIVISION_INTRO.title}
              description={HOMEPAGE_DIVISION_INTRO.description}
              centered={false}
              size="lg"
              as="h1"
            />
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy-900">
        <div className="container-custom grid md:grid-cols-2 gap-6">
          {DIVISIONS.map((division) => (
            <article key={division.id} className="glass-effect-lg rounded-2xl p-7 flex flex-col">
              <h2 className="text-xl font-bold text-white mb-3">{division.title}</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{division.overview}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {division.homepageCapabilities.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/70">
                    <span className="text-primary-400 shrink-0" aria-hidden="true">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={division.href} className="text-primary-400 text-sm font-semibold hover:underline">
                {division.homepageCta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding-sm bg-navy-950/80 border-y border-white/10">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              title="Consulting approach"
              description="Every engagement begins with discovery. We confirm scope, rank the work, and leave deliverables your teams can execute."
              centered={false}
              size="md"
            />
            <ol className="mt-8 space-y-4">
              {PROCESS_STEPS.map((step) => (
                <li key={step.number} className="glass-effect rounded-xl p-5">
                  <p className="text-primary-400 text-xs font-bold tracking-widest uppercase mb-1">
                    {String(step.number).padStart(2, '0')} {step.title}
                  </p>
                  <p className="text-white/65 text-sm leading-relaxed">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading
              title="Industry relevance"
              description="Industries explain how the four divisions apply to a sector. They do not replace the service catalog."
              centered={false}
              size="md"
            />
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {INDUSTRIES.map((industry) => (
                <li key={industry.id}>
                  <Link
                    href={industry.href}
                    className="block glass-effect rounded-xl p-4 text-sm text-white/75 hover:text-white hover:border-primary-500/40 transition-smooth"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy-900">
        <div className="container-custom max-w-3xl">
          <SectionHeading title="Frequently asked questions" centered={false} size="md" />
          <dl className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass-effect rounded-xl p-6">
                <dt className="text-white font-semibold mb-2">{faq.question}</dt>
                <dd className="text-white/65 text-sm leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <Button asLink href="/contact" variant="primary" size="lg">
              Schedule a Security Consultation
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
