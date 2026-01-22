import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

interface BlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  title?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  bounce?: boolean;
  asChild?: boolean;
}

export function Block({ 
  children, 
  className, 
  delay = 0, 
  title, 
  variant = 'default',
  bounce = true,
  asChild = false
}: BlockProps) {
  const Component = asChild ? Slot : motion.div;
  const variants = {
    default: "bg-white border-border shadow-sm",
    primary: "bg-primary/5 border-primary/20 shadow-sm",
    secondary: "bg-secondary/5 border-secondary/20 shadow-sm",
    accent: "bg-accent/20 border-accent/30 shadow-sm"
  };

  const content = (
    <>
      {title && (
        <div className="mb-4 flex items-center gap-2">
          <div className="w-1 h-4 rounded-full bg-primary" />
          <h3 className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground">
            {title}
          </h3>
        </div>
      )}
      
      <div className="flex-1 relative z-10">
        {children}
      </div>
    </>
  );

  if (asChild) {
    return (
      <Component
        className={cn(
          "rounded-2xl border p-6 flex flex-col relative overflow-hidden transition-all duration-300",
          variants[variant],
          className
        )}
      >
        {children}
      </Component>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={bounce ? { y: -5 } : {}}
      className={cn(
        "rounded-2xl border p-6 flex flex-col relative overflow-hidden transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {content}
    </motion.div>
  );
}
