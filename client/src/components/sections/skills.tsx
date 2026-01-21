import { Block } from "@/components/ui/block";
import { motion } from "framer-motion";

const skills = [
  { cat: "Product & BA", items: ["PRDs", "User Stories", "Product Docs", "Requirements", "Testing", "Workflows"] },
  { cat: "Tech", items: ["Python", "SQL", "Git", "Linux", "APIs", "Networking"] },
  { cat: "Tools", items: ["Jira", "Notion", "Figma", "Asana", "Trello", "Excel"] },
  { cat: "Soft Skills", items: ["Communication", "Thinking", "Problem Solving", "Leadership", "Speaking"] }
];

export function Skills() {
  return (
    <div className="mb-32">
      <h2 className="text-center font-display font-black text-4xl mb-12 uppercase tracking-tighter">Skill Block Wall</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skillSet, idx) => (
          <div key={idx} className="space-y-4">
            <Block title={skillSet.cat} className="h-full border-2" depth={false} delay={idx}>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="px-3 py-1.5 bg-muted rounded-md text-sm font-bold border-b-4 border-border/50"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </Block>
          </div>
        ))}
      </div>
    </div>
  );
}
