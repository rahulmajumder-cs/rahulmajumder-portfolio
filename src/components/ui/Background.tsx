import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Reduce frequency of updates if needed, or just let React handle it
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* Subtle radial light following cursor */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--color-foreground), transparent 40%)`,
          opacity: 0.03, // Very subtle
        }}
      />
      
      {/* Abstract geometric background shapes for depth */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-foreground/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-50"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-foreground/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-50"
      />
      
      {/* Subtle Grid / Noise pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
