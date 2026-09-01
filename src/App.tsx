import { AppProvider } from './context/AppContext';
import { useLenis } from './hooks/useLenis';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';

export default function App() {
  useLenis();

  return (
    <AppProvider>
      <Nav />
      <main>
        <Hero />
      </main>
    </AppProvider>
  );
}
