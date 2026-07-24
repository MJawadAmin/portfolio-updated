import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-[var(--line)] bg-[var(--bg-elevated)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
            Muhammad Jawad Amin
          </p>
          <p className="mt-2 max-w-md text-[var(--ink-muted)]">
            Mobile & Web App Developer · Islamabad, Pakistan
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a
              href="https://github.com/MJawadAmin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink-soft)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jawad-amin-a70389216/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink-soft)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jjawadamn883@gmail.com"
              className="text-[var(--ink-soft)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              Email
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <nav className="flex flex-wrap gap-5 text-sm text-[var(--ink-muted)]">
            <Link href="#about" className="hover:text-[var(--accent)]">
              About
            </Link>
            <Link href="#experience" className="hover:text-[var(--accent)]">
              Experience
            </Link>
            <Link href="#contact" className="hover:text-[var(--accent)]">
              Contact
            </Link>
          </nav>
          <p className="text-sm text-[var(--ink-muted)]">
            © {new Date().getFullYear()} Muhammad Jawad Amin
          </p>
        </div>
      </div>
    </footer>
  );
}
