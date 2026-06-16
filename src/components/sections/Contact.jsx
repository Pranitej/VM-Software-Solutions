import { ArrowUpRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { siteConfig } from '../../config';
import { useReveal } from '../../hooks/useReveal';
import SectionHeader from '../ui/SectionHeader';

function ContactCard({ method, index }) {
  const { ref, visible } = useReveal(0.1);
  const Icon = LucideIcons[method.icon] || LucideIcons.Mail;

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
      {/* Icon */}
      <div className="w-13 h-13 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-300">
        <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold text-subtle uppercase tracking-widest mb-1">{method.label}</p>
        <p className="text-sm sm:text-base font-semibold text-text group-hover:text-accent transition-colors truncate">
          {method.value}
        </p>
        <p className="text-xs text-muted mt-0.5">{method.sub}</p>
      </div>

      {/* Arrow */}
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

        {/* Contact method cards — 2×2 grid */}
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
