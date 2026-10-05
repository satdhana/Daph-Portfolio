import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CaseStudies } from "./components/CaseStudies";
import { HybridSkills } from "./components/HybridSkills";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
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
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="App bg-paper text-ink">
      <Navbar dark={dark} onToggleTheme={() => setDark(!dark)} />
      <main>
        <Hero />
        <CaseStudies />
        <HybridSkills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-center" theme={dark ? "dark" : "light"} />
    </div>
  );
}

export default App;
