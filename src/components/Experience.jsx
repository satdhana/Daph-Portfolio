import { Briefcase, MapPin } from "lucide-react";
import { EXPERIENCE } from "../data/content";
import { ChapterHeading, Reveal } from "./Reveal";

export const Experience = () => (
  <section id="experience" className="relative py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <ChapterHeading number="04" kicker="Experience" title="Four years bridging product, design & code." testid="experience-heading" />

      <div className="relative mt-14 ml-2 sm:ml-6">
        <div className="absolute left-0 top-1 bottom-1 w-px" style={{ background: "linear-gradient(to bottom, var(--indigo), var(--cyan), transparent)" }} />
        <div className="space-y-10">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <div data-testid={`experience-item-${i + 1}`} className="relative pl-10 sm:pl-14">
                <span
                  className="absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full border-2"
                  style={{ borderColor: "var(--cyan)", background: "var(--bg)" }}
                />
                <div className="card-lift rounded-2xl border border-line bg-cardx p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-hi tracking-tight">{job.role}</h3>
                      <p className="text-sm text-accent-cyan font-semibold mt-1 flex items-center gap-2">
                        <Briefcase size={13} /> {job.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono-x text-xs text-hi tracking-wider">{job.period}</p>
                      <p className="text-xs text-faint mt-1 flex items-center justify-end gap-1">
                        <MapPin size={11} /> {job.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="text-sm text-lo leading-relaxed flex gap-2.5">
                        <span className="mt-[7px] w-1 h-1 rounded-full shrink-0" style={{ background: "var(--cyan)" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);