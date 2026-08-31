import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Lang, type TranslationKey } from '../i18n/translations';

type Theme = 'dark' | 'light';

interface AppContextValue {
  theme: Theme;
  lang: Lang;
  toggleTheme: () => void;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Lang>('pt');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme((p) => (p === 'dark' ? 'light' : 'dark'));
  const toggleLang = () => setLang((p) => (p === 'pt' ? 'en' : 'pt'));
  const t = (key: TranslationKey) => translations[lang][key];

  return (
    <AppContext.Provider value={{ theme, lang, toggleTheme, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp precisa estar dentro de <AppProvider>');
  return ctx;
}
