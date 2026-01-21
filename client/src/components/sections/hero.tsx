import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ArrowRight, Layout, Database, Terminal } from "lucide-react";

export function Hero() {
  return (
    <div className="relative mb-32">
      {/* Foundation Base Block */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[110%] h-16 bg-muted/10 rounded-[4rem] blur-2xl pointer-events-none" />
      
      <Block className="p-16 md:p-24 text-center border-4 border-primary/20 relative" bounce={false}>
        {/* Decorative Blocks */}
        <motion.div 
          className="absolute -top-10 -left-10 w-24 h-24 bg-primary/10 rounded-3xl border-2 border-primary/20 rotate-12 flex items-center justify-center"
          animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Layout className="w-10 h-10 text-primary/40" />
        </motion.div>
        <motion.div 
          className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-[2rem] border-2 border-secondary/20 -rotate-12 flex items-center justify-center"
          animate={{ y: [0, 10, 0], rotate: [-12, -15, -12] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Terminal className="w-12 h-12 text-secondary/40" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10 relative z-20">
          <div className="space-y-4">
            <motion.h1 
              className="text-6xl md:text-8xl font-display font-black text-foreground tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              Varada <span className="text-primary">Kumbhar</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-accent/20 rounded-full border-2 border-accent/30"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-black uppercase tracking-[0.2em] text-accent-foreground">Product Architect</span>
            </motion.div>
          </div>

          <motion.p 
            className="text-xl md:text-3xl text-muted-foreground font-display font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building products, <br className="md:hidden" />
            <span className="text-primary italic underline decoration-4 underline-offset-8">one block at a time</span>
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button size="lg" className="rounded-2xl h-16 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg shadow-[0_8px_0_0_#9333ea] active:shadow-none active:translate-y-2 transition-all" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl h-16 px-10 border-4 border-primary/20 font-black text-lg hover:bg-primary/5 active:translate-y-1 transition-all" asChild>
              <a href="/resume.pdf" download>
                Resume <Download className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </Block>
    </div>
  );
}
