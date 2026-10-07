import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { TiltCard } from "../components/ui/TiltCard";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          {experience.heading}
        </motion.h2>
        
        <div className="space-y-8 max-w-4xl">
          {experience.items.map((item, index) => (
            <TiltCard key={index} tiltAmount={2}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8 rounded-3xl bg-background/50 backdrop-blur-sm border border-border hover:shadow-xl hover:border-foreground/30 hover:bg-background/80 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/0 via-foreground/5 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="md:w-32 flex-shrink-0 text-sm font-semibold tracking-wider text-muted-foreground group-hover:text-foreground transition-colors uppercase relative z-10">
                  {item.year}
                </div>
                <div className="relative z-10 border-l-2 border-border/50 pl-4 md:pl-8 group-hover:border-foreground/30 transition-colors">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-balance group-hover:translate-x-1 transition-transform duration-300">{item.role}</h3>
                  <p className="text-muted-foreground mt-2 text-lg group-hover:translate-x-1 transition-transform duration-300 delay-75">{item.organization}</p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
