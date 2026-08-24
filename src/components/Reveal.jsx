import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const ChapterHeading = ({ number, kicker, title, testid }) => (
  <Reveal>
    <div className="flex items-center gap-4 mb-4">
      <span className="font-mono-x text-xs text-accent-cyan tracking-widest">{number}</span>
      <span className="h-px flex-1 max-w-[64px] bg-[var(--border-hi)]" />
      <span className="overline-x">{kicker}</span>
    </div>
    <h2
      data-testid={testid}
      className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-hi max-w-2xl leading-[1.15]"
    >
      {title}
    </h2>
  </Reveal>
);
