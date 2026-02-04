import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Lightbulb } from 'lucide-react';

const timelineData = [
    {
        id: 1,
        step: "STEP 1",
        year: "2022 - 2024",
        title: "Bachelor of Design",
        subtitle: "University of Melbourne",
        desc: "User Experience Design program focusing on human-centered design principles and research methodologies.",
        icon: GraduationCap,
        position: "top"
    },
    {
        id: 2,
        step: "STEP 2",
        year: "2024.12 - 2025.04",
        title: "Product Operations Intern",
        subtitle: "Midjourney",
        desc: "Exploring the frontiers of AI image generation, supporting product operations and community engagement.",
        icon: Lightbulb,
        position: "bottom"
    },
    {
        id: 3,
        step: "STEP 3",
        year: "2025.04 - Current",
        title: "SaaS Product Manager",
        subtitle: "Volvo",
        desc: "Leading LTO & OTD SaaS products, managing requirements and writing PRDs for enterprise solutions.",
        icon: Briefcase,
        position: "top"
    }
];

/**
 * Timeline Section - Horizontal Scrolling Experience Timeline
 * DEBUG VERSION with console logging
 */
export const TimelineSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);

    // DEBUG: Log scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            console.log("📊 Timeline Scroll Progress:", latest);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // DEBUG: Log transform value
    useEffect(() => {
        const unsubscribe = x.on("change", (latest) => {
            console.log("➡️ Timeline X Transform:", latest);
        });
        return () => unsubscribe();
    }, [x]);

    useEffect(() => {
        console.log("✅ Timeline Section Mounted");
        console.log("📦 Container Ref:", containerRef.current);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative z-10 h-[400vh] bg-transparent"
            aria-label="Professional Experience Timeline"
            style={{ border: '2px solid red' }} // DEBUG: Visual boundary
        >
            {/* Sticky Viewport - Pins during scroll */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#ffded4]">

                {/* DEBUG Indicator */}
                <div className="absolute top-4 right-4 z-50 bg-black text-white px-4 py-2 rounded font-mono text-xs">
                    Timeline Active
                </div>

                {/* Section Header */}
                <div className="absolute top-12 left-12 z-20">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/50 block mb-2">
                        (01) Experience
                    </span>
                    <h2 className="text-5xl font-bold text-[#385C96]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Timeline
                    </h2>
                </div>

                {/* Horizontal Scrolling Container */}
                <motion.div
                    style={{ x }}
                    className="flex items-center h-full relative"
                >
                    {/* Central Horizontal Axis */}
                    <div
                        className="absolute top-1/2 left-0 w-[300vw] h-[2px] bg-[#385C96]/30 -translate-y-1/2"
                        role="presentation"
                    />

                    {/* Timeline Nodes Container */}
                    <div className="flex items-center h-full pl-[20vw]">
                        {timelineData.map((item) => {
                            const isTop = item.position === "top";

                            return (
                                <article
                                    key={item.id}
                                    className="relative flex-shrink-0 h-full flex items-center"
                                    style={{ width: '50vw' }}
                                    aria-label={`${item.subtitle} - ${item.title}`}
                                >
                                    {/* Central Axis Dot */}
                                    <div
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#385C96] z-20"
                                        role="presentation"
                                    />

                                    {/* Dotted Connector Line */}
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 w-[2px] border-l-[3px] border-dotted border-[#385C96]/60 z-10
                                        ${isTop ? 'bottom-1/2 h-[140px]' : 'top-1/2 h-[140px]'}`}
                                        role="presentation"
                                    />

                                    {/* Icon Circle */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className={`absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#385C96] flex items-center justify-center z-30 border-4 border-white shadow-lg
                                        ${isTop ? 'bottom-[calc(50%+140px)]' : 'top-[calc(50%+140px)]'}`}
                                        aria-hidden="true"
                                    >
                                        <item.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                                    </motion.div>

                                    {/* Content Block */}
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 w-[280px] text-center z-15
                                        ${isTop ? 'top-[calc(50%+1.5rem)]' : 'bottom-[calc(50%+1.5rem)]'}`}
                                    >
                                        <span className="block text-xs font-bold text-[#385C96]/70 mb-2 tracking-wider">
                                            {item.step}
                                        </span>

                                        <h3 className="text-2xl font-bold text-[#385C96] mb-1 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                            {item.subtitle}
                                        </h3>

                                        <p className="text-sm font-semibold text-[#1A1A1A] mb-2">
                                            {item.title}
                                        </p>

                                        <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                                            {item.desc}
                                        </p>

                                        <div className="mt-3 inline-block px-3 py-1 bg-[#cce6ff]/40 rounded-full">
                                            <time className="text-xs font-mono font-bold text-[#385C96]">
                                                {item.year}
                                            </time>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}

                        {/* End Spacer */}
                        <div className="w-[30vw] flex-shrink-0" role="presentation" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
