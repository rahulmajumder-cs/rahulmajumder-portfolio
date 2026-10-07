import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement | HTMLDivElement, ButtonProps>(
  ({ children, className, variant = "primary", size = "default", asChild, ...props }, ref) => {
    const Component = asChild ? "div" : "button";
    
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-foreground text-background hover:bg-foreground/90 hover:shadow-md hover:-translate-y-0.5",
      secondary: "bg-muted text-foreground hover:bg-muted/80 hover:-translate-y-0.5",
      outline: "border border-border bg-background hover:bg-muted hover:text-foreground hover:-translate-y-0.5",
      ghost: "hover:bg-muted hover:text-foreground hover:-translate-y-0.5",
    };

    const sizes = {
      default: "h-11 px-6 py-2.5 text-sm",
      sm: "h-9 px-4 text-xs",
      lg: "h-14 px-8 text-base",
      icon: "h-12 w-12",
    };

    return (
      <Component
        className={cn(baseStyles, variants[variant], sizes[size], className)}
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
