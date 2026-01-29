import { ExternalLink, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ProjectSection = () => {
    return (
        <section className="py-[var(--space-3xl)] bg-[var(--color-surface-hover)]">
            <div className="container mx-auto px-[var(--space-lg)]">
                <div className="flex flex-col md:flex-row justify-between items-end mb-[var(--space-xl)] gap-[var(--space-md)]">
                    <div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-[var(--space-sm)]">
                            Selected Works
                        </h2>
                        <p className="text-lg text-[var(--color-secondary)] font-body">Case studies and experiments.</p>
                    </div>
                    <button className="flex items-center gap-2 text-[var(--color-cta)] font-semibold hover:underline">
                        View Archive <ExternalLink className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)]">
                    {[1, 2, 3].map((project) => (
                        <div key={project} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                            {/* Image Area */}
                            <div className="aspect-[4/3] bg-[var(--color-secondary)]/10 relative overflow-hidden flex items-center justify-center">
                                <Layers className="w-12 h-12 text-[var(--color-secondary)]/30 group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            {/* Content Area */}
                            <div className="p-[var(--space-lg)]">
                                <h3 className="font-heading text-xl font-bold mb-[var(--space-xs)] text-[var(--color-primary)] group-hover:text-[var(--color-cta)] transition-colors">
                                    Project Neos {project}
                                </h3>
                                <p className="text-[var(--color-secondary)] text-sm mb-[var(--space-md)] line-clamp-2">
                                    A full-stack application built with React and Node.js tailored for high-performance data visualization.
                                </p>
                                <div className="flex gap-2">
                                    <span className="text-xs font-mono font-medium text-[var(--color-secondary)] bg-[var(--color-background)] px-2 py-1 rounded border border-[var(--color-secondary)]/10">React</span>
                                    <span className="text-xs font-mono font-medium text-[var(--color-secondary)] bg-[var(--color-background)] px-2 py-1 rounded border border-[var(--color-secondary)]/10">Node.js</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
