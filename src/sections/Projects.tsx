import { motion } from "framer-motion";
import { project } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { GithubIcon } from "../components/ui/Icons";
import { TiltCard } from "../components/ui/TiltCard";

export function Projects() {
  return (
    <Section id="projects" className="bg-muted/50">
      <Container>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          Featured Project
        </motion.h2>
        
        <TiltCard tiltAmount={4} className="group relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-background/50 backdrop-blur-sm border border-border transition-all duration-500 hover:border-foreground/30 hover:shadow-2xl hover:bg-background/80 p-8 md:p-14"
            style={{ transform: "translateZ(20px)" }}
          >
            {/* Subtle glow effect behind card */}
            <div className="absolute -inset-px bg-gradient-to-r from-foreground/0 via-foreground/5 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            <div className="relative z-10 max-w-3xl space-y-8" style={{ transform: "translateZ(30px)" }}>
              <div className="inline-flex items-center rounded-full border border-border/50 bg-muted/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground uppercase shadow-sm">
                {project.category}
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold text-balance tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                {project.description}
              </p>
              
              <div className="pt-6">
                <Button asChild className="rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-5 w-5" />
                    View Repository
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Decorative subtle background pattern inside the card */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent pointer-events-none opacity-50" />
          </motion.div>
        </TiltCard>
      </Container>
    </Section>
  );
}
