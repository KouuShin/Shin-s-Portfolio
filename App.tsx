import { HeroSection } from './components/sections/hero/HeroSection';
import { AboutSection } from './components/sections/about/AboutSection';
import { TimelineSection } from './components/sections/timeline/TimelineSection';
import { ProjectSection } from './components/sections/project-gallery/ProjectSection';
import { manifesto } from './components/portfolioContent';

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f7f6f1] text-[#111111] selection:bg-[#030303] selection:text-[#f7f6f1]">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectSection />

      <footer className="mx-auto grid w-[min(1480px,100%)] grid-cols-1 gap-8 border-t border-[#111111]/20 px-6 py-12 text-xs uppercase leading-tight tracking-normal text-[#111111]/55 md:grid-cols-12 md:px-8 lg:px-10">
        <div className="font-mono-ui md:col-span-3">099 / End Plate</div>
        <p className="max-w-xl md:col-span-5">
          {manifesto.name} builds product documents, AI workflows, prototypes, and business
          systems that help teams understand complex logic.
        </p>
        <div className="font-mono-ui md:col-span-4 md:text-right">
          Digital exhibition portfolio / 2026
        </div>
      </footer>
    </main>
  );
}

export default App;
