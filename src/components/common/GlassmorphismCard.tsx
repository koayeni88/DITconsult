import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphismCardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const GlassmorphismCard = forwardRef<HTMLDivElement, GlassmorphismCardProps>(
  ({ className, size = 'md', hover = true, icon, title, description, children, ...props }, ref) => {
    const sizes = {
      sm: 'p-4 md:p-6',
      md: 'p-6 md:p-8',
      lg: 'p-8 md:p-10',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'glass-effect-lg rounded-2xl backdrop-blur-xl',
          sizes[size],
          hover && 'group hover:bg-white/[0.09] transition-smooth cursor-pointer hover:shadow-neon hover:border-primary-500/25',
          hover && 'transform-gpu h-full',
          className
        )}
        {...props}
      >
        {icon && <div className="mb-4 text-4xl">{icon}</div>}
        {title && <h3 className="text-xl font-bold text-white mb-2">{title}</h3>}
        {description && <p className="text-white/70 text-sm leading-relaxed mb-4">{description}</p>}
        {children}
      </div>
    );
  }
);

GlassmorphismCard.displayName = 'GlassmorphismCard';

export default GlassmorphismCard;
