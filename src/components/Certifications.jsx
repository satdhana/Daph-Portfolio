import { Award, Figma, Framer, KanbanSquare, PenTool, Github, Gitlab, Hammer, Code2, Smartphone } from "lucide-react";
import { CERTIFICATIONS, TOOLS } from "../data/content";
import { ChapterHeading, Reveal } from "./Reveal";

const TOOL_ICONS = { Figma, Framer, KanbanSquare, PenTool, Github, Gitlab, Hammer, Code2, Smartphone };

export const Certifications = () => (
  <section id="certifications" className="relative py-24 sm:py-32 bg-soft border-y border-line">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <ChapterHeading number="05" kicker="Ecosystem" title="Certified foundations, battle-tested tools." testid="certifications-heading" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.08}>
            <div data-testid={`certification-card-${i + 1}`} className="card-lift h-full rounded-2xl border border-line bg-cardx p-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--badge-bg)", color: "var(--badge-text)" }}>
                <Award size={18} />
              </div>
              <h3 className="text-base font-bold text-hi tracking-tight">{c.name}</h3>
              <p className="font-mono-x text-[11px] tracking-[0.15em] uppercase text-faint mt-2">{c.issuer}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <p className="overline-x mt-14 mb-6">Daily Tool Stack</p>
      </Reveal>
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
        {TOOLS.map((t, i) => {
          const Icon = TOOL_ICONS[t.icon];
          return (
            <Reveal key={t.name} delay={i * 0.04}>
              <div
                data-testid={`tool-${t.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="card-lift rounded-xl border border-line bg-cardx px-3 py-5 flex flex-col items-center gap-2.5 text-center"
              >
                <Icon size={20} className="text-lo" />
                <span className="text-[11px] font-medium text-lo leading-tight">{t.name}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);