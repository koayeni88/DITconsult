import CyberAtmosphere from './CyberAtmosphere';
import { CAPABILITY_STRIP } from '@/lib/content';

export default function CapabilityStrip() {
  return (
    <section className="cyber-section-alt py-10 md:py-12" aria-label="Core capabilities">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-primary-400/80">
          Security operations · multi-cloud · compliance · remediation
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CAPABILITY_STRIP.map((item) => (
            <div
              key={item.label}
              className="text-center sm:text-left border-white/10 sm:border-r last:border-r-0 sm:pr-6 last:sm:pr-0"
            >
              <p className="text-white font-semibold text-sm">{item.label}</p>
              <p className="text-white/50 text-xs mt-1 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
