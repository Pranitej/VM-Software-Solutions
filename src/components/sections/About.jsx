import { useReveal } from '../../hooks/useReveal';
import { siteConfig } from '../../config';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { ArrowRight, Target, Eye, CheckCircle2 } from 'lucide-react';

function TeamCard({ member, index }) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={[
        'reveal group p-6 rounded-2xl border border-border bg-surface',
        'hover:border-accent/30 hover:bg-surface-2 transition-all duration-300',
        visible ? 'visible' : '',
      ].join(' ')}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Avatar */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/30 to-accent-light/20 border border-accent/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
        <span className="text-lg font-black text-accent-light">{member.initials}</span>
      </div>

      <h3 className="text-base font-bold text-text mb-0.5">{member.name}</h3>
      <p className="text-sm text-accent-light mb-3 font-medium">{member.role}</p>
      <p className="text-sm text-muted leading-relaxed mb-4">{member.bio}</p>

      <p className="text-xs text-subtle mb-3">{member.education}</p>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
        {member.expertise.map((skill) => (
          <span key={skill} className="text-xs font-medium text-muted bg-surface-2 px-2 py-0.5 rounded-md border border-border/50">
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
      key={val.title}
      ref={ref}
      className={[
        'reveal flex gap-3 p-5 rounded-xl border border-border bg-surface hover:border-accent/30 hover:bg-surface-2 transition-all duration-300',
        visible ? 'visible' : '',
      ].join(' ')}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-semibold text-text mb-1">{val.title}</p>
        <p className="text-xs text-muted">{val.description}</p>
      </div>
    </div>
  );
}

export default function About() {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.1);
  const { ref: missionRef, visible: missionVisible } = useReveal(0.1);

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 w-[350px] h-[500px] bg-accent/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={['reveal text-center', headerVisible ? 'visible' : ''].join(' ')}
        >
          <SectionHeader
            badge="About Us"
            title="Driving Digital Transformation"
            subtitle={`Founded in ${siteConfig.company.founded}, VM Software Solutions is led by industry pioneers who combine technical expertise with business insight to deliver exceptional results.`}
          />
        </div>

        {/* Mission & Vision */}
        <div
          ref={missionRef}
          className={[
            'reveal grid grid-cols-1 md:grid-cols-2 gap-5 mb-16',
            missionVisible ? 'visible' : '',
          ].join(' ')}
        >
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
              <Target className="w-5 h-5 text-accent-light" />
            </div>
            <h3 className="text-lg font-bold text-text mb-3">Our Mission</h3>
            <p className="text-muted text-sm leading-relaxed">{siteConfig.mission}</p>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
              <Eye className="w-5 h-5 text-accent-light" />
            </div>
            <h3 className="text-lg font-bold text-text mb-3">Our Vision</h3>
            <p className="text-muted text-sm leading-relaxed">{siteConfig.vision}</p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-text text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.values.map((val, i) => (
              <ValueCard key={val.title} val={val} index={i} />
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-text mb-3 tracking-tight">Meet Our Leadership</h3>
            <p className="text-muted text-base max-w-xl mx-auto">The visionary founders who turned a shared dream into a thriving enterprise.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-text text-center mb-8">Our Specialties</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.specialties.map((spec) => (
              <span
                key={spec}
                className="px-5 py-2.5 rounded-full border border-border bg-surface text-sm font-medium text-muted hover:border-accent/40 hover:text-text hover:bg-surface-2 transition-all duration-200 cursor-default"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative p-8 sm:p-12 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[60px]" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-text mb-3 tracking-tight">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Join hundreds of businesses that have accelerated their growth with our custom software solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
