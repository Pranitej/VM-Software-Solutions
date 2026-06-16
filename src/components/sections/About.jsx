import { Target, Eye, CheckCircle2, ArrowRight, Users } from 'lucide-react';
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
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
        <span className="text-base font-black text-white">{member.initials}</span>
      </div>
      <h3 className="text-sm font-bold text-text mb-0.5">{member.name}</h3>
      <p className="text-xs text-accent font-semibold mb-3">{member.role}</p>
      <p className="text-xs text-muted leading-relaxed mb-3">{member.bio}</p>
      <p className="text-[11px] text-subtle mb-3 italic">{member.education}</p>
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
        {member.expertise.map((skill) => (
          <span key={skill} className="text-[11px] font-medium text-muted bg-surface-2 px-2 py-0.5 rounded-md">
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
      className={['reveal card flex gap-3 p-5', visible ? 'visible' : ''].join(' ')}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-semibold text-text mb-1">{val.title}</p>
        <p className="text-xs text-muted leading-relaxed">{val.description}</p>
      </div>
    </div>
  );
}

export default function About() {
  const { ref: h1, visible: v1 } = useReveal(0.1);
  const { ref: h2, visible: v2 } = useReveal(0.1);

  return (
    <section id="about" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={h1} className={['reveal', v1 ? 'visible' : ''].join(' ')}>
          <SectionHeader
            badge="About Us"
            badgeIcon={Users}
            title="Driving Digital Transformation"
            subtitle={`Founded in ${siteConfig.company.founded}, VM Software Solutions is led by industry pioneers who combine technical expertise with business insight.`}
          />
        </div>

        {/* Mission + Vision */}
        <div ref={h2} className={['reveal grid grid-cols-1 md:grid-cols-2 gap-5 mb-14', v2 ? 'visible' : ''].join(' ')}>
          {[
            { Icon: Target, title: 'Our Mission', text: siteConfig.mission },
            { Icon: Eye,    title: 'Our Vision',  text: siteConfig.vision  },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="card p-6 sm:p-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-bold text-text mb-3">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-text text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.values.map((val, i) => (
              <ValueCard key={val.title} val={val} index={i} />
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-text text-center mb-2">Meet Our Leadership</h3>
          <p className="text-muted text-sm text-center mb-8 max-w-md mx-auto">The visionary founders who turned a shared dream into a thriving enterprise.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-text text-center mb-7">Our Specialties</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.specialties.map((spec) => (
              <span
                key={spec}
                className="px-5 py-2 rounded-full border border-border bg-surface text-sm font-medium text-muted hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-default"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="card p-8 sm:p-12 text-center bg-gradient-to-br from-accent/8 via-transparent to-accent-light/5">
          <h3 className="text-2xl sm:text-3xl font-bold text-text mb-3 tracking-tight">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted mb-8 max-w-lg mx-auto text-sm sm:text-base">
            Join hundreds of businesses that have accelerated their growth with our custom software solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
