import { useRef } from 'react';
import { motion } from 'framer-motion';
import diplomaImg from '@/assets/diploma.jpg';
import vibecoderImg from '@/assets/VIBECODER.png';

const timelineData = [
    {
        id: "22",
        meta: "02",
        title: "University of Melbourne",
        subtitle: "Start my Uni life in ",
        type: "text",
        image: null,
        imgWidth: null
    },
    {
        id: "24",
        meta: "12",
        title: "Have intership in 悠船 (Midjourney China Lab)",
        subtitle: "Start to explore AI era",
        type: "image",
        image: vibecoderImg,
        imgWidth: 573
    },
    {
        id: "25",
        meta: "02",
        title: "Granduaste in Bachelor Degree",
        subtitle: "Congrauation about me！",
        type: "image",
        image: diplomaImg,
        imgWidth: 401
    },
    {
        id: "26",
        meta: "CURRENT",
        title: "Start to explore car industry",
        subtitle: "Business Analyst",
        description: "Spearheading AI-driven efficiency within the automotive sector. Empowering teams to integrate AI workflows—from drafting BRDs/PRDs and developing reusable Agent Skills, to converting Figma designs into interactive code and establishing rigorous acceptance testing frameworks.",
        type: "text"
    }
];

export const TimelineSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="w-full bg-transparent pt-[15vh] pb-64 text-[#ede8d9] overflow-hidden"
        >
            {/* 1:1 Design Constraint: 1400px Wrapper */}
            <div className="w-full max-w-[1400px] mx-auto relative px-6 lg:px-0">

                {/* Header (TimeLine) at x=602 -> roughly 43% of 1400px */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-50px", once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full mb-32 md:mb-48 hidden lg:block"
                    style={{ paddingLeft: '43%' }}
                >
                    <h2
                        className="text-[40px] md:text-[56px] font-normal tracking-wide leading-none"
                        style={{ fontFamily: "'Adamina', serif" }}
                    >
                        TimeLine
                    </h2>
                </motion.div>

                {/* Mobile Header */}
                <h2
                    className="text-[40px] font-normal tracking-wide leading-none mb-16 lg:hidden"
                    style={{ fontFamily: "'Adamina', serif" }}
                >
                    TimeLine
                </h2>

                {/* Main Content Layout starts at x=271 -> roughly 19.3% in desktop */}
                <div className="flex flex-col lg:flex-row w-full lg:pl-[19.3%]">

                    {/* Column 1: Sticky 20 (x=271 to 427 -> 156px gap) */}
                    {/* lg:w-[156px] handles the exact spacing between '20' (x=271) and '22' (x=427) */}
                    <div className="w-full lg:w-[156px] shrink-0 relative mb-16 lg:mb-0">
                        {/* top-[35vh] ensures '20' is sticky vertically centered as content scrolls past */}
                        <div className="lg:sticky lg:top-[35vh] pointer-events-none">
                            <span
                                style={{ fontFamily: "'Aclonica', sans-serif" }}
                                className="text-[64px] lg:text-[72px] font-light leading-none block"
                            >
                                20
                            </span>
                        </div>
                    </div>

                    {/* Column 2 & 3: The Scrolling Feed (Starts at x=427) */}
                    <div className="flex-1 flex flex-col pt-0 lg:pt-[5vh] pb-32">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col w-full relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-15% 0px -15% 0px", amount: 0.2 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {/* Feed Item Row */}
                                <div className="flex flex-col sm:flex-row w-full items-start">

                                    {/* Column 2: Suffix (22, 24, 25, 26) Starts at 427, Content at 576 -> 149px gap */}
                                    {/* lg:w-[149px] provides exact spacing matching the figma file */}
                                    <div className="w-[80px] lg:w-[149px] shrink-0 mb-4 sm:mb-0">
                                        <span
                                            className="text-[56px] lg:text-[64px] font-light leading-none block"
                                            style={{ fontFamily: "'Aclonica', sans-serif" }}
                                        >
                                            {item.id}
                                        </span>
                                    </div>

                                    {/* Column 3: Content (Starts at x=576) */}
                                    <div className="flex-1 flex flex-col pt-2 md:pt-4">

                                        {/* Subtitle */}
                                        <h4
                                            className="text-[12px] font-light text-[#ede8d9]/60 mb-2 uppercase tracking-wide"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {item.subtitle}
                                        </h4>

                                        {/* Meta & Title */}
                                        <div className="flex flex-row items-baseline gap-4 mb-4">
                                            <span
                                                className="text-[20px] lg:text-[24px] font-light text-[#ede8d9]/40 shrink-0"
                                                style={{ fontFamily: "'Afacad Flux', sans-serif" }}
                                            >
                                                {item.meta}
                                            </span>

                                            <h3
                                                className="text-[20px] lg:text-[24px] font-normal leading-tight text-[#ede8d9]"
                                                style={{ fontFamily: "'Aclonica', sans-serif" }}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* Optional Description (Detailed Text) */}
                                        {item.description && (
                                            <p
                                                className="mt-2 text-sm md:text-base text-[#ede8d9]/50 leading-relaxed max-w-[500px]"
                                                style={{ fontFamily: "'Inter', sans-serif" }}
                                            >
                                                {item.description}
                                            </p>
                                        )}

                                        {/* Attached Image */}
                                        {item.type === 'image' && item.image && (
                                            <motion.div
                                                className={`relative mt-6 lg:mt-8 overflow-hidden mix-blend-screen opacity-90 ${index === 2 ? 'rounded-[16px]' : 'rounded-[8px]'}`}
                                                style={{ maxWidth: item.imgWidth ? `${item.imgWidth}px` : '100%', width: '100%' }}
                                                whileHover={{ scale: 1.02, opacity: 1 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-auto object-cover grayscale-[15%] brightness-110 contrast-125 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
                                                    loading="lazy"
                                                />
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                {/* Divider Line (Starts at 427 -> fits nicely inside the wrapper, maps exactly to 749px width height 7px) */}
                                {index < timelineData.length - 1 && (
                                    <div
                                        className="h-[7px] bg-[#ede8d9]/10 rounded-full"
                                        style={{
                                            maxWidth: '749px',
                                            width: '100%',
                                            marginTop: index === 0 ? '60px' : '90px', // Exact visual gaps from design
                                            marginBottom: '40px'
                                        }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
