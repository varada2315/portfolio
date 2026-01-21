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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 overflow-hidden">
      
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg shadow-primary/50" />
            <span className="font-display font-bold text-lg tracking-tight glow-text">VARADA</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Side Label */}
      <motion.div 
        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4 text-xs font-mono text-muted-foreground tracking-widest uppercase"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="h-20 w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
        <div className="writing-mode-vertical text-center whitespace-nowrap text-primary/60 hover:text-primary transition-colors cursor-default">
          A Product is Not Built
        </div>
        <div className="writing-mode-vertical text-center whitespace-nowrap glow-text">
          It is Assembled
        </div>
        <div className="h-20 w-0.5 bg-gradient-to-t from-transparent via-primary/50 to-transparent"></div>
      </motion.div>

      <main className="container mx-auto px-4 pt-24 pb-12">
        <Hero />
        <div id="about" className="scroll-mt-24">
          <About />
        </div>
        <Skills />
        <div id="projects" className="scroll-mt-24">
          <Projects />
        </div>
        <Experience />
        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </main>

      <footer className="border-t border-primary/20 py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2026 Varada Kumbhar. Built with Block Architecture & Assembled with ❤️
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
