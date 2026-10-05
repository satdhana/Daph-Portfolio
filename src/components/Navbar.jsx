import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { LINKS, NAV_LINKS, PROFILE } from "../data/content";

const scrollTo = (href) => {
  if (window.__lenis) window.__lenis.scrollTo(href, { offset: -68 });
  else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = ({ dark, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("overview");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
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

  // Over the green hero the bar is transparent with light text; after scrolling it becomes a paper bar.
  const overHero = !scrolled && !open;
  const tone = overHero ? "text-[var(--on-hero)] on-hero" : "text-ink";
  const linkCls = (id) =>
    `font-display text-[0.95rem] font-medium py-1 border-b-2 transition-colors ${
      active === id ? "border-current" : "border-transparent hover:border-current/40"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${tone} ${
        overHero ? "bg-transparent" : "bg-paper border-b border-hair"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between gap-4">
        <button
          data-testid="nav-brand"
          onClick={() => scrollTo("#overview")}
          className="font-display text-lg font-bold tracking-tight whitespace-nowrap"
        >
          {PROFILE.short}
        </button>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <button key={l.id} data-testid={`nav-link-${l.id}`} onClick={() => scrollTo(l.href)} className={linkCls(l.id)}>
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            data-testid="theme-toggle-button"
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-black/10"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            data-testid="nav-cv-button"
            href={LINKS.cv}
            download
            className="hidden md:inline-flex font-display text-sm font-semibold px-4 py-2 rounded-md border border-current whitespace-nowrap hover:bg-black/10"
          >
            Download CV
          </a>
          <button
            data-testid="nav-mobile-menu-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-black/10"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-paper border-t border-hair overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`nav-mobile-link-${l.id}`}
                  onClick={() => {
                    setOpen(false);
                    scrollTo(l.href);
                  }}
                  className={`text-left font-display text-xl font-semibold py-2.5 ${active === l.id ? "text-green-x" : "text-ink"}`}
                >
                  {l.label}
                </button>
              ))}
              <a
                data-testid="nav-mobile-cv-button"
                href={LINKS.cv}
                download
                className="mt-3 self-start font-display text-sm font-semibold px-4 py-2 rounded-md border border-[var(--ink)] text-ink"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
