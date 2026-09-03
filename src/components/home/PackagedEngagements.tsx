import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { ENGAGEMENT_PACKAGES } from '@/lib/content';
import CyberAtmosphere from './CyberAtmosphere';

export default function PackagedEngagements() {
  return (
    <section className="cyber-section-alt section-padding" aria-labelledby="packages-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <SectionHeading
          id="packages-heading"
          title="Packaged engagements—easy to understand, easy to start"
          subtitle="Security Engagements"
          description="Choose a clear offer based on your immediate need. Every package ends with actionable deliverables and a recommended next step."
          centered
          size="lg"
        />
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {ENGAGEMENT_PACKAGES.map((pkg) => (
            <article key={pkg.id} className="cyber-panel p-7 flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-gold-400/90 text-xs font-semibold uppercase tracking-wide mb-2">Best for</p>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">{pkg.bestFor}</p>
              <p className="text-primary-400/90 text-xs font-semibold uppercase tracking-wide mb-2">Includes</p>
              <ul className="space-y-2 mb-5 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-white/65 text-sm">
                    <span className="text-primary-400 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/75 text-sm mb-6 leading-relaxed">
                <span className="text-white font-semibold">Outcome: </span>
                {pkg.outcome}
              </p>
              <Button asLink href={`/contact?service=${pkg.id}`} variant="primary" size="md" className="w-full">
                {pkg.cta}
              </Button>
              <Link href={pkg.href} className="mt-3 text-center text-primary-400 text-sm font-semibold hover:underline">
                Learn more about this service →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
