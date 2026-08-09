"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const technologies = [
  {
    name: "React",
    short: "⚛",
    description: "Interfaces modernas",
  },
  {
    name: "Next.js",
    short: "N",
    description: "Full-stack React",
  },
  {
    name: "TypeScript",
    short: "TS",
    description: "Código tipado",
  },
  {
    name: "Tailwind CSS",
    short: "TW",
    description: "UI escalável",
  },
  {
    name: "Node.js",
    short: "JS",
    description: "Back-end JavaScript",
  },
  {
    name: "Git",
    short: "G",
    description: "Versionamento",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-20 sm:py-24"
    >
      {/* Decoração de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-600/[0.06] blur-[120px]" />

        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-fuchsia-500/[0.04] blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-0">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="lg:border-r lg:border-white/[0.07] lg:pr-16"
          >
            <SectionTitle
              normalText="About"
              highlightedText="Me"
            />

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
              I&apos;m a front-end developer with 15+ years of experience
              creating digital products, interfaces and web applications for
              companies and millions of users.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
              My work combines modern technologies such as React, Next.js and
              TypeScript with strong attention to performance, accessibility,
              scalability and user experience.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
              I enjoy transforming complex business problems into simple,
              intuitive and maintainable digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <InfoBadge text="Front-end Architecture" />
              <InfoBadge text="Design Systems" />
              <InfoBadge text="Performance" />
              <InfoBadge text="Accessibility" />
              <InfoBadge text="Clean Code" />
            </div>

            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-purple-500/40 hover:bg-purple-500/[0.08]"
            >
              More About Me

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: 0.1,
            }}
            className="lg:pl-16"
          >
            <SectionTitle
              normalText="Tech"
              highlightedText="Stack"
            />

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
              Technologies and tools I use to build scalable, maintainable and
              high-performance products.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {technologies.map((technology, index) => (
                <motion.div
                  key={technology.name}
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-purple-500/35 hover:bg-purple-500/[0.06]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.05] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.08] font-mono text-sm font-bold text-purple-300">
                      {technology.short}
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-white">
                      {technology.name}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      {technology.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Also experienced with
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <TechnologyTag text="Zustand" />
                <TechnologyTag text="TanStack Query" />
                <TechnologyTag text="REST APIs" />
                <TechnologyTag text="Framer Motion" />
                <TechnologyTag text="Radix UI" />
                <TechnologyTag text="shadcn/ui" />
                <TechnologyTag text="Cypress" />
                <TechnologyTag text="CI/CD" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SectionTitle = ({ normalText, highlightedText }) => {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
        Who I Am
      </span>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {normalText}{" "}
        <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          {highlightedText}
        </span>
      </h2>
    </div>
  );
};

const InfoBadge = ({ text }) => {
  return (
    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400">
      {text}
    </span>
  );
};

const TechnologyTag = ({ text }) => {
  return (
    <span className="rounded-lg border border-white/[0.07] bg-black/20 px-3 py-2 text-xs text-zinc-400 transition hover:border-purple-500/30 hover:text-purple-300">
      {text}
    </span>
  );
};

export default AboutSection;