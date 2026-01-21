import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  title?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
}

export function Block({ 
  children, 
  className, 
  delay = 0, 
  title, 
  variant = 'default'
}: BlockProps) {
  const accentColors = {
    default: "border-border",
    primary: "border-primary/50",
    secondary: "border-secondary/50",
    accent: "border-accent/50"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      className={cn(
        "tech-card p-6 group",
        accentColors[variant],
        className
      )}
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40 group-hover:border-primary transition-colors" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/40 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/40 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40 group-hover:border-primary transition-colors" />

      {title && (
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-primary/80">
              {title}
            </h3>
          </div>
          <div className="text-[8px] font-mono text-muted-foreground opacity-40">0x{delay + 1}f</div>
        </div>
      )}
      
      <div className="flex-1 relative z-10">
        {children}
      </div>

      {/* Subtle Scanline Effect */}
      <div className="scanline" />
    </motion.div>
  );
}
