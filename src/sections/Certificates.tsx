import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { TiltCard } from "../components/ui/TiltCard";
import { config } from "../data/portfolio";

const certificates = [
  {
    title: "Data Science Internship",
    category: "Internship",
    issuer: "ReTechPrime Technology Solutions Pvt. Ltd.",
    date: "October 2025",
    preview: "/assets/certificates/retechprime-internship-2025-preview.webp",
    file: null,
    isPrivate: true,
  },
  {
    title: "Technology & Engineering Internship",
    category: "Internship",
    issuer: "Jalpaiguri Government Engineering College",
    date: "October 2025",
    preview: "/assets/certificates/jgec-internship-2025.webp",
    file: "/assets/certificates/jgec-internship-2025.pdf",
    isPrivate: false,
  },
  {
    title: "Critical Cybersecurity Practices & Introduction to Ethical Hacking",
    category: "Workshop",
    issuer: "Jalpaiguri Government Engineering College",
    date: "February 2024",
    preview: "/assets/certificates/cybersecurity-ethical-hacking-2024.webp",
    file: "/assets/certificates/cybersecurity-ethical-hacking-2024.jpg",
    isPrivate: false,
  },
  {
    title: "QuizOff 2026: India's Biggest AI Quiz",
    category: "Participation",
    issuer: "CampusCrew",
    date: "July 2026",
    preview: "/assets/certificates/campuscrew-quizoff-2026.webp",
    file: "/assets/certificates/campuscrew-quizoff-2026.pdf",
    isPrivate: false,
  },
  {
    title: "Robosoccer — SRISTI 2025",
    category: "Participation",
    issuer: "Jalpaiguri Government Engineering College",
    date: "2025",
    preview: "/assets/certificates/robosoccer-sristi-2025-preview.webp",
    file: null,
    isPrivate: true,
  }
];

export function Certificates() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    
    if (modalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <Section id="certificates" className="relative py-24 md:py-32">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
            Curiosity, practiced.
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-balance mb-6">
            Certificates & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Selected internships, technical workshops and achievements.
          </p>
          <div className="w-12 h-1 bg-accent mt-8 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <TiltCard key={index} tiltAmount={2}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => cert.isPrivate && setModalOpen(true)}
                className={`flex flex-col h-full bg-background/95 md:bg-background/60 md:backdrop-blur-xl rounded-[2rem] border border-border/50 overflow-hidden group hover:border-accent/40 transition-colors duration-500 hover:shadow-xl hover:shadow-accent/5 ${cert.isPrivate ? "cursor-pointer" : ""}`}
                role={cert.isPrivate ? "button" : undefined}
                tabIndex={cert.isPrivate ? 0 : undefined}
                onKeyDown={(e) => {
                  if (cert.isPrivate && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    setModalOpen(true);
                  }
                }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/30 border-b border-border/50">
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  <img 
                    src={cert.preview} 
                    alt={cert.title} 
                    loading="lazy"
                    className="w-full h-full object-contain p-6 scale-95 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />
                  {cert.isPrivate && (
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/50 flex items-center gap-2 z-20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      <span className="text-xs font-semibold text-muted-foreground">Private</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col flex-grow p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {cert.category}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                      {cert.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold tracking-tight mb-3 text-balance group-hover:text-accent transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {cert.issuer}
                  </p>
                  
                  {!cert.isPrivate && (
                    <div className="pt-6 mt-auto">
                      <a 
                        href={cert.file!} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-foreground hover:text-accent transition-colors group/link"
                      >
                        View Certificate
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              aria-hidden="true"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="relative w-full max-w-md bg-background border border-border shadow-2xl rounded-3xl p-6 sm:p-8 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
              
              <button 
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>

              <h3 id="modal-title" className="text-2xl font-display font-bold tracking-tight mb-3">
                Certificate details kept private
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I keep the full certificate private because it contains personal academic information. For verification or further details, please contact me.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={`mailto:${config.email}`}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground shadow hover:bg-accent/90 h-10 px-6 py-2 rounded-full w-full sm:w-auto"
                >
                  Contact Rahul
                </a>
                <button 
                  onClick={() => setModalOpen(false)}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2 rounded-full w-full sm:w-auto"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
