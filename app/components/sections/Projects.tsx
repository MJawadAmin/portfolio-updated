import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Travel Booking Platform",
    description:
      "A modern travel agency website for searching flights and booking tickets. Built with Next.js 15, Redux, Zustand, and React Hook Form, plus an admin panel with shadcn/ui for bookings, users, and flights.",
    technologies: ["Next.js 15", "Redux", "Zustand", "shadcn/ui"],
    demoUrl: "https://3d-tawny-omega.vercel.app/",
  },
  {
    title: "WonderList",
    description:
      "A mobile app backend for tracking and sharing travel experiences. Built with Fastify, Mercurius, PostgreSQL, Sequelize, and GraphQL — places, trip details, and social interaction.",
    technologies: ["Fastify", "GraphQL", "PostgreSQL", "Sequelize"],
  },
  {
    title: "Experience Pakistan",
    description:
      "A web-based event management system from my final year project. Covers event creation, registration, ticketing, payments, and recommendations.",
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS"],
  },
  {
    title: "Certificate System",
    description:
      "An online system for birth and death certificate registration, streamlining application and issuance for clearer, faster user workflows.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad border-t border-[var(--line)] bg-[var(--bg-elevated)]"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          title="Selected Work"
          subtitle="A few projects that show how I think about product, stack, and delivery."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
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
