import { useState } from "react";
import handClickIcon from 'figma:asset/hand-click.jpg';

const projects = [
  { id: 1, title: "汽车售后索赔AI", subtitle: "审核项目", tags: ["AI", "VOLVO", "BA"] },
  { id: 2, title: "Synapse AI工作流平台", subtitle: "智能化产品经理协作系统", tags: ["AI", "Workflow", "SaaS"] },
  { id: 3, title: "VHC数据指标功能", subtitle: "数据驱动的业务洞察平台", tags: ["Data", "Analytics", "Dashboard"] },
  { id: 4, title: "售后操作手册AI客服系统", subtitle: "RAG技术驱动的智能问答平台", tags: ["AI", "RAG", "Chatbot"] }
];

export function Portfolio() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];
  return (
    <section className="relative flex flex-col justify-between" style={{backgroundColor: '#000000', width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, padding: '80px'}}>
      <div>
        <h2 style={{fontFamily: "'YouYou-YiSong', serif", fontSize: '48px', fontWeight: '400', color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '20px'}}>{currentProject.title}</h2>
        <h3 style={{fontFamily: "'YouYou-YiSong', serif", fontSize: '32px', fontWeight: '300', color: '#FFFFFF', letterSpacing: '0.1em'}}>{currentProject.subtitle}</h3>
      </div>
      <div className="flex-1 my-12" style={{backgroundColor: '#E5E5E5', borderRadius: '20px', minHeight: '400px'}} />
      <div className="flex justify-between items-end">
        <div className="flex gap-4">{projects.map((project, index) => (<button key={project.id} onClick={() => setCurrentProjectIndex(index)} style={{fontFamily: "'HuXiaoBo-NanShenTi', 'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '400', color: currentProjectIndex === index ? '#C0F200' : '#666666', letterSpacing: '0.05em', transition: 'color 0.3s'}}>0{index + 1}</button>))}</div>
        <div style={{fontFamily: "'HuXiaoBo-NanShenTi', 'Space Grotesk', sans-serif", fontSize: '32px', fontWeight: '600', color: '#FFFFFF', letterSpacing: '0.05em'}}>{currentProject.tags.join('  ')}</div>
        <div className="flex items-center gap-3">
          <div style={{fontFamily: "'ZCOOL-GDH', 'HuXiaoBo-NanShenTi', sans-serif", fontSize: '48px', fontWeight: '900', color: '#FFFFFF', letterSpacing: '0.05em', lineHeight: '1'}}>SHIN<br />KOU</div>
          <img src={handClickIcon} alt="hand click" style={{width: '40px', height: '40px', filter: 'invert(1)'}} />
        </div>
      </div>
    </section>
  );
}