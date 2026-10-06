import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";

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
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 p-6 rounded-2xl bg-background border border-border hover:border-foreground/20 transition-colors group"
            >
              <div className="md:w-32 flex-shrink-0 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {item.year}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="text-muted-foreground mt-1">{item.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
