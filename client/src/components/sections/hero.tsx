import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative mb-32 pt-10">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/10 blur-[120px] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-8 text-left">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 px-3 py-1 bg-primary border-2 border-primary text-white w-fit"
            >
              <Sparkles className="w-3 h-3" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Product Architect</span>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-display font-black text-foreground leading-[1.1] tracking-tight uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Building <br />
              <span className="text-primary underline decoration-primary decoration-8 underline-offset-8">Block by Block</span>
            </motion.h1>
          </div>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I am <span className="text-foreground font-bold">Varada Kumbhar</span>. I specialize in assembling digital ecosystems through
            <span className="text-primary font-bold"> strategic analysis and operational excellence.</span>
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="rounded-none border-2 border-primary bg-primary text-white font-bold block-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all h-14 px-8" asChild>
              <a href="#projects">
                DEPLOY PROJECTS <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-none border-2 border-primary font-bold hover:bg-primary/5 h-14 px-8" asChild>
              <a href="/resume.pdf" download>SOURCE CODE (CV)</a>
            </Button>
          </motion.div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
          <Block title="Core Modules" className="p-8 glass-block">
            <div className="space-y-4">
              {['Requirement Analysis', 'Product Documentation', 'Workflow Optimization'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary" />
                  <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </Block>
          <div className="grid grid-cols-2 gap-4">
            <Block className="p-4 text-center glass-block" variant="primary">
               <span className="text-2xl font-black">2026</span>
               <p className="text-[10px] font-bold opacity-60 uppercase">Runtime End</p>
            </Block>
            <Block className="p-4 text-center glass-block" variant="secondary">
               <span className="text-2xl font-black">ACTIVE</span>
               <p className="text-[10px] font-bold opacity-60 uppercase">Podcast.host</p>
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
}
