import { NAV_LINKS, LINKS } from "../data/content";

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-line py-10">
    <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
      <p className="text-sm font-bold text-hi tracking-tight">
        Satria Dafa <span className="text-faint font-medium">• PM & Product Designer</span>
      </p>
      {/* <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {NAV_LINKS.map((l) => (
          <a key={l.id} href={l.href} className="text-xs text-faint hover:text-hi transition-colors">
            {l.label}
          </a>
        ))}
      </nav> */}
      <p className="font-mono-x text-[10px] tracking-[0.2em] uppercase text-faint">
        Indonesia © 2026
         {/* <a href={LINKS.notionShort} target="_blank" rel="noopener noreferrer" className="hover:text-hi transition-colors">PortofolioDafa2025</a> */}
      </p>
    </div>
  </footer>
);