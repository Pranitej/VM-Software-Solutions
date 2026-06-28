import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config';
import { useReveal } from '../../hooks/useReveal';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

function ServiceCard({ service, index }) {
  const { ref, visible } = useReveal(0.1);
  const Icon = Icons[service.icon] || Icons.Code2;

  return (
    <div
      ref={ref}
      className={[
        'reveal card group p-7 sm:p-8 flex flex-col overflow-hidden',
        visible ? 'visible' : '',
      ].join(' ')}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Top row: icon + index */}
      <div className="flex items-start justify-between mb-7">
        <div className="w-12 h-12 rounded-xl border border-border bg-surface-2 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>
        <span className="font-display text-sm font-medium text-subtle tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="font-display text-lg font-semibold text-text mb-2.5 tracking-tight">
        {service.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed flex-1">
        {service.description}
      </p>

      <div className="flex items-center gap-1.5 mt-6 text-accent text-sm font-display font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Learn more <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={['reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 sm:mb-16', visible ? 'visible' : ''].join(' ')}>
          <div className="max-w-2xl">
            <span className="eyebrow mb-5">What we do</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.85rem] font-semibold text-text tracking-tight leading-[1.08]">
              Capabilities, end to end —<br className="hidden sm:block" />
              <span className="text-muted">from strategy to ship.</span>
            </h2>
          </div>
          <Button
            variant="outline"
            className="shrink-0 self-start md:self-auto"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss your project
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
