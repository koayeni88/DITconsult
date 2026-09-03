import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { FEATURED_TOOLS } from '@/lib/content';
import CyberAtmosphere from './CyberAtmosphere';

export default function FeaturedTools() {
  return (
    <section className="cyber-section section-padding-sm" aria-labelledby="tools-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <SectionHeading
          id="tools-heading"
          title="Start with a free DiTconsult tool"
          subtitle="Security Tools"
          description="Use these tools to clarify your current posture before a consultation—then bring the results to your discovery call."
          centered
          size="lg"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {FEATURED_TOOLS.map((tool) => (
            <article key={tool.href} className="cyber-panel p-8 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed flex-1 mb-6">{tool.description}</p>
              <Button asLink href={tool.href} variant="secondary" size="md">
                {tool.cta}
              </Button>
            </article>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link href="/services" className="text-primary-400 text-sm font-semibold hover:underline">
            Browse all services and tools →
          </Link>
        </p>
      </div>
    </section>
  );
}
