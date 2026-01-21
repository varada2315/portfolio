import { Block } from "@/components/ui/block";
import { ExternalLink, Briefcase, Code, Rocket, Globe, Shield, Activity, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "User Funnel Analysis",
    category: "Data Analysis",
    icon: <BarChart3 className="w-10 h-10" />,
    link: "https://www.notion.so/User-Funnel-Analysis-Beginner-Project-2ef615dccdb4800e9c26df479063ee65",
    variant: "purple" as const
  },
  {
    title: "Cyaphire AI",
    category: "Automation",
    icon: <Rocket className="w-10 h-10" />,
    link: "https://www.notion.so/Cyaphire-AI-Deployment-Automation-Platform-2ef615dccdb48062930bc75a2a05bc09",
    variant: "teal" as const
  },
  {
    title: "Growitate Website",
    category: "Web Dev",
    icon: <Globe className="w-10 h-10" />,
    link: "https://www.notion.so/Website-Development-at-Growitate-2ef615dccdb480a89476d80c463d5005",
    variant: "peach" as const
  },
  {
    title: "Product Review",
    category: "Writing",
    icon: <Briefcase className="w-10 h-10" />,
    link: "https://productvise.blogspot.com/2026/01/growitate-web-builder-changing-e.html",
    variant: "beige" as const
  },
  {
    title: "Chess Engine",
    category: "Game Dev",
    icon: <Code className="w-10 h-10" />,
    link: "https://github.com/varada2315/chess_engine.git",
    variant: "purple" as const
  },
  {
    title: "Secure Doc Sign",
    category: "Security",
    icon: <Shield className="w-10 h-10" />,
    link: "https://github.com/varada2315/secure-doc-sign.git",
    variant: "teal" as const
  },
  {
    title: "Network Analysis",
    category: "Networking",
    icon: <Activity className="w-10 h-10" />,
    link: "https://github.com/varada2315/network_traffic.git",
    variant: "peach" as const
  }
];

export function Projects() {
  return (
    <div id="projects" className="mb-32 scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
        <h2 className="text-5xl font-black tracking-tighter">Project <span className="text-primary">Tower</span></h2>
        <div className="flex-1 h-2 bg-primary/10 rounded-full hidden md:block" />
        <div className="px-6 py-2 bg-primary/10 rounded-xl text-primary font-black text-xs uppercase tracking-widest">Assembled Gallery</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Block 
            key={idx} 
            variant={project.variant} 
            delay={idx} 
            className="h-full flex flex-col justify-between p-10 border-4"
          >
            <div>
              <div className="p-5 bg-white/40 rounded-2xl w-fit mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <h3 className="text-2xl font-black mb-2 leading-tight tracking-tight">{project.title}</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-8">{project.category}</p>
            </div>
            
            <Button size="lg" variant="ghost" className="w-full bg-white/40 hover:bg-white/80 border-2 border-white/20 rounded-2xl font-black uppercase text-xs tracking-widest h-14 active:translate-y-1 transition-all" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Inspect Module <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </Block>
        ))}
        
        {/* Empty Placeholder Block */}
        <div className="hidden lg:flex items-center justify-center border-4 border-dashed border-primary/20 rounded-2xl p-10 opacity-40">
           <span className="font-black text-sm uppercase tracking-widest text-primary/40">Next Module Loading...</span>
        </div>
      </div>
    </div>
  );
}
