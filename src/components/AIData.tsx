import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
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

export function AIData() {
  const { t } = useApp();
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section id="ai">
      <div className="wrap">
        <div className="reveal" ref={headRef}>
          <p className="eyebrow"><b>#</b> {t('eb_ai')}</p>
          <h2 className="title">{t('ai_title')}</h2>
          <p className="ai-intro">{t('ai_intro')}</p>
        </div>

        <div className="ai-grid reveal" ref={gridRef}>
          {FRENTES.map((f, i) => (
            <div className="ai-card" key={f.titleKey}>
              <div className="ai-card-n">0{i + 1}</div>
              <div className="ai-card-t">{t(f.titleKey)}</div>
              <div className="ai-card-d">{t(f.descKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
