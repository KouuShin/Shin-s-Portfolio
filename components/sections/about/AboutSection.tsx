import { motion } from 'framer-motion';

export const AboutSection = () => {
    const skills = [
        "Vibecoding & AI Workflow",
        "Knowledge Base Construction",
        "Figma & UI/UX Design",
        "Information Architecture",
        "Psychology & Sociology"
    ];

    return (
        <section id="about" className="relative min-h-screen py-32 bg-transparent flex items-center">
            <div className="container mx-auto px-6 md:px-12">

                {/* Modern Asymmetric Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Column: Skills List */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4 space-y-4"
                    >
                        {skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group cursor-default"
                            >
                                <p className="text-base md:text-lg text-[#1A1A1A] font-medium group-hover:text-[#385C96] transition-colors">
                                    {skill}
                                </p>
                            </motion.div>
                        ))}

                        {/* Methodology Label */}
                        <div className="pt-8 mt-8 border-t border-[#1A1A1A]/10">
                            <span className="text-xs font-mono uppercase text-[#1A1A1A]/50 tracking-wider">
                                Methodology
                            </span>
                        </div>
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
                            <h2 className="text-6xl md:text-8xl font-bold text-[#385C96] leading-[0.9] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                VIBE<br />CODING
                            </h2>
                            <div className="w-20 h-1 bg-[#385C96]/30 mb-8"></div>
                        </div>

                        {/* Philosophy Text */}
                        <div className="max-w-2xl space-y-6">
                            <p className="text-2xl md:text-3xl font-medium text-[#1A1A1A] leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                "I don't define myself by a title. I define myself by my curiosity."
                            </p>

                            <p className="text-lg text-[#1A1A1A]/70 leading-relaxed">
                                In the age of AI, I act as a bridge between disciplines. Whether it's <span className="text-[#385C96] font-semibold">UI/UX design</span>, <span className="text-[#385C96] font-semibold">Product Management</span>, or exploring <span className="text-[#385C96] font-semibold">Human Psychology</span>, my goal is the same: to create with taste and precision.
                            </p>

                            <p className="text-lg text-[#1A1A1A]/70 leading-relaxed">
                                I believe in <strong>Vibecoding</strong>—using AI not just as a tool, but as a workflow partner to build my own digital skill library and customized product workflows from 0 to 1.
                            </p>

                            {/* Content Creator Badge */}
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-[#385C96]/20 rounded-full mt-8">
                                <div className="w-2 h-2 rounded-full bg-[#385C96] animate-pulse"></div>
                                <span className="text-sm font-medium text-[#385C96]">
                                    Writing on Xiaohongshu about Design, AI & Psychology
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
