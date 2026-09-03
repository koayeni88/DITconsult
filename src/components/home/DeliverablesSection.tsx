import SectionHeading from '@/components/common/SectionHeading';
import { DELIVERABLES } from '@/lib/content';
import CyberAtmosphere from './CyberAtmosphere';

export default function DeliverablesSection() {
  return (
    <section className="cyber-section section-padding" aria-labelledby="deliverables-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <SectionHeading
          id="deliverables-heading"
          title="Tangible deliverables—not shelf-ware"
          subtitle="Security Deliverables"
          description="Every engagement produces documentation your leadership and engineering teams can use immediately."
          centered
          size="lg"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {DELIVERABLES.map((item) => (
            <article key={item.title} className="cyber-panel !rounded-xl p-6">
              <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
              <p className="text-white/55 text-xs leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
