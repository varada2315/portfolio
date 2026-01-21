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
    <div className="mb-32 relative">
      {/* Tech Doodles Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03] text-primary">
        <svg 
          className="absolute -right-20 bottom-0 w-[400px] h-[400px]" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M40,40 L60,40 L60,60 L40,60 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="150" cy="60" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20,100 Q40,80 60,100 T100,100" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="flex items-center gap-6 mb-12 relative z-10">
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
          >
            <div className="space-y-3">
              {cat.skills.map(skill => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                  <span className="text-sm font-medium opacity-70">
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
