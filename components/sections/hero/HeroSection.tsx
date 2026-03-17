import { motion } from 'framer-motion';
import imagePng from '@/assets/image.png';
import personalPhotoImg from '@/assets/personalphoto.png';

export const HeroSection = () => {
    return (
        <section className="relative min-h-[100vh] w-full flex flex-col justify-center items-center bg-transparent pt-12 md:pt-16 pb-0 px-4 md:px-8 overflow-hidden">

            {/* HEADER ROW: Kept minimal at the top right bounding box */}
            <header className="absolute top-8 left-0 right-0 z-50 flex justify-end items-center w-full px-8 md:px-[104px]">
                <nav className="hidden md:flex gap-12 mr-12">
                    {['Work', 'Archive', 'About'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-[#ede8d9]/50 hover:text-[#ede8d9] transition-colors uppercase tracking-widest"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
                <button className="hidden md:block px-6 py-2 border border-[#ede8d9]/40 rounded-full text-xs font-bold text-[#ede8d9] uppercase hover:bg-[#ede8d9] hover:text-[#111210] transition-all">
                    Start a project
                </button>
            </header>

            {/* Affiche Artboard Container - Responsive 4:3 Aspect Ratio Container */}
            <div className="relative w-full max-w-[1200px] aspect-[4/3] max-h-[85vh] md:max-h-none mx-auto mt-16 md:mt-0">

                {/* 1. TOP LEFT: Name & Slogan */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute z-20 flex flex-col items-start"
                    style={{ left: '7%', top: '5%' }}
                >
                    <h1
                        className="font-normal text-[#ede8d9] mb-2 sm:mb-4"
                        style={{ fontFamily: "'Space Grotesk', serif", fontSize: 'clamp(16px, 4vw, 42px)', lineHeight: 1.1 }}
                    >
                        XINYI KOU
                    </h1>
                    <h2
                        className="font-extrabold text-[#ede8d9] whitespace-nowrap"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 3vw, 32px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
                    >
                        I don't define myself by a title.<br />
                        I define myself by my curiosity.
                    </h2>
                </motion.div>

                {/* 2. TOP RIGHT: VIBECODER Pixel Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute z-10"
                    style={{ left: '65%', top: '5%', width: '29%' }}
                >
                    {/* Inverting colors and using screen blend to make white background disappear into the dark theme */}
                    <img
                        src={personalPhotoImg}
                        alt="XINYI KOU Personal Photo"
                        className="w-full h-auto object-contain opacity-90 drop-shadow-2xl"
                    />
                </motion.div>

                {/* 3. BOTTOM LEFT: Hand Cursor Graphic */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute z-10"
                    style={{ left: '3%', top: '41.6%', width: '31%' }}
                >
                    <img
                        src={imagePng}
                        alt="Hand reaching cursor"
                        className="w-full h-auto object-contain drop-shadow-2xl opacity-90"
                    />
                </motion.div>

                {/* 4. BOTTOM RIGHT: Manifesto Paragraph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute z-20"
                    style={{ left: '37%', top: '50%', width: '60%' }}
                >
                    <p
                        className="text-[#ede8d9]/80 font-medium text-justify"
                        style={{ fontFamily: "'Space Grotesk', serif", fontSize: 'clamp(10px, 2vw, 20px)', lineHeight: 'clamp(1.4, 2.5vw, 1.8)' }}
                    >
                        I'm not a cog in the machine. I observe, explore, sense, and connect—bridging business needs with product delivery through clear requirement documentation and effective team communication. With proficiency in AI tools and prompt engineering, I build custom workflows and skills. I believe in agile reflection and proactive learning, constantly improving myself through observation and documentation.
                    </p>
                </motion.div>

            </div>

        </section>
    );
};
