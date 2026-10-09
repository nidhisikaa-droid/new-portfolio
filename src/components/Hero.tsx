"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const traits = [
  "Leadership",
  "Communication",
  "Teamwork",
  "Marketing",
  "Strategy",
  "Adaptability",
  "Problem Solving",
  "Confidence",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-coral/15 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-ink-800/70 px-4 py-1.5 text-xs font-medium tracking-widest text-muted uppercase backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
          </span>
          Open to new opportunities
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-7xl lg:text-8xl"
        >
          Nidhi Sikka
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-gradient mt-3 font-display text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          MBA Graduate · Business Professional
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted"
        >
          Ambitious and driven management graduate with an MBA from PCTE,
          Ludhiana and a BBA from HNBGU, Dehradun. I bring strong
          communication, leadership and analytical skills — and a constant
          desire to learn, grow and make a real impact wherever I work.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#education"
            className="rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-coral hover:text-white hover:shadow-[0_0_30px_rgba(255,106,69,0.35)]"
          >
            My Journey
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream/40 hover:bg-ink-700"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-20 overflow-hidden border-y border-line py-4"
        >
          <div className="flex w-max animate-marquee gap-12">
            {[...traits, ...traits].map((trait, i) => (
              <span
                key={`${trait}-${i}`}
                className="flex items-center gap-12 font-display text-sm font-semibold tracking-[0.2em] text-muted uppercase"
              >
                {trait}
                <span className="text-coral">✦</span>
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
