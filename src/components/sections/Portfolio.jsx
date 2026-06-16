import { ArrowRight, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../config';
import { useReveal } from '../../hooks/useReveal';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

function ProjectCard({ project, index }) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={[
        'reveal group rounded-2xl border border-border bg-surface overflow-hidden',
        'hover:border-accent/30 transition-all duration-300',
        'hover:shadow-xl hover:shadow-accent/5',
        visible ? 'visible' : '',
      ].join(' ')}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Color bar top */}
      <div className="h-1 bg-gradient-to-r from-accent via-accent-light to-accent opacity-70 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 sm:p-8">
        {/* Category */}
        <Badge variant="subtle" className="mb-4">
          {project.category}
        </Badge>

        <h3 className="text-xl font-bold text-text mb-3 tracking-tight group-hover:text-accent-light transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stats.map((stat) => (
            <span key={stat} className="text-xs font-semibold text-accent-light bg-accent/10 px-2.5 py-1 rounded-md">
              {stat}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs font-medium text-subtle bg-surface-2 px-2.5 py-1 rounded-md border border-border/50">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-accent/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={ref}
          className={['reveal text-center', visible ? 'visible' : ''].join(' ')}
        >
          <SectionHeader
            badge="Our Work"
            title="Featured Projects"
            subtitle="Explore our portfolio of innovative software solutions that deliver real business value."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {siteConfig.portfolio.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
