import { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Trust Center | DITconsult',
  description: 'Learn how DITconsult protects client data, maintains confidentiality, and follows professional security methodology.',
  keywords: ['trust center', 'data security', 'confidentiality', 'methodology', 'compliance'],
};

const PILLARS = [
  {
    icon: '🔒',
    title: 'Strict Confidentiality',
    points: [
      'All client engagements are covered by Non-Disclosure Agreements (NDAs) signed before any work begins.',
      'Findings, recommendations, and client data are never shared with third parties without explicit written consent.',
      'Client identity and engagement details are never used in marketing materials without written approval.',
      'All team members are bound by confidentiality obligations throughout and after their engagement.',
    ],
  },
  {
    icon: '🛡️',
    title: 'Secure Data Handling',
    points: [
      'Sensitive client data is encrypted at rest (AES-256) and in transit (TLS 1.3) at all times.',
      'Data collected during engagements is retained only as long as needed and securely deleted upon project closure.',
      'Credentials, network diagrams, vulnerability data, and assessment artifacts are stored in encrypted, access-controlled systems.',
      'We do not use client data to train AI models or for any purpose beyond the contracted engagement.',
    ],
  },
  {
    icon: '📋',
    title: 'Professional Methodology',
    points: [
      'All assessments follow recognized industry frameworks including NIST CSF, OWASP, CIS Controls, and PTES.',
      'We conduct scoping calls to define authorized systems and rules of engagement before any testing begins.',
      'Findings are verified before reporting — we do not include unconfirmed or theoretical vulnerabilities.',
      'All consultants maintain relevant certifications (CISSP, CISM, AWS Security, Azure Security, etc.).',
    ],
  },
  {
    icon: '📐',
    title: 'Supported Frameworks',
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
    title: 'Operational Security',
    points: [
      'DITconsult operates a documented information security program covering access control, incident response, and data protection.',
      'Privileged access to client environments is managed through role-based access controls and removed immediately upon project completion.',
      'Client system access is documented, time-bounded, and reviewed throughout each engagement.',
      'Penetration testing engagements require signed authorization letters and scoping agreements before work begins.',
    ],
  },
  {
    icon: '✅',
    title: 'Ethical Standards',
    points: [
      'We adhere to professional codes of ethics including (ISC)² Code of Ethics and EC-Council Code of Ethics.',
      'We do not perform offensive security work without written authorization — every engagement has a defined scope.',
      'Conflicts of interest are disclosed and managed transparently.',
      'We decline engagements that conflict with our ethical standards, regardless of compensation.',
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
            subtitle="How We Protect You"
            description="Before you share your environment with us, you deserve to know exactly how we operate, how we protect your data, and the standards we hold ourselves to."
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
          <h2 className="text-2xl font-bold text-white mb-4">Our Security Commitment</h2>
          <p className="text-white/65 leading-relaxed mb-6">
            DITconsult was built by cybersecurity practitioners who understand the sensitivity of the work. We apply the same security rigor to our own operations that we recommend to clients. When you engage with us, your environment, your data, and your reputation are in the hands of professionals who take security personally.
          </p>
          <p className="text-white/65 leading-relaxed">
            If you have questions about our security practices, require specific contractual protections, or need a completed vendor security questionnaire, please reach out — we are happy to provide complete documentation.
          </p>
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors">
              Contact Us With Security Questions
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
