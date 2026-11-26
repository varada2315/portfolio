import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BuilderLogo({ src, className }: { src: string, className?: string }) {
  return (
    <div className={cn("relative w-12 h-12 flex items-center justify-center bg-white shadow-xl rounded-2xl border border-border/50 p-2", className)}>
      <img 
        src={src} 
        alt="Varada Kumbhar Logo"
        className="w-full h-full object-contain"
      />
      <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl -z-10 group-hover:bg-primary/20 transition-colors" />
    </div>
  );
}
