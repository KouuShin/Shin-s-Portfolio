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
      <section className="min-h-screen bg-black flex items-center justify-center px-8 relative pt-20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="flex flex-col items-center space-y-12">
            {/* Profile Image */}
            <div className="relative">
              <img 
                src={profileImage}
                alt="寇欣怡"
                className="w-48 h-48 object-cover grayscale rounded-[25px]"
              />
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl text-white tracking-tight">
                AI Product Manager, Designer
              </h1>
              
              <div className="space-y-3 max-w-2xl mx-auto">
                <p className="text-lg text-gray-400">
                  墨尔本大学UX设计专业毕业
                </p>
                <p className="text-lg text-gray-400">
                  致力于将AI技术转化为有价值的产品体验
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-[#5B7FB3] text-white hover:bg-[#B8D67F] hover:text-black transition-all duration-300 rounded-[15px]"
            >
              Chat With Me
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-sm text-gray-500">
          <span>Homepage 2010-24</span>
          <span>©寇欣怡 2024</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-[#e8e8e8] py-32 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Intro Statement */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl text-black leading-relaxed max-w-4xl">
              AI · 科技 · 设计 · 创造
              <br />
              我致力于将前沿技术转化为实用的商业产品，
              <br />
              探索无边界的产品创新，
              <br />
              以及用户体验与人机交互的深度融合。
            </h2>
          </div>

          {/* Three Columns */}
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6 group">
              <h3 className="text-xl text-black border-b-2 border-[#5B7FB3] inline-block pb-2">(1) Product</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                作为产品经理，我专注于从0到1的产品孵化，
                擅长将复杂的业务需求转化为清晰的产品方案。
                通过用户研究和数据分析，我能够精准定位产品价值，
                并通过高效的跨团队协作推动产品落地。
              </p>
            </div>

            <div className="space-y-6 group">
              <h3 className="text-xl text-black border-b-2 border-[#B8D67F] inline-block pb-2">(2) AI & Technology</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                深度理解AI技术能力与应用边界，
                曾主导多个AI产品项目，包括智能审核系统、
                AI工作流平台等。擅长将大语言模型、
                计算机视觉等AI技术转化为实际的产品功能，
                并通过持续迭代优化模型效果。
              </p>
            </div>

            <div className="space-y-6 group">
              <h3 className="text-xl text-black border-b-2 border-[#2D5016] inline-block pb-2">(3) Design</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                拥有用户体验设计专业背景，
                精通Figma等设计工具，能够快速产出高保真原型。
                坚持以用户为中心的设计原则，
                通过用户研究和可用性测试，
                持续优化产品的易用性和用户满意度。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
