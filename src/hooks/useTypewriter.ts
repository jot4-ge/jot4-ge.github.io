import { useEffect, useRef, useState } from 'react';

export interface TermLine {
  text: string;
  type?: 'cmd' | 'out' | 'ok';
}

/**
 * Revela linhas de terminal com efeito de digitação quando entra na viewport.
 * Em prefers-reduced-motion, mostra todas as linhas de uma vez.
 * Mantém o índice da linha atual e o texto parcial, evitando desalinhamento.
 */
export function useTypewriter(lines: TermLine[], speed = 28) {
  const ref = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(0); // linhas já completas
  const [partial, setPartial] = useState('');    // texto parcial da linha atual
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setLineCount(lines.length);
      setPartial('');
      setDone(true);
      return;
    }

    let started = false;
    const timeouts: number[] = [];

    const run = () => {
      let lineIdx = 0;
      const typeLine = () => {
        if (lineIdx >= lines.length) {
          setDone(true);
          return;
        }
        const full = lines[lineIdx].text;
        let charIdx = 0;
        const typeChar = () => {
          charIdx++;
          setPartial(full.slice(0, charIdx));
          if (charIdx < full.length) {
            timeouts.push(window.setTimeout(typeChar, speed));
          } else {
            // linha concluída: consolida e passa para a próxima
            lineIdx++;
            setLineCount(lineIdx);
            setPartial('');
            timeouts.push(window.setTimeout(typeLine, 320));
          }
        };
        typeChar();
      };
      typeLine();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      timeouts.forEach((tid) => clearTimeout(tid));
    };
  }, [lines, speed]);

  return { ref, lineCount, partial, done };
}
