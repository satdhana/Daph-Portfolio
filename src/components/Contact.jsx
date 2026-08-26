import { useState } from "react";
import { MapPin, Phone, ExternalLink, Linkedin, Github, Send, ChevronDown, FileText, Mail, Check } from "lucide-react";
import { toast } from "sonner";
import { LINKS, SUBJECTS } from "../data/content";
import { ChapterHeading, Reveal } from "./Reveal";

const EMAIL = "dafaputra35@gmail.com";

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
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const el = document.createElement("textarea");
      el.value = EMAIL;
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

  const inputCls =
    "w-full rounded-xl border border-line bg-cardx px-4 py-3 text-sm text-hi placeholder:text-faint outline-none focus:border-[var(--cyan)] transition-colors";

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-15 blur-[130px] pointer-events-none" style={{ background: "var(--indigo)" }} aria-hidden />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <ChapterHeading number="06" kicker="Contact" title="Let's build impactful products together." testid="contact-heading" />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <Reveal>
            <div className="space-y-4">
              <div className="card-lift rounded-2xl border border-line bg-cardx p-6 flex items-start gap-4">
                <MapPin size={18} className="text-accent-cyan mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-hi">Bintaro, South Jakarta, Indonesia</p>
                  <p className="text-xs text-faint mt-1">Open to hybrid & remote collaboration</p>
                </div>
              </div>

              <button
                type="button"
                data-testid="contact-email-copy"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="press card-lift w-full text-left rounded-2xl border border-line bg-cardx p-6 flex items-start gap-4"
              >
                {copied ? (
                  <Check size={18} className="text-accent-cyan mt-0.5 shrink-0" />
                ) : (
                  <Mail size={18} className="text-accent-cyan mt-0.5 shrink-0" />
                )}
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-hi break-all">{EMAIL}</p>
                  <p className="text-xs text-faint mt-1">{copied ? "Copied to clipboard!" : "Click to copy — email me directly"}</p>
                </div>
              </button>

              <a
                data-testid="whatsapp-direct-link"
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift rounded-2xl border border-line bg-cardx p-6 flex items-start gap-4 block"
              >
                <Phone size={18} className="text-accent-cyan mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-hi">+62 857-1309-0494</p>
                  <p className="text-xs text-faint mt-1">Direct line & WhatsApp — fastest response</p>
                </div>
              </a>
              <a
                data-testid="contact-notion-link"
                href={LINKS.notionShort}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift rounded-2xl border border-line bg-cardx p-6 flex items-start gap-4 block"
              >
                <FileText size={18} className="text-accent-cyan mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-hi flex items-center gap-1.5">
                    Full Notion Portfolio <ExternalLink size={12} />
                  </p>
                  <p className="text-xs text-faint mt-1">bit.ly/PortofolioDafa2025 — deep-dives, PRDs & process</p>
                </div>
              </a>
              <div className="flex gap-3 pt-2">
                <a data-testid="social-linkedin" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="press w-11 h-11 rounded-full border border-line flex items-center justify-center text-lo hover:text-hi hover:border-[var(--cyan)] transition-colors">
                  <Linkedin size={17} />
                </a>
                <a data-testid="social-github" href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="press w-11 h-11 rounded-full border border-line flex items-center justify-center text-lo hover:text-hi hover:border-[var(--cyan)] transition-colors">
                  <Github size={17} />
                </a>
                <a data-testid="social-notion" href={LINKS.notion} target="_blank" rel="noopener noreferrer" aria-label="Notion Portfolio" className="press w-11 h-11 rounded-full border border-line flex items-center justify-center text-lo hover:text-hi hover:border-[var(--cyan)] transition-colors">
                  <ExternalLink size={17} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form data-testid="contact-form" onSubmit={submit} className="glass rounded-2xl p-7 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input data-testid="contact-form-name-input" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
                <input data-testid="contact-form-email-input" required type="email" value={form.email} onChange={set("email")} placeholder="Your email" className={inputCls} />
              </div>
              <div className="relative">
                <select data-testid="contact-form-subject-select" value={form.subject} onChange={set("subject")} className={`${inputCls} appearance-none pr-10 cursor-pointer`}>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s} className="bg-[var(--card)]">
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-faint pointer-events-none" />
              </div>
              <textarea data-testid="contact-form-message-input" required rows={5} value={form.message} onChange={set("message")} placeholder="Tell me about the role or project..." className={`${inputCls} resize-none`} />
              <button
                data-testid="contact-form-submit-button"
                type="submit"
                className="press w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white whitespace-nowrap"
                style={{ background: "linear-gradient(100deg, var(--indigo), var(--cyan))" }}
              >
                Send Message <Send size={15} />
              </button>
              <p className="text-[11px] text-faint text-center">Opens WhatsApp with your message pre-filled — no data stored.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
