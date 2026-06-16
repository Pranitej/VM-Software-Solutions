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

  /* Close menu on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Prevent body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Header bar ────────────────────────────────────────────── */}
      <header
        className={[
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled ? 'glass-nav' : 'bg-transparent',
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
                VM<span className="text-accent"> Software Solutions</span>
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
                      ? 'text-accent bg-accent/10 font-semibold'
                      : 'text-text hover:text-accent hover:bg-accent/8',
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
                className="p-2 rounded-lg text-text hover:bg-accent/8 transition-colors cursor-pointer"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile backdrop ────────────────────────────────────────── */}
      <div
        onClick={() => setOpen(false)}
        className={[
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        ].join(' ')}
        style={{ background: 'rgba(2, 8, 23, 0.55)', backdropFilter: 'blur(4px)' }}
        aria-hidden="true"
      />

      {/* ── Mobile menu panel ──────────────────────────────────────── */}
      <div
        className={[
          'fixed top-[4.25rem] inset-x-4 z-50 md:hidden rounded-2xl glass-menu',
          'transition-all duration-300 origin-top',
          open
            ? 'opacity-100 scale-y-100 pointer-events-auto'
            : 'opacity-0 scale-y-95 pointer-events-none',
        ].join(' ')}
      >
        <nav className="p-3 flex flex-col gap-1">
          {siteConfig.nav.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={[
                'w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer',
                active === item.href
                  ? 'text-accent bg-accent/10 font-semibold'
                  : 'text-text hover:text-accent hover:bg-accent/8',
              ].join(' ')}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-1 pb-1 px-1">
            <Button className="w-full mt-1" onClick={() => handleNav('#contact')}>
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
