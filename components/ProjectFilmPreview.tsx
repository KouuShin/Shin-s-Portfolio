import { useEffect, useRef } from 'react';

type Props = { src: string; poster?: string; title: string; enabled: boolean };

/** A silent glimpse of the actual product. The case viewer owns full playback. */
export function ProjectFilmPreview({ src, poster, title, enabled }: Props) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const sync = () => {
      if (enabled && visible && !document.hidden && !motion.matches) {
        void element.play().catch(() => {});
      } else {
        element.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }, { threshold: 0.45 });
    observer.observe(element);
    document.addEventListener('visibilitychange', sync);
    motion.addEventListener('change', sync);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', sync);
      motion.removeEventListener('change', sync);
      element.pause();
    };
  }, [src, enabled]);

  return <video
    ref={video}
    className="gallery-film"
    src={src}
    poster={poster}
    muted
    loop
    playsInline
    preload="metadata"
    aria-label={`${title} silent preview`}
  />;
}
