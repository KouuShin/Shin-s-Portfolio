import { Button } from "./ui/button";
import { Card } from "./ui/card";

const contactMethods = [
  {
    title: "邮箱联系",
    value: "shin_kou@163.com",
    description: "最快24小时内回复",
    icon: "📧",
    href: "mailto:shin_kou@163.com"
  },
  {
    title: "微信",
    value: "15527406960",
    description: "即时沟通交流",
    icon: "💬",
    href: null
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    description: "专业背景与经历",
    icon: "💼",
    href: "https://linkedin.com/in/yourprofile"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary px-4 py-2 rounded-full mb-6">
            <span className="text-primary-foreground font-medium">联系合作</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-medium text-secondary-foreground mb-4">
            让我们一起创造
          </h2>
          
          <div className="text-4xl md:text-5xl font-medium text-primary mb-6">
            卓越的数字体验
          </div>
          
          <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
            如果您正在寻找一位能够将产品策略转化为直观功能设计的产品经理，欢迎与我联系
          </p>
        </div>
        
        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className="group p-6 bg-background border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer rounded-2xl hover:shadow-lg"
              onClick={() => {
                if (method.href) {
                  window.open(method.href, '_blank');
                }
              }}
            >
              <div className="text-center space-y-4">
                <div className="text-3xl mb-3">
                  {method.icon}
                </div>
                
                <h3 className="text-lg font-medium text-foreground">
                  {method.title}
                </h3>
                
                <p className="text-muted-foreground text-sm break-all">
                  {method.value}
                </p>
                
                <p className="text-muted-foreground text-xs">
                  {method.description}
                </p>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 py-2 text-sm"
                  >
                    立即联系
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Main CTA Section */}
        <div className="bg-background rounded-2xl p-8 md:p-12 border-2 border-border">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                准备开始您的项目了吗？
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                我专注于将复杂的AI技术转化为用户友好的产品体验，
                帮助企业在数字化转型中创造真正的商业价值。
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-4 transition-all duration-300"
                onClick={() => {
                  window.open('mailto:shin_kou@163.com', '_blank');
                }}
              >
                发送邮件
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-xl font-medium text-foreground">24小时</div>
                <div className="text-sm text-muted-foreground">回复速度</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-medium text-foreground">远程/现场</div>
                <div className="text-sm text-muted-foreground">合作方式</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-medium text-foreground">中/英文</div>
                <div className="text-sm text-muted-foreground">沟通语言</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-medium text-foreground">全球化</div>
                <div className="text-sm text-muted-foreground">合作范围</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}