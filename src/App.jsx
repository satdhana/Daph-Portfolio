import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { CaseStudies } from "./components/CaseStudies";
import { HybridSkills } from "./components/HybridSkills";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <div className="App noise bg-base text-hi">
      <Navbar light={light} onToggleTheme={() => setLight(!light)} />
      <main>
        <Hero />
        <Marquee />
        <CaseStudies />
        <HybridSkills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-center" theme={light ? "light" : "dark"} />
    </div>
  );
}

export default App;
