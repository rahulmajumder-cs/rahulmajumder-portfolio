import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { TiltCard } from "../components/ui/TiltCard";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          {skills.heading}
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skills.groups.map((group, index) => (
            <TiltCard key={index} tiltAmount={3}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-6 bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-border transition-all duration-500 hover:border-foreground/30 hover:shadow-xl h-full"
              >
                <h3 className="text-2xl font-bold border-b border-border/50 pb-4 tracking-tight">{group.name}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="inline-flex items-center rounded-full bg-muted/80 border border-transparent px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:shadow-md hover:-translate-y-1 cursor-default"
                    >
                      {skill}
                    </span>
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
