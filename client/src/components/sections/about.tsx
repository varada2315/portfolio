import { Block } from "@/components/ui/block";
import { motion } from "framer-motion";

export function About() {
  return (
    <div id="about" className="mb-24 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <Block title="Our Story" className="h-full p-10">
            <h2 className="text-3xl font-bold mb-6">Hello! I'm Varada. 🎨</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a <strong>B.Tech ENTC student (2022–2026)</strong> who treats product management 
                like a creative playground. I love gathering requirements and sketching out 
                workflows to see how pieces fit together.
              </p>
              <p>
                When I'm not documenting products, you'll find me hosting my podcast 
                <span className="text-primary font-semibold"> The Speakopedia</span> or exploring 
                the latest tech doodles.
              </p>
            </div>
          </Block>
        </div>

        <div className="md:col-span-4 space-y-6">
          <Block variant="purple" delay={1} className="p-8 text-center">
            <div className="text-4xl mb-3">🎤</div>
            <h4 className="font-bold">Podcast Host</h4>
            <p className="text-sm opacity-80">The Speakopedia</p>
          </Block>
          
          <Block variant="teal" delay={2} className="p-8 text-center">
            <div className="text-4xl mb-3">💻</div>
            <h4 className="font-bold">Tech Lover</h4>
            <p className="text-sm opacity-80">Continuous Learner</p>
          </Block>
        </div>
      </div>
    </div>
  );
}
