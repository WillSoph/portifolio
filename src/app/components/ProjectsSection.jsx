"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "/projects/previsiva.jpg",
    title: "Previsiva",
    description:
      "AI-powered HR platform that identifies workplace risks, analyzes employee feedback and helps HR teams act before problems escalate.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "AI",
      "Firebase",
    ],
    projectUrl: "#",
  },
  {
    image: "/projects/amigo-secreto-top.jpg",
    title: "Amigo Secreto Top",
    description:
      "Free Secret Santa platform that allows groups to create, organize and run online draws quickly without requiring user registration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
    ],
    projectUrl: "https://amigosecretotop.com.br",
  },
  {
    image: "/projects/mediagamer.jpg",
    title: "MediaGamer",
    description:
      "Brazilian game review aggregator that brings together scores from specialized media, generating consolidated ratings for each release.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    projectUrl: "https://mediagamer.com.br",
  },
  {
    image: "/projects/selinia.jpg",
    title: "Selinia",
    description:
      "Modern SaaS platform for churches to manage members, contributions, invitations, approvals and administrative workflows.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    projectUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-20 sm:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/[0.05] blur-[150px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
            Selected Work
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            Products I&apos;ve designed and developed to solve real-world
            problems, combining modern front-end architecture, scalable
            technologies and strong product thinking.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;