import { Block } from "@/components/ui/block";
import { Badge } from "@/components/ui/badge";

const skills = {
  product: [
    "PRDs", "User Stories", "Product Documentation", "Requirement Analysis", 
    "Product Testing", "User Workflow Analysis"
  ],
  operations: [
    "Task Management", "Stakeholder Communication", "Timeline Tracking", 
    "Reporting", "Process Optimization", "Cross-functional collaboration"
  ],
  technical: [
    "Python", "SQL", "Git", "Linux", "APIs (basic)", 
    "Networking", "CI/CD fundamentals", "Cloud basics"
  ],
  tools: [
    "Jira", "Notion", "Figma (basic)", "Asana", 
    "Trello", "MS Excel (Pivot, VLOOKUP)"
  ],
  soft: [
    "Communication", "Structured thinking", "Problem-solving", 
    "Leadership", "Public speaking"
  ]
};

export function Skills() {
  return (
    <div className="space-y-4 mb-16">
      <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-primary inline-block rounded-full"></span>
        Skill Blocks
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Block title="🧩 Product & Business Analysis" delay={1}>
          <div className="flex flex-wrap gap-2">
            {skills.product.map(skill => (
              <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-white transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </Block>

        <Block title="⚙ Project & Operations" delay={2}>
          <div className="flex flex-wrap gap-2">
            {skills.operations.map(skill => (
              <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-white transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </Block>

        <Block title="💻 Technical Skills" delay={3}>
          <div className="flex flex-wrap gap-2">
            {skills.technical.map(skill => (
              <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-white transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </Block>

        <Block title="🛠 Tools" delay={4}>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map(skill => (
              <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-white transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </Block>

        <Block title="🤝 Soft Skills" delay={5}>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map(skill => (
              <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-white transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </Block>
      </div>
    </div>
  );
}
