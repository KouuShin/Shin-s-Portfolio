import { motion } from 'framer-motion';
import vibecoderImg from '@/assets/VIBECODER.png';

export const AboutSection = () => {
    const skills = [
        "AI Tools & LLM Proficiency",
        "Prompt Engineering & Custom Skills",
        "Requirement Documentation",
        "Business Communication & Interviews",
        "Agile Reflection & Observation"
    ];

    return (
        <section id="about" className="relative min-h-screen py-32 bg-transparent flex items-center">
            <div className="container mx-auto px-8 md:px-24">

                {/* Hard-Locked Horizontal Flex Layout for Affiche Alignment */}
                <div className="flex flex-row justify-between items-start w-full gap-4 md:gap-12">

                    {/* Left Column: Skills List */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-1/2 md:w-1/3 flex flex-col pt-3 md:pt-6"
                    >
                        {/* Section Label */}
                        <div className="mb-6 md:mb-10">
                            <span className="text-[10px] md:text-xs font-mono uppercase text-[#e85d3a] tracking-[0.2em] block mb-2">
                                Capabilities & Interests
                            </span>
                            <div className="w-12 h-[1px] bg-[#ede8d9]/20"></div>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="group cursor-default"
                                >
                                    <p className="text-xs sm:text-sm md:text-base text-[#ede8d9]/70 font-medium group-hover:text-[#ede8d9] transition-colors">
                                        {skill}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Large Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-1/2 md:w-2/3 flex flex-col items-start md:items-end text-left md:text-right"
                    >
                        {/* Hero Statement */}
                        <div className="mb-4 -mt-2 md:-mt-6 lg:-mt-10 w-full flex justify-end">
                            <img 
                                src={vibecoderImg} 
                                alt="Vibe Coder Sticker" 
                                className="w-[60vw] md:w-[40vw] lg:w-[420px] h-auto object-contain invert mix-blend-screen opacity-90 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 origin-right"
                            />
                        </div>

                        {/* Content Creator Badge */}
                        <div className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-[#1c1c1a] border border-[#ede8d9]/10 rounded-full mt-4 hover:bg-[#ede8d9]/5 transition-colors self-start md:self-end">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#e85d3a] animate-pulse"></div>
                            <span className="text-[9px] md:text-xs font-medium text-[#ede8d9]/80 uppercase tracking-widest text-left">
                                Documenting insights on Xiaohongshu
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
