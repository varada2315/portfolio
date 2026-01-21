import { Block } from "@/components/ui/block";
import { Mic, Code, Lightbulb, Users } from "lucide-react";

export function About() {
  return (
    <div id="about" className="mb-32 scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Block title="Biography" className="building-block h-full p-12">
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Crafting Products with Purpose ✨</h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                I am a <span className="text-primary font-bold">B.Tech ENTC student (2022–2026)</span> with a passion for building structured, efficient, and user-centric products.
              </p>
              <p>
                I specialize in <span className="text-foreground font-bold underline decoration-primary/30 decoration-4 underline-offset-4">Product Operations</span> and <span className="text-foreground font-bold underline decoration-primary/30 decoration-4 underline-offset-4">Business Analysis</span>. I believe every great product is built one solid block at a time.
              </p>
            </div>
          </Block>
        </div>

        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
          <Block variant="primary" delay={1} className="building-block p-8">
            <div className="p-4 bg-primary/10 w-fit mb-4">
              <Mic className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-sm">Podcast Host</h4>
            <p className="text-xs opacity-60">The Speakopedia</p>
          </Block>
          
          <Block variant="secondary" delay={2} className="building-block p-8">
            <div className="p-4 bg-secondary/10 w-fit mb-4">
              <Code className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="font-bold text-sm">Tech Operations</h4>
            <p className="text-xs opacity-60">Analysis Specialist</p>
          </Block>
        </div>
      </div>
    </div>
  );
}
