"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple-600/[0.08] blur-[120px]" />

        <div className="absolute left-[15%] top-0 h-56 w-56 rounded-full bg-fuchsia-500/[0.05] blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                Contact
              </span>

              <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let&apos;s work{" "}
                <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  together
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
                Have a project, opportunity or technical challenge in mind?
                Let&apos;s talk and build something useful, scalable and
                meaningful together.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* <Link
                  href="mailto:wpessoal@outlook.com"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
                >
                  Get In Touch

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
                </Link> */}

                <Link
                  href="https://www.linkedin.com/in/wf-desenvolvedor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-purple-500/40 hover:bg-purple-500/[0.08]"
                >
                  LinkedIn

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
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:border-l lg:border-white/[0.08] lg:pl-10"
            >
              <div className="space-y-6">
                {/* <ContactItem
                  title="Email"
                  value="wpessoal@outlook.com"
                  href="mailto:wpessoal@outlook.com"
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
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
                /> */}

                <ContactItem
                  title="Location"
                  value="São Paulo, Brazil"
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 21S18 15.5 18 10A6 6 0 1 0 6 10C6 15.5 12 21 12 21Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <circle
                        cx="12"
                        cy="10"
                        r="2"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                  }
                />

                <ContactItem
                  title="Availability"
                  value="Open to new opportunities"
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3V12L17 15"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                  }
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ title, value, href, icon }) => {
  const content = (
    <div className="group flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.08] text-purple-300 transition group-hover:border-purple-400/40 group-hover:bg-purple-500/[0.12]">
        {icon}
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
          {title}
        </p>

        <p className="mt-1 text-sm font-medium text-zinc-200 transition group-hover:text-purple-300">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block">
      {content}
    </Link>
  );
};

export default EmailSection;