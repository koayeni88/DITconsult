import Link from 'next/link';
import Button from '@/components/common/Button';
import SectionHeading from '@/components/common/SectionHeading';
import { TRAINING_PAGE, TRAINING_CATEGORIES, FLAGSHIP_WORKSHOPS } from '@/lib/training';
import CyberAtmosphere from './CyberAtmosphere';

export default function CorporateTrainingSection() {
  return (
    <section
      className="cyber-section-alt section-padding border-y border-primary-500/15"
      aria-labelledby="corporate-training-heading"
    >
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
          <div>
            <SectionHeading
              id="corporate-training-heading"
              title={TRAINING_PAGE.homepageHeadline}
              subtitle="Corporate Training"
              description={TRAINING_PAGE.homepageCopy}
              centered={false}
              size="lg"
            />
            <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-xl">
              Explore a proposed curriculum framework spanning core cybersecurity, security operations, application
              security, AI and cybersecurity, governance, and corporate IT—plus 12 proposed courses and four flagship
              workshops. Courses can be tailored from foundational to expert. These are discussion starters, not a fixed
              public course catalog.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asLink href="/corporate-training" variant="primary" size="lg">
                Explore Corporate Training
              </Button>
              <Button asLink href="/contact?service=corporate-training" variant="secondary" size="lg">
                Discuss Your Training Needs
              </Button>
            </div>
          </div>

          <aside className="cyber-panel p-7" aria-label="Curriculum categories">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary-400 mb-4">
              Curriculum categories
            </h3>
            <ul className="space-y-3">
              {TRAINING_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/corporate-training#${category.id}`}
                    className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
                  >
                    <span className="text-primary-400 shrink-0 mt-0.5" aria-hidden="true">
                      →
                    </span>
                    <span>{category.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-white/45 leading-relaxed">
              Flagship workshops: {FLAGSHIP_WORKSHOPS.map((w) => w.title.replace(' Workshop', '')).join('; ')}.
            </p>
            <Link
              href="/contact?service=corporate-training"
              className="inline-block mt-5 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
            >
              Request a Training Proposal →
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
