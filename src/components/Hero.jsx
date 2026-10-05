import { LINKS, PROFILE, STATS } from "../data/content";

const scrollTo = (href) => {
  if (window.__lenis) window.__lenis.scrollTo(href, { offset: -68 });
  else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

const Line = ({ children, delay }) => (
  <span className="rise-line">
    <span style={{ animationDelay: `${delay}s` }}>{children}</span>
  </span>
);

export const Hero = () => (
  <>
    <section id="overview" className="on-hero relative bg-[var(--hero)] text-[var(--on-hero)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-[calc(var(--nav-h)+2.25rem)] lg:pt-[calc(var(--nav-h)+3.5rem)]">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-x-10 items-end">
          <div className="self-center pb-10 lg:pb-24">
            <p data-testid="hero-status-badge" className="font-display text-sm sm:text-base font-medium flex items-start gap-2.5 mb-7">
              <span className="w-2.5 h-2.5 mt-[0.45em] shrink-0 bg-[var(--on-hero)]" aria-hidden />
              Open to product management and product design roles
            </p>

            <h1 className="font-display font-extrabold text-[2.25rem] sm:text-[3.4rem] lg:text-[clamp(2.8rem,4.4vw,4.2rem)] leading-[1] tracking-[-0.035em]">
              <Line delay={0.1}>I write the PRD,</Line>
              <Line delay={0.22}>design the screens,</Line>
              <Line delay={0.34}>and check the build.</Line>
            </h1>

            <p className="settle mt-8 text-xl sm:text-[1.35rem] leading-snug max-w-[34rem] text-pretty">
              I'm {PROFILE.name}, a product manager and hybrid designer in Jakarta. I lead cross-functional teams, run user
              tests, and build front ends, so what gets designed is what ships.
            </p>

            <div className="settle mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <button
                data-testid="hero-cta-cases"
                onClick={() => scrollTo("#case-studies")}
                className="font-display font-semibold text-[0.95rem] px-6 py-3.5 rounded-md bg-[var(--on-hero)] text-[#0f3a22] hover:bg-white transition-colors"
              >
                See selected work
              </button>
              <a
                data-testid="hero-cta-cv"
                href={LINKS.cv}
                download
                className="font-display font-semibold text-[0.95rem] py-1 border-b-2 border-current hover:opacity-80"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="settle relative flex justify-center lg:justify-end self-end">
            <img
              src={PROFILE.portrait}
              alt={PROFILE.portraitAlt}
              width="1200"
              height="1689"
              fetchpriority="high"
              className="block w-[min(94vw,480px)] lg:w-full lg:max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <section aria-label="Results at a glance" className="on-strip relative bg-[var(--strip-bg)] text-[var(--strip-fg)]">
      <div className="braid absolute inset-x-0 -top-3 z-10" aria-hidden />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-10 grid sm:grid-cols-3">
        {STATS.map((s, i) => (
          <div
            key={s.testid}
            data-testid={s.testid}
            className={`py-5 sm:py-0 sm:px-8 ${i === 0 ? "sm:pl-0" : ""} ${i > 0 ? "border-t sm:border-t-0 sm:border-l border-white/15" : ""}`}
          >
            <p className="font-display text-5xl sm:text-6xl font-extrabold tracking-[-0.03em] leading-none">
              {s.prefix}
              {s.value}
              {s.suffix}
            </p>
            <p className="font-display text-base font-semibold mt-3">{s.label}</p>
            <p className="text-[0.95rem] mt-0.5 opacity-70">{s.delta}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);