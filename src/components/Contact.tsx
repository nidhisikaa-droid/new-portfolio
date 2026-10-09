"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const contactLinks = [
  { label: "Email", value: "hello@nidhisikka.com", href: "mailto:hello@nidhisikka.com" },
  { label: "LinkedIn", value: "/in/nidhi-sikka", href: "#" },
  { label: "Instagram", value: "@nidhi.sikka", href: "#" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    window.location.href = `mailto:hello@nidhisikka.com?subject=Hello from ${encodeURIComponent(
      String(name)
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-28">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-violet/15 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rounded-3xl border border-line bg-ink-800/60 p-8 sm:p-14">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.25em] text-coral uppercase">
                Get in Touch
              </p>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s <span className="text-gradient">connect</span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted">
                Have an opportunity, a question or just want to say hello?
                Drop me a message — I&apos;d love to hear from you and I usually
                reply within 24 hours.
              </p>

              <div className="mt-10 grid gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between rounded-xl border border-line px-5 py-4 transition-colors hover:border-coral/40 hover:bg-ink-700"
                  >
                    <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                      {link.label}
                    </span>
                    <span className="text-sm text-cream transition-colors group-hover:text-coral">
                      {link.value} →
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold tracking-[0.2em] text-muted uppercase"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-line bg-ink/70 px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-coral/60 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold tracking-[0.2em] text-muted uppercase"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-line bg-ink/70 px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-coral/60 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold tracking-[0.2em] text-muted uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell me about the opportunity or what you'd like to discuss..."
                    className="w-full resize-none rounded-xl border border-line bg-ink/70 px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-coral/60 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-coral hover:text-white hover:shadow-[0_0_30px_rgba(255,106,69,0.35)] sm:w-auto"
                >
                  {sent ? "Opening your email app..." : "Send Message"}
                </button>
                {sent && (
                  <p className="text-sm text-muted">
                    If nothing opened, email me directly at{" "}
                    <a href="mailto:hello@nidhisikka.com" className="text-coral">
                      hello@nidhisikka.com
                    </a>
                    .
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>

        <footer className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="font-display text-lg font-bold">
            Nidhi<span className="text-coral">.</span>Sikka
          </p>
          <p className="text-sm text-muted">
© 2026 Nidhi Sikka. Designed & built with
            care.
          </p>
        </footer>
      </div>
    </section>
  );
}
