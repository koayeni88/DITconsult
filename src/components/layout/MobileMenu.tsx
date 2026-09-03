'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { NAV_GROUPS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-20 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[4.5rem] left-0 right-0 bg-navy-950/98 backdrop-blur-xl border-b border-white/10 lg:hidden z-40 max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="container-custom py-5 flex flex-col gap-4">
              {NAV_GROUPS.map((group) =>
                group.children ? (
                  <div key={group.label}>
                    <div className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-1.5 px-4">
                      {group.label}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      {group.children.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={onClose}
                          className={cn(
                            'block py-2.5 px-4 rounded-xl text-sm font-medium transition-colors min-h-[44px] flex items-center',
                            isActive(link.href)
                              ? 'text-white bg-primary-500/20 border border-primary-500/30'
                              : 'text-white/60 hover:text-white hover:bg-white/5'
                          )}
                          aria-current={isActive(link.href) ? 'page' : undefined}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={group.href}
                    href={group.href!}
                    onClick={onClose}
                    className={cn(
                      'block py-3 px-4 rounded-xl font-medium transition-colors min-h-[44px] flex items-center',
                      isActive(group.href!)
                        ? 'text-white bg-primary-500/20 border border-primary-500/30'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                    aria-current={isActive(group.href!) ? 'page' : undefined}
                  >
                    {group.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={onClose}
                className="mt-2 block py-3.5 px-4 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors text-center min-h-[48px] flex items-center justify-center"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
