import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';
import { RichText } from './RichText';

const CHIPS = ['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI'];
const SPOTIFY_URL = 'https://open.spotify.com/user/22lk264p4wo53zekbotmichha';

interface Track {
  track: string;
  artist: string;
  cover: string;
}

const TRACKS: Track[] = [
  { track: 'Massive', artist: 'Drake', cover: '/covers/massive.png' },
  { track: 'Free Your Mind', artist: 'Prospa & Cloonee', cover: '/covers/free_your_mind.png' },
  { track: 'Sticky', artist: 'Drake', cover: '/covers/sticky.png' },
  { track: 'Lovelee Dae', artist: 'Blaze', cover: '/covers/lovelee_dae.png' },
  { track: 'Do You Mind (Remix)', artist: 'Kyla & DJ Paleface', cover: '/covers/do_you_mind.png' },
];

export function About() {
  const eyebrowRef = useReveal<HTMLParagraphElement>();
  const titleRef = useReveal<HTMLHeadingElement>();
  const bioRef = useReveal<HTMLDivElement>();
  const spotifyRef = useReveal<HTMLDivElement>();
  const tiltRef = useTilt<HTMLDivElement>(5);

  const { t } = useApp();
  const [featured, ...rest] = TRACKS;

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
        <div className="reveal" ref={spotifyRef}>
          <div className="spotify" ref={tiltRef}>
            <div className="sp-feat">
              <img className="sp-cover" src={featured.cover} alt={`${featured.track} — ${featured.artist}`} loading="lazy" />
              <div className="sp-feat-info">
                <div className="sp-badge">{t('sp_now')}</div>
                <div className="sp-feat-track">{featured.track}</div>
                <div className="sp-feat-artist">{featured.artist}</div>
              </div>
              <div className="sp-eq" aria-hidden="true">
                <i /><i /><i /><i />
              </div>
            </div>

            <ul className="sp-list">
              {rest.map((tr, i) => (
                <li className="sp-row" key={tr.track}>
                  <span className="sp-num">{i + 2}</span>
                  <img className="sp-row-cover" src={tr.cover} alt={`${tr.track} — ${tr.artist}`} loading="lazy" />
                  <div className="sp-row-info">
                    <div className="sp-row-track">{tr.track}</div>
                    <div className="sp-row-artist">{tr.artist}</div>
                  </div>
                </li>
              ))}
            </ul>

            <a className="sp-foot" href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
              <span className="spotify-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#000">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.5 17.3c-.2.36-.66.48-1.02.26-2.82-1.72-6.36-2.1-10.54-1.16-.42.1-.82-.16-.92-.56-.1-.42.16-.82.58-.92 4.56-1.04 8.48-.6 11.64 1.34.36.2.48.66.26 1.04zm1.46-3.26c-.28.44-.86.6-1.3.32-3.22-1.98-8.14-2.56-11.94-1.4-.5.14-1.02-.12-1.18-.62-.14-.5.14-1.02.64-1.18 4.34-1.32 9.76-.68 13.46 1.6.44.26.58.86.32 1.28zm.12-3.4C15.24 8.32 8.82 8.1 5.1 9.24c-.6.18-1.24-.16-1.42-.76-.18-.6.16-1.24.76-1.42 4.28-1.3 11.36-1.04 15.84 1.62.54.32.72 1.02.4 1.56-.3.54-1.02.72-1.56.4z"/>
                </svg>
              </span>
              <span className="sp-foot-text">{t('sp_m')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
