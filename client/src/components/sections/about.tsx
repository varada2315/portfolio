import { Block } from "@/components/ui/block";
import { motion } from "framer-motion";

export function About() {
  return (
    <div className="mb-32 relative">
      <div className="max-w-4xl mx-auto">
        <Block title="Stacked Block" className="p-12 border-4" depth={true} delay={2}>
          <div className="space-y-6 text-xl leading-relaxed text-muted-foreground">
            <p>
              I am a <span className="text-foreground font-bold underline decoration-primary decoration-4 underline-offset-4">B.Tech ENTC student (2022–2026)</span> and a fresher dedicated to Product Operations & Business Analysis.
            </p>
            <p>
              I see every project as a modular component in a larger ecosystem. My strength lies in requirement gathering, documentation, and the precise assembly of workflows.
            </p>
            <p>
              Beyond the blueprint: Host of <span className="text-foreground font-bold">The Speakopedia</span> podcast and a passionate explorer of tech architectures.
            </p>
          </div>
        </Block>
      </div>
      
      {/* Vertical connector line */}
      <div className="absolute left-1/2 bottom-[-128px] w-0.5 h-32 bg-border -translate-x-1/2" />
    </div>
  );
}
