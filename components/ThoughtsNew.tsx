export function Thoughts() {
  return (
    <section 
      id="thoughts" 
      className="relative flex items-center justify-center"
      style={{ 
        backgroundColor: '#000000',
        width: '1440px',
        height: '1024px',
        maxWidth: '100vw',
        margin: '0 auto',
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
          THOUGHTS
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
          思考与洞察
        </p>
      </div>
    </section>
  );
}
