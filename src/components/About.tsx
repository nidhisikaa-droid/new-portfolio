import Reveal from "@/components/Reveal";

const highlights = [
  { label: "MBA", value: "PCTE, Ludhiana" },
  { label: "BBA", value: "HNBGU, Dehradun" },
  { label: "Schooling", value: "Rainbow School" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-coral uppercase">
            About Me
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            A learner at heart, <span className="text-gradient">always growing</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Hello! I&apos;m <span className="text-cream">Nidhi Sikka</span>{" "}
                — a motivated and positive young professional who believes that
                hard work, honesty and curiosity take you far.
              </p>
              <p>
                My foundation was built at{" "}
                <span className="text-cream">Rainbow School</span>, where I
                discovered my love for learning. I then pursued a{" "}
                <span className="text-cream">
                  BBA from HNBGU, Dehradun
                </span>{" "}
                to understand the world of business, and completed an{" "}
                <span className="text-cream">MBA from PCTE, Ludhiana</span> to
                sharpen my leadership, marketing and strategic thinking.
              </p>
              <p>
                Beyond academics, I&apos;m someone who enjoys working with
                people, taking on new challenges and turning ideas into action.
                I&aposm now looking for an opportunity where I can contribute,
                learn every day and grow into a leader.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="group rounded-2xl border border-line bg-ink-800/60 p-6 transition-colors hover:border-coral/40 hover:bg-ink-700"
                >
                  <p className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">
                    {h.label}
                  </p>
                  <p className="font-display mt-2 text-xl font-semibold">
                    {h.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
