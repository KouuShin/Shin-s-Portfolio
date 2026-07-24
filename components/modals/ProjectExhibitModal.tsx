import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PortfolioProject } from '../../content/portfolio';

interface ProjectExhibitModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

interface MingjianPage {
  eyebrow: string;
  title: string;
  body: string;
  notes: Array<{ label: string; value: string }>;
}

const uiEaseOut = [0.23, 1, 0.32, 1] as const;

const paperTexture = {
  backgroundImage:
    'radial-gradient(circle at 18% 22%, rgba(23,20,18,0.045) 0 1px, transparent 1px), radial-gradient(circle at 72% 64%, rgba(23,20,18,0.035) 0 1px, transparent 1px), linear-gradient(104deg, transparent 49.65%, rgba(23,20,18,0.13) 49.9%, rgba(23,20,18,0.075) 50.15%, transparent 50.55%)',
  backgroundSize: '17px 17px, 23px 23px, 100% 100%',
};

const pageVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    filter: 'blur(3px)',
    transform: `translate3d(${direction > 0 ? 22 : -22}px, 0, 0) rotateY(${direction > 0 ? -2 : 2}deg)`,
  }),
  center: {
    opacity: 1,
    filter: 'blur(0px)',
    transform: 'translate3d(0, 0, 0) rotateY(0deg)',
  },
  exit: (direction: number) => ({
    opacity: 0,
    filter: 'blur(2px)',
    transform: `translate3d(${direction > 0 ? -18 : 18}px, 0, 0) rotateY(${direction > 0 ? 2 : -2}deg)`,
  }),
};

const visualVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    transform: `translate3d(${direction > 0 ? 28 : -28}px, 0, 0) rotateY(${direction > 0 ? -5 : 5}deg)`,
  }),
  center: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0) rotateY(0deg)',
  },
  exit: (direction: number) => ({
    opacity: 0,
    transform: `translate3d(${direction > 0 ? -18 : 18}px, 0, 0) rotateY(${direction > 0 ? 3 : -3}deg)`,
  }),
};

const buildMingjianPages = (project: PortfolioProject): MingjianPage[] => [
  {
    eyebrow: '001 / Concept Statement',
    title: 'AI Mingjian as an assessment archive.',
    body:
      'A Volvo sales assessment product that turns scattered manual checks into a repeatable AI dialogue, scoring, and coaching workflow. The project is framed as a system for observing sales capability, not only as a training tool.',
    notes: [
      { label: 'Role', value: project.role },
      { label: 'Date', value: project.date },
      { label: 'Type', value: project.type },
      { label: 'Skills', value: project.skills?.slice(0, 3).join(' / ') ?? 'AI product design / BA / prototype' },
    ],
  },
  {
    eyebrow: '002 / System Logic',
    title: 'From manual inspection to role-based AI workflow.',
    body:
      project.problem ??
      'The product translates one-off business inspections into configurable tasks, role permissions, customer agent behavior, voice examination paths, dashboards, and report review states.',
    notes: [
      { label: 'Business Team', value: 'Task setup / scoring dimensions / dealer scope' },
      { label: 'AI Customer', value: 'Persona loading / objections / dialogue continuation' },
      { label: 'Learner', value: 'Task calendar / voice simulation / report review' },
      { label: 'Manager', value: 'Progress tracking / result review / coaching follow-up' },
    ],
  },
  {
    eyebrow: '003 / Delivery Evidence',
    title: 'The outcome is a reusable coaching loop.',
    body:
      project.outcome ??
      'A connected assessment experience that links task setup, AI simulation, scoring, dashboards, and personalized improvement reports.',
    notes: [
      { label: 'PRD', value: 'Rules / status transitions / validation logic' },
      { label: 'Prototype', value: 'PC and App HTML interaction paths' },
      { label: 'AI Behavior', value: 'Prompt rules / transcript analysis / custom scoring' },
      { label: 'Report', value: 'Dimension scores / improvement advice / review flow' },
    ],
  },
];

const PageControl = ({
  page,
  total,
  onPrev,
  onNext,
  onJump,
}: {
  page: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (page: number) => void;
}) => (
  <div className="grid gap-4 font-mono-ui text-[11px] uppercase tracking-normal text-[#171412]">
    <div className="flex items-center justify-between gap-4">
      <button
        type="button"
        onClick={onPrev}
        disabled={page === 0}
        className="inline-flex items-center gap-2 rounded-full px-2 py-2 transition-[opacity,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] disabled:opacity-30"
      >
        <ChevronLeft className="h-4 w-4" strokeWidth={1.4} />
        Prev
      </button>
      <span className="text-[#7b1e2b]">
        {String(page + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
      <button
        type="button"
        onClick={onNext}
        disabled={page === total - 1}
        className="group inline-flex items-center gap-2 rounded-full px-2 py-2 transition-[opacity,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] disabled:opacity-30"
      >
        Next page
        <span className="h-px w-10 bg-[#171412] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-125" />
        <ChevronRight className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5" strokeWidth={1.4} />
      </button>
    </div>

    <div className="grid grid-cols-3 gap-2" aria-label="Booklet pages">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onJump(index)}
          aria-label={`Go to page ${index + 1}`}
          className="h-1.5 overflow-hidden rounded-full bg-[#171412]/16 text-left"
        >
          <span
            className="block h-full rounded-full bg-[#7b1e2b] transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: index <= page ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left' }}
          />
        </button>
      ))}
    </div>
  </div>
);

