import { ArrowUpRight, Phone } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { siteConfig } from '../../config';
import { useReveal } from '../../hooks/useReveal';

function ContactCard({ method, index }) {
  const { ref, visible } = useReveal(0.1);
  const Icon = LucideIcons[method.icon] || Phone;
  const hasNumbers = Array.isArray(method.numbers);

  if (hasNumbers) {
    return (
      <div
        ref={ref}
        className={['reveal card p-6', visible ? 'visible' : ''].join(' ')}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl border border-border bg-surface-2 flex items-center justify-center text-accent shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-text">{method.label}</p>
            <p className="text-xs text-muted">{method.sub}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {method.numbers.map((num) => (
            <a
              key={num.value}
              href={num.href}
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="font-display text-[0.66rem] font-semibold text-subtle uppercase tracking-wider shrink-0 w-14">{num.label}</span>
                <span className="text-sm font-medium text-text group-hover:text-accent transition-colors truncate">{num.value}</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-subtle group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <a
      ref={ref}
      href={method.href}
      target={method.external ? '_blank' : undefined}
      rel={method.external ? 'noopener noreferrer' : undefined}
      className={['reveal card group flex items-center gap-5 p-6 cursor-pointer no-underline', visible ? 'visible' : ''].join(' ')}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-13 h-13 rounded-2xl border border-border bg-surface-2 flex items-center justify-center shrink-0 text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display text-[0.66rem] font-semibold text-subtle uppercase tracking-widest mb-1">{method.label}</p>
        <p className="text-sm sm:text-base font-medium text-text group-hover:text-accent transition-colors truncate">
          {method.value}
        </p>
        <p className="text-xs text-muted mt-0.5">{method.sub}</p>
      </div>
      <ArrowUpRight className="w-4 h-4 text-subtle group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
    </a>
  );
}

export default function Contact() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={['reveal grid lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16', visible ? 'visible' : ''].join(' ')}>
          <div className="lg:col-span-7">
            <span className="eyebrow mb-5">Get in touch</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.85rem] font-semibold text-text tracking-tight leading-[1.08]">
              Let's build something <span className="font-serif-accent text-accent">worth shipping.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted text-base leading-relaxed">
            Reach out on whichever channel suits you. A real engineer reads every message — expect a reply {siteConfig.company.emailResponse}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {siteConfig.contactMethods.map((method, i) => (
            <ContactCard key={method.label} method={method} index={i} />
          ))}
        </div>

        <div className="card p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-display text-sm font-semibold text-text">Follow our journey</p>
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            {siteConfig.social.map((s) => {
              const Icon = LucideIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {s.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
