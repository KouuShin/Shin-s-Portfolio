import { FrostedCard } from '@/components/ui/FrostedCard';
import { ScribbleButton } from '@/components/ui/ScribbleButton';
import { ExternalLink, Layers } from 'lucide-react';

export const ProjectSection = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                            Selected <span className="text-[var(--color-accent-lime)] italic font-serif">Works</span>
                        </h2>
                        <p className="text-xl text-[var(--color-text-secondary)]">A collection of digital artifacts.</p>
                    </div>
                    <ScribbleButton variant="ghost">
                        View All Archive <ExternalLink className="w-4 h-4 ml-2" />
                    </ScribbleButton>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((project) => (
                        <FrostedCard key={project} className="group p-0 hover:-translate-y-2">
                            {/* Image Area */}
                            <div className="aspect-[4/3] bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-canvas-dark)]">
                                    <Layers className="w-16 h-16 opacity-20" />
                                </div>

                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                                    <ScribbleButton variant="primary">View Case Study</ScribbleButton>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-8">
                                <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-[var(--color-accent-blue)] transition-colors">
                                    Project Neos {project}
                                </h3>
                                <p className="text-[var(--color-text-secondary)] mb-6 line-clamp-2">
                                    A cybernetic exploration of modern web technologies using React and WebGL.
                                </p>
                                <div className="flex gap-2">
                                    <span className="text-xs font-mono font-bold uppercase opacity-50 border border-current px-2 py-1 rounded">React</span>
                                    <span className="text-xs font-mono font-bold uppercase opacity-50 border border-current px-2 py-1 rounded">WebGL</span>
                                </div>
                            </div>
                        </FrostedCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
