import { SmoothScroll } from './components/layout/SmoothScroll';
import { FluidBackground } from './components/visuals/FluidBackground';
import { GrainOverlay } from './components/visuals/GrainOverlay';

function App() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen w-full bg-[var(--color-canvas-light)] dark:bg-[var(--color-canvas-dark)] text-[var(--color-text-primary)]">
        {/* Global Visual Layers */}
        <GrainOverlay />
        <FluidBackground />

        {/* Content Container - z-index must be above background but below grain (grain is z-50 pointer-events-none) */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 overflow-hidden">
          <div className="text-center">
            <h1 className="font-heading text-6xl font-bold uppercase tracking-tighter sm:text-8xl md:text-9xl text-[var(--color-text-primary)] mix-blend-overlay">
              Personal<br />Brand
            </h1>
            <p className="mt-6 font-hand text-4xl text-[var(--color-accent-blue)] -rotate-6">
              Experimental • Digital • Archive
            </p>
            <div className="mt-12 h-64 w-px bg-current opacity-20 mx-auto"></div>
          </div>

          {/* Scroll spacer to test Lenis */}
          <div className="h-screen w-full flex items-center justify-center opacity-50">
            <p className="font-body text-sm uppercase tracking-widest">Scroll to feel the weight</p>
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}

export default App;