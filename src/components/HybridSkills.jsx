import { Target, Palette, Code2, Check } from "lucide-react";
import { HYBRID_COLUMNS } from "../data/content";
import { ChapterHeading, Reveal } from "./Reveal";

const ICONS = { Target, Palette, Code2 };

export const HybridSkills = () => (
  <section id="hybrid-skills" className="relative py-24 sm:py-32 bg-soft border-y border-line">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <ChapterHeading number="03" kicker="Hybrid Advantage" title="One person who speaks strategy, design, and engineering." testid="hybrid-skills-heading" />
      <Reveal delay={0.1}>
        <p className="text-lo text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
          Most teams lose weeks in translation between PM, design, and dev. I close that gap — writing PRDs an
          engineer respects, and designing interfaces a business case can defend.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {HYBRID_COLUMNS.map((col, i) => {
          const Icon = ICONS[col.icon];
          return (
            <Reveal key={col.title} delay={i * 0.12}>
              <div
                data-testid={`hybrid-column-${i + 1}`}
                className="card-lift h-full rounded-2xl border border-line bg-cardx p-7"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "var(--badge-bg)", color: "var(--badge-text)" }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-hi tracking-tight">{col.title}</h3>
                <p className="text-sm text-faint mt-2 mb-6">{col.desc}</p>
                <ul className="space-y-3">
                  {col.skills.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-lo">
                      <Check size={15} className="mt-0.5 shrink-0 text-accent-cyan" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
