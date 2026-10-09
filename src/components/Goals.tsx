import Reveal from "@/components/Reveal";

const goals = [
  {
    title: "Grow as a Leader",
    description:
      "My MBA taught me the theory of management — now I want to grow into a real leadership role where I can guide teams and own meaningful outcomes.",
    icon: "◈",
  },
  {
    title: "Keep Learning",
    description:
      "From Rainbow School to HNBGU to PCTE, learning has been the one constant in my life. I want to keep building new skills, industry by industry.",
    icon: "◎",
  },
  {
    title: "Make an Impact",
    description:
      "I'm looking for work that matters — where my energy, honesty and creativity actually move the needle for a team and for its customers.",
    icon: "▲",
  },
];

export default function Goals() {
  return (
    <section id="goals" className="relative scroll-mt-20 py-28">
      <div className="pointer-events-none absolute top-1/3 left-0 h-96 w-96 rounded-full bg-violet/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-coral uppercase">
            Looking Ahead
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            My <span className="text-gradient">goals</span> & aspirations
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal, i) => (
            <Reveal key={goal.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-ink-800/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-coral/40 hover:shadow-[0_16px_50px_-20px_rgba(255,106,69,0.35)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-coral/20 to-violet/20 text-xl text-coral transition-transform group-hover:scale-110">
                  {goal.icon}
                </span>
                <h3 className="font-display mt-5 text-xl font-semibold">
                  {goal.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {goal.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
