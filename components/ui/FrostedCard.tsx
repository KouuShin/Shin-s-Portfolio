import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface FrostedCardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const FrostedCard = forwardRef<HTMLDivElement, FrostedCardProps>(
    ({ className, children, hoverEffect = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500",
                    hoverEffect && "hover:border-[var(--color-accent-blue)]/50 hover:bg-white/10 hover:-translate-y-1",
                    className
                )}
                {...props}
            >
                {/* Noise overlay specific to card for extra texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Content */}
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        );
    }
);

FrostedCard.displayName = "FrostedCard";
