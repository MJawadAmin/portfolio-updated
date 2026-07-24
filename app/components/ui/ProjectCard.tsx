type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col border border-[var(--line)] bg-[var(--bg)] p-6 transition-colors hover:border-[var(--accent)]/40 hover:bg-[var(--bg-elevated)] sm:p-7">
      <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-[var(--ink-muted)] leading-relaxed">
        {description}
      </p>

      <p className="mt-5 text-sm text-[var(--ink-soft)]">
        {technologies.join(" · ")}
      </p>

      {demoUrl && demoUrl !== "#" && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
        >
          View live project →
        </a>
      )}
    </article>
  );
}
