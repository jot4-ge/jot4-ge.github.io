import { useEffect, useRef } from 'react';

/**
 * Inclina o elemento em 3D conforme o cursor se move sobre ele.
 * `max` é o ângulo máximo em graus. Volta ao neutro ao sair.
 * Off em touch e prefers-reduced-motion.
 */
export function useTilt<T extends HTMLElement>(max = 6) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || isTouch) return;

    const el = ref.current;
    if (!el) return;

    let targetRx = 0, targetRy = 0;
    let curRx = 0, curRy = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5..0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      targetRy = px * max * 2;
      targetRx = -py * max * 2;
    };
    const onLeave = () => { targetRx = 0; targetRy = 0; };

    const tick = () => {
      curRx += (targetRx - curRx) * 0.1;
      curRy += (targetRy - curRy) * 0.1;
      el.style.transform =
        `perspective(800px) rotateX(${curRx.toFixed(2)}deg) rotateY(${curRy.toFixed(2)}deg)`;
      rafId = requestAnimationFrame(tick);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
      el.style.transform = '';
    };
  }, [max]);

  return ref;
}
