export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl soft-float" />
      <div className="pointer-events-none absolute -left-16 bottom-16 h-64 w-64 rounded-full bg-[var(--highlight)]/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-5 py-20 sm:px-8">
        <div className="reveal max-w-3xl">
          <p className="mb-5 text-sm font-medium tracking-[0.18em] text-[var(--accent)] uppercase">
            Islamabad · Remote-ready
          </p>

          <h1 className="font-display text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.95] font-semibold tracking-tight text-[var(--ink)]">
            Muhammad
            <br />
            Jawad Amin
          </h1>

          <div className="mt-4 h-[3px] w-24 origin-left rounded-full bg-[var(--accent)] draw-underline" />

          <p className="mt-7 max-w-xl text-xl text-[var(--ink-soft)] sm:text-2xl">
            Mobile & Web App Developer
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
            Building reliable products with MERN, React Native, and Next.js —
            from pixel-perfect interfaces to scalable APIs, with a practical
            focus on performance and craft.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Get in touch
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-[var(--line)] bg-[var(--bg-elevated)] px-6 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              View resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--ink-muted)]">
            <a
              href="https://github.com/MJawadAmin"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jawad-amin-a70389216/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jjawadamn883@gmail.com"
              className="underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              jjawadamn883@gmail.com
            </a>
            <a
              href="tel:+923167388373"
              className="underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              (+92) 316–7388373
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
