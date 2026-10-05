import { HYBRID_COLUMNS } from "../data/content";
import { ChapterHeading } from "./Reveal";

// Each discipline is one strand of the cord: green, black, white.
const STRANDS = ["bg-[#188B51]", "bg-[#1b1d1b] dark:bg-[#4a514a]", "bg-[#f6f7f1] border border-[#9aa096]"];

export const HybridSkills = () => (
  <section id="hybrid-skills" className="relative py-24 sm:py-32 bg-paper2">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <ChapterHeading
        title="One person who speaks strategy, design, and engineering."
        sub="Most teams lose weeks in translation between PM, design, and dev. I close that gap by writing PRDs an engineer respects and designing interfaces a business case can defend."
        testid="hybrid-skills-heading"
      />

      <div className="grid md:grid-cols-3 gap-x-12 gap-y-14 mt-16">
        {HYBRID_COLUMNS.map((col, i) => (
          <div key={col.title} data-testid={`hybrid-column-${i + 1}`}>
            <div className={`h-2 w-full rounded-full ${STRANDS[i]}`} aria-hidden />
            <h3 className="font-display text-xl font-bold tracking-[-0.015em] mt-6">{col.title}</h3>
            <p className="text-ink2 mt-2 mb-6">{col.desc}</p>
            <ul className="border-t border-hair">
              {col.skills.map((s) => (
                <li key={s} className="font-display text-[0.95rem] font-medium py-3 border-b border-hair">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
