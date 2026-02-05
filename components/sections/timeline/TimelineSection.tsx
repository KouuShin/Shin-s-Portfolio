import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Lightbulb } from 'lucide-react';

const timelineData = [
    {
        id: 1,
        step: "STEP 1",
        year: "2022 - 2024",
        title: "Bachelor of Design in User Experience Design",
        company: "University of Melbourne",
        icon: GraduationCap,
        position: "top"
    },
    {
        id: 2,
        step: "STEP 2",
        year: "2024.12 - 2025.04",
        title: "Product Operations Internship",
        company: "Midjourney",
        icon: Lightbulb,
        position: "bottom"
    },
    {
        id: 3,
        step: "STEP 3",
        year: "2025.04 - Current",
        title: "SaaS Product Manager (LTO & OTD)",
        company: "Volvo",
        icon: Briefcase,
        position: "top"
    }
];

export const TimelineSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [debugInfo, setDebugInfo] = useState({ mounted: false, height: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
        layoutEffect: false
    });

    // Adjusted transform to end earlier since we reduced whitespace
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    useLayoutEffect(() => {
        if (containerRef.current) {
            setDebugInfo({
                mounted: true,
                height: containerRef.current.offsetHeight
            });
            console.log("Timeline mounted:", containerRef.current);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full z-20"
            style={{
                height: '250vh',         // Reduced height from 400vh to remove extra space
                background: '#ffded4',   // Matched global background color
                visibility: 'visible',
                position: 'relative',
                overflow: 'visible'
            }}
        >
            {/* STICKY CONTAINER */}
            <div
                className="sticky top-0 w-full h-screen overflow-hidden flex items-center bg-[#ffded4]"
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    zIndex: 50,
                    background: '#ffded4' // Matched global background color
                }}
            >
                {/* Section Title - Fixed Position in sticky container */}
                <div className="absolute top-12 left-6 md:left-12 z-30 pointer-events-none">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#385C96]/50 block mb-2">
                        (01) Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#385C96]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Timeline
                    </h2>
                </div>

                {/* MOVING CONTENT */}
                <motion.div
                    style={{ x }}
                    className="flex items-center h-full relative"
                >
                    {/* Central Axis */}
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#385C96]/30 -translate-y-1/2 min-w-[300vw]" />

                    {/* Nodes Container */}
                    <div className="flex items-center h-full pl-[40vw]"> {/* Increased padding to avoid overlap */}
                        {timelineData.map((item) => {
                            const isTop = item.position === "top";

                            return (
                                <div
                                    key={item.id}
                                    className="relative flex-shrink-0 h-full flex items-center px-4"
                                    style={{ width: '60vw' }}
                                >
                                    {/* Connection Line & Dot */}
                                    <div className="absolute left-1/2 top-1/2 w-full h-full pointer-events-none">
                                        {/* Center Dot */}
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#385C96] z-20" />

                                        {/* Vertical Line */}
                                        <div
                                            className={`absolute left-1/2 -translate-x-1/2 w-[2px] border-l-[2px] border-dotted border-[#385C96]/50 z-10
                                            ${isTop ? 'bottom-1/2 h-[160px]' : 'top-1/2 h-[160px]'}`}
                                        />
                                    </div>

                                    {/* Icon Bubble */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className={`absolute left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#385C96] flex items-center justify-center z-30 border-4 border-[#ffded4] shadow-xl cursor-pointer
                                        ${isTop ? 'bottom-[calc(50%+160px)]' : 'top-[calc(50%+160px)]'}`}
                                    >
                                        <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
                                    </motion.div>

                                    {/* Text Content */}
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 w-[300px] text-center z-30
                                        ${isTop ? 'top-[calc(50%+2rem)]' : 'bottom-[calc(50%+2rem)]'}`}
                                    >
                                        <span className="block text-xs font-bold text-[#385C96]/60 mb-2 tracking-widest uppercase">
                                            {item.step}
                                        </span>

                                        <h3 className="text-2xl md:text-3xl font-bold text-[#385C96] mb-2 leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                            {item.company}
                                        </h3>

                                        <p className="text-sm md:text-base font-medium text-[#1A1A1A]/80 mb-3">
                                            {item.title}
                                        </p>

                                        <div className="inline-block px-4 py-1.5 bg-[#cce6ff]/50 rounded-full border border-[#385C96]/10">
                                            <span className="text-xs font-mono font-bold text-[#385C96]">
                                                {item.year}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Reduced End Spacer */}
                        <div className="w-[10vw]" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
