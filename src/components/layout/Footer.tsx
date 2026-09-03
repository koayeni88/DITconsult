import Link from 'next/link';
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  FOOTER_SECTIONS,
  SOCIAL_LINKS,
} from '@/lib/constants';
import Logo from '@/components/common/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialEntries = Object.entries(SOCIAL_LINKS).filter(([, url]) => Boolean(url));

  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12">
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-primary-400 font-semibold text-xs uppercase tracking-widest mb-1">
              Secure. Transform. Protect.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Multi-cloud security, compliance readiness, and risk-prioritized remediation for growing organizations.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
            >
              Book a consultation →
            </Link>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {FOOTER_SECTIONS.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {FOOTER_SECTIONS.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Tools</h4>
            <ul className="space-y-3">
              {FOOTER_SECTIONS.tools.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-white/60 hover:text-white transition-colors text-sm break-all"
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {COMPANY_PHONE}
                </a>
              </li>
              {socialEntries.length > 0 ? (
                <li className="pt-2 flex gap-4">
                  {socialEntries.map(([network, url]) => (
                    <a
                      key={network}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors text-sm capitalize"
                    >
                      {network}
                    </a>
                  ))}
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>
            &copy; {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
