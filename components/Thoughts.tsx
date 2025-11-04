import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";

const thoughts = [
  {
    id: 1,
    title: "AI造码时代，我们需成为无障碍设计-数字包容第一人",
    imageUrl: "https://images.unsplash.com/photo-1593086784152-b060f8109e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzYyMTUzNTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "large",
    content: null
  },
  {
    id: 2,
    title: "AI机器人与AI教育的新思路",
    imageUrl: "https://images.unsplash.com/photo-1750306957357-bf6e1f8e7da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaGFpciUyMGRlc2lnbnxlbnwxfHx8fDE3NjIxNTIwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "small",
    content: null
  },
  {
    id: 3,
    title: "当AI开始\"思考\"选项：未来叙事游戏的新形态",
    imageUrl: "https://images.unsplash.com/photo-1601569561019-8350cce0eff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NjIyMjU4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "medium",
    content: `在传统叙事游戏里，我们的选择往往来自编剧写好的if/else 树。

选项是有限的、被预设的，而玩家的体验是在固定的轨道上游走。

这种模式支撑了从《质量效应》到《底特律:变人》的一整个时代。

但它也意味着一个事实--玩家并非真的在"思考"而是在执行选择。

## 从"剧情生成"到"选项生成"的转向

当AI进入叙事领域时，很多人第一反应是"AI能不能直接写出整个故事?"

但我更关注另一个方向:

AI不需要写剧情，它只需要"思考选项"。

在我设想的游戏中-

故事主线仍由编剧设定，编剧是世界观的建筑师。

AI则成为叙事过程中的"推理器"。

它会基于玩家之前的选择、留言、甚至情绪倾向,去生成一个符合逻辑、但充满张力的选项集。这些选项不是编剧提前写好的，而是AI通过reasoning 推导出的"下一步"。

## AI如何思考选项

可以想象这样的场景:

你在游戏中已经多次选择了和平路线，但AI通过分析你的一句留言--"有时候，温和会让人更痛苦"，

于是生成了一个完全不同的选项:

"也许他们该看看我们被逼到绝境时的样子。这不再是预设分支，而是AI对你的"人格数据"的推理产物。

它既符合你的逻辑，也挑战你的内在矛盾。

选项变得有生命，它能读懂你的思考。

## 三、道德困境的动态生成

真正吸引我的地方在于一

当AI能生成不同的选项，它就能制造"道德困境"

有时候，AI会故意生成与你价值观相悖的选择。这些选择可能来自其他玩家的思维模型，

也可能是AI综合群体样本后认为"值得你去面对的对立面"。

这意味着:

玩家不再只是沉浸于自我，而是不断被迫直视"另一种人"的思考方式。

这种体验，不仅是一种游戏机制，更是一种社会学的共鸣。

## 四、结尾不再是"结局".而是"镜像"

(这只是其中一种玩法)

在这种游戏形态中，故事的结尾并不是"完成任务"或"解锁结局"。

AI会根据你一路的选择，生成一份个性化的"道德画像报告":

你倾向的价值排序(自由vs秩序、利己 vs 利他)、你的情感波动模式、你与群体的差异度

甚至还能看到与你完全对立的玩家是如何走到相反结局的。

游戏的终点，变成了一面镜子--照见自己的道德与他人的世界。

## 五、这不是底特律的延伸，而是一种新的范式

我并不认为这是一种"底特律模式的进化"而是一个全新的游戏范式。

编剧的工作边界从"写出全部"转变为"构建叙事框架"。

AI成为"选项生成器"，在框架内不断推理、创造、挑战。

玩家不再是单向参与者，而是真正与系统"共创叙事"的个体。

这是一种新的"人机协作叙事"形态。

它的核心不是AI写得多聪明，而是-AI开始具备了伦理推理与社会思辨的能力。

## 结语

或许未来的某天，我们玩到的不是"有多个结局"的游戏，而是"有无限自我映射"的游戏。在那样的世界里，

每一个选择都不只是推动剧情,更是一次关于人性的回答。`
  },
  {
    id: 4,
    title: "蚂蚁集团之碰一碰",
    imageUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50fGVufDF8fHx8MTc2MjIyNTgzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "medium",
    content: `蚂蚁集团升级"碰一碰"设备，建议与商家共享广告收益，构建共生生态。

2025年外滩大会归来，作为主办方的蚂蚁集团，其无处不在的"碰一碰"技术给我留下了最深刻的印象。能感受到，蚂蚁正致力于将"碰一碰"从一个支付动作，升级为一种融入生活肌理的交互习惯，彻底替代过去的二维码。

在支付展台，一个细节引发了我的注意:新一代的"碰一碰"设备都配备了屏幕。与现场人员交流后，我得到了一个大胆的猜想--这块小小的屏幕，未来将是潜力巨大的广告媒介，为集团开辟全新的盈利模式。当千万商家都铺设此设备时，其商业价值不可估量。

这立刻引出了我的核心思考:平台利用商家的场景和客流来创造新的广告营收，那么，商家作为生态的基石，是否也应分享这份收益?

目前的地推模式是"免费送机器"，这在初期很有效。但如今的商家已不满足于单纯节省几十块的硬件成本。他们明白，每一次交易都是在用自己的客流为平台的商业帝国添砖加瓦。他们是事实上的"推广者"却无法从平台未来的增长中获益。

因此，我提出了一个建议:蚂蚁集团能否将这块屏幕带来的广告收益，以一定比例与小微商户共享?这并非简单的让利，而是一次深刻的商业模式升级:

## 1.关系重塑

商家不再是被动的技术使用者，而是升级为共享收益的"生态合伙人"，这将建立远比免费硬件更牢固的合作关系。

## 2.激励升级

激励的核心从"成本节省"转变为"收益共创"。商家将更有动力去主动推广和探索"碰一碰"的创新应用，真正激活整个生态。

总而言之，一个健康且可持续的商业生态，核心在于"价值共生"。我期待蚂蚁这样的领军者，能引领行业构建一个携手共创、成果共享的未来。因为当生态中的每个参与者都能分享到成长的红利时，这个生态才拥有最坚实的根基。`
  }
];

