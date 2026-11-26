import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, Globe, Shield, Activity, BarChart3, Rocket, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "User Funnel Analysis",
    description: "Deep dive into user conversion metrics and bottleneck identification using behavioral data.",
    category: "Operations",
    icon: <BarChart3 className="w-8 h-8" />,
    link: "https://www.notion.so/User-Funnel-Analysis-Beginner-Project-2ef615dccdb4800e9c26df479063ee65",
    variant: "primary" as const
  },
  {
    title: "Cyaphire AI",
    description: "Revolutionizing deployment automation through intelligent platform orchestration and UI.",
    category: "Case Study",
    icon: <Rocket className="w-8 h-8" />,
    link: "https://www.notion.so/Cyaphire-AI-Deployment-Automation-Platform-2ef615dccdb48062930bc75a2a06bc09",
    variant: "secondary" as const
  },
  {
    title: "Growitate Engine",
    description: "End-to-end management of a modern web builder platform, focusing on user scalability.",
    category: "Management",
    icon: <Globe className="w-8 h-8" />,
    link: "https://www.notion.so/Website-Development-at-Growitate-2ef615dccdb480a89476d80c463d5005",
    variant: "default" as const
  },
  {
    title: "Eco-System Analysis",
    description: "Holistic review of web builder efficiency and market penetration strategies.",
    category: "Strategy",
    icon: <FileText className="w-8 h-8" />,
    link: "https://productvise.blogspot.com/2026/01/growitate-web-builder-changing-e.html",
    variant: "accent" as const
  },
  {
    title: "Virtual Engine",
    description: "A high-performance logic-based system for simulating complex strategic maneuvers.",
    category: "Development",
    icon: <Activity className="w-8 h-8" />,
    link: "https://github.com/varada2315/chess_engine.git",
    variant: "primary" as const
  },
  {
    title: "Zero-Trust Signing",
    description: "Cryptographically secure document verification system for modern enterprises.",
    category: "Security",
    icon: <Shield className="w-8 h-8" />,
    link: "https://github.com/varada2315/secure-doc-sign.git",
    variant: "secondary" as const
  }
];

export function Projects() {
  return (
    <div id="projects" className="mb-40 scroll-mt-32 relative">
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-20 relative z-10">
        <h2 className="text-4xl font-black tracking-tight uppercase tracking-[0.1em]">
          Project <span className="text-primary">Portfolio</span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent hidden md:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Block 
            key={idx} 
            variant={project.variant} 
            delay={idx} 
            className="group h-full flex flex-col justify-between p-10 hover:bg-white/80 transition-colors border-2"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="p-5 bg-white shadow-xl rounded-[2rem] w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <div className="text-primary">
                    {project.icon}
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-[9px] font-black uppercase tracking-widest text-primary">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-3xl font-black tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground font-medium text-sm leading-relaxed line-clamp-2 italic">
                  "{project.description}"
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <Button 
                variant="outline" 
                className="w-full h-16 rounded-[1.5rem] border-2 border-border/50 font-black text-[10px] uppercase tracking-[0.2em] group-hover:border-primary group-hover:bg-primary/5 transition-all" 
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  Analyze Details <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>
          </Block>
        ))}
      </div>
    </div>
  );
}
