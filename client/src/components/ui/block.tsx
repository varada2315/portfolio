import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  title?: string;
  depth?: boolean;
}

export function Block({ 
  children, 
  className, 
  delay = 0, 
  title, 
  depth = true 
}: BlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay * 0.1, 
        type: "spring",
        stiffness: 100 
      }}
      className={cn(
        depth ? "block-foundation" : "real-block",
        "p-6 flex flex-col relative",
        className
      )}
    >
      {title && (
        <div className="mb-4 pb-2 border-b-2 border-border/30">
          <h3 className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground">
            {title}
          </h3>
        </div>
      )}
      <div className="flex-1 z-10">
        {children}
      </div>
    </motion.div>
  );
}
