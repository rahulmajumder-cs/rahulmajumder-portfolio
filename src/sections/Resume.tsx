import { motion } from "framer-motion";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { TiltCard } from "../components/ui/TiltCard";

export function Resume() {
  return (
    <Section id="resume" className="relative py-24 md:py-32">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-balance">
            Resume
          </h2>
          <div className="w-12 h-1 bg-accent mt-6 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <TiltCard tiltAmount={2}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
              className="bg-background/95 md:bg-background/80 md:backdrop-blur-xl border border-border/60 rounded-[2.5rem] p-8 md:p-14 shadow-lg hover:shadow-2xl hover:border-accent/30 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <line x1="10" x2="8" y1="9" y2="9" />
                  </svg>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-foreground">
                    Curriculum Vitae
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance font-light max-w-xl mx-auto">
                    Review my detailed background in Computer Science, academic achievements, and software engineering experience.
                  </p>
                </div>

                <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
                  <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300">
                    <a href="/assets/Rahul-Majumder-CV.pdf" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M2 12h4l3-9 5 18 3-9h5" />
                      </svg>
                      View Resume
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="lg" asChild className="w-full sm:w-auto rounded-full border-border hover:bg-muted transition-all duration-300">
                    <a href="/assets/Rahul-Majumder-CV.pdf" download="Rahul-Majumder-CV.pdf">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </TiltCard>
        </div>
      </Container>
    </Section>
  );
}
