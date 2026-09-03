import Button from '@/components/common/Button';
import SectionHeading from '@/components/common/SectionHeading';
import { FINAL_CTA } from '@/lib/content';
import CyberAtmosphere from './CyberAtmosphere';

export default function CTASection() {
  return (
    <section className="cyber-section-alt section-padding border-t border-primary-500/20" aria-labelledby="cta-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom max-w-3xl text-center relative z-10">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-primary-400/80">
          Secure · Transform · Protect
        </p>
        <SectionHeading
          id="cta-heading"
          title={FINAL_CTA.headline}
          description={FINAL_CTA.description}
          centered
          size="lg"
        />
        <ul className="mt-8 space-y-2 text-white/60 text-sm">
          {FINAL_CTA.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center justify-center gap-2">
              <span className="text-primary-400" aria-hidden="true">✓</span>
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button asLink href="/contact" variant="primary" size="lg">
            Book a Security Consultation
          </Button>
          <Button asLink href="/services" variant="secondary" size="lg">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
