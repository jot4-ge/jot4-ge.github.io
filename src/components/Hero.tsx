import { useApp } from '../context/AppContext';
import { RichText } from './RichText';

export function Hero() {
  const { t } = useApp();

  return (
    <section id="hero">
      <div className="wrap">
        <div className="status">
          <span className="dot" />
          <span>{t('status')}</span>
        </div>

        <div className="hero-kicker">
          <span>{t('k1')}</span> <span className="sep">·</span>{' '}
          <span>{t('k2')}</span> <span className="sep">·</span>{' '}
          <span>{t('k3')}</span>
        </div>

        <h1 className="hero-name">
          João Guilherme<br />
          <span className="accent">dev</span>
        </h1>

        <div className="hero-philosophy">
          <span className="accent">&gt;</span> {t('philosophy')}
        </div>

        <p className="hero-sub">
          <RichText text={t('hero_sub')} />
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">{t('cta_proj')}</a>
          <a href="#contact" className="btn btn-line">
            <span className="prompt">&gt;_</span> {t('cta_contact')}
          </a>
        </div>

        <div className="metrics">
          <div className="metric"><div className="k">{t('m_projects')}</div><div className="v">2</div></div>
          <div className="metric"><div className="k">{t('m_tests')}</div><div className="v">50+</div></div>
          <div className="metric"><div className="k">{t('m_langs')}</div><div className="v">5+</div></div>
          <div className="metric"><div className="k">{t('m_energy')}</div><div className="v">∞</div></div>
        </div>
      </div>
    </section>
  );
}
