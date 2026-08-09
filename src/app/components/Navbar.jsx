"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = () => {
    setNavbarOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#050816]/85 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-white/[0.06] bg-[#050816]/65 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="#home"
          onClick={handleNavigation}
          className="group flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <span className="font-mono text-xl font-bold text-purple-500 transition-colors duration-300 group-hover:text-purple-400">
            {"</>"}
          </span>

          <span className="text-lg font-semibold tracking-tight text-white">
            Will Dev
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className="group relative py-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              {link.title}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setNavbarOpen((current) => !current)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors hover:bg-white/[0.06] md:hidden"
          aria-label={navbarOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={navbarOpen}
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <span
              className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                navbarOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                navbarOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                navbarOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#050816]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          navbarOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              onClick={handleNavigation}
              className="border-b border-white/[0.05] py-4 text-sm font-medium text-zinc-300 transition-colors last:border-none hover:text-purple-400"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;