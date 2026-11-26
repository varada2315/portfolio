import { useLenis } from "@/hooks/use-lenis";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { BuilderLogo } from "@/components/ui/builder-logo";
import { motion, useScroll, useSpring } from "framer-motion";
import headerLogoImg from "@assets/Untitled_design_(8)_1769012998999.png";
import { Certifications } from "@/components/sections/certifications";

export default function Home() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-transparent text-foreground selection:bg-primary/20 pb-20 overflow-x-hidden relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Modern Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(90%,1100px)]">
        <div className="bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgb(0,0,0,0.05)] rounded-full px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <BuilderLogo src={headerLogoImg} className="group-hover:rotate-12 transition-transform" />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tighter text-foreground">VARADA</span>
              <span className="text-[9px] font-black tracking-[0.2em] uppercase text-primary -mt-1 opacity-80">Product Dev</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
            {[
              { label: 'Home', href: '#' },
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Certifications', href: '#certifications' },
              { label: 'Contact', href: '#contact' }
            ].map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="hover:text-primary hover:scale-110 transition-all opacity-40 hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
             <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
             <div className="hidden sm:block text-[9px] font-black uppercase tracking-widest opacity-40">System Active</div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-48 max-w-6xl relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="mt-20 py-20 border-t border-border/50 text-center relative overflow-hidden bg-white/30">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-border" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">End of Transmission</span>
            <span className="w-12 h-px bg-border" />
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest opacity-30 mt-4">
            © 2026 Varada Kumbhar • Assembled with Care
          </p>
        </div>
      </footer>
    </div>
  );
}
