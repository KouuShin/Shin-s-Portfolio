export function Hero() {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 md:px-8 relative pt-20 pb-32">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-32">
          {/* Section 1: Product */}
          <div className="flex items-start gap-8">
            <span className="text-7xl font-normal text-foreground leading-none mt-1">(1)</span>
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-normal text-foreground">Product</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                我是一名产品经理，专注于创造既美观又具备强大技术能力的产品。我的使命是提供能够让人们惊叹的用户体验，展示当艺术与创新相遇时，什么是可能的。
              </p>
            </div>
          </div>

          {/* Section 2: Development */}
          <div className="flex items-start gap-8">
            <span className="text-7xl font-normal text-foreground leading-none mt-1">(2)</span>
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-normal text-foreground">Development</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                我以软件开发和工程开始我的职业生涯，我非常享受通过代码构建产品的过程。开发软件让我能够快速验证产品的可行性，并帮助指导产品功能的设计。
              </p>
            </div>
          </div>

          {/* Section 3: AI Product Management */}
          <div className="flex items-start gap-8">
            <span className="text-7xl font-normal text-foreground leading-none mt-1">(3)</span>
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-normal text-foreground">AI Product Management</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                我相信技术可以改变人们的生活，而产品设计可以改变人们的思维方式。在我的职业生涯中，我在AI产品的设计和商业化落地方面积累了丰富的经验。我的目标是创造真正满足用户需求的产品，并依靠市场来验证是否有真正的需求。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
