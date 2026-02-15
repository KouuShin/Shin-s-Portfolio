import { motion } from 'framer-motion';

const timelineData = [
    {
        id: 1,
        number: "01",
        year: "2022 - 2024",
        title: "Bachelor of Design in User Experience Design",
        company: "University of Melbourne",
        position: "right"
    },
    {
        id: 2,
        number: "02",
        year: "2024.12 - 2025.04",
        title: "Product Operations Internship",
        company: "Midjourney",
        position: "left"
    },
    {
        id: 3,
        number: "03",
        year: "2025.04 - Current",
        title: "SaaS Product Manager (LTO & OTD)",
        company: "Volvo",
        position: "right"
    }
];

export const TimelineSection = () => {
    return (
        <section className="relative w-full min-h-screen bg-[#ffdac2] py-24">

            {/* HEADER */}
            <div className="container mx-auto px-8 md:px-[104px] mb-16">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1D3344]/50 block mb-2">
                    (01) Experience
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1D3344] leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    TIMELINE
                </h2>
            </div>

            {/* TIMELINE CONTAINER */}
            <div className="relative max-w-6xl mx-auto px-8">

                {/* VERTICAL CENTER LINE */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#1D3344]/20 via-[#1D3344]/40 to-[#1D3344]/20 -translate-x-1/2"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, #1D3344 0px, #1D3344 8px, transparent 8px, transparent 16px)',
                        opacity: 0.3
                    }}
                />

                {/* TIMELINE ITEMS - Using Grid for proper spacing */}
                <div className="space-y-32 py-8">
                    {timelineData.map((item, index) => {
                        const isRight = item.position === "right";

                        return (
                            <div key={item.id} className="relative">

                                {/* ROW CONTAINER */}
                                <div className="grid grid-cols-2 gap-8 items-center">

                                    {/* LEFT SIDE */}
                                    {!isRight && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false, amount: 0.5 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            className="flex justify-end pr-8"
                                        >
                                            <div className="w-full max-w-[350px] bg-white border-2 border-[#1D3344] p-8 rounded-3xl shadow-[4px_4px_0px_0px_#1D3344]">
                                                <TimelineCard item={item} />
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* PLACEHOLDER for right-positioned items */}
                                    {isRight && <div />}

                                    {/* RIGHT SIDE */}
                                    {isRight && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false, amount: 0.5 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            className="flex justify-start pl-8"
                                        >
                                            <div className="w-full max-w-[350px] bg-white border-2 border-[#1D3344] p-8 rounded-3xl shadow-[4px_4px_0px_0px_#1D3344]">
                                                <TimelineCard item={item} />
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* PLACEHOLDER for left-positioned items */}
                                    {!isRight && <div />}
                                </div>

                                {/* CIRCULAR NODE - Centered */}
                                <motion.div
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[180px] h-[180px] rounded-full bg-[#1D3344] border-4 border-[#ffdac2] shadow-2xl flex items-center justify-center"
                                >
                                    {/* Empty circle - no icon */}
                                </motion.div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

// Separate component for card content
const TimelineCard = ({ item }: { item: typeof timelineData[0] }) => {
    return (
        <>
            {/* Number Badge */}
            <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-[#1D3344]/20" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.number}
                </span>
                <div className="flex-1 h-[2px] bg-[#1D3344]/10" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-[#1D3344] mb-2 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {item.company}
            </h3>

            <p className="text-sm font-medium text-[#1D3344]/70 mb-4 leading-relaxed">
                {item.title}
            </p>

            {/* Year Badge */}
            <div className="inline-block px-4 py-2 bg-[#d4f2fd]/50 border border-[#1D3344]/10 rounded-full">
                <span className="text-xs font-mono font-bold text-[#1D3344]">
                    {item.year}
                </span>
            </div>
        </>
    );
};
