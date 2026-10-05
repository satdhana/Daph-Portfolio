import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { LINKS, PROFILE, SUBJECTS } from "../data/content";

const linkCls = "font-display font-semibold inline-flex items-center gap-1 border-b-2 border-current py-0.5 hover:opacity-80";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: SUBJECTS[0], message: "" });
  const [copied, setCopied] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const text = `Hi Satria, I'm ${form.name} (${form.email}).\n\nSubject: ${form.subject}\n\n${form.message}`;
    window.open(`${LINKS.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    toast.success("Opening WhatsApp with your message pre-filled.");
  };

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

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-x-20 gap-y-14 mt-14">
          <dl className="space-y-7">
            <div>
              <dt className="font-display text-sm font-medium opacity-80">Based in</dt>
              <dd className="font-display text-lg font-semibold mt-1">{PROFILE.location}, Indonesia</dd>
              <dd className="opacity-85">Open to hybrid and remote collaboration</dd>
            </div>
            <div>
              <dt className="font-display text-sm font-medium opacity-80">Email</dt>
              <dd className="mt-1">
                <button
                  type="button"
                  data-testid="contact-email-copy"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="font-display text-lg font-semibold break-all text-left border-b-2 border-current py-0.5 hover:opacity-80"
                >
                  {PROFILE.email}
                </button>
              </dd>
              <dd className="opacity-85 mt-1" aria-live="polite">{copied ? "Copied to clipboard." : "Click to copy"}</dd>
            </div>
            <div>
              <dt className="font-display text-sm font-medium opacity-80">WhatsApp</dt>
              <dd className="mt-1">
                <a data-testid="whatsapp-direct-link" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className={`${linkCls} text-lg`}>
                  +62 857-1309-0494
                  <ArrowUpRight size={18} aria-hidden />
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-sm font-medium opacity-80">Elsewhere</dt>
              <dd className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
                <a data-testid="contact-notion-link" href={LINKS.notionShort} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  Notion portfolio <ArrowUpRight size={16} aria-hidden />
                </a>
                <a data-testid="social-linkedin" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  LinkedIn <ArrowUpRight size={16} aria-hidden />
                </a>
                <a data-testid="social-github" href={LINKS.github} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  GitHub <ArrowUpRight size={16} aria-hidden />
                </a>
              </dd>
              <dd className="opacity-85 mt-2">The Notion portfolio has the deep-dives, PRDs, and process.</dd>
            </div>
          </dl>

          <form data-testid="contact-form" onSubmit={submit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              <label className="block">
                <span className="sr-only">Your name</span>
                <input data-testid="contact-form-name-input" required value={form.name} onChange={set("name")} placeholder="Your name" autoComplete="name" className="field" />
              </label>
              <label className="block">
                <span className="sr-only">Your email</span>
                <input data-testid="contact-form-email-input" required type="email" value={form.email} onChange={set("email")} placeholder="Your email" autoComplete="email" className="field" />
              </label>
            </div>
            <label className="block relative">
              <span className="sr-only">What is this about?</span>
              <select data-testid="contact-form-subject-select" value={form.subject} onChange={set("subject")} className="field appearance-none pr-8 cursor-pointer">
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <ChevronDown size={18} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea data-testid="contact-form-message-input" required rows={4} value={form.message} onChange={set("message")} placeholder="Tell me about the role or project" className="field resize-none" />
            </label>
            <div>
              <button
                data-testid="contact-form-submit-button"
                type="submit"
                className="font-display font-semibold text-[0.95rem] px-7 py-3.5 rounded-md bg-[var(--on-hero)] text-[#0f3a22] hover:bg-white transition-colors"
              >
                Send via WhatsApp
              </button>
              <p className="text-[0.95rem] opacity-85 mt-3">This opens WhatsApp with your message filled in. Nothing is stored on this site.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
