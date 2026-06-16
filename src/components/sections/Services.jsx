import * as Icons from 'lucide-react';
import { siteConfig } from '../../config';
import { useReveal } from '../../hooks/useReveal';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

function ServiceCard({ service, index }) {
  const { ref, visible } = useReveal(0.1);
  const Icon = Icons[service.icon] || Icons.Code2;

  return (
    <div
      ref={ref}
      className={[
        'reveal group p-6 rounded-2xl border border-border bg-surface',
        'hover:border-accent/40 hover:bg-surface-2 transition-all duration-300',
        'hover:shadow-lg hover:shadow-accent/5',
        visible ? 'visible' : '',
      ].join(' ')}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
        <Icon className="w-5 h-5 text-accent-light" />
      </div>
      <h3 className="text-base font-semibold text-text mb-2.5 tracking-tight">
        {service.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={['reveal text-center', visible ? 'visible' : ''].join(' ')}
        >
          <SectionHeader
            badge="Our Services"
            title="Comprehensive Digital Solutions"
            subtitle="We deliver end-to-end software services that transform businesses and drive innovation."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" onClick={() => {
            const el = document.querySelector('#contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
