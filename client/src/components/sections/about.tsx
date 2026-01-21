import { Block } from "@/components/ui/block";
import { Mic, Laptop, Target, Zap } from "lucide-react";

export function About() {
  return (
    <div id="about" className="mb-32 scroll-mt-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <Block title="The Story Block" className="h-full p-12 border-primary/20 bg-gradient-to-br from-white to-primary/5" variant="beige">
            <h2 className="text-4xl font-black mb-8 tracking-tight">Constructing Solutions 🛠️</h2>
            <div className="space-y-6 text-xl text-muted-foreground font-medium leading-relaxed">
              <p>
                I am a <span className="text-primary font-black px-2 py-1 bg-primary/10 rounded-lg">B.Tech ENTC student (2022–2026)</span> who approaches business analysis like a master builder.
              </p>
              <p>
                Whether it's requirement gathering or workflow mapping, I focus on the structural integrity of every product I touch.
              </p>
              <p className="border-l-8 border-primary/20 pl-6 italic">
                "A product is only as strong as its individual components."
              </p>
            </div>
          </Block>
        </div>

        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-6">
          <Block variant="purple" delay={1} className="p-8 justify-center items-center text-center">
            <div className="p-4 bg-white/40 rounded-2xl mb-4 shadow-sm group-hover:rotate-12 transition-transform">
              <Mic className="w-8 h-8" />
            </div>
            <h4 className="font-black text-sm uppercase tracking-widest">Podcast</h4>
            <p className="text-xs font-bold opacity-60">The Speakopedia</p>
          </Block>
          
          <Block variant="teal" delay={2} className="p-8 justify-center items-center text-center">
            <div className="p-4 bg-white/40 rounded-2xl mb-4 shadow-sm group-hover:-rotate-12 transition-transform">
              <Laptop className="w-8 h-8" />
            </div>
            <h4 className="font-black text-sm uppercase tracking-widest">Tech Ops</h4>
            <p className="text-xs font-bold opacity-60">Analysis Specialist</p>
          </Block>
        </div>
      </div>
    </div>
  );
}
