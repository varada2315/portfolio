import { Block } from "@/components/ui/block";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const categories = [
  { 
    title: "Product", 
    variant: "primary" as const,
    skills: ["PRDs", "User Stories", "Documentation", "Analysis", "QA Testing"] 
  },
  { 
    title: "Ops", 
    variant: "secondary" as const,
    skills: ["Task Mgmt", "Stakeholder", "Tracking", "Reporting", "Process"] 
  },
  { 
    title: "Tech", 
    variant: "accent" as const,
    skills: ["Python", "SQL", "Git", "Linux", "REST APIs"] 
  },
  { 
    title: "Stack", 
    variant: "default" as const,
    skills: ["Jira", "Notion", "Figma", "Asana", "Trello"] 
  },
  { 
    title: "Core", 
    variant: "default" as const,
    skills: ["Communications", "Thinking", "Leadership", "Public Speaking"] 
  }
];

export function Skills() {
  return (
    <div className="mb-32">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl font-black tracking-tighter">TOOL <span className="text-primary">CHAIN</span></h2>
        <div className="flex-1 h-px bg-white/5" />
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
                <div key={skill} className="flex items-center gap-2 group cursor-default">
                  <div className="w-1 h-1 bg-white/20 group-hover:bg-primary transition-colors" />
                  <span className="text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity">
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
