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
      {/* Fixed decorative blobs — glass cards blur through these */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-32 left-1/3 w-[700px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 65%)' }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[600px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, var(--accent-l) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 65%)' }}
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
