import { FrostedCard } from '@/components/ui/FrostedCard';
import { Code2, Globe, Palette, Sparkles, Terminal } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12 items-center">

                    {/* Editorial Text Column */}
                    <div className="md:col-span-7 space-y-8">
                        <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter text-[var(--color-text-primary)]">
                            About <span className="font-hand text-[var(--color-accent-blue)]">Me</span>
                        </h2>
                        <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-[var(--color-text-secondary)] font-normal">
                            <p>
                                I'm a passionate developer with a keen eye for design. I bridge the gap between <strong className="text-[var(--color-text-primary)]">engineering</strong> and <strong className="text-[var(--color-text-primary)]">aesthetics</strong>.
                            </p>
                            <p>
                                Specializing in React, TypeScript, and modern design systems. I don't just write code; I curated digital journeys.
                            </p>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            {['React', 'TypeScript', 'Tailwind', 'Node.js', 'Next.js', 'Three.js'].map((tech) => (
                                <span key={tech} className="px-4 py-2 rounded-full border border-[var(--color-text-primary)]/20 text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-accent-lime)] transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frosted Card Column */}
                    <div className="md:col-span-5 relative">
                        <FrostedCard className="p-8 rotate-3 transition-transform hover:rotate-0">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Code2 className="w-32 h-32" />
                            </div>
                            <h3 className="font-heading text-3xl font-bold mb-8 flex items-center gap-3">
                                <Terminal className="w-8 h-8 text-[var(--color-accent-lime)]" />
                                What I Do
                            </h3>

                            <div className="space-y-6">
                                {[
                                    { icon: Globe, title: "Web Development", desc: "Scalable & Performant" },
                                    { icon: Palette, title: "UI/UX Design", desc: "Intuitive & Beautiful" },
                                    { icon: Sparkles, title: "Creative Coding", desc: "WebGL & Interactions" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="p-3 bg-[var(--color-accent-lime)]/10 rounded-lg text-[var(--color-accent-lime)] group-hover:bg-[var(--color-accent-blue)]/10 group-hover:text-[var(--color-accent-blue)] transition-colors">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-sm opacity-60">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FrostedCard>
                    </div>

                </div>
            </div>
        </section>
    );
};
