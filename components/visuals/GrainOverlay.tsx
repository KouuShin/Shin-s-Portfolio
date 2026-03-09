export const GrainOverlay = () => {
    return (
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full overflow-hidden">
            {/* Primary grain — subtle texture for dark background */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    opacity: 0.06,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                    mixBlendMode: 'overlay',
                }}
            />
            {/* Secondary fine grain — chromatic feel */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    opacity: 0.03,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain2)'/%3E%3C/svg%3E")`,
                    mixBlendMode: 'screen',
                }}
            />
        </div>
    );
};
