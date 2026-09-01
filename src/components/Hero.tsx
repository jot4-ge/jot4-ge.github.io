import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { useApp } from '../context/AppContext';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { RichText } from './RichText';

export function Hero() {
  const { t } = useApp();
  const titleRef = useMouseParallax<HTMLHeadingElement>(18);
  const glowRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLElement>(null);

  // glow segue o mouse (suavemente), com o mesmo cuidado de reduced-motion/touch
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || isTouch) return;

    const el = glowRef.current;
    if (!el) return;

    let tx = 0, ty = 0, cx = 0, cy = 0, rafId: number;
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 60;
      ty = (e.clientY / window.innerHeight - 0.5) * 40;
    };
    const tick = () => {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      el.style.transform = `translateX(-50%) translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // entrada animada (stagger) ao montar
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const targets = rootRef.current?.querySelectorAll('.hero-anim');
    if (!targets || targets.length === 0) return;

    animate(targets, {
      opacity: [0, 1],
      translateY: [24, 0],
      delay: stagger(90, { start: 150 }),
      duration: 800,
      easing: 'easeOutExpo',
    });
  }, []);

  return (
    <section id="hero" ref={rootRef}>
      <div className="hero-glow" ref={glowRef} />
      <div className="wrap">
        <div className="status hero-anim">
          <span className="dot" />
          <span>{t('status')}</span>
        </div>

        <div className="hero-kicker hero-anim">
          <span>{t('k1')}</span> <span className="sep">·</span>{' '}
          <span>{t('k2')}</span> <span className="sep">·</span>{' '}
          <span>{t('k3')}</span>
        </div>

        <h1 className="hero-name hero-anim" ref={titleRef}>
          João Guilherme<br />
          <span className="accent">dev</span>
        </h1>

        <div className="hero-philosophy hero-anim">
          <span className="accent">&gt;</span> {t('philosophy')}
        </div>

        <p className="hero-sub hero-anim">
          <RichText text={t('hero_sub')} />
        </p>

        <div className="hero-cta hero-anim">
          <a href="#projects" className="btn btn-primary">{t('cta_proj')}</a>
          <a href="#contact" className="btn btn-line">
            <span className="prompt">&gt;_</span> {t('cta_contact')}
          </a>
        </div>

        <div className="metrics hero-anim">
          <div className="metric"><div className="k">{t('m_projects')}</div><div className="v">2</div></div>
          <div className="metric"><div className="k">{t('m_tests')}</div><div className="v">50+</div></div>
          <div className="metric"><div className="k">{t('m_langs')}</div><div className="v">5+</div></div>
          <div className="metric"><div className="k">{t('m_energy')}</div><div className="v">∞</div></div>
        </div>
      </div>
    </section>
  );
}
