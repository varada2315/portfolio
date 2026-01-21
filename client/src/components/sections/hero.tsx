import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Terminal, Cpu, Database } from "lucide-react";

export function Hero() {
  return (
    <div className="relative mb-32 pt-10">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Block className="lg:col-span-8 p-12 md:p-20" title="System Initialization">
          <div className="space-y-8 relative z-20 text-left">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Active Developer</span>
              </motion.div>

              <motion.h1 
                className="text-6xl md:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                VARADA <br />
                <span className="text-primary glow-primary">KUMBHAR</span>
              </motion.h1>
            </div>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground font-mono leading-tight max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Building digital products <br />
              <span className="text-white border-b-2 border-primary/40">one modular block at a time.</span>
            </motion.p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-none h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-mono font-bold tracking-tighter shadow-lg shadow-primary/20" asChild>
                <a href="#projects">EXECUTE_WORKS.EXE</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none h-14 px-8 border-primary/20 font-mono font-bold hover:bg-primary/5" asChild>
                <a href="/resume.pdf" download>FETCH_RESUME</a>
              </Button>
            </div>
          </div>
        </Block>

        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
          <Block title="Hardware Status" variant="primary">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="opacity-60 uppercase">Uptime</span>
                <span className="text-primary">99.9%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary" 
                  initial={{ width: 0 }}
                  animate={{ width: "99.9%" }}
                  transition={{ duration: 2 }}
                />
              </div>
              <div className="flex justify-center py-6">
                <Cpu className="w-16 h-16 text-primary/20" />
              </div>
            </div>
          </Block>
          <Block title="Database Connection" variant="secondary">
            <div className="space-y-4">
               <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-secondary">Secured</span>
               </div>
               <Database className="w-12 h-12 text-secondary/20" />
            </div>
          </Block>
        </div>
      </div>
    </div>
  );
}
