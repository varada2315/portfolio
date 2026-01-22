import { Block } from "@/components/ui/block";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Python For Data Science",
    issuer: "NPTEL",
    variant: "primary" as const
  },
  {
    title: "Python",
    issuer: "Hackerrank",
    variant: "secondary" as const
  },
  {
    title: "Programming in C",
    issuer: "Cisco Netacad",
    variant: "default" as const
  },
  {
    title: "Cybersecurity Virtual Job Simulation",
    issuer: "Deloitte (Forage)",
    variant: "accent" as const
  },
  {
    title: "Identity and Access Management Job Simulation",
    issuer: "Tata Group (Forage)",
    variant: "primary" as const
  },
  {
    title: "Cisco CCNA",
    issuer: "Udemy",
    variant: "secondary" as const
  }
];

export function Certifications() {
  return (
    <div id="certifications" className="mb-32 scroll-mt-32 relative">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03] text-primary">
        <svg 
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] hologram-glow" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
          <path d="M50 100 L150 100 M100 50 L100 150" stroke="currentColor" strokeWidth="1" />
          <rect x="75" y="75" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="flex items-center gap-6 mb-12 relative z-10">
        <h2 className="text-4xl font-black tracking-tight">Technical <span className="text-primary">Certifications</span></h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {certifications.map((cert, idx) => (
          <Block 
            key={idx} 
            variant={cert.variant} 
            delay={idx} 
            className="p-8 h-full flex flex-col justify-between group hover-lift"
          >
            <div>
              <div className="p-3 bg-white rounded-xl w-fit mb-6 shadow-sm border border-border group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-tight leading-tight">{cert.title}</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">{cert.issuer}</p>
            </div>
          </Block>
        ))}
      </div>
    </div>
  );
}
