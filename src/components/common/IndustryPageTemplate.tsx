import SectionHeading from '@/components/common/SectionHeading';
import CTASection from '@/components/home/CTASection';
import Link from 'next/link';

interface IndustryService {
  title: string;
  desc: string;
  link: string;
}

interface IndustryChallenge {
  icon: string;
  title: string;
  desc: string;
}

interface IndustryStat {
  label: string;
  value: string;
  sub: string;
}

interface IndustryPageProps {
  industry: string;
  badge: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  heroIcon: string;
  challenges: IndustryChallenge[];
  services: IndustryService[];
  frameworks: string[];
  stats: IndustryStat[];
  cta: string;
}

export default function IndustryPageTemplate({
  industry,
  badge,
  headline,
  headlineAccent,
  subheadline,
  heroIcon,
  challenges,
  services,
  frameworks,
  stats,
  cta,
}: IndustryPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] bg-gradient-to-b from-black via-slate-900/30 to-black flex items-center py-20 overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-primary-400 font-semibold text-xs uppercase tracking-widest mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
                {badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                {headline}{' '}
                <span className="gradient-text block mt-1">{headlineAccent}</span>
              </h1>
              <p className="text-lg text-white/65 mb-8 max-w-lg">{subheadline}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors text-center">
                  {cta}
                </Link>
                <Link href="/cyber-risk-score" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-colors text-center">
                  Free Risk Score →
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 flex items-center justify-center text-8xl">
                  {heroIcon}
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary-500/20 animate-ping" style={{ animationDuration: '3s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-950/50 border-y border-white/10">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-white font-semibold text-sm mb-0.5">{stat.label}</div>
              <div className="text-white/40 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <SectionHeading
            title={`${industry} Cybersecurity Challenges`}
            subtitle="The Threat Landscape"
            description={`${industry} organizations face a unique set of cyber threats and regulatory requirements. Here's what we see most.`}
            centered
            size="md"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {challenges.map((c, i) => (
              <div key={i} className="glass-effect-lg rounded-2xl p-6 border border-white/10 hover:border-primary-500/25 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{c.icon}</span>
                  <div>
                    <h3 className="font-bold text-white mb-2">{c.title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-slate-950/50 border-y border-white/10">
        <div className="container-custom">
          <SectionHeading
            title={`Our ${industry} Security Services`}
            subtitle="Tailored Solutions"
            description={`Purpose-built cybersecurity services for ${industry.toLowerCase()} organizations — delivered by practitioners who understand your environment.`}
            centered
            size="md"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {services.map((s, i) => (
              <Link key={i} href={s.link} className="glass-effect-lg rounded-2xl p-6 border border-white/10 hover:border-primary-500/30 hover:shadow-neon transition-all group">
                <h3 className="font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-primary-400 text-xs font-semibold">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Frameworks We Work With</h2>
          <p className="text-white/50 mb-8">We help {industry.toLowerCase()} organizations meet these requirements:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {frameworks.map((fw, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-semibold">
                {fw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive tools CTA */}
      <section className="section-padding bg-slate-950/50 border-y border-white/10">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Not sure where to start?</h2>
          <p className="text-white/60 mb-8">Use our free tools to understand your risk posture before booking a call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cyber-risk-score" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-colors">
              Free Risk Score Quiz
            </Link>
            <Link href="/compliance-calculator" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-colors">
              Compliance Calculator
            </Link>
            <Link href="/security-roadmap" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-colors">
              Security Roadmap Generator
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
