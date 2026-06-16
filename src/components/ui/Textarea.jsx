import { forwardRef } from 'react';

const Textarea = forwardRef(function Textarea({ label, error, className = '', rows = 5, ...props }, ref) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-text">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={[
          'w-full px-4 py-3 rounded-xl text-sm resize-none',
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

export default Textarea;
