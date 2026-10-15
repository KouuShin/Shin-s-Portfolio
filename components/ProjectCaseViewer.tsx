import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { PortfolioProject } from '../content/portfolio';

export function ProjectCaseViewer({ project }: { project: PortfolioProject }) {
  const [tab, setTab] = useState<'media' | 'case'>('media');
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const images = [...new Set([project.image, ...(project.images || [])].filter((src): src is string => !!src))];
  const media = [...(project.video ? [{ type: 'video', src: project.video }] : []), ...images.map(src => ({ type: 'image', src }))];
  const current = media[index];
  const select = (next: number) => { setIndex(next); setZoom(false); };
  return <div className="case-viewer">
    <div className="case-tabs" aria-label="Case content">
      <button aria-pressed={tab === 'media'} onClick={() => setTab('media')}>Gallery <small>{project.video ? 'Film / ' : ''}{images.length} images</small></button>
      <button aria-pressed={tab === 'case'} onClick={() => setTab('case')}>Case study <small>Context · Process · Outcome</small></button>
    </div>
    {tab === 'media' ? <>
      {current && <div className={`case-media ${zoom ? 'zoomed' : ''}`}>
        {current.type === 'video' ? <video key={current.src} src={current.src} controls playsInline preload="metadata" aria-label={`${project.title} demo video`}/> : <button className="case-image-button" onClick={() => setZoom(!zoom)} aria-label={zoom ? 'Fit image to frame' : 'Enlarge image'}><img src={current.src} alt={`${project.title} · ${index + 1} / ${media.length}`}/></button>}
      </div>}
      <div className="case-media-controls"><span>{current?.type === 'video' ? 'Play the prototype film' : 'Click the image to enlarge or restore'}</span><div><button aria-label="Previous media" onClick={() => select((index - 1 + media.length) % media.length)}><ArrowLeft size={18}/></button><span aria-live="polite">{index + 1} / {media.length}</span><button aria-label="Next media" onClick={() => select((index + 1) % media.length)}><ArrowRight size={18}/></button></div></div>
      <div className="case-thumbnails" aria-label="Select media">{media.map((m, i) => <button key={m.src} aria-label={m.type === 'video' ? 'Select film' : `Select image ${i + 1}`} aria-pressed={index === i} onClick={() => select(i)}>{m.type === 'video' ? <span>▷ demo video</span> : <img src={m.src} alt="" loading="lazy"/>}</button>)}</div>
    </> : <div className="case-story">
      <dl className="case-facts">{[['Role', project.role], ['Date', project.date], ['Project type', project.type]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      {project.problem && <section><h3>The problem</h3><p>{project.problem}</p></section>}
      {project.outcome && <section><h3>The outcome</h3><p>{project.outcome}</p></section>}
      <section><h3>My contribution</h3><ul>{project.contribution.map(text => <li key={text}>{text}</li>)}</ul></section>
      {project.detailSections?.map(section => <section key={section.title}><h3>{section.title}</h3>{section.body && <p>{section.body}</p>}{section.items && <ul>{section.items.map(text => <li key={text}>{text}</li>)}</ul>}</section>)}
      {!!project.skills?.length && <section><h3>Skills</h3><div className="about-tags">{project.skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>}
    </div>}
  </div>;
}

