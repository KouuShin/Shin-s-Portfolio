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
    <div className="case-tabs" aria-label="案例内容">
      <button aria-pressed={tab === 'media'} onClick={() => setTab('media')}>作品演示 <small>{project.video ? '视频 / ' : ''}{images.length} 张图片</small></button>
      <button aria-pressed={tab === 'case'} onClick={() => setTab('case')}>案例过程 <small>背景 · 方案 · 成果</small></button>
    </div>
    {tab === 'media' ? <>
      {current && <div className={`case-media ${zoom ? 'zoomed' : ''}`}>
        {current.type === 'video' ? <video key={current.src} src={current.src} controls playsInline preload="metadata" aria-label={`${project.title} 演示视频`}/> : <button className="case-image-button" onClick={() => setZoom(!zoom)} aria-label={zoom ? '缩小作品图片' : '放大作品图片'}><img src={current.src} alt={`${project.title} · ${index + 1} / ${media.length}`}/></button>}
      </div>}
      <div className="case-media-controls"><span>{current?.type === 'video' ? '点击播放，观看原型演示' : '点击图片放大，再次点击还原'}</span><div><button aria-label="上一张作品素材" onClick={() => select((index - 1 + media.length) % media.length)}><ArrowLeft size={18}/></button><span aria-live="polite">{index + 1} / {media.length}</span><button aria-label="下一张作品素材" onClick={() => select((index + 1) % media.length)}><ArrowRight size={18}/></button></div></div>
      <div className="case-thumbnails" aria-label="选择作品素材">{media.map((m, i) => <button key={m.src} aria-label={m.type === 'video' ? '选择演示视频' : `选择图片 ${i + 1}`} aria-pressed={index === i} onClick={() => select(i)}>{m.type === 'video' ? <span>▷ 演示视频</span> : <img src={m.src} alt="" loading="lazy"/>}</button>)}</div>
    </> : <div className="case-story">
      <dl className="case-facts">{[['我的角色', project.role], ['时间', project.date], ['项目类型', project.type]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      {project.problem && <section><h3>项目背景 / Problem</h3><p>{project.problem}</p></section>}
      {project.outcome && <section><h3>设计成果 / Outcome</h3><p>{project.outcome}</p></section>}
      <section><h3>我的工作 / Contribution</h3><ul>{project.contribution.map(text => <li key={text}>{text}</li>)}</ul></section>
      {project.detailSections?.map(section => <section key={section.title}><h3>{section.title}</h3>{section.body && <p>{section.body}</p>}{section.items && <ul>{section.items.map(text => <li key={text}>{text}</li>)}</ul>}</section>)}
      {!!project.skills?.length && <section><h3>Skills</h3><div className="about-tags">{project.skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>}
    </div>}
  </div>;
}
