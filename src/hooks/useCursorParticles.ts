import { useEffect, type RefObject } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;   // 1 -> 0
  size: number;
}

/**
 * Emite partículas na posição do mouse.
 * - 1 canvas, 1 loop de rAF.
 * - Densidade média sobre o Hero, discreta nas outras seções.
 * - Cor vinda de --accent (respeita tema e seletor de accent).
 * - Off em touch e prefers-reduced-motion.
 */
export function useCursorParticles(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const particles: Particle[] = [];
    const MAX = 260;

    // lê a cor do accent atual
    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#c81e1e';
    let color = accent();

    // densidade conforme a seção sob o cursor
    const emitCount = (clientY: number) => {
      const hero = document.getElementById('hero');
      if (hero) {
        const r = hero.getBoundingClientRect();
        if (clientY >= r.top && clientY <= r.bottom) return 3; // média no hero
      }
      return 1; // discreta no resto
    };

    let lastX = 0;
    let lastY = 0;
    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      const n = emitCount(e.clientY);
      for (let i = 0; i < n && particles.length < MAX; i++) {
        particles.push({
          x: lastX,
          y: lastY,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -0.4 - Math.random() * 0.6,
          life: 1,
          size: 1 + Math.random() * 1.6,
        });
      }
    };

    let rafId: number;
    let frame = 0;
    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      if ((frame++ & 63) === 0) color = accent(); // reavalia accent ocasionalmente
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = Math.max(0, p.life) * 0.7;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef]);
}
