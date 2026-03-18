import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import aiArt1 from '@/assets/AiArt_1.png';
import aiArt2 from '@/assets/AiArt_2.png';
import aiArt3 from '@/assets/AiArt_3.png';
import aiArt4 from '@/assets/AiArt_4.png';
import aiArt5 from '@/assets/AiArt_5.png';

// The local AI art assets requested by the user.
const aiWorksData = [
    { id: 1, image: aiArt1 },
    { id: 2, image: aiArt2 },
    { id: 3, image: aiArt3 },
    { id: 4, image: aiArt4 },
    { id: 5, image: aiArt5 }
];

interface AiWorksModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AiWorksModal = ({ isOpen, onClose }: AiWorksModalProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setCurrentIndex(0); // Reset to first page when opened
        } else {
            document.body.style.overflow = 'unset';
            setDirection(0);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentIndex < aiWorksData.length - 1) {
            setDirection(1);
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const pageVariants: any = {
        enter: (direction: number) => ({
            rotateY: direction > 0 ? 90 : -90,
            opacity: 0,
            z: -100, // Push it slightly back to avoid clipping during rotation
        }),
        center: {
            rotateY: 0,
            opacity: 1,
            z: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        exit: (direction: number) => ({
            rotateY: direction > 0 ? -90 : 90,
            opacity: 0,
            z: -100,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    const currentWork = aiWorksData[currentIndex];

    return (
        <AnimatePresence>
            {isOpen && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden"
                    // Establish 3D perspective to enable realistic rotation
                    style={{ perspective: '1500px' }}
                >
                    {/* Dark frosted glass background overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-xl"
                    />

                    {/* Close Area Click Target (clicking outside the stage closes it) */}
                    <div 
                        className="absolute inset-0 z-0" 
                        onClick={onClose} 
                    />

                    {/* Main Stage Configuration - Enlarged by ~20% as requested */}
                    <div className="relative z-10 w-full max-w-7xl h-full max-h-[90vh] flex flex-col items-center justify-center pointer-events-none">
                        
                        {/* 3D Transform Stage Container */}
                        <div 
                            className="relative w-full h-[75vh] flex items-center justify-center perspective-stage"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={pageVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    // The origin is set to center to simulate a rigid poster flip.
                                    // Or "left" to simulate a page turning from the spine. 
                                    // Center looks cleaner for single large images.
                                    style={{ 
                                        transformOrigin: 'center center',
                                        transformStyle: 'preserve-3d',
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                     }}
                                >
                                    {/* High-Res Image Container */}
                                    {/* The user requested super-HD single image with 20% size increase. 
                                        We constrain it by height so it fits impeccably. */}
                                    <div className="relative w-full max-w-5xl h-full bg-[#111210]/50 border border-[#ede8d9]/10 rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl p-2 pointer-events-auto">
                                        <div className="w-full h-full relative overflow-hidden rounded-xl md:rounded-[24px] bg-[#111210]">
                                            {/* Blurred ambient background to gracefully handle different aspect ratios */}
                                            <div 
                                                className="absolute inset-0 bg-cover bg-center blur-3xl opacity-50 scale-125"
                                                style={{ backgroundImage: `url(${currentWork.image})` }}
                                            />
                                            <img 
                                                src={currentWork.image} 
                                                alt={`AI Art ${currentIndex + 1}`} 
                                                className="relative z-10 w-full h-full object-contain"
                                                loading="lazy"
                                                draggable={false}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Pagination / Page Turn Controllers */}
                        <div className="mt-8 flex items-center justify-between w-full max-w-3xl pointer-events-auto shrink-0 px-4">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className={`flex items-center gap-3 px-6 py-4 rounded-full transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#ede8d9]/10 text-[#ede8d9]'}`}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                                <span className="font-light tracking-widest uppercase text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Previous
                                </span>
                            </button>

                            <div className="text-[#ede8d9]/40 tracking-widest font-light text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {currentIndex + 1} / {aiWorksData.length}
                            </div>

                            <button
                                onClick={handleNext}
                                disabled={currentIndex === aiWorksData.length - 1}
                                className={`flex items-center gap-3 px-6 py-4 rounded-full transition-all ${currentIndex === aiWorksData.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#ede8d9]/10 text-[#ede8d9]'}`}
                            >
                                <span className="font-light tracking-widest uppercase text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Next
                                </span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Top Right Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] w-14 h-14 rounded-full bg-black/20 hover:bg-[#ede8d9]/10 border border-[#ede8d9]/10 flex items-center justify-center text-[#ede8d9] transition-all backdrop-blur-md"
                        aria-label="Close modal"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            )}
        </AnimatePresence>
    );
};
