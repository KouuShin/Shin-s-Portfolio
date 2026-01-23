import { useEffect, useState } from 'react';

export const GrainOverlay = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // Fade in the grain to avoid jarring load
        setOpacity(1);
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50 h-full w-full select-none overflow-hidden"
            style={{ opacity, transition: 'opacity 1s ease-out' }}
        >
            <div className="absolute inset-0 h-full w-full opacity-[0.03] mix-blend-overlay">
                <svg xmlns='http://www.w3.org/2000/svg' className="h-full w-full">
                    <filter id='noiseFilter'>
                        <feTurbulence
                            type='fractalNoise'
                            baseFrequency='0.8'
                            numOctaves='3'
                            stitchTiles='stitch'
                        />
                    </filter>
                    <rect width='100%' height='100%' filter='url(#noiseFilter)' />
                </svg>
            </div>
            {/* Optional: A second layer of moving noise for more life, can be enabled later for "Acid" mode */}
        </div>
    );
};
