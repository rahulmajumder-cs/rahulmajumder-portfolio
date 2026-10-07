import { motion } from "framer-motion";
import { contact, config } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { MailIcon, LinkedinIcon, GithubIcon } from "../components/ui/Icons";
import { TiltCard } from "../components/ui/TiltCard";

export function Contact() {
  return (
    <Section id="contact" className="relative pb-0 pt-32 lg:pt-40">
      <div className="absolute inset-0 bg-accent/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <Container className="relative z-10">
        <TiltCard tiltAmount={2}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="rounded-[3rem] bg-foreground text-background p-12 md:p-20 lg:p-24 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background glowing orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-[100px] opacity-20 pointer-events-none" />
            
            <div className="max-w-3xl mx-auto space-y-8 relative z-10">
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-balance leading-[1.1]">
                {contact.heading}
              </h2>
              
              <p className="text-xl md:text-2xl text-background/70 leading-relaxed text-balance font-light">
                {contact.description}
              </p>
              
              <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 text-lg px-10 py-6 h-auto border-none">
                  <a href={`mailto:${config.email}`}>
                    <MailIcon className="mr-3 h-6 w-6" />
                    Send an Email
                  </a>
                </Button>
                
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" asChild className="rounded-full w-14 h-14 border-background/20 bg-transparent text-background hover:bg-background/10 hover:border-background/40 hover:-translate-y-1 transition-all duration-300">
                    <a href={config.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <LinkedinIcon className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="rounded-full w-14 h-14 border-background/20 bg-transparent text-background hover:bg-background/10 hover:border-background/40 hover:-translate-y-1 transition-all duration-300">
                    <a href={config.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <GithubIcon className="h-6 w-6" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </TiltCard>
      </Container>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground py-12 border-t border-background/10 mt-[-2rem] relative z-0">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-background/50 text-sm font-medium">
          <p>© {new Date().getFullYear()} {config.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${config.email}`} className="hover:text-accent transition-colors">Email</a>
            <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href={config.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
