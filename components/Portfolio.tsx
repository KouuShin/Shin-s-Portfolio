import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";
import synapseLoginImage from 'figma:asset/synapse-login.png';
import synapseDashboardImage from 'figma:asset/synapse-dashboard.png';
import synapseWorkflowImage from 'figma:asset/synapse-workflow.png';
import synapseAIAssistantImage from 'figma:asset/synapse-ai-assistant.png';
// 导入封面图片，如果文件不存在，vite 插件会自动回退到 dashboard 图片
import synapseCoverpageImageRaw from 'figma:asset/synapse-ai-coverpage.jpg';
// 如果导入失败，使用 dashboard 图片作为备用
const synapseCoverpageImage = synapseCoverpageImageRaw || synapseDashboardImage;
// AI客服系统图片
import aiChatbotVectorizationImage from 'figma:asset/ai-chatbot-rag-vectorization.png';
import langgraphRagArchitectureImage from 'figma:asset/langgraph-rag-system-architecture.png';
import aiChatbotDialogImage from 'figma:asset/ai-chatbot-dialog-gemini-qa.png';
import aiChatbotTestResultImage from 'figma:asset/ai-chatbot-test-result-90-percent.png';

const projects = [
  {
    id: 1,
    title: "Synapse AI工作流平台",
    subtitle: "智能化产品经理协作系统",
    description: "主导设计并实现AI驱动的一体化工作流平台，通过引导式AI对话实现从产品构思到交付的全流程自动化，显著提升产品经理的工作效率和团队协作质量。",
    metrics: ["需求响应速度从1个星期缩短至3天", "从0到1的启动项目：产品规划和消化从3个月缩短至1~2个月", "用户满意度 100%"],
    imageUrl: synapseCoverpageImage,
    size: "large",
    detailImages: [
      { src: synapseLoginImage, caption: "登录界面 - 简洁的用户认证体验" },
      { src: synapseDashboardImage, caption: "主界面仪表板 - 项目概览与快速操作" },
      { src: synapseWorkflowImage, caption: "工作流管理 - AI驱动的任务协作平台" },
      { src: synapseAIAssistantImage, caption: "AI智能助手 - 自动化需求文档生成" }
    ],
    details: {
      role: "作为Synapse项目的需求方和发起人，我主导了从0到1的全过程，包括核心痛点洞察、产品概念验证、MVP设计以及迭代路线图规划。",
      challenge: "工时浪费严重：平均每个功能的PRD撰写，有将近50%的时间浪费在跨工具的信息整理与格式调整上。沟通成本高昂：由于信息不同步，一次需求评审后，平均需要2-3轮的额外会议进行澄清。",
      solution: "打造产品经理的\"第二大脑\"。Synapse是一个由AI驱动、价值驱动的一体化工作流平台，将产品从0到1的构思过程结构化、自动化。",
      results: "效率提升：参与测试的产品经理，端到端的文档撰写与整理时间平均缩短了40%。沟通优化：因需求理解不一致而产生的额外沟通会议减少了约50%。"
    }
  },
  {
    id: 2,
    title: "汽车售后索赔AI审核项目",
    subtitle: "AI赋能的理赔审核工作流系统",
    description: "作为AI赋能模块的产品经理，独立负责从0到1的完整产品闭环，将AI能力无缝集成到传统汽车售后SaaS工作流中，实现从'事后抽查'到'事前预审'的模式转变。",
    metrics: ["AI自动化审核率从2.79%提升至72%", "审核覆盖率从14%提升至100%", "源头解决72.9%的流程问题"],
    imageUrl: aiChatbotVectorizationImage,
    size: "medium",
    detailImages: [
      { src: aiChatbotVectorizationImage, caption: "知识库构建 - RAG文档切片与向量化存储" },
      { src: langgraphRagArchitectureImage, caption: "系统架构 - LangGraph + RAG技术栈" },
      { src: aiChatbotDialogImage, caption: "对话界面 - 基于Gemini大模型的智能问答" },
      { src: aiChatbotTestResultImage, caption: "测试结果 - 90%准确率验证" }
    ],
    details: {
      role: "作为AI赋能模块的产品经理，独立负责从0到1的完整产品闭环，主导AI能力探索、方案选型、流程设计和跨团队协作推动。",
      challenge: "年均40万单理赔，人工审核覆盖率仅14%。高达72.9%的问题单据是流程性问题，审核反馈滞后导致效率低下。",
      solution: "设计了从AI预审到人工复核的完整流程，在经销商提交前即时告知不合规项，引导其修正，实现从'事后抽查'到'事前预审'的模式转变。",
      results: "AI自动化审核率从2.79%提升至72%，审核覆盖率从14%提升至100%，在源头解决了72.9%的流程问题，显著提升审核效率。"
    }
  },
  {
    id: 3,
    title: "VHC数据指标功能",
    subtitle: "数据驱动的业务洞察平台",
    description: "设计并实现数据可视化功能，通过直观的图表和指标展示，帮助业务团队快速理解关键数据趋势，支持数据驱动的决策制定。",
    metrics: ["数据查询效率提升 60%", "决策制定时间缩短 40%", "用户采用率 85%"],
    imageUrl: synapseWorkflowImage,
    size: "medium",
    details: {
      role: "作为产品经理，负责数据指标功能的完整设计与实现，从需求调研到上线交付。",
      challenge: "业务团队需要频繁手动整理数据报表，耗时且易出错，难以快速获取关键业务洞察。",
      solution: "设计直观的数据可视化界面，支持自定义指标配置和实时数据更新，让业务团队能够快速查询和分析关键数据。",
      results: "数据查询效率提升60%，决策制定时间缩短40%，用户采用率达到85%，显著提升了数据驱动决策的效率。"
    }
  },
  {
    id: 4,
    title: "售后操作手册AI客服系统",
    subtitle: "RAG技术驱动的智能问答平台",
    description: "独立主导从0到1的POC项目，使用Gemini大模型和RAG检索增强技术，构建了一个能够7x24小时自动处理操作手册相关查询的AI客服系统，有效释放人力资源。",
    metrics: ["AI回答准确率达到90%", "7x24小时自动化服务", "显著降低重复性咨询工作量"],
    imageUrl: aiChatbotDialogImage,
    size: "small",
    detailImages: [
      { src: aiChatbotVectorizationImage, caption: "知识库构建 - RAG文档切片与向量化存储" },
      { src: langgraphRagArchitectureImage, caption: "系统架构 - LangGraph + RAG技术栈" },
      { src: aiChatbotDialogImage, caption: "对话界面 - 基于Gemini大模型的智能问答" },
      { src: aiChatbotTestResultImage, caption: "测试结果 - 90%准确率验证" }
    ],
    details: {
      role: "独立负责POC项目的全过程，从问题发现、技术选型到POC搭建和验证。",
      challenge: "业务团队花费大量时间重复回答操作手册中的基础问题，占用宝贵人力资源。",
      solution: "使用Gemini大模型和RAG检索增强技术，构建专业知识库AI客服，确保回答准确性和可追溯性。",
      results: "AI回答准确率达到90%，实现7x24小时自动化服务，显著降低重复性咨询工作量，释放人力资源。"
    }
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="portfolio" className="min-h-screen py-24 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="flex justify-between items-baseline mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight" style={{ color: '#C0F200' }}>Past Projects</h2>
            <span className="text-xs md:text-sm font-light tracking-wide" style={{ color: '#808080' }}>2023 - 2024</span>
          </div>
          
          {/* Projects Grid - Readymag Style Masonry Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-8">
            {projects.map((project, index) => {
              // Readymag-style varied sizing
              const getGridSpan = () => {
                if (index === 0) return 'lg:col-span-8'; // Large featured card
                if (index === 1) return 'lg:col-span-4'; // Medium card
                if (index === 2) return 'lg:col-span-5'; // Medium card
                return 'lg:col-span-7'; // Default
              };
              
              const getAspectRatio = () => {
                if (index === 0) return 'aspect-[16/10]'; // Wide featured
                if (index === 1) return 'aspect-[4/5]'; // Tall
                if (index === 2) return 'aspect-[3/4]'; // Portrait
                return 'aspect-[5/4]'; // Landscape
              };
              
              return (
              <div 
                key={project.id}
                className={`group cursor-pointer ${getGridSpan()}`}
                onClick={() => setSelectedProject(project)}
              >
                <div 
                  className={`relative w-full ${getAspectRatio()} rounded-2xl overflow-hidden border transition-all duration-700 ease-out`}
                  style={{ 
                    borderColor: 'rgba(192, 242, 0, 0.08)',
                    borderWidth: '1.5px',
                    backgroundColor: '#0a0a0a'
                  }} 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(192, 242, 0, 0.6)';
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    e.currentTarget.style.boxShadow = '0 24px 48px rgba(192, 242, 0, 0.12), 0 0 0 1px rgba(192, 242, 0, 0.1)';
                  }} 
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(192, 242, 0, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <ImageWithFallback
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-700"
                    style={{ opacity: 0.7 }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/70 to-transparent p-8 md:p-10 lg:p-12 flex flex-col justify-end">
                    <div className="space-y-4 md:space-y-5">
                      {index === 0 && (
                        <div 
                          className="inline-block px-4 py-2 text-xs font-bold tracking-wider rounded-full" 
                          style={{ backgroundColor: '#C0F200', color: '#050505', letterSpacing: '0.1em' }}
                        >
                          FEATURED
                        </div>
                      )}
                      <h3 
                        className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight" 
                        style={{ color: '#C0F200', letterSpacing: '-0.02em' }}
                      >
                        {project.title}
                      </h3>
                      <p 
                        className="text-base md:text-lg leading-relaxed max-w-2xl" 
                        style={{ color: '#FAFAF0', opacity: 0.95, letterSpacing: '-0.01em' }}
                      >
                        {project.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-3 pt-3">
                        {project.metrics.slice(0, 2).map((metric, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-4 py-2 rounded-full font-medium tracking-wide" 
                            style={{ 
                              color: '#C0F200', 
                              backgroundColor: 'rgba(192, 242, 0, 0.08)',
                              border: '1px solid rgba(192, 242, 0, 0.15)',
                              letterSpacing: '0.02em'
                            }}
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card Content Below Image - Readymag Style */}
                <div className="mt-6 md:mt-8 space-y-3">
                  <p 
                    className="text-sm md:text-base leading-relaxed line-clamp-2 font-light" 
                    style={{ color: '#808080', letterSpacing: '-0.01em', lineHeight: '1.7' }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 backdrop-blur-md overflow-y-auto"
          style={{ backgroundColor: 'rgba(5, 5, 5, 0.97)' }}
          onClick={() => setSelectedProject(null)}
        >
          <div className="min-h-screen py-8 md:py-12 px-4 md:px-6 lg:px-8">
            <div 
              className="max-w-6xl mx-auto border relative rounded-2xl"
              style={{ 
                backgroundColor: '#0a0a0a', 
                borderColor: 'rgba(192, 242, 0, 0.15)',
                borderWidth: '1.5px'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 transition-all duration-300 z-10 p-2 rounded-full hover:bg-[#C0F200]/10"
                style={{ color: '#FAFAF0' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C0F200';
                  e.currentTarget.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#FAFAF0';
                  e.currentTarget.style.transform = 'rotate(0deg)';
                }}
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              {/* Content */}
              <div className="p-10 md:p-14 lg:p-20">
                {/* Header */}
                <div className="mb-12 md:mb-20">
                  <h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight leading-tight" 
                    style={{ color: '#C0F200', letterSpacing: '-0.02em' }}
                  >
                    {selectedProject.title}
                  </h2>
                  <p 
                    className="text-lg md:text-xl font-light" 
                    style={{ color: '#808080', letterSpacing: '-0.01em', lineHeight: '1.6' }}
                  >
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Detail Images - if available */}
                {selectedProject.detailImages && (
                  <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-20">
                    {selectedProject.detailImages.map((img, index) => (
                      <div key={index} className="space-y-4 md:space-y-5">
                        <img 
                          src={img.src} 
                          alt={img.caption}
                          className="w-full rounded-xl border transition-all duration-500 hover:opacity-95 hover:scale-[1.01]"
                          style={{ 
                            borderColor: 'rgba(192, 242, 0, 0.12)',
                            borderWidth: '1.5px'
                          }}
                        />
                        <p 
                          className="text-sm md:text-base font-light" 
                          style={{ color: '#808080', letterSpacing: '-0.01em', lineHeight: '1.6' }}
                        >
                          {img.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Main Image - if no detail images */}
                {!selectedProject.detailImages && (
                  <div className="mb-16 md:mb-20">
                    <ImageWithFallback
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full aspect-video object-cover rounded-xl border"
                      style={{ 
                        borderColor: 'rgba(192, 242, 0, 0.12)',
                        borderWidth: '1.5px'
                      }}
                    />
                  </div>
                )}

                {/* Description */}
                <div className="space-y-12 md:space-y-16">
                  <div>
                    <h3 
                      className="text-xl md:text-2xl mb-6 md:mb-8 font-light" 
                      style={{ color: '#C0F200', letterSpacing: '-0.01em' }}
                    >
                      项目概述
                    </h3>
                    <p 
                      className="text-base md:text-lg leading-relaxed font-light" 
                      style={{ color: '#FAFAF0', opacity: 0.95, letterSpacing: '-0.01em', lineHeight: '1.8' }}
                    >
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h3 
                      className="text-xl md:text-2xl mb-6 md:mb-8 font-light" 
                      style={{ color: '#C0F200', letterSpacing: '-0.01em' }}
                    >
                      关键成果
                    </h3>
                    <ul className="space-y-4 md:space-y-5">
                      {selectedProject.metrics.map((metric, index) => (
                        <li 
                          key={index} 
                          className="text-base md:text-lg flex items-start font-light" 
                          style={{ color: '#FAFAF0', opacity: 0.95, letterSpacing: '-0.01em', lineHeight: '1.7' }}
                        >
                          <span className="mr-4 mt-1.5 text-lg" style={{ color: '#C0F200' }}>•</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Role */}
                  <div>
                    <h3 
                      className="text-xl md:text-2xl mb-6 md:mb-8 font-light" 
                      style={{ color: '#C0F200', letterSpacing: '-0.01em' }}
                    >
                      我的角色
                    </h3>
                    <p 
                      className="text-base md:text-lg leading-relaxed font-light" 
                      style={{ color: '#FAFAF0', opacity: 0.95, letterSpacing: '-0.01em', lineHeight: '1.8' }}
                    >
                      {selectedProject.details.role}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div>
                    <h3 
                      className="text-xl md:text-2xl mb-6 md:mb-8 font-light" 
                      style={{ color: '#C0F200', letterSpacing: '-0.01em' }}
                    >
                      面临挑战
                    </h3>
                    <p 
                      className="text-base md:text-lg leading-relaxed font-light" 
                      style={{ color: '#FAFAF0', opacity: 0.95, letterSpacing: '-0.01em', lineHeight: '1.8' }}
                    >
                      {selectedProject.details.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 
                      className="text-xl md:text-2xl mb-6 md:mb-8 font-light" 
                      style={{ color: '#C0F200', letterSpacing: '-0.01em' }}
                    >
                      解决方案
                    </h3>
                    <p 
                      className="text-base md:text-lg leading-relaxed font-light" 
                      style={{ color: '#FAFAF0', opacity: 0.95, letterSpacing: '-0.01em', lineHeight: '1.8' }}
                    >
                      {selectedProject.details.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 
                      className="text-xl md:text-2xl mb-6 md:mb-8 font-light" 
                      style={{ color: '#C0F200', letterSpacing: '-0.01em' }}
                    >
                      项目成果
                    </h3>
                    <p 
                      className="text-base md:text-lg leading-relaxed font-light" 
                      style={{ color: '#FAFAF0', opacity: 0.95, letterSpacing: '-0.01em', lineHeight: '1.8' }}
                    >
                      {selectedProject.details.results}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
