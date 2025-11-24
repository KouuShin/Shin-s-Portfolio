export function Contact() {
  return (
    <section 
      id="contact" 
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
          CONTACT
        </h2>
        <div 
          style={{
            fontFamily: "'YouYou-YiSong', serif",
            fontSize: '28px',
            fontWeight: '300',
            color: '#FFFFFF',
            letterSpacing: '0.05em',
            lineHeight: '1.8'
          }}
        >
          <p className="mb-6">shin_kou@163.com</p>
          <p>微信号：15527406960</p>
        </div>
      </div>
    </section>
  );
}
