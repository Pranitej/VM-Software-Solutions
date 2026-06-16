export default function Badge({ children, icon: Icon, variant = 'default', className = '' }) {
  const variants = {
    default: 'glass-pill text-accent',
    subtle:  'glass-pill text-muted',
    solid:   'bg-accent text-white',
  };

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide',
        variants[variant],
        className,
      ].join(' ')}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      {children}
    </span>
  );
}
