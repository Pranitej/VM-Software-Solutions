import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, error, className = '', ...props }, ref) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-muted">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={[
          'w-full px-4 py-3 rounded-lg text-sm',
          'bg-surface-2 border border-border text-text',
          'placeholder:text-subtle',
          'focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent',
          'transition-all duration-200',
          error ? 'border-red-500 focus:ring-red-500/30' : '',
          className,
        ].join(' ')}
        {...props}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
});

export default Input;
