import { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';
import CTASection from '@/components/home/CTASection';
import {
  TRAINING_PAGE,
  TRAINING_CATEGORIES,
  TRAINING_AREAS,
  PROPOSED_COURSES,
  FLAGSHIP_WORKSHOPS,
  LEVEL_LABELS,
  LEVEL_BADGE_CLASS,
  PREPARATION_LABELS,
  getAreasByCategory,
} from '@/lib/training';
import { COMPANY_NAME, COMPANY_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Corporate Cybersecurity & IT Training',
  description: TRAINING_PAGE.metaDescription,
  alternates: { canonical: '/corporate-training' },
  openGraph: {
    title: `Corporate Cybersecurity & IT Training | ${COMPANY_NAME}`,
    description: TRAINING_PAGE.metaDescription,
    url: 'https://ditconsult.com/corporate-training',
  },
};

export default function CorporateTrainingPage() {
  const specialistAreas = TRAINING_AREAS.filter((area) => area.preparationNeeds?.length);

  return (
    <>
      <section className="section-padding-sm bg-gradient-to-b from-navy-900 to-navy-950 border-b border-white/10">
        <div className="container-custom max-w-3xl">
          <Breadcrumbs items={[{ label: 'Corporate Training' }]} />
          <div className="mt-8">
            <SectionHeading
              title={TRAINING_PAGE.h1}
              description={TRAINING_PAGE.intro}
              centered={false}
              size="lg"
              as="h1"
            />
            <p className="mt-5 text-sm text-white/55 leading-relaxed">{TRAINING_PAGE.frameworkNote}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asLink href="/contact?service=corporate-training" variant="primary" size="lg">
                Discuss Your Training Needs
              </Button>
              <Button asLink href="/contact?service=corporate-training" variant="secondary" size="lg">
                Request a Training Proposal
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/50">
              <a
                href="/corporate-cybersecurity-it-training.pdf"
                className="text-primary-400 hover:text-primary-300 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
                download
              >
                Download training overview (PDF)
              </a>
            </p>
          </div>
        </div>
      </section>

      <nav
        className="bg-navy-950 border-b border-white/10 py-4"
        aria-label="Curriculum categories"
      >
        <div className="container-custom">
          <ul className="flex flex-wrap gap-2 md:gap-3">
            {TRAINING_CATEGORIES.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="inline-block rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs md:text-sm text-white/70 hover:text-white hover:border-primary-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                >
                  {category.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#proposed-courses"
                className="inline-block rounded-lg border border-primary-500/30 bg-primary-500/10 px-3 py-1.5 text-xs md:text-sm text-primary-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                12 Proposed Courses
              </a>
            </li>
            <li>
              <a
                href="#flagship-workshops"
                className="inline-block rounded-lg border border-gold-400/30 bg-gold-400/10 px-3 py-1.5 text-xs md:text-sm text-gold-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                4 Flagship Workshops
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="section-padding bg-navy-900" aria-labelledby="curriculum-heading">
        <div className="container-custom">
          <SectionHeading
            id="curriculum-heading"
            title="Proposed curriculum framework"
            subtitle="19 training areas"
            description="Potential topics organizations can discuss with us—grouped for easier navigation. Each area can be tailored from foundational through expert based on your team’s experience."
            centered
            size="md"
          />

          <div className="mt-14 space-y-16">
            {TRAINING_CATEGORIES.map((category) => {
              const areas = getAreasByCategory(category.id);
              return (
                <div key={category.id} id={category.id} className="scroll-mt-28">
                  <div className="mb-8 max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h2>
                    <p className="mt-2 text-white/60 text-sm md:text-base leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {areas.map((area) => (
                      <article
                        key={area.id}
                        id={area.id}
                        className="glass-effect-lg rounded-2xl p-6 md:p-8 border border-white/10 scroll-mt-28"
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="font-mono text-xs text-primary-400">
                            {String(area.number).padStart(2, '0')}
                          </span>
                          <span
                            className={`rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${LEVEL_BADGE_CLASS[area.level]}`}
                          >
                            {LEVEL_LABELS[area.level]}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{area.title}</h3>
                        <p className="mt-3 text-sm text-white/65 leading-relaxed">{area.description}</p>
                        <p className="mt-3 text-sm text-white/65 leading-relaxed">
                          <span className="font-semibold text-gold-400/90">Intended audience: </span>
                          {area.audience}
                        </p>

                        <div className="mt-6 grid lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-3">
                              Example learning outcomes
                            </h4>
                            <ul className="space-y-2 text-sm text-white/70">
                              {area.objectives.map((objective) => (
                                <li key={objective} className="flex gap-2">
                                  <span className="text-primary-400 shrink-0" aria-hidden="true">
                                    ✓
                                  </span>
                                  {objective}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-3">
                              Potential topics
                            </h4>
                            <ul className="space-y-2 text-sm text-white/70">
                              {area.topics.map((topic) => (
                                <li
                                  key={topic}
                                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5"
                                >
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {area.preparationNote && (
                          <p className="mt-5 text-xs text-white/45 leading-relaxed border-t border-white/10 pt-4">
                            <span className="font-semibold text-white/55">Delivery note: </span>
                            {area.preparationNote}
                            {area.preparationNeeds && (
                              <>
                                {' '}
                                (
                                {area.preparationNeeds
                                  .map((need) => PREPARATION_LABELS[need])
                                  .join('; ')}
                                )
                              </>
                            )}
                          </p>
                        )}

                        <div className="mt-6">
                          <Button
                            asLink
                            href={`/contact?service=corporate-training&topic=${area.id}`}
                            variant="primary"
                            size="md"
                          >
                            Discuss Your Training Needs
                          </Button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="proposed-courses"
        className="section-padding-sm bg-navy-950 border-y border-white/10 scroll-mt-28"
        aria-labelledby="proposed-courses-heading"
      >
        <div className="container-custom">
          <SectionHeading
            id="proposed-courses-heading"
            title="12 proposed courses"
            subtitle="Recommended starting set"
            description="An initial proposed course set drawn from the curriculum framework. Each course can be scoped from foundational to expert. These are discussion starters for scoping—not a claim that all 12 are currently scheduled."
            centered
            size="md"
          />
          <ol className="mt-10 grid md:grid-cols-2 gap-4">
            {PROPOSED_COURSES.map((course, index) => (
              <li
                key={course.areaId}
                className="glass-effect rounded-xl p-5 border border-white/10"
              >
                <p className="font-mono text-xs text-primary-400 mb-2">
                  Course {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-lg font-bold text-white">{course.title}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white/45">
                  {LEVEL_LABELS[course.level]}
                </p>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{course.focus}</p>
                <Link
                  href={`/corporate-training#${course.areaId}`}
                  className="inline-block mt-3 text-sm font-semibold text-primary-400 hover:text-primary-300"
                >
                  View curriculum area →
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="flagship-workshops"
        className="section-padding-sm bg-navy-900 scroll-mt-28"
        aria-labelledby="flagship-heading"
      >
        <div className="container-custom">
          <SectionHeading
            id="flagship-heading"
            title="Four flagship workshops"
            subtitle="Recommended workshops"
            description="Shorter, high-impact workshop formats we recommend discussing first for broad organizational value."
            centered
            size="md"
          />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {FLAGSHIP_WORKSHOPS.map((workshop) => (
              <article
                key={workshop.id}
                id={workshop.id}
                className="glass-effect-lg rounded-2xl p-6 border border-gold-400/20"
              >
                <h3 className="text-xl font-bold text-white">{workshop.title}</h3>
                <p className="mt-2 text-sm text-gold-300/90">
                  <span className="font-semibold">Audience: </span>
                  {workshop.audience}
                </p>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{workshop.summary}</p>
                <Button
                  asLink
                  href={`/contact?service=corporate-training&topic=${workshop.relatedAreaIds[0]}`}
                  variant="secondary"
                  size="md"
                  className="mt-5"
                >
                  Request a Training Proposal
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {specialistAreas.length > 0 && (
        <section
          className="section-padding-sm bg-navy-950 border-y border-white/10"
          aria-labelledby="prep-heading"
        >
          <div className="container-custom max-w-3xl">
            <SectionHeading
              id="prep-heading"
              title="Areas that need additional preparation"
              subtitle="Delivery readiness"
              description="Some curriculum areas typically require specialist instructors, dedicated labs, or further preparation before delivery. We will discuss readiness with you during scoping."
              centered={false}
              size="md"
            />
            <ul className="mt-8 space-y-3 text-sm text-white/70">
              {specialistAreas.map((area) => (
                <li key={area.id} className="glass-effect rounded-xl p-4">
                  <Link href={`#${area.id}`} className="font-semibold text-white hover:text-primary-300">
                    {area.number}. {area.title}
                  </Link>
                  <p className="mt-1 text-white/50 text-xs leading-relaxed">
                    {area.preparationNeeds?.map((need) => PREPARATION_LABELS[need]).join(' · ')}
                    {area.preparationNote ? ` — ${area.preparationNote}` : ''}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section
        className="section-padding-sm bg-navy-900 border-y border-white/10"
        aria-labelledby="tell-us-heading"
      >
        <div className="container-custom max-w-3xl">
          <SectionHeading
            id="tell-us-heading"
            title="Tell Us About Your Team"
            subtitle="Training inquiry"
            description={TRAINING_PAGE.discussNote}
            centered={false}
            size="md"
          />
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-sm text-white/70">
            <li className="glass-effect rounded-xl p-5">Training goals</li>
            <li className="glass-effect rounded-xl p-5">Topics of interest</li>
            <li className="glass-effect rounded-xl p-5">Team size</li>
            <li className="glass-effect rounded-xl p-5">Current experience level (foundational → expert)</li>
            <li className="glass-effect rounded-xl p-5">Preferred delivery format</li>
            <li className="glass-effect rounded-xl p-5">Preferred timeframe</li>
          </ul>
          <p className="mt-6 text-sm text-white/50 leading-relaxed">
            Prices, schedules, durations, and certifications or accreditation details are provided after you contact
            us. Start with the inquiry form, or email{' '}
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary-400 hover:underline">
              {COMPANY_EMAIL}
            </a>
            .
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asLink href="/contact?service=corporate-training" variant="primary" size="lg">
              Request a Training Proposal
            </Button>
            <Button asLink href="/services" variant="secondary" size="lg">
              View All Services
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/45">
            Related offering:{' '}
            <Link href="/security-awareness" className="text-primary-400 hover:underline">
              Security Awareness Training
            </Link>
            .
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
