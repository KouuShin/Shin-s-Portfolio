import { SmoothScroll } from './components/layout/SmoothScroll';
import { FluidBackground } from './components/visuals/FluidBackground';
import { GrainOverlay } from './components/visuals/GrainOverlay';
import { HeroSection } from './components/layout/HeroSection';
import { AboutSection } from './components/layout/AboutSection';
import { ProjectSection } from './components/layout/ProjectSection';

function App() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen w-full bg-[var(--color-canvas-light)] dark:bg-[var(--color-canvas-dark)] text-[var(--color-text-primary)] transition-colors duration-500">
        {/* Global Visual Layers */}
        <GrainOverlay />
        <FluidBackground />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col">
          <HeroSection />
          <AboutSection />
          <ProjectSection />

          {/* Footer Spacer */}
          <div className="py-20 text-center opacity-40 font-mono text-xs">
            © 2026 EXPERIMENTAL ARCHIVE
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}

export default App;