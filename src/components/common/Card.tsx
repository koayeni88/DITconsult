import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'glass-lg' | 'bordered';
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-slate-900/50 border border-slate-800',
      glass: 'glass-effect rounded-xl',
      'glass-lg': 'glass-effect-lg rounded-2xl',
      bordered: 'border-2 border-primary-500/30 rounded-lg',
    };

    return (
      <div
        ref={ref}
        className={cn('rounded-lg p-6 md:p-8 transition-smooth', variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
