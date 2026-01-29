import { SmoothScroll } from './components/layout/SmoothScroll';
import { HeroSection } from './components/layout/HeroSection';
import { AboutSection } from './components/layout/AboutSection';
import { ProjectSection } from './components/layout/ProjectSection';

function App() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen w-full bg-[var(--color-background)] text-[var(--color-text)] selection:bg-[var(--color-cta)] selection:text-white transition-colors duration-300">

        {/* Navigation / Header could go here */}

        {/* Portfolio Grid Layout */}
        <div className="flex flex-col">
          <HeroSection />
          <AboutSection />
          <ProjectSection />

          <footer className="py-[var(--space-2xl)] text-center opacity-60 font-body text-sm border-t border-[var(--color-secondary)]/10 mt-[var(--space-3xl)]">
            <p>© 2026 Designed & Built with System Thinking</p>
          </footer>
        </div>
      </main>
    </SmoothScroll>
  );
}

export default App;