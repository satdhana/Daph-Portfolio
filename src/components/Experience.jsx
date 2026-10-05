import { EXPERIENCE } from "../data/content";
import { ChapterHeading } from "./Reveal";

export const Experience = () => (
  <section id="experience" className="relative py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <ChapterHeading title="Four years bridging product, design, and code." testid="experience-heading" />

      <ol className="mt-14 border-t border-hair">
        {EXPERIENCE.map((job, i) => (
          <li
            key={job.company}
            data-testid={`experience-item-${i + 1}`}
            className="grid md:grid-cols-[14rem_1fr] gap-x-10 gap-y-3 py-9 border-b border-hair"
          >
            <div>
              <p className="font-display text-[0.95rem] font-semibold">{job.period}</p>
              <p className="text-ink3 text-[0.95rem] mt-0.5">{job.location}</p>
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] leading-tight">{job.role}</h3>
              <p className="font-display font-semibold text-green-x mt-1">{job.company}</p>
              <ul className="mt-4 space-y-2.5 max-w-[62ch]">
                {job.bullets.map((b) => (
                  <li key={b} className="text-ink2 leading-relaxed pl-5 relative">
                    <span className="absolute left-0 top-[0.7em] w-2 h-[2px] bg-[var(--green)]" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
