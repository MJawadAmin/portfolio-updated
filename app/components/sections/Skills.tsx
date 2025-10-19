// app/components/sections/Skills.tsx
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";
import {
  LayoutGrid,
  Server,
  DatabaseZap,
  Palette,
  Share2, // Added new icon
} from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      title: "Programming Languages",
      icon: <LayoutGrid className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C/C++",
      ],
    },
    {
      title: "Mobile Development",
      icon: <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      skills: [
        "React Native",
        "Capacitor",
        "Mobile UI/UX",
        "Cross-Platform Apps",
        "Native Performance",
      ],
    },
    {
      title: "Frontend Development",
      icon: <Share2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      skills: [
        "React.js",
        "Next.js",
        "HTML & CSS",
        "Tailwind CSS",
        "Bootstrap",
        "shadcn/ui",
        "Material UI",
        "Ant Design",
      ],
    },
    {
      title: "Backend & Database",
      icon: <Server className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "GraphQL",
        "REST API",
        "Firebase",
        "Supabase",
      ],
    },
    {
      title: "State Management & Tools",
      icon: (
        <DatabaseZap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
      ),
      skills: [
        "Zustand & Redux",
        "Git & GitHub",
        "Vercel & Netlify",
        "CI/CD Pipelines",
      ],
    },
    {
      title: "AI & Development Tools",
      icon: <LayoutGrid className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      skills: ["GitHub Copilot", "Cursor AI", "Claude", "AI-Powered Development"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillsData.map((skillCategory, index) => (
            <SkillCard
              key={index}
              title={skillCategory.title}
              icon={skillCategory.icon}
              skills={skillCategory.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
