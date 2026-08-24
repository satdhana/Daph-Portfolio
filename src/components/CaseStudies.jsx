import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import { FILTERS, PROJECTS } from "../data/content";
import { ChapterHeading, Reveal } from "./Reveal";

const filterTestId = (f) =>
  ({ All: "case-study-filter-all", "Product Management": "case-study-filter-pm", "UI/UX & Engineering": "case-study-filter-design", "Mobile (Android/iOS)": "case-study-filter-mobile" }[f]);

const ProjectCard = ({ p, index }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.96 }}
    transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    data-testid={`case-study-card-${p.id}`}
    className="card-lift group rounded-2xl border border-line bg-cardx overflow-hidden flex flex-col"
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
    <div className="p-6 flex flex-col flex-1">
      <p className="overline-x mb-2">{p.role}</p>
      <h3 className="text-lg sm:text-xl font-bold text-hi tracking-tight">{p.title}</h3>
      <p className="text-xs text-faint mt-1 mb-4">{p.subtitle}</p>
      <ul className="space-y-2 mb-5 flex-1">
        {p.highlights.map((h) => (
          <li key={h} className="text-sm text-lo leading-relaxed flex gap-2.5">
            <span className="mt-[7px] w-1 h-1 rounded-full shrink-0" style={{ background: "var(--cyan)" }} />
            {h}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-line">
        {p.tags.map((t) => (
          <span key={t} className="font-mono-x text-[10px] tracking-wider uppercase text-faint border border-line rounded-full px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

export const CaseStudies = () => {
  const [filter, setFilter] = useState("All");
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
                className={`press relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
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

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
