import { Block } from "@/components/ui/block";
import { Award, Medal, Trophy, Star } from "lucide-react";

export function Experience() {
  return (
    <div className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Experience Section */}
        <div className="lg:col-span-7 space-y-10">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-black tracking-tighter">Work <span className="text-primary">History</span></h2>
            <div className="flex-1 h-1 bg-primary/10 rounded-full" />
          </div>

          <div className="space-y-6">
            <Block className="p-10 border-l-[12px] border-primary" variant="beige">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black tracking-tight">Product Manager Intern</h3>
                <span className="px-3 py-1 bg-primary/10 text-primary font-black text-[10px] rounded-full uppercase tracking-widest">Active</span>
              </div>
              <p className="text-primary font-black mb-4 uppercase tracking-widest text-xs">Deploid X</p>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Assembling product roadmaps and facilitating cross-functional builds with precision.
              </p>
            </Block>

            <Block className="p-10 border-l-[12px] border-secondary" variant="beige">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black tracking-tight">Developer & Project Intern</h3>
                <span className="px-3 py-1 bg-secondary/10 text-secondary font-black text-[10px] rounded-full uppercase tracking-widest">Completed</span>
              </div>
              <p className="text-secondary font-black mb-4 uppercase tracking-widest text-xs">ASD India Services</p>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Contributing to technical architecture and modular web construction.
              </p>
            </Block>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="lg:col-span-5 space-y-10">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-black tracking-tighter">Trophy <span className="text-secondary">Case</span></h2>
            <div className="flex-1 h-1 bg-secondary/10 rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Block variant="peach" className="p-8 group">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/40 rounded-2xl group-hover:scale-125 transition-transform">
                  <Trophy className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">Research Paper</h3>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest mt-1">Int. Journal • 2024</p>
                </div>
              </div>
            </Block>

            <Block variant="purple" className="p-8 group">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/40 rounded-2xl group-hover:scale-125 transition-transform">
                  <Star className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">Podcast Host</h3>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest mt-1">The Speakopedia</p>
                </div>
              </div>
            </Block>

            <Block variant="teal" className="p-8 group">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/40 rounded-2xl group-hover:scale-125 transition-transform">
                  <Medal className="w-8 h-8 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">Certifications</h3>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest mt-1">Industry Standard</p>
                </div>
              </div>
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
}
