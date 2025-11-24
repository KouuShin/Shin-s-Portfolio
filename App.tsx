import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero, About } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Thoughts } from "./components/Thoughts";
import { Design } from "./components/Design";
import { Contact } from "./components/ContactNew";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'project':
        return <Portfolio />;
      case 'thoughts':
        return <Thoughts />;
      case 'design':
        return <Design />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div 
      style={{ 
        backgroundColor: '#000000',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main style={{ width: '100%', height: '100%' }}>
        {renderPage()}
      </main>
    </div>
  );
}