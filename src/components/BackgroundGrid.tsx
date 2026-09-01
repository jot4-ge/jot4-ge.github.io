import { useMouseParallax } from '../hooks/useMouseParallax';

export function BackgroundGrid() {
  const ref = useMouseParallax<HTMLDivElement>(12);
  return <div className="bg-grid" ref={ref} aria-hidden="true" />;
}
