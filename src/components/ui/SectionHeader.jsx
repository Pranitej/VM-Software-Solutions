export default function SectionHeader({ badge, title, subtitle, centered = true, className = '', index }) {
  return (
    <div className={['mb-12 sm:mb-16', centered ? 'text-center' : 'max-w-2xl', className].join(' ')}>
      {badge && (
        <span className={['eyebrow mb-5', centered ? 'centered' : ''].join(' ')}>
          {index && <span className="opacity-60">{index}</span>}
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.85rem] font-semibold text-text tracking-tight leading-[1.08]">
        {title}
      </h2>
      {subtitle && (
        <p className={['text-muted text-base sm:text-lg leading-relaxed mt-5', centered ? 'max-w-2xl mx-auto' : ''].join(' ')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
