'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { COMPANY_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark';
  size?: 'sm' | 'md' | 'lg';
  /**
   * `auto` (default): follow site theme — navy artwork in light mode, white in dark.
   * `true`: always use the light-on-dark artwork.
   * `false`: always use the dark-on-light artwork.
   */
  onDark?: boolean | 'auto';
}

const fullHeights = {
  sm: 'h-12',
  md: 'h-16',
  lg: 'h-20',
};

const markHeights = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-14 w-14',
};

const CACHE_BUST = 'v=10';

function srcFor(isMark: boolean, onDark: boolean) {
  if (isMark) {
    return onDark ? `/logo-mark-on-dark.png?${CACHE_BUST}` : `/logo-mark.png?${CACHE_BUST}`;
  }
  return onDark ? `/logo-on-dark.png?${CACHE_BUST}` : `/logo.png?${CACHE_BUST}`;
}

function useResolvedOnDark(onDark: boolean | 'auto' = 'auto') {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (onDark === true) return true;
  if (onDark === false) return false;
  // Before mount, prefer dark artwork to match defaultTheme="dark" and avoid a flash of invisible white-on-light.
  if (!mounted) return true;
  return resolvedTheme !== 'light';
}

export function LogoMark({
  className,
  size = 'md',
  onDark = 'auto',
}: {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onDark?: boolean | 'auto';
}) {
  const useDarkBgArtwork = useResolvedOnDark(onDark);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={srcFor(true, useDarkBgArtwork)}
      alt=""
      width={80}
      height={80}
      className={cn(markHeights[size], 'object-contain', className)}
      aria-hidden="true"
    />
  );
}

export default function Logo({
  className,
  variant = 'full',
  size = 'md',
  onDark = 'auto',
}: LogoProps) {
  const isMark = variant === 'mark';
  const useDarkBgArtwork = useResolvedOnDark(onDark);

  return (
    <Link
      href="/"
      className={cn('inline-flex items-center shrink-0 relative z-10', className)}
      aria-label={`${COMPANY_NAME} home`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={srcFor(isMark, useDarkBgArtwork)}
        alt={COMPANY_NAME}
        width={isMark ? 80 : 512}
        height={isMark ? 80 : 170}
        className={cn(
          isMark ? markHeights[size] : fullHeights[size],
          'w-auto max-w-[min(72vw,320px)] object-contain object-left block bg-transparent',
          useDarkBgArtwork && 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]'
        )}
      />
    </Link>
  );
}
