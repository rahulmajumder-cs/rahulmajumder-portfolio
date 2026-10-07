import { motion } from "framer-motion";
import { config } from "../data/portfolio";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { TiltCard } from "../components/ui/TiltCard";

export function Hero() {
  return (
    <Section id="hero" className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden">
      {/* Decorative background glow for the hero specifically */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[120px] mix-blend-screen pointer-events-none" />
      
      <Container className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Text Content - Spans 7 columns on large screens */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-8 lg:col-span-7"
        >
          <div className="space-y-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for Internships
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-bold tracking-tight text-balance leading-[0.95] text-foreground mix-blend-difference dark:mix-blend-normal">
              {config.name.split(' ').map((name, i) => (
                <span key={i} className={i > 0 ? "text-accent/90 block" : "block"}>{name}</span>
              ))}
            </h1>
          </div>
          
          <div className="space-y-5 text-lg md:text-xl text-muted-foreground max-w-lg text-balance pt-4 border-l-2 border-accent/20 pl-6">
            <p className="leading-relaxed font-medium text-foreground/80">
              {config.role}
            </p>
            <p className="leading-relaxed text-base md:text-lg">
              {config.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40 bg-accent text-accent-foreground hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300 font-medium tracking-wide">
              <a href="#projects">Explore Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full border-border hover:border-foreground/30 hover:bg-transparent hover:-translate-y-1 transition-all duration-300">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>

        {/* Image Content - Spans 5 columns on large screens */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="relative lg:col-span-5 max-w-sm lg:max-w-md mx-auto w-full aspect-[4/5] perspective-1200"
        >
          {/* Floating tech element */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -right-8 top-12 z-20 bg-background/80 backdrop-blur-xl border border-border/50 p-4 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">ML</div>
              <div>
                <div className="text-sm font-bold">Data Science</div>
                <div className="text-xs text-muted-foreground">Python & Pandas</div>
              </div>
            </div>
          </motion.div>

          <TiltCard tiltAmount={10} className="w-full h-full relative z-10">
            {/* Darker shadow/backdrop offset */}
            <div 
              className="absolute inset-0 bg-accent/20 rounded-[2.5rem] -rotate-3 transform origin-bottom-left transition-transform hover:-rotate-1 duration-700 shadow-2xl blur-sm"
              style={{ transform: "translateZ(-30px) rotate(-3deg)" }}
            ></div>
            
            <div 
              className="absolute inset-0 overflow-hidden rounded-[2rem] bg-muted border-2 border-border/50 shadow-2xl"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 mix-blend-multiply opacity-50" />
              <img 
                src="/assets/profile.jpg" 
                alt={config.name} 
                className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
          </TiltCard>
        </motion.div>
      </Container>
    </Section>
  );
}
