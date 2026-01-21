import { useLenis } from "@/hooks/use-lenis";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { motion } from "framer-motion";

export default function Home() {
  useLenis();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 pb-12">
      
      {/* Friendly Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-soft rounded-full px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-xl shadow-lg -rotate-12 flex items-center justify-center text-white font-bold">V</div>
            <span className="font-display font-bold text-lg tracking-tight">VARADA</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold opacity-70">
            <a href="#" className="hover:text-primary hover:opacity-100 transition-all">Home</a>
            <a href="#projects" className="hover:text-primary hover:opacity-100 transition-all">Projects</a>
            <a href="#about" className="hover:text-primary hover:opacity-100 transition-all">About</a>
            <a href="#contact" className="hover:text-primary hover:opacity-100 transition-all">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-32 max-w-6xl">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="mt-12 py-12 text-center text-muted-foreground">
        <div className="flex justify-center gap-2 mb-4">
          <div className="w-4 h-4 rounded bg-primary/20" />
          <div className="w-4 h-4 rounded bg-secondary/20" />
          <div className="w-4 h-4 rounded bg-accent/20" />
        </div>
        <p className="text-sm font-medium">Assembled with care • Varada Kumbhar 2026</p>
      </footer>
    </div>
  );
}
