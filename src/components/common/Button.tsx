import Link from 'next/link';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asLink = false,
      href = '#',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'font-semibold rounded-lg transition-smooth inline-flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-neon',
      secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
      outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
      ghost: 'text-white hover:bg-white/5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const buttonClass = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (asLink) {
      return (
        <Link href={href} className={buttonClass}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={buttonClass} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
