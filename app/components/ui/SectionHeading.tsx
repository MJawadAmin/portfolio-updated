export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-[2px] w-14 rounded-full bg-[var(--accent)]" />
      {subtitle && (
        <p className="mt-4 text-[var(--ink-muted)]">{subtitle}</p>
      )}
    </div>
  );
}
