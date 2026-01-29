import { motion } from 'framer-motion';

export const AboutSection = () => {
    // Cyclic colors for tags
    const colors = [
        'border-[var(--color-accent-green)] text-[var(--color-accent-green)]',
        'border-[var(--color-accent-blue)] text-[var(--color-accent-blue)]',
        'border-[var(--color-accent-red)] text-[var(--color-accent-red)]'
    ];

    return (
        <section className="py-[var(--space-3xl)] relative">
            <div className="container mx-auto px-[var(--space-lg)]">
                <div className="flex flex-col md:flex-row gap-[var(--space-3xl)] items-start">

                    {/* Left: Headline - Swiss Style Big Type */}
                    <div className="md:w-5/12 sticky top-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-text)] mb-[var(--space-lg)] leading-tight tracking-tight"
                        >
                            Design is
                            <span className="block text-[var(--color-accent-green)]">Logic.</span>
                            Code is
                            <span className="block text-[var(--color-accent-red)]">Poetry.</span>
                        </motion.h2>
                    </div>

                    {/* Right: Content - Spacious */}
                    <div className="md:w-7/12 pt-[var(--space-md)]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="prose prose-xl text-[var(--color-text)] font-body font-light opacity-90"
                        >
                            <p className="mb-[var(--space-lg)]">
                                I specialize in building complex web applications that unify form and function. With a background in both <strong className="font-bold text-[var(--color-accent-blue)]">visual design</strong> and <strong className="font-bold text-[var(--color-accent-blue)]">software engineering</strong>, I bridge the gap between creative vision and technical implementation.
                            </p>
                            <p className="mb-[var(--space-2xl)]">
                                Currently focused on the React ecosystem, performance optimization, and scalable design systems.
                            </p>

                            {/* Skills List - Pill Tags with Palette */}
                            <div className="border-t border-[var(--color-text)]/10 pt-[var(--space-xl)]">
                                <h3 className="font-heading text-sm font-bold text-[var(--color-text)] uppercase tracking-widest mb-[var(--space-lg)]">Core Technologies</h3>
                                <div className="flex flex-wrap gap-3">
                                    {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'System Design'].map((skill, index) => (
                                        <span key={skill} className={`px-4 py-2 bg-transparent border rounded-full text-sm font-semibold tracking-wide ${colors[index % colors.length]}`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
