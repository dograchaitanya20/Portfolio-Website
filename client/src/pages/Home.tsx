import { useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    const smoothScroll = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY;
      window.scrollBy({
        top: delta,
        behavior: "smooth"
      });
    };

    window.addEventListener("wheel", smoothScroll, { passive: false });
    return () => window.removeEventListener("wheel", smoothScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
