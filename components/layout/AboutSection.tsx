import { motion } from 'framer-motion';

export const AboutSection = () => {
    const skills = [
        { name: 'React', color: 'green' },
        { name: 'TypeScript', color: 'blue' },
        { name: 'Tailwind CSS', color: 'red' },
        { name: 'Node.js', color: 'green' },
        { name: 'PostgreSQL', color: 'blue' },
        { name: 'System Design', color: 'red' },
    ];

    const getColorClass = (color: string) => {
        switch (color) {
            case 'green':
                return 'border-[var(--color-accent-green)] text-[var(--color-accent-green)] hover:bg-[var(--color-accent-green)] hover:text-white';
            case 'blue':
                return 'border-[var(--color-accent-blue)] text-[var(--color-accent-blue)] hover:bg-[var(--color-accent-blue)] hover:text-white';
            case 'red':
                return 'border-[var(--color-accent-red)] text-[var(--color-accent-red)] hover:bg-[var(--color-accent-red)] hover:text-white';
            default:
                return '';
        }
    };

    return (
        <section className="py-[var(--space-3xl)] relative">
            <div className="container mx-auto px-[var(--space-lg)]">
                <div className="flex flex-col md:flex-row gap-[var(--space-3xl)] items-start">

                    {/* Left: Headline - Swiss Style Big Type */}
                    <div className="md:w-5/12 md:sticky md:top-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-[var(--space-lg)]"
                        >
                            Design is{' '}
                            <span className="block text-[var(--color-accent-green)]">Logic.</span>
                            Code is{' '}
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
                            className="space-y-[var(--space-lg)]"
                        >
                            <p className="text-xl font-light opacity-90 leading-relaxed">
                                I specialize in building complex web applications that unify form and function.
                                With a background in both{' '}
                                <strong className="font-bold text-[var(--color-accent-blue)]">visual design</strong> and{' '}
                                <strong className="font-bold text-[var(--color-accent-blue)]">software engineering</strong>,
                                I bridge the gap between creative vision and technical implementation.
                            </p>

                            <p className="text-xl font-light opacity-90 leading-relaxed">
                                Currently focused on the React ecosystem, performance optimization, and scalable design systems.
                            </p>

                            {/* Skills List - Pill Tags with Palette */}
                            <div className="border-t border-[var(--color-text)]/10 pt-[var(--space-xl)] mt-[var(--space-2xl)]">
                                <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] mb-[var(--space-lg)]">
                                    Core Technologies
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className={`px-4 py-2 bg-transparent border-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-default ${getColorClass(skill.color)}`}
                                        >
                                            {skill.name}
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
