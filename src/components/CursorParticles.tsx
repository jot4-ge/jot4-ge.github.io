import { useRef } from 'react';
import { useCursorParticles } from '../hooks/useCursorParticles';

export function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useCursorParticles(canvasRef);
  return <canvas className="cursor-canvas" ref={canvasRef} aria-hidden="true" />;
}
