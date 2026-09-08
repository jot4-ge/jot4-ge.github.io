import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import { useTypewriter, type TermLine } from '../hooks/useTypewriter';
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

const TERM_LINES: TermLine[] = [
  { text: 'joão --run pipeline', type: 'cmd' },
  { text: 'conectando à API da Câmara e do Senado...', type: 'out' },
  { text: 'extraindo discursos... 53.000 ✓', type: 'out' },
  { text: 'cruzando com votações... 51.000 ✓', type: 'out' },
  { text: '887 parlamentares processados', type: 'out' },
  { text: 'dados prontos — do bruto ao útil', type: 'ok' },
];

function Terminal() {
  const { ref, lineCount, partial, done } = useTypewriter(TERM_LINES);

  // linhas já completas + a linha atual sendo digitada (se houver)
  const visible = TERM_LINES.slice(0, lineCount).map((l) => l.text);
  const currentIdx = lineCount;
  const showCurrent = !done && currentIdx < TERM_LINES.length;

  return (
    <div className="term" ref={ref} aria-hidden="true">
      <div className="term-bar">
        <span className="term-dot r" />
        <span className="term-dot y" />
        <span className="term-dot g" />
        <span className="term-title">pipeline.sh</span>
      </div>
      <div className="term-body">
        {visible.map((line, i) => (
          <div className={`term-line ${TERM_LINES[i]?.type ?? 'out'}`} key={i}>
            {line}
          </div>
        ))}
        {showCurrent && (
          <div className={`term-line ${TERM_LINES[currentIdx]?.type ?? 'out'}`}>
            {partial}
            <span className="term-cursor" />
          </div>
        )}
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
