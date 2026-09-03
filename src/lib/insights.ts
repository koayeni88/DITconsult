export interface InsightArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  sections: { heading: string; paragraphs: string[] }[];
}

export const INSIGHTS: InsightArticle[] = [
  {
    slug: 'multi-cloud-security-assessment-guide',
    title: 'What to Expect from a Multi-Cloud Security Assessment',
    description:
      'A practical overview of how cloud security assessments work across AWS, Azure, and Google Cloud—and what deliverables you should expect.',
    category: 'Cloud Security',
    publishedAt: '2026-03-01',
    readTime: '8 min read',
    tags: ['Cloud Security', 'AWS', 'Azure', 'Google Cloud', 'Assessment'],
    sections: [
      {
        heading: 'Why multi-cloud assessments differ',
        paragraphs: [
          'Organizations rarely operate in a single cloud. Engineering teams adopt AWS for some workloads, Azure for identity and productivity integration, and Google Cloud for data or Kubernetes platforms. Each provider has distinct control models, logging defaults, and identity systems.',
          'A useful assessment must account for these differences while producing a unified risk view. That means evaluating identity, network boundaries, data protection, logging, and configuration management consistently—even when the underlying services differ.',
        ],
      },
      {
        heading: 'Typical assessment scope',
        paragraphs: [
          'Scope should be defined before access is granted. Common in-scope areas include IAM and role design, storage and database exposure, network segmentation, encryption configuration, logging and alerting coverage, and backup or recovery readiness.',
          'Assessments may use read-only access, configuration exports, and interviews with platform and application owners. The goal is evidence-based findings—not disruptive production testing unless explicitly agreed.',
        ],
      },
      {
        heading: 'Deliverables you should expect',
        paragraphs: [
          'A professional assessment should produce an executive risk summary, technical findings with evidence, and a risk-ranked remediation backlog. Findings should explain business impact, not just list misconfigurations.',
          'If compliance readiness is in scope, expect a control mapping against selected frameworks. DiTconsult provides readiness advisory—we do not issue certifications or attestations on your behalf.',
        ],
      },
      {
        heading: 'After the assessment',
        paragraphs: [
          'The highest-value engagements include validation after remediation. Re-assessment confirms that critical gaps are closed and helps prevent configuration drift from reintroducing risk.',
          'If your team needs support prioritizing or implementing fixes, scoped remediation advisory can accelerate progress while keeping humans in control of production changes.',
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return INSIGHTS.find((a) => a.slug === slug);
}
