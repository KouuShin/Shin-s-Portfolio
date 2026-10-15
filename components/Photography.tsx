import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
const sources=import.meta.glob('../assets/photography/frame-*.jpg',{eager:true,import:'default'}) as Record<string,string>;
const descriptions=['Stacked stones and a long shadow','A lamp in a dark room','Railway lines beneath clouds','A spiral staircase','Sunlit windows and a streetlamp','Roofline and inverted railway','Chimneys in black and white','A passerby framed by a window','A hand brushing through water'];
const frames=Object.keys(sources).sort().map((key,i)=>({src:sources[key],alt:descriptions[i]}));
export function Photography(){
 const [spread,setSpread]=useState(0);
 const [selected,setSelected]=useState<number|null>(null);
 const dialog=useRef<HTMLDialogElement>(null);
 const focus=useRef<HTMLElement|null>(null);
 const reduced=useReducedMotion();
 useEffect(()=>{if(selected===null){dialog.current?.close();focus.current?.focus();return;}dialog.current?.showModal();const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous;};},[selected]);
 const open=(i:number)=>{focus.current=document.activeElement as HTMLElement;setSelected(i);};
 const turn=(d:number)=>setSelected(i=>i===null?null:(i+d+frames.length)%frames.length);
 return <section className="photography" aria-label="Photography">
  <div className="photo-heading"><h1>Outside<br/><em>the brief.</em></h1><p>Photographs by Sink.<br/>Small things, worth a second look.</p></div>
  <AnimatePresence mode="wait" initial={false}><motion.div key={spread} className={`photo-spread spread-${spread}`} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced?0:.18}}>
   {frames.slice(spread*3,spread*3+3).map((f,j)=><figure key={f.src} className={`photo-slot slot-${j}`}><button onClick={()=>open(spread*3+j)} aria-label={`Open photograph ${spread*3+j+1}: ${f.alt}`}><img src={f.src} alt={f.alt} loading="lazy"/></button><figcaption>{String(spread*3+j+1).padStart(2,'0')}</figcaption></figure>)}
  </motion.div></AnimatePresence>
  <div className="photo-pagination"><button aria-label="Previous photography spread" onClick={()=>setSpread(s=>(s+2)%3)}><ArrowLeft size={18}/></button><span>{spread+1} / 3</span><button aria-label="Next photography spread" onClick={()=>setSpread(s=>(s+1)%3)}><ArrowRight size={18}/></button><small>Nine photographs. Three spreads.</small></div>
  <dialog ref={dialog} className="photo-lightbox" aria-label="Photograph viewer" onCancel={()=>setSelected(null)} onClose={()=>setSelected(null)} onClick={e=>{if(e.target===e.currentTarget)setSelected(null);}} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();turn(1);}if(e.key==='ArrowLeft'){e.preventDefault();turn(-1);}}}>
   {selected!==null&&<><button className="photo-close" aria-label="Close photograph" onClick={()=>setSelected(null)}><X/></button><img src={frames[selected].src} alt={frames[selected].alt}/><div className="photo-pagination"><button aria-label="Previous photograph" onClick={()=>turn(-1)}><ArrowLeft/></button><span aria-live="polite">{selected+1} / {frames.length}</span><button aria-label="Next photograph" onClick={()=>turn(1)}><ArrowRight/></button></div></>}
  </dialog>
 </section>;
}
