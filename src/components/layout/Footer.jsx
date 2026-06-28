import * as LucideIcons from 'lucide-react';
import { siteConfig } from '../../config';

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border bg-surface-2 pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Oversized wordmark watermark */}
      <div
        className="pointer-events-none select-none absolute -bottom-6 sm:-bottom-10 left-0 right-0 text-center font-display font-bold text-text/[0.04] leading-none whitespace-nowrap"
        style={{ fontSize: 'clamp(5rem, 20vw, 18rem)' }}
        aria-hidden="true"
      >
        VM SOFTWARE
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="sm:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="relative w-9 h-9 rounded-lg bg-line text-[var(--bg)] flex items-center justify-center font-display font-bold text-sm">
                VM
                <span className="absolute -right-1 -bottom-1 w-2.5 h-2.5 rounded-full bg-accent" />
              </span>
              <span className="font-display font-semibold text-text text-base tracking-tight">VM Software Solutions</span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-6 max-w-xs">
              {siteConfig.company.shortDescription}
            </p>
            <div className="flex gap-2">
              {siteConfig.social.map((s) => {
                const Icon = LucideIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-subtle hover:text-accent hover:border-accent/40 transition-all duration-200"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-3">
            <h4 className="font-display text-[0.7rem] font-semibold text-subtle mb-5 tracking-[0.18em] uppercase">Navigate</h4>
            <ul className="space-y-3">
              {siteConfig.footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-muted hover:text-accent link-underline transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="sm:col-span-4">
            <h4 className="font-display text-[0.7rem] font-semibold text-subtle mb-5 tracking-[0.18em] uppercase">Services</h4>
            <ul className="space-y-3">
              {siteConfig.footerLinks.services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-subtle text-center sm:text-left">
            © {new Date().getFullYear()} VM Software Solutions — {siteConfig.company.headquarters}.
          </p>
          <div className="flex items-center gap-5">
            {siteConfig.footerLinks.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-xs text-subtle hover:text-text transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
