import { motion } from "framer-motion";
import { project } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { GithubIcon } from "../components/ui/Icons";
import { TiltCard } from "../components/ui/TiltCard";

export function Projects() {
  return (
    <Section id="projects" className="relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight"
          >
            Featured Work
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-px bg-accent/20 flex-grow max-w-sm hidden md:block mb-4 ml-8"
          />
        </div>
        
        <TiltCard tiltAmount={2} className="group relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-border/50 transition-all duration-700 md:hover:border-accent/40 shadow-xl md:shadow-2xl md:hover:shadow-accent/20 bg-background/95 md:bg-background/60 md:backdrop-blur-xl min-h-[600px] flex flex-col justify-end p-8 md:p-16 lg:p-20"
            style={{ transform: "translateZ(20px)" }}
          >
            {/* Abstract ML/Data Visualization Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 md:opacity-40 group-hover:opacity-70 transition-opacity duration-1000 hidden sm:block">
              <div className="absolute top-0 right-0 w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_var(--color-accent),_transparent_70%)] opacity-10 translate-x-1/3 -translate-y-1/3 mix-blend-screen" />
              
              {/* Grid lines */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)`,
                  backgroundSize: '4rem 4rem',
                }}
              />
              
              {/* Floating tech nodes */}
              <div className="absolute top-[20%] right-[30%] w-2 h-2 rounded-full bg-accent shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              <div className="absolute top-[40%] right-[15%] w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              <div className="absolute bottom-[30%] right-[25%] w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              
              {/* Connecting line */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M 70% 20% L 85% 40% L 75% 70%" fill="none" stroke="currentColor" className="text-accent opacity-30" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
            
            {/* Foreground Content */}
            <div className="relative z-10 max-w-4xl space-y-8" style={{ transform: "translateZ(40px)" }}>
              <div className="inline-flex items-center gap-3">
                <div className="w-8 h-px bg-accent"></div>
                <span className="text-sm font-semibold tracking-widest text-accent uppercase">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-balance tracking-tight leading-[1.1] group-hover:text-accent transition-colors duration-500">
                {project.title}
              </h3>
              
              <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed text-balance max-w-2xl font-light">
                {project.description}
              </p>
              
              <div className="pt-8">
                <Button asChild size="lg" className="rounded-full shadow-xl hover:shadow-accent/30 bg-foreground text-background hover:bg-accent hover:text-accent-foreground hover:-translate-y-1 transition-all duration-300 group/btn px-8">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <GithubIcon className="mr-3 h-5 w-5 transition-transform group-hover/btn:scale-110" />
                    <span className="font-medium tracking-wide">View Source Code</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </TiltCard>
      </Container>
    </Section>
  );
}
