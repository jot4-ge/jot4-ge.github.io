import { useState } from 'react';
import { useApp } from '../context/AppContext';

export function Nav() {
  const { t, lang, toggleTheme, toggleLang } = useApp();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">jot4<span>-ge</span></div>

        <div className={`nav-links${open ? ' open' : ''}`}>
          <a href="#about" onClick={close}>{t('nav_about')}</a>
          <a href="#projects" onClick={close}>{t('nav_proj')}</a>
          <a href="#ai" onClick={close}>{t('nav_ai')}</a>
          <a href="#stack" onClick={close}>{t('nav_stack')}</a>
          <a href="#timeline" onClick={close}>{t('nav_tl')}</a>
          <a href="#contact" onClick={close}>{t('nav_contact')}</a>
        </div>

        <div className="nav-ctrls">
          <button className="btn-ghost" onClick={toggleLang}>
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button className="btn-ghost" onClick={toggleTheme}>◐</button>
          <button
            className={`nav-burger${open ? ' open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
