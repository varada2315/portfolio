import { useLenis } from "@/hooks/use-lenis";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { BuilderLogo } from "@/components/ui/builder-logo";
import { motion } from "framer-motion";
import headerLogoImg from "@assets/Untitled_design_(8)_1769012998999.png";

import { Certifications } from "@/components/sections/certifications";

export default function Home() {
  useLenis();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 pb-12 overflow-x-hidden relative">
      {/* Tech Doodles Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="doodles" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M20 20 L40 20 L40 40 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="80" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M120 30 Q 140 10 160 30" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M30 120 L50 140 M50 120 L30 140" fill="none" stroke="currentColor" strokeWidth="1"/>
              <rect x="150" y="150" width="20" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M100 100 L110 110 L100 120" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="180" cy="80" r="3" fill="currentColor"/>
              <path d="M50 180 C 70 180 70 160 90 160" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#doodles)" />
        </svg>
      </div>

      {/* Modern Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/70 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BuilderLogo src={headerLogoImg} />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tighter text-foreground">VARADA</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary -mt-1">Product Developer</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest opacity-60">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 max-w-6xl relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>

      <footer className="mt-20 py-12 border-t border-border text-center opacity-40 text-[10px] font-bold uppercase tracking-widest">
        <span>© 2026 Varada Kumbhar • Assembled with Care</span>
      </footer>
    </div>
  );
}
