import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";

const skillsData = [
  {
    title: "Languages",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C/C++",
      "MySQL",
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "React Native",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Bootstrap",
      "Material UI",
      "Ant Design",
      "Capacitor",
      "Zustand & Redux",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "GraphQL",
      "Firebase",
      "REST API",
      "Supabase",
    ],
  },
  {
    title: "Cloud, DevOps & Tools",
    skills: [
      "Docker",
      "AWS",
      "Git & GitHub",
      "Vercel & Netlify",
      "GitHub Copilot",
      "Cursor AI",
      "Claude",
      "Trae & Antigravity",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-[var(--line)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="The stack I use day to day — from interfaces to infrastructure."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {skillsData.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
