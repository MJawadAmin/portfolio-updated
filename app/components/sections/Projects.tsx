// app/components/sections/Projects.tsx
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "C",
      description:
        "A modern travel agency website for searching flights and booking tickets. Built with Next.js 15, Redux, Zustand, and React Hook Form with an admin panel using ShadCN for managing bookings, users, and flights.",
      technologies: ["Next.js 15", "Redux", "Zustand", "ShadCN UI"],
      demoUrl: "https://3d-tawny-omega.vercel.app/",
    },
    {
      title: "WonderList",
      description:
        "A mobile app backend for users to track and share travel experiences. Developed with Fastify, Mercurius, PostgreSQL, Sequelize, and GraphQL. Users can add places, share trip details, and interact with others.",
      technologies: ["Fastify", "GraphQL", "PostgreSQL", "Sequelize"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Experience Pakistan",
      description:
        "A web-based event management system developed as a final year project. Features event creation, registration, ticketing, payment processing, and recommendations.",
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Certificate System",
      description:
        "Developed an online system for birth and death certificate registration. Streamlined application and issuance processes for user efficiency.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/5 dark:bg-cyan-600/10 rounded-full blur-3xl"></div>

      {/* Animated geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-indigo-500/10 dark:border-indigo-400/20 rounded-xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 border-2 border-cyan-500/10 dark:border-cyan-400/20 rounded-full animate-float-medium"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Featured Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
