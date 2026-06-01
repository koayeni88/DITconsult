import { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights & Blog | DITconsult',
  description: 'Cybersecurity insights, best practices, and industry updates from DITconsult.',
  keywords: ['blog', 'insights', 'cybersecurity news', 'security updates', 'best practices'],
};

const posts = [
  {
    slug: 'top-aws-misconfigurations-2026',
    title: 'Top 7 AWS Misconfigurations in 2026 (And How to Fix Them)',
    category: 'Cloud Security',
    date: 'May 28, 2026',
    readTime: '8 min read',
    excerpt:
      "S3 buckets, IAM over-permissions, and public snapshots remain the top attack vectors in AWS environments. Here's what we see most in client assessments and exactly how to fix each one.",
    tags: ['AWS', 'Cloud Security', 'Misconfiguration'],
  },
  {
    slug: 'cmmc-2-readiness-guide',
    title: 'CMMC 2.0 Readiness: A Practical Guide for Defense Contractors',
    category: 'Compliance',
    date: 'May 15, 2026',
    readTime: '12 min read',
    excerpt:
      'CMMC 2.0 enforcement is accelerating. This guide walks through the three maturity levels, what evidence assessors actually want to see, and a 90-day plan to get ready for your C3PAO assessment.',
    tags: ['CMMC', 'Compliance', 'Defense'],
  },
  {
    slug: 'soc2-type2-timeline',
    title: 'How to Achieve SOC 2 Type II in 90 Days Without Disrupting Your Team',
    category: 'Compliance',
    date: 'May 5, 2026',
    readTime: '10 min read',
    excerpt:
      'Most companies over-engineer their SOC 2 journey. We break down the critical path — what auditors actually test, which controls take the most time, and how to run the process without burning out your engineers.',
    tags: ['SOC 2', 'Compliance', 'SaaS'],
  },
  {
    slug: 'incident-response-playbook',
    title: 'Building an Incident Response Playbook That Actually Gets Used',
    category: 'Incident Response',
    date: 'April 22, 2026',
    readTime: '9 min read',
    excerpt:
      'A 200-page IR plan nobody reads is worse than none. Learn how to build concise, role-specific playbooks that your team will actually follow during a real incident — including a free template.',
    tags: ['Incident Response', 'Planning', 'Templates'],
  },
  {
    slug: 'zero-trust-small-business',
    title: 'Zero Trust for Small and Mid-Size Businesses: A Pragmatic Approach',
    category: 'Architecture',
    date: 'April 10, 2026',
    readTime: '7 min read',
    excerpt:
      "Zero Trust doesn't require a seven-figure budget. Here's how SMBs and mid-market companies can implement the core principles — identity verification, least privilege, and microsegmentation — with tools they already own.",
    tags: ['Zero Trust', 'SMB', 'Architecture'],
  },
  {
    slug: 'cloud-security-posture-management',
    title: 'CSPM Explained: What It Is, What It Misses, and When You Need It',
    category: 'Cloud Security',
    date: 'March 28, 2026',
    readTime: '6 min read',
    excerpt:
      'Cloud Security Posture Management tools catch a lot — but not everything. We compare the leading CSPM platforms, explain the gaps, and show how to layer human review on top for complete coverage.',
    tags: ['CSPM', 'Cloud Security', 'Tools'],
  },
];

const categoryColors: Record<string, string> = {
  'Cloud Security': 'bg-blue-500/15 text-blue-400',
  'Compliance': 'bg-green-500/15 text-green-400',
  'Incident Response': 'bg-orange-500/15 text-orange-400',
  'Architecture': 'bg-purple-500/15 text-purple-400',
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-black via-slate-900/20 to-black py-24">
        <div className="container-custom">
          <SectionHeading
            title="Insights & Resources"
            subtitle="From the Field"
            description="Practical cybersecurity guidance from real-world engagements — no filler, no vendor pitches."
            centered
            size="lg"
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group glass-effect rounded-2xl p-6 flex flex-col gap-4 hover:border-primary-500/30 border border-white/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-white/10 text-white/60'}`}>
                    {post.category}
                  </span>
                  <span className="text-white/30 text-xs">{post.readTime}</span>
                </div>

                <div>
                  <h2 className="text-white font-bold text-lg leading-snug group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/55 text-sm mt-2 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs text-white/35 bg-white/5 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/8">
                  <span className="text-white/30 text-xs">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-400 text-sm font-semibold hover:text-primary-300 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

