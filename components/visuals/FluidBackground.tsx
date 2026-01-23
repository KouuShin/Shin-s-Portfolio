import { motion } from 'framer-motion';

export const FluidBackground = () => {
    return (
        <div className="fixed inset-0 z-0 h-full w-full overflow-hidden bg-[var(--color-canvas-light)] dark:bg-[var(--color-canvas-dark)] transition-colors duration-1000">
            {/* Orb 1: Purple/Pink Aura - Top Left */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-1/4 -left-1/4 h-[80vh] w-[80vh] rounded-full bg-[var(--color-accent-purple)] opacity-20 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
            />

            {/* Orb 2: Cyan/Blue Aura - Bottom Right */}
            <motion.div
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, 50, -100, 0],
                    scale: [1, 1.1, 0.8, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute -bottom-1/4 -right-1/4 h-[90vh] w-[90vh] rounded-full bg-[var(--color-accent-blue)] opacity-15 blur-[140px] mix-blend-multiply dark:mix-blend-screen"
            />

            {/* Orb 3: Lime/Warm Aura - Center Floating */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, 100, -100, 0],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute top-1/3 left-1/3 h-[60vh] w-[60vh] rounded-full bg-[var(--color-accent-lime)] opacity-10 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
            />
        </div>
    );
};
