import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Contact, Footer } from "./sections/Contact";
import { Background } from "./components/ui/Background";
import { CustomCursor } from "./components/ui/CustomCursor";

function App() {
  return (
    <div className="min-h-screen bg-transparent font-sans text-foreground selection:bg-accent selection:text-white">
      <CustomCursor />
      <Background />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
