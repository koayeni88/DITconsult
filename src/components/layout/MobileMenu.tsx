'use client';

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
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

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
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[4.5rem] left-0 right-0 bg-slate-950/98 backdrop-blur-xl border-b border-white/10 lg:hidden z-40 max-h-[calc(100vh-5rem)] overflow-y-auto"
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
                            'block py-2.5 px-4 rounded-xl text-sm font-medium transition-colors',
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
                      'block py-3 px-4 rounded-xl font-medium transition-colors',
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
                className="mt-2 block py-3.5 px-4 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

