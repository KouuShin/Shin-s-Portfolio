import { motion } from 'framer-motion';

const ACCENT_COLORS = ['#e85d3a', '#4a7c9e', '#7b5ea7'];

export const ProjectSection = () => {
    return (
        <section id="projects" className="relative z-20 min-h-screen py-32 mt-24 bg-transparent">

            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="mb-20 pt-12 border-t border-[#ede8d9]/10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-xs font-mono uppercase tracking-widest text-[#ede8d9]/35">
                            (02) Selected Works
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold mt-4 text-[#ede8d9]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Project Gallery
                        </h2>
                        <p className="text-lg text-[#ede8d9]/45 mt-4 max-w-2xl leading-relaxed">
                            A curated collection of design explorations, product work, and creative experiments.
                        </p>
                    </motion.div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {[0, 1, 2].map((item) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: item * 0.15 }}
                            className="group relative w-full flex flex-col hover:-translate-y-2 transition-transform duration-500 cursor-pointer"
                        >
                            {/* Graphic Area */}
                            <div
                                className="w-full aspect-[4/5] overflow-hidden relative"
                                style={{ backgroundColor: ACCENT_COLORS[item] + '18', border: `1px solid ${ACCENT_COLORS[item]}22` }}
                            >
                                {/* Atmospheric center glow */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: `radial-gradient(ellipse at 50% 40%, ${ACCENT_COLORS[item]}30 0%, transparent 70%)`
                                    }}
                                />
                                {/* Orbit ring — referencing the space poster's orbital motif */}
                                <div
                                    className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        width: '55%',
                                        paddingTop: '55%',
                                        border: `1px solid ${ACCENT_COLORS[item]}40`,
                                        borderRadius: '50%',
                                    }}
                                />
                                {/* Inner planet dot */}
                                <div
                                    className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:scale-110 transition-transform duration-500"
                                    style={{
                                        width: '28%',
                                        paddingTop: '28%',
                                        backgroundColor: ACCENT_COLORS[item],
                                        opacity: 0.85,
                                    }}
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-[#111210]/0 group-hover:bg-[#111210]/15 transition-colors duration-500" />
                                {/* Coming soon label */}
                                <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ede8d9]/20">
                                        Coming Soon
                                    </span>
                                </div>
                            </div>

                            {/* Content Area (Bottom ~25%) */}
                            <div className="mt-8 flex flex-col flex-shrink-0">
                                <h3 className="text-lg md:text-xl font-bold text-[#ede8d9] tracking-[0.15em] uppercase mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    Case Study 0{item + 1}
                                </h3>

                                <div className="flex justify-between items-start gap-8">
                                    {/* Left — Specs */}
                                    <div className="flex-1">
                                        <p className="text-xs text-[#ede8d9]/40 font-mono leading-[1.8]">
                                            Role: Design<br />
                                            Date: 2024<br />
                                            Type: Web App
                                        </p>
                                    </div>
                                    {/* Right — Description */}
                                    <div className="flex-[2]">
                                        <p className="text-sm md:text-base text-[#ede8d9]/50 leading-[1.8] line-clamp-3 font-medium">
                                            A detailed exploration inspired by vintage scientific posters, utilizing strict grids, high-contrast typography, and purposeful negative space.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
