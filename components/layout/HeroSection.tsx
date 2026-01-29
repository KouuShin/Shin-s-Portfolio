import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center px-[var(--space-lg)] pt-[var(--space-3xl)]">
            <div className="container mx-auto max-w-5xl">
                {/* Minimal Intro Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-[var(--space-md)] font-body font-medium text-[var(--color-cta)] uppercase tracking-widest text-sm"
                >
                    Full Stack Developer & Designer
                </motion.div>

                {/* Main Title - Archivo Bold */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-[var(--color-primary)] mb-[var(--space-lg)]"
                >
                    Building <br />
                    Digital <span className="text-[var(--color-cta)]">Utility.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-[var(--color-secondary)] max-w-2xl leading-relaxed font-body"
                >
                    Crafting accessible, pixel-perfect experiences for the web with a focus on systematic design and performance.
                </motion.p>

                {/* CTA Buttons - Clean Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-[var(--space-xl)] flex flex-wrap gap-[var(--space-md)]"
                >
                    <button
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        className="bg-[var(--color-cta)] text-white px-8 py-4 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                        View Projects <ArrowRight className="w-5 h-5" />
                    </button>

                    <button
                        onClick={() => window.open('https://github.com', '_blank')}
                        className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-lg font-heading font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors flex items-center gap-2"
                    >
                        <Github className="w-5 h-5" /> GitHub
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
