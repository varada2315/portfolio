import { Block } from "@/components/ui/block";
import { Podcast, BookOpen, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <div className="mb-24">
      <motion.h2 
        className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="w-1 h-8 bg-gradient-to-b from-primary via-primary to-secondary rounded-full"></span>
        Core Block
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main About Block */}
        <Block 
          className="md:col-span-2 p-8" 
          tilt={true} 
          lift={true}
          title="About Me"
        >
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a <span className="text-primary font-semibold">B.Tech ENTC student (2022–2026)</span> and a passionate fresher in Product Operations & Business Analysis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Like a product architect placing blocks to build towers, I specialize in requirement gathering, process documentation, and workflow analysis to construct scalable solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Continuous learner. Structured thinker. Problem solver. Podcast host of <span className="text-secondary font-semibold">The Speakopedia</span>.
            </p>
          </div>
        </Block>

        {/* Highlights Stack */}
        <div className="space-y-4">
          <Block 
            className="p-6" 
            tilt={true}
            delay={1}
            title="Education"
          >
            <BookOpen className="w-8 h-8 text-primary mb-3" />
            <h4 className="font-bold text-sm mb-1">B.Tech ENTC</h4>
            <p className="text-xs text-muted-foreground">2022–2026</p>
          </Block>

          <Block 
            className="p-6" 
            tilt={true}
            delay={2}
            title="Podcast"
          >
            <Podcast className="w-8 h-8 text-secondary mb-3" />
            <h4 className="font-bold text-sm mb-1">The Speakopedia</h4>
            <p className="text-xs text-muted-foreground">Host & Creator</p>
          </Block>

          <Block 
            className="p-6" 
            tilt={true}
            delay={3}
            title="Philosophy"
          >
            <Lightbulb className="w-8 h-8 text-primary mb-3" />
            <h4 className="font-bold text-sm mb-1">Continuous Learning</h4>
            <p className="text-xs text-muted-foreground">Always growing</p>
          </Block>
        </div>
      </div>
    </div>
  );
}
