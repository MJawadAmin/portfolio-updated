// app/components/ui/SkillCard.tsx
type SkillCardProps = {
  title: string;
  skills: string[];
  icon: React.ReactNode;
};

export default function SkillCard({ title, skills, icon }: SkillCardProps) {
  // Extract color from title for dynamic styling
  const getCardColors = (title: string) => {
    if (title.includes('Mobile')) return 'from-purple-600 to-pink-500';
    if (title.includes('Frontend')) return 'from-emerald-600 to-teal-500';
    if (title.includes('Backend')) return 'from-orange-600 to-red-500';
    if (title.includes('State')) return 'from-cyan-600 to-blue-500';
    if (title.includes('AI')) return 'from-indigo-600 to-purple-500';
    return 'from-blue-600 to-cyan-500';
  };

  const gradientColors = getCardColors(title);

  return (
    <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-900/40 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all group hover:scale-105">
      {/* Gradient accent line at top */}
      <div className={`h-1 w-full bg-gradient-to-r ${gradientColors} rounded-full mb-4`}></div>
      
      {/* Card header with icon and title */}
      <div className="flex items-center mb-5">
        <div className={`bg-gradient-to-r ${gradientColors} p-3 rounded-lg shadow-md mr-4 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
          <div className="text-white">{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all">
          {title}
        </h3>
      </div>

      {/* Skills as tags */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 hover:text-blue-700 dark:hover:from-blue-900/40 dark:hover:to-cyan-900/40 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
