import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { siteConfig } from '../../config';
import { useCountUp } from '../../hooks/useCountUp';
import Button from '../ui/Button';

function Stat({ stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div ref={ref} className="flex flex-col">
      <span className="font-display text-2xl sm:text-[1.75rem] font-semibold text-text leading-none tabular-nums">
        {value}
      </span>
      <span className="text-[0.72rem] text-subtle font-medium tracking-wide mt-1.5 leading-tight">
        {stat.label}
      </span>
    </div>
  );
}

function Marquee() {
  const items = [...siteConfig.trustedBy, ...siteConfig.trustedBy];
  return (
    <div className="relative overflow-hidden py-1 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="marquee-track animate-marquee gap-12 pr-12">
        {items.map((c, i) => (
          <span key={i} className="font-display text-lg font-medium text-subtle whitespace-nowrap shrink-0">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pt-40 sm:pb-16">
      {/* Decorative animated mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-32 -right-20 w-[640px] h-[640px] rounded-full opacity-50 animate-float"
          style={{ background: 'radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 60%)' }}
        />
        <div
          className="absolute top-40 -left-32 w-[520px] h-[520px] rounded-full opacity-40 animate-float"
          style={{ background: 'radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent-2) 24%, transparent), transparent 60%)', animationDelay: '2s' }}
        />
        {/* Faint blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(var(--border-c) 1px, transparent 1px), linear-gradient(90deg, var(--border-c) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          {/* Headline column */}
          <div className="lg:col-span-8">
            <span className="eyebrow mb-7 animate-fade-in">{siteConfig.company.heroBadge}</span>

            <h1 className="font-display font-semibold tracking-tight text-text text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[5.1rem] lg:leading-[0.98]">
              <span className="block animate-fade-up" style={{ animationDelay: '0.05s' }}>
                We build the
              </span>
              <span className="block animate-fade-up" style={{ animationDelay: '0.13s' }}>
                software your business
              </span>
              <span className="block animate-fade-up" style={{ animationDelay: '0.21s' }}>
                <span className="font-serif-accent shimmer-text">actually</span> runs on.
              </span>
            </h1>

            <p
              className="text-muted text-base sm:text-lg leading-relaxed max-w-xl mt-7 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              {siteConfig.company.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-9 animate-fade-up" style={{ animationDelay: '0.38s' }}>
              <Button size="lg" onClick={() => handleNav('#contact')}>
                Start your project
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => handleNav('#portfolio')}>
                See our work
              </Button>
            </div>
          </div>

          {/* Stat card column */}
          <div className="lg:col-span-4 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            <div className="card-ink p-7 sm:p-8">
              <p className="eyebrow mb-6 text-[0.66rem]">By the numbers</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                {siteConfig.stats.map((stat) => (
                  <Stat key={stat.label} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trusted-by marquee */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-[0.66rem] font-display font-semibold tracking-[0.22em] uppercase text-subtle mb-5">
            Trusted by teams at
          </p>
          <Marquee />
        </div>
      </div>

      <button
        onClick={() => handleNav('#services')}
        className="hidden lg:flex items-center gap-2 mt-12 text-subtle hover:text-accent transition-colors cursor-pointer mx-auto group/scroll"
      >
        <span className="text-[0.7rem] tracking-widest uppercase font-display">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 group-hover/scroll:translate-y-1 transition-transform" />
      </button>
    </section>
  );
}
