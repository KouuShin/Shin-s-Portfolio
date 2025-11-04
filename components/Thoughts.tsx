import { ImageWithFallback } from "./figma/ImageWithFallback";

const thoughts = [
  {
    title: "AI造码时代，我们需成为无障碍设计-数字包容第一人",
    imageUrl: "https://images.unsplash.com/photo-1593086784152-b060f8109e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzYyMTUzNTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "large"
  },
  {
    title: "AI机器人与AI教育的新思路",
    imageUrl: "https://images.unsplash.com/photo-1750306957357-bf6e1f8e7da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaGFpciUyMGRlc2lnbnxlbnwxfHx8fDE3NjIxNTIwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "small"
  },
  {
    title: "当AI开始\"思考\"选项：未来叙事游戏的新形态",
    imageUrl: "https://images.unsplash.com/photo-1601569561019-8350cce0eff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NjIyMjU4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "medium"
  },
  {
    title: "蚂蚁集团之碰一碰",
    imageUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50fGVufDF8fHx8MTc2MjIyNTgzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "medium"
  }
];

export function Thoughts() {
  return (
    <section id="thoughts" className="min-h-screen bg-[#e8e8e8] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-baseline mb-20">
          <h2 className="text-5xl text-black">My weekly thoughts</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
            View all →
          </a>
        </div>
        
        {/* Thoughts Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Thought 1 - Large (8 columns) */}
          <div className="col-span-12 lg:col-span-8 group cursor-pointer">
            <div className="relative aspect-[16/9] overflow-hidden bg-white border border-gray-300 hover:border-[#5B7FB3] transition-colors duration-300">
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

          {/* Thought 2 - Small (4 columns) */}
          <div className="col-span-12 lg:col-span-4 group cursor-pointer">
            <div className="relative aspect-square overflow-hidden bg-white border border-gray-300 hover:border-[#B8D67F] transition-colors duration-300">
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

          {/* Thought 3 - Medium (6 columns) */}
          <div className="col-span-12 lg:col-span-6 group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-gray-300 hover:border-[#2D5016] transition-colors duration-300">
              <ImageWithFallback
                src={thoughts[2].imageUrl}
                alt={thoughts[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-xl text-black group-hover:text-[#2D5016] transition-colors duration-200">
                {thoughts[2].title}
              </h3>
            </div>
          </div>

          {/* Thought 4 - Medium (6 columns) */}
          <div className="col-span-12 lg:col-span-6 group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden bg-white border border-gray-300 hover:border-[#2D5016] transition-colors duration-300">
              <ImageWithFallback
                src={thoughts[3].imageUrl}
                alt={thoughts[3].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-xl text-black group-hover:text-[#2D5016] transition-colors duration-200">
                {thoughts[3].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
