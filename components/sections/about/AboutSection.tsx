import { motion } from 'framer-motion';

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

                {/* Modern Asymmetric Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

                    {/* Left Column: Skills List */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4 space-y-6 mb-16"
                    >
                        {/* Section Label */}
                        <div className="mb-8">
                            <span className="text-xs font-mono uppercase text-[#1D3344]/50 tracking-wider block mb-2">
                                Capabilities & Interests
                            </span>
                            <div className="w-12 h-[2px] bg-[#1D3344]/20"></div>
                        </div>

                        {skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group cursor-default"
                            >
                                <p className="text-base md:text-lg text-[#1D3344] font-medium group-hover:text-[#1D3344]/80 transition-colors">
                                    {skill}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Column: Large Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-8"
                    >
                        {/* Hero Statement */}
                        <div className="mb-12">
                            <h2 className="text-6xl md:text-8xl font-bold text-[#1D3344] leading-[0.9] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                VIBE<br />CODING
                            </h2>
                            <div className="w-20 h-1 bg-[#1D3344]/30 mb-8"></div>
                        </div>

                        {/* Philosophy Text */}
                        <div className="max-w-3xl space-y-10">
                            <p className="text-2xl md:text-3xl font-medium text-[#1D3344] leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                "I don't define myself by a title. I define myself by my curiosity."
                            </p>

                            <p className="text-lg text-[#1D3344]/70 leading-loose">
                                I'm not a cog in the machine. I <span className="text-[#1D3344] font-semibold">observe, explore, sense, and connect</span>—bridging business needs with product delivery through clear requirement documentation and effective team communication.
                            </p>

                            <p className="text-lg text-[#1D3344]/70 leading-loose">
                                With proficiency in <strong>AI tools and prompt engineering</strong>, I build custom workflows and skills. I believe in <strong>agile reflection</strong> and proactive learning, constantly improving myself through observation and documentation.
                            </p>

                            {/* Content Creator Badge */}
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-[#1D3344]/20 rounded-full mt-8">
                                <div className="w-2 h-2 rounded-full bg-[#1D3344] animate-pulse"></div>
                                <span className="text-sm font-medium text-[#1D3344]">
                                    Documenting insights on Xiaohongshu
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
