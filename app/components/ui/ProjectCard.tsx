// app/components/ui/ProjectCard.tsx
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  demoUrl = "#",

}: ProjectCardProps) {
  return (
    <div className="backdrop-blur-sm bg-white/40 dark:bg-gray-900/30 rounded-xl border border-gray-200/80 dark:border-gray-800/80 shadow-lg hover:shadow-xl transition-all group overflow-hidden">
      {/* Top gradient accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400"></div>

      {/* Card content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full transition-colors hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
          <a
            href={demoUrl}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/60 dark:to-gray-800/80 hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/30 border border-gray-200/50 dark:border-gray-700/50 transition-colors shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        
        </div>
      </div>
    </div>
  );
}