export function Thoughts() {
  const [selectedThought, setSelectedThought] = useState<typeof thoughts[0] | null>(null);

  const renderContent = (content: string | null) => {
    if (!content) return null;
    
    // 将内容按双换行分割成段落
    const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0);
    
    return (
      <div className="space-y-6">
        {paragraphs.map((para, index) => {
          const trimmedPara = para.trim();
          
          // 检查是否是Markdown标题（以##开头）
          if (trimmedPara.startsWith('## ')) {
            const title = trimmedPara.replace('## ', '').trim();
            return (
              <h3 key={index} className="text-2xl font-light text-white mt-10 mb-6 first:mt-0 tracking-wide">
                {title}
              </h3>
            );
          }
          
          // 检查是否是中文数字标题（如"三、"、"四、"等）
          if (/^[一二三四五六七八九十]+、/.test(trimmedPara)) {
            const lines = trimmedPara.split('\n');
            const title = lines[0].trim();
            const rest = lines.slice(1).join('\n').trim();
            
            return (
              <div key={index}>
                <h3 className="text-2xl font-light text-white mt-10 mb-6 first:mt-0 tracking-wide">
                  {title}
                </h3>
                {rest && (
                  <p className="text-base font-light text-gray-300 leading-relaxed mt-4">
                    {rest}
                  </p>
                )}
              </div>
            );
          }
          
          // 普通段落
          return (
            <p key={index} className="text-base font-light text-gray-300 leading-relaxed tracking-wide">
              {trimmedPara}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <section id="thoughts" className="min-h-screen bg-[#e8e8e8] py-32 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-baseline mb-20">
            <h2 className="text-5xl text-black">My weekly thoughts</h2>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
              View all →
            </a>
          </div>
          
          {/* Thoughts Dashboard Grid */}
          <div className="grid grid-cols-12 gap-6 auto-rows-fr">
            {/* Top Row */}
            {/* Thought 1 - Large (top-left, spans 8 columns, 2 rows) */}
            <div 
              className="col-span-12 lg:col-span-8 row-span-2 group cursor-pointer"
              onClick={() => thoughts[0].content && setSelectedThought(thoughts[0])}
            >
              <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden bg-white border border-gray-300 hover:border-[#5B7FB3] transition-colors duration-300 shadow-lg">
                <ImageWithFallback
                  src={thoughts[0].imageUrl}
                  alt={thoughts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-2xl text-black group-hover:text-[#5B7FB3] transition-colors duration-200">
                  {thoughts[0].title}
                </h3>
              </div>
            </div>

            {/* Thought 2 - Small (top-right, spans 4 columns) */}
            <div 
              className="col-span-12 lg:col-span-4 group cursor-pointer"
              onClick={() => thoughts[1].content && setSelectedThought(thoughts[1])}
            >
              <div className="relative h-full min-h-[240px] rounded-xl overflow-hidden bg-white border border-gray-300 hover:border-[#B8D67F] transition-colors duration-300 shadow-lg">
                <ImageWithFallback
                  src={thoughts[1].imageUrl}
                  alt={thoughts[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-lg text-black group-hover:text-[#B8D67F] transition-colors duration-200">
                  {thoughts[1].title}
                </h3>
              </div>
            </div>

            {/* Middle Row */}
            {/* Thought 3 - Small (middle, spans 4 columns) */}
            <div 
              className="col-span-12 lg:col-span-4 group cursor-pointer"
              onClick={() => thoughts[2].content && setSelectedThought(thoughts[2])}
            >
              <div className="relative h-full min-h-[240px] rounded-xl overflow-hidden bg-white border border-gray-300 hover:border-[#B8D67F] transition-colors duration-300 shadow-lg">
                <ImageWithFallback
                  src={thoughts[2].imageUrl}
                  alt={thoughts[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-lg text-black group-hover:text-[#B8D67F] transition-colors duration-200">
                  {thoughts[2].title}
                </h3>
              </div>
            </div>

            {/* Thought 4 - Small (middle, spans 4 columns) */}
            <div 
              className="col-span-12 lg:col-span-4 group cursor-pointer"
              onClick={() => thoughts[3].content && setSelectedThought(thoughts[3])}
            >
              <div className="relative h-full min-h-[240px] rounded-xl overflow-hidden bg-white border border-gray-300 hover:border-[#B8D67F] transition-colors duration-300 shadow-lg">
                <ImageWithFallback
                  src={thoughts[3].imageUrl}
                  alt={thoughts[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-lg text-black group-hover:text-[#B8D67F] transition-colors duration-200">
                  {thoughts[3].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Detail Modal */}
      {selectedThought && selectedThought.content && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedThought(null)}
        >
          <div className="min-h-screen py-12 px-4">
            <div 
              className="max-w-5xl mx-auto bg-gray-900 border border-[#5B7FB3]/30 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedThought(null)}
                className="absolute top-6 right-6 text-white hover:text-[#5B7FB3] transition-colors duration-200 z-10"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Content */}
              <div className="p-12">
                {/* Header */}
                <div className="mb-12">
                  <h2 className="text-4xl font-light text-white mb-4 tracking-wide">{selectedThought.title}</h2>
                </div>

                {/* Image */}
                <div className="mb-12">
                  <ImageWithFallback
                    src={selectedThought.imageUrl}
                    alt={selectedThought.title}
                    className="w-full aspect-video object-cover border border-[#5B7FB3]/20 rounded-lg"
                  />
                </div>

                {/* Content with thin font */}
                <div className="prose prose-invert max-w-none">
                  {renderContent(selectedThought.content)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
