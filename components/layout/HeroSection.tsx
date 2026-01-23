import { motion } from 'framer-motion';
import { ScribbleButton } from '@/components/ui/ScribbleButton';
import { ArrowRight, Github } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 font-hand text-2xl text-[var(--color-accent-blue)] -rotate-3 inline-block"
                >
                    Full Stack Developer & UI/UX Designer
                </motion.div>

                {/* Main Title - Massive "Wall of Text" */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-heading text-[12vw] leading-[0.85] font-bold uppercase tracking-tighter text-[var(--color-text-primary)] mix-blend-overlay"
                >
                    Crafting <br />
                    <span className="text-[var(--color-accent-lime)] mix-blend-normal">Digital</span> <br />
                    Reality
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-2xl mx-auto"
                >
                    I build <span className="text-[var(--color-text-primary)] font-bold border-b-2 border-[var(--color-accent-blue)]">accessible</span>, pixel-perfect experiences for the web.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <ScribbleButton variant="primary" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                        View Projects <ArrowRight className="w-4 h-4" />
                    </ScribbleButton>

                    <ScribbleButton variant="outline" onClick={() => window.open('https://github.com', '_blank')}>
                        <Github className="w-4 h-4" /> GitHub
                    </ScribbleButton>
                </motion.div>
            </div>
        </section>
    );
};
