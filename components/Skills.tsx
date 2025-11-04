const skills = [
  {
    category: "产品管理与策略",
    subtitle: "Product Management",
    items: [
      "市场与需求分析",
      "从0到1产品规划",
      "逻辑梳理与功能设计",
      "数据驱动决策",
      "产品路线图规划",
      "跨团队协作"
    ]
  },
  {
    category: "用户体验与设计",
    subtitle: "User Experience & Design",
    items: [
      "用户研究与访谈",
      "原型设计与交互",
      "用户流程优化",
      "可用性测试",
      "Figma / Sketch",
      "信息架构设计"
    ]
  },
  {
    category: "AI与技术认知",
    subtitle: "AI & Technical Literacy",
    items: [
      "AI技术理解与应用",
      "AI产品化思维",
      "技术可行性评估",
      "模型效果与迭代",
      "LLM / RAG / OCR",
      "数据分析与优化"
    ]
  },
  {
    category: "综合能力",
    subtitle: "Leadership & Business",
    items: [
      "跨团队沟通",
      "项目管理与推动",
      "自我驱动学习",
      "商业洞察",
      "国际化协作",
      "创新思维"
    ]
  }
];

const accentColors = ['#5B7FB3', '#B8D67F', '#2D5016', '#5B7FB3'];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#e8e8e8] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl text-black">Core Skills</h2>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-6 group">
              <div className="space-y-2 pb-4" style={{
                borderBottom: `2px solid ${accentColors[index]}`
              }}>
                <h3 className="text-xl text-black">{skill.category}</h3>
                <p className="text-sm text-gray-600">{skill.subtitle}</p>
              </div>
              
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700 hover:text-black transition-colors duration-200 flex items-start">
                    <span className="mr-2" style={{ color: accentColors[index] }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
