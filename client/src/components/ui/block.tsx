import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  title?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3 | 4;
}

export function Block({ children, className, delay = 0, title, colSpan = 1, rowSpan = 1 }: BlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50 flex flex-col",
        colSpan === 2 && "md:col-span-2",
        colSpan === 3 && "md:col-span-3",
        colSpan === 4 && "md:col-span-4",
        rowSpan === 2 && "md:row-span-2",
        className
      )}
    >
      {/* Tech corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary/20 group-hover:border-primary transition-colors" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary/20 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors" />

      {/* Connection Points - Vertical */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-border/50 rounded-full group-hover:bg-primary/50 transition-colors" />
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-border/50 rounded-full group-hover:bg-primary/50 transition-colors" />
      
      {/* Connection Points - Horizontal */}
      <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/50 transition-colors" />
      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/50 transition-colors" />

      {title && (
        <div className="mb-4 pb-2 border-b border-border/50">
          <h3 className="text-sm font-display font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
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
