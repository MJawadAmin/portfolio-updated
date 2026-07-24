import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-[var(--line)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          title="About"
          subtitle="A bit of context on how I work and what I care about."
        />

        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:gap-14">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
            <p>
              I&apos;m a highly motivated Mobile & Web App Developer with
              hands-on experience in the MERN stack, React Native, and Next.js.
              I build and maintain robust applications, collaborate closely with
              cross-functional teams, and contribute to digital transformation
              with a practical, delivery-focused approach.
            </p>
            <p>
              I regularly use AI-assisted workflows — Cursor, GitHub Copilot,
              Claude, Trae, and Antigravity — to move faster, keep code quality
              high, and ship smarter features without losing attention to craft.
            </p>
            <p>
              I&apos;m eager to keep solving hard problems with modern tools and
              build software that feels clear, fast, and useful.
            </p>
          </div>

          <aside className="space-y-6 border-l border-[var(--line)] pl-0 md:pl-8">
            <div>
              <p className="text-xs font-medium tracking-[0.16em] text-[var(--ink-muted)] uppercase">
                Location
              </p>
              <p className="mt-1.5 text-[var(--ink)]">Islamabad, Pakistan</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.16em] text-[var(--ink-muted)] uppercase">
                Phone
              </p>
              <a
                href="tel:+923167388373"
                className="mt-1.5 block text-[var(--ink)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
              >
                (+92) 316–7388373
              </a>
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.16em] text-[var(--ink-muted)] uppercase">
                Email
              </p>
              <a
                href="mailto:jjawadamn883@gmail.com"
                className="mt-1.5 block break-all text-[var(--ink)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
              >
                jjawadamn883@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.16em] text-[var(--ink-muted)] uppercase">
                Focus
              </p>
              <p className="mt-1.5 text-[var(--ink)]">
                React Native · Next.js · MERN · AWS · Docker
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
