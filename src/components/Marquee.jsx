import { MARQUEE_ITEMS } from "../data/content";

export const Marquee = () => (
  <div data-testid="editorial-marquee" className="relative border-y border-line bg-soft overflow-hidden py-5">
    <div className="marquee-track flex whitespace-nowrap w-max">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
          {MARQUEE_ITEMS.map((item) => (
            <span key={`${copy}-${item}`} className="flex items-center">
              <span className="font-mono-x text-xs sm:text-sm tracking-[0.3em] text-faint px-8">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--cyan)" }} />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
