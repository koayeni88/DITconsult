import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import CTASection from '@/components/home/CTASection';
import { getInsightBySlug, INSIGHTS } from '@/lib/insights';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INSIGHTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title: article.title, description: article.description, type: 'article' },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <article className="section-padding-sm bg-navy-900">
        <div className="container-custom max-w-3xl">
          <Breadcrumbs items={[{ label: 'Insights', href: '/blog' }, { label: article.title }]} />
          <header className="mt-8 mb-10">
            <p className="text-primary-400 text-xs font-semibold uppercase tracking-widest mb-3">
              {article.category} · {article.readTime}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{article.title}</h1>
            <p className="text-white/60 mt-4 leading-relaxed">{article.description}</p>
            <time dateTime={article.publishedAt} className="block text-white/40 text-sm mt-4">
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          <div className="prose-invert space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold text-white mb-4">{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-white/70 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link href="/blog" className="text-primary-400 font-semibold text-sm hover:underline">
              ← Back to insights
            </Link>
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
