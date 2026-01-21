import { Block } from "@/components/ui/block";
import { Badge } from "@/components/ui/badge";

const categories = [
  { 
    title: "Product", 
    variant: "primary" as const,
    skills: ["PRDs", "User Stories", "Documentation", "Analysis", "QA Testing"] 
  },
  { 
    title: "Operations", 
    variant: "secondary" as const,
    skills: ["Task Management", "Stakeholders", "Tracking", "Reporting", "Optimization"] 
  },
  { 
    title: "Technical", 
    variant: "default" as const,
    skills: ["Python", "SQL", "Git", "Linux", "REST APIs"] 
  },
  { 
    title: "Stack", 
    variant: "default" as const,
    skills: ["Jira", "Notion", "Figma", "Asana", "Trello"] 
  },
  { 
    title: "Soft Skills", 
    variant: "accent" as const,
    skills: ["Communication", "Thinking", "Leadership", "Public Speaking"] 
  }
];

export function Skills() {
  return (
    <div className="mb-32">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-4xl font-black tracking-tight">Skills <span className="text-primary">Inventory</span></h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((cat, idx) => (
          <Block 
            key={cat.title} 
            variant={cat.variant} 
            delay={idx} 
            title={cat.title}
            className="glass-block"
          >
            <div className="space-y-3">
              {cat.skills.map(skill => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary/20" />
                  <span className="text-sm font-bold uppercase tracking-tight opacity-70">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </Block>
        ))}
      </div>
    </div>
  );
}
