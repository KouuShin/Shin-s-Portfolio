import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiWorksModal, GalleryImage } from '../../ui/AiWorksModal';
import { timelineEntries } from '../../portfolioContent';

export const TimelineSection = () => {
    const [gallery, setGallery] = useState<GalleryImage[] | null>(null);

    return (
        <section id="memory" className="bg-[#030303] px-4 py-24 text-[#f7f6f1] md:px-8 lg:px-10">
            <div className="mx-auto w-[min(1480px,100%)]">
                <div className="grid grid-cols-1 gap-8 border-t border-[#f7f6f1]/20 pt-10 md:grid-cols-12 md:gap-5">
                    <div className="font-mono-ui text-xs uppercase leading-tight text-[#f7f6f1]/55 md:col-span-2">
                        009 / Memory Layer
                    </div>

                    <div className="md:col-span-7">
                        <h2 className="m-0 text-[clamp(52px,8vw,136px)] font-semibold leading-[0.9] tracking-[-0.06em]">
                            Memory as evidence.
                        </h2>
                    </div>

                    <p className="m-0 text-base leading-[1.65] text-[#f7f6f1]/62 md:col-span-3">
                        Not a resume timeline. These are samples of where the map came from: UX,
                        AI image culture, automotive systems, and current AI product research.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-12">
                    {timelineEntries.map((entry, index) => {
                        const spanClass = index === 1 || index === 4 ? 'md:col-span-5' : 'md:col-span-4';

                        return (
                            <motion.article
                                key={`${entry.year}-${entry.title}`}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.55, delay: index * 0.04 }}
                                className={`group min-h-[280px] rounded-[24px] border border-[#f7f6f1]/22 bg-[#f7f6f1] p-5 text-[#111111] transition duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(247,246,241,0.3)] ${spanClass}`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="font-mono-ui text-xs uppercase text-[#111111]/50">{entry.meta}</div>
                                    <div className="font-mono-ui text-sm">{entry.year}</div>
                                </div>

                                {entry.image && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (entry.gallery) {
                                                setGallery(entry.gallery.map((image, i) => ({ id: i + 1, image })));
                                            }
                                        }}
                                        className="mt-8 block w-full overflow-hidden rounded-[18px] border border-[#111111]/15 bg-[#ebe8df] p-2 text-left"
                                    >
                                        <img
                                            src={entry.image}
                                            alt={entry.title}
                                            className="aspect-[16/10] w-full rounded-[12px] object-cover grayscale transition duration-300 group-hover:grayscale-0"
                                            loading="eager"
                                            decoding="async"
                                        />
                                    </button>
                                )}

                                <h3 className="mb-4 mt-8 text-[clamp(28px,3vw,46px)] font-semibold leading-[0.95] tracking-[-0.055em]">
                                    {entry.title}
                                </h3>
                                <p className="m-0 max-w-xl text-sm leading-[1.65] text-[#111111]/65">{entry.body}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>

            <AiWorksModal
                isOpen={Boolean(gallery)}
                onClose={() => setGallery(null)}
                images={gallery ?? []}
            />
        </section>
    );
};
