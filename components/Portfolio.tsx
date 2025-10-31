import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { useState } from "react";
import synapseLoginImage from "figma:asset/62f6b55bfea6a0c115708202f0165a4275180284.png";
import synapseDashboardImage from "figma:asset/e47618a1b6ddb02fe667d91c25f8a32d559adeca.png";
import synapseWorkflowImage from "figma:asset/1d70601697815cad98cc68d4cc0737a27382d4ba.png";
import synapseAIAssistantImage from "figma:asset/6c051f61c65dc9abb213bcd8332b1acddef9e58d.png";
import aiChatbotVectorizationImage from "figma:asset/ai-chatbot-rag-vectorization.png";
import langgraphRagArchitectureImage from "figma:asset/langgraph-rag-system-architecture.png";

const projects = [
  {
    title: "Synapse AI工作流平台",
    subtitle: "智能化产品经理协作系统",
    description: "主导设计并实现AI驱动的一体化工作流平台，通过引导式AI对话实现从产品构思到交付的全流程自动化，显著提升产品经理的工作效率和团队协作质量。",
    metrics: ["需求响应速度从1个星期缩短至3天", "从0到1的启动项目：产品规划和消化从3个月缩短至1~2个月", "用户满意度 100%"],
    theme: "primary",
    detailContent: {
      role: "作为Synapse项目的需求方和发起人(Shin)，我主导了从0到1的全过程，包括核心痛点洞察、产品概念验证、MVP设计以及迭代路线图规划。",
      challenge: {
        title: "挑战：当\\\"效率\\\"成为团队的瓶颈",
        content: [
          "工时浪费严重：平均每个功能的PRD撰写，有将近50%的时间浪费在跨工具（Word, Axure, VSCode）的信息整理与格式调整上。",
          "沟通成本高昂：由于信息不同步，一次需求评审后，平均需要2-3轮的额外会议进行澄清，导致项目周期平均延迟15%。"
        ],
        coreQuestion: "如何从根本上重塑工作流，将团队从低效的重复劳动中解放出来？"
      },
      validation: {
        title: "验证：从用户声音中找到答案",
        process: "主导了一系列用户研究，访谈了内部DMS团队及外部两名资深产品经理。通过3个主要版本的原型迭代，提炼出三大核心诉求：",
        insights: [
          "\\\"我需要一套连贯的工具链\\\" —— 避免在多个软件间重复输入信息。",
          "\\\"我需要一次定义，处处一致\\\" —— 确保从需求到代码的口径统一。",
          "\\\"我需要一个所见即所得的原型\\\" —— 快速验证想法，降低修改成本。"
        ],
        userFeedback: "\\\"如果AI能帮我把会议纪要直接变成结构化的文档和流程图，至少能减少我40%的整理时间。\\\""
      },
      solution: {
        title: "解决方案：打造产品经理的\\\"第二大脑\\\"",
        description: "Synapse不是一个简单的工具，而是一个由AI驱动、价值驱动的一体化工作流平台。",
        modules: [
          {
            name: "AI蓝图搭建",
            value: "将产品从0到1的构思过程结构化、自动化。",
            result: "在测试中，此模块将初步构想转化为结构化蓝图的时间减少了70%，让产品经理能更专注于业务逻辑而非信息整理。"
          },
          {
            name: "AI设计工作室 & 交付中心",
            value: "实现\\\"一次输入，多维输出\\\"，确保信息源的绝对统一。",
            result: "AI生成的标准化产物（代码、ER图、用户旅程）让跨角色（产品、开发、设计）的沟通偏差率显著降低。交付中心使团队查找特定交付物的效率提升了5倍以上。"
          }
        ]
      },
      results: {
        title: "成果与影响：MVP的初步胜利",
        achievements: [
          "效率提升：参与测试的产品经理，端到端的文档撰写与整理时间平均缩短了40%。",
          "沟通优化：因需求理解不一致而产生的额外沟通会议减少了约50%。",
          "高用户满意度：100%的测试用户表示，愿意在后续项目中继续使用Synapse。"
        ]
      },
      reflection: {
        title: "我的反思与展望",
        insight: "通过主导Synapse项目，我不仅推动了AI技术在产品设计工作流中的创新应用，更沉淀了一套从痛点挖掘到价值验证的标准化产品设计方法。",
        shortTerm: "完成MVP版本的开发与上线，并基于初步用户反馈完成一轮核心功能优化。",
        longTerm: "将Synapse从一个内部工具，扩展为一个赋能全公司产品创新的关键基础设施，并探索其商业化的可能性。",
        conclusion: "这个项目让我深刻体会到，优秀的产品设计不仅在于创造功能，更在于通过技术手段，回归\\\"人\\\"的需求，真正为用户创造价值和效率。"
      }
    }
  },
  {
    title: "汽车售后索赔AI审核项目",
    subtitle: "AI赋能的理赔审核工作流系统",
    description: "作为AI索赔审核模块的核心负责人，主导了这个0-1项目的落地。这是一个为沃尔沃（Volvo）B端平台赋能的AI项目，将AI识别准确率从2.9%跃升至60%，建立了数据驱动的迭代机制。",
    metrics: ["AI识别准确率从2.9%跃升至60%", "建立数据驱动迭代机制", "实现0到1项目突破"],
    theme: "muted",
    detailContent: {
      role: `在这个项目中，我是AI索赔审核模块的核心负责人，主导了这个0-1项目的落地。这是一个为沃尔沃（Volvo）B端平台赋能的AI项目。

我的职责是定义AI如何介入复杂的索赔审核流程，并推动其落地。我的具体贡献包括：

定义规则：我主导了AI审核规则的提炼。通过组织周会和数据同步，我带领团队分析了大量的售后工单，将人工审核经验转化为AI可执行的规则（例如：如何分类和验证VIN码、零件号等结构化和非结构化信息）。

撰写PRD：我撰写了项目的核心需求文档，清晰地将其分为两大部分："B端系统（人工）审核流程"和"AI（自动）工作流与判断逻辑"。

推动业务：我发现AI识别准确率低的一个原因是经销商上传的资料样式不统一。因此，我反向推动业务侧，制定了更规范的资料上传标准。

主导迭代：我建立了"数据追踪-分析-迭代"的闭环。项目上线后，我持续拉取数据（例如一次拉取1500条），并从中抽查50-70单进行分析，找出AI判断不准的原因，推动规则和模型优化。`,
      solution: {
        title: "最终成果展示",
        description: "我交付了两个核心成果：",
        workflow: `一个更新的B端审核后台：它为人工审核员提供了AI的"辅助判断"建议。

一个内嵌的AI审核工作流：这是项目的核心，它能自动对索赔单据进行预审。

这个AI工作流会基于我定义的规则（如VIN码、零件号、故障描述等）自动检查资料的完整性和合规性。我的PRD详细定义了AI在遇到不同情况时（例如信息缺失、信息冲突）的判断逻辑和后续动作。`,
        images: [
          {
            src: "【待插入图片】",
            alt: "B端审核后台界面",
            description: "B端审核后台 - AI辅助判断建议展示"
          },
          {
            src: "【待插入图片】",
            alt: "AI审核工作流",
            description: "AI审核工作流 - 自动化预审流程"
          },
          {
            src: "【待插入图片】",
            alt: "AI判断逻辑示例",
            description: "AI判断逻辑 - VIN码、零件号验证"
          },
          {
            src: "【待插入图片】",
            alt: "数据迭代看板",
            description: "数据迭代看板 - 1500条数据追踪与分析"
          }
        ]
      },
      validation: {
        title: "过程发现",
        process: "在项目推进过程中，我通过数据分析和业务调研获得了两个关键洞察：",
        insights: [
          "发现1：AI的\"老师\"是清晰的规则。项目刚开始时，AI的准确率只有2.9%。我发现AI不是不够智能，而是不懂业务。它需要被\"教会\"。因此，我立即组织业务专家，通过分析实际工单，把他们的审核经验总结成AI能听懂的规则，这是提升准确率的第一步。",
          "发现2：坏数据=坏AI。在迭代中我发现，很多AI的\"误判\"不是算法问题，而是源头的数据太\"脏\"（经销商上传的资料样式五花八门）。我意识到，如果不规范源头，AI的准确率很难提高。这促使我必须反向推动业务方去规范经销商的上传行为。"
        ],
        userFeedback: ""
      },
      results: {
        title: "成果与影响",
        achievements: [
          "核心成果：AI识别准确率从2.9%跃升至60%。通过我主导的规则定义、推动业务规范数据、以及上线后持续的数据迭代，AI审核的准确率实现了从0到1的突破，达到了60%。",
          "流程优化：建立了数据驱动的迭代机制。我建立的\"拉数据-抽查-分析\"的工作流（如拉取1500条、抽查50-70单）成为了团队的标准作业（SOP）。这确保了AI的能力可以在上线后持续被优化，而不是一个\"一次性\"项目。"
        ]
      },
      reflection: {
        title: "我的反思",
        insight: "通过主导这个AI赋能项目，我深刻理解了AI项目PM的独特价值和挑战。",
        shortTerm: "AI项目PM必须\"深入数据\"。这个项目让我深刻理解到，作为AI PM，只懂业务流程和原型设计是远远不够的。我必须亲自\"下场\"去拉数据、看数据、分析数据。只有通过持续追踪那1500条数据和抽查的几十个案例，我才能真正定位到AI犯错的原因，从而提出有效的迭代方案。",
        longTerm: "\"推动业务\"是PM的关键价值。我学到的另一点是，AI项目不只是技术问题，更是\"人\"和\"流程\"的问题。我反向推动业务侧去规范经销商的资料样式，虽然这在短期内增加了业务的沟通成本，但从长期看，这是保证AI项目（乃至所有数据项目）成功的基石。",
        conclusion: "这个项目让我认识到，优秀的AI产品经理不仅要能定义规则和设计流程，更要能深入数据、推动业务变革。只有将技术能力、业务理解和执行力完美结合，才能让AI项目真正落地并产生价值。"
      }
    }
  },
  {
    title: "AI客服机器人概念验证（POC）",
    subtitle: "基于RAG技术的智能问答系统",
    description: "独立发起并完成从0到1的AI客服POC项目，通过RAG检索增强技术和大语言模型，实现了7x24小时自动回答操作手册相关问题，将准确率提升至90%，成功验证了AI技术在客户服务场景中的可行性。",
    metrics: ["AI回答准确率达到90%", "7x24小时自动化处理", "概念验证成功"],
    theme: "dark",
    detailContent: {
      role: `在这个独立项目中，我独立负责了从0到1的全过程，扮演了产品经理和项目负责人的角色。

这个项目完全由我主动发起。我通过观察和与业务团队、经销商沟通发现，他们花费了大量时间重复回答本应在操作手册中找到的基础问题，这占用了宝贵的人力。

我的贡献包括：

• 发现问题：主动调研，定位到"重复性提问"这个核心痛点。

• 定义方案：提出使用AI客服作为解决方案，并设定项目目标为"概念验证（POC）"。

• 技术选型：独立完成了技术栈的调研和选型。我选择了Gemini大模型（因其强大的文本理解能力）、RAG检索增强技术（利用LangGraph进行文档切片）以及Hugging Face模型（用于文档向量化存储）。

• 落地执行：独自推动了整个POC的搭建、测试和验证。`,
      solution: {
        title: "最终成果展示",
        description: "我最终交付了一个可以运行的\"AI客服机器人\"概念验证（POC）产品。",
        workflow: `这个AI客服的工作流程是：

1. 知识库搭建：我首先将所有的操作手册进行处理，使用LangGraph技术将长文档切片，再通过Hugging Face模型将它们"翻译"成AI能理解的向量，存入知识库。

2. 用户提问：当经销商或内部员工提问时（例如："XX系统的操作步骤是什么？"）。

3. AI检索：系统首先使用RAG技术，在知识库中精准"检索"到最相关的原文段落。

4. AI回答：最后，Gemini大模型会"阅读"这些原文段落，并用通俗易懂的自然语言"总结"出答案，回复给用户。

这个POC证明了AI可以准确、自动地7x24小时处理这些基础查询。`,
        images: [
          {
            src: aiChatbotVectorizationImage,
            alt: "AI客服知识库构建界面",
            description: "知识库构建 - RAG文档切片与向量化存储"
          },
          {
            src: langgraphRagArchitectureImage,
            alt: "AI客服系统架构",
            description: "系统架构 - LangGraph + RAG技术栈"
          },
          {
            src: "【待插入图片】",
            alt: "AI客服对话界面",
            description: "对话界面 - 基于Gemini大模型的智能问答"
          },
          {
            src: "【待插入图片】",
            alt: "AI客服测试结果",
            description: "测试结果 - 90%准确率验证"
          }
        ]
      },
      validation: {
        title: "过程发现",
        process: "在项目推进过程中，我通过调研和技术选型获得了两个关键洞察：",
        insights: [
          "发现1：痛点明确，适合AI。我发现内部人力被\"低价值、高重复\"的工作拖累。这些问题（如\"如何操作\"、\"XX在哪里\"）都有标准答案，是AI最擅长解决的RAG（检索增强）场景。主动定位这个痛点是项目能启动的第一步。",
          "发现2：必须用RAG，而不是直接用LLM。在选型时我意识到，如果只用通用大模型（LLM）回答，它会\"编造\"答案。而对于操作手册这种严肃内容，准确性是第一位的。因此我决定必须采用RAG技术栈（LangGraph + 向量化），确保AI的每一个回答都有据可查，是基于手册原文的。"
        ],
        userFeedback: ""
      },
      results: {
        title: "成果与影响",
        achievements: [
          "核心指标：AI回答准确率达到90%。通过测试，AI客服在回答操作手册相关问题时，其答案的准确率达到了90%，完全满足了POC的验证目标。",
          "项目意义：证明了技术可行性和业务价值。这个项目向团队证明了：技术上可行 - 我们有能力（使用Gemini、LangGraph等）快速搭建一个高准确率的专业知识库AI；业务上值得 - 这个AI一旦投产，能极大解放内部人力，让他们去处理更复杂的售后问题，显著降本增效。"
        ]
      },
      reflection: {
        title: "我的反思",
        insight: "通过主导这个0-1的POC项目，我深刻体会到了主动性作为PM的核心价值。",
        shortTerm: "主动性是PM的核心价值。这个项目最大的收获是验证了我的主动性。我没有等别人提需求，而是自己发现了问题，并独立动手（0-1）用AI技术去验证解决方案。",
        longTerm: "POC的下一步是\"用户反馈闭环\"。这次POC验证了90%的准确率。如果要把这个项目推向正式产品，我的下一步计划是上线让真实用户使用，并重点关注那10%答错的问题。我会收集这些\"坏案例\"（Bad Case），分析是文档切片（RAG）的问题还是模型理解（LLM）的问题，然后进行针对性优化，让准确率持续提升。",
        conclusion: "这个项目让我认识到，优秀的产品经理不仅要能发现问题，更要能主动解决问题。通过独立完成从技术选型到POC验证的全过程，我不仅验证了AI技术在客户服务场景中的可行性，更证明了PM主动驱动的价值。"
      }
    }
  },
  {
    title: "VHC数据指标功能",
    subtitle: "数据驱动的业务洞察平台",
    description: "设计并实现数据可视化功能，通过直观的图表和指标展示，帮助业务团队快速理解关键数据趋势，支持数据驱动的决策制定。",
    metrics: ["数据查询效率提升 60%", "决策制定时间缩短 40%", "用户采用率 85%"],
    theme: "primary"
  }
];

