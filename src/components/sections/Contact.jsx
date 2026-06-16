import { ArrowUpRight, Phone } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { siteConfig } from '../../config';
import { useReveal } from '../../hooks/useReveal';
import SectionHeader from '../ui/SectionHeader';

function ContactCard({ method, index }) {
  const { ref, visible } = useReveal(0.1);
  const Icon = LucideIcons[method.icon] || Phone;

  const hasNumbers = Array.isArray(method.numbers);

  if (hasNumbers) {
    /* ── Multi-number card ── */
    return (
      <div
        ref={ref}
        className={['reveal card p-6', visible ? 'visible' : ''].join(' ')}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        {/* Header row */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center shrink-0">
            <Icon className="w-4.5 h-4.5 text-accent" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-subtle uppercase tracking-widest">{method.label}</p>
            <p className="text-xs text-muted">{method.sub}</p>
          </div>
        </div>

        {/* Number list — each is its own tap target */}
        <div className="flex flex-col gap-2">
          {method.numbers.map((num) => (
            <a
              key={num.value}
              href={num.href}
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl border border-border/60 bg-surface-2/40 hover:bg-accent/8 hover:border-accent/30 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-[10px] font-bold text-subtle uppercase tracking-wider shrink-0 w-14">{num.label}</span>
                <span className="text-sm font-semibold text-text group-hover:text-accent transition-colors truncate">{num.value}</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-subtle group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  /* ── Single-value card (Email, Address) ── */
  return (
    <a
      ref={ref}
      href={method.href}
      target={method.external ? '_blank' : undefined}
      rel={method.external ? 'noopener noreferrer' : undefined}
      className={[
        'reveal card group flex items-center gap-5 p-6 cursor-pointer no-underline',
        visible ? 'visible' : '',
      ].join(' ')}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-13 h-13 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-300">
        <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold text-subtle uppercase tracking-widest mb-1">{method.label}</p>
        <p className="text-sm sm:text-base font-semibold text-text group-hover:text-accent transition-colors truncate">
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
    <section id="contact" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={['reveal', visible ? 'visible' : ''].join(' ')}>
          <SectionHeader
            badge="Get In Touch"
            title="Let's Build Together"
            subtitle="Reach out through any channel below — we'd love to hear about your project."
          />
        </div>

        {/* Contact method cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {siteConfig.contactMethods.map((method, i) => (
            <ContactCard key={method.label} method={method} index={i} />
          ))}
        </div>

        {/* Social links */}
        <div className="card p-6">
          <p className="text-xs font-bold text-subtle uppercase tracking-widest mb-5 text-center">Follow Our Journey</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {siteConfig.social.map((s) => {
              const Icon = LucideIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface-2/50 text-sm font-medium text-muted hover:text-accent hover:border-accent/40 hover:bg-accent/8 transition-all duration-200"
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
