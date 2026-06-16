export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-accent/10 text-accent border border-accent/20',
    subtle: 'bg-surface-2 text-muted border border-border',
    solid: 'bg-accent text-white',
  };

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide',
        variants[variant],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
