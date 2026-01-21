import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "User Funnel Analysis",
    category: "Data Analysis",
    emoji: "📊",
    link: "https://www.notion.so/User-Funnel-Analysis-Beginner-Project-2ef615dccdb4800e9c26df479063ee65",
    variant: "purple" as const
  },
  {
    title: "Cyaphire AI",
    category: "Automation",
    emoji: "🤖",
    link: "https://www.notion.so/Cyaphire-AI-Deployment-Automation-Platform-2ef615dccdb48062930bc75a2a05bc09",
    variant: "teal" as const
  },
  {
    title: "Growitate Website",
    category: "Web Dev",
    emoji: "🌐",
    link: "https://www.notion.so/Website-Development-at-Growitate-2ef615dccdb480a89476d80c463d5005",
    variant: "peach" as const
  },
  {
    title: "Product Review",
    category: "Writing",
    emoji: "✍️",
    link: "https://productvise.blogspot.com/2026/01/growitate-web-builder-changing-e.html",
    variant: "beige" as const
  },
  {
    title: "Chess Engine",
    category: "Game Dev",
    emoji: "♟️",
    link: "https://github.com/varada2315/chess_engine.git",
    variant: "purple" as const
  },
  {
    title: "Secure Doc Sign",
    category: "Security",
    emoji: "🔒",
    link: "https://github.com/varada2315/secure-doc-sign.git",
    variant: "teal" as const
  },
  {
    title: "Network Analysis",
    category: "Networking",
    emoji: "🛰️",
    link: "https://github.com/varada2315/network_traffic.git",
    variant: "peach" as const
  }
];

export function Projects() {
  return (
    <div id="projects" className="mb-24 scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold">The Main Tower</h2>
        <div className="flex-1 h-px bg-border border-dashed border-t-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <Block 
            key={idx} 
            variant={project.variant} 
            delay={idx} 
            className="h-full flex flex-col justify-between p-8"
          >
            <div>
              <div className="text-4xl mb-4">{project.emoji}</div>
              <h3 className="text-xl font-bold mb-1 leading-tight">{project.title}</h3>
              <p className="text-xs font-medium uppercase tracking-wider opacity-60 mb-6">{project.category}</p>
            </div>
            
            <Button size="sm" variant="ghost" className="w-full bg-white/40 hover:bg-white/60 border border-white/20 rounded-xl" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project <ExternalLink className="ml-2 w-3 h-3" />
              </a>
            </Button>
          </Block>
        ))}
      </div>
    </div>
  );
}
