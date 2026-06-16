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
      className="relative min-h-screen flex flex-col overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-32 sm:pb-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-[90vw] bg-accent/8 rounded-full blur-[120px]" />
        {/* Top-right glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-light/5 rounded-full blur-[100px]" />
        {/* Bottom-left glow */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-accent rounded-full opacity-40 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-[15%] w-1.5 h-1.5 bg-accent-light rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-[20%] w-1 h-1 bg-accent rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 right-[25%] w-2 h-2 bg-accent-light rounded-full opacity-25 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main content — grows to fill and centers vertically */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/8 text-accent-light text-[10px] sm:text-xs font-medium tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
          Transforming Businesses with Innovative Software
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Enterprise Software
          <br />
          <span className="gradient-text">Solutions That Scale</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          {siteConfig.company.description}
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14 sm:mb-16 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Button size="lg" className="w-full sm:w-auto" onClick={() => handleNav('#contact')}>
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => handleNav('#portfolio')}>
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 sm:gap-8 w-full max-w-3xl mx-auto animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-black text-text">{stat.value}</span>
              <span className="text-xs sm:text-sm text-subtle font-medium tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted by — in normal flow, always below content */}
      <div className="relative z-10 mt-16 sm:mt-20 w-full animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <p className="text-center text-subtle text-[10px] sm:text-xs font-medium tracking-widest uppercase mb-5">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10 max-w-3xl mx-auto">
          {siteConfig.trustedBy.map((company) => (
            <span
              key={company}
              className="text-subtle/60 font-semibold text-sm sm:text-base tracking-wide hover:text-muted transition-colors"
            >
              {company}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator — desktop only, where there is room */}
      <button
        onClick={() => handleNav('#services')}
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-subtle hover:text-muted transition-colors cursor-pointer animate-fade-in"
        style={{ animationDelay: '0.8s' }}
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
