import { Block } from "@/components/ui/block";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-4 space-y-4">
        <h2 className="font-display font-black text-2xl uppercase mb-6">Support Blocks</h2>
        <Block title="Exp 01" className="border-4 p-8 h-64 flex flex-col justify-center" depth={true}>
          <h3 className="text-2xl font-black uppercase tracking-tight">Product Manager Intern</h3>
          <p className="text-primary font-bold">Deploid X</p>
          <p className="text-sm text-muted-foreground mt-2">Managing lifecycle & cross-functional assembly.</p>
        </Block>
        <Block title="Exp 02" className="border-4 p-8 h-64 flex flex-col justify-center" depth={true} delay={1}>
          <h3 className="text-2xl font-black uppercase tracking-tight">Project Intern</h3>
          <p className="text-primary font-bold">ASD India Services</p>
          <p className="text-sm text-muted-foreground mt-2">Development & project architecture.</p>
        </Block>
      </div>

      <div className="lg:col-span-8 space-y-4">
        <h2 className="font-display font-black text-2xl uppercase mb-6">Special Blocks</h2>
        <Block title="Achievements" className="border-4 p-12 bg-primary/5 border-primary/20" depth={true} delay={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="text-lg font-black uppercase underline decoration-primary decoration-4">Research Paper</h4>
              <p className="text-sm text-muted-foreground italic">International Journal Publication 2024</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-black uppercase underline decoration-primary decoration-4">Podcast</h4>
              <p className="text-sm text-muted-foreground italic">The Speakopedia - Host</p>
            </div>
          </div>
        </Block>
      </div>
    </div>
  );
}
