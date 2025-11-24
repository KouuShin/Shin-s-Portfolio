import handClickIcon from 'figma:asset/hand-click.jpg';

export function Portfolio() {
  return (
    <section 
      id="project" 
      className="relative flex flex-col justify-between"
      style={{ 
        backgroundColor: '#000000',
        width: '1440px',
        height: '1024px',
        maxWidth: '100vw',
        margin: '0 auto',
        padding: '80px'
      }}
    >
      {/* Project Title */}
      <div>
        <h2 
          style={{
            fontFamily: "'YouYou-YiSong', serif",
            fontSize: '48px',
            fontWeight: '400',
            color: '#FFFFFF',
            letterSpacing: '0.1em',
            marginBottom: '20px'
          }}
        >
          汽车售后索赔AI
        </h2>
        <h3 
          style={{
            fontFamily: "'YouYou-YiSong', serif",
            fontSize: '32px',
            fontWeight: '300',
            color: '#FFFFFF',
            letterSpacing: '0.1em'
          }}
        >
          审核项目
        </h3>
      </div>

      {/* Content Area - Placeholder for project details */}
      <div 
        className="flex-1 my-12"
        style={{
          backgroundColor: '#E5E5E5',
          borderRadius: '20px',
          minHeight: '400px'
        }}
      />

      {/* Bottom Section */}
      <div className="flex justify-between items-end">
        {/* Tags - Left side */}
        <div className="flex flex-wrap gap-4" style={{ maxWidth: '500px' }}>
          {['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'].map((tag, i) => (
            <span 
              key={i}
              style={{
                fontFamily: "'HuXiaoBo-NanShenTi', 'Space Grotesk', sans-serif",
                fontSize: '24px',
                fontWeight: '400',
                color: '#FFFFFF',
                letterSpacing: '0.05em'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Center Tags Label */}
        <div 
          style={{
            fontFamily: "'HuXiaoBo-NanShenTi', 'Space Grotesk', sans-serif",
            fontSize: '32px',
            fontWeight: '600',
            color: '#FFFFFF',
            letterSpacing: '0.05em'
          }}
        >
          AI · VOLVO · BA
        </div>

        {/* Branding with Icon - Right side */}
        <div className="flex items-center gap-3">
          <div 
            style={{
              fontFamily: "'ZCOOL-GDH', 'HuXiaoBo-NanShenTi', sans-serif",
              fontSize: '48px',
              fontWeight: '900',
              color: '#FFFFFF',
              letterSpacing: '0.05em',
              lineHeight: '1'
            }}
          >
            SHIN
            <br />
            KOU
          </div>
          <img 
            src={handClickIcon} 
            alt="hand click"
            style={{
              width: '40px',
              height: '40px',
              filter: 'invert(1)'
            }}
          />
        </div>
      </div>
    </section>
  );
}
