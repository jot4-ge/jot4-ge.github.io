import { useApp } from '../context/AppContext';

export function Nav() {
  const { t, lang, toggleTheme, toggleLang } = useApp();

  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">jot4<span>-ge</span></div>
        <div className="nav-links">
          <a href="#about">{t('nav_about')}</a>
          <a href="#projects">{t('nav_proj')}</a>
          <a href="#ai">{t('nav_ai')}</a>
          <a href="#stack">{t('nav_stack')}</a>
          <a href="#timeline">{t('nav_tl')}</a>
          <a href="#contact">{t('nav_contact')}</a>
        </div>
        <div className="nav-ctrls">
          <button className="btn-ghost" onClick={toggleLang}>
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button className="btn-ghost" onClick={toggleTheme}>◐</button>
        </div>
      </div>
    </nav>
  );
}
