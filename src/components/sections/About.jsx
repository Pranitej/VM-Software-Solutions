import { Target, Eye, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config';
import { useReveal } from '../../hooks/useReveal';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

function TeamCard({ member, index }) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={['reveal card group p-6', visible ? 'visible' : ''].join(' ')}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-line text-[var(--bg)] flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
        <span className="font-display text-lg font-bold">{member.initials}</span>
      </div>
      <h3 className="font-display text-base font-semibold text-text">{member.name}</h3>
      <p className="text-xs text-accent font-medium mb-3">{member.role}</p>
      <p className="text-xs text-muted leading-relaxed mb-3">{member.bio}</p>
      <p className="text-[0.7rem] text-subtle mb-4 font-serif-accent">{member.education}</p>
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
        {member.expertise.map((skill) => (
          <span key={skill} className="text-[0.7rem] font-medium text-muted border border-border px-2 py-0.5 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ValueCard({ val, index }) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={['reveal card p-6 group', visible ? 'visible' : ''].join(' ')}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="font-display text-2xl font-medium text-accent">{String(index + 1).padStart(2, '0')}</span>
      <p className="font-display text-base font-semibold text-text mt-3 mb-1.5">{val.title}</p>
      <p className="text-sm text-muted leading-relaxed">{val.description}</p>
    </div>
  );
}

export default function About() {
  const { ref: h1, visible: v1 } = useReveal(0.1);
  const { ref: h2, visible: v2 } = useReveal(0.1);
  const specialties = [...siteConfig.specialties, ...siteConfig.specialties];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 section-alt overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header — left aligned editorial */}
        <div ref={h1} className={['reveal grid lg:grid-cols-12 gap-8 items-end mb-16', v1 ? 'visible' : ''].join(' ')}>
          <div className="lg:col-span-7">
            <span className="eyebrow mb-5">Who we are</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.85rem] font-semibold text-text tracking-tight leading-[1.08]">
              A studio of senior engineers, <span className="font-serif-accent text-accent">not a body shop.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted text-base sm:text-lg leading-relaxed">
            Founded in {siteConfig.company.founded}, VM Software Solutions pairs deep technical craft with real business
            judgment — small teams, senior people, owning outcomes from first sketch to production.
          </p>
        </div>

        {/* Mission + Vision */}
        <div ref={h2} className={['reveal grid grid-cols-1 md:grid-cols-2 gap-5 mb-20', v2 ? 'visible' : ''].join(' ')}>
          {[
            { Icon: Target, title: 'Our Mission', text: siteConfig.mission },
            { Icon: Eye,    title: 'Our Vision',  text: siteConfig.vision  },
          ].map((item) => {
            const Icon = item.Icon;
            const { title, text } = item;
            return (
            <div key={title} className="card p-7 sm:p-9">
              <div className="w-11 h-11 rounded-xl border border-border bg-surface-2 flex items-center justify-center text-accent mb-5">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-text mb-3">{title}</h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">{text}</p>
            </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="font-display text-xl font-semibold text-text mb-8">Principles we work by</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.values.map((val, i) => (
              <ValueCard key={val.title} val={val} index={i} />
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <h3 className="font-display text-xl font-semibold text-text mb-2">Leadership</h3>
          <p className="text-muted text-sm mb-8 max-w-md">The people accountable for the work we ship.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Specialties marquee — full bleed */}
      <div className="mb-20 -mx-4 sm:-mx-6 lg:-mx-8 py-6 border-y border-border">
        <div className="relative overflow-hidden">
          <div className="marquee-track animate-marquee-rev gap-4 pr-4">
            {specialties.map((spec, i) => (
              <span
                key={i}
                className="shrink-0 font-display text-sm font-medium text-muted px-5 py-2 rounded-full border border-border bg-surface whitespace-nowrap"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto">
        <div className="card-ink p-9 sm:p-14 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 -z-0 opacity-60"
            style={{ background: 'radial-gradient(circle at 50% 120%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 60%)' }}
          />
          <div className="relative z-10">
            <h3 className="font-display text-2xl sm:text-[2.25rem] font-semibold text-text mb-4 tracking-tight leading-tight">
              Have something ambitious in mind?
            </h3>
            <p className="text-muted mb-9 max-w-lg mx-auto text-sm sm:text-base">
              Tell us what you're building. We'll tell you, honestly, how we'd approach it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Book a consultation
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                View case studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
