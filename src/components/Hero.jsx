import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import { ArrowDown, Download, TrendingUp, Layers, Workflow } from "lucide-react";
import { LINKS, STATS } from "../data/content";

const CountUp = ({ to, prefix = "", suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
};

const MaskedLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const scrollTo = (href) => {
  if (window.__lenis) window.__lenis.scrollTo(href, { offset: -72 });
  else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section id="overview" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
      <motion.div style={{ y: gridY }} className="absolute inset-0 grid-bg" aria-hidden />
      <motion.div style={{ y: orbY }} className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-25 blur-[120px]" style={{ background: "var(--indigo)" }} />
        <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full opacity-20 blur-[130px]" style={{ background: "var(--cyan)" }} />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-testid="hero-status-badge"
              className="inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2 mb-8 glass"
            >
              <span className="status-dot w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs sm:text-sm text-lo font-medium">
                Open for Product Management & Product Design Roles
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-hi">
              <MaskedLine delay={0.25}>Bridging Product</MaskedLine>
              <MaskedLine delay={0.38}>
                Strategy, <span className="gradient-text">UI/UX Design</span>
              </MaskedLine>
              <MaskedLine delay={0.51}>& Technical Feasibility.</MaskedLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-7 text-base sm:text-lg text-lo leading-relaxed max-w-xl"
            >
              Hi, I'm <span className="text-hi font-semibold">Satria Dafa Putra Wardhana</span> — a Product
              Manager & Hybrid Designer with hands-on experience leading cross-functional teams, driving CRO
              (+30%), and building scalable UI/UX & Front-End solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <button
                data-testid="hero-cta-cases"
                onClick={() => scrollTo("#case-studies")}
                className="press inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white"
                style={{ background: "linear-gradient(100deg, var(--indigo), var(--cyan))" }}
              >
                Explore Selected Work <ArrowDown size={15} />
              </button>
              <a
                data-testid="hero-cta-cv"
                href={LINKS.cv}
                download
                className="press inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm border border-line text-hi hover:border-[var(--cyan)] transition-colors"
              >
                <Download size={15} /> Download CV
              </a>
              {/* <a
                data-testid="hero-cta-notion"
                href={LINKS.notion}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 px-2 py-3.5 font-semibold text-sm text-accent-cyan hover:text-hi transition-colors"
              >
                View Full Notion Portfolio <ExternalLink size={14} />
              </a> */}
            </motion.div>
          </div>

          <motion.div
            style={{ y: cardsY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block h-[420px]"
            aria-hidden
          >
            <div className="animate-floaty absolute top-2 right-4 w-64 glass rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={15} className="text-accent-cyan" />
                <span className="font-mono-x text-[10px] tracking-[0.2em] text-faint uppercase">Conversion</span>
              </div>
              <p className="text-3xl font-extrabold gradient-text">+30%</p>
              <p className="text-xs text-lo mt-1">CRO uplift — Cococo App, 3 months</p>
            </div>
            <div className="animate-floaty-2 absolute top-44 left-0 w-60 glass rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Workflow size={15} className="text-accent-cyan" />
                <span className="font-mono-x text-[10px] tracking-[0.2em] text-faint uppercase">Automation</span>
              </div>
              <p className="text-3xl font-extrabold text-hi">100%</p>
              <p className="text-xs text-lo mt-1">Manual supervisor input eliminated — HCMS</p>
            </div>
            <div className="animate-floaty absolute bottom-0 right-10 w-56 glass rounded-2xl p-5 shadow-2xl" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-2 mb-3">
                <Layers size={15} className="text-accent-cyan" />
                <span className="font-mono-x text-[10px] tracking-[0.2em] text-faint uppercase">Shipped</span>
              </div>
              <p className="text-3xl font-extrabold text-hi">6+</p>
              <p className="text-xs text-lo mt-1">Products across iOS, Android & Web</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 lg:mt-20 grid sm:grid-cols-3 rounded-2xl border border-line glass overflow-hidden"
        >
          {STATS.map((s, i) => (
            <div
              key={s.testid}
              data-testid={s.testid}
              className={`px-7 py-6 ${i > 0 ? "border-t sm:border-t-0 sm:border-l border-line" : ""}`}
            >
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-hi">
                <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="text-sm text-hi font-medium mt-1.5">{s.label}</p>
              <p className="font-mono-x text-[10px] tracking-[0.18em] uppercase text-accent-cyan mt-1">{s.delta}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};