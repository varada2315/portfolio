import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative mb-24 mt-12">
      <Block className="p-12 md:p-20 text-center bg-white/50 backdrop-blur-sm border-2 border-dashed border-primary/20" bounce={false}>
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-center gap-2 mb-6"
          >
            <div className="w-8 h-8 rounded-lg bg-primary shadow-lg rotate-12" />
            <div className="w-8 h-8 rounded-lg bg-secondary shadow-lg -rotate-12" />
            <div className="w-8 h-8 rounded-lg bg-accent shadow-lg rotate-6" />
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-display font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Varada Kumbhar
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Building products, <span className="text-primary italic">one block at a time</span>
            </motion.p>
          </div>

          <motion.p 
            className="text-muted-foreground max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Product Operations | Business Analyst | Project Coordinator.
            I enjoy assembling complex ideas into friendly, functional realities.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-soft" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-primary/20 hover:bg-primary/5" asChild>
              <a href="/resume.pdf" download>
                Download Resume <Download className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Floating Doodles */}
        <div className="absolute top-10 left-10 w-12 h-12 border-2 border-primary/10 rounded-full animate-bounce" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary/10 rounded-2xl rotate-45 animate-pulse" />
      </Block>
    </div>
  );
}
