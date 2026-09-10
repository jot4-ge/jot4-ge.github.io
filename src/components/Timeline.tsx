import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import { useTimelineProgress } from '../hooks/useTimelineProgress';
import type { TranslationKey } from '../i18n/translations';

interface Milestone {
  periodKey: TranslationKey;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}

const MILESTONES: Milestone[] = [
  { periodKey: 'tl_1_p', titleKey: 'tl_1_t', descKey: 'tl_1_d' },
  { periodKey: 'tl_2_p', titleKey: 'tl_2_t', descKey: 'tl_2_d' },
  { periodKey: 'tl_3_p', titleKey: 'tl_3_t', descKey: 'tl_3_d' },
  { periodKey: 'tl_4_p', titleKey: 'tl_4_t', descKey: 'tl_4_d' },
  { periodKey: 'tl_5_p', titleKey: 'tl_5_t', descKey: 'tl_5_d' },
  { periodKey: 'tl_6_p', titleKey: 'tl_6_t', descKey: 'tl_6_d' },
  { periodKey: 'tl_7_p', titleKey: 'tl_7_t', descKey: 'tl_7_d' },
];

function TimelineItem({ milestone }: { milestone: Milestone }) {
  const { t } = useApp();
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="tl-item reveal" ref={ref}>
      <span className="tl-dot" aria-hidden="true" />
      <div className="tl-period">{t(milestone.periodKey)}</div>
      <div className="tl-item-title">{t(milestone.titleKey)}</div>
      <div className="tl-desc">{t(milestone.descKey)}</div>
    </div>
  );
}

export function Timeline() {
  const { t } = useApp();
  const headRef = useReveal<HTMLDivElement>();
  const lineRef = useTimelineProgress<HTMLDivElement>();

  return (
    <section id="timeline">
      <div className="wrap">
        <div className="reveal" ref={headRef}>
          <p className="eyebrow"><b>#</b> {t('eb_tl')}</p>
          <h2 className="title">{t('tl_title')}</h2>
        </div>

        <div className="timeline" ref={lineRef}>
          {MILESTONES.map((m) => (
            <TimelineItem key={m.titleKey} milestone={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
