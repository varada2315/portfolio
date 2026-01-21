import { useLenis } from "@/hooks/use-lenis";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { BuilderLogo } from "@/components/ui/builder-logo";
import { motion } from "framer-motion";
import techGirlLogoImg from "@assets/generated_images/sleek_tech_girl_avatar_glassmorphism.png";
import headerLogoImg from "@assets/Untitled_design_(8)_1769012998999.png";

export default function Home() {
  useLenis();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 pb-12 overflow-x-hidden">
      
      {/* Modern Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/70 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <BuilderLogo src={headerLogoImg} />
              <BuilderLogo src={techGirlLogoImg} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tighter text-foreground">VARADA</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary -mt-1">Product Developer</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest opacity-60">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 max-w-6xl">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="mt-20 py-12 border-t border-border text-center opacity-40 text-[10px] font-bold uppercase tracking-widest">
        <span>© 2026 Varada Kumbhar • Assembled with Care</span>
      </footer>
    </div>
  );
}
