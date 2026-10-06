import { motion } from "framer-motion";
import { project } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { GithubIcon } from "../components/ui/Icons";

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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative overflow-hidden rounded-3xl bg-background border border-border transition-all duration-300 hover:border-foreground/30 hover:shadow-xl hover:-translate-y-1 p-8 md:p-12"
        >
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.category}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-balance">
              {project.title}
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            
            <div className="pt-4">
              <Button asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  View Repository
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
