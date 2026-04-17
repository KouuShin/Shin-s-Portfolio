import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string | null;
}

export const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!videoUrl) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden"
                    style={{ perspective: '1500px' }}
                >
                    {/* Dark frosted glass background overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Main Video Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full max-w-5xl bg-[#111210] border border-[#ede8d9]/10 rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl box-border"
                    >
                        {/* Video Player */}
                        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
                            <video 
                                src={videoUrl}
                                controls
                                autoPlay
                                className="w-full h-full object-contain outline-none"
                            />
                        </div>
                    </motion.div>

                    {/* Top Right Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] w-14 h-14 rounded-full bg-black/40 hover:bg-[#ede8d9]/10 border border-[#ede8d9]/20 flex items-center justify-center text-[#ede8d9] transition-all backdrop-blur-md"
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
