import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id: string;
}

export function Section({ children, id, className, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 w-full", className)}
      {...props}
    >
      {children}
    </section>
  );
}
