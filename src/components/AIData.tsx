import { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import { useTypewriter, type TermLine } from '../hooks/useTypewriter';
import { useTilt } from '../hooks/useTilt';
import type { TranslationKey } from '../i18n/translations';

interface Frente {
  titleKey: TranslationKey;
  descKey: TranslationKey;
}

const FRENTES: Frente[] = [
  { titleKey: 'ai_1_t', descKey: 'ai_1_d' },
  { titleKey: 'ai_2_t', descKey: 'ai_2_d' },
  { titleKey: 'ai_3_t', descKey: 'ai_3_d' },
];

function Terminal() {
  const { t } = useApp();

  const lines: TermLine[] = useMemo(
    () => [
      { text: t('term_cmd'), type: 'cmd' },
      { text: t('term_1'), type: 'out' },
      { text: t('term_2'), type: 'out' },
      { text: t('term_3'), type: 'out' },
      { text: t('term_4'), type: 'out' },
      { text: t('term_ok'), type: 'ok' },
    ],
    [t],
  );

  const { ref, lineCount, partial, done } = useTypewriter(lines);

  const visible = lines.slice(0, lineCount).map((l) => l.text);
  const currentIdx = lineCount;
  const showCurrent = !done && currentIdx < lines.length;

  const tiltRef = useTilt<HTMLDivElement>(4);

  return (
    <div ref={ref}>
      <div className="term" ref={tiltRef} aria-hidden="true">
        <div className="term-bar">
          <span className="term-dot r" />
          <span className="term-dot y" />
          <span className="term-dot g" />
          <span className="term-title">pipeline.sh</span>
        </div>
        <div className="term-body">
          {visible.map((line, i) => (
            <div className={`term-line ${lines[i]?.type ?? 'out'}`} key={i}>
              {line}
            </div>
          ))}
          {showCurrent && (
            <div className={`term-line ${lines[currentIdx]?.type ?? 'out'}`}>
              {partial}
              <span className="term-cursor" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function AIData() {
  const { t } = useApp();
  const headRef = useReveal<HTMLDivElement>();
  const mainRef = useReveal<HTMLDivElement>();

  return (
    <section id="ai">
      <div className="wrap">
        <div className="reveal" ref={headRef}>
          <p className="eyebrow"><b>#</b> {t('eb_ai')}</p>
          <h2 className="title">{t('ai_title')}</h2>
          <p className="ai-intro">{t('ai_intro')}</p>
        </div>

        <div className="ai-main reveal" ref={mainRef}>
          <div className="ai-grid">
            {FRENTES.map((f, i) => (
              <div className="ai-card" key={f.titleKey}>
                <div className="ai-card-n">0{i + 1}</div>
                <div className="ai-card-t">{t(f.titleKey)}</div>
                <div className="ai-card-d">{t(f.descKey)}</div>
              </div>
            ))}
          </div>

          <Terminal />
        </div>
      </div>
    </section>
  );
}
