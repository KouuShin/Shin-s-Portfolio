import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { ResumeModal } from "./components/ResumeModal";
import { SectionTransition } from "./components/SectionTransition";

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="overflow-hidden">
        <SectionTransition>
          <section id="hero">
            <Hero onOpenResume={openResumeModal} />
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
            <Contact onOpenResume={openResumeModal} />
          </section>
        </SectionTransition>
      </main>
      
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={closeResumeModal} 
      />
    </div>
  );
}