import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { siteConfig } from '../../config';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = siteConfig.nav.map((n) => n.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center group-hover:bg-accent-light transition-colors">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-text text-base tracking-tight">
              VM<span className="text-accent"> Solutions</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={[
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer',
                  active === item.href
                    ? 'text-accent bg-accent/8 font-semibold'
                    : 'text-muted hover:text-text hover:bg-surface-2',
                ].join(' ')}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <Button size="sm" onClick={() => handleNav('#contact')}>
              Get Started
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              className="p-2 rounded-lg text-muted hover:text-text hover:bg-surface-2 transition-colors cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          'md:hidden transition-all duration-300 overflow-hidden',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="bg-surface/95 backdrop-blur-xl border-b border-border px-4 pb-5 pt-2 flex flex-col gap-1">
          {siteConfig.nav.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={[
                'w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer',
                active === item.href
                  ? 'text-accent bg-accent/8 font-semibold'
                  : 'text-muted hover:text-text hover:bg-surface-2',
              ].join(' ')}
            >
              {item.label}
            </button>
          ))}
          <Button className="mt-2 w-full" onClick={() => handleNav('#contact')}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
