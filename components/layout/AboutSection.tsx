import { motion } from 'framer-motion';

export const AboutSection = () => {
    return (
        <section className="py-[var(--space-3xl)] bg-[var(--color-surface-hover)]/50">
            <div className="container mx-auto px-[var(--space-lg)]">
                <div className="flex flex-col md:flex-row gap-[var(--space-2xl)] items-start">

                    {/* Left: Headline */}
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-[var(--space-lg)] leading-tight"
                        >
                            Design is not just what it looks like. <br />
                            <span className="text-[var(--color-cta)]">It's how it works.</span>
                        </motion.h2>
                    </div>

                    {/* Right: Content */}
                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="prose prose-lg text-[var(--color-secondary)] font-body"
                        >
                            <p className="mb-[var(--space-md)]">
                                I specialize in building complex web applications that are as beautiful as they are functional. With a background in both design and engineering, I bridge the gap between creative vision and technical implementation.
                            </p>
                            <p className="mb-[var(--space-xl)]">
                                Currently focused on React ecosystem, performance optimization, and design systems.
                            </p>

                            {/* Skills List - Clean Tags */}
                            <div className="border-t border-[var(--color-primary)]/10 pt-[var(--space-lg)]">
                                <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] mb-[var(--space-md)]">Core Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'System Design'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-white border border-[var(--color-primary)]/10 rounded-full text-sm font-medium text-[var(--color-primary)]">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
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

                </div >
            </div >
        </section >
    );
};
