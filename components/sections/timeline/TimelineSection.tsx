import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
    {
        id: 1,
        number: "01",
        year: "2022 — 2024",
        title: "Bachelor of Design",
        subtitle: "University of Melbourne",
        description: "Studied User Experience Design, building a foundation in human-centered thinking, information architecture, and design systems.",
        side: "right",
        // Path coordinates (percentage of container)
        cx: 35,
        cy: 20,
    },
    {
        id: 2,
        number: "02",
        year: "2024.12 — 2025.04",
        title: "Product Operations Intern",
        subtitle: "Midjourney",
        description: "Explored the intersection of AI and product thinking. Researched user behaviour and contributed to product workflow improvements.",
        side: "left",
        cx: 65,
        cy: 48,
    },
    {
        id: 3,
        number: "03",
        year: "2025.04 — Present",
        title: "SaaS Product Manager",
        subtitle: "Volvo · LTO & OTD",
        description: "Leading product discovery and delivery for order-to-delivery workflows. Bridging business requirements with cross-functional engineering teams.",
        side: "right",
        cx: 35,
        cy: 76,
    },
];

// SVG path that snakes between the three nodes
// Viewbox: 0 0 100 100  (percentages)
const SNAKE_PATH = `
  M 35 0
  L 35 14
  Q 35 20 42 20
  Q 65 20 65 27
  L 65 41
  Q 65 48 58 48
  Q 35 48 35 55
  L 35 69
  Q 35 76 42 76
  Q 65 76 65 83
  L 65 100
`;

export const TimelineSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start center', 'end center'],
    });

    // Animate the SVG stroke draw
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[#ffdac2] py-24 overflow-hidden"
        >
            {/* HEADER */}
            <div className="mx-auto px-8 md:px-[104px] mb-20">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1D3344]/40 block mb-2">
                    (01) Experience
                </span>
                <h2
                    className="text-4xl md:text-5xl font-bold text-[#1D3344] leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    TIMELINE
                </h2>
            </div>

            {/* MAIN AREA */}
            <div className="relative mx-auto px-8 md:px-[104px]" style={{ height: '860px' }}>

                {/* SVG SNAKE PATH — fills the full container */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    {/* Track (faint background guide) */}
                    <path
                        d={SNAKE_PATH}
                        fill="none"
                        stroke="#1D3344"
                        strokeWidth="2"
                        strokeOpacity="0.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    />
                    {/* Animated draw-in stroke */}
                    <motion.path
                        d={SNAKE_PATH}
                        fill="none"
                        stroke="#1D3344"
                        strokeWidth="2"
                        strokeOpacity="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                        style={{ pathLength }}
                    />
                </svg>

                {/* NODES — positioned exactly at each cx/cy */}
                {timelineData.map((item, index) => {
                    const isRight = item.side === 'right';

                    return (
                        <motion.div
                            key={item.id}
                            className="absolute z-20 w-[140px] h-[140px] md:w-[180px] md:h-[180px]"
                            style={{
                                left: `${item.cx}%`,
                                top: `${item.cy}%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-10%" }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.15 }
                                }
                            }}
                        >
                            {/* SOLID CIRCLE NODE */}
                            <motion.div
                                variants={{
                                    hidden: { scale: 0, opacity: 0 },
                                    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                className="w-full h-full rounded-full bg-[#1D3344] shadow-[0_8px_32px_rgba(29,51,68,0.2)]"
                            />

                            {/* CONTENT WRAPPER: positioned relative to the dot's edge */}
                            <div className={`absolute top-1/2 -translate-y-1/2 flex items-center w-max ${isRight ? 'left-full flex-row' : 'right-full flex-row-reverse'
                                }`}>

                                {/* CONNECTOR LINE from dot to text */}
                                <motion.div
                                    variants={{
                                        hidden: { scaleX: 0, opacity: 0 },
                                        visible: { scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                                    }}
                                    className="w-12 md:w-20 h-[2px] bg-[#1D3344]/40 shrink-0"
                                    style={{ transformOrigin: isRight ? 'left center' : 'right center' }}
                                />

                                {/* TEXT BLOCK */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: isRight ? -20 : 20 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                    }}
                                    className={`w-[280px] md:w-[360px] shrink-0 ${isRight ? 'pl-6 text-left' : 'pr-6 text-right'}`}
                                >
                                    {/* Number + year row */}
                                    <div className={`flex items-baseline gap-3 mb-2 ${isRight ? '' : 'justify-end'}`}>
                                        <span
                                            className="text-4xl md:text-5xl font-bold text-[#1D3344]/20 leading-none"
                                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                        >
                                            {item.number}
                                        </span>
                                        <span className="text-sm font-mono text-[#1D3344]/70 tracking-wide font-medium">
                                            {item.year}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-xl md:text-2xl font-bold text-[#1D3344] leading-tight mb-2"
                                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                    >
                                        {item.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="text-xs md:text-sm font-mono font-medium text-[#1D3344]/80 uppercase tracking-widest mb-4">
                                        {item.subtitle}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm md:text-base text-[#1D3344]/70 leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
