import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
}

export function TiltCard({ children, className = "", tiltAmount = 15 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Use state to detect if the device supports hover
  const [isHoverable, setIsHoverable] = useState(true);

  useEffect(() => {
    // Check if the primary input device can hover (mouse/trackpad vs touch)
    const match = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsHoverable(match.matches);
  }, []);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [0, 1], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-tiltAmount, tiltAmount]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current || !isHoverable) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width;
    const yPct = mouseY / height;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!isHoverable) return;
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isHoverable ? {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      } : undefined}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
