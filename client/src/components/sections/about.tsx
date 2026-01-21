import { Block } from "@/components/ui/block";
import { Mic, Code, Lightbulb, Users } from "lucide-react";

export function About() {
  return (
    <div id="about" className="mb-32 scroll-mt-32 relative">
      {/* Tech Doodles Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03] text-primary">
        <svg 
          className="absolute -left-20 top-0 w-[400px] h-[400px]" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M80,30 L110,30 L110,60 L80,60 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M150,20 L170,40 M170,20 L150,40" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        <div className="lg:col-span-8">
          <Block title="Biography" className="h-full p-12">
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
          <Block variant="primary" delay={1} className="p-8">
            <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-4">
              <Mic className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-sm">Podcast Host</h4>
            <p className="text-xs opacity-60">The Speakopedia</p>
          </Block>
          
          <Block variant="secondary" delay={2} className="p-8">
            <div className="p-4 bg-secondary/10 rounded-2xl w-fit mb-4">
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
