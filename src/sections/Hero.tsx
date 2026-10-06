import { motion } from "framer-motion";
import { config } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export function Hero() {
  return (
    <Section id="hero" className="min-h-[90vh] flex items-center pt-32 pb-16">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">
              {config.role}
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance leading-tight">
              {config.name}
            </h1>
          </div>
          
          <div className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-lg text-balance pt-2">
            <p className="leading-relaxed">
              {config.description}
            </p>
            <p className="leading-relaxed">
              {config.secondaryDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative lg:ml-auto max-w-sm lg:max-w-md w-full aspect-[4/5]"
        >
          <div className="absolute inset-0 bg-muted rounded-2xl -rotate-6 transform origin-bottom-left transition-transform hover:-rotate-2 duration-300"></div>
          <div className="absolute inset-0 overflow-hidden rounded-2xl bg-muted border border-border">
            <img 
              src="/assets/profile.jpg" 
              alt={config.name} 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
