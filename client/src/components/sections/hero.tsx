import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative mb-32 pt-10">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
              className="text-6xl md:text-8xl font-display font-black text-foreground leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Varada <br />
              <span className="text-primary">Kumbhar</span>
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
