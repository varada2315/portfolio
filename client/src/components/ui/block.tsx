import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  title?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  bounce?: boolean;
}

export function Block({ 
  children, 
  className, 
  delay = 0, 
  title, 
  variant = 'default',
  bounce = true
}: BlockProps) {
  const variants = {
    default: "bg-card border-border shadow-[4px_4px_0px_0px_hsl(var(--border))]",
    primary: "bg-primary border-primary shadow-[4px_4px_0px_0px_hsl(var(--primary-foreground)/0.3)] text-primary-foreground",
    secondary: "bg-secondary border-secondary shadow-[4px_4px_0px_0px_hsl(var(--secondary-foreground)/0.3)] text-secondary-foreground",
    accent: "bg-accent border-accent shadow-[4px_4px_0px_0px_hsl(var(--accent-foreground)/0.3)] text-accent-foreground"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: delay * 0.05 }}
      whileHover={bounce ? { x: 2, y: 2, boxShadow: "2px 2px 0px 0px currentColor" } : {}}
      className={cn(
        "border-2 p-6 flex flex-col relative overflow-hidden transition-all duration-200",
        variants[variant],
        className
      )}
    >
      {title && (
        <div className="mb-4 flex items-center gap-2">
          <div className={cn(
            "w-1 h-4",
            variant === 'default' ? "bg-primary" : "bg-current opacity-50"
          )} />
          <h3 className={cn(
            "text-xs font-display font-bold uppercase tracking-widest",
            variant === 'default' ? "text-muted-foreground" : "text-current opacity-80"
          )}>
            {title}
          </h3>
        </div>
      )}
      
      <div className="flex-1 relative z-10">
        {children}
      </div>
      
      {/* Block Connector Visual */}
      <div className="absolute top-2 right-2 flex gap-1 opacity-20">
        <div className="w-1.5 h-1.5 bg-current rounded-full" />
        <div className="w-1.5 h-1.5 bg-current rounded-full" />
      </div>
    </motion.div>
  );
}
