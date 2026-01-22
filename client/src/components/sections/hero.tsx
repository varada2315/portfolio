import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative mb-32 pt-10">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-[120px] pointer-events-none" />
      
      {/* Tech Doodles Hero Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg 
          className="absolute -right-20 -top-10 w-[500px] h-[500px] opacity-[0.03] text-primary" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M40,40 L60,40 L60,60 L40,60 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100,20 L120,20 M110,10 L110,30" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="150" cy="60" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20,100 Q40,80 60,100 T100,100" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="140" y="120" width="30" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M80,150 L100,170 M100,150 L80,170" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10,150 C30,150 30,130 50,130" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="170" cy="180" r="4" fill="currentColor" />
          {/* Connecting lines */}
          <path d="M60,50 L140,60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" />
          <path d="M100,100 L140,130" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" />
        </svg>

        <svg 
          className="absolute -left-20 bottom-0 w-[400px] h-[400px] opacity-[0.05] text-primary" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M80,30 L110,30 L110,60 L80,60 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M150,20 L170,40 M170,20 L150,40" stroke="currentColor" strokeWidth="1.5" />
          <path d="M30,100 L70,100 M50,80 L50,120" stroke="currentColor" strokeWidth="1.5" />
          <rect x="120" y="90" width="40" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100,140 Q120,160 140,140" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="30" cy="170" r="5" fill="currentColor" />
          <path d="M60,160 L90,190" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-8 space-y-8 text-left">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full w-fit"
            >
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Product Developer</span>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-display font-black text-foreground leading-[1.1] tracking-tight relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Varada <br />
              <span className="text-primary hologram-glow pb-2">Kumbhar</span>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            </motion.h1>
          </div>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I assemble digital experiences piece by piece, focusing on 
            <span className="text-foreground font-bold"> strategy, operations, and analysis.</span>
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-xl shadow-primary/20" asChild>
              <a href="#projects">
                See My Work <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 border-2 border-primary/20 font-bold hover:bg-primary/5" asChild>
              <a href="/resume.pdf" download>Download CV</a>
            </Button>
          </motion.div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
          <Block title="Focus" className="p-8">
            <div className="space-y-4">
              {['Requirement Analysis', 'Product Documentation', 'Workflow Optimization'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary/40" />
                  <span className="text-sm font-medium opacity-80">{item}</span>
                </div>
              ))}
            </div>
          </Block>
          <div className="grid grid-cols-2 gap-4">
            <Block className="p-4 text-center" variant="primary">
               <span className="text-2xl font-black">2026</span>
               <p className="text-[10px] font-bold opacity-40 uppercase">B.Tech ENTC</p>
            </Block>
            <Block className="p-4 text-center" variant="secondary">
               <span className="text-2xl font-black">Active</span>
               <p className="text-[10px] font-bold opacity-40 uppercase">Podcast Host</p>
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
}
