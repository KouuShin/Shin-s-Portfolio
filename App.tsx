import { Navigation } from "./components/Navigation";
import { Hero, About } from "./components/Hero";
import { Portfolio } from "./components/PortfolioNew";
import { Thoughts } from "./components/ThoughtsNew";
import { Design } from "./components/Design";
import { Contact } from "./components/ContactNew";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Thoughts />
        <Design />
        <Contact />
      </main>
    </div>
  );
}