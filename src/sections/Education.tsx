import { motion } from "framer-motion";
import { education, certifications } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { TiltCard } from "../components/ui/TiltCard";

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
              <TiltCard tiltAmount={2}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-background/50 backdrop-blur-sm rounded-3xl p-8 border border-border hover:shadow-2xl hover:-translate-y-1 hover:border-foreground/30 hover:bg-background/80 transition-all duration-500"
                >
                  <div className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-3">{education.primary.years} • {education.primary.status}</div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2 text-balance">{education.primary.degree}</h3>
                  <div className="text-muted-foreground text-lg leading-relaxed">
                    <p>{education.primary.institution}</p>
                    <p>{education.primary.university}</p>
                  </div>
                </motion.div>
              </TiltCard>

              {(education as any).secondary && (
                <TiltCard tiltAmount={2}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-background/50 backdrop-blur-sm rounded-3xl p-8 border border-border hover:shadow-2xl hover:-translate-y-1 hover:border-foreground/30 hover:bg-background/80 transition-all duration-500"
                  >
                    <h3 className="text-2xl font-bold tracking-tight mb-2 text-balance">{(education as any).secondary.degree}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{(education as any).secondary.description}</p>
                  </motion.div>
                </TiltCard>
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
                <TiltCard key={index} tiltAmount={4}>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col p-6 rounded-3xl bg-background/50 backdrop-blur-sm border border-border transition-all duration-500 hover:border-foreground/30 hover:shadow-xl hover:-translate-y-1 hover:bg-background/80"
                  >
                    <h4 className="font-bold text-foreground text-xl tracking-tight text-balance">{item.title}</h4>
                    <p className="text-base text-muted-foreground mt-2">{item.issuer}</p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
