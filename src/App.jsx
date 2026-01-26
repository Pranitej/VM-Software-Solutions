import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AboutComponent from "./components/AboutComponent";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <AboutComponent />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
