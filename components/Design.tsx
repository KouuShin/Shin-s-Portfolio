export function Design() {
  return (
    <section 
      className="relative flex items-center justify-center"
      style={{ 
        backgroundColor: '#000000',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        padding: '80px'
      }}
    >
      <div className="text-center">
        <h2 
          className="neon-glow-soft"
          style={{
            fontFamily: "'ZCOOL-GDH', 'HuXiaoBo-NanShenTi', sans-serif",
            fontSize: '120px',
            fontWeight: '900',
            color: '#C0F200',
            letterSpacing: '0.05em',
            marginBottom: '40px'
          }}
        >
          DESIGN
        </h2>
        <p 
          style={{
            fontFamily: "'YouYou-YiSong', serif",
            fontSize: '32px',
            fontWeight: '300',
            color: '#FFFFFF',
            letterSpacing: '0.1em'
          }}
        >
          设计作品集
        </p>
      </div>
    </section>
  );
}
