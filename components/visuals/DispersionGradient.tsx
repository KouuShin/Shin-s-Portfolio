import React from 'react';
import { motion } from 'framer-motion';

export const DispersionGradient = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#111210]">
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full"
            >
                <defs>
                    <filter id="cosmic-blur" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" />
                    </filter>

                    {/* Warm coral-orange nebula — upper area */}
                    <radialGradient id="blob-warm" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#e85d3a" stopOpacity="0.55" />
                        <stop offset="50%" stopColor="#c9441c" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#111210" stopOpacity="0" />
                    </radialGradient>

                    {/* Cool teal nebula — lower area */}
                    <radialGradient id="blob-cool" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#4a7c9e" stopOpacity="0.45" />
                        <stop offset="60%" stopColor="#2d5a78" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#111210" stopOpacity="0" />
                    </radialGradient>

                    {/* Deep purple accent — right side */}
                    <radialGradient id="blob-purple" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#7b5ea7" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#111210" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Warm coral blob — top-left drifting */}
                <motion.ellipse
                    cx="20%"
                    cy="25%"
                    rx="38"
                    ry="32"
                    fill="url(#blob-warm)"
                    filter="url(#cosmic-blur)"
                    animate={{
                        cx: ["20%", "28%", "18%", "20%"],
                        cy: ["25%", "20%", "30%", "25%"],
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Cool teal blob — bottom-right drifting */}
                <motion.ellipse
                    cx="78%"
                    cy="72%"
                    rx="42"
                    ry="36"
                    fill="url(#blob-cool)"
                    filter="url(#cosmic-blur)"
                    animate={{
                        cx: ["78%", "70%", "82%", "78%"],
                        cy: ["72%", "78%", "65%", "72%"],
                    }}
                    transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />

                {/* Purple accent blob — center-right */}
                <motion.ellipse
                    cx="65%"
                    cy="35%"
                    rx="28"
                    ry="24"
                    fill="url(#blob-purple)"
                    filter="url(#cosmic-blur)"
                    animate={{
                        cx: ["65%", "72%", "60%", "65%"],
                        cy: ["35%", "28%", "40%", "35%"],
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
                />

                {/* Diffuse warm band across top */}
                <motion.ellipse
                    cx="50%"
                    cy="10%"
                    rx="60"
                    ry="20"
                    fill="url(#blob-warm)"
                    filter="url(#cosmic-blur)"
                    opacity={0.3}
                    animate={{ cy: ["10%", "14%", "10%"] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </svg>
        </div>
    );
};
