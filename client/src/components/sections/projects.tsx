import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  { title: "User Funnel Analysis", cat: "Data Analysis", link: "https://www.notion.so/User-Funnel-Analysis-Beginner-Project-2ef615dccdb4800e9c26df479063ee65" },
  { title: "Cyaphire AI", cat: "Automation", link: "https://www.notion.so/Cyaphire-AI-Deployment-Automation-Platform-2ef615dccdb48062930bc75a2a05bc09" },
  { title: "Growitate Website", cat: "Web Dev", link: "https://www.notion.so/Website-Development-at-Growitate-2ef615dccdb480a89476d80c463d5005" },
  { title: "Product Review", cat: "Analysis", link: "https://productvise.blogspot.com/2026/01/growitate-web-builder-changing-e.html" },
  { title: "Chess Engine", cat: "Game Dev", link: "https://github.com/varada2315/chess_engine.git" },
  { title: "Secure Doc Sign", cat: "Security", link: "https://github.com/varada2315/secure-doc-sign.git" },
  { title: "Network Analysis", cat: "Networking", link: "https://github.com/varada2315/network_traffic.git" }
];

export function Projects() {
  return (
    <div id="projects" className="mb-32 scroll-mt-24">
      <h2 className="text-center font-display font-black text-4xl mb-16 uppercase tracking-tighter">Product Tower</h2>
      
      <div className="max-w-xl mx-auto space-y-4 relative">
        <div className="absolute left-[-40px] top-0 bottom-0 w-1 bg-border/20 border-l-2 border-dashed border-border" />
        
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={idx % 2 === 0 ? "ml-4" : "ml-8"}
          >
            <Block className="p-8 border-2 group" depth={true}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">{project.cat}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <Button size="sm" className="real-block bg-primary text-primary-foreground font-bold px-6 border-b-4 border-primary-foreground/10" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View</a>
                </Button>
              </div>
            </Block>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
