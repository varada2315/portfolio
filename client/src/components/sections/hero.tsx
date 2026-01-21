import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const text = "Building products, one block at a time";

export function Hero() {
  return (
    <div className="relative mb-20">
      <Block className="p-12 lg:p-16 tilt bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-primary/30" tilt={true} lift={true}>
        <div className="space-y-8">
          {/* Animated Title */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-primary font-mono text-xs tracking-widest uppercase font-bold">Foundation Block</h2>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-display font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Varada <span className="glow-text">Kumbhar</span>
            </motion.h1>

            {/* Animated Text - Letter by letter */}
            <div className="h-20">
              <motion.p 
                className="text-lg md:text-2xl text-muted-foreground font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {text.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.02 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            <p className="text-muted-foreground max-w-lg">
              Product Operations | Business Analyst | Project Coordinator
            </p>
          </div>

          {/* CTA Blocks */}
          <motion.div 
            className="flex flex-wrap gap-3 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-card font-semibold shadow-lg shadow-primary/50" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-primary/50 hover:border-primary" asChild>
              <a href="/resume.pdf" download>
                Download Resume <Download className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Bottom Glow */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-secondary/20 blur-3xl rounded-full" />
      </Block>
    </div>
  );
}
