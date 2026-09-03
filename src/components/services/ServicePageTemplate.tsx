import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import CTASection from '@/components/home/CTASection';
import { ServicePageData } from '@/types';

interface ServicePageTemplateProps {
  data: ServicePageData;
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  return (
    <>
      <section className="section-padding-sm bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900 border-b border-white/10">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: data.title },
            ]}
          />
          <div className="max-w-3xl mt-8">
            <SectionHeading
              title={data.title}
              subtitle={data.subtitle}
              description={data.heroDescription}
              centered={false}
              size="lg"
              as="h1"
            />
            <Button asLink href="/contact" variant="primary" size="lg" className="mt-8">
              Book a Security Consultation
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy-900">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">The problem</h2>
            <p className="text-white/70 leading-relaxed">{data.problem}</p>
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Who this is for</h3>
            <ul className="space-y-2">
              {data.audience.map((item) => (
                <li key={item} className="flex gap-3 text-white/70 text-sm">
                  <span className="text-primary-400 shrink-0" aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-white mb-4">Common warning signs</h3>
            <ul className="space-y-3">
              {data.warningSigns.map((sign) => (
                <li key={sign} className="flex gap-3 text-white/70 text-sm">
                  <span className="text-gold-400 shrink-0 font-bold" aria-hidden="true">!</span>
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy-950/80 border-y border-white/10">
        <div className="container-custom">
          <SectionHeading title="What is included" centered size="md" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {data.included.map((item) => (
              <div key={item} className="glass-effect rounded-xl p-5">
                <p className="text-white/80 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy-900">
        <div className="container-custom">
          <SectionHeading title="Engagement process" centered size="md" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {data.process.map((step, i) => (
              <div key={step.title} className="relative glass-effect rounded-xl p-6">
                <span className="text-primary-400 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-white font-semibold mt-2 mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy-950/80 border-y border-white/10">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Deliverables" centered={false} size="md" />
            <ul className="mt-6 space-y-3">
              {data.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-white/70 text-sm">
                  <span className="text-primary-400 shrink-0">✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {data.frameworks.map((f) => (
                  <span key={f} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs">
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {data.platforms.map((p) => (
                  <span key={p} className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {data.faqs.length > 0 && (
        <section className="section-padding-sm bg-navy-900">
          <div className="container-custom max-w-3xl">
            <SectionHeading title="Frequently asked questions" centered size="md" />
            <dl className="mt-10 space-y-6">
              {data.faqs.map((faq) => (
                <div key={faq.question} className="glass-effect rounded-xl p-6">
                  <dt className="text-white font-semibold mb-2">{faq.question}</dt>
                  <dd className="text-white/65 text-sm leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
