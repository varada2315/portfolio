import { Block } from "@/components/ui/block";
import { motion } from "framer-motion";

const categories = [
  { 
    title: "Product", 
    variant: "purple" as const,
    icon: "🧩", 
    skills: ["PRDs", "User Stories", "Docs", "Analysis", "Testing"] 
  },
  { 
    title: "Operations", 
    variant: "teal" as const,
    icon: "⚙️", 
    skills: ["Tasks", "Comms", "Timelines", "Reporting", "Process"] 
  },
  { 
    title: "Technical", 
    variant: "peach" as const,
    icon: "💻", 
    skills: ["Python", "SQL", "Git", "Linux", "APIs"] 
  },
  { 
    title: "Tools", 
    variant: "beige" as const,
    icon: "🛠️", 
    skills: ["Jira", "Notion", "Figma", "Asana", "Trello"] 
  },
  { 
    title: "Soft Skills", 
    variant: "default" as const,
    icon: "🤝", 
    skills: ["Comms", "Thinking", "Leadership", "Public Speaking"] 
  }
];

export function Skills() {
  return (
    <div className="mb-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold">Skill Blocks</h2>
        <div className="flex-1 h-px bg-border border-dashed border-t-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {categories.map((cat, idx) => (
          <Block 
            key={cat.title} 
            variant={cat.variant} 
            delay={idx} 
            title={cat.title}
            className="group"
          >
            <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-500">
              {cat.icon}
            </div>
            <div className="space-y-2">
              {cat.skills.map(skill => (
                <div key={skill} className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                  • {skill}
                </div>
              ))}
            </div>
          </Block>
        ))}
      </div>
    </div>
  );
}
