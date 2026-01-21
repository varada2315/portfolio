import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode, useRef } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

interface BlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  title?: string;
  tilt?: boolean;
  stagger?: number;
  lift?: boolean;
}

export function Block({ 
  children, 
  className, 
  delay = 0, 
  title, 
  tilt = true,
  stagger = 0,
  lift = false
}: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(ref, tilt);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: (delay + stagger) * 0.08, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      style={tilt ? {
        rotateX: y,
        rotateY: x,
        transformStyle: "preserve-3d"
      } : {}}
      whileHover={lift ? { y: -16 } : {}}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-card border border-border/50 p-6 transition-all duration-300 flex flex-col",
        "block-3d block-3d-hover",
        lift && "cursor-pointer",
        className
      )}
    >
      {/* Neumorphism Inset */}
      <div className="absolute inset-0 rounded-lg pointer-events-none" />

      {/* Corner Accents - Glowing */}
      {tilt && (
        <>
          <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors blur-sm" />
          <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors blur-sm" />
          <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors blur-sm" />
          <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors blur-sm" />
        </>
      )}

      {title && (
        <div className="mb-4 pb-3 border-b border-primary/20 group-hover:border-primary/50 transition-colors">
          <h3 className="text-xs font-display font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
      )}
      
      <div className="flex-1 relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
