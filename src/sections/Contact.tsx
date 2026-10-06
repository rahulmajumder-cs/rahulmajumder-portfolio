import { motion } from "framer-motion";
import { contact, config } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/ui/Icons";

export function Contact() {
  return (
    <Section id="contact">
      <Container className="text-center max-w-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        >
          {contact.heading}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground mb-10"
        >
          {contact.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild>
            <a href={`mailto:${config.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={config.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={config.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold">{config.name}</p>
          <p className="text-sm text-muted-foreground mt-1">{config.role}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {config.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
