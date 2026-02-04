import { HeroSection } from './components/sections/hero/HeroSection';
import { AboutSection } from './components/sections/about/AboutSection';
import { TimelineSection } from './components/sections/timeline/TimelineSection';
import { ProjectSection } from './components/sections/project-gallery/ProjectSection';
import { motion } from 'framer-motion';

import { DispersionGradient } from './components/visuals/DispersionGradient';

function App() {
  return (
    <main className="relative min-h-screen w-full bg-[#ffded4] text-[#1A1A1A] selection:bg-[#385C96] selection:text-white">

      <DispersionGradient />

      {/* Content */}
      <div className="relative z-10 w-full">
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