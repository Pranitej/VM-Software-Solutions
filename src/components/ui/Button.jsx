import { forwardRef } from 'react';

const variants = {
  primary:
    'bg-accent text-white shadow-[0_8px_24px_-8px_var(--ring)] hover:shadow-[0_14px_32px_-8px_var(--ring)] hover:-translate-y-0.5',
  ink:
    'bg-line text-[var(--bg)] hover:-translate-y-0.5 hover:shadow-lg',
  outline:
    'border-[1.5px] border-line text-text bg-transparent hover:bg-line hover:text-[var(--bg)]',
  ghost:
    'text-muted hover:text-accent bg-transparent',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-[0.95rem]',
};

const Button = forwardRef(function Button(
  { children, variant = 'primary', size = 'md', className = '', ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={[
        'group/btn inline-flex items-center justify-center gap-2 font-display font-medium rounded-full',
        'transition-all duration-300 cursor-pointer select-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]',
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
