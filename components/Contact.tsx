interface ContactProps {
  onOpenResume: () => void;
}

export function Contact({ onOpenResume }: ContactProps) {
  return (
    <section id="contact" className="bg-black py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-white mb-8">
            • Let's make something crazy together
          </h2>
          <a 
            href="mailto:shin_kou@163.com"
            className="text-2xl text-[#5B7FB3] hover:text-[#B8D67F] transition-colors duration-300"
          >
            shin_kou@163.com
          </a>
          <p className="text-lg text-gray-500 mt-4">
            微信号：15527406960
          </p>
        </div>

        {/* Footer Links */}
        <div className="border-t border-white/10 pt-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left - Social */}
            <div className="space-y-3">
              <a href="#" className="block text-sm text-gray-400 hover:text-[#5B7FB3] transition-colors duration-200">
                Instagram
              </a>
              <a href="#" className="block text-sm text-gray-400 hover:text-[#5B7FB3] transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="block text-sm text-gray-400 hover:text-[#5B7FB3] transition-colors duration-200">
                Redbook
              </a>
            </div>

            {/* Center - Nav */}
            <div className="space-y-3">
              <a href="#portfolio" className="block text-sm text-gray-400 hover:text-[#B8D67F] transition-colors duration-200">
                Work
              </a>
              <a href="#about" className="block text-sm text-gray-400 hover:text-[#B8D67F] transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="block text-sm text-gray-400 hover:text-[#B8D67F] transition-colors duration-200">
                Contact
              </a>
              <a href="#thoughts" className="block text-sm text-gray-400 hover:text-[#B8D67F] transition-colors duration-200">
                Thoughts
              </a>
            </div>

            {/* Right - Info */}
            <div className="space-y-3 text-right">
              <p className="text-sm text-gray-400">
                © 寇欣怡 2024
              </p>
              <p className="text-sm text-gray-400">
                AI Product Manager
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-600">
            Made with passion & AI ✨
          </p>
        </div>
      </div>
    </section>
  );
}
