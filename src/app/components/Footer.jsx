"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#050816]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex flex-col gap-2">
          <Link
            href="#home"
            className="group flex w-fit items-center gap-3"
            aria-label="Go to homepage"
          >
            <span className="font-mono text-lg font-bold text-purple-500 transition-colors group-hover:text-purple-400">
              {"</>"}
            </span>

            <span className="text-sm font-semibold tracking-tight text-white">
              Will Dev
            </span>
          </Link>

          <p className="text-xs text-zinc-500">
            Front-end Developer focused on building modern digital experiences.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="#about"
              className="text-xs text-zinc-500 transition hover:text-purple-300"
            >
              About
            </Link>

            <Link
              href="#skills"
              className="text-xs text-zinc-500 transition hover:text-purple-300"
            >
              Skills
            </Link>

            <Link
              href="#projects"
              className="text-xs text-zinc-500 transition hover:text-purple-300"
            >
              Projects
            </Link>

            <Link
              href="#contact"
              className="text-xs text-zinc-500 transition hover:text-purple-300"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden h-4 w-px bg-white/[0.08] sm:block" />

          <div className="flex items-center gap-2">
            <SocialLink
              href="https://github.com/WillSoph"
              label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .7a12 12 0 0 0-3.79 23.38c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.7c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.1c0 .32.22.7.83.58A12 12 0 0 0 12 .7Z" />
              </svg>
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/in/wf-desenvolvedor"
              label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.34 3.5A2.34 2.34 0 1 1 .66 3.5a2.34 2.34 0 0 1 4.68 0ZM.93 7.1h4.82V22H.93V7.1Zm7.8 0h4.62v2.03h.07c.64-1.22 2.22-2.5 4.57-2.5 4.89 0 5.79 3.22 5.79 7.4V22h-4.81v-7.06c0-1.68-.03-3.84-2.34-3.84-2.35 0-2.71 1.83-2.71 3.72V22H8.73V7.1Z" />
              </svg>
            </SocialLink>

            <SocialLink
              href="mailto:wpessoal@outlook.com"
              label="Email"
              external={false}
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
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
            </SocialLink>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-zinc-600 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© {currentYear} Will Dev. All rights reserved.</p>

          <p>
            Built with Next.js, React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  label,
  children,
  external = true,
}) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-zinc-500 transition hover:border-purple-500/30 hover:bg-purple-500/[0.08] hover:text-purple-300"
    >
      {children}
    </Link>
  );
};

export default Footer;