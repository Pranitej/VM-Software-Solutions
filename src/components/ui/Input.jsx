import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, error, className = '', ...props }, ref) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-text">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={[
          'w-full px-4 py-3 rounded-xl text-sm',
          'bg-surface border border-border text-text',
          'placeholder:text-subtle',
          'focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent',
          'transition-all duration-200',
          'shadow-sm',
          error ? 'border-red-400 focus:ring-red-400/20' : '',
          className,
        ].join(' ')}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
});

export default Input;
