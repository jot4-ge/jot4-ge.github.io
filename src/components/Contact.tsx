import { SiGithub, SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';

const EMAIL = 'joaoguiam@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/joaoguiam/';
const GITHUB = 'https://github.com/jot4-ge';

export function Contact() {
  const { t } = useApp();
  const headRef = useReveal<HTMLDivElement>();
  const linksRef = useReveal<HTMLDivElement>();

  return (
    <section id="contact">
      <div className="wrap">
        <div className="reveal" ref={headRef}>
          <p className="eyebrow"><b>#</b> {t('eb_contact')}</p>
          <h2 className="title">{t('contact_title')}</h2>
          <p className="contact-intro">{t('contact_intro')}</p>
        </div>

        <div className="contact-links reveal" ref={linksRef}>
          <a className="contact-link" href={`mailto:${EMAIL}`}>
            <span className="contact-ic"><SiGmail /></span>
            <span className="contact-link-body">
              <span className="contact-link-label">EMAIL</span>
              <div className="contact-link-value">{EMAIL}</div>
            </span>
          </a>

          <a className="contact-link" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            <span className="contact-ic"><FaLinkedin /></span>
            <span className="contact-link-body">
              <span className="contact-link-label">LINKEDIN</span>
              <div className="contact-link-value">{t('contact_linkedin')}</div>
            </span>
          </a>

          <a className="contact-link" href={GITHUB} target="_blank" rel="noopener noreferrer">
            <span className="contact-ic"><SiGithub /></span>
            <span className="contact-link-body">
              <span className="contact-link-label">GITHUB</span>
              <div className="contact-link-value">{t('contact_github')}</div>
            </span>
          </a>
        </div>

        <p className="contact-loc">
          <span className="accent">◆</span> {t('contact_loc')}
        </p>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-note">{t('footer_note')}</span>
          <span className="footer-brand">jot4<span>-ge</span> © 2026</span>
        </div>
      </footer>
    </section>
  );
}
