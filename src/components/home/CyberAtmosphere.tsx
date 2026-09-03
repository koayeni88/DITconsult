'use client';

import FloatingCyberElements from './FloatingCyberElements';

type CyberAtmosphereProps = {
  /** full = hero-level motion; subtle = lighter section ambience */
  variant?: 'full' | 'subtle';
  className?: string;
};

/**
 * Shared cybersecurity atmosphere: grid, glows, and optional floating elements.
 * Place inside a `relative overflow-hidden` section; content should be z-10.
 */
export default function CyberAtmosphere({ variant = 'subtle', className = '' }: CyberAtmosphereProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-24 left-[12%] h-72 w-72 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute -bottom-28 right-[8%] h-80 w-80 rounded-full bg-cyan-500/8 blur-3xl" />
      {variant === 'full' && (
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/5 blur-3xl" />
      )}
      <div
        className={variant === 'full' ? 'absolute inset-0 opacity-[0.045]' : 'absolute inset-0 opacity-[0.04]'}
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,102,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.35) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 85%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(180deg, transparent 0%, rgba(6,14,26,0.4) 50%, transparent 100%)',
        }}
      />
      <FloatingCyberElements density={variant === 'full' ? 'full' : 'subtle'} />
    </div>
  );
}
