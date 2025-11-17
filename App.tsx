import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Thoughts } from "./components/Thoughts";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050505' }}>
      <Navigation />
      
      <main>
        <Hero />
        <Portfolio />
        <Thoughts />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}