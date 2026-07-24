type SkillCardProps = {
  title: string;
  skills: string[];
};

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="border-t border-[var(--line)] pt-5">
      <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--ink)]">
        {title}
      </h3>
      <p className="mt-3 text-[var(--ink-soft)] leading-relaxed">
        {skills.join(" · ")}
      </p>
    </div>
  );
}
