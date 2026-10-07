import { motion } from "framer-motion";
import { education, certifications } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { TiltCard } from "../components/ui/TiltCard";

export function Education() {
  return (
    <Section id="education" className="relative bg-muted/20">
      <Container>
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Education - Spans 7 columns */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-balance">
                Education
              </h2>
              <div className="w-12 h-1 bg-accent mt-6 rounded-full" />
            </motion.div>
            
            <div className="space-y-8">
              <TiltCard tiltAmount={2}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-background/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-border/50 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30 transition-all duration-700 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <div className="text-sm font-semibold tracking-widest uppercase text-accent">{education.primary.years} • {education.primary.status}</div>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-balance leading-tight group-hover:text-accent transition-colors duration-300">
                      {education.primary.degree}
                    </h3>
                    
                    <div className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed space-y-2">
                      <p className="text-foreground/80">{education.primary.institution}</p>
                      <p>{education.primary.university}</p>
                    </div>
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
                    className="bg-background/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-border/50 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30 transition-all duration-700 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative z-10">
                      <h3 className="text-3xl font-display font-bold tracking-tight mb-4 text-balance group-hover:text-accent transition-colors duration-300">
                        {(education as any).secondary.degree}
                      </h3>
                      <p className="text-muted-foreground text-xl font-light leading-relaxed">
                        {(education as any).secondary.description}
                      </p>
                    </div>
                  </motion.div>
                </TiltCard>
              )}
            </div>
          </div>

          {/* Certifications - Spans 5 columns */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-balance">
                {certifications.heading}
              </h2>
              <div className="w-12 h-1 bg-accent mt-6 rounded-full" />
            </motion.div>

            <div className="space-y-6">
              {certifications.items.map((item, index) => (
                <TiltCard key={index} tiltAmount={3}>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start p-8 rounded-[2rem] bg-background/60 backdrop-blur-md border border-border/50 transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 group"
                  >
                    <div className="text-2xl font-display font-bold text-accent/30 mr-6 mt-1 group-hover:text-accent transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground text-xl md:text-2xl tracking-tight text-balance leading-snug group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-base md:text-lg text-muted-foreground font-light mt-2">
                        {item.issuer}
                      </p>
                    </div>
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
