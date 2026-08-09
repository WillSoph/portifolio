"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({
  image,
  title,
  description,
  technologies = [],
  projectUrl = "#",
  githubUrl,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0b1020]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-transparent to-transparent opacity-70" />

        <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${title}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-white backdrop-blur-md transition hover:border-purple-400/40 hover:bg-purple-500/20"
            >
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .7a12 12 0 0 0-3.79 23.38c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.7c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.1c0 .32.22.7.83.58A12 12 0 0 0 12 .7Z" />
              </svg>
            </Link>
          )}

          {projectUrl && (
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-white backdrop-blur-md transition hover:border-purple-400/40 hover:bg-purple-500/20"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M14 5H19V10M19 5L11 13M19 14V19H5V5H10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white transition group-hover:text-purple-300">
          {title}
        </h3>

        <p className="mt-2 min-h-[48px] text-sm leading-6 text-zinc-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-zinc-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;