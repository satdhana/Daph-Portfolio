// Sections no longer fade in one by one; the hero carries the page's single entrance.
export const Reveal = ({ children, className = "" }) => <div className={className}>{children}</div>;

export const ChapterHeading = ({ title, sub, testid }) => (
  <div>
    <h2
      data-testid={testid}
      className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.025em] leading-[1.16] text-ink max-w-3xl"
    >
      {title}
    </h2>
    {sub && <p className="mt-5 text-lg text-ink2 max-w-2xl leading-relaxed">{sub}</p>}
  </div>
);
