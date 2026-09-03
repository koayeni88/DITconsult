import Link from 'next/link';
import { COMPANY_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark';
  size?: 'sm' | 'md' | 'lg';
}

const fullHeights = {
  sm: 'h-12',
  md: 'h-16',
  lg: 'h-20',
};

const markHeights = {
  sm: 'h-12 w-12',
  md: 'h-16 w-16',
  lg: 'h-20 w-20',
};

export function LogoMark({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-mark.png?v=4"
      alt=""
      width={80}
      height={80}
      className={cn(markHeights[size], 'object-contain', className)}
      aria-hidden="true"
    />
  );
}

export default function Logo({ className, variant = 'full', size = 'md' }: LogoProps) {
  const isMark = variant === 'mark';

  return (
    <Link
      href="/"
      className={cn('inline-flex items-center shrink-0 relative z-10', className)}
      aria-label={`${COMPANY_NAME} home`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={isMark ? '/logo-mark.png?v=4' : '/logo.png?v=4'}
        alt={COMPANY_NAME}
        width={isMark ? 80 : 360}
        height={isMark ? 80 : 137}
        className={cn(
          isMark ? markHeights[size] : fullHeights[size],
          'w-auto max-w-[min(78vw,360px)] object-contain object-left block bg-transparent'
        )}
      />
    </Link>
  );
}
