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

export default function Home() {
  useLenis();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 pb-12 overflow-x-hidden">
      
      {/* Tech Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BuilderLogo src={techGirlLogoImg} />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tighter text-white">VARADA</span>
              <span className="text-[8px] font-mono font-bold tracking-[0.4em] uppercase text-primary -mt-1">01_DEV_MODE</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="opacity-20 text-[8px]">01</span> HOME
            </a>
            <a href="#projects" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="opacity-20 text-[8px]">02</span> WORKS
            </a>
            <a href="#about" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="opacity-20 text-[8px]">03</span> ABOUT
            </a>
            <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="opacity-20 text-[8px]">04</span> CONTACT
            </a>
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden lg:flex flex-col items-end">
                <span className="text-[8px] font-mono opacity-40">LATENCY: 12ms</span>
                <span className="text-[8px] font-mono text-accent">STATUS: ONLINE</span>
             </div>
             <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 max-w-7xl">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="mt-20 py-12 border-t border-white/5 text-center">
        <div className="flex justify-center gap-8 mb-6 font-mono text-[8px] opacity-20 uppercase tracking-[0.5em]">
          <span>© VARADA_DEV_2026</span>
          <span>BUILD_ID_8842</span>
          <span>ENCRYPTED_CONNECTION</span>
        </div>
      </footer>
    </div>
  );
}
