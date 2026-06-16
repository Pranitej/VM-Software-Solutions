import Badge from './Badge';

export default function SectionHeader({ badge, title, subtitle, centered = true, className = '' }) {
  return (
    <div className={['mb-14', centered ? 'text-center' : '', className].join(' ')}>
      {badge && (
        <Badge className="mb-4 inline-flex">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={['text-muted text-base sm:text-lg leading-relaxed', centered ? 'max-w-2xl mx-auto' : ''].join(' ')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
