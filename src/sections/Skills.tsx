import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";

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
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold border-b border-border pb-2">{group.name}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="inline-flex items-center rounded-full bg-muted/80 border border-transparent px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:shadow-sm hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
