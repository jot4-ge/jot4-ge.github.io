import { AppProvider } from './context/AppContext';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';

export default function App() {
  return (
    <AppProvider>
      <Nav />
      <main>
        <Hero />
      </main>
    </AppProvider>
  );
}
