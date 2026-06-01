import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/constants';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDIES.filter((cs) => cs.slug).map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);
  if (!study) return { title: 'Case Study | DITconsult' };
  return {
    title: `${study.title} | DITconsult`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);
  if (!study) notFound();

  return (
    <main className="bg-gradient-to-b from-black via-slate-900/20 to-black min-h-screen py-24">
      <div className="container-custom max-w-4xl">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-white/40 flex items-center gap-2">
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/60">Case Studies</span>
          <span>/</span>
          <span className="text-white/90">{study.industry}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block bg-primary-500/15 text-primary-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            {study.industry}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            {study.title}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            {study.description}
          </p>
        </div>

        {/* Key metric */}
        <div className="glass-effect rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center gap-6 border border-primary-500/20">
          <div className="text-center md:text-left">
            <p className="text-6xl font-black gradient-text leading-none">{study.metricValue}</p>
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-wider mt-2">{study.metric}</p>
          </div>
          <div className="w-px h-16 bg-white/10 hidden md:block" />
          <p className="text-white/60 text-sm leading-relaxed md:max-w-sm">
            A measurable outcome from a focused engagement with a clear scope, timeline, and actionable deliverables.
          </p>
        </div>

        {/* Challenge */}
        {study.challenge && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-red-500/15 text-red-400 rounded-lg flex items-center justify-center text-sm font-black">01</span>
              The Challenge
            </h2>
            <div className="glass-effect rounded-xl p-6">
              <p className="text-white/70 leading-relaxed">{study.challenge}</p>
            </div>
          </section>
        )}

        {/* Approach */}
        {study.approach && study.approach.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-500/15 text-blue-400 rounded-lg flex items-center justify-center text-sm font-black">02</span>
              Our Approach
            </h2>
            <div className="glass-effect rounded-xl p-6">
              <ul className="space-y-3">
                {study.approach.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="mt-1 w-5 h-5 rounded-full bg-primary-500/20 text-primary-400 text-xs flex items-center justify-center flex-shrink-0 font-bold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Outcomes */}
        {study.outcome && study.outcome.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-green-500/15 text-green-400 rounded-lg flex items-center justify-center text-sm font-black">03</span>
              Outcomes
            </h2>
            <div className="glass-effect rounded-xl p-6">
              <ul className="space-y-3">
                {study.outcome.map((result, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="mt-1 text-green-400 text-base flex-shrink-0">✓</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Services used */}
        {study.services && study.services.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-white mb-4">Services Engaged</h2>
            <div className="flex flex-wrap gap-2">
              {study.services.map((svc) => (
                <span
                  key={svc}
                  className="text-sm bg-primary-500/10 text-primary-400 border border-primary-500/20 px-3 py-1.5 rounded-full"
                >
                  {svc}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="mt-8 glass-effect rounded-2xl p-8 text-center border border-primary-500/20">
          <h3 className="text-2xl font-bold text-white mb-2">Ready for similar outcomes?</h3>
          <p className="text-white/55 mb-6">
            Every engagement starts with a no-obligation discovery call to understand your environment and goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Start a Conversation
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/25 text-xs mt-8">
          Metrics shown are illustrative of typical engagement outcomes. Actual results vary by environment and scope.
        </p>
      </div>
    </main>
  );
}
