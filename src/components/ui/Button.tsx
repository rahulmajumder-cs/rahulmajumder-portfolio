import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean; // We keep the prop type but just use 'div' if true for simple a tag wrapping
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

const Button = forwardRef<HTMLButtonElement | HTMLDivElement, ButtonProps>(
  ({ children, className, variant = "primary", asChild, ...props }, ref) => {
    const Component = asChild ? "div" : "button";
    
    const baseStyles = "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-6 py-2.5";
    
    const variants = {
      primary: "bg-foreground text-background hover:bg-foreground/90 hover:shadow-md hover:-translate-y-0.5",
      secondary: "bg-muted text-foreground hover:bg-muted/80 hover:-translate-y-0.5",
      outline: "border border-border bg-background hover:bg-muted hover:text-foreground hover:-translate-y-0.5",
      ghost: "hover:bg-muted hover:text-foreground hover:-translate-y-0.5",
    };

    return (
      <Component
        className={cn(baseStyles, variants[variant], className)}
        ref={ref as any}
        {...(props as any)}
      >
        {children}
      </Component>
    );
  }
);
Button.displayName = "Button";

export { Button };
