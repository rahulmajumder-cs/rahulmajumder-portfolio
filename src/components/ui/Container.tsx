import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("w-full max-w-5xl mx-auto px-6 md:px-12", className)}
      {...props}
    >
      {children}
    </div>
  );
}
