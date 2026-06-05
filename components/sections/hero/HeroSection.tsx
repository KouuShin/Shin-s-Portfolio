import { motion } from 'framer-motion';
import { exhibitionNodes, manifesto } from '../../portfolioContent';

const nodeFrameClass: Record<string, string> = {
    rightTop: 'col-start-3 row-start-1 self-start justify-self-end border-[#2457ff] shadow-[6px_6px_0_#2457ff]',
    leftBottom: 'col-start-1 row-start-2 self-end justify-self-start border-[#6d7563] shadow-[6px_6px_0_#6d7563]',
    rightBottom: 'col-start-3 row-start-2 self-end justify-self-end border-[#d72418] shadow-[6px_6px_0_#d72418]',
    leftTop: 'col-start-1 row-start-1 self-start justify-self-start border-[#f0c62d] shadow-[6px_6px_0_#f0c62d]',
};

const mobileNodeClass: Record<string, string> = {
    rightTop: 'border-[#2457ff]',
    leftBottom: 'border-[#6d7563]',
    rightBottom: 'border-[#d72418]',
    leftTop: 'border-[#f0c62d]',
};

const statementLines = [
    'I do not define myself by any title.',
    'I define myself by curiosity,',
    'and by the progress I keep making.',
];

export const HeroSection = () => {
    return (
        <section id="map" className="relative min-h-screen overflow-hidden bg-[#f7f6f1] px-4 py-4 text-[#111111] md:px-8 md:py-6">
            <div className="relative grid min-h-[calc(100vh-32px)] grid-rows-[auto_minmax(430px,1fr)_auto] overflow-hidden bg-[#f7f6f1] md:min-h-[calc(100vh-48px)] md:grid-rows-[auto_minmax(600px,1fr)_auto]">
                <header className="relative z-40 flex items-start justify-between text-[11px] uppercase leading-tight tracking-normal text-[#111111]/70 md:text-xs">
                    <div className="font-mono-ui grid gap-4">
                        <span>{manifesto.index}</span>
                        <span className="h-0.5 w-4 bg-[#111111]" />
                        <strong className="max-w-[230px] font-medium text-[#111111]">
                            Cognitive map / digital exhibition / AI product thinking
                        </strong>
                    </div>

                    <nav className="hidden gap-10 font-mono-ui md:flex">
                        <a href="#case-files" className="hover:text-[#2457ff]">Case files</a>
                        <a href="#memory" className="hover:text-[#2457ff]">Memory</a>
                        <a href="#about" className="hover:text-[#2457ff]">About</a>
                    </nav>
                </header>

                <div className="pointer-events-none absolute right-0 top-0 z-20 hidden font-mono-ui text-[11px] uppercase tracking-[0.08em] text-[#111111]/45 [writing-mode:vertical-rl] md:block">
                    move through the archive / hover the exhibits
                </div>

                <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.035)_0_1px,transparent_1px)] bg-[length:100%_84px]" />

                <div className="relative z-10 grid min-h-[430px] place-items-center pt-8 md:min-h-[600px] md:px-[5vw] md:pt-0">
                    <div className="absolute inset-x-0 top-10 hidden min-h-[520px] grid-cols-[minmax(150px,210px)_1fr_minmax(150px,210px)] grid-rows-2 gap-x-[4vw] gap-y-16 md:grid">
                        {exhibitionNodes.map((node, index) => (
                            <motion.a
                                key={node.id}
                                href={node.id === 'memory-layer' ? '#memory' : '#case-files'}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.28 + index * 0.08 }}
                                className={`grid w-[min(18vw,210px)] min-w-[150px] cursor-crosshair gap-2 border-2 bg-[#f7f6f1] px-3.5 py-3 font-mono-ui text-[11px] uppercase leading-tight tracking-[-0.03em] transition duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_currentColor] ${nodeFrameClass[node.position]}`}
                            >
                                <small className="text-[10px] text-[#555555]">{node.label}</small>
                                <b className="font-sans text-lg font-semibold normal-case leading-[0.95] tracking-[-0.06em] text-[#111111]">
                                    {node.title}
                                </b>
                                <span>{node.summary}</span>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        data-hero-geometry="true"
                        initial={{ opacity: 0, y: 24, scale: 0.985 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="pointer-events-none relative aspect-[1.08/1] w-[min(70vw,360px)] md:w-[min(38vw,520px)]"
                    >
                        <div className="absolute left-1/2 top-[63%] aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-[#111111]" />
                        <div className="absolute left-1/2 top-[46%] aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rotate-45 border-[3px] border-[#111111] bg-[#f7f6f1]" />

                        {[
                            'left-[21%] top-[53%]',
                            'left-[36%] top-[59%]',
                            'left-[51%] top-[58%]',
                            'left-[66%] top-[52%]',
                            'left-[30%] top-[72%]',
                            'left-[47%] top-[78%]',
                            'left-[63%] top-[70%]',
                        ].map((position) => (
                            <div key={position} className={`absolute aspect-square w-[15%] rounded-full border-[3px] border-[#111111] bg-[#f7f6f1] ${position}`} />
                        ))}

                        <div className="absolute left-1/2 top-[42%] z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(38px,5vw,68px)] font-light leading-none tracking-[-0.07em]">
                            Xinyi Kou
                        </div>
                    </motion.div>

                    <div className="relative z-30 mt-4 hidden w-full grid-cols-2 gap-3 sm:grid md:hidden">
                        {exhibitionNodes.map((node) => (
                            <a
                                key={node.id}
                                href={node.id === 'memory-layer' ? '#memory' : '#case-files'}
                                className={`min-h-[92px] border-2 bg-[#f7f6f1] p-3 font-mono-ui text-[10px] uppercase leading-tight ${mobileNodeClass[node.position]}`}
                            >
                                <small className="text-[#555555]">{node.label}</small>
                                <b className="mt-5 block font-sans text-base normal-case leading-none tracking-[-0.05em] text-[#111111]">{node.title}</b>
                            </a>
                        ))}
                    </div>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-30 m-0 mt-6 max-w-[1080px] pb-1 text-[clamp(24px,4vw,58px)] font-semibold leading-[1] tracking-[-0.04em] md:mt-0"
                >
                    <span className="block">{statementLines[0]}</span>
                    <span className="block pl-[clamp(24px,8vw,128px)]">{statementLines[1]}</span>
                    <span className="block pl-[clamp(58px,14vw,230px)]">{statementLines[2]}</span>
                </motion.h1>
            </div>
        </section>
    );
};
