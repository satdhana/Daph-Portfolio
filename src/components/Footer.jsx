import { PROFILE } from "../data/content";

export const Footer = () => (
  <footer data-testid="site-footer" className="relative bg-paper pt-14 pb-10">
    <div className="braid absolute inset-x-0 -top-3 z-10" aria-hidden />
    <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <p className="font-display text-base font-bold tracking-tight">{PROFILE.name}</p>
      <p className="text-[0.95rem] text-ink3">Made in Jakarta, Indonesia. © 2026</p>
    </div>
  </footer>
);
