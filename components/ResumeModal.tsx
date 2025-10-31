import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // 防止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // 阻止点击弹窗内容时关闭弹窗
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[90vh] bg-background rounded-2xl shadow-xl border-2 border-border flex flex-col"
        onClick={handleContentClick}
      >
        {/* Close button */}
        <div className="absolute top-4 right-4 z-10">
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="h-10 w-10 p-0 rounded-full hover:bg-muted"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        
        {/* Resume content with proper scrolling */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted">
          <div className="p-8 pr-16">
            <div 
              dangerouslySetInnerHTML={{
                __html: `
                  <style>
                    .resume-content * {
                      margin: 0;
                      padding: 0;
                      box-sizing: border-box;
                    }

                    .resume-content {
                      font-family: 'Space Grotesk', sans-serif;
                      color: hsl(var(--foreground));
                      line-height: 1.7;
                      max-width: 100%;
                    }

                    .resume-content .resume-header {
                      text-align: center;
                      margin-bottom: 30px;
                      padding-bottom: 25px;
                      border-bottom: 2px solid hsl(var(--border));
                    }

                    .resume-content .resume-header h1 {
                      font-size: 2.5em;
                      margin-bottom: 12px;
                      color: hsl(var(--foreground));
                      font-weight: 600;
                    }

                    .resume-content .contact-info {
                      font-size: 1em;
                      color: hsl(var(--muted-foreground));
                      display: flex;
                      flex-wrap: wrap;
                      justify-content: center;
                      gap: 10px 20px;
                    }

                    .resume-content .contact-info a {
                      color: hsl(var(--primary));
                      text-decoration: none;
                      transition: color 0.3s ease;
                    }

                    .resume-content .contact-info a:hover {
                      text-decoration: underline;
                      opacity: 0.8;
                    }

                    .resume-content h2 {
                      font-size: 1.5em;
                      color: hsl(var(--primary-foreground));
                      margin-top: 30px;
                      margin-bottom: 15px;
                      padding: 8px 16px;
                      background: hsl(var(--primary));
                      border-radius: 8px;
                      display: inline-block;
                    }

                    .resume-content h3 {
                      font-size: 1.2em;
                      margin-top: 25px;
                      margin-bottom: 10px;
                      color: hsl(var(--foreground));
                      font-weight: 600;
                    }
                    
                    .resume-content strong {
                      color: hsl(var(--foreground));
                      font-weight: 600;
                    }

                    .resume-content p, .resume-content li {
                      font-size: 1em;
                      color: hsl(var(--muted-foreground));
                      margin-bottom: 10px;
                      line-height: 1.6;
                    }

                    .resume-content ul {
                      list-style-position: outside;
                      padding-left: 20px;
                      margin-bottom: 15px;
                    }

                    .resume-content .section {
                      margin-bottom: 30px;
                    }
                    
                    .resume-content .work-experience .job,
                    .resume-content .project-experience .project {
                      margin-bottom: 25px;
                      padding: 20px;
                      background: hsl(var(--muted));
                      border-radius: 12px;
                      border-left: 4px solid hsl(var(--primary));
                    }
                    
                    .resume-content .job-title {
                      display: flex;
                      justify-content: space-between;
                      align-items: baseline;
                      flex-wrap: wrap;
                      font-size: 1.1em;
                      font-weight: 600;
                      color: hsl(var(--foreground));
                      margin-bottom: 10px;
                    }
                    
                    .resume-content .company {
                      font-weight: 500;
                      color: hsl(var(--muted-foreground));
                      font-size: 1em;
                    }

                    @media (max-width: 768px) {
                      .resume-content .resume-header h1 {
                        font-size: 2em;
                      }
                      .resume-content h2 {
                        font-size: 1.3em;
                      }
                      .resume-content .contact-info {
                        flex-direction: column;
                        gap: 5px;
                      }
                    }
                  </style>
                  
                  <div class="resume-content">
                    <header class="resume-header">
                      <h1>寇欣怡</h1>
                      <div class="contact-info">
                        <span>电话/微信：+86 15527406960</span>
                        <span>邮箱：<a href="mailto:shin_kou@163.com">shin_kou@163.com</a></span>
                        <span>个人网站：<a href="#" target="_blank" rel="noopener noreferrer">产品作品集</a></span>
                      </div>
                    </header>

                    <div class="section" id="professional-summary">
                      <h2>个人简介</h2>
                      <p>
                        毕业于墨尔本大学用户体验设计专业,拥有顶级AI初创公司（Midjourney）产品运营经验。在沃尔沃项目期间，作为产品经理,曾主导两款从0到1的AI应用/平台开发,深刻理解AI技术与商业场景的结合。其中,主导的汽车行业AI审核项目,将模型自动化审核通过率由3%提升至60%；负责的B端AI平台,将传统需3-4个月的从0到1的SaaS产品设计流程缩短至2个月内。对创投生态充满热情,具备极强的自驱力与市场洞察力,致力于在AI领域创造颠覆性产品价值。
                      </p>
                    </div>

                    <div class="section" id="core-competencies">
                      <h2>核心优势</h2>
                      <ul>
                        <li><strong>AI产品管理 (0 to 1):</strong> 具备完整的AI产品规划、设计与落地经验,擅长将前沿AI技术与具体业务痛点结合,创造商业价值。</li>
                        <li><strong>用户体验设计 (UXD):</strong> 拥有扎实的交叉学科背景,能精准洞察用户需求,将复杂技术逻辑转化为简洁、高效的用户产品解决方案。</li>
                        <li><strong>创业精神与驱动力:</strong> 极强的自我驱动与学习能力,对AI及创投生态抱有极大热情,并积极投身于相关社区与活动。</li>
                      </ul>
                    </div>

                    <div class="section project-experience" id="project-experience">
                      <h2>项目经历</h2>
                      <div class="project">
                        <h3>汽车售后索赔AI审核项目 | 产品经理</h3>
                        <ul>
                          <li><strong>核心成就：</strong>主导从0到1构建AI审核系统,将AI自动化审核通过率从3%革命性地提升至60%,显著降低人工审核成本与时间。</li>
                          <li><strong>业务洞察:</strong> 深入一线调研汽车索赔业务全流程,精准识别出人工审核环节中的核心痛点,并定义了AI可介入的关键节点。</li>
                          <li><strong>产品设计:</strong> 创新性地设计了"图像OCR识别 + 大语言模型推理"的技术流程,负责制定业务规则、设计AI交互流程,并与算法、业务及CR多方团队高效协同。</li>
                          <li><strong>项目落地:</strong> 推动产品从概念、原型设计到测试调试的全过程,通过不断迭代优化模型规则,最终成功实现高准确率的自动化审核。</li>
                        </ul>
                      </div>
                      <div class="project">
                        <h3>Synapse AI工作流平台 | 产品经理</h3>
                        <ul>
                          <li><strong>核心成就：</strong>负责从0到1构建AI赋能平台,将原本需3-4个月的设计开发流程颠覆性地缩短至1-2个月,实现了对新需求的敏捷响应。</li>
                          <li><strong>价值创新:</strong> 极大降低了产品经理的技术门槛,使其不依赖开发团队即可快速生成高保真原型与流程图,将想法快速验证。</li>
                          <li><strong>流程优化:</strong> 通过整合工作流,解决了PM需在多个工具间频繁切换的核心痛点,将从构思到设计的主要工作流程闭环在一个平台内完成。</li>
                          <li><strong>团队协作:</strong> 作为产品负责人,与开发及海外BA团队紧密合作,明确技术边界与可行性,主导完成了从需求分析到平台上线落地的全过程。</li>
                        </ul>
                      </div>
                    </div>

                    <div class="section work-experience" id="work-experience">
                      <h2>工作经历</h2>
                       <div class="job">
                          <p class="job-title">Midjourney <span class="company">| 产品运营</span></p>
                          <ul>
                              <li>深入全球领先的AI生成内容（AIGC）公司,负责产品运营工作,理解前沿AIGC产品的用户生态与商业需求。</li>
                              <li>在职期间,独立负责并主导新媒体运营。</li>
                          </ul>
                      </div>
                      <div class="job">
                         <p class="job-title">Volvo <span class="company">| 产品经理</span></p>
                          <ul>
                              <li>理解业务需求，梳理业务逻辑，提供可实施的解决方案。</li>
                              <li>在职期间,独立负责2个AI项目。</li>
                              <li>和项目管理、开发、测试团队紧密合作，确保功能准时上线。</li>
                          </ul>
                      </div>
                    </div>

                    <div class="section" id="education">
                      <h2>教育背景</h2>
                      <div class="job">
                        <p><strong>墨尔本大学 (University of Melbourne)</strong><br>
                        用户体验设计本科 (Bachelor of Design) [2025]</p>
                      </div>
                    </div>

                    <div class="section" id="community-interests">
                      <h2>社区活动与个人兴趣</h2>
                      <ul>
                        <li>积极参与外滩大会、Let's Vision等头部AI行业峰会,追踪行业前沿趋势。</li>
                        <li>作为Vibcoding及AdventureX社区成员,深度融入新一代AI创造者与创业者社群,积极探索AI领域的创新机会。</li>
                      </ul>
                    </div>
                  </div>
                `
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}