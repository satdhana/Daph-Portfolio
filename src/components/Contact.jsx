import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { LINKS, PROFILE } from "../data/content";

const linkCls = "font-display font-semibold inline-flex items-center gap-1 border-b-2 border-current py-0.5 hover:opacity-80";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
    } catch {
      const el = document.createElement("textarea");
      el.value = PROFILE.email;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      try { document.execCommand("copy"); } catch { /* noop */ }
      document.body.removeChild(el);
    }
    setCopied(true);
    toast.success("Email copied to clipboard.");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="on-hero relative bg-[var(--hero)] text-[var(--on-hero)] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2
          data-testid="contact-heading"
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] leading-[1.08] max-w-3xl"
        >
          Let's talk about your product.
        </h2>
        <p className="mt-5 text-xl max-w-xl leading-snug">WhatsApp gets the fastest reply. Email works too.</p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            data-testid="whatsapp-direct-link"
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-semibold text-[0.95rem] px-7 py-3.5 rounded-md bg-[var(--on-hero)] text-[#0f3a22] hover:bg-white transition-colors inline-flex items-center gap-1.5"
          >
            Message on WhatsApp
            <ArrowUpRight size={18} aria-hidden />
          </a>
          <button
            type="button"
            data-testid="contact-email-copy"
            onClick={copyEmail}
            aria-label="Copy email address"
            className="font-display font-semibold text-[0.95rem] px-7 py-3.5 rounded-md border-2 border-current hover:bg-black/10 transition-colors"
          >
            {copied ? "Email copied" : "Copy email address"}
          </button>
        </div>

        <dl className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8 pt-10 border-t border-white/30">
          <div>
            <dt className="font-display text-sm font-medium opacity-80">Based in</dt>
            <dd className="font-display text-lg font-semibold mt-1">{PROFILE.location}, Indonesia</dd>
            <dd className="opacity-85">Open to hybrid and remote collaboration</dd>
          </div>
          <div>
            <dt className="font-display text-sm font-medium opacity-80">Email</dt>
            <dd className="font-display text-lg font-semibold mt-1 break-all">{PROFILE.email}</dd>
          </div>
          <div>
            <dt className="font-display text-sm font-medium opacity-80">WhatsApp</dt>
            <dd className="font-display text-lg font-semibold mt-1">+62 857-1309-0494</dd>
          </div>
          <div>
            <dt className="font-display text-sm font-medium opacity-80">Elsewhere</dt>
            <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-2">
              <a data-testid="contact-notion-link" href={LINKS.notionShort} target="_blank" rel="noopener noreferrer" className={linkCls}>
                Notion <ArrowUpRight size={16} aria-hidden />
              </a>
              <a data-testid="social-linkedin" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>
                LinkedIn <ArrowUpRight size={16} aria-hidden />
              </a>
              <a data-testid="social-github" href={LINKS.github} target="_blank" rel="noopener noreferrer" className={linkCls}>
                GitHub <ArrowUpRight size={16} aria-hidden />
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};