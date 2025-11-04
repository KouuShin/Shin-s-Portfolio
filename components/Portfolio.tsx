import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";
import synapseLoginImage from 'figma:asset/62f6b55bfea6a0c115708202f0165a4275180284.png';
import synapseDashboardImage from 'figma:asset/e47618a1b6ddb02fe667d91c25f8a32d559adeca.png';
import synapseWorkflowImage from 'figma:asset/1d70601697815cad98cc68d4cc0737a27382d4ba.png';
import synapseAIAssistantImage from 'figma:asset/6c051f61c65dc9abb213bcd8332b1acddef9e58d.png';
// 导入封面图片，如果文件不存在，vite 插件会自动回退到 dashboard 图片
import synapseCoverpageImageRaw from 'figma:asset/SYNAPSEAI_Coverpage.jpg';
// 如果导入失败，使用 dashboard 图片作为备用
const synapseCoverpageImage = synapseCoverpageImageRaw || synapseDashboardImage;
// AI客服系统图片
import aiChatbotVectorizationImage from 'figma:asset/ai-chatbot-rag-vectorization.png';
import langgraphRagArchitectureImage from 'figma:asset/langgraph-rag-system-architecture.png';
import aiChatbotDialogImage from 'figma:asset/对话界面 - 基于Gemini大模型的智能问答.png';
import aiChatbotTestResultImage from 'figma:asset/测试结果 - 90%准确率验证.png';

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
      <section id="portfolio" className="min-h-screen bg-black py-32 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-baseline mb-20">
            <h2 className="text-5xl text-white">Past Projects</h2>
            <span className="text-sm text-gray-500">2023 - 2024</span>
          </div>
          
          {/* Projects Masonry Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Project 1 - Large (spans 8 columns, 2 rows) */}
            <div 
              className="col-span-12 lg:col-span-8 row-span-2 group cursor-pointer"
              onClick={() => setSelectedProject(projects[0])}
            >
              <div className="relative h-full min-h-[600px] border border-gray-800 hover:border-[#5B7FB3] transition-colors duration-300 overflow-hidden">
                <ImageWithFallback
                  src={projects[0].imageUrl}
                  alt={projects[0].title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-10 flex flex-col justify-end">
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 bg-[#5B7FB3] text-white text-xs">
                      FEATURED
                    </div>
                    <h3 className="text-3xl text-white">{projects[0].title}</h3>
                    <p className="text-base text-gray-300 max-w-lg">{projects[0].subtitle}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {projects[0].metrics.slice(0, 2).map((metric, i) => (
                        <span key={i} className="text-xs text-gray-400 bg-gray-900/80 px-3 py-1">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - Medium (spans 4 columns) */}
            <div 
              className="col-span-12 lg:col-span-4 group cursor-pointer"
              onClick={() => setSelectedProject(projects[1])}
            >
              <div className="relative h-full min-h-[290px] border border-gray-800 hover:border-[#B8D67F] transition-colors duration-300 overflow-hidden">
                <ImageWithFallback
                  src={projects[1].imageUrl}
                  alt={projects[1].title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl text-white mb-2">{projects[1].title}</h3>
                  <p className="text-sm text-gray-300">{projects[1].subtitle}</p>
                </div>
              </div>
            </div>

            {/* Project 3 - Medium (spans 4 columns) */}
            <div 
              className="col-span-12 lg:col-span-4 group cursor-pointer"
              onClick={() => setSelectedProject(projects[2])}
            >
              <div className="relative h-full min-h-[290px] border border-gray-800 hover:border-[#B8D67F] transition-colors duration-300 overflow-hidden">
                <ImageWithFallback
                  src={projects[2].imageUrl}
                  alt={projects[2].title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl text-white mb-2">{projects[2].title}</h3>
                  <p className="text-sm text-gray-300">{projects[2].subtitle}</p>
                </div>
              </div>
            </div>

            {/* Project 4 - Wide (spans 12 columns, shorter) */}
            <div 
              className="col-span-12 group cursor-pointer"
              onClick={() => setSelectedProject(projects[3])}
            >
              <div className="relative h-full min-h-[320px] border border-gray-800 hover:border-[#2D5016] transition-colors duration-300 overflow-hidden">
                <ImageWithFallback
                  src={projects[3].imageUrl}
                  alt={projects[3].title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent p-8 flex items-center">
                  <div className="max-w-xl space-y-3">
                    <h3 className="text-2xl text-white">{projects[3].title}</h3>
                    <p className="text-base text-gray-300">{projects[3].subtitle}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {projects[3].metrics.map((metric, i) => (
                        <span key={i} className="text-xs text-gray-400 bg-gray-900/80 px-3 py-1">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div className="min-h-screen py-12 px-4">
            <div 
              className="max-w-5xl mx-auto bg-gray-900 border border-[#5B7FB3]/30 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white hover:text-[#5B7FB3] transition-colors duration-200 z-10"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Content */}
              <div className="p-12">
                {/* Header */}
                <div className="mb-12">
                  <h2 className="text-4xl text-white mb-4">{selectedProject.title}</h2>
                  <p className="text-lg text-gray-400">{selectedProject.subtitle}</p>
                </div>

                {/* Detail Images - if available */}
                {selectedProject.detailImages && (
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {selectedProject.detailImages.map((img, index) => (
                      <div key={index} className="space-y-3">
                        <img 
                          src={img.src} 
                          alt={img.caption}
                          className="w-full border border-[#5B7FB3]/20"
                        />
                        <p className="text-xs text-gray-500">{img.caption}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Main Image - if no detail images */}
                {!selectedProject.detailImages && (
                  <div className="mb-12">
                    <ImageWithFallback
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full aspect-video object-cover border border-[#5B7FB3]/20"
                    />
                  </div>
                )}

                {/* Description */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl text-white mb-4">项目概述</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h3 className="text-xl text-white mb-4">关键成果</h3>
                    <ul className="space-y-2">
                      {selectedProject.metrics.map((metric, index) => (
                        <li key={index} className="text-base text-gray-400 flex items-start">
                          <span className="text-[#B8D67F] mr-2">•</span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Role */}
                  <div>
                    <h3 className="text-xl text-white mb-4">我的角色</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {selectedProject.details.role}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div>
                    <h3 className="text-xl text-white mb-4">面临挑战</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {selectedProject.details.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl text-white mb-4">解决方案</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {selectedProject.details.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl text-white mb-4">项目成果</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
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