const MingjianBooklet = ({ project, onClose }: { project: PortfolioProject; onClose: () => void }) => {
  const pages = useMemo(() => buildMingjianPages(project), [project]);
  const shouldReduceMotion = useReducedMotion();
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const current = pages[page];

  useEffect(() => {
    setPage(0);
    setDirection(1);
  }, [project.id]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goNext();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrev();
      }
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const goToPage = (targetPage: number) => {
    setDirection(targetPage > page ? 1 : -1);
    setPage(Math.max(0, Math.min(pages.length - 1, targetPage)));
  };

  const goPrev = () => goToPage(page - 1);
  const goNext = () => goToPage(page + 1);

  const motionTransition = shouldReduceMotion
    ? { duration: 0.18, ease: uiEaseOut }
    : { duration: 0.26, ease: uiEaseOut };

  return (
    <motion.article
      className="relative max-h-[91vh] w-[min(1240px,100%)] overflow-hidden rounded-[18px] bg-[#f1eee6] text-[#171412] shadow-[0_28px_90px_rgba(0,0,0,0.38)] will-change-transform"
      style={paperTexture}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.975, transform: 'translate3d(0, 24px, 0)' }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, transform: 'translate3d(0, 0, 0)' }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, transform: 'translate3d(0, 14px, 0)' }}
      transition={{ type: 'spring', duration: 0.42, bounce: 0.04 }}
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close exhibit"
        className="absolute right-5 top-5 z-20 grid h-10 w-10 place-items-center rounded-full border border-[#171412]/40 bg-[#f1eee6]/80 text-[#171412] backdrop-blur-sm transition-[background-color,color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#171412] hover:text-[#f1eee6] active:scale-[0.96]"
      >
        <X className="h-5 w-5" strokeWidth={1.5} />
      </button>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-16 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(23,20,18,0.18),rgba(23,20,18,0.08)_28%,transparent_67%)] md:block" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(255,255,255,0.16),transparent_18%,transparent_82%,rgba(23,20,18,0.035))]" />

      <div className="grid max-h-[91vh] grid-cols-1 overflow-y-auto md:grid-cols-2">
        <section className="relative z-[2] flex min-h-[680px] flex-col px-7 pb-7 pt-16 md:min-h-[760px] md:px-11 md:pb-10 md:pt-12">
          <div className="font-mono-ui text-[11px] uppercase leading-tight text-[#7b1e2b]">
            {current.eyebrow}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={pageVariants}
              initial={shouldReduceMotion ? { opacity: 0 } : 'enter'}
              animate={shouldReduceMotion ? { opacity: 1 } : 'center'}
              exit={shouldReduceMotion ? { opacity: 0 } : 'exit'}
              transition={motionTransition}
              className="mt-14 [transform-style:preserve-3d]"
            >
              <p className="m-0 max-w-[28rem] text-[15px] font-medium leading-[1.45] tracking-normal md:text-[17px]">
                MAGE-style product record / AI assessment system
              </p>
              <h2 className="m-0 mt-8 max-w-[34rem] text-[clamp(42px,5.6vw,82px)] font-semibold leading-[0.9] tracking-normal text-[#7b1e2b]">
                {current.title}
              </h2>
              <p className="mt-8 max-w-[32rem] text-[clamp(17px,1.6vw,22px)] leading-[1.46] tracking-normal">
                {current.body}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-auto pt-16">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`notes-${page}`}
                custom={direction}
                variants={pageVariants}
                initial={shouldReduceMotion ? { opacity: 0 } : 'enter'}
                animate={shouldReduceMotion ? { opacity: 1 } : 'center'}
                exit={shouldReduceMotion ? { opacity: 0 } : 'exit'}
                transition={{ ...motionTransition, duration: shouldReduceMotion ? 0.16 : 0.22 }}
                className="grid gap-x-6 gap-y-5 border-t border-[#171412]/20 pt-6 sm:grid-cols-2"
              >
                {current.notes.map((note) => (
                  <div key={note.label}>
                    <p className="font-mono-ui m-0 text-[10px] uppercase text-[#7b1e2b]">{note.label}</p>
                    <p className="m-0 mt-2 text-sm leading-[1.45] text-[#171412]/76">{note.value}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="mt-9">
              <PageControl page={page} total={pages.length} onPrev={goPrev} onNext={goNext} onJump={goToPage} />
            </div>
          </div>
        </section>

        <section className="relative z-[2] min-h-[620px] overflow-hidden border-t border-[#171412]/18 px-7 py-10 md:min-h-[760px] md:border-l md:border-t-0 md:px-10 md:py-12">
          <div className="absolute bottom-6 left-7 font-mono-ui text-2xl text-[#171412] md:bottom-8 md:left-10">
            {String(page * 2 + 56)}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`visual-${page}`}
              custom={direction}
              variants={visualVariants}
              initial={shouldReduceMotion ? { opacity: 0 } : 'enter'}
              animate={shouldReduceMotion ? { opacity: 1 } : 'center'}
              exit={shouldReduceMotion ? { opacity: 0 } : 'exit'}
              transition={motionTransition}
              drag={shouldReduceMotion ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.13}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70 || info.velocity.x < -420) goNext();
                if (info.offset.x > 70 || info.velocity.x > 420) goPrev();
              }}
              className="relative h-full min-h-[560px] cursor-grab touch-pan-y active:cursor-grabbing"
            >
              {page === 0 && project.image ? (
                <div className="absolute left-[5%] top-[18%] w-[88%] overflow-hidden rounded-[10px] border border-[#171412]/18 bg-[#f1eee6] p-3 shadow-[0_18px_50px_rgba(23,20,18,0.13)] transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10] w-full rounded-[6px] object-cover grayscale-[28%] contrast-[1.04] saturate-[0.8]"
                  />
                  <p className="font-mono-ui m-0 mt-3 text-[9px] uppercase text-[#171412]/58">
                    {project.title} / cover evidence
                  </p>
                </div>
              ) : (
                <div className="absolute left-[12%] top-[14%] h-[58%] w-[74%] rounded-[45%] border border-[#171412]/18" />
              )}

              <div className="absolute right-[14%] top-[22%] h-32 w-32 rounded-full border border-[#7b1e2b]/50 blur-[0.2px]" />
              <div className="absolute right-[18%] top-[30%] h-20 w-20 rounded-full bg-[#7b1e2b] opacity-[0.16] blur-2xl" />
              <div className="absolute left-[22%] top-[58%] h-10 w-24 rounded-full bg-[#7b1e2b] opacity-[0.14] blur-xl" />

              <div className="absolute bottom-16 right-0 max-w-[19rem] border-t border-[#171412]/24 pt-4 text-right md:bottom-12">
                <p className="m-0 text-sm leading-[1.52] text-[#171412]/72">
                  {page === 0
                    ? 'The project image is treated as printed evidence, not a commercial screenshot.'
                    : page === 1
                      ? 'The workflow is organized by roles, states, and AI behavior rather than by isolated pages.'
                      : 'The final value is a reusable assessment loop with traceable product logic.'}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </motion.article>
  );
};

