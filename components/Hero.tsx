import { Button } from "./ui/button";
import profileImage from 'figma:asset/d85704791d01226202f209a631300f5e40385ac2.png';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-background flex items-center justify-center px-6 md:px-8 relative pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左侧文字内容 */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block bg-primary px-4 py-2 rounded-full">
                  <span className="text-primary-foreground font-medium">
                    Hello, I'm
                  </span>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-foreground leading-none">
                    寇欣怡
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-muted-foreground">
                    AI产品经理 & 用户体验设计师
                  </h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  专注于AI产品设计与用户体验创新，致力于将前沿技术转化为有价值的商业产品。
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 transition-all duration-300 hover:scale-105"
                >
                  查看作品
                </Button>
                <Button 
                  onClick={onOpenResume}
                  variant="outline"
                  className="border-2 border-border hover:bg-muted rounded-full px-8 py-3 transition-all duration-300"
                >
                  个人简历
                </Button>
              </div>

              {/* 数据展示 */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-medium text-foreground">4+</div>
                  <div className="text-sm text-muted-foreground">上线功能</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-medium text-foreground">3+</div>
                  <div className="text-sm text-muted-foreground">成功项目</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-medium text-foreground">1年+</div>
                  <div className="text-sm text-muted-foreground">AI产品经验</div>
                </div>
              </div>
            </div>

            {/* 右侧图片 */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl transform rotate-6"></div>
                <img 
                  src={profileImage}
                  alt="寇欣怡"
                  className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 装饰元素 */}
        <div className="absolute top-32 left-8 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-8 w-4 h-4 bg-primary/60 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary px-4 py-2 rounded-full mb-6">
              <span className="text-primary-foreground font-medium">关于我</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
              专业背景与经历
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              结合技术理解与商业洞察，专注于AI产品的商业化落地
            </p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-foreground">
                  教育背景与工作经历
                </h3>
                
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    毕业于墨尔本大学用户体验设计专业，拥有扎实的设计理论基础和实践经验。
                    在全球顶级AI初创公司Midjourney担任产品运营，深度理解AIGC产品的用户生态与商业模式。
                  </p>
                  
                  <p className="text-foreground leading-relaxed">
                    在沃尔沃项目期间，作为产品经理主导了多个从0到1的AI应用开发，
                    特别在汽车行业AI审核和B端AI平台方面取得突破性成果。
                  </p>
                </div>
              </div>

              <div className="space-y-4 px-[0px] py-[57px]">
                <h4 className="text-xl font-medium text-foreground">核心成就</h4>
                <div className="space-y-3">
                  {[
                    '设计AI工作流，使AI审核通过率从3%提升至60%',
                    '产品设计流程从3-4个月缩短至1-2个月',
                    '成功主导多个从0到1的AI产品项目落地'
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground px-[0px] py-[15px]">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧技能标签 */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-foreground">专业技能</h4>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    '0-1产品孵化',
                    'B端产品设计',
                    'C端产品体验',
                    '业务需求洞察',
                    '跨团队协作',
                    '用户体验设计',
                    'AI创新实践',
                    'AI产品管理',
                    '国际化协作'
                  ].map((skill, index) => (
                    <div 
                      key={index}
                      className="bg-background border border-border rounded-lg px-4 py-3 text-center hover:border-primary transition-colors duration-200"
                    >
                      <span className="text-sm font-medium text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 px-[0px] py-[6px]">
                <h4 className="text-xl font-medium text-foreground">社区参与</h4>
                <div className="space-y-3">
                  {[
                    'Vibcoding社区成员',
                    'AdventureX协会成员',
                    '外滩大会AI峰会参与者',
                    "Let's Vision行业参展者"
                  ].map((community, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{community}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}