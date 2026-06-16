import { Zap } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { siteConfig } from '../../config';

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-surface pt-14 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-text text-base tracking-tight">
                VM<span className="text-accent"> Solutions</span>
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-5">
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
                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-subtle hover:text-accent hover:border-accent/40 hover:bg-accent/8 transition-all duration-200"
                  >
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {siteConfig.footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-muted hover:text-accent transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {siteConfig.footerLinks.services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-subtle text-center sm:text-left">
            © {new Date().getFullYear()} VM Software Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {siteConfig.footerLinks.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-xs text-subtle hover:text-muted transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
