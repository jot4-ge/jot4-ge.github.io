import { useMouseParallax } from '../hooks/useMouseParallax';

export function BackgroundGrid() {
  const ref = useMouseParallax<HTMLDivElement>(5);
  return <div className="bg-grid" ref={ref} aria-hidden="true" />;
}
