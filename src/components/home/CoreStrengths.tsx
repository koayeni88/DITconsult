import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import CyberAtmosphere from './CyberAtmosphere';
import { CORE_STRENGTHS } from '@/lib/content';

export default function CoreStrengths() {
  return (
    <section className="cyber-section section-padding-sm" aria-labelledby="strengths-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <SectionHeading
          id="strengths-heading"
          title="Three strengths that define DiTconsult"
          subtitle="Specialization"
          description="We lead with multi-cloud security, compliance readiness, and risk-prioritized remediation—so visitors know exactly where we create the most value."
          centered
          size="lg"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {CORE_STRENGTHS.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="cyber-panel p-7 hover:border-primary-500/40 transition-smooth group"
            >
              <span className="text-primary-400 text-xs font-bold tracking-widest uppercase">
                0{index + 1}
              </span>
              <h3 className="text-xl font-bold text-white mt-3 mb-3 group-hover:text-primary-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              <span className="inline-block mt-5 text-primary-400 text-sm font-semibold group-hover:underline">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
