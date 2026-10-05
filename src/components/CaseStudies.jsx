import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FILTERS, PROJECTS } from "../data/content";
import { ChapterHeading } from "./Reveal";

const filterTestId = (f) =>
  ({
    All: "case-study-filter-all",
    "Product Management": "case-study-filter-pm",
    "UI/UX & Engineering": "case-study-filter-design",
    "Mobile (Android/iOS)": "case-study-filter-mobile",
  }[f]);

// One row per project: name, role, and the outcome in a single line.
const ProjectRow = ({ p, onOpen }) => (
  <li className="border-b border-hair">
    <button
      data-testid={`case-study-card-${p.id}`}
      onClick={() => onOpen(p)}
      className="row-link w-full text-left grid md:grid-cols-[1.5fr_1fr_1fr_auto] gap-x-8 gap-y-1.5 items-center px-3 sm:px-5 py-6 sm:py-7"
    >
      <span className="min-w-0">
        <span className="block font-display text-2xl sm:text-[1.7rem] font-bold tracking-[-0.02em] leading-tight">{p.title}</span>
        <span className="row-muted block text-[0.95rem] text-ink3 mt-1">{p.subtitle}</span>
      </span>
      <span className="row-muted font-display text-[0.95rem] font-medium text-ink2">{p.role}</span>
      <span className="font-display text-[0.95rem] font-semibold">{p.badge}</span>
      <ArrowUpRight size={22} className="hidden md:block" aria-hidden />
    </button>
  </li>
);

const ProjectDetail = ({ p, onClose }) => {
  const panelRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-label={p.title}
      data-testid={`case-study-detail-${p.id}`}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        ref={panelRef}
        tabIndex={-1}
        className="relative w-full max-w-3xl bg-paper sm:rounded-lg overflow-hidden my-0 sm:my-8 outline-none"
      >
        {p.cover ? (
          <div className="relative h-56 sm:h-72 overflow-hidden">
            <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
          </div>
        ) : null}

        <div className="on-hero bg-[var(--hero)] text-[var(--on-hero)] px-6 sm:px-9 pt-8 pb-7 relative">
          <button
            onClick={onClose}
            data-testid="case-study-detail-close"
            aria-label="Close details"
            className="absolute top-4 right-4 w-10 h-10 rounded-md flex items-center justify-center hover:bg-black/15"
          >
            <X size={20} />
          </button>
          <p className="font-display text-sm font-medium opacity-90">{p.role}</p>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-[1.05] mt-2 pr-10">{p.title}</h3>
          <p className="font-display text-lg sm:text-xl font-semibold mt-4">{p.badge}</p>
        </div>

        <div className="px-6 sm:px-9 py-8">
          <p className="font-display text-[0.95rem] font-medium text-ink3">{p.subtitle}</p>
          {p.overview && <p className="mt-4 text-ink2 leading-[1.7] max-w-[62ch]">{p.overview}</p>}

          <h4 className="font-display text-lg font-bold mt-8 mb-3">Highlights</h4>
          <ul className="space-y-3 max-w-[62ch]">
            {p.highlights.map((h) => (
              <li key={h} className="text-ink2 leading-relaxed pl-5 relative">
                <span className="absolute left-0 top-[0.7em] w-2 h-[2px] bg-[var(--green)]" aria-hidden />
                {h}
              </li>
            ))}
          </ul>

          {p.links?.length > 0 && (
            <>
              <h4 className="font-display text-lg font-bold mt-8 mb-3">Files and prototypes</h4>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold text-green-x inline-flex items-center gap-1 border-b-2 border-current py-0.5 hover:opacity-80"
                    >
                      {l.label}
                      <ArrowUpRight size={16} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}

          <p className="mt-8 pt-5 border-t border-hair text-[0.95rem] text-ink3">
            <span className="font-display font-semibold text-ink2">Skills used: </span>
            {p.tags.join(", ")}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const CaseStudies = () => {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const visible = PROJECTS.filter((p) => filter === "All" || p.categories.includes(filter));

  return (
    <section id="case-studies" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ChapterHeading
          title="Selected work"
          sub="Nine projects across product management, UI/UX, and mobile. Open any row for the story, the results, and the Figma files."
          testid="case-studies-heading"
        />

        <div data-testid="case-study-filters" className="flex flex-wrap gap-x-7 gap-y-2 mt-10 mb-6">
          {FILTERS.map((f) => (
            <button
              key={f}
              data-testid={filterTestId(f)}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`font-display text-[0.95rem] font-semibold py-1 border-b-2 transition-colors ${
                filter === f ? "border-[var(--green)] text-ink" : "border-transparent text-ink3 hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="border-t border-hair"
          >
            {visible.map((p) => (
              <ProjectRow key={p.id} p={p} onOpen={setActive} />
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>

      <AnimatePresence>{active && <ProjectDetail p={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
};
