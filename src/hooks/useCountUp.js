import { useEffect, useRef, useState } from 'react';

/**
 * Counts up to a numeric target once the element scrolls into view.
 * Parses a display string like "150+", "99.7%", "<10ms" and animates the
 * numeric portion while preserving the surrounding prefix/suffix.
 */
export function useCountUp(display, { duration = 1600 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(display);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = String(display).match(/([^0-9]*)([\d.]+)(.*)/);
    if (!match) return; // value already initialised to display

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = (numStr.split('.')[1] || '').length;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // leave the static display value in place

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
          const current = (target * eased).toFixed(decimals);
          setValue(`${prefix}${current}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
          else setValue(display);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [display, duration]);

  return { ref, value };
}
