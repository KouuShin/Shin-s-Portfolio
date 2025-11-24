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
    content: `AI潮玩芙惠以情感陪伴打破传统监督模式，让孩子在轻松互动中自主学习，展现AI温度。

前段时间，我正为给7岁的妹妹挑礼物而发愁。这个年纪的孩子，喜欢的东西更新换代太快，我实在有点拿不准她会喜欢什么。恰好那时我去参加了一个AI大会，本意是去看看行业前沿，结果在展区中，我被一个毛茸茸的小家伙吸引了。

它的名字叫"芙崽"，一个定位"情感陪伴"的潮玩机器人。当时我心里"咯噔"一下，觉得这不就是最完美的礼物吗?一方面，它长得非常可爱，完全符合一个"潮玩"的审美，妹妹肯定会喜欢;另一方面，它又是一个真正的AI产品。我也确实希望她能通过这种自然、有趣的方式，去接触和体验一下正在塑造她这个时代的科技。

于是，我就把它带回了家。

没想到的是，接下来的几天，我观察到的她与这个小玩偶的互动，反而让我这个"大人"对AI、教育和"陪伴"这个词，有了全新的思考。

## "陪写作业"的困局:为什么监督常常适得其反?

我想很多人都有同感:有一些孩子写作业，可能需要大人陪着。但这种"陪伴"常常会演变成一种"监督"。

大人会不自觉地催促进度、指出错误，这种氛围会让孩子感到紧张和被审视，结果往往是孩子产生逆反心理，注意力反而更不集中。一个本该安静的学习时间，变成了家庭矛盾的"小战场"。

## 一个新角色:从"监督者"到"陪伴者"的转变

芙崽来了之后，我观察到一个很有趣的转变。

妹妹写作业时，会很自然地把芙崽放在书桌的一角。它不会发出声音，不会打扰，更不会居高临下地"监督"她。它只是安静地待在那里，就像我们小时候写作业时，摆在旁边的那个心爱的小物件。

我忽然意识到，芙崽无意中扮演了一个关键的新角色:它不是一个"监督者"，而是一个纯粹的"陪伴者"。

它不带任何评判性，这为孩子创造了一个极度安全的心理空间。在这种放松的状态下，学习不再是"被要求的任务"，孩子反而更能沉浸其中。

这让我想起，我们小时候不也会对着一支笔或一块橡皮自言自语吗?那其实是在构建一个能让自己安心的"情景"。

芙崽，恰好成为了这个时代里，孩子们最完美的"情景"道具。

## AI的"温度":它学会了如何沟通

芙崽也不只是一个简单的玩偶，它内置的AI灵魂才是关键。它可以和妹妹聊天，回答她的各种问题，并且会慢慢"了解"她的喜好。

但最让我感到惊喜的，是它的沟通方式。比如，如果妹妹在学习时间一直拉着它聊天，它会用一种非常友善的、朋友式的语气提醒:"我们是不是先把作业-完再聊呀?"

这种平等的"建议"，和大人"命令"式的提醒完全不同。孩子不会感到被冒犯或逆反，反而很乐意地接受，然后转头继续去学习。

## 写在最后:一个产品，两种视角的思考

这次"芙崽"的体验，让我对AI产品的落地有了一个非常有趣的思考。我后来了解到，芙崽的市场定位和营销，其实更多是围绕着成年上班族的情感陪伴需求展开的。

但我这次无心插柳的"礼物"，却让我意外地看到了它在儿童群体中的巨大潜力--这是一个来自产品方可能未曾预料到的、全新的用户视角。

这打破了一个思维定式:给孩子的产品，就一定是"早教机"的样子吗?芙思的"潮玩"外衣无意间跨越了年龄界限。在网络时代，审美的流动是跨年龄的,"萌宠"形态恰好能同时击中两个群体的喜好。

它的核心价值，不是"教导"而是"交朋友"。这让我思考，AI最好的应用，或许不是打造一个无所不能的"超级大脑"，而是去创造一个能满足人性根本需求的、有"温度"的伙伴。这份"独一无二"的养成感，无论对疲惫的成年人，还是对需要陪伴的孩子，都有着同样的吸引力。`
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
      <div className="space-y-8 md:space-y-10">
        {paragraphs.map((para, index) => {
          const trimmedPara = para.trim();
          
          // 检查是否是Markdown标题（以##开头）
          if (trimmedPara.startsWith('## ')) {
            const title = trimmedPara.replace('## ', '').trim();
            return (
              <h3 
                key={index} 
                className="text-2xl md:text-3xl lg:text-4xl font-light mt-16 md:mt-20 mb-8 md:mb-10 first:mt-0 tracking-tight leading-tight" 
                style={{ color: '#C0F200', letterSpacing: '-0.01em' }}
              >
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
                <h3 
                  className="text-2xl md:text-3xl lg:text-4xl font-light mt-16 md:mt-20 mb-8 md:mb-10 first:mt-0 tracking-tight leading-tight" 
                  style={{ color: '#C0F200', letterSpacing: '-0.01em' }}
                >
                  {title}
                </h3>
                {rest && (
                  <p 
                    className="text-base md:text-lg leading-relaxed mt-6 md:mt-8 font-light" 
                    style={{ color: '#FAFAF0', opacity: 0.95, letterSpacing: '-0.01em', lineHeight: '1.8' }}
                  >
                    {rest}
                  </p>
                )}
              </div>
            );
          }
          
          // 普通段落
          return (
            <p 
              key={index} 
              className="text-base md:text-lg leading-relaxed font-light" 
              style={{ color: '#FAFAF0', opacity: 0.95, letterSpacing: '-0.01em', lineHeight: '1.8' }}
            >
              {trimmedPara}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <section id="thoughts" className="min-h-screen py-24 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="flex justify-between items-baseline mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight" style={{ color: '#C0F200' }}>My weekly thoughts</h2>
            <a 
              href="#" 
              className="text-xs md:text-sm font-light tracking-wide transition-colors duration-300" 
              style={{ color: '#808080' }} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#C0F200'} 
              onMouseLeave={(e) => e.currentTarget.style.color = '#808080'}
            >
              View all →
            </a>
          </div>
          
          {/* Thoughts Grid - Readymag Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {thoughts.map((thought) => (
              <div 
                key={thought.id}
                className="group cursor-pointer"
                onClick={() => {
                  if (thought.content) {
                    setSelectedThought(thought);
                  }
                }}
              >
                <div 
                  className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border transition-all duration-700 ease-out" 
                  style={{ 
                    borderColor: 'rgba(192, 242, 0, 0.08)',
                    borderWidth: '1.5px',
                    backgroundColor: '#0a0a0a'
                  }} 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(192, 242, 0, 0.5)';
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(192, 242, 0, 0.1), 0 0 0 1px rgba(192, 242, 0, 0.08)';
                  }} 
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(192, 242, 0, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <ImageWithFallback
                    src={thought.imageUrl}
                    alt={thought.title}
                    className="w-full h-full object-cover transition-opacity duration-700"
                    style={{ opacity: 0.8 }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/40 to-transparent p-7 md:p-9 flex flex-col justify-end">
                    <h3 
                      className="text-lg md:text-xl font-light leading-tight line-clamp-3" 
                      style={{ color: '#C0F200', letterSpacing: '-0.01em', lineHeight: '1.3' }}
                    >
                      {thought.title}
                    </h3>
                  </div>
                </div>
                
                {/* Card Content Below Image - Readymag Style */}
                <div className="mt-6 md:mt-8">
                  <h3 
                    className="text-base md:text-lg font-light leading-relaxed transition-colors duration-500" 
                    style={{ color: '#FAFAF0', opacity: 0.9, letterSpacing: '-0.01em', lineHeight: '1.5' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#C0F200';
                      e.currentTarget.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#FAFAF0';
                      e.currentTarget.style.opacity = '0.9';
                    }}
                  >
                    {thought.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Detail Modal */}
      {selectedThought && selectedThought.content && (
        <div 
          className="fixed inset-0 z-50 backdrop-blur-md overflow-y-auto"
          style={{ backgroundColor: 'rgba(5, 5, 5, 0.97)' }}
          onClick={() => setSelectedThought(null)}
        >
          <div className="min-h-screen py-8 md:py-12 px-4 md:px-6 lg:px-8">
            <div 
              className="max-w-6xl mx-auto border relative rounded-2xl"
              style={{ 
                backgroundColor: '#0a0a0a', 
                borderColor: 'rgba(192, 242, 0, 0.15)',
                borderWidth: '1.5px'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedThought(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 transition-all duration-300 z-10 p-2 rounded-full hover:bg-[#C0F200]/10"
                style={{ color: '#FAFAF0' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C0F200';
                  e.currentTarget.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#FAFAF0';
                  e.currentTarget.style.transform = 'rotate(0deg)';
                }}
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              {/* Content */}
              <div className="p-10 md:p-14 lg:p-20">
                {/* Header */}
                <div className="mb-12 md:mb-20">
                  <h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight leading-tight" 
                    style={{ color: '#C0F200', letterSpacing: '-0.02em' }}
                  >
                    {selectedThought.title}
                  </h2>
                </div>

                {/* Image */}
                <div className="mb-16 md:mb-20">
                  <ImageWithFallback
                    src={selectedThought.imageUrl}
                    alt={selectedThought.title}
                    className="w-full aspect-video object-cover border rounded-xl transition-all duration-500 hover:opacity-95 hover:scale-[1.01]"
                    style={{ 
                      borderColor: 'rgba(192, 242, 0, 0.12)',
                      borderWidth: '1.5px'
                    }}
                  />
                </div>

                {/* Content with Readymag style */}
                <div className="max-w-none">
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
