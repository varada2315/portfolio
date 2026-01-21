import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  title?: string;
  variant?: 'default' | 'purple' | 'teal' | 'peach' | 'beige';
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
    default: "bg-card border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]",
    purple: "pastel-purple shadow-[4px_4px_0px_0px_rgba(168,85,247,0.2)]",
    teal: "pastel-teal shadow-[4px_4px_0px_0px_rgba(20,184,166,0.2)]",
    peach: "pastel-peach shadow-[4px_4px_0px_0px_rgba(249,115,22,0.2)]",
    beige: "pastel-beige shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay * 0.1, 
        ease: [0.34, 1.56, 0.64, 1] 
      }}
      whileHover={bounce ? { 
        y: -8,
        rotate: 1,
        transition: { type: "spring", stiffness: 300, damping: 10 }
      } : {}}
      className={cn(
        "rounded-2xl border-2 p-6 flex flex-col relative overflow-hidden transition-all duration-300",
        variants[variant],
        bounce && "cursor-pointer",
        className
      )}
    >
      {/* Block "Nubs" (Lego style) */}
      <div className="absolute -top-3 left-1/4 -translate-x-1/2 w-6 h-6 rounded-full bg-current opacity-10" />
      <div className="absolute -top-3 left-3/4 -translate-x-1/2 w-6 h-6 rounded-full bg-current opacity-10" />

      {title && (
        <div className="mb-4 flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-current opacity-30 rotate-45" />
          <h3 className="text-xs font-display font-black uppercase tracking-widest opacity-60">
            {title}
          </h3>
        </div>
      )}
      
      <div className="flex-1 relative z-10">
        {children}
      </div>

      {/* Block Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:10px_10px] opacity-20" />
    </motion.div>
  );
}
