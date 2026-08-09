"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050816] pb-10 pt-28 sm:pt-32 lg:pb-14 lg:pt-36"
    >
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[8%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute right-[12%] top-[18%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:px-10">
        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            <span className="text-sm font-medium text-purple-300">
              Front-end Developer
            </span>
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Crafting digital{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              experiences
            </span>{" "}
            with passion.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            I build responsive, accessible and high-performance web
            applications focused on usability, scalability and real business
            value.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]"
            >
              View My Work

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
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

            <Link
              href="/cv-willians-ferreira.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-purple-400/50 hover:bg-white/[0.06]"
            >
              Download CV

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 3V15M12 15L7 10M12 15L17 10M5 21H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialLink
              href="https://github.com/WillSoph"
              label="GitHub"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .7a12 12 0 0 0-3.79 23.38c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.7c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.1c0 .32.22.7.83.58A12 12 0 0 0 12 .7Z" />
                </svg>
              }
            />

            <SocialLink
              href="https://www.linkedin.com/in/wf-desenvolvedor"
              label="LinkedIn"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.34 3.5A2.34 2.34 0 1 1 .66 3.5a2.34 2.34 0 0 1 4.68 0ZM.93 7.1h4.82V22H.93V7.1Zm7.8 0h4.62v2.03h.07c.64-1.22 2.22-2.5 4.57-2.5 4.89 0 5.79 3.22 5.79 7.4V22h-4.81v-7.06c0-1.68-.03-3.84-2.34-3.84-2.35 0-2.71 1.83-2.71 3.72V22H8.73V7.1Z" />
                </svg>
              }
            />

            <SocialLink
              href="mailto:wpessoal@outlook.com"
              label="E-mail"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6H20V18H4V6ZM4 7L12 13L20 7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto flex w-full max-w-[620px] items-center justify-center"
        >
          <div className="absolute h-[410px] w-[410px] rounded-full bg-purple-600/10 blur-[90px]" />

          <div className="absolute left-[4%] top-[18%] hidden rounded-xl border border-purple-500/30 bg-[#0b1020]/80 p-4 shadow-2xl backdrop-blur-md sm:block">
            <span className="font-mono text-3xl text-purple-400">{"</>"}</span>
          </div>

          <div className="absolute right-[1%] top-[12%] hidden w-[210px] rounded-xl border border-purple-500/20 bg-[#0b1020]/80 p-4 shadow-2xl backdrop-blur-md md:block">
            <pre className="overflow-hidden whitespace-pre-wrap text-[10px] leading-5 text-zinc-400">
              <code>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-zinc-300">developer</span> = {"{"}
                {"\n"} name:{" "}
                <span className="text-emerald-400">&quot;Will Dev&quot;</span>,
                {"\n"} skills: [
                <span className="text-emerald-400">&quot;React&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;Next.js&quot;</span>,
                {"\n"}{" "}
                <span className="text-emerald-400">&quot;TypeScript&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;Tailwind&quot;</span>
                ]{"\n"}
                {"}"}
              </code>
            </pre>
          </div>

          <div className="absolute bottom-[17%] right-[3%] hidden rounded-xl border border-cyan-500/20 bg-[#0b1020]/80 p-4 shadow-2xl backdrop-blur-md sm:block">
            <svg
              viewBox="-11.5 -10.23174 23 20.46348"
              width="34"
              height="34"
              aria-hidden="true"
              className="text-cyan-400"
            >
              <circle cx="0" cy="0" r="2.05" fill="currentColor" />
              <g stroke="currentColor" fill="none" strokeWidth="1">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          </div>

          <div className="relative z-10 w-full">
            <Image
              src="/hero-willians.png"
              alt="Willians Ferreira, front-end developer"
              width={760}
              height={760}
              priority
              className="mx-auto h-auto w-full max-w-[580px] object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto mt-12 w-full max-w-7xl px-5 sm:px-8 lg:mt-16 lg:px-10">
        <div className="grid overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-4">
          <Stat number="100+" label="Projects Completed" />
          <Stat number="67M+" label="Users Impacted" />
          <Stat number="7+" label="Big Companies" />
          <Stat number="15+" label="Years of Experience" />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, label, icon }) => {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
    >
      {icon}
    </Link>
  );
};

const Stat = ({ number, label }) => {
  return (
    <div className="relative flex min-h-[120px] flex-col items-center justify-center px-5 py-6 text-center after:absolute after:right-0 after:top-1/2 after:hidden after:h-12 after:w-px after:-translate-y-1/2 after:bg-white/[0.08] lg:after:block lg:last:after:hidden">
      <strong className="text-2xl font-bold text-white sm:text-3xl">
        {number}
      </strong>

      <span className="mt-1 text-xs text-zinc-400 sm:text-sm">{label}</span>
    </div>
  );
};

export default HeroSection;