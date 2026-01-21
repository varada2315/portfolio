import { useLenis } from "@/hooks/use-lenis";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  useLenis(); // Initialize smooth scrolling

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm shadow-sm" />
            <span className="font-display font-bold text-lg tracking-tight">VARADA.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

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

      <footer className="border-t border-border py-8 bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2026 Varada Kumbhar. Built with Block Architecture.</p>
        </div>
      </footer>
    </div>
  );
}
