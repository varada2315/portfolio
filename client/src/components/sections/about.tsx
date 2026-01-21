import { Block } from "@/components/ui/block";
import { Terminal, Code2, Globe2 } from "lucide-react";

export function About() {
  return (
    <div id="about" className="mb-32 scroll-mt-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <Block title="Core Repository" className="h-full p-12">
            <div className="flex items-center gap-4 mb-8">
              <Terminal className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-black tracking-tight uppercase">Biography</h2>
            </div>
            <div className="space-y-6 text-lg font-mono text-muted-foreground">
              <p>
                [ <span className="text-primary font-bold">STATUS:</span> ACTIVE ] <br />
                B.Tech ENTC student (2022–2026).
              </p>
              <p>
                Specializing in <span className="text-white font-bold">Product Development</span> and <span className="text-white font-bold">Business Analysis</span>. I treat software assembly like a high-stakes puzzle, ensuring every block is optimized for performance.
              </p>
              <div className="p-4 bg-white/5 border border-white/10 rounded font-mono text-sm">
                $ grep -r "motivation" ./brain <br />
                &gt; "Continuous learning. Structured thinking. Problem solving."
              </div>
            </div>
          </Block>
        </div>

        <div className="md:col-span-4 space-y-6">
          <Block variant="primary" delay={1} title="Communications">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
                 <Globe2 className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest font-bold">The Speakopedia</p>
              <p className="text-[10px] opacity-40 uppercase">Podcast Host & Creator</p>
            </div>
          </Block>
          
          <Block variant="secondary" delay={2} title="Toolchain">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-secondary/10 rounded flex items-center justify-center">
                 <Code2 className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest font-bold">Analysis Spec</p>
              <p className="text-[10px] opacity-40 uppercase">Workflow Optimization</p>
            </div>
          </Block>
        </div>
      </div>
    </div>
  );
}
