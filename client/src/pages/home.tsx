import { useLenis } from "@/hooks/use-lenis";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { BuilderLogo } from "@/components/ui/builder-logo";
import { motion } from "framer-motion";
import builderLogoImg from "@assets/generated_images/tech_girl_builder_cartoon_waving.png";

export default function Home() {
  useLenis();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 pb-12 overflow-x-hidden">
      
      {/* Friendly Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div className="bg-white/80 backdrop-blur-xl border-2 border-primary/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-2xl px-6 md:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BuilderLogo src={builderLogoImg} />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tighter text-primary">VARADA</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 -mt-1">Product Developer</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold opacity-60">
            <a href="#" className="hover:text-primary hover:opacity-100 transition-all hover:scale-110">Home</a>
            <a href="#projects" className="hover:text-primary hover:opacity-100 transition-all hover:scale-110">Projects</a>
            <a href="#about" className="hover:text-primary hover:opacity-100 transition-all hover:scale-110">About</a>
            <a href="#contact" className="hover:text-primary hover:opacity-100 transition-all hover:scale-110">Contact</a>
          </div>

          <div className="flex gap-2">
             <div className="w-3 h-3 rounded-full bg-primary/20" />
             <div className="w-3 h-3 rounded-full bg-secondary/20" />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-36 max-w-6xl">
        {/* Structural Guide Lines (Visual background elements) */}
        <div className="fixed inset-0 pointer-events-none opacity-5">
           <div className="absolute left-1/4 top-0 bottom-0 w-px bg-primary" />
           <div className="absolute left-3/4 top-0 bottom-0 w-px bg-primary" />
           <div className="absolute top-1/2 left-0 right-0 h-px bg-primary" />
        </div>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="mt-20 py-12 text-center text-muted-foreground border-t-4 border-dashed border-primary/5">
        <div className="flex justify-center gap-4 mb-6">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-6 h-6 rounded-md bg-muted/20 border-2 border-muted/10 shadow-inner" />
          ))}
        </div>
        <p className="text-sm font-black tracking-widest uppercase opacity-40">Assembled Piece by Piece • 2026</p>
      </footer>
    </div>
  );
}
