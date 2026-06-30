import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { PortfolioProject } from '../portfolioContent';

interface ProjectExhibitModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectExhibitModal = ({ project, onClose }: ProjectExhibitModalProps) => {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  if (!project) return null;

  const detailSections = project.detailSections ?? [
    {
      title: 'Highlights',
      items: project.contribution,
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] grid place-items-center bg-[#030303]/72 px-3 py-6 backdrop-blur-sm md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.article
          className="relative max-h-[90vh] w-[min(1180px,100%)] overflow-y-auto rounded-[30px] border-2 border-[#111111] bg-[#f7f6f1] text-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close exhibit"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border-2 border-[#111111] bg-[#f7f6f1] transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#111111]"
          >
            <X className="h-5 w-5" strokeWidth={1.7} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            <aside className="border-b-2 border-[#111111] bg-[#030303] p-5 text-[#f7f6f1] md:col-span-5 md:min-h-[680px] md:border-b-0 md:border-r-2 md:p-7">
              <div className="font-mono-ui text-xs uppercase leading-tight text-[#f7f6f1]/74">
                {project.index}
                <br />
                -
                <br />
                {project.label}
              </div>

              <div className="mt-14 bg-[#f7f6f1] p-3 pb-10 shadow-[0_3px_18px_rgba(0,0,0,0.3)] md:mt-24">
                {project.video && !project.image ? (
                  <video
                    src={project.video}
                    controls
                    className="aspect-[16/10] w-full bg-[#111111] object-cover"
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10] w-full object-cover"
                  />
                ) : (
                  <div className="relative grid aspect-[16/10] place-items-center overflow-hidden bg-[#030303] text-[#f7f6f1]">
                    <div className="aspect-square w-[58%] rotate-45 border-2 border-[#f7f6f1]" />
                    <span className="absolute text-[clamp(34px,5vw,72px)] font-light tracking-[-0.075em]">
                      {project.title}
                    </span>
                  </div>
                )}
                <span className="font-mono-ui mt-4 block text-[9px] uppercase text-[#111111]">
                  {project.title} / {project.type}
                </span>
              </div>

              {project.video && project.image && (
                <video
                  src={project.video}
                  controls
                  className="mt-6 aspect-[16/10] w-full border border-[#f7f6f1]/28 bg-[#111111] object-cover"
                />
              )}
            </aside>

            <div className="md:col-span-7">
              <header className="border-b-2 border-[#111111] px-5 pb-9 pt-16 md:px-9 md:pb-12 md:pt-20">
                <div
                  className="mb-8 h-4 w-4 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                <h2 className="m-0 max-w-4xl text-[clamp(46px,7vw,112px)] font-semibold leading-[0.88] tracking-[-0.065em]">
                  {project.title}
                </h2>
                <p className="mt-7 max-w-2xl text-[clamp(17px,1.7vw,24px)] font-medium leading-[1.36] tracking-[-0.04em] text-[#111111]/72">
                  {project.description}
                </p>
              </header>

              <section className="grid gap-6 border-b-2 border-[#111111] px-5 py-7 md:grid-cols-3 md:px-9">
                {[
                  ['Role', project.role],
                  ['Date', project.date],
                  ['Type', project.type],
                ].map(([label, value]) => (
                  <div key={label} className="font-mono-ui text-xs uppercase leading-[1.55] text-[#111111]/64">
                    <span className="block text-[#111111]">{label}</span>
                    {value}
                  </div>
                ))}
              </section>

              <section className="grid gap-0 border-b-2 border-[#111111] md:grid-cols-2">
                {project.problem && (
                  <div className="border-b border-[#111111]/20 p-5 md:border-b-0 md:border-r md:p-7">
                    <p className="font-mono-ui m-0 text-xs uppercase text-[#111111]/54">Problem solved</p>
                    <p className="mt-4 text-lg leading-[1.45] tracking-[-0.035em] text-[#111111]/76">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.outcome && (
                  <div className="p-5 md:p-7">
                    <p className="font-mono-ui m-0 text-xs uppercase text-[#111111]/54">Outcome</p>
                    <p className="mt-4 text-lg leading-[1.45] tracking-[-0.035em] text-[#111111]/76">
                      {project.outcome}
                    </p>
                  </div>
                )}
              </section>

              {project.skills?.length ? (
                <section className="border-b-2 border-[#111111] px-5 py-6 md:px-9">
                  <p className="font-mono-ui m-0 text-xs uppercase text-[#111111]/54">Skills</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#111111]/28 px-3 py-1.5 font-mono-ui text-[11px] uppercase text-[#111111]/72"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="px-5 py-8 md:px-9 md:py-10">
                {detailSections.map((section) => (
                  <div key={section.title} className="border-t border-[#111111]/18 py-6 first:border-t-0 first:pt-0">
                    <h3 className="m-0 font-mono-ui text-xs uppercase leading-[1.4] text-[#111111]/58">
                      {section.title}
                    </h3>
                    {section.body && (
                      <p className="mt-4 max-w-3xl text-base leading-[1.68] text-[#111111]/74">
                        {section.body}
                      </p>
                    )}
                    {section.items?.length ? (
                      <ul className="m-0 mt-4 grid list-none gap-3 p-0">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="border-l-2 border-[#111111] pl-4 text-base leading-[1.62] text-[#111111]/74"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </section>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
};
