import { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import { INSIGHTS } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Practical cybersecurity guidance on cloud security, compliance readiness, and incident resilience.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return (
    <section className="section-padding-sm bg-navy-900">
      <div className="container-custom">
        <SectionHeading
          title="Insights"
          subtitle="From the field"
          description="Practical guidance on cloud security and compliance—written for executives and engineering teams."
          centered
          size="lg"
          as="h1"
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {INSIGHTS.map((post) => (
            <article key={post.slug} className="glass-effect-lg rounded-2xl p-6 flex flex-col hover:border-primary-500/30 transition-smooth">
              <span className="text-xs font-semibold text-primary-400 uppercase tracking-wide">{post.category}</span>
              <h2 className="text-white font-bold text-lg mt-3 leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary-300 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-white/55 text-sm mt-2 leading-relaxed flex-1">{post.description}</p>
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-xs text-white/40">
                <span>{post.readTime}</span>
                <Link href={`/blog/${post.slug}`} className="text-primary-400 font-semibold hover:underline">
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
