import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { TiltCard } from "../components/ui/TiltCard";

export function Experience() {
  return (
    <Section id="experience" className="relative">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-balance">
            {experience.heading}
          </h2>
          <div className="w-12 h-1 bg-accent mt-6 rounded-full" />
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-24 top-4 bottom-4 w-px bg-border/60" />
          
          <div className="space-y-12 md:space-y-16">
            {experience.items.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 group">
                
                {/* Timeline Dot & Year */}
                <div className="flex items-center gap-6 md:gap-12 md:w-48 flex-shrink-0 z-10 pl-6 md:pl-0">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="absolute left-[1.65rem] md:left-[5.7rem] w-3 h-3 rounded-full bg-accent ring-4 ring-background shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform duration-300" 
                  />
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-lg md:text-xl font-display font-semibold text-accent/80 md:ml-0"
                  >
                    {item.year}
                  </motion.div>
                </div>
                
                {/* Content Card */}
                <div className="flex-1 w-full pl-12 md:pl-0">
                  <TiltCard tiltAmount={3}>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="p-8 md:p-10 rounded-[2rem] bg-background/95 md:bg-background/60 md:backdrop-blur-md border border-border/50 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                          {item.role}
                        </h3>
                        <p className="text-lg md:text-xl text-muted-foreground font-light">
                          {item.organization}
                        </p>
                      </div>
                    </motion.div>
                  </TiltCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
