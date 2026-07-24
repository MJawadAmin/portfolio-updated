import SectionHeading from "../ui/SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="section-pad border-t border-[var(--line)]"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          title="Education"
          subtitle="The foundation behind the engineering work."
        />

        <div className="max-w-3xl border-l-2 border-[var(--accent)] pl-6 sm:pl-8">
          <p className="text-sm font-medium text-[var(--accent)]">
            Graduated July 2024
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
            Bachelor of Computer Science
          </h3>
          <p className="mt-2 text-lg text-[var(--ink-soft)]">
            Abdul Wali Khan University Mardan, Pakistan
          </p>
          <p className="mt-4 max-w-2xl text-[var(--ink-muted)] leading-relaxed">
            Built a solid base in programming principles, algorithms, databases,
            and software engineering — the groundwork for shipping production
            mobile and web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
