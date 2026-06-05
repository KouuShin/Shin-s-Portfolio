import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiWorksModal, GalleryImage } from '../../ui/AiWorksModal';
import { VideoModal } from '../../ui/VideoModal';
import { PortfolioProject, projects } from '../../portfolioContent';

const getGalleryImages = (project: PortfolioProject): GalleryImage[] =>
    (project.images ?? []).map((image, index) => ({ id: index + 1, image }));

export const ProjectSection = () => {
    const [galleryImages, setGalleryImages] = useState<GalleryImage[] | null>(null);
    const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null);

    const openProject = (project: PortfolioProject) => {
        if (project.kind === 'gallery' && project.images?.length) {
            setGalleryImages(getGalleryImages(project));
            return;
        }

        if (project.kind === 'video' && project.video) {
            setCurrentVideoUrl(project.video);
        }
    };

    return (
        <section id="case-files" className="bg-[#f7f6f1] px-4 py-24 text-[#111111] md:px-8 lg:px-10">
            <div className="mx-auto w-[min(1480px,100%)]">
                <div className="grid grid-cols-1 gap-8 border-t border-[#111111]/20 pt-10 md:grid-cols-12 md:gap-5">
                    <div className="font-mono-ui text-xs uppercase leading-tight text-[#111111]/60 md:col-span-2">
                        017 / Case Files
                    </div>
                    <div className="md:col-span-7">
                        <h2 className="m-0 text-[clamp(52px,8vw,136px)] font-semibold leading-[0.9] tracking-[-0.06em]">
                            Selected work as exhibits.
                        </h2>
                    </div>
                    <p className="m-0 max-w-sm text-base leading-[1.65] text-[#111111]/62 md:col-span-3">
                        Each case file is treated as an exhibit: context, role, product decisions,
                        deliverables, and what the project says about how I think.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-6">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.55, delay: index * 0.04 }}
                            className="group grid min-h-[420px] grid-cols-1 overflow-hidden rounded-[28px] border-2 border-[#111111] bg-[#f7f6f1] md:grid-cols-12"
                        >
                            <div className="relative min-h-[260px] border-b-2 border-[#111111] bg-[#030303] p-5 text-[#f7f6f1] md:col-span-5 md:border-b-0 md:border-r-2">
                                <div className="font-mono-ui text-xs uppercase leading-tight text-[#f7f6f1]/72">
                                    {project.index}
                                    <br />
                                    -
                                    <br />
                                    {project.label}
                                </div>

                                <div className="absolute inset-x-5 bottom-5">
                                    {project.image ? (
                                        <button
                                            type="button"
                                            onClick={() => openProject(project)}
                                            className="relative block w-full bg-[#f7f6f1] p-3 pb-10 text-left shadow-[0_3px_14px_rgba(0,0,0,0.28)] transition duration-200 group-hover:-translate-y-1"
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                loading="eager"
                                                decoding="async"
                                                className="aspect-[16/10] w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                                            />
                                            <span className="font-mono-ui absolute bottom-4 left-8 text-[8px] uppercase text-[#111111]">
                                                {project.title} / {project.type}
                                            </span>
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => openProject(project)}
                                            className="relative grid aspect-[16/10] w-full place-items-center border-2 border-[#f7f6f1] bg-[#030303] text-[#f7f6f1] transition duration-200 group-hover:-translate-y-1"
                                        >
                                            <div className="aspect-square w-[58%] rotate-45 border-2 border-[#f7f6f1]" />
                                            <span className="absolute text-[clamp(34px,5vw,72px)] font-light tracking-[-0.075em]">
                                                {project.title}
                                            </span>
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-8 p-5 md:col-span-7 md:grid-cols-7 md:p-8">
                                <div className="md:col-span-4">
                                    <div
                                        className="mb-8 h-4 w-4 rounded-full"
                                        style={{ backgroundColor: project.accent }}
                                    />
                                    <h3 className="m-0 text-[clamp(42px,6vw,96px)] font-semibold leading-[0.88] tracking-[-0.065em]">
                                        {project.title}
                                    </h3>
                                    <p className="mt-6 max-w-xl text-[clamp(16px,1.5vw,21px)] font-medium leading-[1.35] tracking-[-0.04em] text-[#111111]/72">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="md:col-span-3">
                                    <div className="grid gap-4 border-b border-[#111111]/20 pb-6 font-mono-ui text-xs uppercase leading-[1.45] text-[#111111]/62">
                                        <span>Role: {project.role}</span>
                                        <span>Date: {project.date}</span>
                                        <span>Type: {project.type}</span>
                                    </div>

                                    <ul className="m-0 mt-6 grid list-none gap-3 p-0">
                                        {project.contribution.map((item) => (
                                            <li
                                                key={item}
                                                className="border-t border-[#111111]/18 pt-3 text-sm leading-[1.55] text-[#111111]/70"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {(project.kind === 'gallery' || project.kind === 'video') && (
                                        <button
                                            type="button"
                                            onClick={() => openProject(project)}
                                            className="mt-8 border-2 border-[#111111] bg-[#f7f6f1] px-4 py-3 font-mono-ui text-xs uppercase transition duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_#111111]"
                                        >
                                            Open exhibit
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <AiWorksModal
                isOpen={Boolean(galleryImages)}
                onClose={() => setGalleryImages(null)}
                images={galleryImages ?? []}
            />

            <VideoModal
                isOpen={Boolean(currentVideoUrl)}
                onClose={() => {
                    setCurrentVideoUrl(null);
                }}
                videoUrl={currentVideoUrl}
            />
        </section>
    );
};
