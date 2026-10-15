import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { exhibits, filters, type Exhibit } from './content/exhibits';
import { timelineEntries } from './content/portfolio';
import { ProjectCaseViewer } from './components/ProjectCaseViewer';
import photo from './assets/sink-editorial-portrait.png';
import { Photography } from './components/Photography';
import './styles/studio.css';
import './styles/editorial.css';

type Page='Home'|'Work'|'Photography'|'About';
export default function App(){
 const [page,setPage]=useState<Page>('Home');
 const [filter,setFilter]=useState('All');
 const [selected,setSelected]=useState('agent');
 const [direction,setDirection]=useState(1);
 const [showIndex,setShowIndex]=useState(false);
 const [detail,setDetail]=useState<Exhibit|null>(null);
 const contactDialog=useRef<HTMLDialogElement>(null);
 const [zoom,setZoom]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null);
 const lastFocus=useRef<HTMLElement|null>(null);
 const reduced=useReducedMotion();
 const dragging=useRef(false);
 const filtered=exhibits.filter(x=>filter==='All'||x.category===filter);
 const active=filtered.find(x=>x.id===selected)||filtered[0];
 const index=filtered.indexOf(active);
 const go=(next:Page)=>{setPage(next);window.scrollTo(0,0);};
 const open=(item:Exhibit)=>{lastFocus.current=document.activeElement as HTMLElement;setZoom(false);setDetail(item);};
 const closing=useRef(false);
 const close=async()=>{if(closing.current)return;closing.current=true;try{if(dialog.current&&!reduced)await dialog.current.animate([{opacity:1,transform:'translateY(0) scale(1)'},{opacity:0,transform:'translateY(12px) scale(.985)'}],{duration:150,easing:'ease-in'}).finished;}finally{setDetail(null);closing.current=false;}};
 const browse=(dir:number)=>{setDirection(dir);setSelected(filtered[(index+dir+filtered.length)%filtered.length].id);};
 useEffect(()=>{if(detail){dialog.current?.showModal();dialog.current?.scrollTo(0,0);if(!reduced)dialog.current?.animate([{opacity:0,transform:'translateY(20px) scale(.98)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:320,easing:'cubic-bezier(.16,1,.3,1)'});const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous;};}dialog.current?.close();lastFocus.current?.focus();},[detail]);
 const work=(id='agent')=>{setSelected(id);setFilter('All');go('Work');};
 useEffect(()=>{const pending=[photo,...exhibits.map(x=>x.image).filter(Boolean)] as string[];pending.forEach(src=>{const img=new Image();img.src=src;});},[]);
 const turnVariants={enter:{opacity:0,x:reduced?0:direction*48},show:{opacity:1,x:0},leave:{opacity:0,x:reduced?0:-direction*32}};
 return <div className="journal">
  <header className="journal-header"><button className="journal-logo" onClick={()=>go('Home')} aria-label="Sink home">Sink<span className="logo-dot">.</span></button><nav aria-label="Main navigation">{(['Work','Photography','About'] as Page[]).map(p=><button key={p} aria-current={page===p?'page':undefined} onClick={()=>go(p)}>{p}</button>)}<button onClick={()=>contactDialog.current?.showModal()}>Contact <ArrowUpRight size={12}/></button></nav></header>
  <motion.main key={page} initial={{opacity:reduced?1:.55}} animate={{opacity:1}} transition={{duration:.22}}>
   {page==='Home'&&<section className="editorial-home" aria-label="Introduction">
    <div className="home-issue"><span>SELECTED WORK &</span><span>ONGOING EXPLORATIONS</span><span className="issue-number">2026 — ∞</span></div>
    <figure className="home-portrait"><span className="portrait-stack"><img src={photo} alt="Sink — blue print portrait with red hand-drawn details"/></span><figcaption>a little more me</figcaption></figure>
    <div className="editorial-intro"><h1><span className="intro-greeting">Hello, I’m</span><br/><span className="name-play" aria-label="Sink"><span className="letter">S</span><span className="letter">i</span><span className="letter">n</span><span className="letter">k</span><span className="name-dot">.</span></span></h1><p>A product mind.<br/>A hands-on builder.</p><button className="editorial-work-link" onClick={()=>work()}>And these are<br/><em>some things I’ve made.</em><ArrowUpRight size={23}/></button></div>
    <button className="home-specimen" onClick={()=>work('ai-check')} aria-label="Explore AI Mingjian"><img src={exhibits.find(x=>x.id==='ai-check')?.image} alt="Original AI Mingjian artwork"/><span>01 / an idea, made tangible</span></button>
    <span className="home-margin-note">A little curiosity goes a long way.</span>
   </section>}
   {page==='Work'&&<section className="editorial-work" aria-label="Selected work">
    <div className="work-heading"><h1>Things<br/><em>in the making.</em></h1><div className="work-tools"><button onClick={()=>setShowIndex(!showIndex)} aria-expanded={showIndex}>{showIndex?'Close index −':'View index +'}</button><span>{exhibits.length} selected pieces</span></div></div>
    <div className="editorial-filters" aria-label="Filter work">{filters.map(f=><button key={f} aria-pressed={filter===f} onClick={()=>{setFilter(f);setDirection(1);}}>{f}<sup>{f==='All'?exhibits.length:exhibits.filter(x=>x.category===f).length}</sup></button>)}</div>
    {showIndex?<div className="editorial-index">{filtered.map((x,i)=><button key={x.id} onClick={()=>{setSelected(x.id);setShowIndex(false);}}><span>{String(i+1).padStart(2,'0')}</span><strong>{x.title}</strong><small>{x.category}</small><ArrowUpRight size={16}/></button>)}</div>:<div className="gallery-scene">
     <span className="gallery-margin">{active.category}<br/><span>{active.project?.date||'An ongoing practice'}</span></span>
     <div className="gallery-object">
      <AnimatePresence mode="popLayout" initial={false}><motion.div key={active.id} variants={turnVariants} initial="enter" animate="show" exit="leave" transition={{duration:reduced?0:.32,ease:[.16,1,.3,1]}} drag={reduced?false:'x'} dragConstraints={{left:0,right:0}} dragElastic={.45} dragMomentum={false} dragTransition={{bounceStiffness:420,bounceDamping:38}} onDragStart={()=>{dragging.current=true;}} onDragEnd={(_,info)=>{if(Math.abs(info.offset.x)>55)browse(info.offset.x<0?1:-1);window.setTimeout(()=>{dragging.current=false;},120);}} className="gallery-dragger">
       <button className={`gallery-print ${active.category==='Plugins'?'plugin-print':''}`} onClick={()=>{if(!dragging.current)open(active);}} aria-label={`Open ${active.title}`}>
        {active.image?<img draggable={false} src={active.image} alt={active.title}/>:<div className="diffusion-art"><span>Ideas,<br/>taking shape.</span><small>SCREENSHOT FORTHCOMING</small></div>}
        <span className="print-open">{active.project?.video?'Play film':'Open project'} <ArrowUpRight size={13}/></span>
       </button>
      <div className="gallery-caption" aria-live="polite"><span>{active.tag}</span><h2>{active.title}</h2><p>{active.description}</p></div>
      </motion.div></AnimatePresence>
      <div className="gallery-navigation"><button aria-label="Previous project" onClick={()=>browse(-1)}><ArrowLeft size={17}/></button><span>{String(index+1).padStart(2,'0')} <i>/</i> {String(filtered.length).padStart(2,'0')}</span><button aria-label="Next project" onClick={()=>browse(1)}><ArrowRight size={17}/></button></div>
     </div><span className="gallery-hint">Drag to browse.<br/>Click to look closer.</span>
    </div>}
   </section>}
   {page==='Photography'&&<Photography/>}
   {page==='About'&&<section className="editorial-about"><div className="about-heading"><span>A NOTE ABOUT ME</span><h1>Curiosity,<br/><em>put to work.</em></h1></div><figure><img src={photo} alt="Xinyi Kou — editorial portrait"/><figcaption>Xinyi Kou / also known as Sink</figcaption></figure><div className="about-letter"><p>I’m a product manager who likes to get close to the work — understanding the problem, shaping the experience, and building something to test.</p><p>My practice moves between business systems, AI workflows and product design. Lately, that means tools for engineering teams, small Dify plugins, and reusable skills.</p><p>Clear thinking. Useful things.<br/>Room to keep exploring.</p><div className="about-socials" aria-label="Social media">
<a href="https://x.com/Shin_Kouuu" target="_blank" rel="noopener noreferrer" aria-label="X — opens in a new tab"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.8-8.9L.8 2h6.5l5.8 7.7L18.9 2ZM17.8 20h1.7L6.4 3.9H4.5L17.8 20Z"/></svg><span>X<small>@Shin_Kouuu</small></span><ArrowUpRight size={16}/></a>
<a href="https://www.linkedin.com/in/xinyi-kou-12a732334" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn — opens in a new tab"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor"/><circle cx="6.9" cy="7" r="1.4" fill="var(--paper)"/><path fill="var(--paper)" d="M5.7 10h2.5v8H5.7zm4.4 0h2.4v1.1c.6-.9 1.5-1.4 2.7-1.4 2.4 0 3.1 1.5 3.1 3.6V18h-2.5v-4.2c0-1.1-.1-2-1.5-2s-1.7 1-1.7 2V18h-2.5z"/></svg><span>LinkedIn<small>Xinyi Kou</small></span><ArrowUpRight size={16}/></a>
<a href="https://www.xiaohongshu.com/user/profile/6619e1c70000000003032101" target="_blank" rel="noopener noreferrer" aria-label="Xiaohongshu — opens in a new tab"><svg className="rednote-icon" viewBox="0 0 40 24" aria-hidden="true"><text x="20" y="17" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="700" fontFamily="Noto Sans SC,Microsoft YaHei,sans-serif">小红书</text></svg><span>Xiaohongshu<small>Rednote</small></span><ArrowUpRight size={16}/></a>
</div><details><summary>A few chapters along the way +</summary>{timelineEntries.map(t=><div className="journal-timeline" key={t.title}><small>{t.year}</small><p>{t.title}</p></div>)}</details></div></section>}
  </motion.main>
  <footer className="journal-footer"><span>© 2026 Sink</span><span>Thoughtfully made. Always in progress.</span><button onClick={()=>go(page==='Home'?'Work':'Home')}>{page==='Home'?'Take a look ↗':'Back to the beginning ↗'}</button></footer>
  <dialog ref={contactDialog} className="contact-dialog" aria-labelledby="contact-title" onClick={e=>{if(e.target===e.currentTarget)contactDialog.current?.close();}}><button className="contact-close" autoFocus aria-label="Close contact" onClick={()=>contactDialog.current?.close()}><X size={20}/></button><span className="contact-eyebrow">A CONVERSATION STARTS HERE</span><h2 id="contact-title">Say hello.</h2><a className="contact-email" href="mailto:sink@163.com">sink@163.com <ArrowUpRight size={24}/></a><p>Ideas, questions, or just a little hello.</p></dialog>
  <dialog ref={dialog} className="detail-dialog journal-dialog" aria-labelledby="project-title" onCancel={e=>{e.preventDefault();void close();}} onClose={()=>setDetail(null)} onClick={e=>{if(e.target===e.currentTarget)close();}}>{detail&&<><div className="detail-header"><span className="mono">{detail.tag}</span><button autoFocus aria-label="Close project" onClick={close}><X size={21}/></button></div><h2 id="project-title">{detail.title}</h2><p>{detail.description}</p>{detail.project?<ProjectCaseViewer key={detail.id} project={detail.project}/>:<><button className="screenshot-zoom" onClick={()=>setZoom(!zoom)} disabled={!detail.image}>{detail.image?(zoom?'Fit to window ↙':'View image detail ↗'):'Original screenshot forthcoming'}</button>{detail.image?<div className={`evidence-image ${zoom?'evidence-zoomed':''}`}><img src={detail.image} alt={`${detail.title} — original screenshot`}/></div>:<div className="diffusion-art detail-diffusion"><span>Ideas, taking shape.</span></div>}<ul>{detail.notes.map(n=><li key={n}>{n}</li>)}</ul></>}</>}</dialog>
 </div>;
}


