import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ScribbleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
}

export const ScribbleButton = forwardRef<HTMLButtonElement, ScribbleButtonProps>(
    ({ className, variant = 'primary', children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover="hover"
                className={cn(
                    "relative group px-6 py-3 font-heading font-bold uppercase tracking-wider text-sm transition-colors",
                    variant === 'primary' && "text-[var(--color-canvas-dark)] dark:text-[var(--color-canvas-dark)]",
                    variant === 'outline' && "text-[var(--color-text-primary)]",
                    className
                )}
                {...props}
            >
                {/* Background for Primary */}
                {variant === 'primary' && (
                    <span className="absolute inset-0 bg-[var(--color-accent-lime)] -skew-x-12 rounded-sm group-hover:bg-[var(--color-accent-blue)] transition-colors duration-300" />
                )}

                {/* Text Content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>

                {/* Scribble Underline Animation (for Outline/Ghost) */}
                {variant !== 'primary' && (
                    <svg className="absolute w-full h-3 -bottom-1 left-0 pointer-events-none overflow-visible">
                        <motion.path
                            d="M 0 5 Q 50 10 100 0"
                            fill="none"
                            stroke="var(--color-accent-blue)"
                            strokeWidth="2"
                            variants={{
                                hover: { pathLength: 1, opacity: 1 },
                                initial: { pathLength: 0, opacity: 0 }
                            }}
                            initial="initial"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </svg>
                )}
            </motion.button>
        );
    }
);

ScribbleButton.displayName = "ScribbleButton";
