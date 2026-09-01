import { AppProvider } from './context/AppContext';
import { useLenis } from './hooks/useLenis';
import { BackgroundGrid } from './components/BackgroundGrid';
import { CursorParticles } from './components/CursorParticles';
import { Frame } from './components/Frame';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';

export default function App() {
  useLenis();

  return (
    <AppProvider>
      <BackgroundGrid />
      <CursorParticles />
      <Frame />
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
    </AppProvider>
  );
}
