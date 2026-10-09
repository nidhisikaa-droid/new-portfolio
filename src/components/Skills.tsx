import Reveal from "@/components/Reveal";

const skills = [
  {
    title: "Leadership",
    description:
      "Guiding teams toward shared goals with confidence, responsibility and a positive attitude.",
    icon: "◈",
  },
  {
    title: "Communication",
    description:
      "Clear, confident communication in conversations, presentations and teamwork — with people at every level.",
    icon: "◎",
  },
  {
    title: "Teamwork & Collaboration",
    description:
      "Working closely with diverse groups, listening first and helping the whole team succeed.",
    icon: "▲",
  },
  {
    title: "Marketing & Strategy",
    description:
      "Understanding markets, customers and competition thanks to my BBA and MBA training.",
    icon: "▣",
  },
  {
    title: "Problem Solving",
    description:
      "Staying calm under pressure and finding practical, thoughtful solutions to tough situations.",
    icon: "▤",
  },
  {
    title: "Adaptability & Learning",
    description:
      "Quick to pick up new tools, new domains and new ways of working — change excites me.",
    icon: "✦",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 border-y border-line bg-ink-800/40 py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-coral uppercase">
            What I Bring
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Skills & <span className="text-gradient">strengths</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-line bg-ink/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-coral/40 hover:shadow-[0_16px_50px_-20px_rgba(255,106,69,0.35)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-coral/20 to-violet/20 text-xl text-coral transition-transform group-hover:scale-110">
                  {skill.icon}
                </span>
                <h3 className="font-display mt-5 text-xl font-semibold">
                  {skill.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {skill.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
