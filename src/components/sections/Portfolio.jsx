import { ExternalLink, Briefcase } from 'lucide-react';
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
      className={['reveal card group overflow-hidden', visible ? 'visible' : ''].join(' ')}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {/* Accent top stripe */}
      <div className="h-1 bg-gradient-to-r from-accent to-accent-light opacity-80 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 sm:p-7">
        <Badge variant="subtle" className="mb-4">
          {project.category}
        </Badge>

        <h3 className="text-lg font-bold text-text mb-2.5 tracking-tight group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Impact stats */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stats.map((stat) => (
            <span key={stat} className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-lg">
              {stat}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs font-medium text-subtle bg-surface-2 px-2.5 py-1 rounded-lg">
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
    <section id="portfolio" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={['reveal', visible ? 'visible' : ''].join(' ')}>
          <SectionHeader
            badge="Our Work"
            badgeIcon={Briefcase}
            title="Featured Projects"
            subtitle="Explore our portfolio of innovative software solutions that deliver real business value."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {siteConfig.portfolio.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
