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
                className="bg-background rounded-2xl p-6 border border-border"
              >
                <div className="text-sm font-medium text-muted-foreground mb-2">{education.primary.years} • {education.primary.status}</div>
                <h3 className="text-xl font-semibold">{education.primary.degree}</h3>
                <div className="text-muted-foreground mt-1">
                  <p>{education.primary.institution}</p>
                  <p>{education.primary.university}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background rounded-2xl p-6 border border-border"
              >
                <h3 className="text-lg font-semibold">{education.secondary.degree}</h3>
                <p className="text-muted-foreground mt-1">{education.secondary.description}</p>
              </motion.div>
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
                  className="flex flex-col p-5 rounded-xl bg-background border border-border transition-colors hover:border-foreground/20"
                >
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
