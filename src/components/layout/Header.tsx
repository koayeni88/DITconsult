'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY_NAME, NAV_GROUPS } from '@/lib/constants';
import { NavGroup } from '@/types';
import Button from '@/components/common/Button';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';

function DropdownMenu({ group, isActive }: { group: NavGroup; isActive: (href: string) => boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const active = group.children?.some((c) => isActive(c.href)) ?? false;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
          active ? 'text-white bg-white/10' : 'text-white/65 hover:text-white hover:bg-white/5'
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {group.label}
        <svg
          className={cn('w-3.5 h-3.5 transition-transform duration-200', open && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[220px] bg-slate-950/98 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 py-2 z-50">
          {group.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className={cn(
                'block px-4 py-2.5 text-sm transition-colors',
                isActive(child.href)
                  ? 'text-primary-400 bg-primary-500/10 font-medium'
                  : 'text-white/65 hover:text-white hover:bg-white/5'
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-smooth',
          isScrolled
            ? 'bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <nav className="container-custom py-4 flex items-center justify-between" aria-label="Main">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-neon group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
              {COMPANY_NAME}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_GROUPS.map((group) =>
              group.children ? (
                <DropdownMenu key={group.label} group={group} isActive={isActive} />
              ) : (
                <Link
                  key={group.href}
                  href={group.href!}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive(group.href!)
                      ? 'text-white bg-white/10'
                      : 'text-white/65 hover:text-white hover:bg-white/5'
                  )}
                  aria-current={isActive(group.href!) ? 'page' : undefined}
                >
                  {group.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Button asLink href="/contact" variant="primary" size="md">
              Get Started
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={cn(
                'h-0.5 w-6 bg-white transition-all duration-300',
                mobileMenuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-6 bg-white transition-all duration-300',
                mobileMenuOpen && 'opacity-0 w-0'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-6 bg-white transition-all duration-300',
                mobileMenuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} pathname={pathname} />
    </>
  );
}
