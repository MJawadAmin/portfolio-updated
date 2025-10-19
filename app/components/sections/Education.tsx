import SectionHeading from "../ui/SectionHeading";
import { BookOpen } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Abdul Wali Khan University Mardan, Pakistan",
      year: "2024",
      achievement: "Graduated July 2024",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Education" />

        {/* Main Education Card */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-900/40 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
            {/* Gradient header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 p-8 text-white relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{educationData[0].degree}</h3>
                <h4 className="text-xl text-blue-100 mb-3">{educationData[0].institution}</h4>
                <div className="inline-flex items-center gap-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {educationData[0].achievement}
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {educationData[0].year}
                  </span>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left side - Core Subjects */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Core Computer Science Subjects
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Data Structures & Algorithms",
                      "Object-Oriented Programming", 
                      "Database Systems",
                      "Web Technologies",
                      "Software Engineering",
                      "Computer Networks"
                    ].map((subject, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side - Programming Languages Learned */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Programming Languages & Technologies
                  </h4>
                  <div className="space-y-3">
                    {[
                      "C/C++ Programming",
                      "Java Development",
                      "Python Programming", 
                      "JavaScript & Web Development",
                      "Database Management (MySQL)",
                      "Software Development Lifecycle"
                    ].map((tech, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
