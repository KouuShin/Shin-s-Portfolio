import profileImage from 'figma:asset/profile-image.png';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundColor: '#000000',
        width: '1440px',
        height: '1024px',
        maxWidth: '100vw',
        margin: '0 auto'
      }}
    >
      {/* Radial glow background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 40% 50%, rgba(192, 242, 0, 0.25) 0%, rgba(192, 242, 0, 0.1) 30%, transparent 60%)'
        }}
      />

      {/* Profile Image - Top Left */}
      <div className="absolute top-20 left-20">
        <img 
          src={profileImage}
          alt="寇欣怡"
          className="object-cover rounded-[40px]"
          style={{
            width: '380px',
            height: '380px',
            border: '3px solid rgba(192, 242, 0, 0.3)',
            filter: 'grayscale(100%) brightness(0.9)'
          }}
        />
      </div>

      {/* Large Name Text with Neon Glow */}
      <div 
        className="relative z-10"
        style={{
          fontFamily: "'ZCOOL-GDH', 'HuXiaoBo-NanShenTi', 'Space Grotesk', sans-serif",
          marginTop: '100px'
        }}
      >
        <h1 
          className="neon-glow"
          style={{
            fontSize: '180px',
            fontWeight: '900',
            color: '#C0F200',
            letterSpacing: '0.05em',
            lineHeight: '0.9',
            textAlign: 'center',
            textTransform: 'uppercase'
          }}
        >
          SHIN
          <br />
          KOU
        </h1>
      </div>
    </section>
  );
}

// About Section - Moved to separate component
export function About() {
  return (
    <section 
      id="about" 
      className="relative flex items-center"
      style={{ 
        backgroundColor: '#000000',
        width: '1440px',
        height: '1024px',
        maxWidth: '100vw',
        margin: '0 auto',
        padding: '0 80px'
      }}
    >
      {/* Radial glow background - left side */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 10% 50%, rgba(192, 242, 0, 0.2) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 w-full flex items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 pr-20" style={{ maxWidth: '700px' }}>
          {/* Title */}
          <h2 
            className="mb-12"
            style={{
              fontFamily: "'HuXiaoBo-NanShenTi', 'Space Grotesk', sans-serif",
              fontSize: '72px',
              fontWeight: '700',
              color: '#FFFFFF',
              letterSpacing: '0.02em',
              lineHeight: '1.2'
            }}
          >
            AI·UX·Product
          </h2>

          {/* Chinese Subtitle */}
          <h3 
            className="mb-16"
            style={{
              fontFamily: "'YouYou-YiSong', serif",
              fontSize: '36px',
              fontWeight: '400',
              color: '#FFFFFF',
              letterSpacing: '0.15em',
              lineHeight: '1.6'
            }}
          >
            科技·设计·创造
          </h3>

          {/* Description Text */}
          <div 
            className="space-y-8"
            style={{
              fontFamily: "'YouYou-YiSong', serif",
              fontSize: '24px',
              fontWeight: '300',
              color: '#FFFFFF',
              letterSpacing: '0.05em',
              lineHeight: '1.8'
            }}
          >
            <p>我致力于将前沿技术</p>
            <p>转化为实用的产品；</p>
            <p className="mt-8">探索无边界的产品创</p>
            <p>新；</p>
            <p className="mt-8">以及用户体验与人机</p>
            <p>交互的深度融合；</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <img 
            src={profileImage}
            alt="寇欣怡"
            className="object-cover rounded-[50px]"
            style={{
              width: '480px',
              height: '640px',
              border: '4px solid rgba(192, 242, 0, 0.3)',
              filter: 'grayscale(100%) brightness(0.9)'
            }}
          />
        </div>
      </div>
    </section>
  );
}
