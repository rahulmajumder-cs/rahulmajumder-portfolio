import { motion } from "framer-motion";
import { about } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";

export function About() {
  return (
    <Section id="about" className="py-24 md:py-32 lg:py-40 relative">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 sticky top-32"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-balance">
              About
            </h2>
            <div className="w-12 h-1 bg-accent mt-6 rounded-full" />
          </motion.div>

          {/* Editorial Content */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Strong introductory statement */}
              <p className="text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-[1.2] tracking-tight text-foreground text-balance">
                {about.paragraphs[0]} {about.paragraphs[1]}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-2 gap-8 text-lg text-muted-foreground leading-relaxed"
            >
              <div className="space-y-6">
                <p>{about.paragraphs[2]}</p>
                <p>{about.paragraphs[3]}</p>
              </div>
              <div className="space-y-6">
                <p>{about.paragraphs[4]}</p>
                <p className="text-xl font-medium text-foreground italic border-l-2 border-accent/30 pl-4 py-1">
                  {about.paragraphs[5]}
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