export const ProjectExhibitModal = ({ project, onClose }: ProjectExhibitModalProps) => {
  const shouldReduceMotion = useReducedMotion();

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

  const isMingjian = project.id === 'ai-check';

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] grid place-items-center bg-[#030303]/72 px-3 py-6 backdrop-blur-sm md:px-8"
        initial={{ opacity: 0, backdropFilter: shouldReduceMotion ? 'none' : 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: shouldReduceMotion ? 'none' : 'blur(8px)' }}
        exit={{ opacity: 0, backdropFilter: shouldReduceMotion ? 'none' : 'blur(0px)' }}
        transition={{ duration: shouldReduceMotion ? 0.16 : 0.24, ease: uiEaseOut }}
        onClick={onClose}
      >
        {isMingjian ? (
          <MingjianBooklet project={project} onClose={onClose} />
        ) : (
          <motion.article
            className="relative max-h-[90vh] w-[min(1180px,100%)] overflow-y-auto rounded-[30px] border-2 border-[#111111] bg-[#f7f6f1] text-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.98 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0.16 : 0.28, ease: uiEaseOut }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close exhibit"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border-2 border-[#111111] bg-[#f7f6f1] transition-[transform,box-shadow,background-color,color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#111111] active:scale-[0.96]"
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
                      <span className="absolute text-[clamp(34px,5vw,72px)] font-light tracking-normal">
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
                  <h2 className="m-0 max-w-4xl text-[clamp(46px,7vw,112px)] font-semibold leading-[0.88] tracking-normal">
                    {project.title}
                  </h2>
                  <p className="mt-7 max-w-2xl text-[clamp(17px,1.7vw,24px)] font-medium leading-[1.36] tracking-normal text-[#111111]/72">
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
                      <p className="mt-4 text-lg leading-[1.45] tracking-normal text-[#111111]/76">
                        {project.problem}
                      </p>
                    </div>
                  )}
                  {project.outcome && (
                    <div className="p-5 md:p-7">
                      <p className="font-mono-ui m-0 text-xs uppercase text-[#111111]/54">Outcome</p>
                      <p className="mt-4 text-lg leading-[1.45] tracking-normal text-[#111111]/76">
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
        )}
      </motion.div>
    </AnimatePresence>
  );
};