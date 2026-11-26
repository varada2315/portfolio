import { Block } from "@/components/ui/block";
import { Mic, Code, Lightbulb, Users, Fingerprint, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <div id="about" className="mb-40 scroll-mt-32 relative">
      <div className="flex items-center gap-6 mb-16 relative z-10">
        <h2 className="text-4xl font-black tracking-tight uppercase tracking-[0.1em]">
          Profile <span className="text-primary">Summary</span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        <div className="lg:col-span-8">
          <Block className="h-full p-12 bg-white/40">
            <h2 className="text-5xl font-black mb-10 tracking-tighter leading-tight">
              Bridging the gap between <span className="text-primary">concept</span> and <span className="text-secondary">deployment</span>.
            </h2>
            <div className="space-y-8 text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed tracking-tight">
              <p>
                I am a <span className="text-foreground font-black">B.Tech ENTC student (2022–2026)</span> at DKTE's Textile & Engineering Institute, focused on the intersection of engineering and product management.
              </p>
              <p>
                My expertise lies in <span className="text-foreground font-black">Product Operations</span> and <span className="text-foreground font-black">Business Analysis</span>, where I transform complex technical requirements into actionable product strategies.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {['Strategic Planning', 'Technical Documentation', 'Stakeholder Management'].map((tag) => (
                  <span key={tag} className="px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-xs font-black uppercase tracking-widest text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Block>
        </div>

        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
          <Block variant="primary" className="p-8 group">
            <div className="p-5 bg-white shadow-xl rounded-[2rem] w-fit mb-6 group-hover:scale-110 transition-transform">
              <Mic className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-black text-lg tracking-tight">Podcast Host</h4>
            <p className="text-sm opacity-60 font-bold uppercase tracking-widest mt-1">The Speakopedia</p>
          </Block>
          
          <Block variant="secondary" className="p-8 group hover:bg-secondary/[0.05]">
            <div className="p-5 bg-white shadow-xl rounded-[2rem] w-fit mb-6 group-hover:rotate-12 transition-transform">
              <Cpu className="w-8 h-8 text-secondary" />
            </div>
            <h4 className="font-black text-lg tracking-tight">Tech Operations</h4>
            <p className="text-sm opacity-60 font-bold uppercase tracking-widest mt-1">Analysis Specialist</p>
          </Block>
        </div>
      </div>
    </div>
  );
}
