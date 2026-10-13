'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DIVISIONS } from '@/lib/divisions';
import { cn } from '@/lib/utils';

export default function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const menuId = useId();
  const active = pathname.startsWith('/services') || DIVISIONS.some((division) =>
    division.menuLinks.some((link) => pathname === link.href || pathname.startsWith(`${link.href}/`))
  );

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
          active
            ? 'text-slate-900 bg-slate-900/8 dark:text-white dark:bg-white/10'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5 dark:text-white/65 dark:hover:text-white dark:hover:bg-white/5'
        )}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
      >
        Services
        <svg
          className={cn('w-3.5 h-3.5 transition-transform duration-200', open && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[min(72rem,calc(100vw-2rem))] bg-white dark:bg-navy-950 border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-black/60 p-6 z-50"
        >
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
            {DIVISIONS.map((division) => (
              <div key={division.id} className="min-w-0">
                <Link
                  href={division.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-bold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-300 mb-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
                >
                  {division.title}
                </Link>
                <ul className="space-y-1.5">
                  {division.menuLinks.map((link) => (
                    <li key={`${division.id}-${link.href}-${link.label}`}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block text-sm text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10">
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
            >
              View all services and divisions →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
