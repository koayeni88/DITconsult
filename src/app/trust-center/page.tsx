import { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Trust Center',
  alternates: { canonical: '/trust-center' },
  description: 'How DiTconsult handles client confidentiality, data protection, and professional methodology during consulting engagements.',
  keywords: ['trust center', 'data security', 'confidentiality', 'methodology', 'compliance'],
};

const PILLARS = [
  {
    icon: '🔒',
    title: 'Confidentiality',
    points: [
      'Client engagements are covered by non-disclosure agreements signed before work begins.',
      'Findings, recommendations, and client data are not shared with third parties without explicit written consent.',
      'Client identity and engagement details are not used in marketing materials without written approval.',
      'People working on an engagement are bound by confidentiality obligations during and after the work.',
    ],
  },
  {
    icon: '🛡️',
    title: 'Secure data handling',
    points: [
      'Sensitive client data is encrypted at rest (AES-256) and in transit (TLS 1.3).',
      'Data collected during engagements is retained only as long as needed and securely deleted at project closure.',
      'Credentials, network diagrams, vulnerability data, and assessment artifacts are stored in encrypted, access-controlled systems.',
      'Client data is not used to train AI models or for any purpose beyond the contracted engagement.',
    ],
  },
  {
    icon: '📋',
    title: 'Professional methodology',
    points: [
      'Assessments are aligned to recognized frameworks such as NIST CSF, OWASP, and CIS Controls. PTES is used when offensive testing is in scope.',
      'Scoping calls define authorized systems and rules of engagement before testing begins.',
      'Findings are reviewed before they are reported. Unconfirmed items are not presented as confirmed vulnerabilities.',
      'Named credentials held by DiTconsult leadership include CISM, CEH, CJIS (FBI), Microsoft security and Azure certifications, and AWS Certified Solutions Architect – Associate.',
    ],
  },
  {
    icon: '📐',
    title: 'Supported frameworks',
    points: [
      'NIST Cybersecurity Framework (CSF) 2.0',
      'SOC 2 Type I and Type II',
      'ISO/IEC 27001:2022',
      'HIPAA Security Rule',
      'PCI DSS v4.0',
      'CMMC 2.0 (Levels 1–3)',
      'CIS Controls v8',
      'OWASP Top 10 and ASVS',
    ],
  },
  {
    icon: '🏢',
    title: 'Operational security',
    points: [
      'DiTconsult maintains a documented information security program covering access control, incident response, and data protection.',
      'Privileged access to client environments is managed through role-based access controls and removed at project completion.',
      'Client system access is documented, time-bounded, and reviewed throughout each engagement.',
      'When penetration testing is in scope, DiTconsult coordinates that work under signed authorization and a scoping agreement before testing begins.',
    ],
  },
  {
    icon: '✅',
    title: 'Ethical standards',
    points: [
      'We follow professional codes of ethics associated with named credentials, including the ISACA Code of Professional Ethics and the EC-Council Code of Ethics.',
      'Offensive security work is not performed without written authorization. Every engagement has a defined scope.',
      'Conflicts of interest are disclosed and managed in writing.',
      'We decline engagements that conflict with these standards, regardless of compensation.',
    ],
  },
];

export default function TrustCenterPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[55vh] bg-gradient-to-b from-black via-slate-900/20 to-black flex items-center py-20">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-primary-400 font-semibold text-xs uppercase tracking-widest mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
            Transparency
          </span>
          <SectionHeading
            title="Trust Center"
            subtitle="How we handle client work"
            description="Before you share your environment, you should know how we operate, how we protect your data, and the standards that govern the engagement."
            centered
            size="lg"
          />
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-black">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="glass-effect-lg rounded-2xl p-6 flex flex-col gap-4 border border-white/10 hover:border-primary-500/25 transition-all">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{pillar.icon}</span>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
              </div>
              <ul className="space-y-2">
                {pillar.points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm text-white/65">
                    <span className="text-primary-400 shrink-0 mt-0.5 font-bold">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Security Statement */}
      <section className="section-padding bg-slate-950/50 border-y border-white/10">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Our security commitment</h2>
          <p className="text-white/65 leading-relaxed mb-6">
            DiTconsult treats client environments, data, and findings as confidential work product. We apply the same access-control and handling practices we recommend to clients. This page describes how we operate; it is not a certification, attestation, or guarantee of a security outcome.
          </p>
          <p className="text-white/65 leading-relaxed">
            If you have questions about our practices, need specific contractual protections, or require a vendor security questionnaire, contact us and we will provide the documentation we have available.
          </p>
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors">
              Contact us with security questions
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
