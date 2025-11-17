export function Contact() {
  return (
    <section id="contact" className="py-32 px-8" style={{ backgroundColor: '#050505' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-8" style={{ color: '#C0F200' }}>
            让我们一起推动、探索边界并创造。
          </h2>
          <a 
            href="mailto:shin_kou@163.com"
            className="text-2xl transition-colors duration-300"
            style={{ color: '#C0F200' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FAFAF0'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#C0F200'}
          >
            shin_kou@163.com
          </a>
          <p className="text-lg mt-4" style={{ color: '#808080' }}>
            微信号：15527406960
          </p>
        </div>

        {/* Footer Links */}
        <div className="border-t pt-12" style={{ borderColor: 'rgba(192, 242, 0, 0.2)' }}>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left - Social */}
            <div className="space-y-3">
              <a href="#" className="block text-sm transition-colors duration-200" style={{ color: '#808080' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C0F200'} onMouseLeave={(e) => e.currentTarget.style.color = '#808080'}>
                Instagram
              </a>
              <a href="#" className="block text-sm transition-colors duration-200" style={{ color: '#808080' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C0F200'} onMouseLeave={(e) => e.currentTarget.style.color = '#808080'}>
                Twitter
              </a>
              <a href="#" className="block text-sm transition-colors duration-200" style={{ color: '#808080' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C0F200'} onMouseLeave={(e) => e.currentTarget.style.color = '#808080'}>
                Redbook
              </a>
            </div>

            {/* Center - Nav */}
            <div className="space-y-3">
              <a href="#portfolio" className="block text-sm transition-colors duration-200" style={{ color: '#808080' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C0F200'} onMouseLeave={(e) => e.currentTarget.style.color = '#808080'}>
                Work
              </a>
              <a href="#about" className="block text-sm transition-colors duration-200" style={{ color: '#808080' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C0F200'} onMouseLeave={(e) => e.currentTarget.style.color = '#808080'}>
                About
              </a>
              <a href="#contact" className="block text-sm transition-colors duration-200" style={{ color: '#808080' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C0F200'} onMouseLeave={(e) => e.currentTarget.style.color = '#808080'}>
                Contact
              </a>
              <a href="#thoughts" className="block text-sm transition-colors duration-200" style={{ color: '#808080' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C0F200'} onMouseLeave={(e) => e.currentTarget.style.color = '#808080'}>
                Thoughts
              </a>
            </div>

            {/* Right - Info */}
            <div className="space-y-3 text-right">
              <p className="text-sm" style={{ color: '#808080' }}>
                © 寇欣怡 2024
              </p>
              <p className="text-sm" style={{ color: '#808080' }}>
                AI Product Manager
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 text-center">
          <p className="text-xs" style={{ color: '#808080' }}>
            Made with passion & AI ✨
          </p>
        </div>
      </div>
    </section>
  );
}
