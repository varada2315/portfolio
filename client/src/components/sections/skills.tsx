import { Block } from "@/components/ui/block";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Product",
    icon: "🧩",
    skills: ["PRDs", "User Stories", "Product Docs", "Requirements", "Testing", "Workflows"]
  },
  {
    title: "Operations",
    icon: "⚙",
    skills: ["Task Mgmt", "Stakeholder Comms", "Timeline Tracking", "Reporting", "Process Opt", "Collaboration"]
  },
  {
    title: "Technical",
    icon: "💻",
    skills: ["Python", "SQL", "Git", "Linux", "APIs", "Networking"]
  },
  {
    title: "Tools",
    icon: "🛠",
    skills: ["Jira", "Notion", "Figma", "Asana", "Trello", "Excel"]
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    skills: ["Communication", "Thinking", "Problem Solving", "Leadership", "Public Speaking"]
  }
];

export function Skills() {
  return (
    <div className="mb-24">
      <motion.h2 
        className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="w-1 h-8 bg-gradient-to-b from-primary via-primary to-secondary rounded-full"></span>
        Micro Block Wall
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 auto-rows-max">
        {skillCategories.map((category, catIdx) => (
          <motion.div 
            key={category.title}
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1 }}
          >
            {/* Category Header Block */}
            <Block 
              className="p-3 text-center" 
              tilt={true}
              delay={catIdx}
              title={category.title}
            >
              <div className="text-2xl mb-1">{category.icon}</div>
            </Block>

            {/* Skills Blocks - Tetris style */}
            <div className="space-y-2">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 }}
                >
                  <div className="p-2 rounded-lg bg-card border border-primary/30 hover:border-primary/80 text-center text-xs font-medium text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-primary/20">
                    {skill}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
