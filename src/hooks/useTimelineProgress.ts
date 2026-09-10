import { useEffect, useRef } from 'react';

/**
 * Preenche a linha de progresso da timeline (--tl-progress: 0%..100%)
 * conforme a seção passa pela viewport. Um único listener de scroll (passivo).
 * Em prefers-reduced-motion, fixa em 100%.
 */
export function useTimelineProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.style.setProperty('--tl-progress', '100%');
      return;
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const mid = window.innerHeight * 0.5;
      // 0 quando o topo da timeline chega ao meio da tela; 1 quando o fim passa
      const total = rect.height;
      const passed = mid - rect.top;
      const ratio = Math.max(0, Math.min(1, passed / total));
      el.style.setProperty('--tl-progress', `${(ratio * 100).toFixed(1)}%`);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return ref;
}
