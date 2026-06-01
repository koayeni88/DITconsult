import Link from 'next/link';
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  FOOTER_SECTIONS,
} from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="container-custom py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="text-lg font-bold text-white">{COMPANY_NAME}</span>
            </Link>
            <p className="text-primary-400 font-semibold text-xs uppercase tracking-widest mb-1">
              Secure. Transform. Protect.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Practical cloud security, compliance, and incident readiness for growing organizations.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
            >
              Book a consultation →
            </Link>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_SECTIONS.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_SECTIONS.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
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
              <li className="pt-2 flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
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
