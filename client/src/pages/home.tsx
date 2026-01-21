import { useLenis } from "@/hooks/use-lenis";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import logoUrl from '@assets/generated_images/cartoon-builder-girl-logo-illustration_1769006934844.png';

export default function Home() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 2000);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 selection:bg-primary/30">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-primary z-[100] origin-left" style={ { scaleX } } />

      {/* Header with Builder Girl Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-default">
            <div className="relative w-12 h-12 bg-muted rounded-full overflow-hidden border-2 border-border shadow-inner">
              <motion.img 
                src={logoUrl} 
                alt="Builder Girl Logo" 
                className="w-full h-full object-cover"
                animate={isWaving ? { rotate: [0, -10, 10, -10, 0] } : {}}
                transition={{ duration: 1.5 }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl uppercase tracking-tighter leading-none">Varada</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">Product Architect</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-12 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Foundation</a>
            <a href="#projects" className="hover:text-primary transition-colors">Tower</a>
            <a href="#about" className="hover:text-primary transition-colors">Blueprint</a>
            <a href="#contact" className="hover:text-primary transition-colors">Cap Block</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-32 max-w-6xl">
        <Hero />
        <div id="about" className="scroll-mt-32">
          <About />
        </div>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="mt-24 pt-12 border-t border-border text-center">
        <div className="font-display font-black text-xl uppercase tracking-tighter opacity-20 mb-4">
          Structure Fully Assembled
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          © 2026 Varada Kumbhar • Built Block by Block
        </p>
      </footer>
    </div>
  );
}
