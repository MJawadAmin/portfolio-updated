// app/components/sections/Experience.tsx
import SectionHeading from "../ui/SectionHeading";
import ExperienceItem from "../ui/ExperienceItem";

export default function Experience() {
  const experiences = [
    {
      title: "React Native & MERN Stack Developer",
      company: "ALIMCOSOFT (SMC-PRIVATE) LIMITED, ISLAMABAD",
      period: "March 2025 – Present",
      responsibilities: [
        "Developed and maintained React Native mobile applications and MERN stack web solutions, sharpening expertise in both front-end and back-end development.",
        "Collaborated effectively with cross-functional teams, translating client needs into well-designed and implemented software solutions.",
        "Contributed to key digital transformation projects, significantly optimizing client operations and improving overall user experience.",
        "Provided comprehensive technical consulting and support, ensuring efficient deployment and smooth operation of IT solutions.",
      ],
    },
    {
      title: "React & Node.js Developer",
      company: "Mehdi Technologies PVT LTD, ISLAMABAD",
      period: "November 2024 – March 2025",
      responsibilities: [
        "Developed and maintained dynamic web applications using React.js and Node.js.",
        "Partnered with diverse teams to design and implement tailored software solutions that met specific client requirements.",
        "Participated in digital transformation initiatives, enhancing client operations and user experience.",
        "Delivered technical consulting and support, ensuring the successful and efficient deployment of IT solutions.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" />

        <div className="relative border-l-4 border-blue-500 pl-8 ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              number={index + 1}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
