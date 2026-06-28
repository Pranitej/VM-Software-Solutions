import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config';
import { useReveal } from '../../hooks/useReveal';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

function ProjectCard({ project, index }) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={['reveal card group overflow-hidden flex flex-col', visible ? 'visible' : ''].join(' ')}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="p-7 sm:p-9 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <span className="font-display text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-accent">
              {project.category}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-text mt-2 tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>
          </div>
          <span className="font-display text-3xl sm:text-4xl font-medium text-border tabular-nums leading-none select-none group-hover:text-accent/30 transition-colors">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <p className="text-sm text-muted leading-relaxed mb-7">
          {project.description}
        </p>

        {/* Impact stats — divided row */}
        <div className="grid grid-cols-3 gap-2 mb-7 mt-auto">
          {project.stats.map((stat) => (
            <div key={stat} className="border-l border-border pl-3 py-0.5">
              <span className="block font-display text-[0.82rem] font-semibold text-text leading-snug">{stat}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border">
          {project.tech.map((tech) => (
            <span key={tech} className="text-[0.72rem] font-medium text-subtle border border-border px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <button className="flex items-center justify-between px-7 sm:px-9 py-4 border-t border-border text-sm font-display font-medium text-muted group-hover:text-accent group-hover:bg-accent/5 transition-colors cursor-pointer">
        View case study
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}

export default function Portfolio() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={['reveal', visible ? 'visible' : ''].join(' ')}>
          <SectionHeader
            badge="Selected work"
            title="Products we've shipped"
            subtitle="A few of the platforms and tools we've designed, built and scaled with our clients."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {siteConfig.portfolio.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
