import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section className="relative min-h-[100vh] w-full flex flex-col justify-between bg-transparent pt-12 md:pt-16 pb-0 px-8 md:px-[104px] overflow-hidden">

            {/* HEADER ROW: Name - Nav - CTA */}
            <header className="relative z-20 flex justify-between items-start w-full">

                {/* 1. TOP LEFT: Name / Brand */}
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#ede8d9] leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        KOU XINYI
                    </h1>
                </div>

                {/* 2. TOP CENTER: Navigation */}
                <nav className="hidden md:flex flex-1 justify-center gap-16">
                    {['Work', 'Archive', 'About'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-base font-medium text-[#ede8d9]/50 hover:text-[#ede8d9] transition-colors uppercase tracking-wide"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* 3. TOP RIGHT: CTA Button */}
                <div className="flex-1 flex justify-end">
                    <button className="px-6 py-2 border border-[#ede8d9]/60 rounded-full text-sm font-bold text-[#ede8d9] uppercase hover:bg-[#ede8d9] hover:text-[#111210] transition-all">
                        Start a project
                    </button>
                </div>
            </header>

            {/* BODY CONTENT: Affiche Poster Layout */}

            {/* Massive Slogan - Center/Left Vertical Alignment */}
            <div className="relative flex-grow w-full flex flex-col justify-center pb-12 md:pb-24 pt-8 md:pt-16 z-10 pointer-events-none">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[12vw] md:text-[10vw] lg:text-[8.5vw] font-bold uppercase leading-[0.8] tracking-tighter text-[#ede8d9]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    I don't define<br />
                    myself by a title.<br />
                    <span className="text-[#e85d3a]">I define myself</span><br />
                    by my curiosity.
                </motion.h2>
            </div>

            {/* Bottom Grid: Dense Narrative & Metadata Specs */}
            <div className="w-full flex flex-col md:flex-row justify-between items-end gap-12 z-20 pb-8 md:pb-16 pt-12">

                {/* Left: Dense Narrative Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full md:max-w-sm lg:max-w-md"
                >
                    <div className="w-full border-t border-[#ede8d9]/20 pt-4">
                        <span className="block text-[10px] uppercase font-mono tracking-[0.3em] text-[#e85d3a] mb-4">
                            Manifesto / 001
                        </span>
                        <p className="text-xs md:text-sm text-[#ede8d9]/70 leading-[1.8] font-medium text-justify">
                            I'm not a cog in the machine. I observe, explore, sense, and connect—bridging business needs with product delivery through clear requirement documentation and effective team communication. With proficiency in AI tools and prompt engineering, I build custom workflows and skills. I believe in agile reflection and proactive learning, constantly improving myself through observation and documentation.
                        </p>
                    </div>
                </motion.div>

                {/* Right: Technical Specs / Focus */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col gap-6 text-left md:text-right w-full md:w-auto"
                >
                    <div className="border-t border-[#ede8d9]/20 pt-4 md:border-none md:pt-0">
                        <span className="block text-[10px] uppercase font-mono tracking-[0.3em] text-[#e85d3a] mb-2">
                            Identity
                        </span>
                        <span className="block text-sm font-bold uppercase tracking-[0.15em] text-[#ede8d9]">
                            The Undefined Explorer
                        </span>
                    </div>

                    <div className="border-t border-[#ede8d9]/20 pt-4 md:border-none md:pt-0">
                        <span className="block text-[10px] uppercase font-mono tracking-[0.3em] text-[#e85d3a] mb-2">
                            Current Focus
                        </span>
                        <span className="block text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-[#ede8d9] md:max-w-[320px] md:ml-auto leading-relaxed text-[#ede8d9]/90">
                            Vibecoding / Woman in Tech / Documenting Spontaneous Insights / SaaS Product Design
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Remove the original BOTTOM STRIP as it clashes with the new poster layout's bottom anchors */}
        </section>
    );
};
