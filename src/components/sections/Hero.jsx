import { ArrowRight, ChevronDown } from 'lucide-react';
import { siteConfig } from '../../config';
import Button from '../ui/Button';

export default function Hero() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-36 sm:pb-20"
    >
      {/* Very subtle background gradient — no orbs, no blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, color-mix(in oklab, var(--accent) 10%, transparent), transparent)',
        }}
      />

      {/* Dot grid — super subtle */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(var(--accent) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Badge */}
        <div className="animate-fade-in glass-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-accent text-xs font-semibold tracking-widest uppercase mb-8 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
          {siteConfig.company.heroBadge}
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.1] mb-6 animate-fade-up"
          style={{ animationDelay: '0.08s' }}
        >
          Enterprise Software
          <br />
          <span className="gradient-text">Solutions That Scale</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mb-10 animate-fade-up"
          style={{ animationDelay: '0.16s' }}
        >
          {siteConfig.company.description}
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-16 animate-fade-up"
          style={{ animationDelay: '0.24s' }}
        >
          <Button size="lg" className="w-full sm:w-auto" onClick={() => handleNav('#contact')}>
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => handleNav('#portfolio')}>
            View Our Work
          </Button>
        </div>

        {/* Stats — wrapped in glass card */}
        <div
          className="card w-full max-w-2xl mx-auto px-6 py-6 sm:px-8 animate-fade-up"
          style={{ animationDelay: '0.32s' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 text-center">
                <span className="text-2xl sm:text-3xl font-black text-text">{stat.value}</span>
                <span className="text-xs text-subtle font-medium tracking-wide leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted by — glass card */}
      <div className="relative z-10 mt-8 w-full max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.48s' }}>
        <div className="card px-6 py-5">
          <p className="text-center text-subtle text-[10px] font-bold tracking-widest uppercase mb-4">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 sm:gap-x-10">
            {siteConfig.trustedBy.map((company) => (
              <span key={company} className="text-subtle font-bold text-sm tracking-wide hover:text-muted transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <button
        onClick={() => handleNav('#services')}
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-subtle hover:text-muted transition-colors cursor-pointer"
      >
        <span className="text-[9px] tracking-widest uppercase font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
