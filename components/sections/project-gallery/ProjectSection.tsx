import { motion } from 'framer-motion';
import synapseCoverImg from '@/assets/synapse-ai-assistant_cover_page.png';

const ACCENT_COLORS = ['#e85d3a', '#4a7c9e', '#7b5ea7'];

const projectsData = [
    {
        id: "01",
        title: "Synapse AI Platform",
        role: "Product & UX/UI",
        date: "Jun 2025",
        type: "Internal AI Tool",
        description: "An internal AI-driven platform designed to supercharge product and engineering workflows. Synapse seamlessly integrates into daily operations to assist generating PRDs and BRDs, utilizing lossless Markdown translation to eliminate communication friction between human teams and AI agents.",
        image: synapseCoverImg
    },
    {
        id: "02",
        title: "Case Study 02",
        role: "TBD",
        date: "2024",
        type: "TBD",
        description: "Awaiting next project details from user.",
        image: null
    },
    {
        id: "03",
        title: "Case Study 03",
        role: "TBD",
        date: "2024",
        type: "TBD",
        description: "Awaiting next project details from user.",
        image: null
    }
];

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
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group relative w-full flex flex-col hover:-translate-y-2 transition-transform duration-500 cursor-pointer"
                        >
                            {/* Graphic Area */}
                            <div
                                className="w-full aspect-[4/5] overflow-hidden relative rounded-sm"
                                style={{ backgroundColor: ACCENT_COLORS[index] + '08', border: `1px solid ${ACCENT_COLORS[index]}15` }}
                            >
                                {/* Background Image Integration */}
                                {project.image ? (
                                    <div className="absolute inset-0 w-full h-full mix-blend-screen opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale-[40%] contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                                    </div>
                                ) : (
                                    <>
                                        {/* Atmospheric center glow (fallback for empty) */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: `radial-gradient(ellipse at 50% 40%, ${ACCENT_COLORS[index]}20 0%, transparent 70%)`
                                            }}
                                        />
                                        {/* Orbit ring — referencing the space poster's orbital motif */}
                                        <div
                                            className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
                                            style={{
                                                width: '55%',
                                                paddingTop: '55%',
                                                border: `1px solid ${ACCENT_COLORS[index]}30`,
                                                borderRadius: '50%',
                                            }}
                                        />
                                        {/* Inner planet dot */}
                                        <div
                                            className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:scale-110 transition-transform duration-500"
                                            style={{
                                                width: '28%',
                                                paddingTop: '28%',
                                                backgroundColor: ACCENT_COLORS[index],
                                                opacity: 0.6,
                                            }}
                                        />
                                        {/* Coming soon label */}
                                        <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                                            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ede8d9]/20">
                                                Coming Soon
                                            </span>
                                        </div>
                                    </>
                                )}

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-[#111210]/0 group-hover:bg-[#111210]/10 transition-colors duration-500 pointer-events-none" />
                            </div>

                            {/* Content Area (Bottom ~25%) */}
                            <div className="mt-8 flex flex-col flex-shrink-0">
                                <h3 className="text-lg md:text-xl font-bold text-[#ede8d9] tracking-[0.05em] uppercase mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {project.title}
                                </h3>

                                <div className="flex justify-between items-start gap-8">
                                    {/* Left — Specs */}
                                    <div className="flex-1">
                                        <p className="text-xs text-[#ede8d9]/40 font-mono leading-[1.8]">
                                            Role: {project.role}<br />
                                            Date: {project.date}<br />
                                            Type: {project.type}
                                        </p>
                                    </div>
                                    {/* Right — Description */}
                                    <div className="flex-[2]">
                                        <p className="text-sm md:text-base text-[#ede8d9]/60 leading-[1.8] font-medium">
                                            {project.description}
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
