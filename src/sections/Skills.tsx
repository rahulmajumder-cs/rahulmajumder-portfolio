import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { TiltCard } from "../components/ui/TiltCard";

export function Skills() {
  return (
    <Section id="skills" className="relative">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-balance">
            {skills.heading}
          </h2>
          <div className="w-12 h-1 bg-accent mt-6 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {skills.groups.map((group, index) => (
            <TiltCard key={index} tiltAmount={3}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.2 }}
                className="relative space-y-8 bg-background/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-border/50 transition-all duration-700 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 h-full overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <h3 className="text-2xl font-display font-bold border-b border-border/50 pb-4 tracking-tight relative z-10 group-hover:text-accent transition-colors duration-300">
                  {group.name}
                </h3>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                  {group.items.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="inline-flex items-center rounded-full bg-muted/80 backdrop-blur-sm border border-border/50 px-5 py-2.5 text-sm md:text-base font-medium text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-sm hover:shadow-md cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
