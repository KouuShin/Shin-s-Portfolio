import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { SectionTransition } from "./components/SectionTransition";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="overflow-hidden">
        <SectionTransition>
          <section id="hero">
            <Hero />
          </section>
        </SectionTransition>
        
        <SectionTransition>
          <section id="skills">
            <Skills />
          </section>
        </SectionTransition>
        
        <SectionTransition>
          <section id="portfolio">
            <Portfolio />
          </section>
        </SectionTransition>
        
        <SectionTransition>
          <section id="contact">
            <Contact />
          </section>
        </SectionTransition>
      </main>
    </div>
  );
}