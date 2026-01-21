import { Block } from "@/components/ui/block";
import { Mic, Code, Lightbulb, Users } from "lucide-react";

export function About() {
  return (
    <div id="about" className="mb-32 scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Block title="System Description" className="h-full p-12 glass-block">
            <h2 className="text-4xl font-black mb-8 tracking-tight uppercase">Building with Precision</h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                As a <span className="text-primary font-bold">B.Tech ENTC student (2022–2026)</span>, I view every business challenge as a set of modules waiting to be optimized.
              </p>
              <p>
                My expertise lies in <span className="text-foreground font-bold bg-primary/10 px-2 py-1">Product Operations</span> and <span className="text-foreground font-bold bg-primary/10 px-2 py-1">Business Analysis</span>. I don't just build; I architect systems that scale.
              </p>
            </div>
          </Block>
        </div>

        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
          <Block variant="primary" delay={1} className="p-8 glass-block">
            <div className="p-4 bg-primary text-white mb-4 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <Mic className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm uppercase">Voice Module</h4>
            <p className="text-xs font-bold opacity-60">Podcast Host @ Speakopedia</p>
          </Block>
          
          <Block variant="secondary" delay={2} className="p-8 glass-block">
            <div className="p-4 bg-secondary text-white mb-4 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <Code className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm uppercase">Logic Module</h4>
            <p className="text-xs font-bold opacity-60">Tech Operations Specialist</p>
          </Block>
        </div>
      </div>
    </div>
  );
}
