import { useEffect, useRef, useState } from 'react';

const SECTIONS = ['hero', 'about', 'projects', 'ai', 'stack', 'timeline', 'contact'];

export function Frame() {
  const [section, setSection] = useState('hero');
  const coordsRef = useRef<HTMLDivElement>(null);

  // label inferior-esquerdo: seção atual conforme o scroll
  useEffect(() => {
    const ids = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    ids.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // label inferior-direito: coordenadas do mouse (escreve direto no DOM, sem re-render)
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || isTouch) return;

    const onMove = (e: MouseEvent) => {
      const el = coordsRef.current;
      if (!el) return;
      const x = String(Math.round(e.clientX)).padStart(4, '0');
      const y = String(Math.round(e.clientY)).padStart(4, '0');
      el.textContent = `x:${x} y:${y}`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="frame" aria-hidden="true">
      <span className="frame-corner tl" />
      <span className="frame-corner tr" />
      <span className="frame-corner bl" />
      <span className="frame-corner br" />
      <div className="frame-label tl">
        <span className="accent">&gt;_</span> jot4-ge
      </div>
      <div className="frame-label bl">// {section}</div>
      <div className="frame-label br" ref={coordsRef}>x:0000 y:0000</div>
    </div>
  );
}
