import { motion } from "framer-motion";

export function BuilderLogo({ src }: { src: string }) {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <img 
        src={src} 
        alt="Varada Kumbhar Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
