import SectionHeading from '@/components/common/SectionHeading';
import { EXAMPLE_ENGAGEMENTS } from '@/lib/content';
import CyberAtmosphere from './CyberAtmosphere';

export default function ExampleEngagements() {
  return (
    <section className="cyber-section-alt section-padding" aria-labelledby="examples-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <SectionHeading
          id="examples-heading"
          title="Example engagements"
          subtitle="Security Scenarios"
          description="These are illustrative scenarios that describe typical DiTconsult engagement patterns. They are not verified client case studies or measured outcomes."
          centered
          size="lg"
        />
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {EXAMPLE_ENGAGEMENTS.map((item) => (
            <article key={item.title} className="cyber-panel p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3 font-mono">
                Example engagement
              </p>
              <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase mb-1">Challenge</p>
                  <p className="text-white/65 leading-relaxed">{item.challenge}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase mb-1">Scope</p>
                  <p className="text-white/65 leading-relaxed">{item.scope}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase mb-1">Approach</p>
                  <p className="text-white/65 leading-relaxed">{item.approach}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase mb-1">Typical outcome pattern</p>
                  <p className="text-white/75 leading-relaxed">{item.outcomePattern}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
