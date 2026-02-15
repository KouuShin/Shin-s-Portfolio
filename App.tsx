import { HeroSection } from './components/sections/hero/HeroSection';
import { AboutSection } from './components/sections/about/AboutSection';
import { TimelineSection } from './components/sections/timeline/TimelineSection';
import { ProjectSection } from './components/sections/project-gallery/ProjectSection';
import { motion } from 'framer-motion';

import { DispersionGradient } from './components/visuals/DispersionGradient';

function App() {
  return (
    <main className="relative min-h-screen w-full bg-[#ffdac2] text-[#1D3344] selection:bg-[#1D3344] selection:text-white" style={{ overflow: 'visible' }}>

      <DispersionGradient />

      {/* Content */}
      <div className="relative z-10 w-full" style={{ overflow: 'visible' }}>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ProjectSection />

        {/* Footer */}
        <footer className="py-20 text-center border-t border-[#1A1A1A]/10">
          <p className="text-sm opacity-60" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            © 2026 · Public Analog Style
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;