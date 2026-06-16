import Badge from './Badge';

export default function SectionHeader({ badge, title, subtitle, centered = true, className = '' }) {
  return (
    <div className={['mb-16', centered ? 'text-center' : '', className].join(' ')}>
      {badge && (
        <Badge className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
