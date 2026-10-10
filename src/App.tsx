import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Certificates } from "./sections/Certificates";
import { Resume } from "./sections/Resume";
import { Contact, Footer } from "./sections/Contact";
import { Background } from "./components/ui/Background";

function App() {
  return (
    <div className="min-h-screen bg-transparent font-sans text-foreground selection:bg-accent selection:text-white">
      <Background />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
