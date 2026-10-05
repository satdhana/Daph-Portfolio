import { CERTIFICATIONS, TOOLS } from "../data/content";
import { ChapterHeading } from "./Reveal";

export const Certifications = () => (
  <section id="certifications" className="relative py-24 sm:py-32 bg-paper2">
    <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-x-16 gap-y-16">
      <div>
        <ChapterHeading title="Certified foundations" testid="certifications-heading" />
        <ul className="mt-10 border-t border-hair">
          {CERTIFICATIONS.map((c, i) => (
            <li
              key={c.name}
              data-testid={`certification-card-${i + 1}`}
              className="flex flex-wrap items-baseline justify-between gap-x-6 py-4 border-b border-hair"
            >
              <span className="font-display text-lg font-semibold">{c.name}</span>
              <span className="text-ink3">{c.issuer}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.025em] leading-[1.16]">Daily tools</h2>
        <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
          {TOOLS.map((t) => (
            <li
              key={t.name}
              data-testid={`tool-${t.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-display text-[0.95rem] font-semibold px-4 py-2 border border-[var(--ink)] rounded-md"
            >
              {t.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
