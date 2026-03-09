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

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-transparent py-24 overflow-hidden"
        >
            {/* HEADER */}
            <div className="mx-auto px-8 md:px-[104px] mb-20">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ede8d9]/35 block mb-2">
                    (01) Experience
                </span>
                <h2
                    className="text-4xl md:text-5xl font-bold text-[#ede8d9] leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    TIMELINE
                </h2>
            </div>

            {/* MAIN AREA */}
            <div className="relative mx-auto px-8 md:px-[104px]" style={{ height: '860px' }}>

                {/* SVG SNAKE PATH */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    {/* Track — faint guide */}
                    <path
                        d={SNAKE_PATH}
                        fill="none"
                        stroke="#ede8d9"
                        strokeWidth="2"
                        strokeOpacity="0.08"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    />
                    {/* Animated draw-in stroke */}
                    <motion.path
                        d={SNAKE_PATH}
                        fill="none"
                        stroke="#e85d3a"
                        strokeWidth="1.5"
                        strokeOpacity="0.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                        style={{ pathLength }}
                    />
                </svg>

                {/* NODES */}
                {timelineData.map((item) => {
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
                            {/* SOLID CIRCLE NODE — orange-red accent */}
                            <motion.div
                                variants={{
                                    hidden: { scale: 0, opacity: 0 },
                                    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                className="w-full h-full rounded-full bg-[#e85d3a] shadow-[0_0_60px_rgba(232,93,58,0.25)]"
                            />

                            {/* CONTENT WRAPPER */}
                            <div className={`absolute top-1/2 -translate-y-1/2 flex items-center w-max ${isRight ? 'left-full flex-row' : 'right-full flex-row-reverse'
                                }`}>

                                {/* CONNECTOR LINE */}
                                <motion.div
                                    variants={{
                                        hidden: { scaleX: 0, opacity: 0 },
                                        visible: { scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                                    }}
                                    className="w-12 md:w-20 h-[1px] bg-[#ede8d9]/25 shrink-0"
                                    style={{ transformOrigin: isRight ? 'left center' : 'right center' }}
                                />

                                {/* TEXT BLOCK */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: isRight ? -20 : 20 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                    }}
                                    className={`w-[45vw] sm:w-[50vw] md:w-[380px] lg:w-[460px] shrink-0 ${isRight ? 'pl-2 md:pl-8 text-left' : 'pr-2 md:pr-8 text-right'}`}
                                >
                                    {/* Number + year row */}
                                    <div className={`flex items-baseline gap-2 md:gap-4 mb-2 md:mb-4 ${isRight ? '' : 'justify-end'}`}>
                                        <span
                                            className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#ede8d9]/40 leading-none tracking-tighter"
                                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                        >
                                            {item.number}
                                        </span>
                                        <span className="text-xs sm:text-sm font-mono text-[#ede8d9]/60 tracking-widest font-medium">
                                            {item.year}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ede8d9] leading-[1.2] mb-2 sm:mb-3"
                                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                    >
                                        {item.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="text-sm md:text-base font-mono font-bold text-[#e85d3a]/90 uppercase tracking-widest mb-6 block">
                                        {item.subtitle}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base md:text-lg text-[#ede8d9]/60 leading-[1.5] sm:leading-[1.7] font-medium hidden sm:block">
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
