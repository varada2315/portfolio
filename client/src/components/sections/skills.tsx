import { Block } from "@/components/ui/block";

const categories = [
  { 
    title: "Product", 
    variant: "primary" as const,
    skills: ["PRDs & Roadmap", "User Stories", "Analytical Insight", "QA Lifecycle", "UAT Testing"] 
  },
  { 
    title: "Operations", 
    variant: "secondary" as const,
    skills: ["Task Management", "Stakeholder Sync", "Project Tracking", "KPI Reporting", "Process Optimization"] 
  },
  { 
    title: "Technical", 
    variant: "default" as const,
    skills: ["Python (Core)", "SQL Queries", "Version Control", "Linux Systems", "API Integration"] 
  },
  { 
    title: "Toolkit", 
    variant: "default" as const,
    skills: ["Jira / Confluence", "Notion Architect", "Figma Design", "Asana Workflow", "MS Excel Power"] 
  },
  { 
    title: "Impact", 
    variant: "accent" as const,
    skills: ["Communication", "Systems Thinking", "Team Leadership", "Data Visualization"] 
  }
];

export function Skills() {
  return (
    <div className="mb-40 relative">
      <div className="flex items-center gap-6 mb-16 relative z-10">
        <h2 className="text-4xl font-black tracking-tight uppercase tracking-[0.1em]">
          Technical <span className="text-primary">Inventory</span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {categories.map((cat, idx) => (
          <Block 
            key={cat.title} 
            variant={cat.variant} 
            delay={idx} 
            title={cat.title}
            className="group hover:bg-white transition-colors"
          >
            <div className="space-y-4">
              {cat.skills.map(skill => (
                <div key={skill} className="flex items-center gap-3 group/item">
                  <div className="w-1 h-1 rounded-full bg-primary/30 group-hover/item:bg-primary group-hover/item:scale-150 transition-all" />
                  <span className="text-sm font-bold tracking-tight opacity-60 group-hover/item:opacity-100 transition-opacity">
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
