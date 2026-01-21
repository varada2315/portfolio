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
    default: "bg-card border-border",
    purple: "pastel-purple",
    teal: "pastel-teal",
    peach: "pastel-peach",
    beige: "pastel-beige"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: delay * 0.1, 
        ease: [0.23, 1, 0.32, 1] 
      }}
      whileHover={bounce ? { scale: 1.02, y: -4 } : {}}
      className={cn(
        "soft-block p-6 flex flex-col relative overflow-hidden",
        variants[variant],
        bounce && "cursor-pointer",
        className
      )}
    >
      {title && (
        <div className="mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-current opacity-40" />
          <h3 className="text-xs font-display font-bold uppercase tracking-widest opacity-60">
            {title}
          </h3>
        </div>
      )}
      
      <div className="flex-1 relative z-10">
        {children}
      </div>

      {/* Subtle Dotted Decoration */}
      <div className="absolute top-2 right-2 flex gap-1">
        <div className="w-1 h-1 rounded-full bg-current opacity-10" />
        <div className="w-1 h-1 rounded-full bg-current opacity-10" />
      </div>
    </motion.div>
  );
}
