// app/components/ui/ExperienceItem.tsx
type ExperienceItemProps = {
  number: number;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
};

export default function ExperienceItem({
  number,
  title,
  company,
  period,
  responsibilities,
}: ExperienceItemProps) {
  return (
    <div className="relative">
      <div className="absolute -left-12 top-0 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
        <span className="text-white font-bold">{number}</span>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            {period}
          </span>
        </div>
        <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          {company}
        </h4>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
