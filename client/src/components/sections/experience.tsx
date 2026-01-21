import { Block } from "@/components/ui/block";
import { Briefcase, Trophy, Star, Award } from "lucide-react";

export function Experience() {
  return (
    <div className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-black tracking-tight">Work <span className="text-primary">History</span></h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-6">
            <Block className="building-block p-10 border-l-[12px] border-primary">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">Product Manager Intern</h3>
                <span className="text-[10px] font-bold opacity-40">DEPLOID X</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Assembling product roadmaps and facilitating cross-functional builds with precision.
              </p>
            </Block>

            <Block className="building-block p-10 border-l-[12px] border-secondary">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">Developer & Project Intern</h3>
                <span className="text-[10px] font-bold opacity-40">ASD INDIA SERVICES</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contributing to technical architecture and modular web construction.
              </p>
            </Block>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-black tracking-tight">Milestones</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Block variant="primary" className="building-block p-8 group">
              <div className="flex items-center gap-4">
                <Trophy className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-bold">Research Paper</h3>
                  <p className="text-[10px] font-bold opacity-40 uppercase">Journal • 2024</p>
                </div>
              </div>
            </Block>

            <Block variant="secondary" className="building-block p-8 group">
              <div className="flex items-center gap-4">
                <Star className="w-6 h-6 text-secondary" />
                <div>
                  <h3 className="text-lg font-bold">The Speakopedia</h3>
                  <p className="text-[10px] font-bold opacity-40 uppercase">Podcast Host</p>
                </div>
              </div>
            </Block>

            <Block variant="accent" className="building-block p-8 group">
              <div className="flex items-center gap-4">
                <Award className="w-6 h-6 text-accent" />
                <div>
                  <h3 className="text-lg font-bold">Certifications</h3>
                  <p className="text-[10px] font-bold opacity-40 uppercase">Industry Standards</p>
                </div>
              </div>
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
}
