import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-transparent">

            {/* 
                GRID LAYOUT: "Brand Handbook" / Magazine Style
            */}
            <div className="relative z-10 w-full h-full grid grid-cols-12 grid-rows-6 p-6 md:p-12 gap-4">

                {/* TOP LEFT: Identity Label */}
                <div className="col-span-6 row-span-1 flex flex-col justify-start items-start border-t border-l border-[#1A1A1A]/20 pt-2 pl-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/60">Identity</span>
                    <span className="text-sm font-medium text-[#385C96]">The Undefined Explorer</span>
                </div>

                {/* TOP RIGHT: Current Status - ABSOLUTELY POSITIONED in top-right corner */}
                <div className="absolute top-6 md:top-12 right-6 md:right-12 z-20 flex flex-col items-end">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/60">Current Focus</span>
                    <span className="text-sm font-medium text-[#385C96] text-right">SaaS Product Manager<br />@ Volvo</span>
                </div>

                {/* CENTER: Massive Typography */}
                <div className="col-span-12 row-span-3 flex flex-col justify-center items-center">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center text-[#385C96] mix-blend-multiply"
                    >
                        <h1 className="text-[13vw] leading-[0.8] font-bold tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            KOU XINYI
                        </h1>
                        <div className="flex items-center justify-center gap-4 mt-2">
                            <span className="h-[1px] w-12 bg-[#385C96]/40 hidden md:block"></span>
                            <p className="text-lg md:text-2xl font-light tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                Digital Explorer
                            </p>
                            <span className="h-[1px] w-12 bg-[#385C96]/40 hidden md:block"></span>
                        </div>
                    </motion.div>
                </div>

                {/* BOTTOM LEFT: Philosophy Quote */}
                <div className="col-span-6 md:col-span-5 row-span-2 flex flex-col justify-end items-start border-b border-l border-[#1A1A1A]/20 pb-2 pl-2">
                    <p className="text-sm md:text-base text-[#1A1A1A] font-medium leading-relaxed italic">
                        "Driven by taste,<br />creativity, and<br />the desire to explore."
                    </p>
                </div>

                {/* BOTTOM RIGHT: Scroll Indicator */}
                <div className="col-span-6 md:col-span-7 row-span-2 flex flex-col justify-end items-end border-b border-r border-[#1A1A1A]/20 pb-2 pr-2">
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex items-center gap-2"
                    >
                        <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/60 hidden md:block">Scroll to Discover</span>
                        <ArrowDown size={18} className="text-[#385C96]" />
                    </motion.div>
                </div>

            </div>

        </section>
    );
};
