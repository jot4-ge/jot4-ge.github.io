import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import { RichText } from './RichText';

const CHIPS = ['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI'];
const SPOTIFY_URL = 'https://open.spotify.com/user/22lk264p4wo53zekbotmichha';

export function About() {
  const eyebrowRef = useReveal<HTMLParagraphElement>();
  const titleRef = useReveal<HTMLHeadingElement>();
  const bioRef = useReveal<HTMLDivElement>();
  const spotifyRef = useReveal<HTMLAnchorElement>();

  const { t } = useApp();

  return (
    <section id="about">
      <div className="wrap">
        <p className="eyebrow reveal" ref={eyebrowRef}>
          <b>#</b> {t('eb_about')}
        </p>
        <h2 className="title reveal" ref={titleRef}>{t('about_title')}</h2>

        <div className="about-grid reveal" ref={bioRef}>
          <p><RichText text={t('about_1')} /></p>
          <p><RichText text={t('about_2')} /></p>
          <p><RichText text={t('about_3')} /></p>
          <div className="chips">
            {CHIPS.map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
        </div>

        <p className="eyebrow" style={{ marginTop: 34 }}>{t('sp_t')}</p>
        <a
          className="spotify-card reveal"
          ref={spotifyRef}
          href={SPOTIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="spotify-ic">♫</span>
          <div>
            <div className="sp-t">Spotify</div>
            <div className="sp-m">{t('sp_m')}</div>
          </div>
          <div className="sp-eq" aria-hidden="true">
            <i /><i /><i /><i />
          </div>
        </a>
      </div>
    </section>
  );
}
