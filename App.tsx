import { SmoothScroll } from './components/layout/SmoothScroll';
import { HeroSection } from './components/layout/HeroSection';
import { AboutSection } from './components/layout/AboutSection';
import { ProjectSection } from './components/layout/ProjectSection';

function App() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-text)]">

        {/* Subtle Gradient Mesh Background */}
        <div className="fixed inset-0 pointer-events-none opacity-30">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[var(--color-accent-green)] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-[var(--color-accent-red)] rounded-full blur-[120px] opacity-20" />
          <div className="absolute top-[50%] right-[30%] w-[350px] h-[350px] bg-[var(--color-accent-blue)] rounded-full blur-[120px] opacity-20" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectSection />

          {/* Footer */}
          <footer className="py-[var(--space-2xl)] text-center border-t border-[var(--color-text)]/10">
            <p className="font-body text-sm opacity-60">
              © 2026 · Designed & Built with System Thinking
            </p>
          </footer>
        </div>
      </main>
    </SmoothScroll>
  );
}

export default App;