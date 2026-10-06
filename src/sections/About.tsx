import { motion } from "framer-motion";
import { about } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";

export function About() {
  return (
    <Section id="about" className="bg-muted/50">
      <Container>
        <div className="max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-balance"
          >
            About Me
          </motion.h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {about.paragraphs.map((paragraph, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
