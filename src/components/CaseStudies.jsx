import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowUpRight, X } from "lucide-react";
import { FILTERS, PROJECTS } from "../data/content";
import { ChapterHeading, Reveal } from "./Reveal";

const filterTestId = (f) =>
  ({ All: "case-study-filter-all", "Product Management": "case-study-filter-pm", "UI/UX & Engineering": "case-study-filter-design", "Mobile (Android/iOS)": "case-study-filter-mobile" }[f]);

// Simplified front-of-card: image, badge, title, subtitle, and a "View details" affordance.
const ProjectCard = ({ p, onOpen }) => (
  <article
    data-testid={`case-study-card-${p.id}`}
    onClick={() => onOpen(p)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(p); } }}
    className="press card-lift group rounded-2xl border border-line bg-cardx overflow-hidden flex flex-col cursor-pointer"
  >
    <div className="relative h-52 overflow-hidden">
      <img
        src={p.image}
        alt={p.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,23,0.85)] to-transparent" />
      <span className="glow-badge absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
        <Zap size={12} /> {p.badge}
      </span>
    </div>
    <div className="p-6 flex items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="overline-x mb-2">{p.role}</p>
        <h3 className="text-lg sm:text-xl font-bold text-hi tracking-tight truncate">{p.title}</h3>
        <p className="text-xs text-faint mt-1 truncate">{p.subtitle}</p>
      </div>
      <span className="shrink-0 w-10 h-10 rounded-full border border-line flex items-center justify-center text-lo group-hover:text-hi group-hover:border-[var(--cyan)] transition-colors">
        <ArrowUpRight size={18} />
      </span>
    </div>
  </article>
);

// Detail overlay ("page") shown when a card is opened.
const ProjectDetail = ({ p, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
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
      data-testid={`case-study-detail-${p.id}`}
    >
      <div className="absolute inset-0 bg-[rgba(6,9,14,0.75)] backdrop-blur-sm" onClick={onClose} aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl bg-[var(--card)] border border-line sm:rounded-2xl overflow-hidden my-0 sm:my-8"
      >
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,23,0.95)] via-[rgba(11,15,23,0.35)] to-transparent" />
          <button
            onClick={onClose}
            data-testid="case-study-detail-close"
            aria-label="Close details"
            className="press absolute top-4 right-4 w-10 h-10 rounded-full bg-[rgba(6,9,14,0.6)] border border-line flex items-center justify-center text-hi backdrop-blur-md hover:border-[var(--cyan)] transition-colors"
          >
            <X size={18} />
          </button>
          <span className="glow-badge absolute bottom-4 left-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
            <Zap size={12} /> {p.badge}
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <p className="overline-x mb-2">{p.role}</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-hi tracking-tight">{p.title}</h3>
          <p className="text-sm text-faint mt-1.5">{p.subtitle}</p>

          {p.overview && (
            <p className="text-sm text-lo leading-relaxed mt-5">{p.overview}</p>
          )}

          <h4 className="text-xs font-semibold uppercase tracking-wider text-faint mt-7 mb-3">Highlights</h4>
          <ul className="space-y-2.5">
            {p.highlights.map((h) => (
              <li key={h} className="text-sm text-lo leading-relaxed flex gap-2.5">
                <span className="mt-[7px] w-1 h-1 rounded-full shrink-0" style={{ background: "var(--cyan)" }} />
                {h}
              </li>
            ))}
          </ul>

          {p.links?.length > 0 && (
            <>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-faint mt-7 mb-3">Work I've Done</h4>
              <div className="flex flex-wrap gap-2.5">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-sm font-medium text-lo hover:text-hi hover:border-[var(--cyan)] transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </>
          )}

          <div className="flex flex-wrap gap-2 mt-7 pt-5 border-t border-line">
            {p.tags.map((t) => (
              <span key={t} className="font-mono-x text-[10px] tracking-wider uppercase text-faint border border-line rounded-full px-2.5 py-1">
                {t}
              </span>
            ))}
          </div>
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
        <ChapterHeading number="02" kicker="Case Studies" title="Selected Work — measurable impact, not just pixels." testid="case-studies-heading" />

        <Reveal delay={0.1}>
          <div data-testid="case-study-filters" className="flex flex-wrap gap-2 mt-9 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                data-testid={filterTestId(f)}
                onClick={() => setFilter(f)}
                className={`press relative whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === f ? "text-white" : "text-lo border border-line hover:text-hi hover:border-[var(--cyan)]"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "linear-gradient(100deg, var(--indigo), var(--cyan))" }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="contents"
            >
              {visible.map((p) => (
                <ProjectCard key={p.id} p={p} onOpen={setActive} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectDetail p={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};
