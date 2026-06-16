import { useState } from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { siteConfig } from '../../config';
import Button from '../ui/Button';
import Input from '../ui/Input';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="border-t border-border bg-surface pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                <Zap className="w-4 h-4 text-accent-light" />
              </div>
              <span className="font-bold text-text text-base tracking-tight">
                VM<span className="text-accent-light"> Solutions</span>
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
                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-subtle hover:text-text hover:border-accent/40 hover:bg-accent/10 transition-all duration-200"
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
                    className="text-sm text-muted hover:text-text transition-colors cursor-pointer"
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

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-2 tracking-wide">Stay Updated</h4>
            <p className="text-sm text-muted mb-4 leading-relaxed">
              Get the latest news and updates directly in your inbox.
            </p>
            {subscribed ? (
              <p className="text-sm text-accent-light font-medium">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" size="sm">
                  Subscribe
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-subtle text-center sm:text-left">
            © {new Date().getFullYear()} VM Software Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
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
