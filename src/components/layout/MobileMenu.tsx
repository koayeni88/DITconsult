'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { NAV_GROUPS } from '@/lib/constants';
import { DIVISIONS } from '@/lib/divisions';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openDivision, setOpenDivision] = useState<string | null>(null);
  const servicesId = useId();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (!isOpen) {
      setOpenGroup(null);
      setOpenDivision(null);
      return;
    }
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
            className="fixed top-[4.5rem] left-0 right-0 bg-navy-950/98 backdrop-blur-xl border-b border-white/10 lg:hidden z-40 max-h-[calc(100vh-5rem)] overflow-y-auto overflow-x-hidden"
          >
            <div className="container-custom py-5 flex flex-col gap-2">
              {NAV_GROUPS.map((group) => {
                if (group.variant === 'mega') {
                  const expanded = openGroup === group.label;
                  const panelId = `${servicesId}-services`;
                  return (
                    <div key={group.label}>
                      <button
                        type="button"
                        onClick={() => setOpenGroup(expanded ? null : group.label)}
                        className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-white/80 hover:text-white hover:bg-white/5 min-h-[44px] text-left font-medium"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                      >
                        {group.label}
                        <span aria-hidden="true">{expanded ? '−' : '+'}</span>
                      </button>
                      {expanded && (
                        <div id={panelId} className="pl-2 pb-2">
                          <Link
                            href="/services"
                            onClick={onClose}
                            className="block py-2.5 px-4 rounded-xl text-sm text-primary-300 min-h-[44px] flex items-center"
                          >
                            All services
                          </Link>
                          {DIVISIONS.map((division) => {
                            const divisionOpen = openDivision === division.id;
                            const divisionPanelId = `${servicesId}-${division.id}`;
                            return (
                              <div key={division.id}>
                                <button
                                  type="button"
                                  onClick={() => setOpenDivision(divisionOpen ? null : division.id)}
                                  className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl text-sm text-white/75 hover:text-white hover:bg-white/5 min-h-[44px] text-left"
                                  aria-expanded={divisionOpen}
                                  aria-controls={divisionPanelId}
                                >
                                  {division.title}
                                  <span aria-hidden="true">{divisionOpen ? '−' : '+'}</span>
                                </button>
                                {divisionOpen && (
                                  <div id={divisionPanelId} className="pl-3">
                                    <Link
                                      href={division.href}
                                      onClick={onClose}
                                      className="block py-2.5 px-4 rounded-xl text-sm text-primary-300 min-h-[44px] flex items-center"
                                    >
                                      {division.shortTitle} overview
                                    </Link>
                                    {division.menuLinks.map((link) => (
                                      <Link
                                        key={`${division.id}-${link.href}-${link.label}`}
                                        href={link.href}
                                        onClick={onClose}
                                        className="block py-2.5 px-4 rounded-xl text-sm text-white/60 hover:text-white min-h-[44px] flex items-center"
                                      >
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                if (group.children) {
                  const expanded = openGroup === group.label;
                  const panelId = `${servicesId}-${group.label}`;
                  return (
                    <div key={group.label}>
                      <button
                        type="button"
                        onClick={() => setOpenGroup(expanded ? null : group.label)}
                        className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-white/80 hover:text-white hover:bg-white/5 min-h-[44px] text-left font-medium"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                      >
                        {group.label}
                        <span aria-hidden="true">{expanded ? '−' : '+'}</span>
                      </button>
                      {expanded && (
                        <div id={panelId} className="flex flex-col">
                          {group.children.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={onClose}
                              className={cn(
                                'block py-2.5 px-4 rounded-xl text-sm min-h-[44px] flex items-center',
                                isActive(link.href.split('#')[0])
                                  ? 'text-white bg-primary-500/20'
                                  : 'text-white/60 hover:text-white hover:bg-white/5'
                              )}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={group.href}
                    href={group.href!}
                    onClick={onClose}
                    className={cn(
                      'block py-3 px-4 rounded-xl font-medium min-h-[44px] flex items-center',
                      isActive(group.href!)
                        ? 'text-white bg-primary-500/20 border border-primary-500/30'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                    aria-current={isActive(group.href!) ? 'page' : undefined}
                  >
                    {group.label}
                  </Link>
                );
              })}
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
