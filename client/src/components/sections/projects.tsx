import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "User Funnel Analysis",
    category: "Data Analysis",
    desc: "Comprehensive analysis of user behavior through the conversion funnel.",
    link: "https://www.notion.so/User-Funnel-Analysis-Beginner-Project-2ef615dccdb4800e9c26df479063ee65",
    type: "notion",
    color: "from-purple-500/20"
  },
  {
    title: "Cyaphire",
    category: "AI Deployment",
    desc: "Automated platform for AI model deployment and operations.",
    link: "https://www.notion.so/Cyaphire-AI-Deployment-Automation-Platform-2ef615dccdb48062930bc75a2a05bc09",
    type: "notion",
    color: "from-cyan-500/20"
  },
  {
    title: "Growitate Website",
    category: "Web Development",
    desc: "Full web development project focused on user experience.",
    link: "https://www.notion.so/Website-Development-at-Growitate-2ef615dccdb480a89476d80c463d5005",
    type: "notion",
    color: "from-purple-500/20"
  },
  {
    title: "Product Analysis Review",
    category: "Analysis",
    desc: "In-depth product analysis for Growitate Web Builder.",
    link: "https://productvise.blogspot.com/2026/01/growitate-web-builder-changing-e.html",
    type: "blog",
    color: "from-cyan-500/20"
  },
  {
    title: "Virtual Chess Board",
    category: "Game Dev",
    desc: "Interactive chess engine with Python and Pygame.",
    link: "https://github.com/varada2315/chess_engine.git",
    type: "github",
    color: "from-purple-500/20"
  },
  {
    title: "Secure Doc Signing",
    category: "Security",
    desc: "Digital signature verification using cryptography.",
    link: "https://github.com/varada2315/secure-doc-sign.git",
    type: "github",
    color: "from-cyan-500/20"
  },
  {
    title: "Network Traffic Analysis",
    category: "Networking",
    desc: "Tool for analyzing and visualizing network patterns.",
    link: "https://github.com/varada2315/network_traffic.git",
    type: "github",
    color: "from-purple-500/20"
  }
];

export function Projects() {
  return (
    <div id="projects" className="mb-24 scroll-mt-24">
      <motion.h2 
        className="text-2xl md:text-3xl font-display font-bold mb-12 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="w-1 h-8 bg-gradient-to-b from-primary via-primary to-secondary rounded-full"></span>
        Project Tower
      </motion.h2>

      <div className="relative">
        {/* Vertical Connector Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-secondary opacity-30 transform -translate-x-1/2" />

        {/* Projects Grid with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: idx * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              style={{
                gridColumn: idx % 2 === 0 ? "1" : "2",
              }}
              className={idx % 2 === 1 ? "md:translate-x-4 md:translate-y-12" : "-md:translate-x-4"}
            >
              <Block 
                className={`p-6 bg-gradient-to-br ${project.color} to-card border-primary/30 h-full`}
                tilt={true}
                lift={true}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">#{idx + 1}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {project.desc}
                  </p>

                  <Button 
                    size="sm"
                    className="w-full gap-2 bg-primary hover:bg-primary/90 text-card font-medium shadow-lg shadow-primary/40"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      {project.type === 'github' ? <Github className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
                    </a>
                  </Button>
                </div>
              </Block>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
