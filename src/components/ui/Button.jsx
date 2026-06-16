import { forwardRef } from 'react';

const variants = {
  primary: 'bg-accent hover:bg-accent-light text-white shadow-md shadow-accent/20 hover:shadow-accent/30 hover:shadow-lg',
  outline: 'border border-border hover:border-accent text-muted hover:text-accent bg-transparent',
  ghost: 'text-muted hover:text-text hover:bg-surface-2 bg-transparent',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-sm font-semibold',
};

const Button = forwardRef(function Button(
  { children, variant = 'primary', size = 'md', className = '', ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={[
        'inline-flex items-center justify-center gap-2 font-medium rounded-xl',
        'transition-all duration-200 cursor-pointer select-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
