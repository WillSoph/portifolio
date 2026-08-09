import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Willians Ferreira | Front-End Developer",
    template: "%s | Willians Ferreira",
  },

  description:
    "Portfolio of Willians Ferreira, Front-End Developer specialized in React, Next.js, TypeScript, scalable interfaces, performance and modern web applications.",

  keywords: [
    "Willians Ferreira",
    "Front-End Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer",
    "Software Engineer",
    "São Paulo",
    "Brazil",
  ],

  authors: [
    {
      name: "Willians Ferreira",
    },
  ],

  creator: "Willians Ferreira",

  openGraph: {
    title: "Willians Ferreira | Front-End Developer",
    description:
      "Front-End Developer specialized in React, Next.js, TypeScript and high-performance web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Willians Ferreira Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Willians Ferreira | Front-End Developer",
    description:
      "Front-End Developer specialized in React, Next.js, TypeScript and modern web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050816] text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}