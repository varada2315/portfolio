import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "User Funnel Analysis",
    category: "Data Analysis",
    desc: "A comprehensive analysis of user behavior through the conversion funnel.",
    link: "https://www.notion.so/User-Funnel-Analysis-Beginner-Project-2ef615dccdb4800e9c26df479063ee65",
    type: "notion"
  },
  {
    title: "Cyaphire",
    category: "AI Deployment Automation",
    desc: "Automated deployment platform for AI models designed to streamline operations.",
    link: "https://www.notion.so/Cyaphire-AI-Deployment-Automation-Platform-2ef615dccdb48062930bc75a2a05bc09",
    type: "notion"
  },
  {
    title: "Growitate Website",
    category: "Website Development",
    desc: "Full web development project for Growitate focusing on user experience.",
    link: "https://www.notion.so/Website-Development-at-Growitate-2ef615dccdb480a89476d80c463d5005",
    type: "notion"
  },
  {
    title: "Product Analyst Review",
    category: "Growitate",
    desc: "In-depth product analysis and review blog post for Growitate Web Builder.",
    link: "https://productvise.blogspot.com/2026/01/growitate-web-builder-changing-e.html",
    type: "blog"
  },
  {
    title: "Virtual Chess Board",
    category: "Game Dev",
    desc: "Interactive chess engine built with Python and Pygame.",
    link: "https://github.com/varada2315/chess_engine.git",
    type: "github"
  },
  {
    title: "Secure Document Signing",
    category: "Security",
    desc: "Digital signature verification system using cryptographic algorithms.",
    link: "https://github.com/varada2315/secure-doc-sign.git",
    type: "github"
  },
  {
    title: "Network Traffic Analysis",
    category: "Networking",
    desc: "Tool for analyzing and visualizing network traffic patterns.",
    link: "https://github.com/varada2315/network_traffic.git",
    type: "github"
  }
];

export function Projects() {
  return (
    <div id="projects" className="space-y-4 mb-16">
      <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-primary inline-block rounded-full"></span>
        Project Building Zone
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <Block key={idx} delay={idx + 1} className="flex flex-col h-full group">
            <div className="mb-2">
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm flex-grow mb-4">
              {project.desc}
            </p>
            <Button variant="outline" className="w-full justify-between" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project 
                {project.type === 'github' ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
              </a>
            </Button>
          </Block>
        ))}
      </div>
    </div>
  );
}
