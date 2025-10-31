import { Card } from "./ui/card";

const skills = [
  {
    category: "产品管理与策略",
    subtitle: "Product Management & Strategy",
    description: "这个模块展示你作为产品经理的硬核基本功，是所有PM岗位的基石。",
    items: [
      { 
        title: "市场与需求分析", 
        desc: "擅长进行竞品分析、行业研究与用户调研，能精准识别市场机会，并转化为具体的产品需求文档（PRD）。" 
      },
      { 
        title: "从0到1产品规划", 
        desc: "具备完整的从零到一产品规划与实践经验，能够定义产品愿景、拆解核心路径、并制定可落地的产品路线图（Roadmap）。" 
      },
      { 
        title: "逻辑梳理与功能设计", 
        desc: "拥有优秀的逻辑思维能力，擅长将复杂的业务流程梳理为清晰的功能模块、信息架构和用户流程。" 
      },
      { 
        title: "数据驱动决策", 
        desc: "能够定义关键产品指标（Metrics），通过数据分析验证产品假设，并指导产品迭代优化。" 
      }
    ],
    theme: "primary"
  },
  {
    category: "用户体验与设计",
    subtitle: "User Experience & Design",
    description: "",
    items: [
      { 
        title: "用户研究与访谈", 
        desc: "精通定性与定量用户研究方法，能够独立组织和执行用户访谈、问卷调查，深度洞察用户行为与潜在痛点。" 
      },
      { 
        title: "原型设计与交互", 
        desc: "熟练运用 Figma、Sketch等工具，能快速产出低保真线框图（Wireframe）和高保真可交互原型，清晰表达产品设计方案。" 
      },
      { 
        title: "用户流程优化", 
        desc: "以'用户为中心'为设计原则，擅长设计和优化端到端的用户旅程（User Journey），提升产品的可用性与用户满意度。" 
      },
      { 
        title: "可用性测试", 
        desc: "能够设计并执行可用性测试方案，收集用户反馈，发现产品设计中的问题并推动改进。" 
      }
    ],
    theme: "muted"
  },
  {
    category: "AI与技术认知",
    subtitle: "AI & Technical Literacy",
    description: "",
    items: [
      { 
        title: "AI技术理解与应用", 
        desc: "深刻理解大语言模型（LLM）、计算机视觉（OCR）等AI技术的核心能力与应用边界，并成功将其应用于实际业务场景。" 
      },
      { 
        title: "AI产品化思维", 
        desc: "擅长将前沿AI技术能力转化为满足用户需求、解决商业问题的具体产品功能与解决方案。" 
      },
      { 
        title: "技术可行性评估", 
        desc: "能够与算法和开发团队进行高效沟通，共同评估技术方案的可行性，定义清晰的产品功能边界。" 
      },
      { 
        title: "模型效果与迭代", 
        desc: "关注AI模型在真实场景下的性能表现，能与技术团队合作，通过效果分析与bad case分析，推动工作流持续迭代优化。" 
      }
    ],
    theme: "dark"
  },
  {
    category: "综合能力与商业思维",
    subtitle: "Leadership & Business Acumen",
    description: "",
    items: [
      { 
        title: "跨团队沟通与协同", 
        desc: "具备卓越的跨团队协作能力，曾高效协同业务、算法、开发、设计、BA等多方团队，共同推动复杂项目落地。" 
      },
      { 
        title: "项目管理与推动", 
        desc: "结果导向，拥有强大的执行力，能有效管理项目进度、识别风险，确保产品按时高质量交付。" 
      },
      { 
        title: "自我驱动与快速学习", 
        desc: "对新领域（特别是AI）有极强的好奇心和学习能力，通过参与Vibcoding等社区，持续追踪和学习前沿技术与行业动态。" 
      },
      { 
        title: "商业洞察与生态认知", 
        desc: "对创业公司、商业趋势和创投生态有敏锐的洞察力，关注科技成果的商业化落地。" 
      }
    ],
    theme: "primary"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary px-4 py-2 rounded-full mb-6">
            <span className="text-primary-foreground font-medium">核心能力</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            专业技能矩阵
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            结合产品思维与技术实现，专注于将用户需求转化为有价值的产品功能，以数据驱动决策推动产品持续迭代优化
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className={`group p-8 border-2 hover:shadow-lg transition-all duration-300 rounded-2xl min-h-[500px] ${
                skill.theme === 'dark' 
                  ? 'bg-secondary text-secondary-foreground border-secondary hover:border-primary' 
                  : skill.theme === 'muted'
                  ? 'bg-muted text-foreground border-border hover:border-primary'
                  : 'bg-card text-card-foreground border-border hover:border-primary'
              }`}
            >
              {/* Category Header */}
              <div className="mb-8">
                <h3 className={`text-2xl mb-2 font-medium ${
                  skill.theme === 'dark' ? 'text-secondary-foreground' : 'text-foreground'
                }`}>
                  {skill.category}
                </h3>
                <p className={`text-base italic mb-1 ${
                  skill.theme === 'dark' ? 'text-secondary-foreground/70' : 'text-muted-foreground'
                }`}>
                  {skill.subtitle}
                </p>
              </div>
              
              {/* Skills List */}
              <div className="space-y-6">
                {skill.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <h4 className={`text-base font-medium ${
                      skill.theme === 'dark' ? 'text-secondary-foreground' : 'text-foreground'
                    }`}>
                      {item.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${
                      skill.theme === 'dark' ? 'text-secondary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}