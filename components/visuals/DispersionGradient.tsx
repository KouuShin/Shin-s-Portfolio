import React from 'react';
import { motion } from 'framer-motion';

export const DispersionGradient = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#ffded4]">
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full opacity-90"
            >
                <defs>
                    {/* 
                      Dispersion Filter (The "Leopard" texture)
                      Restored by popular demand, but tuned for the specific "Public Analog" dispersion look.
                    */}
                    <filter id="dispersion-filter" x="-50%" y="-50%" width="200%" height="200%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.6"
                            numOctaves="4"
                            result="noise"
                        />
                        <feColorMatrix
                            type="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
                            in="noise"
                            result="highContrastNoise"
                        />
                        {/* Displacement Map uses the noise to "shatter" the blob edges */}
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="highContrastNoise"
                            scale="15"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                        <feGaussianBlur stdDeviation="0.5" />
                    </filter>

                    {/* 
                       User's Palette Gradient 
                       Background is #ffded4 (Pink)
                       Blobs are #385C96 (Deep Blue) -> #cce6ff (Light Blue)
                    */}
                    <radialGradient id="blob-gradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#385C96" stopOpacity="0.8" />
                        <stop offset="60%" stopColor="#cce6ff" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#ffded4" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* THE BLOB - With Dispersion */}
                <g style={{ filter: 'url(#dispersion-filter)' }}>

                    {/* 
                        Flowing/Diffusing Outer Layers 
                        These circles expand outward and fade, creating the "ripple" effect
                    */}
                    {[1, 2, 3].map((i) => (
                        <motion.circle
                            key={i}
                            cx="50%"
                            cy="50%"
                            r="20%"
                            fill="#cce6ff"
                            initial={{ opacity: 0.4, scale: 0.8 }}
                            animate={{
                                opacity: [0.4, 0, 0],
                                scale: [1, 2, 2.2]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                delay: i * 2, // Staggered start
                                ease: "easeInOut"
                            }}
                        />
                    ))}

                    {/* Primary Core Blob - Breathing */}
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="25%"
                        fill="url(#blob-gradient)"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Secondary Moving Blobs for Irregularity */}
                    <motion.circle
                        cx="40%"
                        cy="40%"
                        r="15%"
                        fill="#385C96"
                        opacity="0.4"
                        animate={{
                            cx: ["40%", "45%", "40%"],
                            cy: ["40%", "35%", "40%"],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.circle
                        cx="60%"
                        cy="60%"
                        r="18%"
                        fill="#cce6ff"
                        opacity="0.6"
                        animate={{
                            cx: ["60%", "55%", "60%"],
                            cy: ["60%", "65%", "60%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </g>

            </svg>
        </div>
    );
};
