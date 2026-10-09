import Reveal from "@/components/Reveal";

const timeline = [
  {
    degree: "Master of Business Administration (MBA)",
    school: "PCTE Institute of Technology",
    place: "Ludhiana, Punjab",
    period: "Post-graduation",
    description:
      "Specialised in marketing, finance and strategy — learning how organisations grow and how brands connect with people.",
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    school: "Hemwati Nandan Bahuguna Garhwal University (HNBGU)",
    place: "Dehradun, Uttarakhand",
    period: "Graduation",
    description:
      "Built a foundation in management, communication and entrepreneurship that still shapes how I approach every opportunity.",
  },
  {
    degree: "Higher Secondary & Schooling",
    school: "Rainbow School",
    place: "India",
    period: "Early education",
    description:
      "Where my creative journey began — exploring art, colour and visual storytelling for the very first time.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-20 border-y border-line bg-ink-800/40 py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-coral uppercase">
            Education
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            The road <span className="text-gradient">behind me</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-coral via-violet to-transparent sm:left-[15px]"
          />
          <div className="space-y-10">
            {timeline.map((entry, i) => (
              <Reveal key={entry.degree} delay={i * 0.1}>
                <div className="relative pl-10 sm:pl-12">
                  <span className="absolute top-1.5 left-0 flex h-6 w-6 items-center justify-center rounded-full border border-coral/50 bg-ink sm:h-8 sm:w-8">
                    <span className="h-2 w-2 rounded-full bg-coral" />
                  </span>
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                    {entry.period}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-semibold sm:text-2xl">
                    {entry.degree}
                  </h3>
                  <p className="mt-1 text-base text-cream/90">
                    {entry.school}{" "}
                    <span className="text-muted">· {entry.place}</span>
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {entry.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
