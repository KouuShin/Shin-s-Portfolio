import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Thoughts } from "./components/Thoughts";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { ResumeModal } from "./components/ResumeModal";

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main>
        <Hero onOpenResume={openResumeModal} />
        <Portfolio />
        <Thoughts />
        <Skills />
        <Contact onOpenResume={openResumeModal} />
      </main>
      
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={closeResumeModal} 
      />
    </div>
  );
}