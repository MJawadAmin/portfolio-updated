type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  isLast?: boolean;
};

export default function ExperienceItem({
  title,
  company,
  period,
  responsibilities,
  isLast = false,
}: ExperienceItemProps) {
  return (
    <article className={`relative ${isLast ? "pb-0" : "pb-12"}`}>
      <span className="absolute top-1.5 -left-[2.15rem] h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-elevated)] sm:-left-[2.65rem]" />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--ink)] sm:text-2xl">
          {title}
        </h3>
        <p className="shrink-0 text-sm font-medium text-[var(--accent)]">
          {period}
        </p>
      </div>

      <p className="mt-1 text-[var(--ink-soft)]">{company}</p>

      <ul className="mt-5 space-y-2.5">
        {responsibilities.map((resp, index) => (
          <li
            key={index}
            className="relative pl-4 text-[var(--ink-muted)] before:absolute before:top-[0.7em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent)]"
          >
            {resp}
          </li>
        ))}
      </ul>
    </article>
  );
}
