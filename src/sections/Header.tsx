import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { config } from "../data/portfolio";
import { motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          
          const sections = navLinks.map(link => link.href.substring(1));
          let current = "";
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element && window.scrollY >= (element.offsetTop - 300)) {
              current = section;
            }
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4 md:px-0 pointer-events-none">
      <div 
        className={cn(
          "pointer-events-auto flex items-center justify-between transition-all duration-500",
          "w-full max-w-5xl md:w-auto md:rounded-full md:border md:px-6 md:py-3",
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-border shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.03)]" 
            : "bg-transparent md:bg-background/40 md:backdrop-blur-md md:border-border/50"
        )}
      >
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}
          className="font-display font-bold text-xl tracking-tight z-50 md:mr-8 hidden md:block"
        >
          {config.name.split(' ')[0]}
        </a>

        {/* Mobile Logo & Toggle Wrapper (Full width on mobile) */}
        <div className="flex items-center justify-between w-full md:hidden rounded-full border border-border bg-background/80 backdrop-blur-xl px-5 py-3 shadow-sm">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}
            className="font-display font-bold text-lg tracking-tight z-50"
          >
            {config.name}
          </a>
          <button
            className="z-50 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={cn(
                  "relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full",
                  isActive ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-accent rounded-full -z-10 shadow-lg shadow-accent/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden pointer-events-auto",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            className="text-4xl font-display font-bold text-muted-foreground hover:text-accent transition-colors"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}
