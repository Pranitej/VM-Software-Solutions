import { forwardRef } from 'react';

const variants = {
  primary: 'bg-accent hover:bg-accent-light text-white shadow-lg shadow-accent/20 hover:shadow-accent/30',
  outline: 'border border-border hover:border-accent-light text-muted hover:text-text bg-transparent',
  ghost: 'text-muted hover:text-text hover:bg-surface-2 bg-transparent',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const Button = forwardRef(function Button(
  { children, variant = 'primary', size = 'md', className = '', ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={[
        'inline-flex items-center justify-center gap-2 font-medium rounded-lg',
        'transition-all duration-200 cursor-pointer select-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base',
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
