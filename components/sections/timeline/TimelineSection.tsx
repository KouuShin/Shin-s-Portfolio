import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Lightbulb, ArrowRight, ArrowDown } from 'lucide-react';

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
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section ref={sectionRef} className="relative w-full bg-[#ffdac2] overflow-hidden" style={{ height: '300vh' }}>

            {/* STICKY CONTAINER */}
            <div className="sticky top-0 w-full h-screen overflow-hidden">

                {/* 1. HEADER PANE */}
                <div className="absolute top-12 left-8 md:left-[104px] z-30">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#1D3344]/50 block mb-2">
                        (01) Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D3344] leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        TIMELINE
                    </h2>
                </div>

                {/* 2. SCROLLING CONTENT CONTAINER */}
                <div ref={containerRef} className="relative w-full h-full flex items-center">

                    <motion.div
                        style={{ x }}
                        className="flex items-center absolute left-0 px-8 md:px-[104px]"
                    >
                        {/* CENTRAL AXIS LINE */}
                        <div className="absolute top-1/2 left-0 w-[200vw] h-[2px] bg-[#1D3344] -translate-y-1/2" />

                        {/* AXIS ARROW (End of line) */}
                        <div className="absolute top-1/2 left-[180vw] -translate-y-1/2 text-[#1D3344] z-10">
                            <ArrowRight className="w-6 h-6 ml-[-2px]" strokeWidth={3} />
                        </div>

                        {/* TIMELINE NODES */}
                        <div className="flex items-center gap-[400px] pl-24 relative z-20">
                            {timelineData.map((item) => {
                                const isTop = item.position === "top";
                                return (
                                    <div key={item.id} className="relative flex-shrink-0">

                                        {/* CONNECTION LINE */}
                                        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#1D3344] h-[100px]"
                                            style={{
                                                top: isTop ? 'auto' : '50%',
                                                bottom: isTop ? '50%' : 'auto'
                                            }}
                                        />

                                        {/* AXIS DOT */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#ffdac2] border-[3px] border-[#1D3344] z-30" />

                                        {/* CARD */}
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className={`
                                            relative w-[360px] bg-white border-2 border-[#1D3344] p-8 rounded-3xl
                                            shadow-[4px_4px_0px_0px_#1D3344] flex flex-col gap-4
                                            ${isTop ? 'mb-[120px]' : 'mt-[120px]'}
                                        `}
                                        >
                                            {/* Step Label & Icon */}
                                            <div className="flex justify-between items-start">
                                                <span className="text-xs font-bold text-[#1D3344]/40 tracking-widest uppercase">
                                                    {item.step}
                                                </span>
                                                <div className="p-2 bg-[#ffdac2] rounded-full border border-[#1D3344]/20">
                                                    <item.icon className="w-5 h-5 text-[#1D3344]" strokeWidth={2} />
                                                </div>
                                            </div>

                                            {/* Main Content */}
                                            <div>
                                                <h3 className="text-xl font-bold text-[#1D3344] leading-tight mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                    {item.company}
                                                </h3>
                                                <p className="text-base font-medium text-[#1D3344]/70">
                                                    {item.title}
                                                </p>
                                            </div>

                                            {/* Year Badge */}
                                            <div className="self-start px-4 py-1.5 bg-[#d4f2fd]/50 border border-[#1D3344]/10 rounded-full">
                                                <span className="text-xs font-mono font-bold text-[#1D3344]">
                                                    {item.year}
                                                </span>
                                            </div>
                                        </motion.div>

                                    </div>
                                );
                            })}

                            {/* "More to Explore" End Card */}
                            <div className="relative flex-shrink-0 flex items-center">
                                <div className="w-[300px] h-[200px] flex items-center justify-center border-2 border-dashed border-[#1D3344]/30 rounded-3xl">
                                    <span className="text-[#1D3344]/50 font-medium">To be continued...</span>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};
