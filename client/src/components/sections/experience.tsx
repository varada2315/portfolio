import { Block } from "@/components/ui/block";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border border-dashed border-t-2" />
          </div>

          <Block className="p-8 border-l-8 border-primary">
            <h3 className="text-xl font-bold mb-1">Product Manager Intern</h3>
            <p className="text-primary font-semibold mb-3">Deploid X</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Managing product lifecycles and coordinating between teams to build cool things.
            </p>
          </Block>

          <Block className="p-8 border-l-8 border-secondary">
            <h3 className="text-xl font-bold mb-1">Developer & Project Intern</h3>
            <p className="text-secondary font-semibold mb-3">ASD India Services</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Working on web solutions and learning the ropes of project delivery.
            </p>
          </Block>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold">Achievements</h2>
            <div className="flex-1 h-px bg-border border-dashed border-t-2" />
          </div>

          <Block variant="peach" className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">🏆</span>
              <h3 className="text-xl font-bold">Research Paper</h3>
            </div>
            <p className="text-sm opacity-80 mb-1">International Journal Publication</p>
            <p className="text-xs font-mono opacity-60">2024 • Academic Excellence</p>
          </Block>

          <Block variant="purple" className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">🏅</span>
              <h3 className="text-xl font-bold">Podcast Creator</h3>
            </div>
            <p className="text-sm opacity-80 mb-1">The Speakopedia</p>
            <p className="text-xs font-mono opacity-60">Top Voice in Tech Growth</p>
          </Block>
        </div>
      </div>
    </div>
  );
}
