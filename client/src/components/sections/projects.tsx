import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, Globe, Shield, Activity, BarChart3, Rocket } from "lucide-react";

const projects = [
  {
    title: "User Funnel Analysis",
    category: "Data Analysis",
    icon: <BarChart3 className="w-8 h-8" />,
    link: "https://www.notion.so/User-Funnel-Analysis-Beginner-Project-2ef615dccdb4800e9c26df479063ee65",
    variant: "primary" as const
  },
  {
    title: "Cyaphire AI",
    category: "Product Case Study",
    icon: <Rocket className="w-8 h-8" />,
    link: "https://www.notion.so/Cyaphire-AI-Deployment-Automation-Platform-2ef615dccdb48062930bc75a2a05bc09",
    variant: "secondary" as const
  },
  {
    title: "Growitate Website",
    category: "Web Development",
    icon: <Globe className="w-8 h-8" />,
    link: "https://www.notion.so/Website-Development-at-Growitate-2ef615dccdb480a89476d80c463d5005",
    variant: "default" as const
  },
  {
    title: "Product Analysis",
    category: "Review",
    icon: <FileText className="w-8 h-8" />,
    link: "https://productvise.blogspot.com/2026/01/growitate-web-builder-changing-e.html",
    variant: "accent" as const
  },
  {
    title: "Virtual Chess Board",
    category: "Game Dev",
    icon: <Activity className="w-8 h-8" />,
    link: "https://github.com/varada2315/chess_engine.git",
    variant: "primary" as const
  },
  {
    title: "Secure Doc Signing",
    category: "Security",
    icon: <Shield className="w-8 h-8" />,
    link: "https://github.com/varada2315/secure-doc-sign.git",
    variant: "secondary" as const
  }
];

export function Projects() {
  return (
    <div id="projects" className="mb-32 scroll-mt-32 relative">
      {/* Tech Doodles Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03] text-primary">
        <svg 
          className="absolute -left-20 bottom-0 w-[500px] h-[500px]" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="140" y="120" width="30" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M80,150 L100,170 M100,150 L80,170" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10,150 C30,150 30,130 50,130" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16 relative z-10">
        <h2 className="text-4xl font-black tracking-tight">Project <span className="text-primary">Showcase</span></h2>
        <div className="flex-1 h-px bg-border hidden md:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <Block 
            key={idx} 
            variant={project.variant} 
            delay={idx} 
            className="h-full flex flex-col justify-between p-10"
          >
            <div>
              <div className="p-4 bg-white rounded-2xl w-fit mb-6 shadow-sm border border-border">
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-8">{project.category}</p>
            </div>
            
            <Button size="lg" variant="ghost" className="w-full bg-white/50 hover:bg-white border border-border rounded-2xl font-bold text-sm h-14" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Details <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </Block>
        ))}
      </div>
    </div>
  );
}
