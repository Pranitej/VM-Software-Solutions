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
    <div className="min-h-screen bg-base text-text relative">
      {/* Film-grain texture across the whole page — adds tactile, premium depth */}
      <div className="grain" aria-hidden="true" />

      <Header theme={theme} onToggleTheme={toggle} />
      <main className="relative z-[2]">
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
