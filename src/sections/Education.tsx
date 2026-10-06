import { motion } from "framer-motion";
import { education, certifications } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";

export function Education() {
  return (
    <Section id="education" className="bg-muted/50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight mb-8"
            >
              Education
            </motion.h2>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background rounded-3xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-sm font-medium text-muted-foreground mb-3">{education.primary.years} • {education.primary.status}</div>
                <h3 className="text-2xl font-semibold mb-1">{education.primary.degree}</h3>
                <div className="text-muted-foreground leading-relaxed">
                  <p>{education.primary.institution}</p>
                  <p>{education.primary.university}</p>
                </div>
              </motion.div>

              {(education as any).secondary && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-background rounded-3xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{(education as any).secondary.degree}</h3>
                  <p className="text-muted-foreground leading-relaxed">{(education as any).secondary.description}</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight mb-8"
            >
              {certifications.heading}
            </motion.h2>

            <div className="space-y-4">
              {certifications.items.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col p-6 rounded-2xl bg-background border border-border transition-all duration-300 hover:border-foreground/30 hover:shadow-md hover:-translate-y-0.5"
                >
                  <h4 className="font-semibold text-foreground text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1.5">{item.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
