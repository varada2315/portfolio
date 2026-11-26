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
    default: "bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
    primary: "bg-primary/[0.03] border-primary/20",
    secondary: "bg-secondary/[0.03] border-secondary/20",
    accent: "bg-accent/20 border-accent/30"
  };

  const content = (
    <>
      {title && (
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <h3 className="text-[10px] font-display font-black uppercase tracking-[0.2em] text-muted-foreground/80">
              {title}
            </h3>
          </div>
          <div className="h-px flex-1 ml-4 bg-gradient-to-r from-border to-transparent" />
        </div>
      )}
      
      <div className="flex-1 relative z-10">
        {children}
      </div>

      {/* Decorative inner glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
    </>
  );

  const blockClasses = cn(
    "rounded-[2rem] border border-white/80 p-8 flex flex-col relative overflow-hidden backdrop-blur-xl transition-all duration-500",
    variants[variant],
    bounce && "hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5",
    className
  );

  if (asChild) {
    return (
      <Component className={blockClasses}>
        {children}
      </Component>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      whileHover={bounce ? { y: -8, scale: 1.01 } : {}}
      className={blockClasses}
    >
      {content}
    </motion.div>
  );
}
