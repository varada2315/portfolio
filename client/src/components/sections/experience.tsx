import { Block } from "@/components/ui/block";
import { Briefcase, Award, Code, Podcast } from "lucide-react";

export function Experience() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
      <div className="space-y-4">
        <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
          <span className="w-8 h-1 bg-primary inline-block rounded-full"></span>
          Experience
        </h2>
        
        <Block className="border-l-4 border-l-primary">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-muted rounded-full">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Product Manager Intern</h3>
              <p className="text-primary font-medium">Deploid X</p>
              <p className="text-sm text-muted-foreground mt-2">
                Managed product lifecycles and coordinated with cross-functional teams to deliver features.
              </p>
            </div>
          </div>
        </Block>

        <Block className="border-l-4 border-l-muted-foreground/30">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-muted rounded-full">
              <Code className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Developer & Project Intern</h3>
              <p className="text-primary font-medium">ASD India Services</p>
              <p className="text-sm text-muted-foreground mt-2">
                Developed web solutions and assisted in project management tasks.
              </p>
            </div>
          </div>
        </Block>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
          <span className="w-8 h-1 bg-primary inline-block rounded-full"></span>
          Achievements
        </h2>
        
        <Block>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-yellow-500/10 rounded-full">
              <Award className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Research Paper</h3>
              <p className="text-sm text-muted-foreground">Published in International Journal</p>
              <div className="mt-2 text-xs font-mono bg-muted p-2 rounded">
                Title: [Research Paper Title]<br/>
                Year: 2024
              </div>
            </div>
          </div>
        </Block>

        <Block>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-500/10 rounded-full">
              <Podcast className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Podcast Host</h3>
              <p className="text-sm text-muted-foreground">The Speakopedia</p>
              <p className="text-sm text-muted-foreground mt-1">Hosting discussions on tech and growth.</p>
            </div>
          </div>
        </Block>
      </div>
    </div>
  );
}
