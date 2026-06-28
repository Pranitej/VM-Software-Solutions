import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light';
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      className="relative w-9 h-9 rounded-full border border-border bg-surface flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <Moon
        className={[
          'w-4 h-4 absolute transition-all duration-400',
          isLight ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50',
        ].join(' ')}
      />
      <Sun
        className={[
          'w-4 h-4 absolute transition-all duration-400',
          isLight ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100',
        ].join(' ')}
      />
    </button>
  );
}
