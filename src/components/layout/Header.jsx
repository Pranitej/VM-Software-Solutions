import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';

function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2.5 group cursor-pointer">
      <span className="relative w-9 h-9 rounded-lg bg-line text-[var(--bg)] flex items-center justify-center font-display font-bold text-sm tracking-tight overflow-hidden transition-transform duration-300 group-hover:-rotate-6">
        VM
        <span className="absolute -right-1 -bottom-1 w-2.5 h-2.5 rounded-full bg-accent" />
      </span>
      <span className="font-display font-semibold text-text text-[0.95rem] tracking-tight leading-none">
        VM Software
        <span className="block text-[0.7rem] font-sans font-medium tracking-[0.22em] uppercase text-subtle mt-0.5">
          Solutions
        </span>
      </span>
    </button>
  );
}

export default function Header({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = siteConfig.nav.map((n) => n.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive('#' + e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
      <header
        className={[
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled ? 'nav-blur py-0' : 'bg-transparent py-2',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo onClick={() => handleNav('#home')} />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-surface/60 backdrop-blur px-1.5 py-1">
              {siteConfig.nav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className={[
                    'relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer',
                    active === item.href
                      ? 'text-[var(--bg)]'
                      : 'text-muted hover:text-text',
                  ].join(' ')}
                >
                  {active === item.href && (
                    <span className="absolute inset-0 rounded-full bg-line -z-0" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              <Button size="sm" onClick={() => handleNav('#contact')}>
                Start a project
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              <button
                className="p-2 rounded-lg text-text hover:text-accent transition-colors cursor-pointer"
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

      {/* Mobile backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={[
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        style={{ background: 'rgba(16, 13, 10, 0.55)', backdropFilter: 'blur(4px)' }}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <div
        className={[
          'fixed top-[4.5rem] inset-x-4 z-50 md:hidden rounded-2xl mobile-menu',
          'transition-all duration-300 origin-top',
          open ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none',
        ].join(' ')}
      >
        <nav className="p-3 flex flex-col gap-1">
          {siteConfig.nav.map((item, i) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={[
                'w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer',
                active === item.href ? 'text-accent bg-accent/10 font-semibold' : 'text-text hover:text-accent hover:bg-accent/8',
              ].join(' ')}
            >
              {item.label}
              <span className="font-display text-[0.7rem] text-subtle">0{i + 1}</span>
            </button>
          ))}
          <div className="pt-1 px-1">
            <Button className="w-full mt-1" onClick={() => handleNav('#contact')}>
              Start a project
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
