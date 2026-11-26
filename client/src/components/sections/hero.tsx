import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowRight, Sparkles, Box, LayoutGroup } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative mb-40 pt-20">
      {/* Decorative Orbs */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]), opacity }}
        className="absolute top-40 -right-20 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none z-0" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 px-4 py-1.5 bg-white/50 backdrop-blur-md border border-white/80 rounded-full w-fit shadow-sm"
            >
              <div className="p-1 bg-primary/20 rounded-full">
                <Sparkles className="w-3 h-3 text-primary animate-pulse" />
              </div>
              <span className="text-[10px] font-display font-black tracking-[0.2em] text-primary uppercase">
                Product & Strategy Module
              </span>
            </motion.div>

            <div className="relative">
              <motion.h1 
                className="text-7xl md:text-9xl font-display font-black text-foreground leading-[0.95] tracking-tighter"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Varada <br />
                <span className="hologram-text pb-2">Kumbhar</span>
              </motion.h1>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, rotate: 12, scale: 0 }}
                animate={{ opacity: 1, rotate: -12, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-6 -right-6 md:right-32 p-4 bg-white shadow-2xl rounded-2xl border border-border hidden md:block"
              >
                <Box className="w-8 h-8 text-primary" />
              </motion.div>
            </div>
          </div>

          <motion.p 
            className="text-2xl md:text-3xl text-muted-foreground font-medium max-w-2xl leading-snug tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Architecting digital systems with 
            <span className="text-foreground font-black underline decoration-primary/20 decoration-[6px] underline-offset-[8px]"> precision </span> 
            and 
            <span className="text-foreground font-black underline decoration-secondary/20 decoration-[6px] underline-offset-[8px]"> empathy.</span>
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="rounded-full h-16 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-sm uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(168,85,247,0.3)] hover:scale-105 transition-all" asChild>
              <a href="#projects">
                Explore Work <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-16 px-10 border-2 border-primary/20 font-black text-sm uppercase tracking-widest hover:bg-primary/5 hover:border-primary/40 transition-all" asChild>
              <a href="/Varada_k_.pdf" download>
                <Download className="mr-2 w-5 h-5" />
                Resume
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
          <Block title="Primary Focus" className="p-10 border-2 bg-gradient-to-br from-white/80 to-primary/5">
            <div className="space-y-6">
              {[
                { label: 'Requirement Analysis', icon: '01' },
                { label: 'Product Strategy', icon: '02' },
                { label: 'Workflow Optimization', icon: '03' }
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-6">
                  <span className="text-xs font-black opacity-20 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                  <span className="text-base font-bold tracking-tight group-hover:text-primary transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </Block>
          
          <div className="grid grid-cols-2 gap-6">
            <Block className="p-6 text-center group translate-y-4" variant="primary">
               <span className="text-3xl font-black group-hover:scale-110 block transition-transform">2026</span>
               <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] mt-2">Class Of</p>
            </Block>
            <Block className="p-6 text-center group" variant="secondary">
               <span className="text-3xl font-black group-hover:rotate-12 block transition-transform">∞</span>
               <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] mt-2">Vision</p>
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
}

