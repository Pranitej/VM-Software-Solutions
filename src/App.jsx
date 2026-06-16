import { useTheme } from './hooks/useTheme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-base text-text">
      {/*
        Fixed ambient blobs — the glass cards blur these into a liquid haze.
        Opacity is intentionally visible (~14-20%) so the backdrop-filter
        has real colour to process; without this glass looks flat/grey.
      */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div
          className="ambient-blob absolute -top-40 -left-20 w-[800px] h-[700px] rounded-full opacity-[0.18]"
          style={{ background: 'radial-gradient(circle at 40% 40%, var(--accent) 0%, transparent 60%)' }}
        />
        <div
          className="ambient-blob absolute top-1/4 right-0 w-[700px] h-[600px] rounded-full opacity-[0.14]"
          style={{ background: 'radial-gradient(circle at 60% 50%, var(--accent-l) 0%, transparent 60%)' }}
        />
        <div
          className="ambient-blob absolute top-2/3 left-1/4 w-[600px] h-[500px] rounded-full opacity-[0.12]"
          style={{ background: 'radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 60%)' }}
        />
        <div
          className="ambient-blob absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full opacity-[0.10]"
          style={{ background: 'radial-gradient(circle at 50% 60%, var(--accent-l) 0%, transparent 60%)' }}
        />
      </div>

      <Header theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
