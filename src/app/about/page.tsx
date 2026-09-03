import { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Button from '@/components/common/Button';
import CTASection from '@/components/home/CTASection';
import { COMPANY_NAME, COMPANY_TAGLINE, FOUNDER } from '@/lib/constants';

export const metadata: Metadata = {
  title: `About ${COMPANY_NAME}`,
  description: `${COMPANY_NAME} provides practical, risk-based cybersecurity consulting for multi-cloud security, compliance readiness, and risk-prioritized remediation.`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding-sm bg-gradient-to-b from-navy-900 to-navy-950 border-b border-white/10">
        <div className="container-custom max-w-3xl">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <div className="mt-8">
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">{COMPANY_TAGLINE}</p>
            <SectionHeading
              title="About DiTconsult"
              subtitle="Who We Are"
              description="DiTconsult exists to help organizations see real security risk, prioritize what matters, and improve posture with work their teams can execute."
              centered={false}
              size="lg"
              as="h1"
            />
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy-900">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Why DiTconsult exists</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Many organizations operate across AWS, Azure, and Google Cloud with rising compliance expectations—but
              limited dedicated security staff. Assessments often produce long reports that sit unused while
              misconfigurations and control gaps remain.
            </p>
            <p className="text-white/70 leading-relaxed">
              DiTconsult was created to close that gap: translate technical findings into business priorities, package
              work into clear engagements, and support remediation with human oversight and documentation.
            </p>
          </div>
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-lg font-bold text-white mb-4">Consulting philosophy</h2>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex gap-3"><span className="text-primary-400 shrink-0">→</span>Risk-based prioritization over checkbox theater</li>
              <li className="flex gap-3"><span className="text-primary-400 shrink-0">→</span>Vendor-neutral guidance aligned to your environment</li>
              <li className="flex gap-3"><span className="text-primary-400 shrink-0">→</span>Transparent scope, deliverables, and limitations</li>
              <li className="flex gap-3"><span className="text-primary-400 shrink-0">→</span>Plain-language reporting for executives and engineers</li>
              <li className="flex gap-3"><span className="text-primary-400 shrink-0">→</span>Ethical, least-privilege handling of client access</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy-950/80 border-y border-white/10">
        <div className="container-custom">
          <SectionHeading
            title="Founder & principal consultant"
            subtitle="Leadership"
            description={`DiTconsult is led by ${FOUNDER.name}, with ${FOUNDER.experienceYears} years of cybersecurity and IT experience, enterprise cloud security background, CISM and CEH credentials, and degrees in Computer Science, Information Technology, and Information Assurance and Cybersecurity.`}
            centered={false}
            size="md"
          />
          <div className="mt-10 grid lg:grid-cols-[240px_1fr] gap-8 items-start">
            <div className="glass-effect rounded-2xl aspect-square flex items-center justify-center text-center p-6">
              {FOUNDER.photoSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={FOUNDER.photoSrc}
                  alt={`${FOUNDER.name}, ${FOUNDER.title}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div>
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-300 text-2xl font-bold mb-3">
                    {FOUNDER.initials}
                  </div>
                  <p className="text-white/45 text-xs leading-relaxed">Photo coming soon</p>
                </div>
              )}
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-white">{FOUNDER.name}</h3>
                <p className="text-primary-400 font-semibold text-sm mt-1">{FOUNDER.title}</p>
              </div>
              <p className="text-white/70 leading-relaxed">
                With {FOUNDER.experienceYears} years in cybersecurity and IT, Korede founded DiTconsult to give growing
                organizations direct access to senior guidance—multi-cloud assessment, compliance readiness, and
                remediation planning—without large-firm overhead.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass-effect rounded-xl p-5">
                  <h4 className="text-white font-semibold text-sm mb-2">{FOUNDER.experienceYears} years of experience</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Cybersecurity engineer experience at General Motors, plus systems and security administration across
                    enterprise and education environments.
                  </p>
                </div>
                <div className="glass-effect rounded-xl p-5">
                  <h4 className="text-white font-semibold text-sm mb-2">Education & background</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    B.S. Computer Science (2010); M.S. Information Technology (2015); M.S. Information Assurance and
                    Cybersecurity (2021). U.S. Army veteran with hands-on cloud and security operations experience.
                  </p>
                </div>
              </div>
              <div className="glass-effect rounded-xl p-5">
                <h4 className="text-white font-semibold text-sm mb-2">Qualifications</h4>
                <p className="text-white/55 text-sm leading-relaxed">
                  CISM, CEH, Microsoft Security Operations Analyst Associate, Azure certifications, and AWS Solutions
                  Architect – Associate. See the founder page for the full list.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asLink href="/founder" variant="secondary" size="md">
                  Read full founder profile
                </Button>
                <a
                  href={FOUNDER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-white/15 text-white/80 hover:text-white hover:border-primary-500/40 text-sm font-semibold transition-colors"
                >
                  LinkedIn profile ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-navy-900">
        <div className="container-custom grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Multi-cloud security',
              text: 'Assess and improve posture across AWS, Azure, and Google Cloud—including risk-prioritized remediation with human-approved changes.',
            },
            {
              title: 'Compliance readiness',
              text: 'Advisory for NIST CSF, ISO 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP alignment. DiTconsult does not issue certifications.',
            },
            {
              title: 'Clear business decisions',
              text: 'Executive summaries alongside technical detail so leaders can fund the right work and track progress.',
            },
          ].map((item) => (
            <article key={item.title} className="glass-effect rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="container-custom mt-10 text-white/50 text-sm">
          Looking for packaged offers? Start with a{' '}
          <Link href="/contact" className="text-primary-400 hover:underline">
            DiTconsult consultation
          </Link>
          .
        </p>
      </section>

      <CTASection />
    </>
  );
}
