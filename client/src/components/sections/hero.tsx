import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative mb-32 pt-12">
      <Block className="p-16 text-center border-4" delay={0}>
        <div className="max-w-2xl mx-auto space-y-6">
          <motion.h1 
            className="text-6xl md:text-8xl font-display font-black text-foreground uppercase tracking-tighter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Varada <span className="text-primary-foreground/20 stroke-text">Kumbhar</span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            className="h-1 bg-primary mx-auto"
          />

          <p className="text-2xl font-display font-medium text-muted-foreground uppercase tracking-widest">
            Building products, <span className="text-foreground">one block at a time</span>
          </p>

          <div className="flex justify-center gap-6 pt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="real-block bg-primary text-primary-foreground font-bold px-8 h-16 rounded-xl border-b-8 border-primary-foreground/10" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="real-block bg-white text-foreground font-bold px-8 h-16 rounded-xl border-b-8 border-border" asChild>
                <a href="/resume.pdf" download>Resume</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </Block>
      
      {/* Connector line to next section */}
      <div className="absolute left-1/2 bottom-[-128px] w-0.5 h-32 bg-border -translate-x-1/2" />
    </div>
  );
}
