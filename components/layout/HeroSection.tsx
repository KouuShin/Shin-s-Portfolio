import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-[var(--space-lg)] pt-[var(--space-3xl)] pb-[var(--space-2xl)]">
            <div className="container mx-auto max-w-6xl">

                {/* Intro Tag */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-[var(--space-lg)] flex items-center gap-3"
                >
                    <span className="w-12 h-[2px] bg-[var(--color-accent-red)]" />
                    <span className="font-body font-medium text-[var(--color-accent-blue)] uppercase tracking-[0.2em] text-sm">
                        Full Stack Developer & Designer
                    </span>
                </motion.div>

                {/* Main Title with Gradient */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight mb-[var(--space-xl)]"
                >
                    Building <br />
                    Digital{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-green)] via-[var(--color-accent-blue)] to-[var(--color-accent-red)]">
                        Experiences
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl max-w-2xl leading-relaxed font-body opacity-80 mb-[var(--space-2xl)]"
                >
                    Crafting accessible, pixel-perfect web applications with a focus on{' '}
                    <span className="text-[var(--color-accent-blue)] font-medium">systematic design</span> and{' '}
                    <span className="text-[var(--color-accent-green)] font-medium">organic interaction</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-[var(--space-md)]"
                >
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative px-8 py-4 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] font-heading font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent-blue)]/20 hover:-translate-y-1"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-green)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <button
                        onClick={() => window.open('https://github.com', '_blank')}
                        className="px-8 py-4 rounded-full border-2 border-[var(--color-text)]/20 text-[var(--color-text)] font-heading font-semibold hover:border-[var(--color-accent-blue)] hover:text-[var(--color-accent-blue)] transition-all duration-300 flex items-center gap-2 bg-white/50 backdrop-blur-sm"
                    >
                        <Github className="w-5 h-5" />
                        GitHub
                    </button>

                    <button
                        onClick={() => window.location.href = 'mailto:your@email.com'}
                        className="px-8 py-4 rounded-full border-2 border-[var(--color-text)]/20 text-[var(--color-text)] font-heading font-semibold hover:border-[var(--color-accent-green)] hover:text-[var(--color-accent-green)] transition-all duration-300 flex items-center gap-2 bg-white/50 backdrop-blur-sm"
                    >
                        <Mail className="w-5 h-5" />
                        Contact
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
