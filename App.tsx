import { AboutSection } from './components/sections/about/AboutSection';
import { HeroSection } from './components/sections/hero/HeroSection';
import { ProjectSection } from './components/sections/project-gallery/ProjectSection';
import { TimelineSection } from './components/sections/timeline/TimelineSection';
import { manifesto, siteConfig } from './content/portfolio';

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
        <div className="grid justify-items-start gap-3 font-mono-ui md:col-span-4 md:justify-items-end md:text-right">
          <span>Digital exhibition portfolio / 2026</span>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="normal-case text-[#111111]/70 transition hover:text-[#2457ff]"
          >
            LinkedIn ↗
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
