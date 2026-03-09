import { HeroSection } from './components/sections/hero/HeroSection';
import { AboutSection } from './components/sections/about/AboutSection';
import { TimelineSection } from './components/sections/timeline/TimelineSection';
import { ProjectSection } from './components/sections/project-gallery/ProjectSection';
import { motion } from 'framer-motion';

import { DispersionGradient } from './components/visuals/DispersionGradient';
import { GrainOverlay } from './components/visuals/GrainOverlay';

function App() {
  return (
    <main className="relative min-h-screen w-full bg-[#111210] text-[#ede8d9] selection:bg-[#e85d3a] selection:text-white" style={{ overflow: 'visible' }}>

      <DispersionGradient />
      <GrainOverlay />

      {/* Content */}
      <div className="relative z-10 w-full" style={{ overflow: 'visible' }}>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ProjectSection />

        {/* Footer */}
        <footer className="py-20 text-center border-t border-[#ede8d9]/10">
          <p className="text-sm text-[#ede8d9]/40" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            © 2026 · Public Analog Style
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;