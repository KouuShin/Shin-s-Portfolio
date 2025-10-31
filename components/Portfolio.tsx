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
    description: "作为AI赋能模块的产品经理，独立负责从0到1的完整产品闭环，将AI能力无缝集成到传统汽车售后SaaS工作流中，实现从'事后抽查'到'事前预审'的模式转变，将AI自动化审核率从2.79%提升至72%。",
    metrics: ["AI自动化审核率从2.79%提升至72%", "审核覆盖率从14%提升至100%", "源头解决72.9%的流程问题"],
    theme: "muted",
    detailContent: {
      role: `在此项目中，我作为AI赋能模块的产品经理（PM/UX），独立负责了从0到1的完整产品闭环。我的核心职责是将AI能力无缝集成到传统的汽车售后SaaS工作流中，以解决理赔审核的效率和准确性瓶颈。

我的主要贡献包括：

• 主导（Led）：主导了AI赋能点的探索。通过分析业务现状（年均40万单理赔，人工审核覆盖率仅14%），我精准定位了'延保理赔资料审核'是AI介入的最佳切入点。

• 定义（Defined）：深入梳理系统逻辑与业务痛点，撰写了完整的PRD，定义了AI审核工作流的SOG（Standard Operating Guidelines），并主导了AI方案选型（在智能体、微调模型和工作流之间，选择了最适合规则审核的'AI工作流'架构）。

• 设计（Designed）：我设计了从AI预审到人工复核的完整流程，并产出了关键界面的高保真原型。我的设计重点是为经销商（用户）提供一个'AI实时反馈'界面，在他们提交前即时告知不合规项，引导其修正。

• 推动（Drove）：作为核心推动者，我协调了运营、理赔专家、算法和工程团队。我主导推动业务方将庞杂的审核经验（如故障证明、工单完整性等13个检查点）提炼为AI可执行的业务规则，并持续拉取数据，驱动了项目的三期迭代优化。`,
      challenge: {
        title: "最终成果展示",
        content: [
          "我交付了一个嵌入SaaS系统的'AI理赔预审工作流'，它彻底改变了原有的审核模式（从'事后抽查'变为'事前预审'）。"
        ],
        coreQuestion: `核心流程：

1. 经销商上传：经销商在SaaS后台提交理赔申请资料（如工单、维修说明、车辆报告等）。

2. AI实时预审：我定义的AI工作流被触发，实时交叉对比所有材料的完整性、一致性和真实性（例如：工单与零件出库是否匹配）。

3. 实时UX反馈：系统（基于我的原型设计）立即向经销商返回审核结果。若不合规，则清晰展示'待修改项'及'不合规原因'，引导其即时修正。

4. 合规后提交：经销商修改并通过AI预审后，才能正式提交单据进入后续赔付流程。

这个设计在不增加运营团队负担的前提下，将审核能力覆盖到了100%的申请单据。`
      },
      validation: {
        title: "过程发现",
        process: "在项目推进过程中，我通过数据分析和用户反馈获得了两个关键洞察：",
        insights: [
          "发现1：痛点不在于'审核'，而在于'滞后'与'低效'。我分析数据发现，在事后抽查的2.6万张问题单据中，高达72.9%是'流程问题'，而仅有0.5%是'真实性问题'。这表明问题不在于审核能力，而在于审核覆盖率不足和反馈不及时。因此，我将AI的定位从'替代人工'转向'前置赋能'——即在源头帮助经销商规范资料，而非在末端'抓错'。",
          "发现2：AI的'老师'是清晰的业务规则。项目启动时，AI模型的'开箱'审核通过率仅为2.79%。这证明AI本身不懂业务。我的核心工作之一是建立一个'规则迭代闭环'：我推动业务专家定义规则，算法团队将其部署，我再通过拉取数据验证AI判断与人工判断的一致性，驱动了后续两期的迭代优化。"
        ],
        userFeedback: "通过三期迭代，我们成功将AI的审核能力从'不懂业务'提升到'可信赖的助手'，实现了质的飞跃。"
      },
      solution: {
        title: "成果与影响",
        description: "此项目成功地从0到1构建了AI审核能力，其影响是双重的：",
        modules: [
          {
            name: "审核效率（业务侧）",
            value: "AI自动化审核率从2.79%提升至72%。",
            result: "经过三期迭代优化，AI可自动审核（无需人工干预）的理赔单据比例达到了72%。这极大释放了原先依赖人工（仅14%覆盖率）的审核压力，使专家资源可以聚焦于0.5%的'真实性问题'等高风险单据。"
          },
          {
            name: "提单质量（用户侧）",
            value: "在源头解决了72.9%的流程问题。",
            result: "通过我设计的'AI预审'实时反馈界面，经销商的'流程性问题'（占问题单据的72.9%）在提交前即被拦截和修正。这显著规范了经销商的操作，提高了提单质量，缩短了理赔周期。"
          }
        ]
      },
      results: {
        title: "项目核心数据",
        achievements: [
          "AI自动化审核率：从初始的2.79%提升至72%，实现质的飞跃",
          "审核覆盖率：从人工抽查的14%提升至AI全覆盖的100%",
          "流程问题解决率：在源头拦截并解决了72.9%的流程性问题",
          "专家资源释放：使理赔专家可以将精力聚焦于0.5%的高风险真实性问题"
        ]
      },
      reflection: {
        title: "我的反思",
        insight: "通过主导这个AI赋能项目，我深刻体会到在AI项目中产品经理的独特价值。",
        shortTerm: "反思1：应更早建立'AI-Reviewer'与'人工-Reviewer'的一致性看板。项目初期我们关注的是AI的'通过率'，但更核心的指标应是AI的'判断准确率'。我应该从一开始就设计一个数据看板，A/B对比AI与人工专家的判断差异，这样能更快地定位规则盲区，缩短从2.79%到72%的迭代周期。",
        longTerm: "反思2：PM/UX在AI项目中是'翻译官'和'规则定义者'。我意识到，在AI赋能项目中，我的最大价值不是设计酷炫的界面，而是将模糊的业务痛点（如'材料不全'）'翻译'为精准的、可被机器执行的逻辑和规则，并为这套新逻辑设计一个高效的、可落地的（人机/AI机）协作流程。",
        conclusion: "这个项目让我认识到，优秀的AI产品经理需要具备三重能力：深刻理解业务本质、精准定义AI能力边界、以及设计出让AI与人协同增效的工作流。只有将技术、业务和用户体验完美融合，才能创造真正的商业价值。"
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
            src: "【待插入图片】",
            alt: "AI客服知识库构建界面",
            description: "知识库构建 - RAG文档切片与向量化存储"
          },
          {
            src: "【待插入图片】",
            alt: "AI客服对话界面",
            description: "对话界面 - 基于Gemini大模型的智能问答"
          },
          {
            src: "【待插入图片】",
            alt: "AI客服系统架构",
            description: "系统架构 - LangGraph + RAG技术栈"
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
  const [selectedProject, setSelectedProject] = useState(null);
  
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
                                          <div className="w-full h-48 bg-muted rounded-xl border-2 border-border flex items-center justify-center">
                                            <span className="text-sm text-muted-foreground">{image.src}</span>
                                          </div>
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
