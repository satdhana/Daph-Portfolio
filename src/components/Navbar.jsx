import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { LINKS, NAV_LINKS } from "../data/content";

const scrollTo = (href) => {
  if (window.__lenis) window.__lenis.scrollTo(href, { offset: -72 });
  else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = ({ light, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("overview");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  const linkCls = (id) =>
    `text-sm transition-colors duration-200 hover:text-hi ${
      active === id ? "text-accent-cyan" : "text-lo"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-4">
        <button
          data-testid="nav-brand"
          onClick={() => scrollTo("#overview")}
          className="press text-left font-bold tracking-tight text-hi text-sm sm:text-base whitespace-nowrap"
        >
          Satria Dafa <span className="text-faint font-medium hidden sm:inline">• PM & Product Designer</span>
        </button>

        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => scrollTo(l.href)}
              className={`press whitespace-nowrap ${linkCls(l.id)}`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            data-testid="theme-toggle-button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="press w-9 h-9 rounded-full border border-line flex items-center justify-center text-lo hover:text-hi hover:border-[var(--cyan)] transition-colors"
          >
            {light ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <a
            data-testid="nav-cv-button"
            href={LINKS.cv}
            download
            className="press hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap border border-line text-hi hover:border-[var(--cyan)] transition-colors"
          >
            <Download size={14} /> Download CV
          </a>
          {/* <a
            data-testid="nav-notion-button"
            href={LINKS.notion}
            target="_blank"
            rel="noopener noreferrer"
            className="press hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap text-white"
            style={{ background: "linear-gradient(100deg, var(--indigo), var(--cyan))" }}
          >
            Notion Portfolio <ExternalLink size={14} />
          </a> */}
          <button
            data-testid="nav-mobile-menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="press xl:hidden w-9 h-9 rounded-full border border-line flex items-center justify-center text-hi"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden glass border-t border-line overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`nav-mobile-link-${l.id}`}
                  onClick={() => {
                    setOpen(false);
                    scrollTo(l.href);
                  }}
                  className={`text-left text-base ${linkCls(l.id)}`}
                >
                  {l.label}
                </button>
              ))}
              <div className="flex gap-3 pt-2">
                <a data-testid="nav-mobile-cv-button" href={LINKS.cv} download className="press inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap border border-line text-hi">
                  <Download size={14} /> CV
                </a>
                {/* <a data-testid="nav-mobile-notion-button" href={LINKS.notion} target="_blank" rel="noopener noreferrer" className="press inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap text-white" style={{ background: "linear-gradient(100deg, var(--indigo), var(--cyan))" }}>
                  Notion <ExternalLink size={14} />
                </a> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
