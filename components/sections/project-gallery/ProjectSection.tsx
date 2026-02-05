import { motion } from 'framer-motion';

export const ProjectSection = () => {
    return (
        <section id="projects" className="relative z-20 min-h-screen py-32 mt-24 bg-[#ffded4]">

            <div className="container mx-auto px-6 md:px-12">

                {/* Section Divider - Clear visual break */}
                <div className="mb-20 pt-12 border-t-2 border-[#385C96]/20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/50">
                            (02) Selected Works
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold mt-4 text-[#385C96]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Project Gallery
                        </h2>
                        <p className="text-lg text-[#1A1A1A]/60 mt-4 max-w-2xl">
                            A curated collection of design explorations, product work, and creative experiments.
                        </p>
                    </motion.div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: item * 0.1 }}
                            className="aspect-[4/5] bg-white/20 backdrop-blur-sm border border-[#1A1A1A]/10 flex flex-col justify-center items-center p-8 text-center group hover:bg-white/40 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full border border-[#385C96]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="text-[#385C96] font-mono text-sm">0{item}</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Project Name</h3>
                            <p className="text-sm text-[#1A1A1A]/60 max-w-[200px]">
                                Coming soon. Documenting the process.
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
