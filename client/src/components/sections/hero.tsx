import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Spline from '@splinetool/react-spline';

export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8 min-h-[80vh]">
      {/* Text Block */}
      <Block className="lg:col-span-7 flex flex-col justify-center bg-white/50 backdrop-blur-sm lg:row-span-2">
        <div className="space-y-6 py-12">
          <div className="space-y-2">
            <h2 className="text-primary font-mono text-sm tracking-widest uppercase">Portfolio</h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
              Varada Kumbhar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light border-l-4 border-primary pl-4">
              Product Operations | Business Analyst <br/>
              Project Coordinator
            </p>
          </div>
          
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            Building my product career, one block at a time. I act as the architect who places each block correctly to build successful products.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="gap-2 text-md px-8 rounded-sm shadow-lg shadow-primary/20" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-md px-8 rounded-sm" asChild>
              <a href="/resume.pdf" download>
                Download Resume <Download className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </Block>

      {/* Spline 3D Block */}
      <Block className="lg:col-span-5 lg:row-span-2 min-h-[400px] bg-slate-50 relative overflow-hidden p-0 !border-0">
        <div className="absolute inset-0 w-full h-full">
           {/* Using a tech-themed Spline scene - Abstract cubes/shapes */}
           <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>
        <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
             <span className="text-xs text-muted-foreground/50 font-mono">Interactive 3D</span>
        </div>
      </Block>
    </div>
  );
}
