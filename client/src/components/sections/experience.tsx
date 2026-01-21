import { Block } from "@/components/ui/block";
import { Briefcase, Award, Code, Podcast } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <div className="mb-24">
      <motion.h2 
        className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="w-1 h-8 bg-gradient-to-b from-primary via-primary to-secondary rounded-full"></span>
        Support Blocks
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience Blocks */}
        <div className="space-y-4">
          <Block 
            className="p-6 border-primary/40 bg-gradient-to-br from-primary/10 to-card" 
            tilt={true}
            delay={1}
            title="Experience"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3 pb-4 border-b border-primary/20">
                <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Product Manager Intern</h4>
                  <p className="text-sm text-primary font-semibold">Deploid X</p>
                  <p className="text-xs text-muted-foreground mt-1">Managed product lifecycles & cross-functional coordination</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Developer & Project Intern</h4>
                  <p className="text-sm text-secondary font-semibold">ASD India Services</p>
                  <p className="text-xs text-muted-foreground mt-1">Web development & project management</p>
                </div>
              </div>
            </div>
          </Block>
        </div>

        {/* Achievements Blocks */}
        <div className="space-y-4">
          <Block 
            className="p-6 border-secondary/40 bg-gradient-to-br from-secondary/10 to-card" 
            tilt={true}
            delay={2}
            title="Achievements"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3 pb-4 border-b border-secondary/20">
                <Award className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Research Paper</h4>
                  <p className="text-xs text-muted-foreground mt-1">Published in International Journal</p>
                  <p className="text-xs text-secondary font-semibold mt-2">2024</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Podcast className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Podcast Host</h4>
                  <p className="text-sm text-primary font-semibold">The Speakopedia</p>
                  <p className="text-xs text-muted-foreground mt-1">Tech discussions & growth topics</p>
                </div>
              </div>
            </div>
          </Block>
        </div>
      </div>
    </div>
  );
}
