import { motion } from "framer-motion";

export function BuilderLogo({ src }: { src: string }) {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <motion.img 
        src={src} 
        alt="Builder Girl Logo"
        className="w-full h-full object-contain"
        animate={{ 
          rotate: [0, -5, 5, -5, 0],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatDelay: 3
        }}
      />
      {/* Hand Waving Animation Overlay */}
      <motion.div
        className="absolute top-1/2 right-0 w-4 h-4"
        animate={{ rotate: [0, -20, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
      />
    </div>
  );
}
