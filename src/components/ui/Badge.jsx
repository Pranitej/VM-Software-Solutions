export default function Badge({ children, icon: Icon, variant = 'default', className = '' }) {
  const variants = {
    default: 'pill text-accent',
    subtle:  'pill text-muted',
    solid:   'bg-accent text-white border border-accent',
    ink:     'bg-line text-[var(--bg)]',
  };

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.7rem] font-display font-semibold tracking-wide',
        variants[variant],
        className,
      ].join(' ')}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      {children}
    </span>
  );
}
