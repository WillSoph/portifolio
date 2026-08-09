import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816]">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <EmailSection />

      <Footer />
    </main>
  );
}