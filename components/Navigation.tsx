import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl tracking-tight text-white hover:text-[#5B7FB3] transition-colors duration-200"
          >
            KOU XINYI
          </button>

          {/* Navigation Links */}
          <div className="flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-sm text-gray-400 hover:text-[#5B7FB3] transition-colors duration-200"
            >
              Works
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm text-gray-400 hover:text-[#B8D67F] transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('thoughts')}
              className="text-sm text-gray-400 hover:text-[#B8D67F] transition-colors duration-200"
            >
              Thoughts
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm text-gray-400 hover:text-[#2D5016] transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
