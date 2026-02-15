import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section className="relative h-screen w-full flex flex-col justify-between bg-transparent pt-12 md:pt-32 pb-0 px-8 md:px-[104px] overflow-hidden">

            {/* HEADER ROW: Name - Nav - CTA */}
            <header className="relative z-20 flex justify-between items-start w-full">

                {/* 1. TOP LEFT: Name / Brand */}
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1D3344] leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        KOU XINYI
                    </h1>
                </div>

                {/* 2. TOP CENTER: Navigation */}
                <nav className="hidden md:flex flex-1 justify-center gap-16">
                    {['Work', 'Archive', 'About'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-base font-medium text-[#1D3344]/60 hover:text-[#1D3344] transition-colors uppercase tracking-wide"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* 3. TOP RIGHT: CTA Button */}
                <div className="flex-1 flex justify-end">
                    <button className="px-6 py-2 border-2 border-[#1D3344] rounded-full text-sm font-bold text-[#1D3344] uppercase hover:bg-[#1D3344] hover:text-white transition-all shadow-[2px_2px_0px_0px_#1D3344] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]">
                        Start a project
                    </button>
                </div>
            </header>

            {/* BODY CONTENT: Right Block Intro */}
            <div className="relative z-10 flex-grow flex items-center justify-end w-full">
                <div className="w-full md:w-[600px] text-right mr-0 md:mr-12">

                    {/* Intro Paragraph */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-12"
                    >
                        <p className="text-2xl md:text-4xl font-medium text-[#1D3344] leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Visual artist merging AI, abstraction, and speculative design.
                        </p>
                    </motion.div>

                    {/* Identity & Focus Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col items-end space-y-8"
                    >
                        {/* Identity */}
                        <div className="flex flex-col items-end">
                            <span className="text-xs font-mono uppercase tracking-widest text-[#1D3344]/50 mb-2">Identity</span>
                            <span className="text-lg font-bold text-[#1D3344] tracking-wide">The Undefined Explorer</span>
                        </div>

                        {/* Current Focus */}
                        <div className="flex flex-col items-end">
                            <span className="text-xs font-mono uppercase tracking-widest text-[#1D3344]/50 mb-2">Current Focus</span>
                            <span className="text-lg font-bold text-[#1D3344] text-right tracking-wide">
                                GenAI Visual Art & <br /> SaaS Product Design
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* BOTTOM STRIP: Project Header Style */}
            <div className="w-full border-t border-[#1D3344] py-6 bg-[#ffdac2] z-20"> {/* Matches background color */}
                <div className="flex justify-between items-center text-[#1D3344] px-4 md:px-0">
                    <div className="flex items-center gap-4">
                        <span className="font-mono text-sm font-bold">(001)</span>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 font-bold text-lg hidden md:block type-writer tracking-tight">
                        Singularity Drift
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide group cursor-pointer hover:opacity-70 transition-opacity">
                        Generative AI Visual Art
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                </div>
            </div>

        </section>
    );
};
