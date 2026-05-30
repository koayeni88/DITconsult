import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  size?: 'sm' | 'md' | 'lg';
  highlight?: string;
  as?: 'h1' | 'h2' | 'h3';
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      title,
      subtitle,
      description,
      centered = true,
      size = 'lg',
      highlight,
      as: Tag = 'h2',
    },
    ref
  ) => {
    const sizes = {
      sm: 'text-2xl md:text-3xl',
      md: 'text-3xl md:text-4xl',
      lg: 'text-4xl md:text-5xl lg:text-6xl',
    };

    const containerClass = cn('flex flex-col', centered && 'items-center text-center');
    const titleClass = cn(sizes[size], 'font-black text-white mb-4', centered && 'max-w-4xl');

    return (
      <div ref={ref} className={containerClass}>
        {subtitle && (
          <span className="text-primary-500 font-bold text-sm md:text-base mb-3 uppercase tracking-wide">
            {subtitle}
          </span>
        )}
        <Tag className={titleClass}>
          {highlight ? (
            <>
              {title.split(highlight)[0]}
              <span className="gradient-text">{highlight}</span>
              {title.split(highlight)[1]}
            </>
          ) : (
            title
          )}
        </Tag>
        {description && (
          <p className={cn('text-lg md:text-xl leading-relaxed text-white/70', centered && 'max-w-2xl')}>
            {description}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';

export default SectionHeading;
