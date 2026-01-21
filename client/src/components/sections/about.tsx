import { Block } from "@/components/ui/block";
import { Podcast, BookOpen, Search, Code, Lightbulb } from "lucide-react";

export function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Block colSpan={2} title="About Me" className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed text-muted-foreground">
          I am a <strong>B.Tech ENTC student (2022–2026)</strong> and a fresher passionate about 
          Product Operations & Business Analysis. I specialize in requirement gathering, 
          documentation, and workflow analysis.
        </p>
        <p className="text-muted-foreground mt-4">
          Just like a product manager acts as an architect, I believe in structured thinking 
          and precise execution to build scalable solutions.
        </p>
      </Block>

      <Block title="Highlights" className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-md text-primary">
            <Podcast className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Podcast Host</h4>
            <p className="text-xs text-muted-foreground">The Speakopedia</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-md text-primary">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Analysis</h4>
            <p className="text-xs text-muted-foreground">Workflow & Requirements</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-md text-primary">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Learning</h4>
            <p className="text-xs text-muted-foreground">Continuous Tech Learner</p>
          </div>
        </div>
      </Block>
    </div>
  );
}