export function Portfolio() {
  // const [selectedProject, setSelectedProject] = useState(null);
  
  return (
    <section id="portfolio" className="py-24 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary px-4 py-2 rounded-full mb-6">
            <span className="text-primary-foreground font-medium">精选作品</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            产品案例展示
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            专注于将抽象的产品概念转化为具象的可视化表达，让每一个功能都能清晰地传达其价值
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, 2).map((project, index) => (
            <Card 
              key={index} 
              className={`group p-8 border-2 hover:shadow-lg transition-all duration-300 cursor-pointer rounded-2xl ${
                project.theme === 'primary' 
                  ? 'bg-primary text-primary-foreground border-primary hover:scale-105' 
                  : project.theme === 'dark'
                  ? 'bg-secondary text-secondary-foreground border-secondary hover:border-primary'
                  : 'bg-card text-card-foreground border-border hover:border-primary'
              }`}
            >
              <div className="space-y-6">
                {/* Project Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2 h-2 rounded-full ${
                      project.theme === 'primary' ? 'bg-primary-foreground' : 'bg-primary'
                    }`}></div>
                    <span className={`text-sm font-medium ${
                      project.theme === 'primary' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}>
                      Featured Project
                    </span>
                  </div>
                  
                  <h3 className={`text-2xl font-medium leading-tight ${
                    project.theme === 'primary' ? 'text-primary-foreground' : 'text-foreground'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-base ${
                    project.theme === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    {project.subtitle}
                  </p>
                </div>
                
                {/* Description */}
                <p className={`text-sm leading-relaxed ${
                  project.theme === 'primary' ? 'text-primary-foreground/90' : 'text-muted-foreground'
                }`}>
                  {project.description}
                </p>
                
                {/* Metrics */}
                <div className="space-y-4">
                  <h4 className={`text-base font-medium ${
                    project.theme === 'primary' ? 'text-primary-foreground' : 'text-foreground'
                  }`}>
                    关键成果
                  </h4>
                  <div className="space-y-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          project.theme === 'primary' ? 'bg-primary-foreground' : 'bg-primary'
                        }`}></div>
                        <span className={`text-sm ${
                          project.theme === 'primary' ? 'text-primary-foreground/90' : 'text-muted-foreground'
                        }`}>
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* View Details Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4">
                  {project.detailContent ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className={`${
                            project.theme === 'primary' 
                              ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' 
                              : 'bg-primary text-primary-foreground hover:bg-primary/90'
                          } border-0 rounded-full px-6 py-2 transition-all duration-300`}
                        >
                          查看详情 →
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-h-[90vh] bg-background border-2 border-border rounded-2xl fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
                                      style={{ 
                                        width: 'calc(100vw - 50px)', 
                                        maxWidth: 'calc(100vw - 50px)'
                                      }}>
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-foreground font-medium mb-2">
                            {project.title}
                          </DialogTitle>
                          <DialogDescription className="text-base text-muted-foreground mb-4">
                            {project.subtitle}
                          </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="h-[70vh] pr-4">
                          <div className="space-y-8 text-foreground px-6">
                            {/* 我的角色与贡献 */}
                            <div>
                              <h3 className="text-lg font-medium mb-4 text-primary-foreground bg-primary inline-block px-4 py-2 rounded-full">
                                我的角色与贡献
                              </h3>
                              <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                                {project.detailContent.role}
                              </p>
                            </div>

                            {/* 最终成果展示 */}
                            {project.detailContent.solution && (
                              <>
                            <div>
                              <h3 className="text-lg font-medium mb-6 text-primary-foreground bg-primary inline-block px-4 py-2 rounded-full">
                                    {project.detailContent.solution.title || "最终成果展示"}
                              </h3>
                                  
                                  {/* 工作流程描述 */}
                                  {project.detailContent.solution.workflow && (
                                    <div className="mb-6">
                                      <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                                        {project.detailContent.solution.description}
                                      </p>
                                      <div className="bg-muted p-4 rounded-xl border-l-4 border-primary">
                                        <p className="text-sm leading-relaxed text-foreground whitespace-pre-line">
                                          {project.detailContent.solution.workflow}
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {/* 图片展示 */}
                                  {project.detailContent.solution.images ? (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                                      {project.detailContent.solution.images.map((image: any, index: number) => (
                                        <div key={index} className="space-y-3">
                                          {!image.src || (typeof image.src === 'string' && image.src.includes('待插入')) ? (
                                            <div className="w-full h-48 bg-muted rounded-xl border-2 border-border flex items-center justify-center">
                                              <span className="text-sm text-muted-foreground">{image.src || '【待插入图片】'}</span>
                                            </div>
                                          ) : (
                                            <img 
                                              src={typeof image.src === 'string' ? image.src : image.src} 
                                              alt={image.alt || '项目图片'} 
                                              className="w-full h-48 object-contain rounded-xl border-2 border-border shadow-lg bg-muted"
                                              loading="lazy"
                                              onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                  const placeholder = document.createElement('div');
                                                  placeholder.className = 'w-full h-48 bg-muted rounded-xl border-2 border-border flex items-center justify-center';
                                                  placeholder.innerHTML = '<span class="text-sm text-muted-foreground">图片加载失败</span>';
                                                  parent.insertBefore(placeholder, target);
                                                }
                                              }}
                                            />
                                          )}
                                          <p className="text-xs text-muted-foreground text-center">
                                            {image.description}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    // 默认显示Synapse项目的图片（向后兼容）
                              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <img 
                                    src={synapseLoginImage} 
                                    alt="Synapse登录界面" 
                                    className="w-full rounded-xl border-2 border-border shadow-lg"
                                  />
                                  <p className="text-xs text-muted-foreground text-center">
                                    登录界面 - 简洁的用户认证体验
                                  </p>
                                </div>
                                <div className="space-y-3">
                                  <img 
                                    src={synapseDashboardImage} 
                                    alt="Synapse主界面仪表板" 
                                    className="w-full rounded-xl border-2 border-border shadow-lg"
                                  />
                                  <p className="text-xs text-muted-foreground text-center">
                                    主界面仪表板 - 项目概览与快速操作
                                  </p>
                                </div>
                                <div className="space-y-3">
                                  <img 
                                    src={synapseWorkflowImage} 
                                    alt="Synapse工作流管理界面" 
                                    className="w-full rounded-xl border-2 border-border shadow-lg"
                                  />
                                  <p className="text-xs text-muted-foreground text-center">
                                    工作流管理 - AI驱动的任务协作平台
                                  </p>
                                </div>
                                <div className="space-y-3">
                                  <img 
                                    src={synapseAIAssistantImage} 
                                    alt="Synapse AI助手对话界面" 
                                    className="w-full rounded-xl border-2 border-border shadow-lg"
                                  />
                                  <p className="text-xs text-muted-foreground text-center">
                                    AI智能助手 - 自动化需求文档生成
                                  </p>
                                </div>
                              </div>
                                  )}
                                  
                                  {/* 平台特色描述（仅当没有workflow时显示） */}
                                  {!project.detailContent.solution.workflow && (
                              <div className="mt-6 bg-muted p-4 rounded-xl border-l-4 border-primary">
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  <span className="font-medium text-foreground">平台特色：</span>
                                  通过AI引导式对话，实现从产品构思到交付的全流程自动化。界面设计简洁直观，
                                  支持多角色协作，显著提升了团队的工作效率和项目管理质量。
                                </p>
                              </div>
                                  )}
                            </div>

                            <Separator className="my-6" />
                              </>
                            )}

                            {/* 挑战（仅当存在challenge时显示） */}
                            {project.detailContent.challenge && (
                              <>
                            <div>
                              <h3 className="text-lg font-medium mb-4 text-primary-foreground bg-primary inline-block px-4 py-2 rounded-full">
                                1. {project.detailContent.challenge.title}
                              </h3>
                              <div className="space-y-4">
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  在我所负责的团队中，产品经理的精力被严重消耗。我们发现：
                                </p>
                                <ul className="space-y-3 ml-4">
                                  {project.detailContent.challenge.content.map((item, index) => (
                                    <li key={index} className="text-sm leading-relaxed text-muted-foreground list-disc">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                                <div className="bg-muted p-4 rounded-xl border-l-4 border-primary">
                                  <p className="text-sm leading-relaxed text-foreground font-medium whitespace-pre-line">
                                    {project.detailContent.challenge.coreQuestion}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <Separator className="my-6" />
                              </>
                            )}

                            {/* 验证 */}
                            {project.detailContent.validation && (
                              <>
                            <div>
                              <h3 className="text-lg font-medium mb-4 text-primary-foreground bg-primary inline-block px-4 py-2 rounded-full">
                                    {project.detailContent.challenge ? "2. " : "1. "}{project.detailContent.validation.title}
                              </h3>
                              <div className="space-y-4">
                                    {project.detailContent.validation.process && (
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                        {project.detailContent.validation.process.includes("我") 
                                          ? project.detailContent.validation.process 
                                          : `在项目推进过程中，${project.detailContent.validation.process}`}
                                </p>
                                    )}
                                <ul className="space-y-3 ml-4">
                                  {project.detailContent.validation.insights.map((insight, index) => (
                                    <li key={index} className="text-sm leading-relaxed text-muted-foreground list-disc">
                                      {insight}
                                    </li>
                                  ))}
                                </ul>
                                    {project.detailContent.validation.userFeedback && (
                                <div className="bg-primary/10 p-4 rounded-xl border-l-4 border-primary">
                                  <p className="text-sm leading-relaxed text-foreground font-medium italic">
                                    用户原声反馈：
                                  </p>
                                  <p className="text-sm leading-relaxed text-muted-foreground mt-2">
                                    {project.detailContent.validation.userFeedback}
                                  </p>
                                </div>
                                    )}
                              </div>
                            </div>

                            <Separator className="my-6" />
                              </>
                            )}

                            {/* 解决方案（仅当存在modules时显示，如果是workflow则在"最终成果展示"中已处理） */}
                            {project.detailContent.solution && project.detailContent.solution.modules && (
                              <>
                            <div>
                              <h3 className="text-lg font-medium mb-4 text-primary-foreground bg-primary inline-block px-4 py-2 rounded-full">
                                    {project.detailContent.challenge ? "3. " : project.detailContent.validation ? "2. " : "1. "}{project.detailContent.solution.title}
                              </h3>
                              <div className="space-y-6">
                                    {project.detailContent.solution.description && (
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {project.detailContent.solution.description}我设计的核心模块旨在创造可量化的业务成果：
                                </p>
                                    )}
                                <div className="grid gap-6">
                                  {project.detailContent.solution.modules.map((module, index) => (
                                    <div key={index} className="bg-muted p-6 rounded-xl">
                                      <h4 className="text-base font-medium text-foreground mb-3">
                                        {module.name}：
                                      </h4>
                                      <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                                        <span className="font-medium">价值：</span> {module.value}
                                      </p>
                                      <p className="text-sm leading-relaxed text-muted-foreground">
                                        <span className="font-medium">成果：</span> {module.result}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <Separator className="my-6" />
                              </>
                            )}

                            {/* 成果与影响 */}
                            {project.detailContent.results && (
                              <>
                            <div>
                              <h3 className="text-lg font-medium mb-4 text-primary-foreground bg-primary inline-block px-4 py-2 rounded-full">
                                    {(() => {
                                      let num = 1;
                                      if (project.detailContent.challenge) num++;
                                      if (project.detailContent.validation) num++;
                                      if (project.detailContent.solution && project.detailContent.solution.modules) num++;
                                      return `${num}. `;
                                    })()}{project.detailContent.results.title}
                              </h3>
                              <div className="space-y-4">
                                <div className="grid gap-4">
                                  {project.detailContent.results.achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                      <p className="text-sm leading-relaxed text-muted-foreground">
                                        {achievement}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <Separator className="my-6" />
                              </>
                            )}

                            {/* 我的反思与展望 */}
                            {project.detailContent.reflection && (
                            <div>
                              <h3 className="text-lg font-medium mb-4 text-primary-foreground bg-primary inline-block px-4 py-2 rounded-full">
                                  {(() => {
                                    let num = 1;
                                    if (project.detailContent.challenge) num++;
                                    if (project.detailContent.validation) num++;
                                    if (project.detailContent.solution && project.detailContent.solution.modules) num++;
                                    if (project.detailContent.results) num++;
                                    return `${num}. `;
                                  })()}{project.detailContent.reflection.title}
                              </h3>
                              <div className="space-y-6">
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {project.detailContent.reflection.insight}
                                </p>
                                {project.detailContent.reflection.shortTerm && project.detailContent.reflection.longTerm && (
                                <div className="grid md:grid-cols-2 gap-6">
                                    {project.detailContent.reflection.shortTerm.startsWith("反思") || project.detailContent.reflection.shortTerm.startsWith("主动性") ? (
                                      <>
                                        <div className="bg-primary/10 p-4 rounded-xl">
                                          <h4 className="text-base font-medium text-foreground mb-2">
                                            反思一:
                                          </h4>
                                          <p className="text-sm leading-relaxed text-muted-foreground">
                                            {project.detailContent.reflection.shortTerm}
                                          </p>
                                        </div>
                                        <div className="bg-secondary text-secondary-foreground p-4 rounded-xl">
                                          <h4 className="text-base font-medium mb-2">
                                            反思二:
                                          </h4>
                                          <p className="text-sm leading-relaxed text-secondary-foreground/80">
                                            {project.detailContent.reflection.longTerm}
                                          </p>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                  <div className="bg-primary/10 p-4 rounded-xl">
                                    <h4 className="text-base font-medium text-foreground mb-2">
                                      短期规划 (1-3个月):
                                    </h4>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                      {project.detailContent.reflection.shortTerm}
                                    </p>
                                  </div>
                                  <div className="bg-secondary text-secondary-foreground p-4 rounded-xl">
                                    <h4 className="text-base font-medium mb-2">
                                      长期愿景:
                                    </h4>
                                    <p className="text-sm leading-relaxed text-secondary-foreground/80">
                                      {project.detailContent.reflection.longTerm}
                                    </p>
                                  </div>
                                      </>
                                    )}
                                </div>
                                )}
                                {project.detailContent.reflection.conclusion && (
                                <div className="bg-muted p-6 rounded-xl border-l-4 border-primary">
                                  <p className="text-sm leading-relaxed text-muted-foreground italic">
                                    {project.detailContent.reflection.conclusion}
                                  </p>
                                </div>
                                )}
                              </div>
                            </div>
                          )}
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button
                      className={`${
                        project.theme === 'primary' 
                          ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' 
                          : 'bg-primary text-primary-foreground hover:bg-primary/90'
                      } border-0 rounded-full px-6 py-2 transition-all duration-300`}
                    >
                      查看详情 →
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Third Project */}
        {projects[2] && (
          <div className="mb-12">
            <Card 
              className={`group p-8 border-2 hover:shadow-lg transition-all duration-300 cursor-pointer rounded-2xl ${
                projects[2].theme === 'primary' 
                  ? 'bg-primary text-primary-foreground border-primary hover:scale-105' 
                  : projects[2].theme === 'dark'
                  ? 'bg-secondary text-secondary-foreground border-secondary hover:border-primary'
                  : 'bg-card text-card-foreground border-border hover:border-primary'
              }`}
            >
              <div className="space-y-6">
                {/* Project Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2 h-2 rounded-full ${
                      projects[2].theme === 'primary' ? 'bg-primary-foreground' : projects[2].theme === 'dark' ? 'bg-secondary-foreground' : 'bg-primary'
                    }`}></div>
                    <span className={`text-sm font-medium ${
                      projects[2].theme === 'primary' ? 'text-primary-foreground/70' : projects[2].theme === 'dark' ? 'text-secondary-foreground/70' : 'text-muted-foreground'
                    }`}>
                      Featured Project
                    </span>
                  </div>
                  
                  <h3 className={`text-2xl font-medium leading-tight ${
                    projects[2].theme === 'primary' ? 'text-primary-foreground' : projects[2].theme === 'dark' ? 'text-secondary-foreground' : 'text-foreground'
                  }`}>
                    {projects[2].title}
                  </h3>
                  
                  <p className={`text-base ${
                    projects[2].theme === 'primary' ? 'text-primary-foreground/80' : projects[2].theme === 'dark' ? 'text-secondary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    {projects[2].subtitle}
                  </p>
                </div>
                
                {/* Description */}
                <p className={`text-sm leading-relaxed ${
                  projects[2].theme === 'primary' ? 'text-primary-foreground/90' : projects[2].theme === 'dark' ? 'text-secondary-foreground/90' : 'text-muted-foreground'
                }`}>
                  {projects[2].description}
                </p>
                
                {/* Metrics */}
                <div className="space-y-4">
                  <h4 className={`text-base font-medium ${
                    projects[2].theme === 'primary' ? 'text-primary-foreground' : projects[2].theme === 'dark' ? 'text-secondary-foreground' : 'text-foreground'
                  }`}>
                    关键成果
                  </h4>
                  <div className="space-y-2">
                    {projects[2].metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          projects[2].theme === 'primary' ? 'bg-primary-foreground' : 'bg-primary'
                        }`}></div>
                        <span className={`text-sm ${
                          projects[2].theme === 'primary' ? 'text-primary-foreground/90' : projects[2].theme === 'dark' ? 'text-secondary-foreground/90' : 'text-muted-foreground'
                        }`}>
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* View Details Button */}
                {projects[2].detailContent && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className={`${
                            projects[2].theme === 'primary' 
                              ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' 
                              : 'bg-primary text-primary-foreground hover:bg-primary/90'
                          } border-0 rounded-full px-6 py-2 transition-all duration-300`}
                        >
                          查看详情 →
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-h-[90vh] bg-background border-2 border-border rounded-2xl fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
                                      style={{ 
                                        width: 'calc(100vw - 50px)', 
                                        maxWidth: 'calc(100vw - 50px)'
                                      }}>
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-foreground font-medium mb-2">
                            {projects[2].title}
                          </DialogTitle>
                          <DialogDescription className="text-base text-muted-foreground mb-4">
                            {projects[2].subtitle}
                          </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="h-[70vh] pr-4">
                          <div className="space-y-8 text-foreground px-6">
                            {/* 复用主循环中的所有内容展示逻辑 */}
                            {/* 由于代码较长，这里使用projects[2]变量，展示逻辑与主循环相同 */}
                            <div>
                              <h3 className="text-lg font-medium mb-4 text-primary-foreground bg-primary inline-block px-4 py-2 rounded-full">
                                我的角色与贡献
                              </h3>
                              <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                                {projects[2].detailContent.role}
                              </p>
                            </div>

                            {projects[2].detailContent.solution && (
                              <>
                                <div>
                                  <h3 className="text-lg font-medium mb-6 text-primary-foreground bg-primary inline-block px-4 py-2 rounded-full">
                                    {projects[2].detailContent.solution.title || "最终成果展示"}
                                  </h3>
                                  
                                  {projects[2].detailContent.solution.workflow && (
                                    <div className="mb-6">
                                      <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                                        {projects[2].detailContent.solution.description}
                                      </p>
                                      <div className="bg-muted p-4 rounded-xl border-l-4 border-primary">
                                        <p className="text-sm leading-relaxed text-foreground whitespace-pre-line">
                                          {projects[2].detailContent.solution.workflow}
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {projects[2].detailContent.solution.images && (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                                      {projects[2].detailContent.solution.images.map((image: any, index: number) => (
                                        <div key={index} className="space-y-3">
                                          <div className="w-full h-48 bg-muted rounded-xl border-2 border-border flex items-center justify-center">
                                            <span className="text-sm text-muted-foreground">{image.src}</span>
                                          </div>
                                          <p className="text-xs text-muted-foreground text-center">
                                            {image.description}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                                <Separator className="my-6" />
                              </>
                            )}

                            {projects[2].detailContent.validation && (
                              <>
                                <div>
                                  <h3 className="text-lg font-medium mb-4 text-primary-foreground bg-primary inline-block px-4 py-2 rounded-full">
                                    {projects[2].detailContent.challenge ? "2. " : "1. "}{projects[2].detailContent.validation.title}
                                  </h3>
                                  <div className="space-y-4">
                                    {projects[2].detailContent.validation.process && (
                                      <p className="text-sm leading-relaxed text-muted-foreground">
                                        {projects[2].detailContent.validation.process.includes("我") 
                                          ? projects[2].detailContent.validation.process 
                                          : `在项目推进过程中，${projects[2].detailContent.validation.process}`}
                                      </p>
                                    )}
                                    <ul className="space-y-3 ml-4">
                                      {projects[2].detailContent.validation.insights.map((insight: string, index: number) => (
                                        <li key={index} className="text-sm leading-relaxed text-muted-foreground list-disc">
                                          {insight}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                <Separator className="my-6" />
                              </>
                            )}

                            {projects[2].detailContent.results && (
                              <>
                                <div>
                                  <h3 className="text-lg font-medium mb-4 text-primary-foreground bg-primary inline-block px-4 py-2 rounded-full">
                                    {(() => {
                                      let num = 1;
                                      if (projects[2].detailContent.challenge) num++;
                                      if (projects[2].detailContent.validation) num++;
                                      return `${num}. `;
                                    })()}{projects[2].detailContent.results.title}
                                  </h3>
                                  <div className="space-y-4">
                                    <div className="grid gap-4">
                                      {projects[2].detailContent.results.achievements.map((achievement: string, index: number) => (
                                        <div key={index} className="flex items-start space-x-3">
                                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                          <p className="text-sm leading-relaxed text-muted-foreground">
                                            {achievement}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <Separator className="my-6" />
                              </>
                            )}

                            {projects[2].detailContent.reflection && (
                              <div>
                                <h3 className="text-lg font-medium mb-4 text-primary-foreground bg-primary inline-block px-4 py-2 rounded-full">
                                  {(() => {
                                    let num = 1;
                                    if (projects[2].detailContent.challenge) num++;
                                    if (projects[2].detailContent.validation) num++;
                                    if (projects[2].detailContent.results) num++;
                                    return `${num}. `;
                                  })()}{projects[2].detailContent.reflection.title}
                                </h3>
                                <div className="space-y-6">
                                  <p className="text-sm leading-relaxed text-muted-foreground">
                                    {projects[2].detailContent.reflection.insight}
                                  </p>
                                  {projects[2].detailContent.reflection.shortTerm && projects[2].detailContent.reflection.longTerm && (
                                    <div className="grid md:grid-cols-2 gap-6">
                                      {projects[2].detailContent.reflection.shortTerm.startsWith("反思") || projects[2].detailContent.reflection.shortTerm.startsWith("主动性") ? (
                                        <>
                                          <div className="bg-primary/10 p-4 rounded-xl">
                                            <h4 className="text-base font-medium text-foreground mb-2">反思一:</h4>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                              {projects[2].detailContent.reflection.shortTerm}
                                            </p>
                                          </div>
                                          <div className="bg-secondary text-secondary-foreground p-4 rounded-xl">
                                            <h4 className="text-base font-medium mb-2">反思二:</h4>
                                            <p className="text-sm leading-relaxed text-secondary-foreground/80">
                                              {projects[2].detailContent.reflection.longTerm}
                                            </p>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          <div className="bg-primary/10 p-4 rounded-xl">
                                            <h4 className="text-base font-medium text-foreground mb-2">短期规划 (1-3个月):</h4>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                              {projects[2].detailContent.reflection.shortTerm}
                                            </p>
                                          </div>
                                          <div className="bg-secondary text-secondary-foreground p-4 rounded-xl">
                                            <h4 className="text-base font-medium mb-2">长期愿景:</h4>
                                            <p className="text-sm leading-relaxed text-secondary-foreground/80">
                                              {projects[2].detailContent.reflection.longTerm}
                                            </p>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  )}
                                  {projects[2].detailContent.reflection.conclusion && (
                                    <div className="bg-muted p-6 rounded-xl border-l-4 border-primary">
                                      <p className="text-sm leading-relaxed text-muted-foreground italic">
                                        {projects[2].detailContent.reflection.conclusion}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </div>
            </Card>
          </div>
        )}

        {/* Fourth Project - Full Width */}
        {projects[3] && (
          <Card className={`p-8 border-2 rounded-2xl ${
            projects[3].theme === 'primary'
              ? 'bg-primary text-primary-foreground border-primary'
              : projects[3].theme === 'dark'
              ? 'bg-secondary text-secondary-foreground border-secondary'
              : 'bg-secondary text-secondary-foreground border-secondary'
          }`}>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full ${
                    projects[3].theme === 'primary' ? 'bg-primary-foreground' : 'bg-secondary-foreground'
                  }`}></div>
                  <span className={`text-sm font-medium ${
                    projects[3].theme === 'primary' ? 'text-primary-foreground/70' : 'text-secondary-foreground/70'
                  }`}>
                  Featured Project
                </span>
              </div>
              
                <h3 className={`text-2xl font-medium ${
                  projects[3].theme === 'primary' ? 'text-primary-foreground' : 'text-secondary-foreground'
                }`}>
                  {projects[3].title}
              </h3>
              
                <p className={`leading-relaxed ${
                  projects[3].theme === 'primary' ? 'text-primary-foreground/90' : 'text-secondary-foreground/90'
                }`}>
                  {projects[3].description}
              </p>
            </div>
            
            <div className="space-y-4">
                <h4 className={`text-base font-medium ${
                  projects[3].theme === 'primary' ? 'text-primary-foreground' : 'text-secondary-foreground'
                }`}>关键成果</h4>
              <div className="space-y-2">
                  {projects[3].metrics.map((metric, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className={`text-sm ${
                        projects[3].theme === 'primary' ? 'text-primary-foreground/90' : 'text-secondary-foreground/90'
                      }`}>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
        )}
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 transition-all duration-300 hover:scale-105">
            查看完整作品集 →
          </Button>
        </div>
      </div>
    </section>
  );
}
