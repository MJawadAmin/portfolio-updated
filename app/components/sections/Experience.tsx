import SectionHeading from "../ui/SectionHeading";
import ExperienceItem from "../ui/ExperienceItem";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Techbeel, Oman (Remote)",
    period: "May 2026 – Present",
    responsibilities: [
      "Building and maintaining web and mobile applications with a strong focus on performance, scalability, and user experience.",
      "Developing pixel-perfect, responsive interfaces from Figma designs with consistency across devices and screen sizes.",
      "Integrating application endpoints and collaborating with backend developers for reliable platform functionality.",
      "Delivering and enhancing e-commerce applications — new features, issue resolution, and continuous UX improvements.",
      "Working with Docker, AWS, and CI/CD pipelines to support efficient development, testing, and deployment.",
      "Collaborating with UI/UX designers, backend developers, QA, and cross-functional teams across the full SDLC.",
      "Writing clean, reusable, maintainable code, participating in reviews, and optimizing application performance.",
      "Leveraging Cursor, Claude, Trae, and Antigravity to accelerate workflows and improve code quality.",
    ],
  },
  {
    title: "React Native Developer",
    company: "Blockmob Labs, Islamabad, Pakistan",
    period: "November 2025 – May 2026",
    responsibilities: [
      "Built blockchain and e-commerce mobile apps with scalable, high-performance cross-platform solutions.",
      "Collaborated with backend, blockchain, UI/UX, and SQA teams for smooth integration and quality releases.",
      "Participated across the full lifecycle — requirements, architecture, implementation, testing, deployment, and post-release work.",
      "Implemented secure payment flows, wallet connectivity, transactions, and API integrations with strong security practices.",
      "Wrote clean, modular, reusable code with documentation and continuous review feedback.",
    ],
  },
  {
    title: "React Native & MERN Stack Developer",
    company: "ALIMCOSOFT (SMC-PRIVATE) LIMITED, Islamabad",
    period: "February 2025 – October 2025",
    responsibilities: [
      "Designed, developed, and optimized React Native apps and MERN web platforms for performance and scalability.",
      "Worked with product managers, designers, backend engineers, and SQA to turn requirements into user-focused solutions.",
      "Contributed to digital transformation by modernizing legacy processes and improving usability and efficiency.",
      "Supported end-to-end delivery — architecture, development, deployment, monitoring, and long-term maintenance.",
    ],
  },
  {
    title: "React & Node.js Developer",
    company: "Mehdi Technologies Pvt. Ltd., Islamabad",
    period: "July 2024 – February 2025",
    responsibilities: [
      "Built and maintained dynamic, responsive, scalable web applications using React.js and Node.js.",
      "Worked with multidisciplinary teams to deliver customized solutions aligned with client goals.",
      "Contributed to modernization projects that improved performance and user satisfaction.",
      "Provided technical consulting, deployment support, and maintenance for stable production systems.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad border-t border-[var(--line)] bg-[var(--bg-elevated)]"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Roles where I've shipped product, collaborated across teams, and owned delivery."
        />

        <div className="relative space-y-0 border-l border-[var(--line)] pl-8 sm:pl-10">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              responsibilities={exp.responsibilities}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
