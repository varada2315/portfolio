import { useLenis } from "@/hooks/use-lenis";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { BuilderLogo } from "@/components/ui/builder-logo";
import { motion } from "framer-motion";
import characterAvatar from "@assets/generated_images/tech-focused_pixel_art_character_avatar.png";

export default function Home() {
  useLenis();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 pb-12 overflow-x-hidden">
      
      {/* Modern Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-primary bg-background">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BuilderLogo src={characterAvatar} className="border-2 border-primary" />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tighter text-foreground uppercase">VARADA.BUILD</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary -mt-1">Product Enthusiast</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:bg-primary hover:text-white px-2 py-1 transition-colors">Home</a>
            <a href="#projects" className="hover:bg-primary hover:text-white px-2 py-1 transition-colors">Projects</a>
            <a href="#about" className="hover:bg-primary hover:text-white px-2 py-1 transition-colors">About</a>
            <a href="#contact" className="hover:bg-primary hover:text-white px-2 py-1 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
             <div className="w-4 h-4 bg-primary animate-pulse" />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 max-w-6xl space-y-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="mt-20 py-12 border-t-4 border-primary text-center text-[10px] font-bold uppercase tracking-widest">
        <span>[ SYSTEM ONLINE ] © 2026 Varada Kumbhar • Built Block by Block</span>
      </footer>
    </div>
  );
}
